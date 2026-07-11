# SEO Execution Plan — Sequenced Roadmap

**Purpose:** The ordered "how we actually execute SEO" plan. Turns the backlog ([07](07-seo-implementation-backlog.md)) into phases with sequence, owner-type, and success metric. Do phases in order — each unblocks the next.

Last updated: 11 July 2026
Feeds from: [07-seo-implementation-backlog.md](07-seo-implementation-backlog.md) (task list) · [06-lead-gen-seo-priority.md](06-lead-gen-seo-priority.md) (target page) · [09-marketing-for-lead-gen.md](09-marketing-for-lead-gen.md) (conversion) · [08-legacy-tipco-co-in-seo-audit.md](08-legacy-tipco-co-in-seo-audit.md) (legacy) · [../tipco-redesign/14-seo-audit-gap-analysis-2026-07-09.md](../tipco-redesign/14-seo-audit-gap-analysis-2026-07-09.md)

> **North-star metric:** qualified quote requests (leads), not traffic. Every phase ladders up to that.

---

## ✅ Phase 0 — Foundations (DONE, commit `23c4116`)
Crawlability + canonical + per-page meta + sitemap + robots. Pages are now *eligible* to rank. See [07 → Done](07-seo-implementation-backlog.md).

---

## 🚨 Phase 0.5 — Fix lead capture (BEFORE more SEO) — *deferred 11 Jul 2026, top-priority resume point*
**Goal:** stop throwing away leads. SEO drives buyers to forms that currently discard every enquiry. Full detail: [11-new-site-audit.md](11-new-site-audit.md).
| Task | Type | Success metric |
|---|---|---|
| Wire homepage **GetQuote** + **ProductPage** forms → Strapi `/api/enquiries` (the endpoint ContactUs already uses) | Code | Test enquiry lands in Strapi |
| Add **GA4 + conversion events** (quote submit, WhatsApp, call) | Setup | Lead events fire |
| Verify **`VITE_STRAPI_URL`** is set in production | Deploy | ContactUs form succeeds live |
| Add **WhatsApp fallback CTA** on the forms | Code | Lead reaches Tipco even if backend fails |
| Self-host the GetQuote hero image (currently hotlinked from pixnio.com) | Code | No external image dependency |

**Exit criteria:** every lead form delivers to Strapi + fires a GA4 event; no fake "Request Sent ✓".

---

## 🔴 Phase 1 — Deploy & Measure (Week 1) — *do first, we're blind without it*
**Goal:** confirm the foundation works in production and start seeing data.
| Task | Type | Success metric |
|---|---|---|
| Deploy the new build; verify Vercel serves prerendered nested `index.html` (view-source shows real content + canonical) | Deploy | Product page source contains full HTML + correct canonical |
| **Google Search Console** — verify domain, submit `sitemap.xml` | Setup | Sitemap "Success", pages start indexing |
| **Bing Webmaster Tools** — verify + submit sitemap | Setup | Indexed in Bing |
| **GA4** — one authoritative property + **conversion events** (Get Quote submit, WhatsApp click, call) | Setup | Lead events firing |
| Confirm indexing: `site:tipcoengineering.com` + GSC Coverage | Verify | Product/category pages indexed, no errors |

**Exit criteria:** GSC live, sitemap accepted, lead events tracked, prerendered pages confirmed indexed.

---

## 🟠 Phase 2 — Win the money page (Weeks 2–3) — *highest lead impact*
**Goal:** make the Bead Mill / Dyno Mill page the best-converting, best-ranked page in the segment. See [06](06-lead-gen-seo-priority.md).
| Task | Type | Success metric |
|---|---|---|
| **Consolidate the 4 mill pages** (dyno/bead/vertical/horizontal) → one primary "Bead Mill (Dyno Mill)" page; canonical + interlink the rest (fix internal cannibalization) | Code + content | One page ranking, not four competing |
| Title formula `<Product> Manufacturer in India — <Model> \| Tipco` (harvest from [08](08-legacy-tipco-co-in-seo-audit.md)) | Content | Keyword+location titles live |
| Add **price / "request price" block** + thicker body copy (~800–1,200 words) | Content | Matches "bead mill price" intent |
| **FAQ block** + `FAQPage` JSON-LD (bead vs dyno, capacity, price factors) | Code + content | FAQ rich result eligible |
| **Get Quote form above the fold** + WhatsApp in the enquiry flow (the 6 mechanics, [09](09-marketing-for-lead-gen.md)) | Code | Lead form on every product page |
| Point ranking blog posts + internal links at this page | Content | Internal links consolidated |

**Exit criteria:** one consolidated bead-mill page, price + FAQ + lead form, climbing for "dyno mill / bead mill."

---

## 🟠 Phase 3 — Structured data + on-page fundamentals (Week 4)
**Goal:** rich results + fix remaining on-page gaps site-wide.
| Task | Type |
|---|---|
| `Organization`/`Manufacturer` JSON-LD site-wide + `Product` schema on product pages | Code |
| `BreadcrumbList` JSON-LD on inner pages | Code |
| One meaningful `<h1>` per page (esp. homepage + product pages) | Code |
| Image `alt` text across product/hero images | Content |
| Regenerate `llms.txt` from `src/data/site.ts` | Code |

**Exit criteria:** schema validates in Rich Results Test; every page has one H1 + alt text.

---

## 🟠 Phase 4 — Performance / Core Web Vitals (Week 5) — *ranking factor + competitor edge*
**Goal:** fast mobile load (competitors are all slow — speed is a differentiator).
| Task | Type | Success metric |
|---|---|---|
| Code-split the 930 KB JS bundle (route-level `lazy()`) | Code | Initial JS well under 500 KB |
| Lazy-load heavy libs (recharts, d3 worldmap, GSAP) | Code | Not in initial bundle |
| Optimize/serve images responsively | Code | LCP < 2.5s mobile |

**Exit criteria:** green Core Web Vitals (LCP/CLS/INP) in PageSpeed + GSC.

---

## 🟡 Phase 5 — Off-page & authority (Weeks 6–8, ongoing) — *the real reason competitors out-rank us*
**Goal:** build domain authority; end self-cannibalization.
| Task | Type |
|---|---|
| **Legacy `tipco.co.in` → 301 redirects** to new canonical URLs (47-URL map from [08](08-legacy-tipco-co-in-seo-audit.md)) | Hosting/.htaccess |
| **Use the IPO** — press releases / financial media / filings as high-authority backlinks | Off-site/PR |
| Directory listings (IndiaMART / TradeIndia / Justdial) → new domain | Off-site |
| **Google Business Profile** (Sonipat) + `LocalBusiness` schema + NAP consistency | Off-site + code |
| Collect Google + IndiaMART reviews | Off-site |

**Exit criteria:** legacy 301s live, GBP verified, first authority backlinks earned.

---

## 🟡 Phase 6 — Content engine & scale (ongoing)
**Goal:** capture more intent, feed discovery + nurture.
| Task | Type |
|---|---|
| Per-product **downloadable spec-sheet PDFs** (lead magnet) | Content |
| **Industry landing pages** with SEO copy (paint / pharma / ink) | Content |
| **Case studies** (zero competitors have any) | Content |
| Per-article blog pages + **301 the WordPress/Yoast blog** | Code + hosting |
| **Google Ads** on high-intent terms while SEO matures → point at bead-mill page | Paid |
| Email/nurture for the multi-month sales cycle | Marketing ops |

---

## Sequencing logic (why this order)
1. **Measure before optimizing** (P1) — blind otherwise.
2. **Money page next** (P2) — fastest path to leads; we're already near page 1.
3. **Schema + fundamentals** (P3) — cheap, site-wide ranking lift.
4. **Speed** (P4) — ranking factor + competitor differentiator.
5. **Authority** (P5) — slowest to move, so start early but expect months; the 301s are the biggest single win.
6. **Content engine** (P6) — compounding, never "done."

## Owner-type key
**Code** = React repo · **Content** = copy/data · **Hosting** = legacy server/.htaccess/Vercel · **Off-site/Paid/PR** = outside the website · **Setup** = GSC/GA4/GBP.
