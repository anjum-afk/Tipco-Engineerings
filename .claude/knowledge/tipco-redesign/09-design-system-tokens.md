# Design System — Tokens & Components

Status: Complete — implemented in src/styles/
Last updated: 25 June 2026
Brand decision: Keep current colors exactly (#007872 teal, #E74C3C red)

---

## File Structure

```
src/
├── index.css                          ← Tailwind v4 entry + all token definitions
├── App.css                            ← App shell only (minimal)
└── styles/
    ├── base.css                       ← Reset, container, skip link, section utility
    ├── typography.css                 ← Type scale, headings, spec table, section labels
    └── components/
        ├── button.css                 ← All button variants + sizes
        ├── card.css                   ← Product, category, testimonial, industry cards
        ├── form.css                   ← Inputs, select, textarea, enquiry form, quote panel
        ├── badge.css                  ← Tags, badges, industry labels
        └── nav.css                    ← Header, mega menu, dropdown, mobile nav, breadcrumb
```

---

## Color Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--brand` | `#007872` | Primary teal — buttons, links, highlights |
| `--brand-hover` | `#005c57` | Teal hover/active state |
| `--brand-light` | `#e6f4f3` | Teal backgrounds, hover fills |
| `--brand-accent` | `#e74c3c` | Red — alerts, urgent badges only (NOT body links) |
| `--brand-accent-hover` | `#c0392b` | Red hover |
| `--background` | `#ffffff` | Page background |
| `--surface` | `#f8f8f8` | Card backgrounds, section alternates |
| `--surface-raised` | `#f0f0f0` | Raised surface, input backgrounds |
| `--foreground` | `#333333` | Primary text |
| `--foreground-muted` | `#666666` | Secondary text, descriptions |
| `--foreground-subtle` | `#999999` | Placeholders, tertiary text |
| `--foreground-inverse` | `#ffffff` | Text on dark/brand backgrounds |
| `--border` | `#e0e0e0` | Default border |
| `--border-strong` | `#c0c0c0` | Emphasized border (table headers etc.) |
| `--success` | `#27ae60` | Success states |
| `--warning` | `#f39c12` | Warning states |
| `--error` | `#e74c3c` | Error states (same as accent) |
| `--info` | `#2980b9` | Info states |

**Critical rule on red:** `--brand-accent` (#e74c3c) must NOT be used on body text links. Body links use `--brand` (teal). Red is reserved for: error states, urgent badges, and high-urgency secondary CTAs only.

---

## Typography

Font: **Open Sans** (Google Fonts, weights 400/600/700/800)

| Scale | Size | Weight | Use |
|-------|------|--------|-----|
| h1 | clamp(2rem, 4vw, 3rem) | 800 | Page hero heading |
| h2 | clamp(1.5rem, 3vw, 2.25rem) | 700 | Section headings |
| h3 | clamp(1.25rem, 2.5vw, 1.75rem) | 700 | Card headings, sub-sections |
| h4 | 1.25rem | 700 | Minor headings |
| body | 1rem | 400 | Body text |
| small | 0.875rem | 400 | Labels, captions |
| eyebrow | 0.75rem | 700 | Section labels (uppercase, tracked) |

**Utility classes:**
- `.label-eyebrow` — teal uppercase label above section headings
- `.section-heading` — centered section h2
- `.section-subheading` — centered grey subtext under heading
- `.spec-table` — product specification table

---

## Spacing

Base unit: 4px

| Token | Value |
|-------|-------|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-10` | 40px |
| `--space-12` | 48px |
| `--space-16` | 64px |
| `--space-20` | 80px |
| `--space-24` | 96px |

Section vertical padding: `--space-20` (80px) desktop, `--space-12` (48px) mobile.

---

## Border Radius

| Token | Value | Use |
|-------|-------|-----|
| `--radius-sm` | 4px | Small elements, input borders |
| `--radius-md` | 6px | Buttons, dropdowns |
| `--radius-lg` | 8px | Cards |
| `--radius-xl` | 12px | Large cards, panels |
| `--radius-2xl` | 16px | Hero images, feature sections |
| `--radius-full` | 9999px | Badges, pills, avatar |

---

## Shadows

| Token | Value | Use |
|-------|-------|-----|
| `--shadow-xs` | `0 1px 2px rgba(0,0,0,0.06)` | Subtle lift |
| `--shadow-sm` | `0 1px 4px rgba(0,0,0,0.08)` | Header, sticky elements |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.10)` | Card hover, buttons |
| `--shadow-lg` | `0 8px 24px rgba(0,0,0,0.12)` | Floating elements |
| `--shadow-xl` | `0 16px 48px rgba(0,0,0,0.14)` | Mega menu, modals |

---

## Button System

| Class | Style | Use |
|-------|-------|-----|
| `.btn.btn-primary` | Teal fill | Primary actions (Get Quote, Submit) |
| `.btn.btn-secondary` | Teal outline | Secondary actions (More Details) |
| `.btn.btn-ghost` | No border | Tertiary, nav links styled as buttons |
| `.btn.btn-cta` | Red fill | High-urgency only (e.g. "Enquire Now" in hero) |
| `.btn.btn-whatsapp` | Green fill | WhatsApp contact |
| `.btn.btn-icon` | Icon-only | Close buttons, icon actions |

Sizes: `.btn-sm` / `.btn-md` (default) / `.btn-lg` / `.btn-xl`
Full width: add `.btn-full`

---

## Card System

| Class | Use |
|-------|-----|
| `.card-product` | Product listing and category pages |
| `.card-category` | Homepage product category grid (image + overlay) |
| `.card-testimonial` | Testimonials section |
| `.card-industry` | Industries section (icon + name + desc) |

---

## Form System

| Class | Use |
|-------|-----|
| `.form-group` | Wrapper for label + input + error |
| `.form-label` | Field label |
| `.form-input` | Text input |
| `.form-select` | Select dropdown |
| `.form-textarea` | Textarea |
| `.form-error` | Validation error message |
| `.enquiry-form` | 4-field compact enquiry form |
| `.enquiry-form__grid` | 2-col grid for name/company fields |
| `.quote-panel` | Sticky sidebar quote panel on product pages |

---

## Navigation System

| Class | Use |
|-------|-----|
| `.site-header` | Sticky top header |
| `.primary-nav` | Desktop horizontal nav |
| `.mega-menu` | Products category mega dropdown |
| `.dropdown-menu` | Simple dropdown (Industries, About, Resources) |
| `.hamburger` | Mobile menu toggle |
| `.mobile-nav` | Full-screen mobile menu overlay |
| `.mobile-footer-bar` | Sticky bottom bar (Call/WhatsApp/Enquire) |
| `.whatsapp-float` | Floating WhatsApp button (desktop + mobile) |
| `.breadcrumb` | Page breadcrumb trail |

Responsive breakpoint: **1024px** — below this, desktop nav hides and mobile nav shows.

---

## Z-Index Scale

| Token | Value | Layer |
|-------|-------|-------|
| `--z-dropdown` | 100 | Dropdowns, mega menus |
| `--z-sticky` | 200 | Sticky header, mobile footer bar |
| `--z-overlay` | 300 | Page overlays, backdrops |
| `--z-modal` | 400 | Modals, mobile nav |
| `--z-toast` | 500 | Toast notifications, skip link |

---

## Tailwind v4 Usage

All tokens are exposed as Tailwind utilities via `@theme inline` in `src/index.css`.

Examples:
```jsx
<div className="bg-brand text-foreground-inverse">        // teal background, white text
<button className="btn btn-primary btn-lg">Get Quote</button>
<div className="card card-product">...</div>
<span className="badge badge-brand">Mill Series</span>
<nav className="breadcrumb">...</nav>
```