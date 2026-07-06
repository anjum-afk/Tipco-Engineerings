# Content Map — Tipco Engineering Redesign

**Created:** 30 June 2026
**Purpose:** Map every page in the new sitemap to its target persona(s), industry angle, conversion goal, and required content blocks — the bridge between research and design/build.

**Inputs:** [06-sitemap.md](06-sitemap.md) (page list) · [../research/02-buyer-personas.md](../research/02-buyer-personas.md) (6 personas) · [../research/03-industry-analysis.md](../research/03-industry-analysis.md) (Paint War tailwind) · [../research/04-business-and-ipo-profile.md](../research/04-business-and-ipo-profile.md) (listed-company credibility) · content inventory [../tipco-legacy-website/12-content-inventory.md](../tipco-legacy-website/12-content-inventory.md).

**Persona shorthand:** P1 Owner-Buyer (SME) ⭐ · P2 Procurement Mgr · P3 Project/Plant Engineer 🚀 · P4 R&D/Lab Tech · P5 Export Buyer · P6 Investor 📈

---

## The 4 universal needs (every conversion page must satisfy)
From persona research, the same four unmet needs recur across all buyers:
1. **Fast specs** — key specs visible without drilling 3 levels deep.
2. **Downloadable datasheet (PDF)** — per product; currently 0 exist (the #1 content gap).
3. **Visible credibility** — ISO certs, named clients, case studies, public-company status.
4. **One-tap human contact** — WhatsApp / call / short enquiry on every page.

---

## Global elements (every page)
- **Header:** logo + mega-menu (Products by series · Industries · About · Investors · Contact) + persistent "Get Quote" + phone.
- **Sticky mobile CTA bar:** Call · WhatsApp · Enquire (keep — current site does this well).
- **Trust strip:** ISO 9001:2015 · ISO 45001:2018 · "BSE-listed" · 35+ yrs · units/clients count.
- **Footer:** product/industry links, investor links, contact, social. (Fix broken "Machine Series" links.)
- **WhatsApp-in-enquiry:** every enquiry passes the product/page context (improve current hidden `pname`).

---

## Page-by-page map

### Homepage `/` — P0
**Personas:** all · **Goal:** route to a product or enquiry; establish credibility in 5 seconds.
**Blocks (in order):**
1. Hero — clear positioning ("Process equipment for paint, ink, chemical & pharma — engineered in India since 1985") + primary CTA (Explore Products) + secondary (Get Quote). *Fix the no-H1 problem.*
2. **Stats band** ⭐ — surface the true story: 35+ yrs · ₹145 Cr revenue / "BSE-listed" · 2 manufacturing units · ISO certified · clients served. (Currently shown nowhere.)
3. Product category grid (5 series) with real photos.
4. **Industries grid** — Paint, Ink, Chemical, Pharma, Food, Minerals → industry pages.
5. Why Tipco (in-house >90%, trial runs, spare parts, low maintenance).
6. **Certifications** (ISO badges) + **named clients** + **case studies** teaser.
7. Testimonials · Events · Blog teaser.
8. Enquiry CTA.

### Product category pages `/products/{series}/` — P0
mill-series · disperser-series · homogenizers · lab-machines · production-line
**Personas:** P2, P1, P4 · **Goal:** narrow to the right model → product detail.
**Blocks:** category intro (what these machines do) · **comparison-friendly cards** (key spec on each: capacity/motor) · "which model for your application" helper · industries served · enquiry CTA.

### Product detail pages `/products/{series}/{product}` — P0 (design FIRST)
**Personas:** all (P1/P2/P4 most) · **Goal:** enquiry/quote. *Highest-value template.*
**Blocks:**
1. Name (H1) + hero image gallery (real photos **with alt text**, size reference, detail shots).
2. **Key specs above the fold** (capacity, motor, output).
3. **Full spec table** with all variants (e.g. THM-10/15/25, HS-0.5→2.1, C-series).
4. **Download datasheet (PDF)** ⭐ — the missing asset; per product.
5. Material of construction + key features.
6. **"Industries / applications"** — paint, ink, pharma, etc. (helps SEO + P3/P4).
7. Product video (where available).
8. Related products / "compare models."
9. Sticky enquiry: Get Quote · WhatsApp · Call.
> Fixes: dead brochure buttons, thin/duplicate specs, no alt text, no per-product PDF (see content inventory `13`).

### Industry landing pages `/industries/{name}` — P0 for Paint, P1 others
paint-coatings ⭐ · ink-printing · chemical · pharma · food-beverage · (minerals)
**Personas:** P3 🚀 (esp. Paint) + P1 + P5 · **Goal:** capture industry-specific search + route to machines/lines.
**Blocks:** industry overview & processing challenges (real SEO copy, not duplicate product pages) · **recommended machines** (cards → product detail) · **turnkey production-line capability** (esp. Paint) · case study / client reference for that industry · industry-specific enquiry CTA.
> **Paint page is the single highest-leverage new page** — it targets the Paint-War capacity buyers (Birla Opus, JSW, expanding plants). Lead with production-line/turnkey + engineering depth. See [../research/03-industry-analysis.md](../research/03-industry-analysis.md).

### Production-line pages `/products/production-line/{line}` — P1
paint-production-line · ink-production-line · paint-sludge-to-primer
**Personas:** P3 🚀 · **Goal:** big-ticket turnkey enquiry to sales engineers.
**Blocks:** process-flow diagram · equipment in the line (links to each machine) · capacity/automation · semi vs fully-automatic options · case study · "Talk to our engineers" CTA (not a generic form).

### About `/about` — P1
**Personas:** P6, exhibition follow-up, all · **Goal:** credibility + the story.
**Blocks:** **resolve the founding story** (1985 legacy brand → 2021 incorporation → 2026 listing — tell it as a timeline, don't contradict) · milestones · 2 units / infrastructure (CNC, testing) · leadership · vision · "now publicly listed" credibility.

### Certifications `/about/certifications` — P0 (quick win)
**Personas:** P2, P4 (pharma), P5 · **Goal:** prove quality.
**Blocks:** ISO 9001:2015 + ISO 45001:2018 (viewable/downloadable) + any product certs.
> Currently **blank** despite the company genuinely holding these — fix first; free credibility.

### Clients + Case studies `/about/clients` — P1
**Personas:** all · **Goal:** social proof.
**Blocks:** **named** client logos (with alt text) · 3–6 written case studies / installation stories (zero exist today — biggest differentiator vs every competitor).

### Investors `/investor/*` — P0 (compliance)
**Personas:** P6 📈 · **Goal:** serve a listed company's obligations + signal credibility to all.
**Blocks:** corporate announcements, board, shareholding, annual reports, IPO docs, grievance — **real, current, and not throwing errors.**

### Resources — P2
catalogue · video-gallery · photo-gallery · faq · blog
**Personas:** P4, SEO/all · **Blocks/fixes:** repair the **broken catalogue** page (PHP errors) → real flipbook + master PDF download · populate video gallery · blog: add named authors + category taxonomy + put it in sitemap.xml (see [../tipco-legacy-website/14-blog-and-resources.md](../tipco-legacy-website/14-blog-and-resources.md)).

### Contact / Enquiry flow `/contact` + quote modal — P0
**Personas:** all · **Goal:** capture the lead with product context.
**Blocks:** short form (name, mobile, email, company, message) · **WhatsApp + call** prominent · map embed (missing today) · all phone lines (sales, toll-free, purchase, investor) · **RFQ that carries the product/page** the user came from.

### Partner / Dealership `/about/partners` — P2
**Personas:** P5 export/dealer · **Blocks:** dealership pitch · territory/contact form · export support.

### Careers `/about/careers` — P3 (low)
**Personas:** job-seekers · current: 1 role (Sales Executive). Keep simple.

---

## Persona → primary journey (design these paths well)

| Persona | Journey |
|---------|---------|
| P1 Owner-Buyer ⭐ | Home → Product → specs/datasheet → WhatsApp/Enquiry |
| P2 Procurement | Category → compare models → datasheet → certs/clients → formal quote |
| P3 Project Engineer 🚀 | **Industry (Paint) → Production-line → engineering depth → references → sales** |
| P4 R&D/Lab Tech | Product detail → specs → catalogue → WhatsApp |
| P5 Export Buyer | Products → Partner/export → credibility → contact |
| P6 Investor 📈 | Investors → announcements/results |

---

## Build priority (ties to the briefing's "design product detail first" rule)

**P0 (do first):** Product detail template · Product category template · Homepage (stats band) · Paint industry page · Certifications page · Investors (compliance) · Contact/RFQ flow.
**P1:** Other industry pages · Production-line pages · About (story) · Clients/case studies.
**P2:** Resources (catalogue fix, blog taxonomy) · Partner.
**P3:** Careers · remaining inner pages.

---

## Content assets to PRODUCE (not just design)
The redesign is blocked on content that doesn't exist yet:
1. **Per-product PDF datasheets** (~28) — the #1 gap.
2. **Complete, correct spec tables** (fill the blanks: Basket Mill, homogenizers, mixers, lines; add MOC + weight).
3. **ISO certificate images** (9001, 45001) for the certs page.
4. **Named client list** + permission to display logos.
5. **3–6 case studies** (industry + machine + outcome).
6. **Professional product photography** with alt text.
7. **Stats** (years, installs, clients, capacity) for the homepage band.
8. **Resolved company story** (one authoritative founding narrative).
9. **De-duplicated, rewritten product copy** (fix Bead-Mill≈Dyno-Mill, Lab-Mixer-describes-a-mill, typos).
