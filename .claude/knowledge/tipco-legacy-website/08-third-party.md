# Third-Party Integrations

Assessed: 25 June 2026

## Analytics & Tracking

| Integration | ID / Key | Load timing | Notes |
|-------------|----------|-------------|-------|
| Google Analytics 4 | `G-9F2J86WRZT` | Blocking (3 script tags fire) | First of two GA4 properties |
| Google Analytics 4 | `G-J12NPBTF6M` | Blocking | **Second GA4 property — likely a duplicate. Investigate.** |
| Google Ads conversion | `AW-951683365` | Blocking | Conversion tracking active |
| DoubleClick pixel | `googleads.g.doubleclick.net` | Blocking | Fires on every page load |
| Google Search Console | `gsal_qxgZ_0YVKf_ZrS-PgGJZGfXTsXswaola_UM1Wo` | Meta tag only | Verification only, no load impact |

**Problem: Duplicate GA4 IDs**
Three separate `gtag.js` calls on every page load:
```html
<script src="gtm.js?id=G-J12NPBTF6M&cx=c&gtm=4e66n1">  ← fires twice somehow
<script src="gtm.js?id=AW-951683365">
<script src="gtm.js?id=G-J12NPBTF6M">
<script src="gtm.js?id=G-9F2J86WRZT">
```
All events are being double or triple counted. Need to identify which GA4 property is
the business's authoritative analytics and remove the others.

## Anti-spam

| Integration | Key | Notes |
|-------------|-----|-------|
| Google reCAPTCHA v2 | `6LfGXkQpAAAAAPB58Ctia3GY5tIBLeqsrxLc5ren` | Present in popup enquiry form |
| Google reCAPTCHA v2 | `6Ldm3UYpAAAAAACeygd-badCLE_Xv3lUYBHOo_Kw` | Second key — both load on every page |

Only one reCAPTCHA key should be active per page. Both anchor iframes load, adding ~678–1,632ms
of load time even on pages with no form. The keys may correspond to different form locations
(footer form vs popup form) but both load globally.

## Fonts & Icons

| Integration | Version | Load method | Notes |
|-------------|---------|-------------|-------|
| Google Fonts | — | `<link>` (blocking) | Open Sans, weights 300/400/500/600/700/800 |
| Font Awesome | **4.7.0** | cdnjs.cloudflare.com | Current is 6.x; v4 lacks accessibility features |

**Optimization for Google Fonts:**
```html
<!-- Add before the <link>: -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Add display=swap if not present: -->
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
```
Or self-host the font to eliminate the external DNS lookup entirely.

## jQuery CDN

| Integration | Version | Source | Notes |
|-------------|---------|--------|-------|
| jQuery | 1.9.1 | ajax.googleapis.com | **SECURITY RISK — remove** |

## Customer Engagement

| Integration | Type | Notes |
|-------------|------|-------|
| WhatsApp Business | Direct link | `https://wa.me/...?text=Hello+I+have+a+question+about+tipco+engineering` |
| Toll-free | tel: link | `1800 1020 229` |
| Email | mailto: link | `mail@tipcoengineering.com` |

WhatsApp integration is a good pattern for the Indian market. No third-party chat widget used
(Intercom, Drift, etc.) which keeps load times lower.

## Social Media Links
Facebook, Twitter/X, LinkedIn, YouTube, Instagram — linked in header and footer.
All are standard external links (no embedded feeds or widgets — good for performance).

## Maps
No embedded map on Contact page detected in the WebFetch audit.
A Google Maps embed or static map image would improve UX on `/contact-us`.

## Third-party domains loading on every page

| Domain | Purpose | Impact |
|--------|---------|--------|
| `www.googletagmanager.com` | GA4 + Ads scripts | 3 requests, ~650–700ms each |
| `www.google.com` | reCAPTCHA | Blocking |
| `www.gstatic.com` | reCAPTCHA JS | 581ms |
| `fonts.googleapis.com` | Google Fonts | Blocking CSS request |
| `cdnjs.cloudflare.com` | Font Awesome | Blocking CSS request |
| `ad.doubleclick.net` | DoubleClick pixel | Tracking |
| `googleads.g.doubleclick.net` | Conversion pixel | Large script src embedded in HTML |
| `www.google-analytics.com` | GA4 data collection | |
| `www.google.co.in` | reCAPTCHA anchor | |
| `ajax.googleapis.com` | jQuery 1.9.1 | **Remove** |

10 external domains on every page load = 10 DNS lookups before page can render.
