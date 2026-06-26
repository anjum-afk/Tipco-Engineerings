# Pre-Design Briefing

Status: Briefing complete — decisions still pending from stakeholder
Last updated: 25 June 2026

---

## 1. Define Business Goals First

The redesign must answer WHY before HOW IT LOOKS. Likely goals:
- **Convert visitors into enquiries** — every page should funnel to a quote/enquiry form
- **Rank on Google for industrial machinery searches** — SEO is currently broken at a structural level
- **Build trust** with B2B buyers (procurement teams, factory managers) who buy ₹10–50L equipment

**Action needed:** 1-hour stakeholder interview. Key question: *What does a successful website visit look like?*

### 3 measurable success metrics to define before starting:
- Example: Enquiry form submissions up 30% vs current
- Example: Page load time under 2 seconds
- Example: Homepage ranks on page 1 for "industrial mixer manufacturer India"

---

## 2. The User Is B2B, Not B2C

Tipco's buyers:
- **Factory/plant managers** — technical, results-focused, not impressed by flash
- **Procurement departments** in pharma, paint, chemical industries
- **R&D labs** needing lab-scale machines

These users don't browse — they arrive with a specific machine in mind, need specs fast, and want to contact a sales rep.

Design must prioritize:
- Fast access to product specs
- Clear, visible contact/enquiry CTAs
- Trust signals: certifications, client logos, "working process"

Full personas → see [03-user-personas.md](03-user-personas.md)

---

## 3. Critical Technical Problems (Not Design Problems)

These must be fixed alongside the redesign. Design alone cannot compensate for them:

| Problem | Impact |
|---------|--------|
| 7.2-second load time | No design is fast enough to compensate |
| No H1 on homepage | Google doesn't know what the site is about |
| Same product at 5–8 different URLs | SEO authority shattered across 200+ duplicate pages |
| 45/46 images have no alt text | Images are invisible to search engines |
| jQuery 1.9.1 with CVEs | Security liability |
| Broken canonical tag (double slash) | Google pointed to non-existent URL |

Full issue list → see [tipco-legacy-website/06-issues-prioritized.md](../tipco-legacy-website/06-issues-prioritized.md)

---

## 4. Content Decisions Needed Before Wireframing

### Conflict 1: Company founding date
- Hero says **"Since 1985"**
- Body text says **"incorporated in 2021"**
- Must be resolved with business owner before any copy is written

### Conflict 2: URL/Navigation architecture
- Products appear under both machine-type paths (`/mill-series/dyno-mill`) and industry paths (`/paint/dyno-mill`)
- This is a URL architecture decision that affects every page template
- Cannot design navigation or breadcrumbs until this is resolved

---

## 5. Design System Required — Not Just Pages

Current site has no design system. Redesigning page-by-page without a system will recreate the same problem.

Before designing pages, establish:
- **Color tokens**: Primary teal (~`#007872`), secondary, text, bg
- **Typography scale**: Open Sans (keep?) or replace with Inter/DM Sans/Plus Jakarta Sans
- **Component set**: Button, card, form, modal, navigation, carousel
- **Spacing scale**: 4/8/16/32/64px rhythm

Full design system spec → see [04-design-direction.md](04-design-direction.md)

---

## 6. Mobile-First, Smart Desktop CTAs

Current mobile sticky footer (Call / Enquire / WhatsApp) is smart — keep it.
Desktop "ENQUIRY" side tab is visually intrusive — rethink.

Mobile usage is likely 50–60%+ of visits (verify in GA4).

---

## 7. Tech Stack Is React + Vite

The new site is being built in React + Vite + TypeScript (project already scaffolded at `src/App.tsx`).

Implications:
- Design for **component-driven** architecture — every section = a React component
- No jQuery plugins — interactions must be React-compatible
- Choose libraries with React in mind: Embla Carousel, Framer Motion, Radix UI

---

## 8. Three Questions to Answer Before Opening Figma

1. **Who is the primary user?** — Define 1–2 personas
2. **What is the single most important action on the homepage?** — Probably: "Get to a product and submit an enquiry"
3. **What does Tipco's brand stand for?** — Industrial precision? Trusted Indian manufacturer? Innovation? The current teal + red is generic. Is there appetite for a brand refresh?

---

## Design Execution Order (Do Not Jump to Homepage First)

1. Design system / component library (Figma tokens + components)
2. Product detail page — most visited, highest conversion importance
3. Product listing / category page
4. Homepage — last, because it is a summary of everything else
5. Contact / enquiry flow
6. Remaining inner pages (About, Events, etc.)