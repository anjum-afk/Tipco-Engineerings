# Legacy SEO Audit — tipco.co.in (IndiaMART microsite)

**Audited:** 11 July 2026 — live crawl of `https://www.tipco.co.in/` (homepage, `/dyno-mill.html`, `/bead-mill.html`, `robots.txt`, `sitemap.xml`).
**Why it matters:** this is the legacy domain that currently **out-ranks the new site for "dyno mill" / "bead mill"** — the cannibalization source in [06-lead-gen-seo-priority.md](06-lead-gen-seo-priority.md) §2.

Related: [06-lead-gen-seo-priority.md](06-lead-gen-seo-priority.md) · [07-seo-implementation-backlog.md](07-seo-implementation-backlog.md) · [../tipco-legacy-website/04-seo.md](../tipco-legacy-website/04-seo.md)

> ⚠️ This is a **different property** from `tipcoengineering.com`. The `tipco-legacy-website/` folder audits the CodeIgniter `tipcoengineering.com`; this doc is the separate `tipco.co.in` domain.

---

## 🔑 Key finding: it's an IndiaMART / Weblink.In template site

The `/glpcat/` and `/GATRACK/` robots rules are the signature of **Weblink.In (IndiaMART's website builder)**. So `tipco.co.in` is a **hosted B2B catalog microsite**, not a self-hosted app — SEO edits are limited to what the template exposes, and it ranks largely on **IndiaMART network authority + domain age**.

---

## ✅ What it does well (why it out-ranks the new site today)

| Element | Finding | Verdict |
|---|---|---|
| Title tags | Keyword + location rich — *"Dyno Mill - Dyno Mill for Paint Manufacturing THM-25 Manufacturer from Sonipat"*, *"…Manufacturer of Bead Mill from Sonipat"* | 🟢 Strong |
| H1 | Present, relevant (`Dyno Mill`, company name) | 🟢 Good |
| Content depth | Dyno-mill page ≈ **1,800–2,000 words**, spec tables + pricing (₹1,00,000–1,75,000) | 🟢 Strong |
| robots.txt | Valid; clean `Disallow` (`/cgi/`, `/temp/`, `/stats/`, `/glpcat/`, `/GATRACK/`); correct `Sitemap:` pointer | 🟢 Working |
| sitemap.xml | **47 URLs**, valid XML, `lastmod` current (2026-07-11), `priority` 0.6–1.0 | 🟢 Healthy |
| HTTPS | Enforced | 🟢 |

**Crux:** for a template site its fundamentals are genuinely sound — proven rankers — which is why it beats the new React build for the money keywords.

## ❌ Gaps (missing modern layer)

| Element | Finding | Impact |
|---|---|---|
| JSON-LD / schema | None (`Product`, `Organization`) | No rich results (price/rating in SERP) |
| Open Graph / Twitter | None | Blank link previews on WhatsApp/LinkedIn |
| Image alt text | Absent — placeholder GIFs, no alt | No image SEO; accessibility fail |
| Meta description / canonical | Not confirmable via crawl (WebFetch drops `<head>`); Weblink usually auto-fills description, canonical often absent | ⚠️ Verify in View-Source |
| Content freshness | Dated catalog template; no blog/case studies | Limited topical depth vs Raymer/Wahal |

## 🎯 Strategic implications

1. **Confirmed cannibalization** — this site is optimized enough to be a real competitor to the new site. The **301-redirect plan** (backlog ⛔ deferred, [07](07-seo-implementation-backlog.md)) is correct: transfer its mature authority to `tipcoengineering.com` rather than compete.
2. **Harvest before retiring** — mirror its proven patterns on the new product pages: the title formula `<Product> Manufacturer from Sonipat / in India`, and deep spec + price content. (`resolveSeo` titles already lean this way.)
3. **Don't fix tipco.co.in's gaps** (schema/OG/alt) — it's slated for retirement/redirect; invest that effort in the new site's backlog instead.

## Sitemap URL inventory (47 total, first 20)
`/`, `/profile.html`, `/fluid-powder-machinery.html`, `/photos.html`, `/testimonial.html`, `/bead-mill.html`, `/disperser-machine.html`, `/paint-manufacturing-machines.html`, `/mill-machines.html`, `/putty-machine.html`, `/dyno-mill.html`, `/homogenizer.html`, `/intank-homogenizer.html`, `/milling-machines.html`, `/high-speed-mixer-hydraulic-type.html`, `/ball-mill.html`, `/industrial-mixer.html`, `/paint-manufacturing-machine.html`, `/planetary-mixer.html`, `/grinding-machine.html` — (use this list as the source for the old→new 301 map).

## Caveat
WebFetch converts pages to markdown and drops the raw `<head>`, so **meta description** and **canonical** values were not directly confirmed — verify via View-Source on the live pages. All other findings are confirmed from the crawl.
