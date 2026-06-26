# 30-Day Onboarding Plan

Role: Senior Frontend Developer joining Tipco Engineering web team
Goal: Understand the codebase fully and make meaningful contributions by end of Day 30.

---

## Week 1 — Understand (Days 1–7)
**Goal**: Build a complete mental model before touching anything.

### Day 1 — Codebase orientation
- Clone the repository (get access from team lead)
- Read the full directory structure; map it against the inferred architecture in `02-architecture.md`
- Identify the backend framework (Laravel? CodeIgniter? Plain PHP?)
- Find the PHP router/routes file; list every route and its controller

### Day 2 — Local dev setup
- Follow the setup guide (or create one if it doesn't exist)
- Get the site running locally
- Note any setup friction — document it for the next developer who joins

### Day 3 — End-to-end user flow trace
- Pick one user flow: Homepage → Product listing → Product detail → Get Quote → Form submit
- Read every PHP template, controller, and model involved
- Understand how product data is stored and retrieved (DB schema, CMS, flat files?)

### Day 4 — Forms & security review
- Read the form endpoint controllers for `/product-enquery` and `/send-enquiryform`
- Verify CSRF token validation is in place
- Verify reCAPTCHA is validated server-side
- Note the findings — update `07-security.md` with confirmed status

### Day 5 — Frontend asset audit
- Open every file in `/assets/js/` and `/assets/css/`
- For each file: note what it does, which jQuery version it requires, which pages use it
- Identify which of the 4 slider libraries is used where (so you know what to safely remove)
- Document in a spreadsheet or table

### Day 6 — Admin panel walkthrough
- Access the admin panel with a demo/test account
- Understand how products are created, images uploaded, events published
- Note what content fields are available vs what shows on the frontend

### Day 7 — URL and sitemap review
- Load `sitemap.xml` and map the URL structure
- Identify the full scale of the product URL duplication issue
- Bring findings to the team: "I found X products each appearing at Y URLs — is this intentional?"
- Begin drafting the canonical URL strategy (document in `04-seo.md`)

---

## Week 2 — Quick Wins (Days 8–14)
**Goal**: Make safe, high-impact fixes that don't need architectural discussion.
Each change should be a small, focused PR. Ask team lead for code review.

### Day 8 — Heading and content fixes
- Add H1 tag to the homepage
- Fix "Tipco Engineerings" → "Tipco Engineering" typo in H2
- Fix "laboratory Machines" capitalisation
- Fix duplicate H3 elements in the "Working Process" section (appears twice in DOM)
- Resolve "Since 1985" vs "incorporated in 2021" conflict with business team

### Day 9 — Image alt text (homepage)
- Add descriptive alt text to all 45 images on the homepage
- Convention: content images get descriptive text; purely decorative icons get `alt=""`
- Example: `alt="Dyno Mill horizontal bead grinding machine for paint manufacturing"`

### Day 10 — SEO meta fixes
- Fix canonical URL (remove double trailing slash)
- Add Open Graph tags (`og:title`, `og:description`, `og:image`, `og:type`, `og:url`)
- Add Twitter Card tags
- Confirm the authoritative GA4 property with the team; remove the duplicate

### Day 11 — Accessibility landmarks
- Wrap main content in `<main id="main-content">`
- Wrap navigation in `<nav aria-label="Main navigation">`
- Add skip link as first element in `<body>`
- Add `aria-label` to all icon-only social media links

### Day 12 — Remove jQuery 1.9.1
- Delete the CDN `<script src="ajax.googleapis.com/.../jquery/1.9.1/...">` tag
- Test all pages to confirm nothing breaks (jQuery 3.3.1 should handle everything it was doing)
- Fix any `$` conflicts if found

### Day 13 — Fix duplicate IDs and form labels
- Rename `id="email"` in forms to `id="footer-enquiry-email"` and `id="popup-email"`
- Update corresponding `label for=""` and any JS `getElementById` calls
- Add labels to the 2 inputs currently missing them

### Day 14 — robots.txt fix
- Correct all 11 disallow paths from `/https://tipcoengineering.com/path` → `/path`
- Verify with Google Search Console that robots.txt is now valid

---

## Week 3 — Performance Foundation (Days 15–21)
**Goal**: Establish a build pipeline and address the most damaging load-time issues.

### Day 15 — Set up a build tool
- Install Vite (recommended) or Webpack as a dev dependency
- Configure it to take `/assets/js/*.js` as inputs and output a single `bundle.js`
- Keep the existing file-by-file approach as a fallback while transitioning
- Get team sign-off before switching the production site to the bundle

### Day 16 — Bundle and deduplicate CSS
- Configure Vite to bundle all 12 CSS files into a single output
- Remove the duplicate `owl-carousel.css` `<link>` tag
- Move `Investor/css/extra-page.css` into the main CSS tree

### Day 17 — Lazy loading images
- Add `loading="lazy"` to all images that are below the fold
- Keep `loading="eager"` only on the logo and first hero image
- This single change should improve LCP by 1–2 seconds

### Day 18 — WebP conversion (high-priority images)
- Convert the 10 largest images to WebP format (slider images, category banners, client logos)
- Use `<picture>` with JPG fallback:
  ```html
  <picture>
    <source srcset="image.webp" type="image/webp">
    <img src="image.jpg" alt="..." loading="lazy">
  </picture>
  ```
- Measure load time improvement

### Day 19 — Slider library consolidation
- Audit which pages use which slider: RevolutionSlider, RoyalSlider, OwlCarousel, FlexSlider
- Propose a consolidation plan to the team
- Target: remove at least FlexSlider (4th slider) and PrettyPhoto (2nd lightbox)

### Day 20 — GA4 and reCAPTCHA cleanup
- Remove the confirmed-duplicate GA4 property tag
- Consolidate reCAPTCHA to the correct single key per form
- Defer GA4 and Ads scripts with `defer` or `async` attributes

### Day 21 — Google Fonts optimization
- Add `<link rel="preconnect">` for fonts.googleapis.com and fonts.gstatic.com
- Ensure `display=swap` is in the Google Fonts URL
- Evaluate self-hosting as a follow-up (eliminates external DNS lookup entirely)

---

## Week 4 — Architecture & Roadmap (Days 22–30)
**Goal**: Propose structural improvements and document the path forward.

### Day 22 — URL architecture proposal
- Present the URL duplication issue formally to the team
- Immediate fix: add canonical tags on all application-context pages
- Long-term: propose consolidating to machine-type URLs + category filter UI
- Get alignment before making changes that affect 100+ URLs

### Day 23 — Structured data (JSON-LD)
- Add `Organization` schema to the homepage
- Add `Product` schema to 3–5 product pages as a pilot
- Add `BreadcrumbList` to all inner pages
- Measure in Google Search Console after 1–2 weeks

### Day 24 — Cookie consent
- Research India's DPDP Act 2023 requirements with the business/legal team
- Evaluate consent solutions: `js-cookie` + custom banner, or a CMP like Cookiebot/Axeptio
- Present a compliance proposal — don't implement without legal sign-off

### Day 25 — HTTP security headers
- Coordinate with hosting/DevOps to add server-level headers:
  - `X-Frame-Options: SAMEORIGIN`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Content-Security-Policy` (start with report-only mode)
- Use `https://securityheaders.com` to test before and after

### Day 26 — Design system foundation
- Propose CSS custom properties for brand colors and core spacing
- Identify 5 most reused components (Button, Card, Form, Modal, Nav)
- Draft a simple style guide page (`/style-guide` or as a local HTML file)

### Day 27 — Font Awesome upgrade
- Audit which FA4 icon classes are actually used across templates
- Create a mapping from FA4 class names → FA6 equivalents
- Upgrade in one PR (or replace with an SVG sprite if usage is minimal)

### Day 28 — Documentation
- Write a `LOCAL_SETUP.md` with exact steps to run the project locally
- Write a `DEPLOYMENT.md` with the current deployment process
- Update `00-index.md` in `.claude/knowledge/` with any new findings
- Document the admin panel: how to add products, events, upload images

### Day 29 — 90-day roadmap
- Compile all issues from `06-issues-prioritized.md` into a sprint backlog
- Estimate effort (S/M/L) and business impact for each
- Present to team: "Here's what I found, here's what I'd tackle first, and here's why"

### Day 30 — Retrospective & sprint planning
- Schedule a 30-min retrospective with the existing dev team
- Share your findings diplomatically: focus on problems and opportunities, not blame
- Agree on the first sprint's scope
- Identify a specific deliverable you can own: e.g., "I'll own image optimization and alt text
  across all product pages"

---

## Success criteria at Day 30
- [ ] Site running locally on your machine
- [ ] Full understanding of PHP template structure and routing
- [ ] H1 tags added to homepage (and confirmed in GSC)
- [ ] Alt text added to all homepage images
- [ ] jQuery 1.9.1 removed
- [ ] Canonical URL fixed
- [ ] Lazy loading implemented on homepage
- [ ] Duplicate GA4 ID resolved
- [ ] Documented: local setup, deployment process, admin panel usage
- [ ] Presented a prioritized 90-day technical roadmap to the team
