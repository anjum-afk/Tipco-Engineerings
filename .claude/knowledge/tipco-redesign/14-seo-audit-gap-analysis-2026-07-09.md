# SEO Audit & Gap Analysis — Legacy Site vs. the Redesign

Audited: 9 July 2026. Compared the legacy PHP site's actual SEO implementation
(`d:\Program\Projects\tipco-legacy\site` — a CodeIgniter 3 app; **not** the
sibling `php/` folder, which is just the local PHP runtime binaries) against
the current Tipco-Engineerings React build (`index.html`, `App.tsx`'s
`TitleManager`, and a full `src/` grep). Triggered by a request to "read SEO
from the legacy site and implement it for .in" — see the note at the bottom
on why the `.in` part is currently unscoped, not implemented.

**Headline finding: the redesign is not just missing modern SEO additions —
it's a regression on several fundamentals the 2023-era legacy site had
already solved.** Sitemap, canonical tags, per-page meta descriptions, and OG
tags all existed on the old site in some form and do not exist at all on the
new one. Doc 13's finding #4 already flagged the missing OG/JSON-LD; this
audit adds the direct legacy comparison and quantifies what's actually being
lost, not just what's absent in the abstract.

---

## Quick-scan comparison

| Element | Legacy (`site/`) | Tipco-Engineerings (React) |
|---|---|---|
| Page `<title>` | Per-controller, mostly DB-driven | Per-route, hardcoded map + slug fallback — **actually fine** |
| Meta description | Per-page, DB-driven (most content types) | **One single description, identical on every route** |
| Canonical link | Present, but buggy (raw URI-segment concat) | **Absent entirely** |
| Open Graph tags | Only on news detail pages | **Absent entirely** |
| Twitter Card tags | Never existed | Never existed |
| JSON-LD structured data | Never existed | Never existed |
| `robots.txt` | Present, but malformed `Disallow` rules | **404 — file doesn't exist** |
| `sitemap.xml` | Present, dynamic, buggy (invalid XML, static lastmod) | **404 — file doesn't exist** |
| `llms.txt` | Present, hand-authored, good content | **Doesn't exist** |
| `google-site-verification` | Present (tied to old GSC property) | **Absent** |
| hreflang / `.in` / geo-targeting | Never existed | Never existed |

---

## 🔴 Critical — real regressions vs. the site being replaced

### 1. No sitemap.xml at all
Legacy's `sitemap.php` (routed as `/sitemap.xml`) is buggy — every entry
shares a hardcoded `2023-10-31` lastmod regardless of actual change date, and
a stray `echo` bug (`sitemap.php:171`) prints a bare category ID as loose
text, making the output technically invalid XML — but it does exist and
does enumerate the real product catalog (every category, every product
under it, every event, every job posting). The new React site has **no
`sitemap.xml` at all** — a request to that path 404s. Google has no
authoritative URL list for the dozens of product/category pages on the new
site. Don't port the legacy generator's bugs; do port the idea that every
product/category/event page needs to be enumerated somewhere crawlable.

### 2. Meta description is identical across every single page
Confirmed in `index.html:7-10` — one `<meta name="description">` for the
whole site, and `TitleManager` (`App.tsx:37-97`) only ever sets
`document.title`, never `meta[description]`. Every product page (Dyno Mill,
Basket Mill, Vertical Bead Mill, dozens more), About Us, Contact Us, Careers
— all serve the exact same homepage description in search results. The
legacy site, whatever else was wrong with it, had **genuinely unique**
per-page descriptions pulled from CMS fields (`tbl_page_home`,
`tbl_portfolio`, `tbl_event`, `tbl_news`, etc. — see `view_header.php`
lines 82–522). This is a straightforward regression, and at page-count scale
it reads to Google as thin/duplicate content across the whole site, not just
a missed opportunity on any one page.

### 3. No canonical tag anywhere
Legacy's canonical (`view_header.php:104`) was a crude hack — built by
concatenating raw URL segments, breaking on the homepage and on any query
string — but it existed on every page. The new site has zero canonical
logic anywhere in `src/` (confirmed by grep — zero matches for `canonical`).
This matters more, not less, during a URL-structure migration: without
canonicals, Google is left to guess which of the old and new URL patterns is
authoritative while both may be reachable.

---

## 🟠 High

### 4. No Open Graph tags anywhere (legacy had them, at least for news)
Legacy's OG implementation (`view_header.php:444-452`) only covered news
article detail pages — `og:title`, `og:type`, `og:url`, `og:description`,
`og:image`. Narrow, but real. The new site has none, on any page type
(matches doc 13 finding #4, restated here specifically as *lost* coverage,
not just an absence). Any page from the new site shared in WhatsApp/LinkedIn
— which is exactly how a B2B contact forwards a product page internally —
produces a blank or generic preview.

### 5. No `robots.txt` (legacy had one, malformed but present)
Legacy's `robots.txt` has real problems worth *not* copying: every
`Disallow` line is malformed (`/https://tipcoengineering.com/...` instead of
a bare path), so they silently match nothing, and several of the disallowed
slugs (`bench-press-465326.html`, `chanel-hair-clips-105779.html`,
`mens-gi-1084782.html`) are leftover artifacts from a spam-injection hack,
not real Tipco content — consistent with the malware cleanup already noted
in `main.php`'s own comments. But it does have `Allow: /` and `sitemap:`
pointers. The new site has no `robots.txt` at all — by spec, absence means
"crawl everything," so this isn't a blocking risk, but there's currently no
place hosting a `sitemap:` pointer for crawlers, and no way to manage crawl
directives (e.g. blocking `/admin`-equivalent routes if any exist) going
forward.

### 6. No `llms.txt`
Legacy's `llms.txt` (site root, static file) is a clean, well-written,
hand-authored company/product summary — the kind of file AI answer engines
(ChatGPT, Perplexity, Claude) increasingly use to describe a business
accurately. It's not tied to the old CMS; it's static text. Given the new
site already has equivalent (better-organized) product/company copy in
`src/data/site.ts`, regenerating an equivalent `llms.txt` from that same
source of truth is low effort.

### 7. No site-verification mechanism
Legacy hardcoded a `google-site-verification` meta tag
(`view_header.php:10`) tied to the old Search Console property — that exact
value is not reusable for a new deployment, but the new site currently has
no mechanism to receive a replacement once a Search Console property for the
new domain/build exists.

---

## 🟡 Medium — net-new opportunities (neither site ever had these)

### 8. No JSON-LD structured data
Confirmed absent on both the legacy site and the new one (zero real matches
in either codebase's own code — the only `schema.org` string hits in the
legacy grep were false positives inside bundled third-party libraries).
Worth adding fresh on the new site: `Organization`/`Manufacturer` schema
site-wide, `Product` schema on catalog pages. This is a clean addition, not
a port — there's no legacy pattern to follow here.

### 9. No Twitter Card tags
Also absent on both sites, same treatment as #8 — net-new, not a regression.

### 10. Product-page titles are slug-derived, ignoring real product copy that already exists
`ProductPage.tsx` routes fall through `TitleManager`'s generic branch
(`App.tsx:88-92`): the URL slug is title-cased into `"Dyno Mill | Tipco
Engineering"`. Meanwhile `src/data/site.ts:184` already has real descriptive
copy for that same product ("Dyno Mill is an agitator bead mill with a
horizontal grinding chamber for continuous fine grinding and dispersion...")
that's never surfaced to `document.title` or any meta tag. The data needed
for genuinely good, unique per-product titles and descriptions already
exists in the codebase — it's just not wired to the head.

### 11. Confirm `/blog` doesn't strand the legacy blog's existing SEO equity
The legacy `site/blog` is a separate WordPress install running Yoast SEO,
which independently generates full JSON-LD, OG, and Twitter Card output per
post — genuinely well-optimized, just not custom Tipco code. Doc 13 (finding
under "News & Insights") already flagged that every article link on the new
homepage points at one generic `/blog` route with no per-article pages.
Worth confirming as part of any SEO work here that the WordPress blog's
existing search rankings have a real migration/redirect plan, not just a
dead-end link from the new homepage.

---

## Note on ".in" / India geo-targeting — currently unscoped

Explicitly checked both places this could live: the DNS zone inventory (no
`tipcoengineering.in` record anywhere) and both codebases (no `hreflang`, no
`geo.region` meta tags, no multi-region routing, no second-domain config
anywhere in legacy `app/config/` or the new site's `src/`). India-targeting
today exists only as **content** — the address, phone number, and company
description in `llms.txt` and the Contact page — not as technical SEO
infrastructure. If real India-specific targeting is wanted (an `hreflang`
tag, geo meta tags, or an actual second `.in` domain), that's a real,
separate decision with its own trade-offs (a second domain splits link
equity unless canonicalized carefully; `hreflang` alone doesn't need a
second domain at all) — worth defining deliberately when you're ready,
rather than guessed at here.

---

## Priority fix order

1. Ship a working `sitemap.xml` — don't port `sitemap.php`'s bugs; do enumerate every product/category/event page, ideally generated from the same route table or data files the app already uses.
2. Make meta description real and unique per route (extend `TitleManager` or replace it with a proper head-management pattern — no SEO library is currently installed, so this is a from-scratch decision, not a config change).
3. Add a canonical `<link>` per route.
4. Add Open Graph tags site-wide (title/description/image/url per route), not just on news as legacy did.
5. Restore a clean `robots.txt` (with real, working `Allow`/`Disallow` paths and a `sitemap:` pointer — not a copy of legacy's broken one) and wire up a new `google-site-verification` tag once a Search Console property exists for the new build.
6. Regenerate `llms.txt` from `src/data/site.ts`.
7. Add JSON-LD (`Organization` + `Product` schema) and Twitter Card tags — net-new, do after the regressions above are closed.
8. Confirm a redirect/continuity plan for the WordPress blog's existing SEO equity before `/blog` goes live as a dead-end.
