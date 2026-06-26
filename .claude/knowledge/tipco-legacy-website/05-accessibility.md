# Accessibility Audit (WCAG 2.1)

Measured via live browser DOM inspection on 25 June 2026.

## Summary scorecard

| Criterion | Status | Notes |
|-----------|--------|-------|
| WCAG 2.1 Level A | **FAIL** | Multiple critical violations |
| WCAG 2.1 Level AA | **FAIL** | |
| `lang` attribute on `<html>` | Pass | `lang="en"` present |
| Viewport meta | Pass | Correct |
| Skip navigation | **FAIL** | Missing |
| Landmark regions | Partial | `<header>` and `<footer>` present; `<main>` and `<nav>` missing |
| Image alt text | **FAIL** | 45 of 46 images have no alt text |
| Heading hierarchy | **FAIL** | No H1; duplicate H3s; wrong semantic use of headings |
| Keyboard accessibility | Unknown | Requires manual keyboard testing |
| Focus indicator | Unknown | Requires visual testing |
| Color contrast | Unknown | Requires tool measurement (WebAIM Contrast Checker) |
| Form labels | Partial | Some inputs missing labels |

## Critical issues

### 1. 45/46 images have no alt text — WCAG 1.1.1 (Level A)
Only `Tipco.png` (logo) has `alt="Logo"`.
All 45 other images have empty or missing `alt` attributes, including:
- All hero/slider images
- All product category images
- All client logo images
- All "how it works" process step icons (appear twice each in DOM)

**Impact**: Entire product catalog is invisible to screen readers, search engines, and users
with broken image loading.

**Fix**: Add descriptive alt text to content images; `alt=""` on purely decorative images.

### 2. No `<main>` landmark — WCAG 1.3.6 / 4.1.2
```html
<!-- Current: no <main> element -->
<div class="content-area">...</div>

<!-- Should be: -->
<main id="main-content">...</main>
```

### 3. No `<nav>` landmark — WCAG 1.3.6
Navigation is in a `<div>`, not a `<nav>` element.
Screen reader users cannot jump directly to navigation.

### 4. No skip navigation link — WCAG 2.4.1 (Level A)
Keyboard users must tab through every header element on every page load.
```html
<!-- Add as first element in <body>: -->
<a href="#main-content" class="skip-link">Skip to main content</a>
```

### 5. 23 empty `<a>` tags — WCAG 4.1.2
Links with no text content and no `aria-label`. Likely icon-only links (social icons, arrows).
```html
<!-- Current: -->
<a href="https://facebook.com/..."><i class="fa fa-facebook"></i></a>

<!-- Should be: -->
<a href="https://facebook.com/..." aria-label="Tipco Engineering on Facebook">
  <i class="fa fa-facebook" aria-hidden="true"></i>
</a>
```

### 6. 9 empty `<button>` elements — WCAG 4.1.2
Likely carousel navigation arrows without accessible names.
```html
<!-- Add aria-label: -->
<button aria-label="Next slide">›</button>
```

## High issues

### 7. No H1 on homepage — WCAG 2.4.6
Disrupts document outline for screen reader users; also a critical SEO issue.

### 8. Duplicate IDs — WCAG 4.1.1 (Level A)
- `id="email"` — appears on both enquiry forms on the same page
- `id="one-parallax"` — appears multiple times

Duplicate IDs break: `<label for="">` associations, ARIA `aria-labelledby`, JS `getElementById`.

### 9. Heading misuse — WCAG 1.3.1
- Testimonial author names (`Arya Sahani`, `Rajat Shabharwal`, `Mayank Singh`) are wrapped in H3
  — these should be `<cite>` or `<strong>` within a `<blockquote>` or `<figure>`
- Footer column headings are H3 — acceptable but H2 would be more appropriate if footer is at the
  same level as main content sections

### 10. Form inputs without associated labels
2 inputs lack both a `<label for="...">` and an `aria-label`.

## Medium issues

### 11. Focus management on modals/overlays
SweetAlert2 and FancyBox should trap focus inside the overlay when open.
SweetAlert2 v11 handles this; FancyBox and PrettyPhoto accessibility depends on version.
Verify that Escape key closes all modals.

### 12. `tabindex="-1"` on `<li>` elements
Carousel items (`<li tabindex="-1">`) — these are removed from tab order.
Verify carousel is keyboard-navigable via arrow keys or has a visible navigation alternative.

### 13. `<div tabindex="0">` without a role
A `<div>` with `tabindex="0"` is interactive but has no `role` attribute.
Screen readers will announce it as "group" which is not meaningful.

## Cannot assess without visual testing

- **Color contrast ratios** — teal/green brand color on white backgrounds; red text in About section
  on white may fail 4.5:1 ratio. Use WebAIM Contrast Checker.
- **Visible focus indicator** — must test with keyboard; CSS `outline: none` is a common issue with Bootstrap.
- **Touch target sizes** — mobile sticky bar buttons; icon-only links may be under 44×44px minimum.
- **Zoom/reflow** — text reflow at 200% and 400% zoom levels (WCAG 1.4.4, 1.4.10).

## Recommended accessibility fixes (in priority order)

1. Add alt text to all 45 images (start with product pages, then homepage)
2. Add `<main id="main-content">` wrapper around page content
3. Add `<nav>` landmark around all navigation menus
4. Add skip link as first element in `<body>`
5. Add `aria-label` to all 23 empty anchor tags
6. Add `aria-label` to all 9 empty buttons
7. Fix H1 on homepage
8. Fix duplicate `id="email"` (rename to `id="footer-email"` and `id="popup-email"`)
9. Add `<label>` elements to all form inputs missing them
10. Test color contrast (brand teal on white, red text in About section)
