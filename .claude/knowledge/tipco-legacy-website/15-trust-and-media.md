# Trust Signals, Events & Company Pages — tipcoengineering.com

**Audited:** 30 June 2026
Parent index: [12-content-inventory.md](12-content-inventory.md)

---

## Company story (`/about-us`)

- **Entity:** Tipco Engineering India Pvt. Ltd. — **incorporated 2021**. Predecessor "Tipco Engineering Works"; **1985 / "Since 1985"** cited as origin.
- ⚠ **Conflicting founding dates:** About implies 1985/2021; Sales-Head message says "founded in 1980's"; MD bio implies ~2008 (18 yrs experience). **No single authoritative founding year** — needs a decision before rebuild.
- **What they make (verbatim):** "process plants and machinery required by the Chemical, Paint, Inks Pharmaceuticals, Minerals, Food, Polyester resins machines, Polyester Button and related Industries."
- **HQ/Plant:** Plot No. 1689, 1658, Sector-38, Phase-1, Rai Industrial Area, Sonipat, Haryana 131029 (single location).
- **USPs:** >90% manufacturing in-house · trial runs on lab machines before production · proven technologies running in India and abroad · readily available spare parts · "100% Hassel Free production from day one of commissioning" (sic).
- **Stats:** **None quantified** (no years/machines-installed/clients/countries numbers anywhere) — only director tenures.

## Leadership / Investors (`/investors/board-of-directors`)

Board of 5:
- **Mr. Ritesh Sharma** (37) — Chairman & Managing Director; 18 yrs (also fronts the "Sales Head Desk" page as Mr. Ritesh Sharma)
- **Ms. Sonia Sharma** (35) — Whole-time Director; HR & operations; 7 yrs
- **Mr. Anup Kumar Singh** (43) — Non-Executive Director (since Jul 2025); 12 yrs
- **Mr. Jeewan Chandra** (50) — Non-Executive Independent Director; finance; 20 yrs
- **Mr. Patterson Thomas** (34) — Non-Executive Independent Director; secretarial; 7 yrs

Extensive investor sections exist (Corporate Announcements, Committees, KMP, Group/Subsidiary Cos, Corporate Policies, **IPO details, Investor Presentations, Annual Reports, Annual Returns, Shareholding Patterns**, Investor Grievance). Breadth signals the company is **structured for / approaching a public listing**. Investor contact: +91 99966 35489 · inverstors@tipcoengineering.com (sic).

---

## Clients (`/client`)

- **17 logos** (homepage claims 29 — discrepancy). Files `client-12`…`client-29` under `/public/uploads/`, **non-sequential** (missing `client-20`).
- **All anonymous** — no company names, alt text is generic "Logo". Visitors and search engines can't tell who the clients are.
- No client logos confirmed as recognizable/named brands.

## Certifications (`/certificates`)

- **Effectively empty** — no ISO/CE/MSME/GST images, names, or numbers render. (May be JS-injected; needs live re-check, but currently shows nothing.)
- **Biggest trust gap** for an industrial-machinery buyer.

## Testimonials

- **3, on homepage only:** Arya Sahani, Rajat Shabharwal, Mayank Singh — short and generic, no company/role attribution, no photos. No written case studies anywhere.

## Events (`/event`) — strongest authentic trust signal

| Event | Date | Location | Images |
|-------|------|----------|:------:|
| Technical Session on Machinery for Chemical Industries | 13 Apr 2022 | ICT, Mumbai | 3 |
| Paint India Exhibition | 26–28 May 2022 | Jio World Convention Centre, Mumbai | 16 |
| IPCA Biennial Conference | 16–18 Sep 2022 | New Delhi | 8 |
| Paint India 2023 | 2–3 Mar 2023 | (not specified) | 13 |
| China Coating Show 2023 | 15–17 Nov 2023 | Hall E3 Booth D37, China | 15 |
| China Coating Show 2024 | 3–5 Dec 2024 | Guangzhou, Hall 3.1 F15 | 12 |
| The Colour Society Annual Seminar 2025 | 16–17 Jan 2025 | Lonavala, Maharashtra | 5 |

- Genuine, dated, photo-backed history (2022–2025). **But most recent is Jan 2025 (~18 months stale)** — no 2025 H2 / 2026 activity, suggesting the events section isn't maintained.
- ⚠ **"Caoting" typo** (should be "Coating") is baked into two live event URLs.

---

## Trust-signal gaps (redesign priorities)

1. Certifications page empty → add real ISO/CE/MSME badges (downloadable).
2. Client logos anonymous → name them, add alt text.
3. No case studies / customer stories → biggest credibility win available (no competitor has these either).
4. Video gallery renders no videos → embed real product/factory demos.
5. Only 3 generic testimonials → collect named, attributed, ideally video testimonials.
6. Events stale → keep current or reframe as an evergreen "where to meet us" + recap archive.
7. No quantified stats (years/installs/clients/countries) → add a counters/stats band (the kind Raymer botched with "0+").

---

## Corporate / utility pages summary

- **`/sales-head-desk`** — Mr. Ritesh Sharma, photo `ritesh_sir.png`, message: "TIPCO ENGINEERINS was founded in 1980's…" (sic).
- **`/partner`** — dealership/distributor recruitment; "Become a Partner" form (Name, Mobile, Email, State, Country, Message → `/send-partner`, `enquirytype=1`).
- **`/career`** — 1 open role: **Sales Executive / Technical Sales Engineer** (3 vacancies; BE Mech/Elec/Instr, 1–5 yrs B2B sales). Apply form → `/apply-postion` (multipart, photo upload).
- **`/get-quote`** — **404**. Quote is a site-wide modal → `/product-enquery` (hidden `pname` = current page; no product dropdown).
- **`/contact-us`** — phones + emails as in [12](12-content-inventory.md); **no map embed**.

**Production typos to fix:** `inverstors@`, "Hassel Free", "TIPCO ENGINEERINS", `product-enquery`, `apply-postion`, "Caoting", "Plough Sear".
