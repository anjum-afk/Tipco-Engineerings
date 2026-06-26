# User Flows — Key Journeys

Last updated: 25 June 2026
Based on: user personas (03-user-personas.md), new sitemap (06-sitemap.md)

---

## Flow 1: Search → Product → Enquiry
**The primary conversion flow — most important to optimise**

**User:** Procurement Manager (Rajesh) searching for a specific machine
**Entry:** Google organic search
**Goal:** Submit an enquiry / get a quote

```
[Google: "dyno mill manufacturer India"]
        │
        ▼
[Product Detail Page: /products/mill-series/dyno-mill]
        │
        ├─ Reads: product name, key specs summary (above fold)
        ├─ Views: image gallery
        ├─ Reads: full spec table
        ├─ Checks: applications list (pharma, paint, chemical)
        │
        ▼
[Decision point]
        │
        ├─── WhatsApp ──────────────────────► [WhatsApp chat — immediate response]
        │
        └─── Get Quote CTA ─────────────────► [Enquiry Form (4 fields)]
                                                      │
                                                      ▼
                                              [Thank You Page]
                                              "We'll respond within 24 hours"
                                              + Download Catalogue CTA
```

**Design requirements this flow reveals:**
- Product page must load in under 2 seconds (user came from search, high bounce risk)
- "Get Quote" CTA must be visible without scrolling (sticky sidebar on desktop, sticky bar on mobile)
- WhatsApp must be 1 tap on mobile — not buried
- Spec table must be scannable — no buried in tabs
- Thank You page should keep the user engaged (catalogue download, related products)

---

## Flow 2: Homepage → Browse → Enquiry
**Discovery flow — visitor knows they need a machine, not sure which**

**User:** Procurement Manager or Plant Engineer browsing options
**Entry:** Homepage via branded search, direct URL, or referral
**Goal:** Find the right product category → specific product → enquire

```
[Homepage]
        │
        ├─ Sees: hero (company positioning + CTA)
        ├─ Sees: product category grid (6 cards)
        │
        ▼
[Clicks: "Mill Series" card]
        │
        ▼
[Category Page: /products/mill-series]
        │
        ├─ Sees: category description
        ├─ Sees: product cards (6–10 products)
        ├─ Filters: by application (paint/pharma/chemical)  ← optional
        │
        ▼
[Clicks: specific product card]
        │
        ▼
[Product Detail Page: /products/mill-series/dyno-mill]
        │
        ▼
[Enquiry (same as Flow 1 endpoint)]
```

**Design requirements this flow reveals:**
- Homepage product grid must be immediately visible (first or second scroll)
- Category cards must show: name + 1-line description + photo — enough to choose correctly
- Category page needs a brief filter (by industry) so users can narrow down quickly
- Related products at the bottom of product detail page helps users who picked wrong product

---

## Flow 3: Industry Search → Industry Landing → Product → Enquiry
**Industry-specific flow — high SEO value**

**User:** Lab Technician or Plant Engineer searching for machines for a specific industry
**Entry:** Google search for industry-specific term
**Goal:** Find machines suitable for their industry → enquire

```
[Google: "bead mill for pharmaceutical industry India"]
        │
        ▼
[Industry Page: /industries/pharma]
        │
        ├─ Reads: pharma industry overview (processing challenges)
        ├─ Sees: "Recommended Machines for Pharma" — product cards
        ├─ Sees: "Why Tipco for Pharma" — 3 differentiators
        │
        ▼
[Clicks: product card]
        │
        ▼
[Product Detail Page: /products/[category]/[product]]
        │
        ▼
[Enquiry (same as Flow 1 endpoint)]
```

**Design requirements this flow reveals:**
- Industry pages need real, unique written content (not just a product list) to rank on Google
- Product cards on industry pages should be pre-filtered (only show relevant machines)
- Industry page needs its own "Get Quote for [Industry]" CTA — not just a generic form

---

## Flow 4: Exhibition Follow-up → Trust Check → Contact
**Credibility flow — visitor already knows Tipco, checking legitimacy**

**User:** Exhibition attendee or referral who was given the website URL
**Entry:** Direct type-in or branded Google search
**Goal:** Verify company credibility → contact

```
[Homepage]
        │
        ├─ Sees: hero (confirms this is Tipco Engineering)
        ├─ Sees: client logos strip (trust signal)
        ├─ Scrolls: looks for certifications / "Why Tipco"
        │
        ▼
[Clicks: About → Certifications  OR  About → Our Clients]
        │
        ├─ Sees: ISO / CE certification images
        ├─ Sees: client logo grid
        │
        ▼
[Clicks: Contact]
        │
        ▼
[Contact Page]
        │
        ├─ Finds: phone number, email, address, map
        └─ OR fills: contact form
```

**Design requirements this flow reveals:**
- Client logos must appear on homepage (not just a separate /clients page)
- Certifications should appear on About page AND optionally as a trust badge near the footer
- Contact page must have phone, email, address, WhatsApp link, and a map embed
- Company founding story and team photo on About page helps this audience

---

## Flow 5: Return Visitor → Catalogue Download
**Resource flow — user wants technical documentation**

**User:** Lab Technician doing detailed research before purchase
**Entry:** Direct or search; may have visited before
**Goal:** Download product catalogue or specific product datasheet

```
[Homepage or Product Page]
        │
        ▼
[Clicks: "Download Catalogue" CTA]
        │
        ├─── Option A: Direct PDF download (no gate)
        │              Simple, high conversion
        │
        └─── Option B: Gated (name + email required)
                       Captures lead data
                       Lower conversion but builds email list
```

**Recommendation:** Use a **soft gate** — show the PDF in browser (flipbook viewer), offer download with minimal form (name + email only). Don't block access entirely.

**Design requirements this flow reveals:**
- "Download Catalogue" CTA should appear on: homepage (Resources nav/footer), product pages, contact page
- If gating: form must be minimal (2 fields max)
- Catalogue page should also have a WhatsApp CTA for users who prefer direct contact

---

## Enquiry Form — Field Specification

Based on the user flows, the enquiry form needs to be **short but qualified**:

### Standard Enquiry Form (product pages, homepage)
```
Name*              [_________________________]
Company*           [_________________________]
Mobile / WhatsApp* [_________________________]
Requirement*       [_________________________] (dropdown or textarea)
```
4 fields. Email is optional — mobile/WhatsApp is the primary contact method in this market.

### Extended Form (Contact page only)
```
Name*              [_________________________]
Company*           [_________________________]
Mobile / WhatsApp* [_________________________]
Email              [_________________________]
Product of Interest[_________________________] (dropdown)
Message            [_________________________]
```

**Why mobile over email as required field:**
- Indian B2B buyers strongly prefer WhatsApp/phone follow-up over email
- Current form already uses phone — keep this behaviour

---

## Critical Page Priority (from all flows)

| Priority | Page | Why |
|----------|------|-----|
| 1 | Product Detail Page | Endpoint for Flow 1, 2, 3 — highest conversion impact |
| 2 | Category Landing Page | Gateway for Flow 2 — browse experience |
| 3 | Homepage | Entry for Flow 2, 4 — first impression |
| 4 | Industry Landing Page | Powers Flow 3 — SEO opportunity |
| 5 | Contact Page | Endpoint for Flow 4 |
| 6 | About / Certifications | Trust validation for Flow 4 |
| 7 | Resources / Catalogue | Powers Flow 5 |
