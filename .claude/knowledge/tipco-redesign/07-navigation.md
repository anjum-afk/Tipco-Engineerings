# Navigation Structure

Status: Proposed — pending stakeholder decisions on login, investor section
Last updated: 25 June 2026

---

## Design Principles for This Navigation

1. **Products first** — the primary reason visitors come; must be one click away
2. **No more than 2 levels** — current site has 3 levels of dropdowns (nav → dropdown → sub-dropdown)
3. **"Get Quote" is always visible** — it is the primary conversion action, not a nav item
4. **Mobile is its own experience** — not a collapsed version of desktop nav

---

## Desktop Navigation

### Top Bar (optional — consider removing)
```
[Social icons]                                    [Email]  [Phone]
```
**Recommendation:** Remove the top bar entirely on the new site.
- It adds visual complexity
- Phone/email belong in the header or footer
- Social icons get almost zero clicks from B2B buyers
- Removing it makes the header lighter and faster

### Primary Header
```
[TIPCO LOGO]    Products ▾    Industries ▾    About ▾    Resources ▾    Contact    [Get Quote →]
```

- **Logo** — links to homepage, left-aligned
- **Products** — mega menu (see below)
- **Industries** — simple dropdown
- **About** — simple dropdown
- **Resources** — simple dropdown
- **Contact** — direct link, no dropdown
- **Get Quote** — filled button, teal/accent color, always rightmost

### Products Mega Menu
```
┌─────────────────────────────────────────────────────────────┐
│  MACHINE TYPE                    BROWSE ALL                  │
│                                                             │
│  ○ Mill Series          →        [View all products →]      │
│    Bead mills, sand mills                                   │
│                                                             │
│  ○ Disperser Series     →                                   │
│    High speed, twin shaft, vacuum                           │
│                                                             │
│  ○ Homogenizers         →                                   │
│    Inline, high shear                                       │
│                                                             │
│  ○ Lab Machines         →                                   │
│    Lab-scale dispersers, bead mills                         │
│                                                             │
│  ○ Production Line      →                                   │
│    Complete production systems                              │
└─────────────────────────────────────────────────────────────┘
```

**Why mega menu (not simple dropdown):**
- 5 product categories with 6–10 products each — a simple dropdown would be too long
- Mega menu lets us show a short description under each category — helps users self-select
- "Browse All" link captures users who aren't sure which category they need

### Industries Dropdown
```
┌───────────────────────────┐
│  Paint & Coatings         │
│  Pharmaceuticals          │
│  Chemical                 │
│  Ink & Printing           │
│  Food & Beverage          │
│  Cosmetics                │
└───────────────────────────┘
```

### About Dropdown
```
┌───────────────────────────┐
│  About Tipco              │
│  Certifications           │
│  Our Clients              │
│  Careers                  │
│  Partners                 │
└───────────────────────────┘
```

### Resources Dropdown
```
┌───────────────────────────┐
│  Product Catalogue        │
│  Video Gallery            │
│  Photo Gallery            │
│  FAQ                      │
└───────────────────────────┘
```

---

## Mobile Navigation

### Header (mobile)
```
[≡ Menu]    [TIPCO LOGO]    [📞 Call]
```
- Hamburger on left
- Logo centered
- Phone icon on right (most-used action on mobile)

### Mobile Menu (full-screen overlay on open)
```
┌─────────────────────────────────┐
│  ✕                              │
│                                 │
│  Products              >        │
│  Industries            >        │
│  About                 >        │
│  Resources             >        │
│  Contact                        │
│                                 │
│  [Get Quote]                    │
│                                 │
│  📞 +91 XXXXX XXXXX             │
│  ✉  info@tipcoengineering.com   │
└─────────────────────────────────┘
```

**Mobile sub-menu (when Products tapped):**
```
┌─────────────────────────────────┐
│  ← Products                     │
│                                 │
│  Mill Series                    │
│  Disperser Series               │
│  Homogenizers                   │
│  Lab Machines                   │
│  Production Line                │
│                                 │
│  Browse All Products            │
└─────────────────────────────────┘
```

### Mobile Sticky Footer Bar (keep from current site)
```
┌──────────┬─────────────┬──────────┐
│  📞 Call │ 💬 WhatsApp │ ✉ Enquire│
└──────────┴─────────────┴──────────┘
```
This is smart — keep it. It gives 3 contact options always visible on mobile without cluttering the header.

---

## What to Remove vs. Current Nav

| Current item | New decision | Reason |
|---|---|---|
| Top bar (social + login + email + phone) | **Remove top bar** | Too much clutter; phone/email in footer |
| Login / SignUp in nav | **Remove** (pending) | Ask: do customers actually use login? |
| "Application" mega menu (industry paths) | **Replace** with Industries dropdown | Cleaner; industry pages are now content pages |
| "Investors" as top-level nav item | **Move to footer** | Not a primary user need; clutters main nav |
| "Our Clients" as top-level nav item | **Move to About dropdown** | It's a trust signal, not a primary destination |
| Desktop "ENQUIRY" side tab | **Remove** | "Get Quote" button in nav replaces it; side tab is visually intrusive |
| Events in primary nav | **Move to footer or Resources** | Low-traffic page; shouldn't occupy primary nav slot |

---

## Footer Navigation

```
┌──────────────────────────────────────────────────────────────────┐
│  [TIPCO LOGO]                                                     │
│  Manufacturer of industrial mixing and milling equipment.         │
│  [Social icons]                                                   │
│                                                                   │
│  PRODUCTS           INDUSTRIES        COMPANY       CONTACT       │
│  Mill Series        Paint & Coatings  About         +91 XXXXXXXX  │
│  Disperser Series   Pharma            Certifications Email         │
│  Homogenizers       Chemical          Our Clients   Address        │
│  Lab Machines       Ink & Printing    Careers       [Map link]    │
│  Production Line    Food & Beverage   Partners                    │
│                     Cosmetics         Events                      │
│                                       Investor                    │
│                                                                   │
│  RESOURCES                                                        │
│  Product Catalogue  Video Gallery  FAQ  Photo Gallery             │
│                                                                   │
│  © 2025 Tipco Engineering India Pvt. Ltd.  Privacy Policy  Terms  │
└──────────────────────────────────────────────────────────────────┘
```

**Footer is important for SEO** — it provides internal links to all major pages from every URL on the site.

---

## Breadcrumb Structure

Every inner page shows a breadcrumb. Critical for SEO and user orientation.

```
Home > Products > Mill Series > Dyno Mill
Home > Industries > Pharmaceuticals
Home > About > Certifications
Home > Events > [Event Name]
```

Implement as JSON-LD `BreadcrumbList` schema on every page.