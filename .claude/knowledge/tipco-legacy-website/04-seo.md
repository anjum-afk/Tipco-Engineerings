# SEO Audit

## How SEO is implemented (code-level mechanism)

The legacy site is server-rendered PHP (CodeIgniter 3), so all SEO tags are emitted server-side. There are **five moving parts**:

**1. Per-page meta tags — database-driven (the one genuinely good part).**
All `<title>` / `<meta description>` / `<meta keywords>` are emitted from a single file, `site/app/views/view_header.php`, via a large `if/elseif` chain keyed on the current page (`$class_name` / URI segment). Each branch pulls that page's meta from its own DB table and echoes it, e.g. (view_header.php:112-120):
```php
if($class_name == 'home') {
    echo '<meta name="description" content="'.$page_home['meta_description'].'">';
    echo '<meta name="keywords" content="'.$page_home['meta_keyword'].'">';
    echo '<title>'.$page_home['title'].'</title>';
}
```
Source tables: `tbl_page_home`, `tbl_page_about`, `tbl_portfolio` (products), `tbl_page_news`, `tbl_page_service`, etc. — all editable from the admin at **`/backend/admin/Page`**. This "editable per-page meta from an admin panel" is the pattern worth keeping (the new CMS gives it cleanly).
- **Caveat:** several secondary pages skip the DB and hardcode non-unique titles — `<title>All Products</title>`, `<title>Our Clients</title>`, `<title>Our Career</title>`, `<title>All Category</title>` (view_header.php:214,252,368,404). No keyword targeting, identical every visit.
- The `meta keywords` tag is still populated on every page — ignored by search engines for 10+ years; pure overhead.

**2. Canonical tag — present but broken (view_header.php:104).**
```php
echo '<link rel="canonical" href="'.base_url().$segment_1.'/'.$segment_2.'">';
```
It echoes the *raw requested URL* back at itself on every page instead of pointing at one normalized authoritative URL — so trailing-slash/case/query-string variants each canonicalize to themselves. This is the root cause of the URL-duplication problem below. Also interpolates URI segments into an `href` with no escaping.

**3. Sitemap — a dynamic PHP generator, not a static file.**
`sitemap.xml` is rewritten to `site/sitemap.php` via `.htaccess`. It opens its **own raw `mysqli` connection** (bypasses CodeIgniter, has a committed placeholder password string and no error handling — emits a PHP error into the XML if the DB fails), prints a hardcoded list of static URLs, then loops the DB for product/category, event, and career URLs. Defects:
- Submits utility pages `/login`, `/register`, `/reset` to Google (sitemap.php:33-43,153-156).
- **Every** `<url>` hardcodes `priority=1.00` and a frozen `lastmod=2023-10-31` — the "last modified" never changes, training crawlers to distrust it.
- **Missing content types:** news articles, single services, testimonials, investors, and team pages are never enumerated (though each has its own meta fields).

**4. robots.txt — allows crawling but polluted.**
Correctly `Allow: /` and lists the sitemaps, but carries leftover **SEO-spam-hack** `Disallow` lines with absolute-URL paths (e.g. `Disallow: /https://tipcoengineering.com/chanel-hair-clips-105779.html`) that match nothing (inert junk), and mis-declares `llms.txt` as a `sitemap:` directive. Also does not disallow `/backend/admin/`.

**5. Structured data & social cards — almost entirely absent.**
- **JSON-LD: none anywhere** (no Organization/Product/BreadcrumbList/FAQPage) — forfeits all rich results.
- **Open Graph:** exists on the **news single-item view only** (view_header.php:444-452); product/service/event/about/contact pages have none — shared links render with no card.
- **Twitter Cards:** none.

**Set up correctly:** SEO-friendly URLs (CI routing), Google Search Console verification tag (view_header.php:10), `www`→apex 301 in `.htaccess`. The separate WordPress **`/blog`** handles its own SEO well via **Yoast SEO 26.5**.

**One-line summary:** a solid DB-driven per-page meta system sitting on top of a broken canonical, a low-quality auto-generated sitemap, a spam-polluted robots.txt, and zero structured data / social cards. For the redesign: keep the editable-per-page-meta idea (via the CMS); rebuild canonical, sitemap, JSON-LD, OG tags, and alt text from scratch. Full file:line detail in `D:\legecy-website\.claude\knowledge\seo-audit.md`.

---

## Meta tags (homepage)

| Tag | Value | Status |
|-----|-------|--------|
| `<title>` | "Tipco Engineering" | Weak — no keywords, no location |
| `<meta name="description">` | "Tipco Engineering India Pvt. Ltd., incorporated in 2021, is primarily a manufacturer…" | Generic — not page-specific |
| `<meta name="keywords">` | "Tipco Engineering, Machine Manufacturing " | Outdated — ignored by all search engines |
| `<meta name="viewport">` | `width=device-width, initial-scale=1.0` | Correct |
| `<link rel="canonical">` | `https://tipcoengineering.com//` | **BROKEN — double trailing slash** |
| Open Graph tags | None | Missing |
| Twitter Card tags | None | Missing |
| JSON-LD structured data | None | Missing |
| `<html lang>` | `en` | Correct |

## Heading structure (homepage)

```
(no H1)           ← CRITICAL — homepage has zero H1 elements
H2: About Tipco Engineerings      ← Typo: "Engineerings"
H2: Our Working Process
  H3: Understand Organization Requirements  ← Duplicate (appears twice in DOM)
  H3: Planning & Designing                  ← Duplicate (appears twice in DOM)
  H3: Production                            ← Duplicate (appears twice in DOM)
  H3: Machine Installation                  ← Duplicate (appears twice in DOM)
H2: PRODUCTS & SOLUTIONS
  H3: Mill Series
  H3: Production Line
  H3: laboratory Machines        ← Lowercase 'l'
  H3: Homogenizers
H2: Industry / H2: Process / H2: Production Setup
  H3: (subcategories)
H3: Arya Sahani                  ← Testimonial name as H3 (wrong semantics)
H3: Rajat Shabharwal
H3: Mayank Singh
H2: LATEST NEWS & ARTICLES
H2: Our Clients
H2: Get Quote Now
H3: About Us / Information / Quick Link / Products / Machine Series / Contact Us  ← Footer headings
```

**Problems:**
- No H1 anywhere on homepage
- H3s used for testimonial author names (should be `<cite>` or `<p>`)
- H3s duplicated in DOM (each process step appears twice)
- Footer uses H3 for every column heading — footer headings should not be H3

## URL duplication (most serious SEO issue)

Same product exists at multiple URLs without canonical tags:
```
/mill-series/dyno-mill          ← intended canonical
/milling/dyno-mill
/paint/dyno-mill
/pharma/dyno-mill
/ink/dyno-mill
/paint-production/dyno-mill
/ink-production/dyno-mill
/production-setup/dyno-mill
```

**Impact**: Google splits ranking signals across all 8 URLs instead of concentrating them on one.
**Fix needed**: Add `<link rel="canonical" href="/mill-series/dyno-mill">` on all application-context variants.

## `lab-machines` vs `laboratory-machines` duplicate sections
Both exist as separate sitemap sections with identical product sets:
- `/lab-machines/lab-high-speed-disperser`
- `/laboratory-machines/lab-high-speed-disperser`

These are exact duplicate sections — one must be canonical or one must 301 redirect.

## Robots.txt
```
# Current (broken):
Disallow: /https://tipcoengineering.com/some-path

# Should be:
Disallow: /some-path
```
None of the 11 disallow rules are currently enforced due to malformed paths.

## Google Search Console
Verification tag present: `gsal_qxgZ_0YVKf_ZrS-PgGJZGfXTsXswaola_UM1Wo`
GSC is presumably set up — check for manual actions or crawl errors in GSC dashboard.

## Sitemap
- 211 URLs in main sitemap (confirmed)
- Blog sitemap referenced in robots.txt (`Sitemap: .../blog-sitemap.xml` or similar) — content unclear
- `llms.txt` referenced in robots.txt — unusual; appears to be an LLM context file

## Missing structured data (high SEO value for this industry)

| Schema type | Where needed | Benefit |
|-------------|-------------|---------|
| `Organization` | Homepage | Rich result for brand searches |
| `Product` | Every product page | Price, availability, reviews in SERPs |
| `BreadcrumbList` | All inner pages | Breadcrumb trail in Google results |
| `FAQPage` | `/faq` | FAQ rich result |
| `LocalBusiness` | Contact page | Local search appearance |
| `Event` | `/event` pages | Event rich result |

## Content quality issues
- Hero slider says "Since 1985" but body text says "incorporated in 2021" — contradictory
- Product pages have descriptive content and specs (good for SEO)
- Image alt text: 45/46 images have no alt text — search engines cannot index image content

## Recommended immediate SEO fixes (in order)
1. Add H1 to homepage (e.g., "Industrial Process Machinery Manufacturer — Tipco Engineering")
2. Fix canonical tag (remove double slash)
3. Add canonical tags on all application-context product pages pointing to machine-type URL
4. Add Open Graph and Twitter Card tags
5. Fix robots.txt disallow path format
6. Add JSON-LD Organization schema to homepage
7. Add JSON-LD Product schema to all product pages
8. Resolve "Since 1985" vs "incorporated in 2021" content conflict
9. Add descriptive page-specific meta descriptions to product pages
10. Resolve `lab-machines` / `laboratory-machines` duplication with a 301 redirect
