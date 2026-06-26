# Prioritized Issue List

Last updated: 25 June 2026

---

## CRITICAL

| # | Issue | Area | Fix |
|---|-------|------|-----|
| C1 | **No H1 tag on homepage** | SEO + A11y | Add `<h1>Industrial Process Machinery Manufacturer — Tipco Engineering</h1>` |
| C2 | **Page load time: 7.2 seconds** | Performance | Image lazy loading + bundling + CDN — see `03-performance.md` |
| C3 | **45/46 images have no alt text** | Accessibility | Add descriptive alt text to all content images |
| C4 | **jQuery 1.9.1 still loaded from CDN** | Security | Remove `<script src="ajax.googleapis.com/.../jquery/1.9.1/...">` |
| C5 | **Canonical URL has double slash** (`//`) | SEO | Fix `<link rel="canonical" href="https://tipcoengineering.com/">` |
| C6 | **No image lazy loading** | Performance | Add `loading="lazy"` to all below-fold images |

---

## HIGH

| # | Issue | Area | Fix |
|---|-------|------|-----|
| H1 | **3 jQuery versions loaded simultaneously** | Performance | Remove 1.9.1 (CDN) + deduplicate to single `jquery-3.3.1.min.js` |
| H2 | **URL duplication (5-8 URLs per product)** | SEO | Add canonical tags on all application-context pages |
| H3 | **Duplicate GA4 property IDs** | Analytics | Confirm authoritative property, remove the other |
| H4 | **No structured data (JSON-LD)** | SEO | Add Organization, Product, BreadcrumbList schemas |
| H5 | **No Open Graph / Twitter Card meta tags** | SEO + Social | Add og:title, og:description, og:image to all pages |
| H6 | **Malformed robots.txt disallow rules** | SEO | Fix 11 disallow paths to use `/path` not `/https://...` |
| H7 | **No `<main>` landmark** | Accessibility | Wrap main content in `<main id="main-content">` |
| H8 | **No `<nav>` landmark** | Accessibility | Wrap navigation in `<nav>` element |
| H9 | **No skip navigation link** | Accessibility | Add `<a href="#main-content" class="skip-link">Skip to content</a>` |
| H10 | **23 empty `<a>` tags** | Accessibility | Add `aria-label` to all icon-only links |
| H11 | **9 empty `<button>` elements** | Accessibility | Add `aria-label` to all icon-only buttons |
| H12 | **Weak Content-Security-Policy** | Security | Add `script-src`, `object-src`, `frame-src` directives |
| H13 | **No cookie consent banner** | Legal/GDPR | Implement consent before loading GA4, Ads, DoubleClick |

---

## MEDIUM

| # | Issue | Area | Fix |
|---|-------|------|-----|
| M1 | **4 competing slider libraries** | Performance + Maintenance | Keep one (OwlCarousel or RevolutionSlider); remove others |
| M2 | **12 CSS files, 26 JS files — no bundling** | Performance | Set up Vite/Webpack; output single CSS + JS bundles |
| M3 | **No WebP/AVIF image formats** | Performance | Convert JPG/PNG to WebP with `<picture>` fallback |
| M4 | **Google Fonts render-blocking** | Performance | Add `preconnect`, use `font-display: swap`; consider self-hosting |
| M5 | **Content inconsistency: "Since 1985" vs "incorporated in 2021"** | Content | Reconcile with business team; update whichever is wrong |
| M6 | **Duplicate IDs in DOM** (`email`, `one-parallax`) | HTML Validity | Rename form field IDs to be unique per page |
| M7 | **CSRF token verification on form endpoints** | Security | Confirm Laravel CSRF middleware covers `/product-enquery` and `/send-enquiryform` |
| M8 | **Duplicate reCAPTCHA site keys (×2)** | Performance | One key per page; remove the unused one |
| M9 | **Font Awesome 4.7.0** | Maintenance | Upgrade to FA6 or replace with SVG icon set |
| M10 | **2 competing lightbox libraries** (FancyBox + PrettyPhoto) | Performance + Maintenance | Keep FancyBox; remove PrettyPhoto |
| M11 | **`lab-machines` and `laboratory-machines` are duplicate URL sets** | SEO | 301 redirect one to the other |
| M12 | **`owl-carousel.css` loaded twice** | Performance | Remove duplicate `<link>` tag |
| M13 | **Duplicate H3 elements in "Working Process" section** | HTML Quality | Each process step appears twice in the DOM — fix template |
| M14 | **Testimonial author names in H3** | Semantics | Replace `<h3>Arya Sahani</h3>` with `<cite>` inside `<blockquote>` |

---

## LOW

| # | Issue | Area | Fix |
|---|-------|------|-----|
| L1 | **Image filenames with spaces** (`Paint%20Industries%20.jpg`) | Best Practice | Rename files using hyphens; update DB references |
| L2 | **Typos in image filenames** (`Catagoery`, `contast`, `comMachine-Installation`) | Content | Rename files and update references |
| L3 | **`<meta name="keywords">` still used** | SEO | Remove; ignored by search engines, wastes bandwidth |
| L4 | **"Tipco Engineerings" typo in H2** | Content | Fix to "Tipco Engineering" |
| L5 | **"laboratory Machines" lowercase in H3** | Content | Capitalise to "Laboratory Machines" |
| L6 | **Investor section has isolated CSS path** (`/Investor/css/`) | Code Org. | Move to `/assets/css/` for consistency |
| L7 | **Blog sitemap in robots.txt but no blog in main sitemap** | SEO | Investigate blog section; add to main sitemap or remove reference |
| L8 | **`llms.txt` in robots.txt** | Misc | Verify this is intentional; document its purpose |
| L9 | **`<div tabindex="0">` without a role attribute** | Accessibility | Add appropriate `role` attribute |
| L10 | **`<li tabindex="-1">` in carousels** | Accessibility | Verify carousel is keyboard-navigable via arrow keys |

---

## Fixed / Not Issues

| Item | Notes |
|------|-------|
| `lang="en"` on `<html>` | Correctly set |
| Viewport meta tag | Correctly set |
| reCAPTCHA on enquiry forms | Present (server-side validation still needs confirmation) |
| HTTPS | All form actions use HTTPS |
| Google Search Console | Verification tag present |
| WhatsApp integration | Good UX pattern for this market |
