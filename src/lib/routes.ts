// ─────────────────────────────────────────────────────────────
// The canonical list of routes to expose to crawlers. Single source
// of truth shared by the sitemap generator (vite.config.ts) and the
// static prerender step (scripts/prerender.mjs via entry-server).
// ─────────────────────────────────────────────────────────────
import { PRODUCTS } from '../data/site'
import { APPLICATION_PAGES } from '../data/applications'

// Application/category slugs that are duplicate aliases of a canonical
// page — excluded so only ONE URL per page is ever emitted.
export const APP_ALIASES = new Set(['lab-machines', 'machine-series'])

export const STATIC_ROUTES = [
  '/',
  '/about-us',
  '/product',
  '/all-category',
  '/contact-us',
  '/client',
  '/event',
  '/career',
  '/service',
  '/blog',
  '/catalogue',
  '/faq',
  '/partner',
  '/certificates',
  '/video-gallery',
  '/photo-gallery',
  '/privacy-policy',
  '/term-condition',
]

/** Every canonical URL path on the site (no duplicate variants). */
export function canonicalRoutes(): string[] {
  const routes = new Set<string>(STATIC_ROUTES)
  // One canonical URL per product: /<categorySlug>/<slug>
  for (const p of PRODUCTS) routes.add(`/${p.categorySlug}/${p.slug}`)
  // Application / industry / category pages, minus duplicate aliases
  for (const slug of Object.keys(APPLICATION_PAGES)) {
    if (!APP_ALIASES.has(slug)) routes.add(`/application/${slug}`)
  }
  return [...routes].sort()
}
