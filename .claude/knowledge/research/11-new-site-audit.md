# New React Site Audit — Beyond SEO (Lead Capture, Analytics, Stubs)

**Audited:** 11 July 2026 — code-level sweep of the new React build (`src/`). Complements the SEO work; covers what actually happens when a buyer tries to convert.

**Status: DEFERRED — user chose to do this later (11 Jul 2026). This is the top-priority resume point.**

Related: [10-seo-execution-plan.md](10-seo-execution-plan.md) (Phase 0.5) · [09-marketing-for-lead-gen.md](09-marketing-for-lead-gen.md) · [06-lead-gen-seo-priority.md](06-lead-gen-seo-priority.md)

> **The core problem:** the SEO strategy drives buyers to lead forms that throw the leads away. Ranking without a working form = wasted traffic. Fix this BEFORE more SEO.

---

## 🔴 CRITICAL — lead capture broken on the pages we're optimizing

| # | Finding | Evidence | Impact |
|---|---|---|---|
| 1 | **Homepage "Get Quote" form discards every lead** | `src/components/GetQuote.tsx:18-21` — `handleSubmit` = `preventDefault(); setSubmitted(true)`. Shows "Request Sent ✓", sends nothing. | Every homepage quote lost |
| 2 | **Product-page enquiry form also fake** | `src/pages/ProductPage.tsx:101` — `onSubmit={e => { e.preventDefault(); setSent(true) }}`. This is the form on the Bead Mill / Dyno Mill page (the #1 SEO target). | Every product enquiry lost |
| 3 | **No analytics anywhere** | `gtag`/GA4 in zero source files (only in docs). | Blind to leads AND SEO results |

**The fix is easy — a backend already exists.** The Contact Us form works: `src/pages/ContactUs.tsx:124` posts to **Strapi** (`${VITE_STRAPI_URL}/api/enquiries`). Wire the two fake forms to that same endpoint (~half a day).

## 🟠 HIGH

| # | Finding | Detail |
|---|---|---|
| 4 | Working form depends on env var | ContactUs needs `VITE_STRAPI_URL` set in production or it silently fails. Verify on the live deploy. |
| 5 | 12 empty placeholder pages | `AppRoutes.tsx` renders bare `InfoPage` stubs for **catalogue, FAQ, certificates, partner, video-gallery, photo-gallery**, etc. Catalogue/FAQ/certificates are lead & trust assets (catalogue = lead magnet); currently empty. Thin content hurts SEO too. |
| 6 | Hero image hotlinked externally | `GetQuote.tsx:29` pulls its background from `pixnio.com` — unreliable (can break), privacy/CSP liability on a commercial site. |

## 🟡 MEDIUM / polish

- **Soft 404s** — SPA returns HTTP 200 for unknown URLs; Google treats as thin/duplicate. Needs real 404 status.
- **Favicon mismatch** — `index.html:5` declares `type="image/jpeg"` but points at `favicon.svg`.
- **Blog** — single stub route, no per-article pages (also in SEO plan).
- **No runtime browser check yet** — prerendered HTML verified; live behaviour (forms/nav) not driven in a browser.

## ✅ Fine
Phone (`tel:`) + WhatsApp links work (`FloatingButtons.tsx`); Contact form works; SEO foundation (Phase 0) solid.

---

## Phase 0.5 — do FIRST when resuming (before more SEO)
1. Wire GetQuote + ProductPage forms → Strapi `/api/enquiries` (fix #1, #2).
2. Add GA4 + conversion events on quote submit / WhatsApp / call (fix #3).
3. Verify `VITE_STRAPI_URL` is set in production (fix #4).
4. Add WhatsApp fallback CTA on those forms (lead reaches Tipco even if backend hiccups).
5. Self-host the GetQuote hero image (fix #6).

Everything else (schema, speed, authority) is downstream: **ranked page + working form = lead; ranked page + fake form = nothing.**