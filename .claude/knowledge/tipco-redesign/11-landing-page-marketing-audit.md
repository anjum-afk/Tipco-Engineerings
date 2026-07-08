# Landing Page Marketing Audit — Homepage (React redesign)

Audited: 8 July 2026. Scope: `src/pages/Home.tsx` and everything it renders
(`Hero`, `Applications`, `WorkingProcess`, `TestimonialsSection`, `NewsSection`,
`Clients`, `GetQuote`) plus the persistent chrome (`TopBar`, `Navbar`, `Footer`,
`FloatingButtons`). Read against `01-pre-design-briefing.md`, `03-user-personas.md`,
`04-design-direction.md`, and the legacy-site issue list in
`../tipco-legacy-website/06-issues-prioritized.md`, plus the 2 July 2026 live-site
persona audit (`tipco-legacy/PERSONA-ANALYSIS-tipcoengineering.md`).

Method: static code read + route-table cross-check, not a live click-through (no
dev server was running at audit time). Findings below are code-verified (file:line),
not visual impressions.

---

## 🔴 Critical — funnel-breaking, fix before anything else

### 1. The header's "Get a Quote" button 404s
`Navbar.tsx:1398-1405` — the sticky-header CTA, present on **every page of the
site**, is `<Link to="/contact">`. The router (`App.tsx:106-140`) only defines
`/contact-us`; there is no `/contact` route, and the catch-all `path="*"` renders
the "Page Not Found" page. Every visitor who clicks the single most prominent,
highest-intent button on the site lands on a 404. This is the exact class of bug
flagged as priority #1 against the live legacy site on 2 July 2026 ("Get Quote"
→ `#`) — it has recurred in the rebuild under a new form.
**Fix:** change `to="/contact"` → `to="/contact-us"`.

### 2. The homepage's own quote form doesn't submit anywhere
`GetQuote.tsx:18-21`:
```js
function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
  setSubmitted(true)
}
```
No `fetch`/network call. The form shows "Request Sent ✓" and discards the data.
Compare `FloatingButtons.tsx`'s `EnquiryDrawer`, which correctly POSTs to
`${VITE_STRAPI_URL}/api/enquiries`. This is worse than a dead link because it
*looks* successful — leads submitted through this specific form vanish silently
and nobody will know to complain.
**Fix:** wire `GetQuote.tsx` to the same Strapi endpoint as `EnquiryDrawer`.

### 3. Three different "get a quote" paths, only one of which works
On a single page view a visitor can hit: the header button (→ 404, #1 above),
the Hero's "Get a Quote →" (scrolls to the broken form, #2 above), or the
floating "ENQUIRY" tab / mobile action bar (→ opens `EnquiryDrawer`, which
actually works). Right now the only functioning quote path on the whole
homepage is the floating tab. This should be one component, not three.

---

## 🟠 High — strategy/persona gaps

### 4. No product showcase on the homepage
`Home.tsx:9-21` renders `Hero → Applications → WorkingProcess →
TestimonialsSection → NewsSection → Clients → GetQuote`. There is no product/
machine grid. `04-design-direction.md` (§Homepage structure) put "Product
Categories — 6–8 cards" at position 3, right after the hero, and
`03-user-personas.md` says the primary persona (Procurement Manager) "skips
hero and goes straight to products." A `Products.tsx` component exists in
`src/components/` but is not imported into `Home.tsx`. Right now that persona's
top need is served only via the nav mega-menu, not on the page itself.

### 5. Testimonials are invisible on mobile
`TestimonialsSection.tsx:209` — `className="hidden overflow-hidden py-16 ...
md:block ..."`. The section literally does not render below the `md` breakpoint.
`01-pre-design-briefing.md` itself calls out "mobile usage is likely 50–60%+ of
visits." Whatever fraction that is, they currently see zero client testimonials
on the homepage — the single strongest trust signal for a ₹10–50L B2B purchase.

### 6. Investors nav still lands on Board of Directors
`Navbar.tsx:257-259` and `site.ts` route `Investors` (and its footer link,
"Investor relations →") straight to `/investors/board-of-directors`. The 2 July
persona audit flagged this exact issue on the live site as the least-sought
investor page; it has been carried into the redesign unchanged.

### 7. Client logos and product images still hot-link the legacy, bandwidth-capped server
`Clients.tsx:16` and the `CDN` constant in `data/site.ts:6` point image `src`
at `https://tipcoengineering.com/public/uploads/...`. That production account
is *currently* mid-outage on a 9.77 GB/month bandwidth cap (see
`tipco-bandwidth-509-2026-07` memory) — every homepage load on the new site
still pulls ~17 logo images plus category imagery from the same fragile origin
it's supposed to replace. `Hero.tsx` and `Applications.tsx` already do this
correctly with local `/img/...` assets — `Clients.tsx` and `data/site.ts` are
the two hold-outs.

---

## 🟡 Medium

### 8. Generic stock photo in the highest-conversion section
`GetQuote.tsx:29` — background image is `https://pixnio.com/free-images/...`,
an unrelated stock photo, hot-linked from a third-party site, in the section
whose whole job is to convert. `04-design-direction.md` (§What to Avoid)
explicitly lists "Generic stock photography — Abster mistake — use real machine
photos" as a competitor mistake not to repeat.

### 9. "News & Insights" articles are dead ends
Every entry in `NEWS_ARTICLES` (`data/site.ts:351-416`) has `href: '/blog'` —
identical for all 8 articles. On the homepage's featured-article + 3-card grid
and on the `/blog` listing itself, every "Read article" / "Read more" link
goes to the same generic blog index, never to the actual story. Combined with
headlines like "Tipco Launches Next-Generation Nano Bead Mill" and "ISO
9001:2015 Recertification" that read as specific company news but have no
backing detail page, this section currently reads as decorative rather than
real editorial content — risk of looking exactly like the "dormant company"
signal the legacy empty-news-heading issue was flagged for, just dressed up.

### 10. Client logos still have non-descriptive alt text
`Clients.tsx:17` — `alt={\`Client ${c.id}\`}`. Flagged in the 2 July audit
("bare-name testimonials... no real company names") and still present here for
the logo strip specifically (testimonials themselves were fixed — see below).

### 11. Hero's "See Products" CTA doesn't go to products
`Hero.tsx:105-113` — the button reads "See Products" but its `href="#applications"`
scrolls to the *Applications* section (industry/process cards), not to an
actual machine listing. A visitor scanning for "Bead Mill" or "Disperser" specs
won't find them there — only in the nav mega-menu. Minor, but it's a
promise/destination mismatch on a primary CTA.

---

## ✅ Confirmed fixed since the 2 July 2026 live-site audit

- **1985-vs-2021 contradiction**, previously the #1 credibility issue, is now
  resolved with one honest sentence in the hero copy: *"Incorporated in 2021 to
  carry forward a 35-year manufacturing legacy"* (`Hero.tsx:91-95`). Good fix —
  keep this exact framing everywhere else the two numbers appear (About page,
  footer, etc.).
- **Testimonials now carry real company names** — Asian Paints Ltd., Kansai
  Nerolac Paints, Berger Paints India (`TestimonialsSection.tsx:81-103`),
  fixing the "bare name, no company" issue. *(Caveat: verify these are real,
  consented customer quotes before shipping — attributing invented quotes to
  identifiable public companies is a legal exposure, not just a content nit.)*
- **H1 exists on the homepage** (`Hero.tsx:82`), fixing the legacy site's most
  critical SEO issue.
- **Per-route document titles** are wired up via `TitleManager` in `App.tsx`,
  so at least `<title>` (not yet `<meta description>`) varies per page.
- Strong early credibility signals now surface in the nav itself — DRDO
  "Exclusive" badge, Lexamix European R&D partnership, "Try before you buy"
  lab-trial CTA — serving the partner/investor persona before they even land
  on a page.

---

## Priority fix order

1. `Navbar.tsx:1399` — `/contact` → `/contact-us` (one-line fix, highest impact)
2. Wire `GetQuote.tsx` to the real enquiry endpoint (or delete the section and
   point its CTA at the working `EnquiryDrawer`)
3. Collapse the three quote paths into one consistent component/behavior
4. Add a product/machine grid to the homepage, between Hero and Applications
5. Give Testimonials a real mobile layout instead of `hidden ... md:block`
6. Point Investors nav at an overview page, not Board of Directors
7. Move `Clients.tsx` logos and `data/site.ts` category/product images to
   local `/img/...` assets, off the legacy origin
8. Replace the GetQuote stock photo with a real Tipco factory/machine photo
9. Either write real article pages or soften the section to "Company Updates"
   teasers that don't over-promise a full story
10. Fix generic `alt="Client N"` text with real company names where logos are
    licensed for display

## Open question surfaced by this audit

There are now **two divergent copies** of this redesign: `d:\Program\TipcoNew`
(per `tipco-redesign-pending-ui-items` memory — an older `Hero.tsx` that's a
static image-carousel replica of the legacy banner) and this repo,
`d:\Program\Projects\My product\Tipco-Engineerings` (a materially more advanced
build — mega-menu, Strapi-backed enquiry form, AI chat widget, the fixed hero
copy above). Confirm with the team which one is the actual line of development
before doing further redesign work, so fixes aren't applied to the abandoned copy.