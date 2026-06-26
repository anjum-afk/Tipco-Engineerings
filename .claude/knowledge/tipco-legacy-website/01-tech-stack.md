# Technology Stack

## Backend
- **Language**: PHP (server-side rendering, MPA — no SPA)
- **Framework**: Likely Laravel or CodeIgniter
  - Evidence: `/public/uploads/` path convention, form endpoints like `/send-enquiryform`, `/product-enquery`
  - Templating is likely Blade (Laravel) or PHP includes
- **File upload paths**: `/public/uploads/`, `/public/productwork/`

## Frontend — JavaScript

| Library | Version | Source | Notes |
|---------|---------|--------|-------|
| jQuery | **1.9.1** | ajax.googleapis.com CDN | SECURITY RISK — has CVEs, must remove |
| jQuery | unknown | `/assets/js/jquery.js` | Local copy, version unknown |
| jQuery | **3.3.1** | `/assets/js/jquery-3.3.1.min.js` | Local copy — this should be the one kept |
| Bootstrap JS | unknown | `/assets/js/bootstrap.min.js` | |
| Owl Carousel | unknown | `/assets/js/owl.carousel.js` | Slider/carousel |
| RevolutionSlider | unknown | `/assets/rs-plugin/js/jquery.themepunch.revolution.min.js` | COMMERCIAL plugin (ThemePunch) |
| RevolutionSlider plugins | unknown | `/assets/rs-plugin/js/jquery.themepunch.plugins.min.js` | COMMERCIAL plugin |
| RoyalSlider | unknown | `/assets/royalslider/jquery.royalslider.min.js` | COMMERCIAL plugin |
| FlexSlider | unknown | `/assets/js/jquery.flexslider.js` | 4th slider library — redundant |
| jQuery Parallax | 1.1.3 | `/assets/js/jquery.parallax-1.1.3.js` | Parallax scroll effect |
| WOW.js | unknown | `/assets/js/wow.min.js` | Scroll-reveal animations |
| SweetAlert2 | **v11** | `/assets/js/sweetalert2@11.js` | Modal alerts |
| FancyBox | unknown | `/assets/js/jquery.fancybox.min.js` | Lightbox |
| PrettyPhoto | unknown | `/assets/js/jquery.prettyPhoto.js` | 2nd lightbox — redundant |
| intlTelInput (jQuery) | unknown | `/assets/js/intlTelInput-jquery.min.js` | International phone input |
| WOW Book | unknown | `/catalogstyle/wow_book.min.js` | PDF/catalogue flipbook |
| menu.js | custom | `/assets/js/menu.js` | Site navigation logic |
| custom.js | custom | `/assets/js/custom.js` | Site-wide custom JS |

**Total JS files: 26** (none bundled)

## Frontend — CSS

| File | Notes |
|------|-------|
| `/assets/css/bootstrap.css` | Bootstrap framework |
| `/assets/style.css` | Main global stylesheet |
| `/assets/css/owl-carousel.css` | Loaded **twice** (duplicate import) |
| `/assets/css/animate.min.css` | WOW.js animations |
| `/assets/royalslider/royalslider.css` | RoyalSlider base |
| `/assets/royalslider/skins/default-inverted/rs-default-inverted.css` | RoyalSlider skin |
| `/assets/rs-plugin/css/settings.css` | RevolutionSlider |
| `cdnjs.cloudflare.com/…/font-awesome/4.7.0/css/font-awesome.min.css` | Font Awesome 4.7 (old) |
| `/assets/css/prettyPhoto.css` | PrettyPhoto lightbox |
| `/assets/css/intlTelInput.min.css` | Phone input |
| `/assets/css/jquery.fancybox.min.css` | FancyBox lightbox |
| `/Investor/css/extra-page.css` | Investor section (isolated CSS path) |

**Total CSS files: 12** (none bundled) + `owl-carousel.css` duplicated

## Fonts
- **Google Fonts**: Open Sans (weights 300–800) — external blocking request
- **Font Awesome**: 4.7.0 from cdnjs.cloudflare.com — current is v6.x

## Analytics & Tracking
- GA4 property 1: `G-9F2J86WRZT`
- GA4 property 2: `G-J12NPBTF6M` (likely duplicate — needs confirmation)
- Google Ads: `AW-951683365`
- DoubleClick conversion pixel
- Google reCAPTCHA key 1: `6LfGXkQpAAAAAPB58Ctia3GY5tIBLeqsrxLc5ren`
- Google reCAPTCHA key 2: `6Ldm3UYpAAAAAACeygd-badCLE_Xv3lUYBHOo_Kw`
- Google Search Console verification: `gsal_qxgZ_0YVKf_ZrS-PgGJZGfXTsXswaola_UM1Wo`

## No build pipeline
- No Webpack, Vite, Parcel, Rollup, or similar
- Files are manually referenced in PHP templates with `<script src>` and `<link href>`
- No tree-shaking, no code-splitting, no minification on custom files

## Hosting
- Assets served directly from origin server (no CDN detected)
- Server location unknown (company is in Haryana, India)
