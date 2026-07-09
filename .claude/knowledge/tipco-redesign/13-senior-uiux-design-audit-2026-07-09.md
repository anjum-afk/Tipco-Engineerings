# Senior UI/UX Design Audit — Homepage (Live Build)

Audited: 9 July 2026, against the running dev build (`npm run dev`, port 5175)
via browser automation across 5 breakpoints (375 / 768 / 1024 / 1440 / 1920px),
not just a code read. Screenshots in `screenshots/2026-07-09-uiux-audit/`.

**Relationship to the other audit docs in this folder:** `11-landing-page-marketing-audit.md`
found the funnel-breaking bugs by reading code. This audit (a) **live-reproduces**
those same two critical bugs with screenshots and network logs — upgrading them
from "code-verified" to "confirmed happening in the browser" — and (b) adds what
11 didn't cover: the visual/design-quality lens (Nielsen heuristics, the team's
own design-token adherence, contrast, IA) plus three marketing-audit categories
11 named but didn't yet have hard evidence for (analytics, technical SEO,
accessibility). **`12-marketing-glossary.md` is the direct, general-purpose
answer to "what kinds of audits do marketers run on a website?"** — nine
categories, plain-English, each tied to a finding. Don't re-read that ground
here; this doc only adds findings under three of those categories and one new
one (visual/heuristic design).

---

## 🔴 Critical — confirmed live, not just in code

### 1. Header "Get a Quote" CTA — confirmed 404, in-browser
Clicked the sticky header button (present on every page). Landed on
`/contact`, rendered the "Page Not Found" page.
Screenshot: `audit-contact-404-check.png`.
Same root cause as doc 11 #1 (`Navbar.tsx:1399`, `to="/contact"` vs. the
router's `/contact-us`). **New detail doc 11 didn't have:** the 404 page's own
`<title>` reads *"Contact | Tipco Engineering"*, not "Page Not Found" — the
per-route `TitleManager` derives the title from the URL segment rather than
the actual matched route, so even the browser tab lies about what happened.

### 2. Homepage quote form — confirmed silent data loss, in-browser
Filled all 5 fields (name, company, email, phone, machine/application) and
submitted. Button changed to **"Request Sent ✓"**. Checked the full network
log for the session: zero requests to any API/enquiry/Strapi endpoint fired.
The typed data (a fake name, email, phone, and machine spec) is gone —
nothing was ever sent anywhere.
Screenshot: `audit-getquote-fake-success2.png`.
Same root cause as doc 11 #2 (`GetQuote.tsx:18-21`). One thing worth crediting
while reproducing this: the form's `required` fields do trigger real native
HTML validation (tested by submitting with the "Machine & Application" field
empty — got a proper browser-native "Please fill out this field" block) — so
this isn't a case of *no* validation, it's specifically that the one thing
that matters most (sending the data) was never wired up. The fix is smaller
than it might sound: `FloatingButtons.tsx`'s `EnquiryDrawer` already POSTs
correctly to `${VITE_STRAPI_URL}/api/enquiries` — this is a copy-the-pattern
fix, not new integration work.

---

## 🟠 High

### 3. Zero analytics or tag manager installed, anywhere
Checked the full network log for any request to Google Analytics, GTM, Meta
Pixel, Hotjar, Clarity, Segment, or Mixpanel across a full homepage load. None
fired — no tracking script is loaded at all. Doc 12's "Analytics &
Measurability" entry says a fake-success form is bad because it "will never
show up as an error in monitoring" — the finding here is more basic than
that: there's no monitoring to not show up in, for *any* interaction on the
site, working or broken. Once #1 and #2 are fixed, this should be next —
otherwise there's no way to know the fix worked, or to catch the next
regression.

### 4. Missing Open Graph tags and zero structured data
`document.title` and `meta[name=description]` are both present and
well-written (a real improvement over the legacy site per doc 12). But there
is no `og:title`, no `og:image`, no `link[rel=canonical]`, and zero
`<script type="application/ld+json">` blocks anywhere on the homepage. In
practice: sharing this page in WhatsApp, LinkedIn, or email (exactly how a
B2B procurement contact would forward it internally) produces a blank or
generic preview card, and there's no `Organization`/`Manufacturer` schema for
Google to build a rich result from. Low effort, real B2B-relevant payoff.

### 5. Desktop navigation hidden below 1280px — confirmed in both codebases
`Navbar.tsx:1354` gates the full mega-menu behind `hidden xl:flex` (1280px).
Below that — including 1024px, a completely standard laptop/iPad-landscape
width — visitors get a hamburger-only header despite there being ample room
for the real nav. Screenshot at 768px: `audit-768-top.png` (hamburger icon
only). This is the same defect independently confirmed in `TipcoNew`'s
`Navbar.tsx` (also `hidden xl:flex`) — it's a pattern carried across both
codebases, not a one-off typo, and matches the open item already logged in
memory (`tipco-redesign-pending-ui-items`). Worth deciding deliberately: does
the mega-menu content actually fit at `lg` (1024px), or was `xl` chosen for a
real reason? Either way it should be a decision, not an inherited default.

### 6. No visible trust/credibility signals on the homepage
Searched the full rendered homepage text for ISO/certification mentions,
case studies, and awards: none present. `10-content-map.md` already lists
this as one of its four universal unmet needs ("visible credibility") and
flags the underlying assets (ISO cert images, named case studies) as **not
yet produced**. This finding doesn't add new scope — it confirms that gap is
still open on the actual shipped homepage, not just in the content plan.

---

## 🟡 Medium — visual & design-quality (new lens vs. doc 11)

### 7. Hero stat-bar labels are undersized and low-contrast
`Hero.tsx:121` — the four stat labels ("Years of Expertise", "Jobs Done
In-House", etc.) render at **11px**, `color: rgba(255,255,255,0.65)`, over a
photographic factory-floor background. That's below common minimum
body/label text size (12–14px) and the reduced opacity further lowers
effective contrast against a busy image — a legibility risk against WCAG AA
guidance, and specifically relevant given the primary persona (a senior
procurement manager, per `03-user-personas.md`) skews toward an age range
where small low-contrast text is a real friction point, not a nitpick.
**Fix:** bump to at least 12–13px and raise opacity to ~0.8–0.85, or add a
subtle text-shadow/scrim behind just the stat row.

### 8. Legacy CDN dependency extends beyond the previously-known client logos
Confirmed via network log: all 34 client-logo images (`Clients.tsx`) *and*
several `NewsSection` article thumbnails (`event-12.png`, `event-14.jpg`,
`event-15.jpg`) still hot-link `https://tipcoengineering.com/public/...`.
All 44 external images loaded successfully during this audit (the July
bandwidth-cap outage tracked in `tipco-bandwidth-509-2026-07` isn't currently
active), but the redesign remains fully dependent on the old, already-proven-
fragile host staying up. Not urgent today; still a real production risk.

### 9. GetQuote background image fails to load in-browser (currently masked)
`GetQuote.tsx:29`'s hardcoded `pixnio.com` stock photo request returns
`net::ERR_BLOCKED_BY_ORB` — it never actually renders. Screenshot:
`audit-1920-getquote-broken-bg.png`. This is **not visually broken today**
only because the section also has a dark teal gradient overlay that happens
to look intentional on its own — but the section is relying on a
now-nonfunctional third-party image it doesn't need. `04-design-direction.md`
explicitly calls out "generic stock photography" as a mistake a competitor
made and told the team to avoid (see doc 12's Competitive Positioning entry)
— replacing this with a real Tipco shop-floor photo or dropping the
`background-image` entirely (the gradient alone reads fine) both fix this.

### 10. "Mobile-first" is a claimed differentiator the homepage currently contradicts
`02-competitive-analysis.md` names mobile-first as a Tipco differentiation
opportunity. `WorkingProcess.tsx`'s three genuinely distinct, well-executed
responsive layouts (desktop row / tablet 2-col / mobile vertical timeline —
confirmed live at all three breakpoints) show the team can do this well. But
the Testimonials section — the page's strongest trust signal, with real named
enterprise clients (Asian Paints, Kansai Nerolac, Berger Paints) — is fully
absent below `md` (confirmed live: it's simply missing between "Our Working
Process" and "Latest from Tipco" on the 375px full-page screenshot,
`audit-375-full.png`). Same underlying bug as doc 11 #5; framed here as a
direct contradiction of a stated positioning claim, not just a responsive gap.

### 11. Alt text is missing or generic on roughly half of homepage images
Counted programmatically: **35 of 71** `<img>` elements on the homepage have
either an empty `alt` or a generic pattern (`alt="Client 12"`, etc.) — this
includes the header/footer logo itself (`alt=""`). Doc 11 flagged the client
logos specifically (#10); this quantifies the actual scope across the whole
page. Not a blocker, but a real gap for screen-reader users and image search.

---

## 🟢 Low / polish

### 12. WorkingProcess renders 3 full copies of its content in the DOM
The desktop-row, tablet-grid, and mobile-timeline variants (`WorkingProcess.tsx`,
`hidden lg:flex` / `hidden sm:grid lg:hidden` / `sm:hidden`) all render
simultaneously; only one is visible at any given width via `display:none`.
Confirmed via computed-style check — this is **not** an accessibility issue
(`display:none` elements are correctly excluded from the accessibility tree),
just unnecessary DOM weight (12 headings instead of 4) and a maintenance cost
(any content change has to be made in three places). Low priority; worth
collapsing to one semantic list with three CSS layouts if the component is
touched again.

### 13. Hero's "See Products" button doesn't lead to products
`href="#applications"` scrolls to the Applications/industries section, not an
actual product catalog. Not a dead link, but a label/destination mismatch —
someone looking for "products" lands on "industries we serve" instead. The
mega-menu's Products panel (screenshot: `audit-megamenu-products.png`) is
genuinely well-built; this button just doesn't point at it.

---

## ✅ What's working well

Worth stating plainly, since an audit that's all findings reads as harsher
than the actual state of the build:

- **Hero** (`audit-375-hero-viewport.png`): real, legible H1 copy, resolved
  the 1985/2021 date contradiction in one honest sentence, clear paired CTAs,
  and a clean mobile layout with the stat bar visible and readable (aside
  from finding #7).
- **Product mega-menu** (`audit-megamenu-products.png`): genuinely strong —
  organized by series, real product names with one-line descriptors, "View
  all products" and "Download catalogue" both present. This is the best-built
  piece of navigation on the site; it's just not surfaced on the homepage
  itself (doc 11 #4).
- **WorkingProcess responsive execution**: three real, distinct, well-crafted
  layouts per breakpoint — this is what "mobile-first" should look like
  elsewhere on the page too (see finding #10).
- **Mobile bottom action bar** (Call / Chat / Enquiry): a smart, thumb-
  reachable persistent-contact pattern that doesn't show up in the desktop
  view — good mobile-specific thinking, not just a squeezed-down desktop
  layout.
- **`FloatingButtons`'s `EnquiryDrawer`**: a real, correctly-wired API
  integration already exists in the codebase. Fixing #2 is applying an
  existing, proven pattern, not building new backend integration.
- **`GetQuote` form fields**: proper `<label for>` / `id` association on all
  5 fields, confirmed programmatically — real accessibility groundwork
  already in place, worth preserving whenever this form is touched.
- **Testimonials content**: real named enterprise clients, not placeholder
  quotes — the trust signal itself is good; it's only the mobile visibility
  (finding #10) holding it back.

---

## Live persona-journey check

Ran the primary persona's documented path end-to-end (`03-user-personas.md`,
Procurement Manager "Rajesh"): mega-menu → Products → Mill Series works well
and surfaces real spec-relevant product names. But both routes back to
actually requesting a quote — the header CTA and the homepage's own form —
are broken (#1, #2). Rajesh can find a machine but cannot get a price through
either of the two most prominent paths on the page; only the floating
"ENQUIRY" tab (unexplored by a first-time visitor scanning the main content)
actually works.

---

## Priority fix order (merges with doc 11's; only new items added)

1. Fix header CTA route (doc 11 #1) — one-line fix, highest-visibility bug on the site
2. Wire `GetQuote.tsx` to the existing Strapi endpoint (doc 11 #2)
3. Install basic analytics/tag manager (#3) — do this alongside #1/#2 so the fix is measurable
4. Add `og:title` / `og:image` / canonical + basic `Organization` JSON-LD (#4)
5. Decide the nav breakpoint deliberately — `lg` vs `xl` (#5)
6. Fix Hero stat-bar contrast/size (#7) — small, isolated CSS change
7. Everything else in priority order from doc 11, plus #6, #8–#13 here as backlog

---

## Screenshots reference

All in `screenshots/2026-07-09-uiux-audit/`:
- `audit-1920-full.png` — full homepage, desktop (1920px)
- `audit-375-full.png` — full homepage, mobile (375px) — shows the Testimonials gap (#10)
- `audit-768-top.png` — tablet header, hamburger-only nav (#5)
- `audit-375-hero-viewport.png` — mobile hero close-up
- `audit-contact-404-check.png` — live 404 from the header CTA (#1)
- `audit-getquote-fake-success2.png` — live fake "Request Sent ✓" (#2)
- `audit-1920-getquote-broken-bg.png` — GetQuote section (#9)
- `audit-megamenu-products.png` — Products mega-menu (referenced in ✅ and #13)
