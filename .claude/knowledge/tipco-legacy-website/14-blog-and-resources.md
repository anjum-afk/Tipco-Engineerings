# Blog & Resources — tipcoengineering.com

**Audited:** 30 June 2026
Parent index: [12-content-inventory.md](12-content-inventory.md)

---

## Blog

| Attribute | Finding |
|-----------|---------|
| Exists? | Yes — `/blog`, paginated `/blog/page/N/` (WordPress-style) |
| Total posts | **~115–120** (12 archive pages × 10/page; 40 enumerated directly) |
| Actively maintained? | **Yes — very active.** Most recent post 15 Jun 2026 (15 days before audit) |
| Frequency | ~2–3 posts/week, steady ≥9 months back to Sep 2025 |
| Author | **"admin" on every post** — no named human bylines |
| Category | **One category for all posts: "Machines"** — no taxonomy |
| In sitemap.xml? | **NO** — ~115 posts invisible to the XML sitemap |

### What kinds of blogs (content-type breakdown)
Every post is an SEO keyword page funnelling to product pages. Sub-types:

| Type | ~Share | Example |
|------|:------:|---------|
| Product/equipment overview | 40% | "High Performance Ribbon Blender Machines" |
| "Why choose Tipco" promo | 20% | "Why Tipco Is a Trusted Mill Manufacturer in India" |
| Buying / selection guide | 15% | "Choosing the Best Putty Mixer Machine" |
| Technical "What is / how it works" | 12% | "What Is an Attritor Mill?" |
| Comparison ("X vs Y") | 5% | "Mixing Machine vs Blender vs Homogenizer" |
| Listicle ("Top N…") | 5% | "Top 10 Advantages of Using a Bead Mill" |
| Industry / pricing / novelty | 3% | "Mixing Machine Price Trends in India"; "Organic Paint from Cow Dung" |

### Quality & gaps
- Real, readable articles but **thin-to-moderate** (450–800 words; most 450–600). Keyword-stuffed tag clouds confirm search-ranking intent.
- **No E-E-A-T:** single "admin" author, no engineer bios, no expertise signals.
- **No case studies, no company news, no event recaps, no customer stories** — all evergreen SEO copy.
- **Cannibalization risk:** many overlapping posts on the same product (multiple ribbon-blender, putty-mixer, twin-shaft, bead-mill articles competing for the same keywords).
- **Topics by frequency:** ribbon blenders, putty/wall-putty mixers, bead/dyno mills, twin-shaft dispersers, homogenizers, lab machines, ball mills, attritor mills.

### Recommendations
Named expert authors · real category taxonomy + reader-facing tag pages · add the blog to sitemap.xml · consolidate cannibalizing posts · add genuine case studies and a few deep technical pillar pages.

---

## Catalogue

- **Format:** interactive PDF **flipbook** (~34 pages, images `_02.jpg`→`_36.jpg` under `/public/uploads/`), with prev/next/zoom/fullscreen/thumbnails.
- **Gating:** ungated — viewable without a form.
- **Problem 1:** the page emits **PHP errors** (`ini_set(): Headers already sent`, session errors from `app/controllers/Catalogue.php`).
- **Problem 2:** the "Download" button has **no discoverable PDF href** — if JS fails, the download is unreachable.
- **Problem 3:** this single generic catalogue is also the target of most product "Download Brochure" buttons (see [13](13-product-catalog.md)) — there is no per-product literature.

---

## Video gallery (`/video-gallery`)

- **No videos render** in static HTML. Only a link to the YouTube channel **`https://www.youtube.com/@tipcoengineering`**.
- No iframe embeds, no watch URLs, no self-hosted `.mp4`. Items (if any) are JS-rendered — needs a live re-check to confirm whether the gallery is populated or empty.
- No product page embeds a video despite a "Video" nav/tab appearing on some.

---

## Photo gallery (`/photo-gallery`)

- **7 photos** ("Company Gallery", `photo-35`…`photo-44` range), uncategorized.
- Appear to show facility / equipment / production lines. No event/team/product separation. Thin for a manufacturer.

---

## Other resource pages

- **`/service`** — no actual after-sales service list (no Installation/AMC/Spare-parts/Training detail). Functions as a product landing page + "Register For Machine Service" CTA. Thin.
- **`/faq`** — heading + accordion present, but **questions are JS-injected and rendered empty** in static HTML. Count unconfirmed (may be empty). Needs JS re-check.
