# Tipco Engineering — Homepage Replica

A faithful, upgraded React replica of https://tipcoengineering.com/ built with
Vite + React + TypeScript + Tailwind CSS v4.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
```

## Structure

```
src/
├── App.tsx                  # composes the single-page homepage
├── index.css                # Tailwind v4 entry + design tokens (@theme)
├── styles/                  # base, typography, component CSS layers
└── components/
    ├── TopBar.tsx           # social bar + login/contact strip
    ├── Navbar.tsx           # sticky logo nav + mobile drawer
    ├── Hero.tsx             # split brand-gradient hero + image slider
    ├── About.tsx
    ├── WorkingProcess.tsx   # parallax 4-step process
    ├── Products.tsx         # Products & Solutions cards
    ├── IndustrySection.tsx  # Industry / Process / Production Setup
    ├── Testimonials.tsx     # parallax rotating testimonials
    ├── NewsSection.tsx
    ├── Clients.tsx          # client logo grid
    ├── GetQuote.tsx         # quote form + reCAPTCHA placeholder
    ├── Footer.tsx           # 6-column footer + bottom bar
    └── FloatingButtons.tsx  # WhatsApp float + Enquiry tab
```

## Assets

Logo, favicon, slider, product, industry, and client images are loaded directly
from the live `tipcoengineering.com` origin (as requested — original logo/icon as-is).
Replace with local `/public` assets before going to production.

## Notes / upgrades over the original

- **Hero**: redesigned as a clean split layout (brand-gradient text panel + framed
  image slider) instead of full-bleed promo images with baked-in text — avoids the
  text-on-text clash present when overlaying copy on the original slides.
- Real Google Font (Open Sans) and design-token system (`--brand`, surfaces, radius,
  shadows) in `index.css`.
- Mobile-responsive nav drawer, accessible aria labels, no console errors.

## Known tooling gotcha

The `shadcn` CLI mis-resolves this workspace path (`D:\Program\TipcoNew` →
sibling `D:\Program\Tipco`). shadcn primitives were set up manually
(`components.json`, `src/lib/utils.ts`, CSS variables). To add shadcn components,
either run inside a clean path or copy components from ui.shadcn.com.
