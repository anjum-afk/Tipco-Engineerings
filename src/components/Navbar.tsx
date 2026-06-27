import { useState, useRef, useEffect, type ComponentType } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Menu, X, ChevronDown, ChevronRight,
  Droplet, Printer, FlaskConical, Pill, Shield, Utensils,
  RotateCcw, Waves, Wind, Shuffle, Factory,
  Wrench, Settings, Headphones,
  Building2, Building, MapPin, Globe,
  FileText, Download, BookOpen, Video, Calendar, Newspaper, Lightbulb,
  Users, Briefcase, ShieldCheck, Award, Mail,
  BarChart3, TrendingUp, HelpCircle, Scale, FileCheck,
  Layers, Atom, ArrowLeftRight, Microscope, Search,
} from 'lucide-react'
import { SOCIAL_LINKS, CONTACT } from '../data/site'

const LOGO = 'https://tipcoengineering.com/public/uploads/Tipco.png'

type LucideIcon = ComponentType<{ size?: number; className?: string }>

// ── Data types ────────────────────────────────────────────────────────────────

interface Row {
  icon: LucideIcon
  label: string
  sub: string
  to: string
  badge?: string
  gray?: boolean
}

interface Col {
  heading: string
  rows: Row[]
}

interface FooterLink { label: string; to: string }

interface NavEntry {
  label: string
  key: string
  to: string
  cols?: Col[]
  footerLeft?: FooterLink
  footerRight?: FooterLink
}

// ── Mega-menu data ────────────────────────────────────────────────────────────

const SOLUTIONS_COLS: Col[] = [
  {
    heading: 'By Industry',
    rows: [
      { icon: Droplet, label: 'Paint & coatings', sub: 'Pigment grinding, dispersion, viscosity control', to: '/application/paint' },
      { icon: Printer, label: 'Printing inks', sub: 'Nano fineness, colour consistency at scale', to: '/application/ink' },
      { icon: FlaskConical, label: 'Chemicals & adhesives', sub: 'Batch mixing, emulsification, dispersion', to: '/application/chemical' },
      { icon: Pill, label: 'Pharma & personal care', sub: 'cGMP-compatible, SS contact parts', to: '/application/pharma' },
      { icon: Shield, label: 'Defence & aerospace', sub: 'Rocket coating systems, specialised materials', to: '/about-us', badge: 'DRDO' },
      { icon: Utensils, label: 'Food & FMCG', sub: 'Emulsification, homogenisation, hygiene design', to: '/application/industry' },
    ],
  },
  {
    heading: 'By Process',
    rows: [
      { icon: RotateCcw, label: 'Dispersing', sub: 'Break agglomerates into stable suspensions', to: '/application/disperser-series', gray: true },
      { icon: Waves, label: 'Wet grinding & milling', sub: 'Reduce particle size to micron / nano range', to: '/application/milling', gray: true },
      { icon: Wind, label: 'Homogenising', sub: 'Stable emulsions, droplet size reduction', to: '/application/homogenizers', gray: true },
      { icon: Shuffle, label: 'Mixing & blending', sub: 'Liquid-liquid, solid-liquid, high viscosity', to: '/application/mixing', gray: true },
      { icon: Factory, label: 'Turnkey production lines', sub: 'Full plant setup from raw material to fill', to: '/application/production-setup', gray: true },
    ],
  },
  {
    heading: 'Start Here',
    rows: [
      { icon: FlaskConical, label: 'Try before you buy', sub: 'Free lab trial on your actual product — book a session with our engineers.', to: '/contact-us' },
      { icon: Wrench, label: 'Talk to an engineer', sub: "Tell us your raw material and target particle size — we'll recommend the right machine.", to: '/contact-us', gray: true },
    ],
  },
]

const PRODUCTS_COLS: Col[] = [
  {
    heading: 'Mill Series',
    rows: [
      { icon: Layers, label: 'Bead mill', sub: 'Horizontal, high-throughput', to: '/mill-series/bead-mill' },
      { icon: Layers, label: 'Basket mill', sub: 'In-tank, easy batch changeover', to: '/mill-series/basket-mill' },
      { icon: Atom, label: 'Dyno mill', sub: 'Ultra-fine dispersion', to: '/mill-series/dyno-mill' },
      { icon: ArrowLeftRight, label: 'Horizontal bead mill', sub: 'Continuous processing', to: '/mill-series/horizontal-bead-mill' },
      { icon: RotateCcw, label: 'Attritor mill', sub: 'Stationary tank grinding', to: '/mill-series/attritor-mill-machine' },
    ],
  },
  {
    heading: 'Disperser Series',
    rows: [
      { icon: Wind, label: 'High speed disperser', sub: 'Standard, most versatile', to: '/disperser-series/high-speed-disperser' },
      { icon: Settings, label: 'Hydraulic lift disperser', sub: 'Tall vessels, heavy loads', to: '/disperser-series/high-speed-disperser-with-hydraulic-lifting' },
      { icon: Wrench, label: 'Disperser with gripper', sub: 'Fixed drum, easy cleaning', to: '/disperser-series/high-speed-disperser-with-gripper' },
      { icon: Layers, label: 'Twin shaft disperser', sub: 'High viscosity batches', to: '/disperser-series/twin-shaft-disperser' },
    ],
  },
  {
    heading: 'Homogeniser Series',
    rows: [
      { icon: ArrowLeftRight, label: 'Inline homogeniser', sub: 'Continuous flow, inline', to: '/homogenizers/in-line-homogenizer' },
      { icon: FlaskConical, label: 'In-tank homogeniser', sub: 'Batch processing, tank-mounted', to: '/homogenizers/in-tank-homogenizer' },
      { icon: Shuffle, label: 'Liquid powder mixer', sub: 'Powder induction without dust', to: '/homogenizers/liquid-powder-mixing-machine' },
    ],
  },
  {
    heading: 'Lab & Production',
    rows: [
      { icon: Microscope, label: 'Lab bead mill', sub: 'R&D scale, 0.1–5L', to: '/lab-machines/lab-attritor-mill', gray: true },
      { icon: FlaskConical, label: 'Lab disperser', sub: 'Pilot batch testing', to: '/lab-machines/lab-high-speed-disperser', gray: true },
      { icon: Layers, label: 'Lab basket mill', sub: 'Small batch R&D', to: '/lab-machines/lab-basket-mill', gray: true },
      { icon: Factory, label: 'Paint production line', sub: 'End-to-end turnkey setup', to: '/production-line/paint-production-line-setup' },
      { icon: Printer, label: 'Ink production line', sub: 'Pigment to packaged ink', to: '/production-line/ink-production-line' },
    ],
  },
]

const ENGINEERING_COLS: Col[] = [
  {
    heading: 'What We Offer',
    rows: [
      { icon: FlaskConical, label: 'Trial lab', sub: 'Test your formulation on our machines before you order', to: '/contact-us', badge: 'Free' },
      { icon: Wrench, label: 'Turnkey projects', sub: 'Design, manufacture, install and commission — single source', to: '/service' },
      { icon: Settings, label: 'Engineering design', sub: 'Process flow design, equipment sizing, layout planning', to: '/service' },
      { icon: Headphones, label: 'After-sales support', sub: 'Spare parts, service visits, remote troubleshooting', to: '/service' },
    ],
  },
  {
    heading: 'Our Capabilities',
    rows: [
      { icon: Building2, label: 'Sonipat factory', sub: 'Sector 38, Rai Industrial Area — main manufacturing unit', to: '/about-us', gray: true },
      { icon: MapPin, label: 'Pune R&D centre', sub: '1 lakh sq ft — advanced R&D facility upcoming', to: '/about-us', badge: 'New', gray: true },
      { icon: Globe, label: 'Lexamix partnership', sub: 'European R&D collaboration for advanced process technology', to: '/about-us', gray: true },
    ],
  },
  {
    heading: 'Book a Trial',
    rows: [
      { icon: FlaskConical, label: 'Book a lab trial', sub: 'Bring your raw material. Run it on our lab machine. Get particle size data before committing to a purchase.', to: '/contact-us' },
    ],
  },
]

const KNOWLEDGE_COLS: Col[] = [
  {
    heading: 'Resources',
    rows: [
      { icon: FileText, label: 'Case studies', sub: 'Real projects — paint, inks, chemicals, pharma', to: '/blog', gray: true },
      { icon: Download, label: 'Product data sheets', sub: 'Technical specs, dimensions and capacities (PDF)', to: '/catalogue', gray: true },
      { icon: BookOpen, label: 'Application notes', sub: 'Process guides by industry and formulation type', to: '/blog', gray: true },
      { icon: Video, label: 'Machine videos', sub: 'See our machines in action at customer plants', to: '/video-gallery', gray: true },
    ],
  },
  {
    heading: 'Company Updates',
    rows: [
      { icon: Calendar, label: 'Events & exhibitions', sub: 'Paint India, Chemtech and more', to: '/event', gray: true },
      { icon: Newspaper, label: 'News & press', sub: 'Latest announcements, awards and media coverage', to: '/blog', gray: true },
      { icon: Lightbulb, label: 'Industry insights', sub: 'Thought leadership on processing technology', to: '/blog', gray: true },
    ],
  },
]

const COMPANY_COLS: Col[] = [
  {
    heading: 'Who We Are',
    rows: [
      { icon: Building, label: 'About Tipco', sub: 'Our story, values and 35+ year legacy', to: '/about-us' },
      { icon: Users, label: 'Leadership team', sub: 'Board of directors and senior management', to: '/investors/board-of-directors' },
      { icon: Briefcase, label: 'Careers', sub: 'Open roles at Sonipat and Pune', to: '/career' },
    ],
  },
  {
    heading: 'Credentials',
    rows: [
      { icon: ShieldCheck, label: 'DRDO credential', sub: 'Approved supplier for rocket coating systems', to: '/about-us', badge: 'Exclusive' },
      { icon: Globe, label: 'Lexamix partnership', sub: 'European R&D, India-first manufacturing', to: '/about-us' },
      { icon: Award, label: 'Quality & certifications', sub: 'ISO, CE compliance and quality standards', to: '/certificates' },
      { icon: Users, label: 'Our clients', sub: 'Serving 200+ manufacturers across India & MENA', to: '/client' },
    ],
  },
  {
    heading: 'Our Presence',
    rows: [
      { icon: MapPin, label: 'Sonipat factory', sub: 'Sector 38, Rai Industrial Area, Haryana', to: '/about-us', gray: true },
      { icon: MapPin, label: 'Pune R&D centre', sub: '1 lakh sq ft — Maharashtra', to: '/about-us', gray: true },
      { icon: Mail, label: 'Contact us', sub: 'mail@tipcoengineering.com · 1800 1020 229', to: '/contact-us', gray: true },
    ],
  },
]

const INVESTORS_COLS: Col[] = [
  {
    heading: 'Governance',
    rows: [
      { icon: Users, label: 'Board of directors', sub: 'Leadership bios and committee details', to: '/investors/board-of-directors' },
      { icon: FileCheck, label: 'Annual reports', sub: 'FY23, FY24, FY25, FY26 — PDF downloads', to: '/investors/annual-report' },
      { icon: Scale, label: 'Corporate governance', sub: 'Policies, code of conduct, disclosures', to: '/investors/corporate-governance' },
    ],
  },
  {
    heading: 'Financials',
    rows: [
      { icon: BarChart3, label: 'Financial highlights', sub: 'FY23–FY26 revenue, EBITDA, PAT, EPS', to: '/investors/financial-highlights', gray: true },
      { icon: TrendingUp, label: 'BSE filings', sub: 'Quarterly results, shareholding, disclosures', to: '/investors/bse-filings', gray: true },
      { icon: HelpCircle, label: 'Investor FAQ', sub: 'Common questions answered clearly', to: '/investors/faqs', gray: true },
    ],
  },
  {
    heading: 'Stay Updated',
    rows: [
      { icon: Newspaper, label: 'Press releases', sub: 'Official announcements and media statements', to: '/investors/press-releases', gray: true },
      { icon: Mail, label: 'Investor contact', sub: 'Registrar details and investor helpdesk', to: '/investors/contact', gray: true },
    ],
  },
]

const NAV: NavEntry[] = [
  {
    label: 'Solutions', key: 'solutions', to: '/all-category', cols: SOLUTIONS_COLS,
    footerLeft: { label: 'View all solutions →', to: '/all-category' },
  },
  {
    label: 'Products', key: 'products', to: '/product', cols: PRODUCTS_COLS,
    footerLeft: { label: 'View all products →', to: '/product' },
    footerRight: { label: 'Download catalogue', to: '/catalogue' },
  },
  {
    label: 'Engineering', key: 'engineering', to: '/service', cols: ENGINEERING_COLS,
    footerLeft: { label: 'View all services →', to: '/service' },
  },
  {
    label: 'Knowledge', key: 'knowledge', to: '/blog', cols: KNOWLEDGE_COLS,
    footerLeft: { label: 'Visit knowledge centre →', to: '/blog' },
  },
  {
    label: 'Company', key: 'company', to: '/about-us', cols: COMPANY_COLS,
    footerLeft: { label: 'About Tipco Engineering →', to: '/about-us' },
    footerRight: { label: 'Contact us', to: '/contact-us' },
  },
  {
    label: 'Investors', key: 'investors', to: '/investors/board-of-directors', cols: INVESTORS_COLS,
    footerLeft: { label: 'Investor relations →', to: '/investors/board-of-directors' },
    footerRight: { label: 'BSE SME Listed', to: '/investors/bse-filings' },
  },
]

// ── Two-panel mega menu (used for all nav entries) ───────────────────────────

function TwoPanelMegaPanel({
  entry,
  onMouseEnter,
  onMouseLeave,
}: {
  entry: NavEntry
  onMouseEnter: () => void
  onMouseLeave: () => void
}) {
  const cols = entry.cols!
  const [activeCategory, setActiveCategory] = useState(cols[0].heading)
  const activeCol = cols.find(c => c.heading === activeCategory) ?? cols[0]

  return (
    <div
      className="absolute top-full left-0 right-0 bg-white shadow-2xl z-[300]"
      style={{ borderTop: '3px solid var(--brand)' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-[1280px] mx-auto flex" style={{ minHeight: '260px' }}>
        {/* Left sidebar */}
        <div className="w-[210px] flex-shrink-0 border-r border-gray-100 py-5">
          {cols.map(col => (
            <button
              key={col.heading}
              onMouseEnter={() => setActiveCategory(col.heading)}
              onClick={() => setActiveCategory(col.heading)}
              className={`w-full text-left px-6 py-2.5 text-[13.5px] font-medium transition-colors cursor-pointer border-l-2 ${
                activeCategory === col.heading
                  ? 'bg-gray-50'
                  : 'border-transparent text-gray-600 hover:text-brand hover:bg-gray-50'
              }`}
              style={activeCategory === col.heading
                ? { borderLeftColor: 'var(--brand)', color: 'var(--brand)' }
                : {}}
            >
              {col.heading}
            </button>
          ))}
        </div>

        {/* Right content panel */}
        <div className="flex-1 px-8 py-6 flex flex-col">
          <div className="text-[10.5px] font-semibold uppercase tracking-widest text-gray-400 mb-4">
            {activeCol.heading}
          </div>

          {/* Grid cols: 1→1col, 2→2col, 3→3col(1row), 4→2col(2×2), 5-6→3col */}
          <div
            className="grid gap-2.5 flex-1 content-start"
            style={{
              gridTemplateColumns: activeCol.rows.length === 1
                ? '1fr'
                : activeCol.rows.length === 2
                  ? '1fr 1fr'
                  : activeCol.rows.length === 3
                    ? '1fr 1fr 1fr'
                    : activeCol.rows.length === 4
                      ? '1fr 1fr'
                      : '1fr 1fr 1fr',
            }}
          >
            {activeCol.rows.map(row => (
              <Link
                key={row.label}
                to={row.to}
                className="group block rounded-lg border border-gray-100 px-4 py-3.5 hover:border-[color:var(--brand)] hover:shadow-sm transition-all"
              >
                <div className="text-[13.5px] font-semibold text-gray-800 group-hover:text-brand mb-1 leading-tight flex items-center gap-1.5">
                  {row.label}
                  {row.badge && (
                    <span className="text-[9px] font-bold px-1.5 py-px rounded" style={{ background: 'var(--brand-light)', color: 'var(--brand)' }}>
                      {row.badge}
                    </span>
                  )}
                </div>
                <div className="text-[11.5px] text-gray-500 leading-snug">{row.sub}</div>
              </Link>
            ))}
          </div>

          {/* Footer */}
          {(entry.footerLeft || entry.footerRight) && (
            <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
              {entry.footerLeft && (
                <Link to={entry.footerLeft.to} className="text-[12.5px] font-semibold hover:underline" style={{ color: 'var(--brand)' }}>
                  {entry.footerLeft.label}
                </Link>
              )}
              {entry.footerRight && (
                <Link to={entry.footerRight.to} className="text-[12.5px] text-gray-400 hover:text-gray-600">
                  {entry.footerRight.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ── Mega menu panel ───────────────────────────────────────────────────────────

function MegaPanel({
  entry,
  onMouseEnter,
  onMouseLeave,
}: {
  entry: NavEntry
  onMouseEnter: () => void
  onMouseLeave: () => void
}) {
  if (!entry.cols) return null
  return (
    <TwoPanelMegaPanel
      entry={entry}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  )
}

// ── Mobile drawer nav item (accordion) ───────────────────────────────────────

function DrawerItem({
  entry,
  expanded,
  onToggle,
  onNavigate,
}: {
  entry: NavEntry
  expanded: boolean
  onToggle: () => void
  onNavigate: () => void
}) {
  if (!entry.cols) {
    return (
      <li className="border-b border-gray-100">
        <Link
          to={entry.to}
          onClick={onNavigate}
          className="flex items-center px-5 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-gray-700 hover:text-brand"
        >
          {entry.label}
        </Link>
      </li>
    )
  }

  return (
    <li className="border-b border-gray-100">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-gray-700 hover:text-brand"
        aria-expanded={expanded}
      >
        {entry.label}
        <ChevronRight size={15} className={`transition-transform ${expanded ? 'rotate-90' : ''}`} />
      </button>

      {expanded && (
        <div className="bg-gray-50 pb-2">
          {entry.cols.map(col => (
            <div key={col.heading} className="px-5 pt-2 pb-1">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5">{col.heading}</div>
              <ul className="pl-2 border-l border-gray-200 space-y-1">
                {col.rows.map(row => (
                  <li key={row.label}>
                    <Link
                      to={row.to}
                      onClick={onNavigate}
                      className="block text-[13px] text-gray-600 hover:text-brand py-0.5"
                    >
                      {row.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </li>
  )
}

// ── Main Navbar ───────────────────────────────────────────────────────────────

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const location = useLocation()

  useEffect(() => {
    setDrawerOpen(false)
    setExpanded(null)
    setActive(null)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  const openMenu = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActive(key)
  }

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActive(null), 120)
  }

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }

  const activeEntry = NAV.find(n => n.key === active) ?? null

  return (
    <header
      className="sticky top-0 z-[200]"
      style={{ background: 'var(--brand)' }}
      onMouseLeave={scheduleClose}
    >
      {/* ── Desktop bar ───────────────────────────────────── */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">

        {/* Logo in white card */}
        <Link
          to="/"
          className="flex-shrink-0 bg-white rounded-md px-3 py-2 shadow-sm"
          onClick={() => setActive(null)}
        >
          <img src={LOGO} alt="Tipco Engineering" className="h-8 md:h-9 w-auto" />
        </Link>

        {/* Desktop nav items */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV.map(entry => {
            const isActive = active === entry.key
            return (
              <button
                key={entry.key}
                onMouseEnter={() => openMenu(entry.key)}
                onClick={() => setActive(isActive ? null : entry.key)}
                className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-[13.5px] font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'text-white/85 hover:bg-white/10 hover:text-white'
                }`}
              >
                {entry.label}
                {entry.cols && (
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 opacity-70 ${isActive ? 'rotate-180' : ''}`}
                  />
                )}
              </button>
            )
          })}
        </nav>

        {/* Right side: search + CTA */}
        <div className="flex items-center gap-2">
          <button className="hidden lg:flex items-center justify-center w-8 h-8 rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-colors">
            <Search size={16} />
          </button>
          <Link
            to="/contact-us"
            className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-semibold transition-colors"
            style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}
            onMouseEnter={() => { if (active) setActive(null) }}
          >
            Get a quote
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* ── Mega menu panel ───────────────────────────────── */}
      {activeEntry && (
        <MegaPanel
          entry={activeEntry}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        />
      )}

      {/* ── Mobile backdrop ───────────────────────────────── */}
      <div
        className={`lg:hidden fixed inset-0 z-[400] bg-black/50 transition-opacity duration-300 ${
          drawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* ── Mobile drawer ─────────────────────────────────── */}
      <aside
        className={`lg:hidden fixed top-0 left-0 z-[410] h-full w-[300px] max-w-[85vw] bg-white shadow-2xl flex flex-col transition-transform duration-300 ${
          drawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4" style={{ background: 'var(--brand)' }}>
          <img src={LOGO} alt="Tipco Engineering" className="h-8 w-auto bg-white rounded px-2 py-1" />
          <button
            onClick={() => setDrawerOpen(false)}
            className="p-1.5 text-white/80 hover:text-white rounded-lg hover:bg-white/10"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto">
          <ul>
            {NAV.map(entry => (
              <DrawerItem
                key={entry.key}
                entry={entry}
                expanded={expanded === entry.key}
                onToggle={() => setExpanded(e => e === entry.key ? null : entry.key)}
                onNavigate={() => setDrawerOpen(false)}
              />
            ))}
          </ul>

          {/* Footer */}
          <div className="px-5 py-5 border-t border-gray-100 mt-2">
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand mb-4 break-all"
            >
              <Mail size={14} className="text-brand flex-shrink-0" />
              {CONTACT.email}
            </a>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {SOCIAL_LINKS.map(({ href, d, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white"
                  style={{ background: 'var(--brand)' }}
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d={d} /></svg>
                </a>
              ))}
            </div>

            <div className="text-xs text-gray-400 mb-1">For any help</div>
            <a
              href={`tel:${CONTACT.tollFree.replace(/\s/g, '')}`}
              className="text-base font-bold text-gray-800 hover:text-brand block"
            >
              {CONTACT.tollFree}
            </a>
          </div>
        </nav>

        {/* Get a quote */}
        <div className="p-4 border-t border-gray-100">
          <Link
            to="/contact-us"
            onClick={() => setDrawerOpen(false)}
            className="block text-center py-2.5 rounded-lg text-[13px] font-semibold text-white"
            style={{ background: 'var(--brand)' }}
          >
            Get a quote
          </Link>
        </div>
      </aside>
    </header>
  )
}
