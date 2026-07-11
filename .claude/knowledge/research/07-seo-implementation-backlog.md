# SEO Implementation Backlog — Done + Remaining

**Purpose:** Running checklist of SEO work. Tracks what has shipped and what is still to do, so SEO can be picked up later without re-deriving the plan.

Last updated: 11 July 2026
Related: [06-lead-gen-seo-priority.md](06-lead-gen-seo-priority.md) · [../tipco-redesign/14-seo-audit-gap-analysis-2026-07-09.md](../tipco-redesign/14-seo-audit-gap-analysis-2026-07-09.md) · [../tipco-legacy-website/04-seo.md](../tipco-legacy-website/04-seo.md)

---

## ✅ Done — shipped in commit `23c4116` (11 July 2026)

- [x] **Canonical URLs** — `resolveSeo()` collapses duplicate product variants (`/paint/dyno-mill`, `/pharma/dyno-mill`, …) onto one canonical `/<categorySlug>/<slug>`. ([src/lib/seo.ts](../../src/lib/seo.ts))
- [x] **Fixed `lab-machines` → `laboratory-machines`** inconsistency across nav, product grid, and product data.
- [x] **Per-page head tags** — unique `<title>`, meta description, canonical, Open Graph + Twitter Card per route, no duplicate tags on SPA nav. ([src/components/SeoHead.tsx](../../src/components/SeoHead.tsx))
- [x] **Prerender / SSG** — vanilla Vite SSG renders all 65 canonical routes to static HTML with content + head baked in (65/65 rendered, 0 fallbacks). ([src/entry-server.tsx](../../src/entry-server.tsx), [scripts/prerender.mjs](../../scripts/prerender.mjs), [src/AppRoutes.tsx](../../src/AppRoutes.tsx))
- [x] **sitemap.xml** (65 canonical URLs, aliases excluded) + **robots.txt** with sitemap pointer. ([public/robots.txt](../../public/robots.txt))

---

## 🟠 Remaining — next SEO session (do these first)

- [ ] **JSON-LD structured data** — `Organization`/`Manufacturer` site-wide + `Product` schema on product pages (price, availability, brand). Net-new; highest remaining ranking value. *(gap-analysis #8)*
- [ ] **H1 audit** — ensure every page (esp. homepage + product pages) has exactly one meaningful `<h1>`. Legacy homepage had zero. *(legacy 04-seo)*
- [ ] **Image alt text** — 45/46 images had no alt text; add descriptive alt across product/hero images. Accessibility + image SEO. *(legacy 04-seo)*
- [ ] **Bead Mill / Dyno Mill page content** — add price / "request price" block, FAQ block (wire `FAQPage` JSON-LD), thicken body copy to ~800–1,200 words. This is the priority lead-gen page. *(see [06](06-lead-gen-seo-priority.md))*
- [ ] **`llms.txt`** — regenerate a clean company/product summary from `src/data/site.ts` for AI answer engines (legacy had one; new site doesn't). *(gap-analysis #6)*
- [ ] **`google-site-verification`** — add the new GSC property's verification tag once a Search Console property exists for the new domain; then submit `sitemap.xml`. *(gap-analysis #7)*

## 🟡 Remaining — content / white space (no competitor does these)

- [ ] **Per-product downloadable spec sheets** (PDF datasheets) — the #1 content gap; buyers want specs before enquiring.
- [ ] **Industry landing pages** with real SEO copy (`/paint-industry` etc.).
- [ ] **Case studies / customer stories** — zero competitors have any.
- [ ] **Product-page video** — surface the existing video gallery on product pages.

## 🔵 Blog / migration

- [ ] **Per-article blog pages** — new homepage links all point at one generic `/blog`; needs real per-post routes.
- [ ] **WordPress blog redirect plan** — the legacy `site/blog` (Yoast-optimized) has real search equity; plan 301s before `/blog` goes live as a dead-end. *(gap-analysis #11)*

## ⚙️ Technical follow-ups (from this implementation)

- [ ] **Deploy note** — `npm run build` now runs `tsc → vite build → SSR build → prerender`. Confirm the Vercel deploy serves the prerendered nested `index.html` files (filesystem is checked before the SPA rewrite, so this should work as-is).
- [ ] **Hydration polish (optional)** — client currently uses `createRoot` (re-render on load, covered by LoadingScreen) to avoid hydration mismatch. To remove the flash: move LoadingScreen inside the router and switch to `hydrateRoot`.
- [ ] **Runtime browser check** — verify a prerendered page in a real browser (Playwright is installed) — confirm head tags + content + client takeover.
- [ ] **Sitemap `lastmod`** — currently build date for all URLs; optionally wire real per-page modified dates.

## ⛔ Deferred — hosting side, not React (explicitly skipped)

- [ ] **Legacy `tipco.co.in` → 301 redirects** to `tipcoengineering.com`. `.htaccess`/server task on the legacy host; transfers the old domain's ranking equity and ends self-cannibalization. Generate the old→new URL map when ready. *(see [06](06-lead-gen-seo-priority.md) §2)*

---

## 🧭 Beyond on-page — what actually decides whether we rank

The work above makes pages *eligible* to rank (crawlable, canonical, unique tags = ~40% of SEO). These items decide whether they *actually* rank:

### Measure first (blind without it)
- [ ] **Google Search Console** — verify the new domain, submit `sitemap.xml`, watch Indexing/Coverage to confirm the prerendered pages get indexed.
- [ ] **Bing Webmaster Tools** — feeds Bing + ChatGPT search.
- [ ] **GA4** — pick ONE authoritative property (legacy had two IDs); install on the new site.
- [ ] **Conversion tracking** — track "Get Quote" submits + WhatsApp clicks as GA4 events. The goal is leads, not traffic.

### Performance = ranking factor
- [ ] **Code-split the 930 KB JS bundle** (Vite warns >500 KB). Route-level `lazy()`, and lazy-load recharts / d3 worldmap / GSAP. Slow mobile LCP hurts rankings and kills the "we're faster than competitors" edge.

### Internal keyword cannibalization
- [ ] **Keyword map for the mill pages** — `dyno-mill`, `bead-mill`, `vertical-bead-mill`, `horizontal-bead-mill` all target the same query and split each other's signal. Pick one primary per cluster, differentiate the rest (orientation/application), interlink with clear anchors.

### Off-page / authority (the real reason Wahal wins)
- [ ] **Use the IPO** — BSE-listed (Apr 2026); press releases + financial media + filings are high-authority backlinks no competitor has.
- [ ] **Directory listings** (IndiaMART / TradeIndia / Justdial) pointing at the new domain.
- [ ] Legacy `tipco.co.in` 301s (above) = biggest single link-equity win.

### Local SEO (physical manufacturer)
- [ ] **Google Business Profile** for the Sonipat facility + `LocalBusiness` schema.
- [ ] **NAP consistency** (Name/Address/Phone) across site, GBP, and all directories.

### Decisions owed
- [ ] **`.in` geo-targeting** — `hreflang`/geo signals vs an actual `.in` domain? (Second domain splits equity unless canonicalized; `hreflang` alone needs no second domain.) Decide deliberately.
- [ ] **Blog migration** — 301 the Yoast-optimized WordPress blog to real per-article pages, or strand its equity.
