import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight, Factory, Cog, Layers,
  Droplet, FlaskConical, Settings, Boxes, Gauge,
} from 'lucide-react'
import type { ComponentType } from 'react'

type LucideIcon = ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>

interface TabItem {
  label: string
  img: string
  href: string
  accent: string
}

interface Tab {
  id: string
  label: string
  sublabel: string
  icon: LucideIcon
  heading: string
  description: string
  items: TabItem[]
  viewMore: string
  glow: string
  accent: string         // active accent colour for badge/icon
}

const TABS: Tab[] = [
  {
    id: 'industry',
    label: 'Industry',
    sublabel: 'Paint · Pharma · Chemical · Ink',
    icon: Layers,
    heading: 'Industries We Serve',
    description:
      'With over 35 years of experience in industrial machine manufacturing, Tipco Engineering high-end products are designed for long life and minimum maintenance — covering Paint, Pharma, Chemicals, and Pesticide industries.',
    items: [
      { label: 'Paint',     img: '/img/applicationimg/paint-industry.jpg',     href: '/application/paint',    accent: '#e8542a' },
      { label: 'Pharma',   img: '/img/applicationimg/pharma-industry.jpg',    href: '/application/pharma',   accent: '#3b82f6' },
      { label: 'Chemical', img: '/img/applicationimg/chemical-industry.jpg',  href: '/application/chemical', accent: '#10b981' },
      { label: 'Ink',      img: '/img/applicationimg/ink-industry.jpg',       href: '/application/ink',      accent: '#8b5cf6' },
    ],
    viewMore: '/application/industry',
    glow: 'rgba(20,184,166,0.5)',
    accent: '#14b8a6',
  },
  {
    id: 'process',
    label: 'Process',
    sublabel: 'Mixing · Milling · Dispersing',
    icon: Cog,
    heading: 'Manufacturing Processes',
    description:
      'Tipco Engineering offers reliable solutions for paint, ink, glue, gel, and many other applications. Our expertise in assembly line balancing prevents production disruptions and keeps your throughput optimal.',
    items: [
      { label: 'Mixing',  img: '/img/applicationimg/mixing.jpg',   href: '/application/mixing',  accent: '#f59e0b' },
      { label: 'Milling', img: '/img/applicationimg/milling.png',  href: '/application/milling', accent: '#ef4444' },
    ],
    viewMore: '/application/process',
    glow: 'rgba(124,58,237,0.5)',
    accent: '#7c3aed',
  },
  {
    id: 'production',
    label: 'Production Setup',
    sublabel: 'Paint · Ink · Chemical · Powder',
    icon: Factory,
    heading: 'Complete Production Lines',
    description:
      'From individual machines to complete production lines — Tipco Engineering leads in automated production line technology, supplying fully integrated systems across industries worldwide.',
    items: [
      { label: 'Paint Production',    img: '/img/applicationimg/paint-production.jpg',    href: '/application/paint-production',    accent: '#e8542a' },
      { label: 'Ink Production',      img: '/img/applicationimg/ink-production.jpg',      href: '/application/ink-production',      accent: '#8b5cf6' },
      { label: 'Chemical Production', img: '/img/applicationimg/chemical-production.jpg', href: '/application/chemical-production', accent: '#10b981' },
      { label: 'Powder Production',   img: '/img/applicationimg/powder-production.jpg',   href: '/application/powder-production',   accent: '#f59e0b' },
    ],
    viewMore: '/application/production-setup',
    glow: 'rgba(249,115,22,0.5)',
    accent: '#f97316',
  },
]

// Floating background icons — industry / process / production motifs
const BG_ICONS: { Icon: LucideIcon; top: string; left: string; size: number; anim: string; delay: string; rot: number }[] = [
  { Icon: Layers,       top: '6%',  left: '3%',  size: 78, anim: 'app-anim-float',     delay: '0s',   rot: -12 },
  { Icon: Cog,          top: '14%', left: '90%', size: 104, anim: 'app-anim-spin',     delay: '0s',   rot: 0 },
  { Icon: Factory,      top: '60%', left: '8%',  size: 92, anim: 'app-anim-drift',     delay: '1.2s', rot: 6 },
  { Icon: Droplet,      top: '78%', left: '84%', size: 58, anim: 'app-anim-float',     delay: '2s',   rot: 10 },
  { Icon: FlaskConical, top: '38%', left: '46%', size: 56, anim: 'app-anim-drift',     delay: '0.6s', rot: -8 },
  { Icon: Settings,     top: '84%', left: '50%', size: 80, anim: 'app-anim-spin-rev',  delay: '0s',   rot: 0 },
  { Icon: Boxes,        top: '4%',  left: '58%', size: 60, anim: 'app-anim-float',     delay: '1.6s', rot: 8 },
  { Icon: Gauge,        top: '48%', left: '93%', size: 52, anim: 'app-anim-drift',     delay: '2.4s', rot: -6 },
]

export default function ApplicationTabs() {
  const [active, setActive] = useState(0)
  const [animKey, setAnimKey] = useState(0)
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([])

  function switchTab(i: number) {
    if (i === active) return
    setActive(i)
    setAnimKey(k => k + 1)
  }

  const tab = TABS[active]

  return (
    <section className="relative w-full overflow-hidden" style={{ background: 'var(--surface)' }}>

      {/* ── Animated icon background ──────────────────────────── */}
      <div className="absolute inset-0 z-0" aria-hidden>
        {/* Accent glow that shifts with the active tab */}
        <div
          className="absolute -top-1/4 -right-1/4 w-[60%] h-[120%] rounded-full transition-all duration-700"
          style={{ background: `radial-gradient(circle, ${tab.glow} 0%, transparent 65%)`, opacity: 0.18, filter: 'blur(40px)' }}
        />
        <div
          className="absolute -bottom-1/4 -left-1/4 w-[55%] h-[110%] rounded-full transition-all duration-700"
          style={{ background: `radial-gradient(circle, ${tab.glow} 0%, transparent 65%)`, opacity: 0.12, filter: 'blur(50px)' }}
        />
        {BG_ICONS.map((b, i) => {
          const I = b.Icon
          return (
            <span
              key={i}
              className={`app-bg-icon ${b.anim}`}
              style={{
                top: b.top,
                left: b.left,
                animationDelay: b.delay,
                color: tab.accent,
                opacity: 0.08,
                transition: 'color 0.7s ease',
                ['--rot' as string]: `${b.rot}deg`,
              } as React.CSSProperties}
            >
              <I size={b.size} />
            </span>
          )
        })}
      </div>

      {/* ── Content ───────────────────────────────────────────── */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-14 py-12 lg:py-16">
        <p className="font-display text-[11px] font-bold uppercase tracking-[0.3em] mb-7" style={{ color: 'var(--foreground-subtle)' }}>
          Applications
        </p>

        {/* ── Horizontal tab selector (one line) ── */}
        <div className="flex gap-2.5 sm:gap-3 mb-9 overflow-x-auto pb-1 -mx-1 px-1">
          {TABS.map((t, i) => {
            const isActive = active === i
            const Icon = t.icon
            return (
              <button
                key={t.id}
                ref={el => { btnRefs.current[i] = el }}
                onClick={() => switchTab(i)}
                className="group relative flex-1 min-w-[200px] flex items-center gap-3.5 rounded-xl text-left cursor-pointer outline-none transition-all duration-300 px-3.5 py-3"
                    style={{
                      background: isActive ? 'var(--surface)' : 'transparent',
                      border: `1px solid ${isActive ? t.accent : 'var(--border)'}`,
                      boxShadow: isActive ? `0 6px 20px ${t.glow}` : 'none',
                    }}
                  >
                    {/* Active accent bar */}
                    <span
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-r-full transition-all duration-300"
                      style={{ height: isActive ? '60%' : '0%', background: t.accent }}
                    />
                    <span
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                      style={{
                        background: isActive ? t.accent : 'var(--background)',
                        border: isActive ? 'none' : '1px solid var(--border)',
                      }}
                    >
                      <Icon
                        size={18}
                        style={{ color: isActive ? '#fff' : 'var(--foreground-subtle)' }}
                      />
                    </span>
                    <span className="min-w-0">
                      <span
                        className="font-display block font-semibold leading-tight tracking-tight"
                        style={{ fontSize: '15.5px', color: 'var(--foreground)' }}
                      >
                        {t.label}
                      </span>
                      <span
                        className="block text-[11.5px] leading-tight mt-0.5 truncate"
                        style={{ color: isActive ? t.accent : 'var(--foreground-subtle)' }}
                      >
                        {t.sublabel}
                      </span>
                    </span>
                  </button>
            )
          })}
        </div>

        {/* ── Two columns: text content + images ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,38%)_minmax(0,1fr)] gap-8 lg:gap-12 items-start">

          {/* ════ LEFT — text content ════ */}
          <div className="lg:sticky lg:top-24">
            {/* Heading + description */}
            <h2
              key={`h-${active}`}
              className="font-display tab-desc-in font-bold leading-[1.05]"
              style={{ fontSize: 'clamp(28px, 3.6vw, 44px)', letterSpacing: '-0.03em', color: 'var(--foreground)' }}
            >
              {tab.heading}
            </h2>
            <p
              key={`d-${active}`}
              className="tab-desc-in mt-4 text-[14px] leading-relaxed"
              style={{ animationDelay: '60ms', color: 'var(--foreground-muted)' }}
            >
              {tab.description}
            </p>

            <Link
              to={tab.viewMore}
              className="font-display inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide mt-6 group"
              style={{ color: 'var(--brand)' }}
            >
              View All
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ border: '1.5px solid var(--brand)', color: 'var(--brand)' }}
              >
                <ArrowUpRight size={13} />
              </span>
            </Link>
          </div>

          {/* ════ RIGHT — image cards ════ */}
          <div
            key={`grid-${animKey}`}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {tab.items.map((item, i) => (
              <Link
                key={item.label}
                to={item.href}
                className="tab-card-in group relative block overflow-hidden rounded-xl"
                style={{
                  height: 'clamp(180px, 22vw, 250px)',
                  animationDelay: `${i * 90}ms`,
                }}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-500"
                  style={{ background: item.accent }}
                />
                <span
                  className="absolute top-4 right-4 font-black leading-none select-none"
                  style={{ fontSize: 'clamp(52px, 8vw, 96px)', color: 'rgba(255,255,255,0.06)', letterSpacing: '-0.04em' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                  <div>
                    <span
                      className="block h-0.5 mb-3 rounded-full w-0 group-hover:w-9 transition-all duration-300"
                      style={{ background: item.accent }}
                    />
                    <span className="font-display block text-white font-semibold tracking-tight" style={{ fontSize: 'clamp(15px, 1.8vw, 21px)' }}>
                      {item.label}
                    </span>
                  </div>
                  <span
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                    style={{ background: item.accent }}
                  >
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>

    </section>
  )
}
