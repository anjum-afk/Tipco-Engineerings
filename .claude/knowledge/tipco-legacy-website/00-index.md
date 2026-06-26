# Knowledge Base Index — Tipco Engineering

Audit performed: 25 June 2026
Auditor role: Senior Frontend Architect

## Files

| File | Contents |
|------|----------|
| [01-tech-stack.md](01-tech-stack.md) | Full technology stack with versions |
| [02-architecture.md](02-architecture.md) | Site architecture, URL structure, page topology |
| [03-performance.md](03-performance.md) | Core Web Vitals, load metrics, resource budget |
| [04-seo.md](04-seo.md) | SEO findings — meta, structured data, URL issues |
| [05-accessibility.md](05-accessibility.md) | WCAG audit findings |
| [06-issues-prioritized.md](06-issues-prioritized.md) | Master issue list: Critical → Low |
| [07-security.md](07-security.md) | Frontend security findings |
| [08-third-party.md](08-third-party.md) | All third-party scripts, analytics, tracking |
| [09-design-system.md](09-design-system.md) | Design system analysis and component inventory |
| [10-questions.md](10-questions.md) | Questions to ask the existing dev team |
| [11-onboarding-plan.md](11-onboarding-plan.md) | 30-day onboarding plan |

## Top 5 things to know on day one

1. **Load time is 7.2 seconds** — ~3.4MB of unoptimized images + 38 unbundled JS/CSS files.
2. **No H1 tag on homepage** — the most visible SEO issue.
3. **45/46 images have no alt text** — fails WCAG 2.1 Level A baseline.
4. **jQuery 1.9.1 is still loaded** — has documented CVEs; must be removed.
5. **Same product exists at 5–8 different URLs** — no canonical tags; SEO authority diluted.
