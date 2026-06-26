# Design System & Component Inventory

Assessed: 25 June 2026

## Current state: No design system exists

The site has no component library, style guide, or design token system.
All UI is assembled from Bootstrap grid + jQuery plugin defaults + custom one-off CSS in `style.css`.

---

## Visual Identity (inferred from site)

| Element | Value |
|---------|-------|
| Primary brand color | Teal/dark green (header background, CTAs) |
| Accent color | Red/orange (used in About section body text links — unusual choice) |
| Background | White (#fff) |
| Font family | Open Sans (Google Fonts, weights 300–800) |
| Icon set | Font Awesome 4.7.0 |
| Logo | `/public/uploads/Tipco.png` (118×47px) |

---

## Component inventory (what exists, ad-hoc)

### Navigation
- **Top info bar**: Social icons + Login/SignUp + Email + Phone
- **Header**: Logo + hamburger (mobile) + desktop nav menu
- **Mega dropdown**: Products and Application categories
- **Mobile sticky footer bar**: Call | Enquire | WhatsApp
- **Fixed side tab**: "ENQUIRY" (desktop only)

### Hero / Banners
- **Homepage hero**: RevolutionSlider (multiple slides with text overlay)
- **Inner page banners**: Static full-width image with page title overlay
- **Product category banner**: `Catagoery-Banner.jpg` (misspelled filename)

### Cards
- **Product card**: Image + name + short description + "More Details" link + "Get Quote" button
- **Industry/category card**: Icon/image + category name (links to application page)
- **Client logo card**: Client logo image in carousel (no alt text)
- **Event card**: Event image + title + date/location + description

### Carousels / Sliders
- **Hero slider**: RevolutionSlider — homepage banner
- **Client logos**: OwlCarousel — continuous scroll
- **Product listing**: OwlCarousel — category product display
- **Product gallery**: RoyalSlider — product detail images
- **Testimonials**: Likely OwlCarousel or FlexSlider

### Forms
- **Footer enquiry form** (`id="foot"`): pname, name, email, companyname, phone, message
- **Popup enquiry form** (`id="popform"`): name, mobile, enquirytype, email, subject, message + reCAPTCHA
- **Get Quote form** (product pages): enquiry timing preference (morning/afternoon/evening slots)

### Modals / Overlays
- **Enquiry popup**: SweetAlert2 or custom modal triggered by "ENQUIRY" tab
- **Image lightbox**: FancyBox (and PrettyPhoto — redundant)
- **PDF catalogue**: WOW Book flipbook viewer

### UI Patterns
- **"Get Quote Now"** CTA section: teal background, inline form
- **Working process steps**: Icon + heading + description (4 steps, each appears twice in DOM)
- **Stats counter**: Animated number counters (common in corporate sites)
- **Testimonials**: 3 testimonials with name, role, company
- **Breadcrumbs**: Present on product pages (good SEO)
- **Related products**: 6 cards shown at bottom of product detail page
- **Technical specs table**: On product detail pages — good content structure

---

## What a design system would need

### Design tokens (CSS custom properties)
```css
:root {
  /* Colors */
  --color-brand-primary: #007872;    /* teal — verify exact value */
  --color-brand-secondary: #e74c3c;  /* red accent — reconsider */
  --color-text-primary: #333333;
  --color-text-secondary: #666666;
  --color-bg-primary: #ffffff;
  --color-bg-secondary: #f8f8f8;
  --color-border: #e0e0e0;

  /* Typography */
  --font-family-base: 'Open Sans', sans-serif;
  --font-size-base: 16px;
  --font-weight-regular: 400;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --line-height-base: 1.6;

  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 32px;
  --spacing-xl: 64px;

  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-card: 0 2px 8px rgba(0,0,0,0.1);
  --shadow-modal: 0 8px 32px rgba(0,0,0,0.2);
}
```

### Core components to build first
1. **Button** — primary (teal), secondary (outline), CTA (large)
2. **Card** — product card, event card
3. **Form fields** — input, select, textarea with consistent label + error state
4. **Modal** — consolidate FancyBox + SweetAlert2 usage
5. **Navigation** — consolidate mobile/desktop nav
6. **Carousel** — pick one library (OwlCarousel recommended, already used most widely)
7. **Badge/Tag** — for product categories
8. **Alert/Toast** — replace SweetAlert2 with lightweight custom
9. **Breadcrumb** — semantic `<nav aria-label="Breadcrumb"><ol>...</ol></nav>`
10. **Table** — for product specifications

---

## CSS architecture recommendation

Current `style.css` is a monolithic file. Recommend migrating to:

```
assets/
└── css/
    ├── base/
    │   ├── _reset.css
    │   ├── _typography.css
    │   └── _variables.css    ← CSS custom properties
    ├── components/
    │   ├── _button.css
    │   ├── _card.css
    │   ├── _form.css
    │   ├── _modal.css
    │   └── _nav.css
    ├── pages/
    │   ├── _home.css
    │   ├── _product.css
    │   └── _contact.css
    └── main.css              ← imports everything; bundled by Vite
```
