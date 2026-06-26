# Performance Audit

## Live load metrics (measured 25 June 2026 via Playwright)

| Metric | Value | Verdict |
|--------|-------|---------|
| TTFB | 177ms | Good |
| DOM Interactive | 5,473ms | CRITICAL |
| DOMContentLoaded | 5,514ms | CRITICAL |
| Full page load | **7,177ms** | CRITICAL |
| HTML transfer size | 17.6 KB (compressed) / 111 KB (uncompressed) | OK |

## Resource budget breakdown (~5.4 MB total page weight)

| Type | Files | Transfer Size | Notes |
|------|-------|--------------|-------|
| Images | 42 | **~3.38 MB** | All JPG/PNG, none optimized |
| JavaScript | 26 | **~1.28 MB** | None bundled |
| CSS | 12 | **~462 KB** | None bundled |
| HTML | 1 | 17 KB | Gzip compressed |
| **TOTAL** | **96 resources** | **~5.4 MB** | |

## Slowest individual resources (>500ms each)

### Images (no lazy loading — all load on page init)
| Resource | Load time |
|----------|-----------|
| `portfolio-category-51.png` | 2,638ms |
| `Paint%20Production%20Setup.jpg` | 2,667ms |
| `client-16.png` | 2,759ms |
| `client-24.png` through `client-29.png` | 2,838–2,921ms |
| `Catagoery-Banner.jpg` | 2,393ms |
| `SIRCA-02.JPG`, `banner.jpeg` | 1,315–1,324ms |
| `slider-18.jpg`, `slider-19.jpg` | 1,249–1,320ms |

### Scripts
| Resource | Load time |
|----------|-----------|
| GA4 `G-9F2J86WRZT` | 698ms |
| GA4 `G-J12NPBTF6M` | 666ms |
| Google Ads `AW-951683365` | 645ms |
| `jquery.js` (local) | 680ms |
| reCAPTCHA anchor | 1,632ms |

### CSS
| Resource | Load time |
|----------|-----------|
| `style.css` (main stylesheet) | 957ms |
| `bootstrap.css` | 884ms |
| `settings.css` (RevolutionSlider) | 583ms |
| `jquery.fancybox.min.css` | 522ms |
| `extra-page.css` (Investor) | 521ms |

## Third-party domains loading on every page
1. `www.googletagmanager.com`
2. `www.google.com` (reCAPTCHA)
3. `fonts.googleapis.com`
4. `cdnjs.cloudflare.com` (Font Awesome)
5. `www.gstatic.com` (reCAPTCHA JS)
6. `ad.doubleclick.net`
7. `googleads.g.doubleclick.net`
8. `www.google-analytics.com`
9. `www.google.co.in`
10. `ajax.googleapis.com` (jQuery 1.9.1)

## Root causes of poor performance

### 1. No image optimization (biggest single win)
- Zero images use WebP or AVIF format
- No `srcset` or `sizes` attributes on any image
- No `loading="lazy"` on any of the 42 images (`loading: "auto"` on all = blocking)
- Images with spaces in filenames served URL-encoded (`Paint%20Industries%20.jpg`)
- Client logos: ~15 images each 2,500–2,900ms — loaded for every visitor even if they never scroll there

### 2. No bundling or minification
- 26 separate JS requests
- 12 separate CSS requests
- Custom files (`custom.js`, `menu.js`) appear unminified

### 3. Redundant libraries
- 3 jQuery versions = ~250KB of redundant payload
- 4 slider libraries (RevolutionSlider, RoyalSlider, OwlCarousel, FlexSlider)
- 2 lightbox libraries (FancyBox, PrettyPhoto)
- `owl-carousel.css` loaded twice

### 4. Three GA4 gtag.js script tags fire on every page
All three fire before DOMContentLoaded, blocking the parser.

### 5. No CDN for assets
All images, CSS, and JS served from origin (Haryana, India).
Visitors outside India experience additional latency.

### 6. No caching strategy
No service worker, no cache headers verified from frontend.

## Quick wins for performance (in order of impact)

1. Add `loading="lazy"` to all below-fold images — immediate LCP improvement
2. Convert slider and category images to WebP with JPG fallback
3. Remove jQuery 1.9.1 (CDN) and deduplicate local jQuery
4. Defer/async all non-critical GA/Ads scripts
5. Bundle all JS into a single file with a build tool
6. Bundle all CSS into a single file
7. Remove unused slider libraries (keep one)
8. Add a CDN (Cloudflare free tier is a good starting point)
9. Set up an image optimization pipeline (Squoosh, Sharp, Imagemin)
10. Self-host Google Fonts to eliminate external DNS lookup
