# Site Architecture

## Rendering model
Server-side rendered PHP MPA (Multi-Page Application). No client-side routing.
Every URL is a full server round-trip returning complete HTML.

## Directory structure (inferred)
```
project-root/
├── public/
│   ├── uploads/          ← CMS-managed media (logos, sliders, client images)
│   └── productwork/      ← Product machine images
├── assets/
│   ├── js/               ← 20+ JS files, manually referenced
│   ├── css/              ← 12 CSS files, manually referenced
│   ├── images/           ← Static UI images
│   ├── rs-plugin/        ← RevolutionSlider (commercial)
│   └── royalslider/      ← RoyalSlider (commercial)
├── catalogstyle/         ← PDF flipbook viewer
├── Investor/
│   └── css/extra-page.css ← Isolated investor section styles
└── [PHP templates/controllers]
```

## Page topology (211 URLs from sitemap)

### Core pages
- `/` — Homepage
- `/about-us`
- `/product` — Master product listing (~30 products)
- `/all-category`
- `/catalogue` — PDF flipbook
- `/contact-us`
- `/login`, `/register`, `/reset`
- `/service`, `/career`, `/partner`, `/client`
- `/video-gallery`, `/photo-gallery`
- `/investor`, `/sales-head-desk`
- `/privacy-policy`, `/term-condition`, `/faq`, `/certificates`
- `/event`, `/events/[slug]`

### Product URLs (critical duplication issue — see below)
Products live under both their **machine-type** path and multiple **application** paths:

**Machine-type paths** (canonical intent):
- `/mill-series/[product]`
- `/disperser-series/[product]`
- `/homogenizers/[product]`
- `/lab-machines/[product]` and `/laboratory-machines/[product]` (duplicate sets)
- `/production-line/[product]`
- `/mixing/[product]`
- `/milling/[product]`

**Application/industry paths** (duplicate content):
- `/paint/[product]`
- `/pharma/[product]`
- `/chemical/[product]`
- `/ink/[product]`
- `/coating/[product]`
- `/paint-production/[product]`
- `/ink-production/[product]`
- `/chemical-production/[product]`
- `/pesticides-industry/[product]`
- `/production-setup/[product]`

**Example: dyno-mill appears at all these URLs:**
```
/mill-series/dyno-mill          ← machine-type
/milling/dyno-mill              ← process
/paint/dyno-mill                ← industry
/pharma/dyno-mill               ← industry
/ink/dyno-mill                  ← industry
/paint-production/dyno-mill     ← production type
/ink-production/dyno-mill       ← production type
/production-setup/dyno-mill     ← setup type
```

**Impact**: ~40 unique products × ~5-8 URL variants = 200+ pages of near-duplicate content.
No canonical tags observed to point search engines to the authoritative URL.

## Application/category landing pages
Each product category has a landing page at `/application/[category]`:
- `/application/mill-series`
- `/application/disperser-series`
- `/application/paint`
- `/application/pharma`
- `/application/chemical`
- `/application/ink`
- `/application/mixing`
- `/application/milling`
- etc.

## Navigation structure
**Top bar**: Social icons | Login/SignUp | Email | Phone
**Header**: Logo | Hamburger (mobile) | Desktop nav
**Primary nav**: About Tipco | Product | Application | Investors | Events | Our Clients | Contact US | Get Quote | Login/SignUp
**Product dropdown**: Mill Series | Production Line | Laboratory Machines | Homogenizers | Disperser Series
**Application dropdown**: Industry (Paint/Pharma/Chemical/Ink) | Process (Mixing/Milling) | Production Setup

**Mobile footer bar** (sticky): Call | Enquire | WhatsApp
**Side tab** (desktop): ENQUIRY (fixed right)

## Forms
| Form ID | Action endpoint | Method | Fields |
|---------|----------------|--------|--------|
| `foot` | `/product-enquery` | POST | pname, name, email, companyname, phone, message |
| `popform` | `/send-enquiryform` | POST | name, mobile, enquirytype, email, subject, message, g-recaptcha-response |

Both forms share `id="email"` — duplicate ID, invalid HTML.

## Sitemap
- Main sitemap: `https://tipcoengineering.com/sitemap.xml` (211 URLs)
- Blog sitemap referenced in robots.txt (content unclear)
- `llms.txt` referenced in robots.txt (unusual — may be an LLM context file)

## Robots.txt issues
All disallow rules are malformed — they use full URL format instead of path-only:
```
# Wrong (current):
Disallow: /https://tipcoengineering.com/some-path

# Correct:
Disallow: /some-path
```
Result: none of the disallow rules are currently enforced.

## Admin panel
Location unknown (likely `/admin` or `/dashboard`). Ask the team.
Manages: products, images, events, careers, blog posts, enquiries.
