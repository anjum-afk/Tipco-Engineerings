# Phase 1 Research Plan & Status

Last updated: 25 June 2026

---

## Phase 1 Checklist

### A. Competitive Analysis
- [x] Identify 5 direct competitors
- [x] Screenshot and audit all 5 competitor sites
- [x] Score competitors across 7 design/UX dimensions
- [x] Document what to borrow, what to avoid
- [x] Identify gaps where Tipco can leapfrog all competitors
- Full report → [02-competitive-analysis.md](02-competitive-analysis.md)

### B. Analytics Review
- [ ] Access GA4 dashboard (determine which of the 2 property IDs is authoritative: `G-9F2J86WRZT` or `G-J12NPBTF6M`)
- [ ] Pull top 10 most visited pages (last 3 months)
- [ ] Pull top 10 product pages by traffic
- [ ] Find mobile vs desktop traffic split
- [ ] Identify highest drop-off pages
- [ ] Find top organic search keywords driving traffic
- [ ] Find average session duration and bounce rate
- **Why this matters:** Tells us which products and pages to prioritize in the redesign.

### C. Heatmap / Session Recording Setup
- [ ] Install Microsoft Clarity (free) on current site — add tracking script to PHP head template
- [ ] Wait minimum 2 weeks before pulling data
- [ ] Review: where do users click on homepage? Where do they scroll to? Where do they rage-click?
- [ ] Review: what do users do on product pages? Do they scroll to specs?
- **Why this matters:** Real user behavior beats assumptions. Even 2 weeks of data changes design decisions.

### D. Stakeholder Interview
- [ ] Schedule 1-hour interview with business owner / decision maker
- [ ] Cover: business goals, target customers, top 3 products by revenue, brand direction appetite, content conflicts
- [ ] Resolve "Since 1985 vs incorporated in 2021" question
- [ ] Confirm which GA4 property is authoritative
- [ ] Get clarity on URL architecture: keep industry paths or consolidate to machine-type paths?
- Template questions → [tipco-legacy-website/10-questions.md](../tipco-legacy-website/10-questions.md)

### E. Persona Validation
- [ ] Review analytics data against draft personas in [03-user-personas.md](03-user-personas.md)
- [ ] Confirm: is mobile traffic mostly from procurement managers or lab technicians?
- [ ] Update personas based on real data

---

## Phase 1 → Phase 2 Gate

Do not move to Phase 2 (Information Architecture) until:
1. Analytics data has been reviewed
2. Stakeholder interview is complete
3. Founding date conflict is resolved
4. URL architecture decision is made
5. Brand direction is confirmed (evolve teal vs full refresh)

---

## Upcoming Phases

| Phase | Name | Key Deliverable |
|-------|------|----------------|
| 1 | Research | Competitive analysis ✓, Analytics, Heatmaps, Personas |
| 2 | Information Architecture | New sitemap, user flows, navigation structure |
| 3 | Design System | Figma tokens, component library (Button, Card, Form, Nav, Carousel) |
| 4 | Wireframes | Product detail page first, then category, then homepage |
| 5 | High-Fidelity Design | Full Figma designs for all page templates |
| 6 | Development | React + Vite implementation |
| 7 | QA & Launch | Performance, SEO, accessibility checks before go-live |

---

## Key Decisions Tracker

| Decision | Status | Who decides |
|----------|--------|-------------|
| Brand direction: evolve teal vs full refresh | Pending | Business owner |
| Founding date: 1985 vs 2021 | Pending | Business owner |
| URL architecture: machine-type vs industry paths | Pending | Business owner + SEO |
| Font: keep Open Sans vs switch to Inter/DM Sans | Pending | Designer |
| Which GA4 property is authoritative | Pending | Business owner |
| Carousel library: Embla | Recommended | Developer to confirm |
| Icon set: Lucide React | Recommended | Designer to confirm |