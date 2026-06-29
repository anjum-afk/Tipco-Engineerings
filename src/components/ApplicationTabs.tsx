import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Factory, Cog, Layers } from 'lucide-react'
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
  num: string
  sublabel: string
  icon: LucideIcon
  heading: string
  description: string
  items: TabItem[]
  viewMore: string
  cols: number
  bgImg: string          // tab card background image
  overlay: string        // active overlay gradient
  overlayInactive: string // inactive overlay (darker/desaturated)
  glow: string
  accent: string         // active accent colour for badge/icon
}

const TABS: Tab[] = [
  {
    id: 'industry',
    label: 'Industry',
    num: '01',
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
    cols: 4,
    bgImg: '/img/applicationimg/paint-industry.jpg',
    overlay: 'linear-gradient(160deg, rgba(8,80,72,0.72) 0%, rgba(14,116,144,0.55) 100%)',
    overlayInactive: 'linear-gradient(160deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.62) 100%)',
    glow: 'rgba(20,184,166,0.5)',
    accent: '#14b8a6',
  },
  {
    id: 'process',
    label: 'Process',
    num: '02',
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
    cols: 2,
    bgImg: '/img/applicationimg/mixing.jpg',
    overlay: 'linear-gradient(160deg, rgba(49,46,129,0.75) 0%, rgba(109,40,217,0.55) 100%)',
    overlayInactive: 'linear-gradient(160deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.62) 100%)',
    glow: 'rgba(124,58,237,0.5)',
    accent: '#7c3aed',
  },
  {
    id: 'production',
    label: 'Production Setup',
    num: '03',
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
    cols: 4,
    bgImg: '/img/applicationimg/paint-production.jpg',
    overlay: 'linear-gradient(160deg, rgba(120,53,15,0.78) 0%, rgba(194,65,12,0.58) 100%)',
    overlayInactive: 'linear-gradient(160deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.62) 100%)',
    glow: 'rgba(249,115,22,0.5)',
    accent: '#f97316',
  },
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
    <section className="w-full overflow-hidden" style={{ background: '#0f172a' }}>

      {/* ── Slim tab selector bar ─────────────────────────────── */}
      <div className="w-full px-4 sm:px-8 lg:px-14 pt-10 pb-6">
        <p className="text-[10.5px] font-bold uppercase tracking-[0.25em] mb-5" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Applications
        </p>

        {/* Tab strip — full width, slim buttons */}
        <div className="flex gap-2 sm:gap-3">
          {TABS.map((t, i) => {
            const isActive = active === i
            return (
              <button
                key={t.id}
                ref={el => { btnRefs.current[i] = el }}
                onClick={() => switchTab(i)}
                className="relative flex-1 overflow-hidden cursor-pointer outline-none rounded-xl"
                style={{
                  height: '52px',
                  background: isActive ? 'transparent' : 'rgba(255,255,255,0.06)',
                  border: isActive ? 'none' : '1px solid rgba(255,255,255,0.1)',
                  boxShadow: isActive ? `0 4px 24px ${t.glow}, 0 2px 8px rgba(0,0,0,0.2)` : 'none',
                  transition: 'box-shadow 0.4s ease, background 0.3s ease',
                }}
              >
                {/* Background image (visible only on active) */}
                <img
                  src={t.bgImg}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'scale(1.08)' : 'scale(1)',
                    filter: 'brightness(0.55)',
                  }}
                />

                {/* Colour overlay on active */}
                {isActive && (
                  <div
                    className="absolute inset-0"
                    style={{ background: t.overlay, opacity: 0.85 }}
                  />
                )}

                {/* Shimmer on active */}
                {isActive && (
                  <span
                    className="tab-btn-shimmer absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.14) 50%,transparent 100%)',
                      backgroundSize: '200% auto',
                    }}
                  />
                )}

                {/* Label */}
                <span
                  className="relative z-10 flex items-center justify-center gap-2 h-full px-3"
                >
                  <span
                    className="text-[10px] font-bold tracking-widest hidden sm:block"
                    style={{ color: isActive ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.3)' }}
                  >
                    {t.num}
                  </span>
                  <span
                    className="font-bold text-white whitespace-nowrap"
                    style={{
                      fontSize: 'clamp(12px, 1.5vw, 14.5px)',
                      opacity: isActive ? 1 : 0.55,
                      letterSpacing: '0.01em',
                    }}
                  >
                    {t.label}
                  </span>
                </span>

                {/* Active bottom accent line */}
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5 transition-transform duration-400 origin-left"
                  style={{
                    background: t.accent,
                    transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                  }}
                />
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Heading + description (light section) ─────────────── */}
      <div className="w-full px-4 sm:px-8 lg:px-14 pt-10 pb-8" style={{ background: 'var(--background)' }}>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2
            key={`h-${active}`}
            className="tab-desc-in font-black leading-tight"
            style={{
              fontSize: 'clamp(26px, 4vw, 50px)',
              letterSpacing: '-0.025em',
              color: 'var(--foreground)',
            }}
          >
            {tab.heading}
          </h2>

          <Link
            to={tab.viewMore}
            className="inline-flex items-center gap-2 text-[13px] font-bold flex-shrink-0 whitespace-nowrap group"
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

        <p
          key={`d-${active}`}
          className="tab-desc-in mt-4 text-[14.5px] leading-relaxed max-w-3xl"
          style={{ animationDelay: '60ms', color: 'var(--foreground-muted)' }}
        >
          {tab.description}
        </p>
      </div>

      {/* ── Full-width image grid ──────────────────────────────── */}
      <div
        key={`grid-${animKey}`}
        className={`grid gap-3 px-4 sm:px-8 lg:px-14 pb-10 ${
          tab.cols === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-2 lg:grid-cols-4'
        }`}
        style={{ background: '#0f172a' }}
      >
        {tab.items.map((item, i) => (
          <Link
            key={item.label}
            to={item.href}
            className="tab-card-in group relative block overflow-hidden rounded-xl"
            style={{
              height: 'clamp(160px, 18vw, 260px)',
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
              style={{
                fontSize: 'clamp(52px, 9vw, 110px)',
                color: 'rgba(255,255,255,0.06)',
                letterSpacing: '-0.04em',
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
              <div>
                <span
                  className="block h-0.5 mb-3 rounded-full w-0 group-hover:w-9 transition-all duration-300"
                  style={{ background: item.accent }}
                />
                <span className="block text-white font-bold" style={{ fontSize: 'clamp(14px, 1.8vw, 20px)' }}>
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

    </section>
  )
}
