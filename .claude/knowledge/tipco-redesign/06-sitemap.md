# New Sitemap — Tipco Engineering Redesign

Status: Proposed — URL architecture decision still needed from stakeholder
Last updated: 25 June 2026

---

## Summary of Changes

| Metric | Current | New |
|--------|---------|-----|
| Total URLs | 211 | ~52 |
| Duplicate product URLs | ~160 | 0 |
| Product sections | 12+ overlapping paths | 1 clean path per product |
| Industry paths | Duplicate product content | Standalone content pages |

---

## New URL Structure

```
tipcoengineering.com/
│
├── /                                   Homepage
│
├── /products/                          All products listing
│   ├── /products/mill-series/          Category landing page
│   │   ├── /products/mill-series/dyno-mill
│   │   ├── /products/mill-series/horizontal-bead-mill
│   │   ├── /products/mill-series/vertical-bead-mill
│   │   ├── /products/mill-series/pin-type-bead-mill
│   │   └── /products/mill-series/[other-products]
│   │
│   ├── /products/disperser-series/     Category landing page
│   │   ├── /products/disperser-series/high-speed-disperser
│   │   ├── /products/disperser-series/twin-shaft-disperser
│   │   ├── /products/disperser-series/vacuum-disperser
│   │   └── /products/disperser-series/[other-products]
│   │
│   ├── /products/homogenizers/         Category landing page
│   │   ├── /products/homogenizers/inline-homogenizer
│   │   ├── /products/homogenizers/high-shear-homogenizer
│   │   └── /products/homogenizers/[other-products]
│   │
│   ├── /products/lab-machines/         Category landing page (consolidates lab-machines + laboratory-machines)
│   │   ├── /products/lab-machines/lab-high-speed-disperser
│   │   ├── /products/lab-machines/lab-bead-mill
│   │   └── /products/lab-machines/[other-products]
│   │
│   └── /products/production-line/      Category landing page
│       ├── /products/production-line/[product]
│       └── ...
│
├── /industries/                        Industries overview
│   ├── /industries/paint-coatings      Industry landing (content page — NOT duplicate products)
│   ├── /industries/pharma
│   ├── /industries/chemical
│   ├── /industries/ink-printing
│   ├── /industries/food-beverage
│   └── /industries/cosmetics
│
├── /about/                             About section
│   ├── /about                          About Tipco (main)
│   ├── /about/certifications           (was /certificates)
│   ├── /about/clients                  (was /client)
│   ├── /about/careers                  (was /career)
│   └── /about/partners                 (was /partner)
│
├── /events/                            Events listing (was /event)
│   └── /events/[slug]                  Individual event
│
├── /resources/
│   ├── /resources/catalogue            PDF flipbook (was /catalogue)
│   ├── /resources/video-gallery        (was /video-gallery)
│   ├── /resources/photo-gallery        (was /photo-gallery)
│   └── /resources/faq                  (was /faq)
│
├── /contact                            (was /contact-us)
├── /investor                           Keep — separate section
├── /service                            Keep
├── /privacy-policy                     Keep
└── /terms-conditions                   (was /term-condition)
```

---

## 301 Redirect Map (Old → New)

All old URLs must 301 redirect to the new canonical URL. This preserves SEO authority.

### Product URL consolidation
```
/mill-series/[product]              → /products/mill-series/[product]
/milling/[product]                  → /products/mill-series/[product]
/disperser-series/[product]         → /products/disperser-series/[product]
/homogenizers/[product]             → /products/homogenizers/[product]
/lab-machines/[product]             → /products/lab-machines/[product]
/laboratory-machines/[product]      → /products/lab-machines/[product]
/production-line/[product]          → /products/production-line/[product]
/mixing/[product]                   → /products/production-line/[product]   ← verify correct category
/production-setup/[product]         → /products/production-line/[product]   ← verify correct category
```

### Industry path consolidation (duplicate product pages → industry landing pages)
```
/paint/[product]                    → /products/[category]/[product]
/pharma/[product]                   → /products/[category]/[product]
/chemical/[product]                 → /products/[category]/[product]
/ink/[product]                      → /products/[category]/[product]
/coating/[product]                  → /products/[category]/[product]
/paint-production/[product]         → /products/[category]/[product]
/ink-production/[product]           → /products/[category]/[product]
/chemical-production/[product]      → /products/[category]/[product]
/pesticides-industry/[product]      → /products/[category]/[product]
```

### Application category pages → industry or product pages
```
/application/mill-series            → /products/mill-series
/application/disperser-series       → /products/disperser-series
/application/paint                  → /industries/paint-coatings
/application/pharma                 → /industries/pharma
/application/chemical               → /industries/chemical
/application/ink                    → /industries/ink-printing
/application/mixing                 → /products/production-line
/application/milling                → /products/mill-series
/all-category                       → /products
```

### Page slug cleanup
```
/about-us                           → /about
/contact-us                         → /contact
/term-condition                     → /terms-conditions
/certificates                       → /about/certifications
/client                             → /about/clients
/career                             → /about/careers
/partner                            → /about/partners
/event                              → /events
/video-gallery                      → /resources/video-gallery
/photo-gallery                      → /resources/photo-gallery
/faq                                → /resources/faq
/catalogue                          → /resources/catalogue
```

### Pages to evaluate (may not be needed in new site)
```
/login, /register, /reset           → Discuss with team: is user login needed?
/sales-head-desk                    → Move to /about or /contact
```

---

## Industry Pages — What They Are (Not Product Duplicates)

Industry pages in the new site are **content pages**, not copies of product pages.

Each `/industries/[name]` page should contain:
1. H1: "Tipco Engineering for [Industry Name]"
2. Industry overview (2–3 paragraphs about the industry's processing challenges)
3. "Recommended Machines for [Industry]" — product cards linking to `/products/...`
4. Key benefits / why Tipco for this industry
5. Case study or client reference (if available)
6. Enquiry CTA specific to that industry

This approach:
- Gives industry pages real SEO value (unique content, not duplicates)
- Serves the user who searches "bead mill for pharma industry"
- Consolidates the product as the canonical URL

---

## Decisions Still Needed

| Decision | Impact | Who decides |
|----------|--------|-------------|
| Confirm product-to-category mapping for all 40 products | Required before building redirect map | Dev team + content team |
| Is user login (`/login`, `/register`) needed in new site? | Affects nav and footer | Business owner |
| Should `/investor` remain a top-level section? | Affects nav | Business owner |
| Confirm industry list — are Food & Beverage and Cosmetics served? | Affects `/industries/` pages | Business owner |
