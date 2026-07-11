// ─────────────────────────────────────────────────────────────
// Static prerender (SSG). After the client + SSR builds, render each
// canonical route to a static HTML file with real content AND correct
// head tags baked in — so crawlers and no-JS clients get a full page.
// Routes that fail to server-render degrade gracefully to a CSR shell
// that still carries the correct <title>/description/canonical/OG tags.
// ─────────────────────────────────────────────────────────────
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const distDir = path.join(root, 'dist')
const serverEntry = pathToFileURL(path.join(root, 'dist-server', 'entry-server.js')).href

const { render, canonicalRoutes, resolveSeo } = await import(serverEntry)

const SITE_URL = 'https://tipcoengineering.com'
const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')

// Emit sitemap.xml from the same canonical route list we prerender.
function writeSitemap(routes) {
  const lastmod = new Date().toISOString().slice(0, 10)
  const body = routes
    .map(
      r =>
        `  <url>\n    <loc>${SITE_URL}${r === '/' ? '/' : r}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`,
    )
    .join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml)
  console.log(`[sitemap] wrote ${routes.length} URLs to dist/sitemap.xml`)
}

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function headTags(seo) {
  const ogType = seo.type === 'product' ? 'product' : 'website'
  return [
    `<title>${esc(seo.title)}</title>`,
    `<meta name="description" content="${esc(seo.description)}" />`,
    `<link rel="canonical" href="${esc(seo.canonical)}" />`,
    `<meta property="og:site_name" content="Tipco Engineering" />`,
    `<meta property="og:title" content="${esc(seo.title)}" />`,
    `<meta property="og:description" content="${esc(seo.description)}" />`,
    `<meta property="og:url" content="${esc(seo.canonical)}" />`,
    `<meta property="og:type" content="${ogType}" />`,
    `<meta property="og:image" content="${esc(seo.image)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(seo.title)}" />`,
    `<meta name="twitter:description" content="${esc(seo.description)}" />`,
    `<meta name="twitter:image" content="${esc(seo.image)}" />`,
  ].join('\n    ')
}

// Strip the placeholder <title> and homepage <meta name="description"> from
// the built template so each page gets its own, with no duplicates.
function stripDefaults(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/i, '')
    .replace(/<meta\b[^>]*\bname=["']description["'][^>]*>/i, '')
}

const routes = canonicalRoutes()
writeSitemap(routes)
let ok = 0
let fallback = 0

for (const route of routes) {
  const seo = resolveSeo(route)
  let appHtml = ''
  try {
    appHtml = render(route)
    ok++
  } catch (err) {
    fallback++
    console.warn(`[prerender] CSR fallback for ${route}: ${err.message}`)
  }

  const html = stripDefaults(template)
    .replace('</head>', `  ${headTags(seo)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  const outPath =
    route === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route, 'index.html')
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, html)
}

console.log(`[prerender] ${routes.length} routes → ${ok} server-rendered, ${fallback} CSR fallback`)

// The SSR bundle is a build artifact only — remove it from the deploy output.
fs.rmSync(path.join(root, 'dist-server'), { recursive: true, force: true })
