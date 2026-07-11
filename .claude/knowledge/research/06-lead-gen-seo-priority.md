# Lead-Gen SEO Priority — Which Page to Optimize First

**Purpose:** Answer the business question "which single page will generate the most leads, so we focus SEO there?"
Grounded in live search-demand checks + current SERP positions (July 2026) and cross-checked against the React build's actual SEO state.

Last updated: 11 July 2026

Related: [../tipco-legacy-website/04-seo.md](../tipco-legacy-website/04-seo.md) (SEO audit) · [01-competitor-landscape.md](01-competitor-landscape.md) · [03-industry-analysis.md](03-industry-analysis.md) · [../tipco-legacy-website/13-product-catalog.md](../tipco-legacy-website/13-product-catalog.md)

---

## 🎯 Verdict: prioritize the Bead Mill / Dyno Mill page

Focus SEO on the **Bead Mill (Dyno Mill)** product page — canonical target `/mill-series/bead-mill` (or `/mill-series/dyno-mill`). It is the single best lead-generation opportunity.

> Bead mill and dyno mill are the **same machine** (dyno mill = agitator bead mill). Treat them as one keyword cluster with combined demand, not two products.

### Why this page wins

| Factor | Bead Mill / Dyno Mill | Notes |
|---|---|---|
| Search demand | Highest of all Tipco products | "bead mill" + "dyno mill" synonyms → combined volume dominates |
| Buyer intent | Very high | Queries are "bead mill / dyno mill manufacturer / price / buy" — bottom-of-funnel |
| Deal value | ₹3–5.5 lakh/unit | Flagship, high-margin product |
| Current ranking | Already **page 1** — `/paint/dyno-mill` ~#2 for "dyno mill" | Close to top = cheap wins |
| Content readiness | Most detailed live page (THM-10/15/25 spec table, 9 features, gallery) | Strong foundation |

Every other product ranks lower in demand OR intent. Priority order:

1. **Bead Mill / Dyno Mill** ← focus here
2. **Paint Manufacturing Plant / Setup** — highest deal value (₹40 L–1.5 Cr full plant), strong demand, already has ranking blog content; each lead worth 10–20× a single machine. Longer sales cycle. Do second.
3. High-Speed Disperser — decent demand, lower ticket
4. Basket Mill — decent demand, lower ticket

---

## ⚠️ Two problems actively suppressing this page

1. **Self-competition (duplicate URLs).** The same product resolves at many URLs with no canonical — `/mill-series/dyno-mill`, `/paint/dyno-mill`, `/pharma/dyno-mill`, `/ink/dyno-mill`, `/milling/dyno-mill`, `/*-production/dyno-mill` … Google splits ranking signals across all of them. See [04-seo.md → URL duplication](../tipco-legacy-website/04-seo.md). **Fix:** pick ONE canonical URL, add `rel=canonical` on every application-context variant, cross-link them.
2. **Legacy-domain cannibalization.** `tipco.co.in` (old site) ranks for the *same* keywords and competes with `tipcoengineering.com`. Two owned domains fighting each other. **Fix:** choose the primary domain and 301-redirect legacy product pages to the new ones (passes existing authority — a big free boost).

---

## 📋 SEO action plan for the Bead Mill page

1. **Title tag:** `Bead Mill (Dyno Mill) Manufacturer in India — THM Series | Tipco` — carry both synonyms.
2. **Add a price / "request price" block** — "bead mill price" is a top query; matches intent.
3. **Add an FAQ block** (bead mill vs dyno mill, capacity selection, price factors) → long-tail + featured-snippet potential; wire `FAQPage` JSON-LD.
4. **Thicken body copy** — spec-heavy but light on prose; competitors (Raymer) rank with 800–1,200 words of application detail.
5. **Enquiry form above the fold** — not just a "Get Quote" button.
6. **Internal links** — point ranking blog posts (e.g. `/blog/dyno-mill-machine-pricing/`) at this page.
7. **Product JSON-LD** on the page (price, availability, brand).

---

## 🔧 React build reality check (what's remaining in `newWebsite`)

Audited the Vite/React SPA. **The current build cannot deliver on any of the above without SEO infrastructure work first** — these are blockers:

| Gap | Evidence | Impact |
|---|---|---|
| **No per-page meta tags** | Only `document.title = title` in [src/App.tsx](../../src/App.tsx#L94); no meta description / OG / Twitter | Every page shares one generic snippet; poor SERP CTR |
| **No canonical tags** | Route is `/:category/:slug` → [src/pages/ProductPage.tsx](../../src/pages/ProductPage.tsx) finds product by `slug` only, renders identically under every category | Reproduces the exact legacy duplication problem in the new site |
| **No structured data** | No JSON-LD anywhere (`Product`, `FAQPage`, `Organization`, `Breadcrumb`) | Loses rich results this industry benefits from |
| **Pure client-side SPA, no SSR/prerender** | [vercel.json](../../vercel.json) rewrites all to `index.html`; no react-helmet, no SSG/prerender in `package.json` / `vite.config.ts` | Crawlers get an empty shell; content-driven ranking is at risk |
| Partial hook exists | `pageTitle?` field defined in [src/data/products.ts](../../src/data/products.ts#L12) & `applications.ts` but not wired to real `<head>` tags | Scaffolding present, not connected |

**Remaining work to enable the lead-gen SEO plan (in order):**
1. Add head-management (`react-helmet-async`) **or** a prerender/SSG step (e.g. `vite-react-ssg` / prerender plugin) so meta + content are in the served HTML.
2. Emit per-page `<title>` + meta description from the existing `pageTitle` data (extend data with `metaDescription`).
3. Implement canonical logic on `ProductPage` — one canonical URL per product regardless of `:category` context.
4. Add `Product` + `FAQPage` + `BreadcrumbList` + `Organization` JSON-LD.
5. Build the bead-mill FAQ + price block + thicker copy into the product data.

> Bottom line: the **Bead Mill / Dyno Mill page is the right target**, but on the React site the prerequisite is SEO infrastructure (meta + canonical + prerender). Optimizing copy before that ships would not be crawlable.
