# Tipco Engineering — Project Context

## What this project is
Website for **Tipco Engineering India Pvt. Ltd.**, a manufacturer of industrial process equipment
(bead mills, dispersers, homogenizers, mixers) for chemical, paint, pharma, and ink industries.
Company HQ: Sonipat, Haryana, India. Incorporated 2021 (brand "Since 1985").

## Tech stack (quick reference)
- **Backend**: PHP (likely Laravel) — server-side rendering, MPA
- **Frontend**: jQuery 3.3.1 (+ legacy 1.9.1 still loaded), Bootstrap, no SPA framework
- **Hosting**: Origin server (no CDN on assets)
- **Analytics**: GA4 × 2 IDs, Google Ads, reCAPTCHA × 2 keys
- **Key plugins**: RevolutionSlider, RoyalSlider, OwlCarousel, FlexSlider, FancyBox, PrettyPhoto, WOW.js, SweetAlert2

## Key URLs
- Production: https://tipcoengineering.com/
- Sitemap: https://tipcoengineering.com/sitemap.xml
- Robots: https://tipcoengineering.com/robots.txt

## Knowledge base
All knowledge is in `.claude/knowledge/`. See `README.md` for the full group list.

### Tipco Legacy Website
Audit of the current live site — `.claude/knowledge/tipco-legacy-website/`
Start with `00-index.md` for a quick orientation.

## Current state (as of June 2026 audit)
The site has **critical performance and accessibility issues** that need addressing before any
feature work. See `.claude/knowledge/tipco-legacy-website/06-issues-prioritized.md` for the full issue list.

## Do not touch without team discussion
- URL structure for product pages (complex duplication, SEO implications)
- RevolutionSlider / RoyalSlider (commercial licenses — confirm before upgrading)
- The two GA4 property IDs (need to confirm which is authoritative before removing one)
