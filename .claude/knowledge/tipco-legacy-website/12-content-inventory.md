# Content & Asset Inventory — tipcoengineering.com

**Audited:** 30 June 2026 (live-site crawl, 6 parallel crawlers, ~50 pages)
**Method:** WebFetch + static HTML inspection of homepage, sitemap.xml, and every product / industry / resource / corporate page.
**Scope:** This is a CONTENT audit (what the site contains). For tech/performance/SEO/accessibility see `01`–`11`.

This file is the master index. Detail lives in:
- [13-product-catalog.md](13-product-catalog.md) — every product, spec, and brochure link
- [14-blog-and-resources.md](14-blog-and-resources.md) — blog (~115 posts), catalogue, galleries
- [15-trust-and-media.md](15-trust-and-media.md) — clients, certifications, events, testimonials, company pages

---

## Headline numbers

| Metric | Value |
|--------|-------|
| URLs in sitemap.xml | **285** (architecture audit had recorded 211 — even more duplication than thought) |
| Unique products | **~28** (spread across 12 path prefixes → ~140 duplicate product URLs) |
| Blog posts | **~115–120** (active, ~2–3/week, through Jun 2026) — **NOT in sitemap.xml** |
| Working brochure/spec-sheet PDFs | **0** (every "Download Brochure" button is dead or points to a broken page) |
| Product images with alt text | **0** (≈110+ product images, none have alt) |
| Client logos | 17 on `/client` (homepage claims 29) — all anonymous, no names |
| Events | 7 (2022–2025, genuine; most recent Jan 2025 = stale) |
| Certifications shown | 0 (page renders empty) |

---

## Pages NOT in sitemap.xml (discovered during crawl)

- `/blog` + `/blog/page/2..12` — the entire ~115-post blog is invisible to search engines via the sitemap
- `/investors/board-of-directors` (+ ~15 investor sub-sections)
- `/get-quote` — **returns 404** (RFQ is a site-wide modal, not a page)

---

## Industries served (authoritative list)

From the About page + homepage, the real list is broader than the redesign sitemap assumed:

**Chemical · Paint · Inks · Pharmaceuticals · Minerals · Food · Polyester Resins · Polyester Buttons** (+ Pesticides as an application path).

> Resolves the open question in `tipco-redesign/06-sitemap.md`: **Food IS served; Cosmetics is NOT a stated industry** (only mentioned in passing in some product copy).

---

## The 5 biggest content findings (redesign drivers)

1. **No downloadable spec sheets exist.** Every product's "Download Brochure" button is non-functional — either `href="#"` or a link to `/catalogue`, a generic 34-page flipbook page that is **throwing PHP errors**. No competitor offers per-product PDFs either → this is a differentiation opportunity. See [13](13-product-catalog.md).
2. **Massive duplicate/templated content.** Same products under 12 path prefixes; Bead Mill ≈ Dyno Mill (identical spec table); all 6 dispersers share one spec table; 3 homogenizer pages overlap. SEO cannibalization throughout.
3. **Specs are thin and inconsistent.** Only ~8 of 28 products have a real spec table. No product anywhere lists material-of-construction or weight consistently. Several "Technical Information" sections are empty.
4. **The blog is a large, active SEO engine** — ~115 posts, but single-author ("admin"), single-category ("Machines"), no case studies, no named experts, and not in the sitemap.
5. **Trust signals are weak despite real substance.** Genuine 7-event history and a real catalogue, but: certifications page empty, client logos anonymous, no case studies, video gallery renders no videos, only 3 generic homepage testimonials.

---

## Form / endpoint inventory (for rebuild reference)

| Form | Endpoint (POST) | Notes |
|------|-----------------|-------|
| Contact / enquiry | `/send-partner` | `enquirytype=2` |
| Become a Partner (dealership) | `/send-partner` (id `partner`) | `enquirytype=1` |
| Get Quote (site-wide modal/footer) | `/product-enquery` | hidden `pname` = current page URL (no product dropdown) |
| Popup enquiry | `/send-enquiryform` | `enquirytype=2` |
| Job application | `/apply-postion` | multipart, file upload `.jpg/.png` |

> No quote form has a product selector — product context is inferred from the page URL. Typos baked into production endpoints: `product-enquery`, `apply-postion`.

---

## Contact data (authoritative)

- Sales / WhatsApp: **+91 88261 76988**
- Toll-Free: **1800 1020 229**
- Purchase Dept: **+91 74969 62283**
- Investor Relations: **+91 99966 35489**
- Email: **mail@tipcoengineering.com** · Investors: **inverstors@tipcoengineering.com** (sic — misspelled in source)
- HQ: Plot No. 1689, 1658, Sector-38, Phase-1, Rai Industrial Area, Sonipat, Haryana 131029
- No Google Maps embed on the Contact page.

---

## Open items needing a JS-rendered re-check

- **FAQ page** — accordion is JS-populated; rendered empty in static HTML. Could not confirm question count (may be genuinely empty).
- **Certificates page** — renders no certificate images statically; confirm whether JS injects them.
- **Video gallery** — no embeds in static HTML; confirm whether videos load via JS or the gallery is empty.
