// ─────────────────────────────────────────────────────────────
// Central SEO resolver. Single source of truth for the <title>,
// meta description, canonical URL and Open Graph tags of every
// route. Used both at runtime (SeoHead.tsx, client-side nav) and
// at build time (prerender + sitemap), so crawlers and users see
// identical, unique, canonical head tags per page.
// ─────────────────────────────────────────────────────────────
import { PRODUCTS } from '../data/site'
import { APPLICATION_PAGES } from '../data/applications'

export const SITE_URL = 'https://tipcoengineering.com'
const BRAND = 'Tipco Engineering'
const DEFAULT_DESC =
  'Tipco Engineering India Pvt. Ltd. — manufacturer of industrial process machinery (bead mills, dyno mills, dispersers, homogenizers and mixers) for the paint, ink, chemical and pharmaceutical industries.'
const DEFAULT_IMAGE = `${SITE_URL}/public/uploads/banner.jpeg`

export interface SeoData {
  title: string
  description: string
  canonical: string // absolute URL
  image: string // absolute URL
  type: 'website' | 'product' | 'article'
}

function toTitle(slug: string) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

function absUrl(path: string) {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
}

function absImg(img: string) {
  return img.startsWith('http') ? img : `${SITE_URL}${img.startsWith('/') ? '' : '/'}${img}`
}

// Exact static routes → tailored title + description.
const STATIC: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Tipco Engineering — Bead Mill, Dyno Mill & Disperser Manufacturer in India',
    description: DEFAULT_DESC,
  },
  '/about-us': {
    title: `About Us | ${BRAND}`,
    description:
      'Tipco Engineering India Pvt. Ltd. — a BSE-listed manufacturer of process plants and machinery for the paint, ink, chemical and pharma industries, based in Sonipat, Haryana.',
  },
  '/product': {
    title: `Products — Mills, Dispersers, Homogenizers & Mixers | ${BRAND}`,
    description:
      'Browse the full Tipco Engineering range: bead mills, dyno mills, basket mills, high-speed dispersers, homogenizers, mixers and complete paint & ink production lines.',
  },
  '/all-category': {
    title: `Solutions & Applications | ${BRAND}`,
    description:
      'Industrial process solutions from Tipco Engineering for paint, ink, chemical and pharmaceutical manufacturing — milling, mixing, dispersing and turnkey production setups.',
  },
  '/contact-us': {
    title: `Contact Us — Request a Quote | ${BRAND}`,
    description:
      'Contact Tipco Engineering for pricing, specifications and a quote on bead mills, dispersers, homogenizers and complete production lines. Call, email or WhatsApp our team.',
  },
  '/client': {
    title: `Our Clients | ${BRAND}`,
    description: 'The paint, ink, chemical and pharmaceutical manufacturers who trust Tipco Engineering machinery.',
  },
  '/event': {
    title: `Events & Exhibitions | ${BRAND}`,
    description: 'Meet Tipco Engineering at industry exhibitions and trade shows across India and abroad.',
  },
  '/career': {
    title: `Careers | ${BRAND}`,
    description: 'Join Tipco Engineering — explore career opportunities with a growing industrial machinery manufacturer in Sonipat, Haryana.',
  },
  '/service': {
    title: `Engineering & After-Sales Service | ${BRAND}`,
    description: 'Installation, commissioning, operator training and after-sales support for every Tipco Engineering machine.',
  },
  '/blog': {
    title: `Blog — Industry Insights | ${BRAND}`,
    description: 'Guides and insights on bead mills, dyno mills, dispersers and paint & ink manufacturing from Tipco Engineering.',
  },
  '/catalogue': {
    title: `Product Catalogue | ${BRAND}`,
    description: 'Download the complete Tipco Engineering catalogue covering the full range of mixing and milling machinery.',
  },
  '/faq': {
    title: `FAQs | ${BRAND}`,
    description: 'Answers to common questions about Tipco machines, lead times, installation and after-sales support.',
  },
  '/partner': {
    title: `Partner With Us | ${BRAND}`,
    description: 'Become a Tipco Engineering distribution or channel partner. Get in touch with our team.',
  },
  '/certificates': {
    title: `Certificates & Quality | ${BRAND}`,
    description: "Tipco Engineering's quality and compliance certifications.",
  },
  '/video-gallery': {
    title: `Video Gallery | ${BRAND}`,
    description: 'Watch Tipco machines in action — product demos, installations and factory tours.',
  },
  '/photo-gallery': {
    title: `Photo Gallery | ${BRAND}`,
    description: 'A look inside Tipco Engineering manufacturing facilities, machines and team.',
  },
}

const INVESTOR_SECTIONS: Record<string, string> = {
  'board-of-directors': 'Board of Directors',
  'annual-report': 'Annual Reports',
  'corporate-governance': 'Corporate Governance',
  'financial-highlights': 'Financial Highlights',
  'bse-filings': 'BSE Filings',
  faqs: 'Investor FAQs',
  'press-releases': 'Press Releases',
  contact: 'Investor Contact',
}

/**
 * Resolve the canonical SEO metadata for any pathname.
 * Pure and isomorphic — safe to call in the browser or at build time.
 */
export function resolveSeo(pathname: string): SeoData {
  const path = pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname

  let title = BRAND
  let description = DEFAULT_DESC
  let canonicalPath = path
  let image = DEFAULT_IMAGE
  let type: SeoData['type'] = 'website'

  const staticHit = STATIC[path]
  if (staticHit) {
    title = staticHit.title
    description = staticHit.description
  } else if (path.startsWith('/application/')) {
    const slug = path.replace('/application/', '')
    const app = APPLICATION_PAGES[slug]
    if (app) {
      title = app.pageTitle || `${app.title} | ${BRAND}`
      description = app.intro.replace(/\s+/g, ' ').trim().slice(0, 300)
      if (app.banner) image = absImg(app.banner)
    } else {
      title = `${toTitle(slug)} | ${BRAND}`
    }
  } else if (path.startsWith('/investors/')) {
    const section = path.replace('/investors/', '')
    const label = INVESTOR_SECTIONS[section] ?? toTitle(section)
    title = `${label} | Investors | ${BRAND}`
    description = `${label} — investor information for Tipco Engineering India Pvt. Ltd. (BSE-listed).`
  } else {
    // Possible product detail: /:category/:slug
    const parts = path.split('/').filter(Boolean)
    if (parts.length === 2) {
      const product = PRODUCTS.find(p => p.slug === parts[1])
      if (product) {
        // Canonical is ALWAYS the product's home category — collapses the
        // /paint/…, /pharma/…, /ink/… duplicate variants onto one URL.
        canonicalPath = `/${product.categorySlug}/${product.slug}`
        title = `${product.name} Manufacturer & Supplier in India | ${BRAND}`
        description = product.desc.replace(/\s+/g, ' ').trim().slice(0, 300)
        image = absImg(product.img)
        type = 'product'
      } else {
        title = `${toTitle(parts[1])} | ${BRAND}`
      }
    } else if (parts.length) {
      title = `${toTitle(parts[parts.length - 1])} | ${BRAND}`
    }
  }

  return {
    title,
    description,
    canonical: absUrl(canonicalPath),
    image,
    type,
  }
}
