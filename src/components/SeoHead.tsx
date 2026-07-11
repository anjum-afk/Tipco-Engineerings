import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { resolveSeo } from '../lib/seo'

// Upsert (create-or-update) a <meta> tag by its name/property key so
// client-side navigation reuses the tag already present in the head
// (including any injected during prerender) instead of duplicating it.
function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Imperatively manages document head metadata on every route change.
 * Declarative React 19 metadata is avoided here on purpose: mutating the
 * existing tags in place keeps a single canonical set of head tags across
 * SPA navigation and the prerendered initial HTML (no duplicate <meta>).
 */
export default function SeoHead() {
  const { pathname } = useLocation()
  useEffect(() => {
    const seo = resolveSeo(pathname)
    document.title = seo.title
    upsertMeta('name', 'description', seo.description)
    upsertLink('canonical', seo.canonical)
    upsertMeta('property', 'og:site_name', 'Tipco Engineering')
    upsertMeta('property', 'og:title', seo.title)
    upsertMeta('property', 'og:description', seo.description)
    upsertMeta('property', 'og:url', seo.canonical)
    upsertMeta('property', 'og:type', seo.type === 'product' ? 'product' : 'website')
    upsertMeta('property', 'og:image', seo.image)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', seo.title)
    upsertMeta('name', 'twitter:description', seo.description)
    upsertMeta('name', 'twitter:image', seo.image)
  }, [pathname])
  return null
}
