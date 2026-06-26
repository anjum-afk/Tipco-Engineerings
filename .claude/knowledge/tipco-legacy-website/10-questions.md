# Questions for the Existing Development Team

As a new Senior Frontend Developer joining the project, ask these during your first week.

---

## Architecture & Codebase

1. Is the backend Laravel, CodeIgniter, or plain PHP? Is there a `composer.json`?
2. What does the full directory structure look like? Where is the admin panel (URL and codebase path)?
3. Is there a local development setup guide? Docker, Laravel Valet, XAMPP, or something else?
4. Where is the source code hosted — private GitHub/Bitbucket/GitLab, or only on the live server?
5. How are deployments done — manual FTP/SFTP, `git pull` on server, CI/CD pipeline?
6. Is there a staging or UAT environment before changes go to production?

---

## Content & URL Strategy

7. Why does the same product appear at 5–8 different URLs (e.g., `/mill-series/dyno-mill`,
   `/paint/dyno-mill`, `/pharma/dyno-mill`)? Is this intentional for SEO?
8. Are canonical tags set on the inner application-context product pages pointing to the
   machine-type URL? If not, was this an oversight or a deliberate decision?
9. `lab-machines` and `laboratory-machines` are separate URL sections with identical products.
   Is one a redirect target, or are both live and indexed?
10. Who currently creates and updates product pages, event posts, and blog content — developers
    or a non-technical business team using an admin panel?

---

## Analytics & Tracking

11. There are **two separate GA4 property IDs** (`G-9F2J86WRZT` and `G-J12NPBTF6M`) both active
    on the site. Are these for different business entities, or is one a duplicate/mistake?
    Which one should be treated as authoritative?
12. There are **two reCAPTCHA site keys** loading on every page. Do they correspond to different
    forms, or is one of them leftover?
13. Is the Google Ads account actively being used? Are conversions being tracked and reviewed?

---

## Performance & Hosting

14. Where is the production server hosted (provider, data center region)?
15. Is there a CDN in place (Cloudflare, Fastly, CloudFront, etc.)? If not, has one been
    discussed or planned?
16. Are there any performance or error monitoring tools in use (New Relic, Sentry, Datadog, etc.)?

---

## Legal & Compliance

17. Is the site subject to GDPR (European visitors), India's DPDP Act 2023, or any other
    data protection regulation?
18. There is currently no cookie consent banner. Is this intentional or an oversight?
19. Are privacy policy and terms pages maintained by legal or by the dev team?

---

## Commercial Plugins

20. Are active licenses held for **RevolutionSlider** (ThemePunch) and **RoyalSlider**?
    When do they expire, and who manages renewals?

---

## Security

21. Do the PHP form endpoints (`/product-enquery`, `/send-enquiryform`) include CSRF token
    validation? Is Laravel's CSRF middleware applied to those routes?
22. Is the reCAPTCHA response validated server-side on form submission?
23. Is directory listing disabled on `/public/uploads/`?

---

## Team & Process

24. Is there a product roadmap or backlog for the website? Where is it tracked (Jira, Trello,
    Notion, GitHub Issues)?
25. How are design changes requested — Figma designs, wireframes, or verbal briefs?
26. Is there a design file (Figma, XD, Sketch) for the current site design?
27. What is the current release cadence — ad-hoc as needed, or scheduled sprint cycles?
28. Is there a QA/testing process before production deployments?
