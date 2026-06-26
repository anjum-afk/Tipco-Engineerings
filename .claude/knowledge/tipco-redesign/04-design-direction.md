# Design Direction

Status: Preliminary — pending brand decision from stakeholder
Last updated: 25 June 2026

Based on: competitive analysis, legacy site audit, pre-design briefing

---

## Color Direction

### Option A: Evolve Current Identity (Lower Risk)
Keep teal as primary brand color but refine it — deeper, more saturated, premium feel.

```css
--color-brand-primary:   #006B65;   /* deeper teal — more authoritative than current */
--color-brand-secondary: #004D49;   /* dark teal for headers, footers */
--color-accent:          #E8A020;   /* amber/gold — replaces red/orange, feels premium */
--color-text-primary:    #1A1A1A;
--color-text-secondary:  #5C6370;
--color-bg-primary:      #FFFFFF;
--color-bg-secondary:    #F5F7F8;
--color-border:          #E2E6EA;
```

**Why amber accent:** Current red/orange accent on body links is unusual and undermines trust. Amber feels industrial, premium, and contrasts cleanly with teal.

### Option B: Full Brand Refresh (Higher Impact)
Navy + teal split — feels more premium and global, less like a typical SME Indian site.

```css
--color-brand-primary:   #0A4A7C;   /* deep navy */
--color-brand-secondary: #007872;   /* teal accent */
--color-accent:          #F59E0B;   /* amber CTA */
--color-text-primary:    #111827;
--color-text-secondary:  #6B7280;
--color-bg-primary:      #FFFFFF;
--color-bg-secondary:    #F8FAFC;
```

**Competitive differentiation:** No competitor uses navy. Wahal is blue, Abster is green, Raymer is dark red. Navy + teal = unique and professional in this market.

### Decision needed from stakeholder
Ask: "Do you want to look like a refined version of the current Tipco, or do you want to look like a different, more premium company?"

---

## Typography

### Recommendation: Replace Open Sans with Inter or Plus Jakarta Sans

| Font | Why |
|------|-----|
| **Inter** | Modern, highly legible, excellent for technical/spec content, widely used in SaaS and industrial tools |
| **Plus Jakarta Sans** | More personality than Inter, still professional, slightly more distinctive |
| **DM Sans** | Friendly and modern — better if brand direction is "approachable" |

**Keep Open Sans only if:** Budget/time is constrained and font change is not a priority.

### Type scale (using Inter as example)
```css
--font-size-xs:   0.75rem;   /* 12px — labels, captions */
--font-size-sm:   0.875rem;  /* 14px — secondary text */
--font-size-base: 1rem;      /* 16px — body */
--font-size-lg:   1.125rem;  /* 18px — lead text */
--font-size-xl:   1.25rem;   /* 20px — card headings */
--font-size-2xl:  1.5rem;    /* 24px — section headings */
--font-size-3xl:  1.875rem;  /* 30px — page headings */
--font-size-4xl:  2.25rem;   /* 36px — hero subheading */
--font-size-5xl:  3rem;      /* 48px — hero heading */
```

---

## Layout Model

### Homepage structure (recommended order)
1. **Navigation** — logo + product categories + "Get Quote" CTA + hamburger (mobile)
2. **Hero** — single strong headline + subhead + 2 CTAs (Browse Products / Get Quote) + machine imagery
3. **Product Categories** — 6–8 cards in a grid (machine-type based, not industry-based)
4. **Trust Bar** — client logos strip (continuous scroll)
5. **Industry Applications** — 4–6 cards linking to industry-specific pages
6. **Why Tipco** — 4 differentiators with icons (not generic ones — specific to Tipco's actual USPs)
7. **How We Work** — 4-step process (simplified from current)
8. **Testimonials** — 3 cards, star ratings, name + company + role
9. **Stats** — years, machines, clients, countries (only if numbers are real and impressive)
10. **Latest News / Events** — 3 cards
11. **Get Quote CTA** — full-width teal section
12. **Footer** — 4 columns: company, products, industries, contact

### Product detail page structure (highest priority)
1. Breadcrumb
2. Product name + H1
3. Image gallery (Embla carousel — lightweight, React-native)
4. Short description + key specs summary (3–4 bullets above the fold)
5. "Get Quote" + "WhatsApp" CTAs — always visible (sticky sidebar on desktop)
6. Full technical specifications table
7. Applications / industries (tags or short list)
8. Related products (4–6 cards)
9. Enquiry form

---

## Component Decisions

### Slider/Carousel
- **Keep:** One carousel library — Embla Carousel (React-native, no jQuery dependency, lightweight)
- **Remove:** RevolutionSlider, OwlCarousel, RoyalSlider, FlexSlider — all jQuery-based
- **Why Embla:** 3kb gzipped, keyboard-accessible, touch-native

### Lightbox / Image gallery
- **Use:** Yet Another Lightbox (YAL) or PhotoSwipe — both React-compatible, no jQuery
- **Remove:** FancyBox, PrettyPhoto

### Forms
- **Use:** React Hook Form + Zod for validation
- **No jQuery form plugins**

### Icons
- **Replace:** Font Awesome 4.7.0
- **Use:** Lucide React (MIT, React-native, consistent style, tree-shakeable)

### Animations
- **Use:** Framer Motion for scroll animations and transitions
- **No:** WOW.js, AOS.js (jQuery-dependent)

---

## Sections That Are Table Stakes

Every competitor has these — Tipco must have them or the site feels incomplete:

| Section | Notes |
|---------|-------|
| Product category grid | Above the fold or one scroll away |
| Why Choose Us (4–6 items) | Be specific — not generic "quality/experience/service" |
| Customer testimonials | 3 minimum, with name + company + role |
| Enquiry form | On homepage and every product page |
| WhatsApp floating button | Always visible on mobile |
| Client logos carousel | Continuous scroll, good trust signal |

---

## What to Avoid (Competitor Mistakes)

| Avoid | Why |
|-------|-----|
| Popup on page load | Mecworks mistake — highest bounce-rate trigger |
| Animated counters showing 0 | Raymer mistake — broken JS looks amateurish |
| Text-heavy hero | Hard to read, no clear CTA |
| Generic stock photography | Abster mistake — use real machine photos |
| Heavy dark backgrounds | Slows perceived and actual performance |
| 4+ slider libraries | Current Tipco mistake — kills load time |
| Red/orange on body text | Current Tipco mistake — unusual, undermines trust |

---

## Mobile-Specific Design Decisions

| Element | Decision |
|---------|----------|
| Sticky mobile footer bar | Keep: Call / WhatsApp / Get Quote |
| Navigation | Hamburger menu → full-screen overlay (not drawer) |
| Product cards | Single column on mobile, 2-col on tablet |
| Spec tables | Horizontal scroll on mobile |
| Enquiry form | Simplified to 4 fields max on mobile |
| Hero | Stack text above image on mobile (no overlay) |
| Floating WhatsApp | Bottom-right, always visible |