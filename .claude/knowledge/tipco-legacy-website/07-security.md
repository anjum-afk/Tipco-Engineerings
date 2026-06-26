# Security Findings (Frontend)

Assessed: 25 June 2026

## Risk summary

| Risk | Severity | Status |
|------|----------|--------|
| jQuery 1.9.1 with known CVEs | **Critical** | Active |
| Weak Content-Security-Policy | **High** | Active |
| No cookie consent for tracking | **Medium** | Active |
| CSRF token verification (unconfirmed) | **High** | Needs server-side confirmation |
| reCAPTCHA server-side validation (unconfirmed) | **Medium** | Needs confirmation |
| Commercial plugin license management | Low | Needs confirmation |

---

## C1 — jQuery 1.9.1 loaded from Google CDN

**Severity**: Critical
**CVEs affecting jQuery 1.9.1:**
- CVE-2012-6708: XSS via selector expressions
- CVE-2015-9251: XSS via cross-domain AJAX with Content-Type text/javascript
- CVE-2019-11358: Prototype pollution via `$.extend(true, ...)`

**Location**: `<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js">`

**Fix**: Remove this CDN import entirely. The site also loads `jquery-3.3.1.min.js` locally
which should be the only jQuery on the page.

---

## H1 — Content-Security-Policy

**Severity**: High
**Current CSP** (from meta tag):
```
Content-Security-Policy: upgrade-insecure-requests
```

This only upgrades HTTP → HTTPS. It provides no protection against:
- XSS (no `script-src` directive)
- Clickjacking (no `frame-ancestors`)
- Mixed content injection (partially covered by upgrade-insecure-requests)
- Data exfiltration (no `connect-src`)

**Recommended headers to add at server level** (not meta tag):
```
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google.com
              https://www.gstatic.com https://ajax.googleapis.com https://www.google-analytics.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com;
  font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com;
  img-src 'self' data: https://www.google-analytics.com;
  frame-src https://www.google.com;
  connect-src 'self' https://www.google-analytics.com;
  upgrade-insecure-requests;

X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

Note: `'unsafe-inline'` is required by RevolutionSlider, the carousels, and inline GA4 code.
A full CSP without `unsafe-inline` requires refactoring those libraries to use nonces.

---

## H2 — CSRF protection on form endpoints (needs server-side confirmation)

**Severity**: High (if missing)
**Endpoints**:
- `POST /product-enquery` (footer form)
- `POST /send-enquiryform` (popup form)

**What to verify**: Laravel automatically includes `@csrf` in Blade forms. Confirm that both
form templates contain `{{ @csrf_field() }}` or `@csrf` and that the middleware is applied.

**Risk if missing**: Cross-site request forgery — any site can silently submit enquiry forms
using a victim's session.

---

## M1 — No cookie consent / GDPR compliance

**Severity**: Medium (legal risk, not technical)

The following tracking is active on page load **without any consent mechanism**:
- Google Analytics 4 (×2 IDs)
- Google Ads conversion tracking
- DoubleClick pixel

India's Digital Personal Data Protection (DPDP) Act 2023 and GDPR (if EU visitors access the site)
require consent before setting analytics/advertising cookies.

**Fix**: Implement a consent management platform (CMP) or a simple cookie banner that:
1. Informs users of cookies used
2. Allows opt-in/opt-out
3. Defers GA4/Ads loading until consent is given

---

## M2 — reCAPTCHA server-side validation (needs confirmation)

**Severity**: Medium (if missing)
**What's present**: `g-recaptcha-response` field in the popup form sends the token to the server.
**What to verify**: The PHP controller for `/send-enquiryform` must validate the token against
Google's verification API:
```php
// Google reCAPTCHA v2 server-side verification:
POST https://www.google.com/recaptcha/api/siteverify
  secret=YOUR_SECRET_KEY
  response={g-recaptcha-response}
  remoteip={user IP}
```
If not verified server-side, reCAPTCHA provides zero spam protection.

---

## L1 — Commercial plugin licenses

**Libraries**: RevolutionSlider (ThemePunch), RoyalSlider
These are commercial plugins. If licenses lapse:
- Auto-updates stop
- Plugin may inject banners or break functionality
- Extended use without license = license violation

**Action**: Confirm valid licenses are held and renewal dates are tracked.

---

## L2 — Public upload directory enumeration

The `/public/uploads/` directory serves media files.
Verify the web server does not allow directory listing (should return 403, not a file list).
Check with: `curl -I https://tipcoengineering.com/public/uploads/`

---

## L3 — Sensitive filenames

Some filenames reveal client names: `SIRCA-02.JPG`.
Not a direct security risk, but worth discussing with the business team whether client names
should be in publicly accessible file paths.

---

## What appears to be done correctly
- All form actions use HTTPS
- reCAPTCHA is present on enquiry forms (server-side validation still needs confirmation)
- Google Search Console verified (indicating some security hygiene)
- `upgrade-insecure-requests` CSP prevents HTTP asset loading
- `<html lang="en">` set
