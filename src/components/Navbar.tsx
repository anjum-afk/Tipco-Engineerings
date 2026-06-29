import { useState, useRef, useEffect, useMemo, type ComponentType } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  Menu, X, ChevronDown, ArrowUpRight,
  Droplet, Printer, FlaskConical, Pill, Shield, Utensils,
  RotateCcw, Waves, Wind, Shuffle, Factory,
  Wrench, Settings, Headphones,
  Building2, Building, MapPin, Globe,
  FileText, Download, BookOpen, Video, Calendar, Newspaper, Lightbulb,
  Users, Briefcase, ShieldCheck, Award, Mail,
  BarChart3, TrendingUp, HelpCircle, Scale, FileCheck,
  Layers, Atom, ArrowLeftRight, Microscope, Search,
  Phone, Sun, Moon,
} from 'lucide-react'
import { SOCIAL_LINKS, CONTACT } from '../data/site'
import { useDarkMode } from '../hooks/useDarkMode'

const LOGO = '/img/logo/tipco-logo.png'

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
  sidebarPinned?: boolean   // pin rows as sub-links in the sidebar
  sidebarDivider?: boolean  // render as a non-interactive section label
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
    sidebarDivider: true,
    rows: [],
  },
  {
    heading: 'Talk to an engineer',
    rows: [
      { icon: Wrench, label: 'Talk to an engineer', sub: "Tell us your raw material and target particle size — we'll recommend the right machine.", to: '/contact-us' },
    ],
  },
  {
    heading: 'Try before you buy',
    rows: [
      { icon: FlaskConical, label: 'Try before you buy', sub: 'Free lab trial on your actual product — book a session with our engineers.', to: '/contact-us' },
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

// ── Two-panel mega menu (desktop hover) ──────────────────────────────────────

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
      className="absolute top-full left-0 right-0 shadow-2xl z-[300]"
      style={{ borderTop: '3px solid var(--brand)', background: 'var(--background)' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-[1280px] mx-auto flex" style={{ minHeight: '260px' }}>
        <div className="w-[210px] flex-shrink-0 border-r py-5" style={{ borderColor: 'var(--border)' }}>
          {cols.map(col => (
            <div key={col.heading}>
              {col.sidebarDivider
                ? (
                  <div
                    className="px-6 pt-4 pb-1 text-[10px] font-bold uppercase tracking-[0.18em]"
                    style={{ color: 'var(--foreground-subtle)' }}
                  >
                    {col.heading}
                  </div>
                )
                : (
                  <button
                    onMouseEnter={e => {
                      setActiveCategory(col.heading)
                      if (activeCategory !== col.heading) {
                        e.currentTarget.style.color = 'var(--brand)'
                        e.currentTarget.style.background = 'var(--surface)'
                      }
                    }}
                    onClick={() => setActiveCategory(col.heading)}
                    className="w-full text-left px-6 py-2.5 text-[13.5px] font-medium transition-colors cursor-pointer border-l-2"
                    style={activeCategory === col.heading
                      ? { borderLeftColor: 'var(--brand)', color: 'var(--brand)', background: 'var(--surface)' }
                      : { borderColor: 'transparent', color: 'var(--foreground-muted)', background: 'transparent' }}
                    onMouseLeave={e => {
                      if (activeCategory !== col.heading) {
                        e.currentTarget.style.color = 'var(--foreground-muted)'
                        e.currentTarget.style.background = 'transparent'
                      }
                    }}
                  >
                    {col.heading}
                  </button>
                )
              }
            </div>
          ))}
        </div>

        <div className="flex-1 px-8 py-6 flex flex-col">
          <div className="text-[10.5px] font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--foreground-subtle)' }}>
            {activeCol.heading}
          </div>
          <div
            className="grid gap-2.5 flex-1 content-start"
            style={{
              gridTemplateColumns: activeCol.rows.length <= 2
                ? '1fr'
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
                className="group block rounded-lg px-4 py-3.5 transition-all"
                style={{ border: '1px solid transparent' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--brand)'
                  e.currentTarget.style.background = 'var(--surface)'
                  e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.07)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'transparent'
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div className="text-[13.5px] font-semibold group-hover:text-brand mb-1 leading-tight flex items-center gap-1.5" style={{ color: 'var(--foreground)' }}>
                  {row.label}
                  {row.badge && (
                    <span className="text-[9px] font-bold px-1.5 py-px rounded" style={{ background: 'var(--brand-light)', color: 'var(--brand)' }}>
                      {row.badge}
                    </span>
                  )}
                </div>
                <div className="text-[11.5px] leading-snug" style={{ color: 'var(--foreground-muted)' }}>{row.sub}</div>
              </Link>
            ))}
          </div>

          {(entry.footerLeft || entry.footerRight) && (
            <div className="mt-5 pt-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--border)' }}>
              {entry.footerLeft && (
                <Link to={entry.footerLeft.to} className="text-[12.5px] font-semibold hover:underline" style={{ color: 'var(--brand)' }}>
                  {entry.footerLeft.label}
                </Link>
              )}
              {entry.footerRight && (
                <Link to={entry.footerRight.to} className="text-[12.5px] hover:underline" style={{ color: 'var(--foreground-subtle)' }}>
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

// ── Search bar inside fullscreen menu ────────────────────────────────────────

function FsSearch({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('')
  const [cursor, setCursor] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const results = useMemo<SearchEntry[]>(() => {
    const q = query.trim().toLowerCase()
    if (q.length < 2) return []
    const matched = SEARCH_INDEX.filter(
      e => e.label.toLowerCase().includes(q) || (e.sub ?? '').toLowerCase().includes(q)
    )
    matched.sort((a, b) => a.label.toLowerCase().indexOf(q) - b.label.toLowerCase().indexOf(q))
    const seen = new Set<string>()
    return matched.filter(e => {
      if (seen.has(e.to)) return false
      seen.add(e.to)
      return true
    }).slice(0, 6)
  }, [query])

  useEffect(() => { setCursor(-1) }, [results])

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') { setQuery(''); return }
    if (!results.length) return
    if (e.key === 'ArrowDown') { e.preventDefault(); setCursor(c => Math.min(c + 1, results.length - 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setCursor(c => Math.max(c - 1, -1)) }
    else if (e.key === 'Enter') {
      e.preventDefault()
      const target = cursor >= 0 ? results[cursor] : results[0]
      if (target) { navigate(target.to); setQuery(''); onClose() }
    }
  }

  return (
    <div className="relative px-8 md:px-12 mt-5" style={{ zIndex: 200 }}>
      <div
        className="flex items-center gap-3 rounded-2xl px-4"
        style={{
          background: 'rgba(255,255,255,0.12)',
          border: '1.5px solid rgba(255,255,255,0.22)',
          height: '52px',
          backdropFilter: 'blur(8px)',
        }}
      >
        <Search size={17} style={{ color: 'rgba(255,255,255,0.6)', flexShrink: 0 }} />
        <input
          ref={inputRef}
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search products, solutions…"
          className="flex-1 bg-transparent text-[14px] font-medium text-white placeholder-white/40 outline-none"
          autoComplete="off"
        />
        {query && (
          <button onClick={() => setQuery('')} style={{ color: 'rgba(255,255,255,0.5)', flexShrink: 0 }}>
            <X size={15} />
          </button>
        )}
      </div>

      {results.length > 0 && (
        <div
          className="absolute left-8 right-8 md:left-12 md:right-12 top-[calc(100%+8px)] rounded-2xl overflow-hidden shadow-2xl"
          style={{ background: 'rgba(255,255,255,0.97)', border: '1px solid rgba(0,120,114,0.12)' }}
        >
          {results.map((r, i) => {
            const badge = KIND_BADGE[r.kind]
            return (
              <button
                key={`${r.to}-${i}`}
                onMouseDown={e => e.preventDefault()}
                onClick={() => { navigate(r.to); setQuery(''); onClose() }}
                onMouseEnter={() => setCursor(i)}
                className="w-full flex items-center gap-3 px-4 py-3 text-left transition-colors"
                style={{
                  background: cursor === i ? '#f0faf9' : 'transparent',
                  borderBottom: i < results.length - 1 ? '1px solid #f3f4f6' : 'none',
                }}
              >
                <div className="flex-1 min-w-0">
                  <p className="text-[13.5px] font-semibold text-gray-800 leading-tight truncate">{r.label}</p>
                  {r.sub && <p className="text-[11.5px] text-gray-400 mt-0.5 truncate">{r.sub}</p>}
                </div>
                <span className="flex-shrink-0 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full"
                  style={{ background: badge.bg, color: badge.text }}>
                  {r.kind}
                </span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

// ── Fullscreen overlay menu ───────────────────────────────────────────────────

function FullscreenMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [activeKey, setActiveKey] = useState<string | null>(null)
  const navigate = useNavigate()
  const activeEntry = NAV.find(n => n.key === activeKey) ?? null
  const previewRows = activeEntry?.cols?.flatMap(c => c.rows).slice(0, 6) ?? []

  // Reset selection when menu closes
  useEffect(() => {
    if (!isOpen) setActiveKey(null)
  }, [isOpen])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      aria-hidden={!isOpen}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 600,
        background: 'var(--brand)',
        clipPath: isOpen
          ? 'circle(150% at calc(100% - 3.5rem) 2rem)'
          : 'circle(0% at calc(100% - 3.5rem) 2rem)',
        transition: 'clip-path 0.65s cubic-bezier(0.76, 0, 0.24, 1)',
        pointerEvents: isOpen ? 'auto' : 'none',
        overflow: 'hidden',
      }}
    >
      {/* ── Decorative background elements ─────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">

        {/* Spinning ring — top left */}
        <div
          className="fs-decor-spin absolute"
          style={{
            top: '-120px', left: '-120px',
            width: '480px', height: '480px',
            borderRadius: '50%',
            border: '1.5px solid rgba(255,255,255,0.12)',
          }}
        />
        <div
          className="fs-decor-spin-rev absolute"
          style={{
            top: '-80px', left: '-80px',
            width: '360px', height: '360px',
            borderRadius: '50%',
            border: '1px dashed rgba(255,255,255,0.08)',
          }}
        />

        {/* Floating orb — bottom right */}
        <div
          className="fs-decor-float absolute"
          style={{
            bottom: '-60px', right: '-60px',
            width: '340px', height: '340px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
            filter: 'blur(40px)',
          }}
        />

        {/* Spinning ring — bottom right */}
        <div
          className="fs-decor-spin absolute"
          style={{
            bottom: '-140px', right: '-140px',
            width: '520px', height: '520px',
            borderRadius: '50%',
            border: '1.5px solid rgba(255,255,255,0.08)',
            animationDuration: '30s',
          }}
        />

        {/* Center faint orb */}
        <div
          className="fs-decor-float absolute"
          style={{
            top: '30%', left: '40%',
            width: '500px', height: '500px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.03)',
            filter: 'blur(60px)',
            animationDelay: '2s',
          }}
        />

        {/* Dot grid pattern */}
        <div
          className="fs-dot-pulse absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />

        {/* Diagonal accent line */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
        >
          <line x1="0" y1="900" x2="1440" y2="0" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" />
          <line x1="200" y1="900" x2="1440" y2="200" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          <line x1="0" y1="600" x2="1200" y2="0" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        </svg>

        {/* Large watermark text */}
        <div
          className="absolute font-black select-none"
          style={{
            bottom: '-0.1em',
            right: '-0.05em',
            fontSize: 'clamp(120px, 18vw, 260px)',
            lineHeight: 1,
            color: 'rgba(255,255,255,0.04)',
            letterSpacing: '-0.04em',
          }}
        >
          TIPCO
        </div>
      </div>

      {/* ── Top bar: logo + close ───────────────────── */}
      <div className="relative z-10 flex items-center justify-between px-8 md:px-12 pt-6">
        <Link to="/" onClick={onClose} className="rounded-md px-3 py-2 flex-shrink-0" style={{ background: '#fff', boxShadow: '0 0 0 2px rgba(255,255,255,0.25)' }}>
          <img src={LOGO} alt="Tipco Engineering" className="h-8 w-auto" />
        </Link>

        <button
          onClick={onClose}
          aria-label="Close menu"
          className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.25)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
        >
          <X size={18} />
        </button>
      </div>

      {/* ── Search bar ─────────────────────────────── */}
      <FsSearch onClose={onClose} />

      {/* ── Main content ────────────────────────────── */}
      {/* onMouseLeave on the whole area clears selection when mouse exits both columns */}
      <div
        className="relative z-10 flex h-[calc(100vh-160px)] px-8 md:px-12 pt-4 pb-8 gap-10"
        onMouseLeave={() => setActiveKey(null)}
      >

        {/* Left: nav items */}
        <div className="flex flex-col justify-center gap-1 flex-shrink-0 overflow-y-auto" style={{ minWidth: '260px' }}>
          {NAV.map((entry, i) => (
            <div
              key={entry.key}
              className="fs-nav-item"
              style={{ animationDelay: isOpen ? `${i * 70 + 80}ms` : '0ms' }}
            >
              <button
                className="group flex items-center gap-2 py-2 w-full text-left"
                onMouseEnter={() => setActiveKey(entry.key)}
                onClick={() => {
                  if (activeKey === entry.key) {
                    // Second tap on same item → navigate
                    navigate(entry.to)
                    onClose()
                  } else {
                    setActiveKey(entry.key)
                  }
                }}
              >
                <span
                  className="text-white font-black leading-none"
                  style={{
                    fontSize: 'clamp(28px, 3.5vw, 48px)',
                    letterSpacing: '-0.02em',
                    opacity: activeKey && activeKey !== entry.key ? 0.35 : 1,
                    transform: activeKey === entry.key ? 'translateX(6px)' : 'translateX(0)',
                    display: 'inline-block',
                    transition: 'opacity 0.2s, transform 0.25s cubic-bezier(0.22,1,0.36,1)',
                  }}
                >
                  {entry.label}
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-white"
                  style={{
                    opacity: activeKey === entry.key ? 1 : 0,
                    transform: activeKey === entry.key ? 'scale(1) translateY(0)' : 'scale(0.7) translateY(4px)',
                    transition: 'opacity 0.2s, transform 0.2s',
                    flexShrink: 0,
                  }}
                />
                {/* Chevron indicator — mobile only (when right panel is hidden) */}
                {entry.cols && (
                  <ChevronDown
                    size={18}
                    className="ml-auto text-white lg:hidden flex-shrink-0"
                    style={{
                      opacity: 0.55,
                      transform: activeKey === entry.key ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s',
                    }}
                  />
                )}
              </button>

              {/* Mobile inline sub-items — only below lg where right panel is hidden */}
              {activeKey === entry.key && entry.cols && (
                <div className="lg:hidden pb-2 pl-1">
                  {entry.cols.slice(0, 2).flatMap(col => col.rows).slice(0, 5).map(row => (
                    <Link
                      key={row.label}
                      to={row.to}
                      onClick={onClose}
                      className="flex items-center gap-2.5 py-2 text-[13px] font-medium"
                      style={{ color: 'rgba(255,255,255,0.72)' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.72)')}
                    >
                      <span className="flex-shrink-0 opacity-70"><row.icon size={13} /></span>
                      {row.label}
                    </Link>
                  ))}
                  {entry.footerLeft && (
                    <Link
                      to={entry.footerLeft.to}
                      onClick={onClose}
                      className="inline-flex items-center gap-1 text-[12px] font-semibold mt-1"
                      style={{ color: 'rgba(255,255,255,0.5)' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                    >
                      {entry.footerLeft.label}
                    </Link>
                  )}
                </div>
              )}

              {/* Divider */}
              {i < NAV.length - 1 && (
                <div
                  className="h-px"
                  style={{
                    background: activeKey === entry.key
                      ? 'rgba(255,255,255,0.4)'
                      : 'rgba(255,255,255,0.1)',
                    transition: 'background 0.2s',
                  }}
                />
              )}
            </div>
          ))}

          {/* CTA */}
          <div
            className="fs-nav-item mt-6"
            style={{ animationDelay: isOpen ? `${NAV.length * 70 + 80}ms` : '0ms' }}
          >
            <Link
              to="/contact-us"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-[14px] transition-all"
              style={{
                background: 'rgba(255,255,255,0.18)',
                color: '#fff',
                border: '1.5px solid rgba(255,255,255,0.35)',
                backdropFilter: 'blur(4px)',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.28)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.18)')}
            >
              Get a quote
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Right: preview panel (tablet + desktop where right panel is visible) */}
        <div className="hidden lg:flex flex-col justify-center flex-1 pl-10 border-l border-white/10">
          {activeEntry && activeEntry.cols ? (
            <div key={activeKey}>
              <div
                className="text-[11px] font-bold uppercase tracking-[0.2em] mb-6 fs-sub-item"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                {activeEntry.label}
              </div>
              <div className="grid grid-cols-2 gap-3">
                {previewRows.map((row, i) => (
                  <Link
                    key={row.label}
                    to={row.to}
                    onClick={onClose}
                    className="fs-sub-item group flex items-start gap-3 rounded-xl p-3.5 transition-all"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      animationDelay: `${i * 45}ms`,
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.12)'
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                    }}
                  >
                    <div className="mt-0.5 flex-shrink-0">
                      <row.icon size={15} className="text-white opacity-60" />
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-white leading-tight mb-1 flex items-center gap-1.5">
                        {row.label}
                        {row.badge && (
                          <span className="text-[9px] font-bold px-1.5 py-px rounded" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}>
                            {row.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-[11.5px] leading-snug" style={{ color: 'rgba(255,255,255,0.55)' }}>
                        {row.sub}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              {activeEntry.footerLeft && (
                <div className="mt-5 fs-sub-item" style={{ animationDelay: `${previewRows.length * 45}ms` }}>
                  <Link
                    to={activeEntry.footerLeft.to}
                    onClick={onClose}
                    className="text-[13px] font-semibold"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                  >
                    {activeEntry.footerLeft.label}
                  </Link>
                </div>
              )}
            </div>
          ) : (
            /* Default right-side decoration when nothing is selected */
            <div className="text-center opacity-40">
              <div
                className="fs-decor-spin mx-auto mb-6"
                style={{
                  width: '160px', height: '160px',
                  borderRadius: '50%',
                  border: '2px solid rgba(255,255,255,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <div
                  className="fs-decor-spin-rev"
                  style={{
                    width: '110px', height: '110px',
                    borderRadius: '50%',
                    border: '1.5px dashed rgba(255,255,255,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <img src={LOGO} alt="" className="h-8 w-auto opacity-60 bg-white/10 rounded px-2 py-1" />
                </div>
              </div>
              <div className="text-white text-sm font-medium">Tap a menu item to explore</div>
            </div>
          )}
        </div>
      </div>

      {/* ── Bottom contact strip ─────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 fs-nav-item"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          animationDelay: isOpen ? `${(NAV.length + 1) * 70 + 80}ms` : '0ms',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-8 md:px-12 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 text-[12px] transition-colors"
              style={{ color: 'rgba(255,255,255,0.6)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
            >
              <Mail size={13} />
              {CONTACT.email}
            </a>
            <a
              href={`tel:${CONTACT.tollFree.replace(/\s/g, '')}`}
              className="hidden sm:flex items-center gap-2 text-[12px] transition-colors"
              style={{ color: 'rgba(255,255,255,0.6)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
            >
              <Phone size={13} />
              {CONTACT.tollFree}
            </a>
          </div>
          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map(({ href, d, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-7 h-7 rounded-full flex items-center justify-center transition-colors"
                style={{ background: 'rgba(255,255,255,0.12)', color: '#fff' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.25)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
              >
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current"><path d={d} /></svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Search index (built from NAV at module level) ─────────────────────────────

interface SearchEntry {
  label: string
  sub?: string
  to: string
  kind: 'page' | 'product' | 'solution' | 'resource'
}

const KIND_FOR_KEY: Record<string, SearchEntry['kind']> = {
  solutions: 'solution',
  products: 'product',
  engineering: 'resource',
  knowledge: 'resource',
  company: 'page',
  investors: 'page',
}

const SEARCH_INDEX: SearchEntry[] = [
  ...NAV.map(e => ({ label: e.label, to: e.to, kind: 'page' as const })),
  ...NAV.flatMap(e =>
    (e.cols ?? []).flatMap(col =>
      col.rows.map(row => ({
        label: row.label,
        sub: row.sub,
        to: row.to,
        kind: (KIND_FOR_KEY[e.key] ?? 'page') as SearchEntry['kind'],
      }))
    )
  ),
  // Direct section links
  { label: 'Our Locations',     sub: 'Sonipat head office & Pune branch — get directions', to: '/contact-us#locations',    kind: 'page' },
  { label: 'Get in Touch',      sub: 'Contact form, phone, email & WhatsApp',              to: '/contact-us#get-in-touch', kind: 'page' },
  { label: 'Contact Info',      sub: 'Phone, email, working hours',                        to: '/contact-us#get-in-touch', kind: 'page' },
  { label: 'Office Address',    sub: 'Sonipat & Pune office addresses and maps',           to: '/contact-us#locations',    kind: 'page' },
  { label: 'Location Map',      sub: 'View our offices on map — Sonipat & Pune',           to: '/contact-us#locations',    kind: 'page' },
  { label: 'Map & Directions',  sub: 'Google Maps directions to Tipco Engineering offices', to: '/contact-us#locations',   kind: 'page' },
]

const KIND_BADGE: Record<SearchEntry['kind'], { bg: string; text: string }> = {
  product:  { bg: '#e6f4f3', text: '#007872' },
  solution: { bg: '#eef6ff', text: '#1d6fbb' },
  resource: { bg: '#f3f4f6', text: '#4b5563' },
  page:     { bg: '#f9fafb', text: '#6b7280' },
}

// ── Expandable search bar ─────────────────────────────────────────────────────

function NavSearch({ onFocus }: { onFocus?: () => void }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [cursor, setCursor] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const results = useMemo<SearchEntry[]>(() => {
    const q = query.trim().toLowerCase()
    if (q.length < 2) return []
    const matched = SEARCH_INDEX.filter(
      e => e.label.toLowerCase().includes(q) || (e.sub ?? '').toLowerCase().includes(q)
    )
    matched.sort((a, b) => a.label.toLowerCase().indexOf(q) - b.label.toLowerCase().indexOf(q))
    const seen = new Set<string>()
    return matched.filter(e => {
      if (seen.has(e.to)) return false
      seen.add(e.to)
      return true
    }).slice(0, 7)
  }, [query])

  useEffect(() => { setCursor(-1) }, [results])

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
        setQuery('')
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  function expand() {
    setOpen(true)
    onFocus?.()
    setTimeout(() => inputRef.current?.focus(), 60)
  }

  function collapse() {
    if (document.activeElement !== inputRef.current && !query) {
      setOpen(false)
    }
  }

  function handleInputBlur() {
    if (!query) setOpen(false)
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') {
      setQuery('')
      setOpen(false)
      inputRef.current?.blur()
      return
    }
    if (!results.length) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setCursor(c => Math.min(c + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setCursor(c => Math.max(c - 1, -1))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const target = cursor >= 0 ? results[cursor] : results[0]
      if (target) {
        navigate(target.to)
        setQuery('')
        setOpen(false)
        inputRef.current?.blur()
      }
    }
  }

  const showDropdown = open && results.length > 0

  return (
    <div
      ref={containerRef}
      className="hidden xl:flex items-center"
      style={{ position: 'relative' }}
      onMouseEnter={expand}
      onMouseLeave={collapse}
    >
      <div
        className="flex items-center rounded-xl overflow-hidden"
        style={{
          width: open ? '260px' : '36px',
          height: '36px',
          background: open ? 'var(--surface)' : 'transparent',
          border: open ? '1px solid var(--border)' : '1px solid transparent',
          transition: 'width 0.38s cubic-bezier(0.22,1,0.36,1), background 0.25s, border-color 0.25s',
        }}
      >
        {/* Search icon — always visible, acts as trigger */}
        <button
          onClick={expand}
          className="flex-shrink-0 w-9 h-full flex items-center justify-center"
          aria-label="Search"
          style={{ color: open ? 'var(--brand)' : 'var(--foreground-muted)' }}
        >
          <Search size={15} />
        </button>

        {/* Input */}
        <input
          ref={inputRef}
          value={query}
          onChange={e => setQuery(e.target.value)}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          placeholder="Search products, solutions…"
          className="flex-1 bg-transparent text-[13px] outline-none min-w-0"
          style={{
            color: 'var(--foreground)',
            opacity: open ? 1 : 0,
            pointerEvents: open ? 'auto' : 'none',
            transition: 'opacity 0.2s 0.1s',
          }}
          aria-hidden={!open}
        />

        {/* Clear button */}
        {open && query && (
          <button
            onMouseDown={e => e.preventDefault()}
            onClick={() => { setQuery(''); inputRef.current?.focus() }}
            className="flex-shrink-0 pr-2.5 transition-colors"
            style={{ color: 'var(--foreground-subtle)' }}
            aria-label="Clear search"
          >
            <X size={13} />
          </button>
        )}
      </div>

      {/* Results dropdown */}
      {showDropdown && (
        <div
          className="absolute top-[calc(100%+8px)] right-0 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-[400]"
          style={{ width: '320px' }}
        >
          {results.map((r, i) => {
            const badge = KIND_BADGE[r.kind]
            return (
              <button
                key={`${r.to}-${i}`}
                onMouseDown={e => e.preventDefault()}
                onClick={() => {
                  navigate(r.to)
                  setQuery('')
                  setOpen(false)
                }}
                onMouseEnter={() => setCursor(i)}
                className="w-full flex items-start gap-3 px-4 py-3 text-left transition-colors"
                style={{
                  background: cursor === i ? '#f0faf9' : 'white',
                  borderBottom: i < results.length - 1 ? '1px solid #f3f4f6' : 'none',
                }}
              >
                <div className="flex-1 min-w-0">
                  <p className="text-[13.5px] font-semibold text-gray-800 leading-tight">{r.label}</p>
                  {r.sub && <p className="text-[11.5px] text-gray-400 mt-0.5 truncate">{r.sub}</p>}
                </div>
                <span
                  className="flex-shrink-0 mt-0.5 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full"
                  style={{ background: badge.bg, color: badge.text }}
                >
                  {r.kind}
                </span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

// ── Dark / Light mode toggle ──────────────────────────────────────────────────

function NavThemeToggle() {
  const { isDark, toggle } = useDarkMode()

  return (
    <button
      onClick={toggle}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-300 relative overflow-hidden"
      style={{ background: 'var(--surface)', color: 'var(--foreground-muted)' }}
      onMouseEnter={e => { e.currentTarget.style.background = 'var(--surface-raised)'; e.currentTarget.style.color = 'var(--foreground)' }}
      onMouseLeave={e => { e.currentTarget.style.background = 'var(--surface)'; e.currentTarget.style.color = 'var(--foreground-muted)' }}
    >
      {/* Sun icon — shown in dark mode (click to go light) */}
      <Sun
        size={15}
        className="absolute transition-all duration-300"
        style={{
          opacity: isDark ? 1 : 0,
          transform: isDark ? 'rotate(0deg) scale(1)' : 'rotate(90deg) scale(0.5)',
        }}
      />
      {/* Moon icon — shown in light mode (click to go dark) */}
      <Moon
        size={15}
        className="absolute transition-all duration-300"
        style={{
          opacity: isDark ? 0 : 1,
          transform: isDark ? 'rotate(-90deg) scale(0.5)' : 'rotate(0deg) scale(1)',
        }}
      />
    </button>
  )
}

// ── Main Navbar ───────────────────────────────────────────────────────────────

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    setActive(null)
  }, [location.pathname])

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
    <>
      {/* ── Fullscreen overlay menu ───────────────────────── */}
      <FullscreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <header
        className="sticky top-0 z-[200]"
        style={{
          background: 'var(--background)',
          borderBottom: '1px solid var(--border)',
          boxShadow: '0 1px 12px rgba(0,0,0,0.06)',
        }}
        onMouseLeave={scheduleClose}
      >
        {/* ── Desktop bar ─────────────────────────────────── */}
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 h-20 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0"
            onClick={() => setActive(null)}
          >
            <img src={LOGO} alt="Tipco Engineering" className="h-12 md:h-14 w-auto" />
          </Link>

          {/* Desktop nav items (hover mega menu) */}
          <nav className="hidden xl:flex items-center gap-0.5 flex-1 justify-center">
            {NAV.map(entry => {
              const isActive = active === entry.key
              return (
                <button
                  key={entry.key}
                  onClick={() => setActive(isActive ? null : entry.key)}
                  className="flex items-center gap-1 px-3.5 py-2 rounded-lg text-[13.5px] font-medium transition-all duration-150 cursor-pointer"
                  style={{
                    color: isActive ? 'var(--brand)' : 'var(--foreground)',
                    background: isActive ? 'var(--brand-light)' : 'transparent',
                  }}
                  onMouseEnter={e => {
                    openMenu(entry.key)
                    if (!isActive) {
                      e.currentTarget.style.background = 'var(--surface)'
                      e.currentTarget.style.color = 'var(--brand)'
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = 'var(--foreground)'
                    }
                  }}
                >
                  {entry.label}
                  {entry.cols && (
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 opacity-60 ${isActive ? 'rotate-180' : ''}`}
                    />
                  )}
                </button>
              )
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-1">
            {/* Expandable search — desktop only */}
            <NavSearch onFocus={() => setActive(null)} />

            {/* Dark / Light toggle */}
            <NavThemeToggle />

            {/* Fullscreen menu button — shown below xl (1280px) */}
            <button
              className="xl:hidden flex items-center justify-center w-9 h-9 rounded-xl transition-colors"
              style={{ color: 'var(--foreground-muted)' }}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--surface)'
                e.currentTarget.style.color = 'var(--foreground)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'var(--foreground-muted)'
              }}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>

        {/* ── Hover mega menu panel ────────────────────────── */}
        {activeEntry && (
          <MegaPanel
            entry={activeEntry}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          />
        )}
      </header>
    </>
  )
}
