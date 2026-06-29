import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight, Factory, Cog, Layers,
  Droplet, FlaskConical, Settings, Boxes, Gauge, ChevronLeft, ChevronRight,
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
  accent: string
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
      { label: 'Mixing',  img: '/img/applicationimg/mixing.jpg',  href: '/application/mixing',  accent: '#f59e0b' },
      { label: 'Milling', img: '/img/applicationimg/milling.png', href: '/application/milling', accent: '#ef4444' },
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

const BG_ICONS: { Icon: LucideIcon; top: string; left: string; size: number; anim: string; delay: string }[] = [
  { Icon: Layers,       top: '8%',  left: '2%',  size: 80,  anim: 'app-anim-float',    delay: '0s'   },
  { Icon: Cog,          top: '12%', left: '91%', size: 110, anim: 'app-anim-spin',     delay: '0s'   },
  { Icon: Factory,      top: '62%', left: '7%',  size: 90,  anim: 'app-anim-drift',    delay: '1.2s' },
  { Icon: Droplet,      top: '76%', left: '85%', size: 56,  anim: 'app-anim-float',    delay: '2s'   },
  { Icon: FlaskConical, top: '40%', left: '47%', size: 54,  anim: 'app-anim-drift',    delay: '0.6s' },
  { Icon: Settings,     top: '82%', left: '51%', size: 78,  anim: 'app-anim-spin-rev', delay: '0s'   },
  { Icon: Boxes,        top: '5%',  left: '60%', size: 60,  anim: 'app-anim-float',    delay: '1.6s' },
  { Icon: Gauge,        top: '50%', left: '94%', size: 50,  anim: 'app-anim-drift',    delay: '2.4s' },
]

// ── Image row: fills space when few cards, shows ‹ › arrows when overflowing ──
function ImageRow({ items, brokenImgs, onBroken }: {
  items: TabItem[]
  brokenImgs: Set<string>
  onBroken: (src: string) => void
}) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft]   = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  function checkScroll() {
    const el = rowRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }

  useEffect(() => {
    const el = rowRef.current
    if (!el) return
    checkScroll()
    const ro = new ResizeObserver(checkScroll)
    ro.observe(el)
    el.addEventListener('scroll', checkScroll, { passive: true })
    return () => { ro.disconnect(); el.removeEventListener('scroll', checkScroll) }
  }, [items])

  function scrollBy(dir: 1 | -1) {
    const el = rowRef.current
    if (!el) return
    const cardW = el.querySelector('a')?.offsetWidth ?? 280
    el.scrollBy({ left: dir * (cardW + 12), behavior: 'smooth' })
  }

  const CARD_H = 'clamp(260px, 32vw, 380px)'

  return (
    <div className="relative">
      {/* Arrow: scroll left */}
      <button
        onClick={() => scrollBy(-1)}
        disabled={!canScrollLeft}
        className="absolute left-0 top-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all duration-200 disabled:opacity-0 disabled:pointer-events-none cursor-pointer"
        style={{ background: 'var(--background)', border: '1px solid var(--border)', color: 'var(--foreground)', transform: 'translateX(-50%) translateY(-50%)' }}
      >
        <ChevronLeft size={16} />
      </button>

      {/* Scrollable row */}
      <div
        ref={rowRef}
        className="flex gap-3 overflow-x-auto scrollbar-none pb-2 -mr-4 sm:-mr-8 lg:-mr-14 pr-4 sm:pr-8 lg:pr-14"
      >
        {items.map((item, i) => (
          <Link
            key={item.label}
            to={item.href}
            className="tab-card-in group relative overflow-hidden rounded-xl"
            style={{
              flex: '1 1 auto',
              minWidth: '340px',
              height: CARD_H,
              animationDelay: `${i * 80}ms`,
            }}
          >
            <img
              src={item.img}
              alt={item.label}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={() => onBroken(item.img)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{ background: item.accent }} />
            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
              <div>
                <span className="block h-0.5 mb-2.5 rounded-full w-0 group-hover:w-8 transition-all duration-300" style={{ background: item.accent }} />
                <span className="font-display block text-white font-semibold tracking-tight" style={{ fontSize: 'clamp(13px, 1.6vw, 19px)' }}>
                  {item.label}
                </span>
              </div>
              {!brokenImgs.has(item.img) && (
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex-shrink-0"
                  style={{ background: item.accent }}
                >
                  <ArrowUpRight size={14} />
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Arrow: scroll right */}
      <button
        onClick={() => scrollBy(1)}
        disabled={!canScrollRight}
        className="absolute right-0 top-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all duration-200 disabled:opacity-0 disabled:pointer-events-none cursor-pointer"
        style={{ background: 'var(--background)', border: '1px solid var(--border)', color: 'var(--foreground)', transform: 'translateX(50%) translateY(-50%)' }}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  )
}

// Each tab gets this many vh of scroll distance while the section is pinned
const SCROLL_PER_TAB = 85

export default function ApplicationTabs() {
  const [active, setActive] = useState(0)
  const [brokenImgs, setBrokenImgs] = useState<Set<string>>(new Set())
  const [containerH, setContainerH] = useState<number | undefined>(undefined)
  const [pinned, setPinned] = useState(false)   // sticky-scroll only on larger screens
  const sectionRef = useRef<HTMLElement>(null)
  const panelRefs  = useRef<(HTMLDivElement | null)[]>([])

  function markBroken(src: string) {
    setBrokenImgs(prev => new Set(prev).add(src))
  }

  const tab = TABS[active]

  // Enable pinning only where there's room (desktop / tablet landscape)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const update = () => setPinned(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  // Tab pills / arrows / dots → scroll to that tab's slot (or just set when not pinned)
  function goTo(i: number) {
    const clamped = Math.max(0, Math.min(i, TABS.length - 1))
    const el = sectionRef.current
    if (pinned && el) {
      const total = el.offsetHeight - window.innerHeight
      const progress = TABS.length > 1 ? clamped / (TABS.length - 1) : 0
      const rectTop = el.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: rectTop + progress * total, behavior: 'smooth' })
    } else {
      setActive(clamped)
    }
  }

  // Fit the container to the active panel's height (panels are stacked absolutely)
  useLayoutEffect(() => {
    function measure() {
      const el = panelRefs.current[active]
      if (el) setContainerH(el.offsetHeight)
    }
    measure()
    const el = panelRefs.current[active]
    const ro = new ResizeObserver(measure)
    if (el) ro.observe(el)
    window.addEventListener('resize', measure)
    return () => { ro.disconnect(); window.removeEventListener('resize', measure) }
  }, [active])

  // While pinned, derive the active tab from how far we've scrolled through the section
  useEffect(() => {
    if (!pinned) return
    function onScroll() {
      const el = sectionRef.current
      if (!el) return
      const total = el.offsetHeight - window.innerHeight
      if (total <= 0) return
      const scrolled = Math.min(Math.max(-el.getBoundingClientRect().top, 0), total)
      const progress = scrolled / total
      const idx = Math.round(progress * (TABS.length - 1))
      setActive(Math.max(0, Math.min(idx, TABS.length - 1)))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [pinned])

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ height: pinned ? `${100 + (TABS.length - 1) * SCROLL_PER_TAB}vh` : undefined }}
    >
    <div
      className={`relative w-full overflow-hidden ${pinned ? 'sticky top-0 h-screen flex flex-col justify-center' : ''}`}
      style={{ background: 'var(--surface)' }}
    >

      {/* ── Animated icon background ─── */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
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
              style={{ top: b.top, left: b.left, animationDelay: b.delay, color: tab.accent, opacity: 0.08, transition: 'color 0.7s ease' } as React.CSSProperties}
            >
              <I size={b.size} />
            </span>
          )
        })}
      </div>

      {/* ── Header: eyebrow + full-width tab bar ─── */}
      <div className="relative z-10 pt-12 lg:pt-16 pb-6">
        <p className="font-display text-[11px] font-bold uppercase tracking-[0.3em] mb-5 px-4 sm:px-8 lg:px-14" style={{ color: 'var(--foreground-subtle)' }}>
          Applications
        </p>

        {/* Full-width equal-division tab bar (apollo-style) */}
        <div
          className="flex w-full overflow-hidden"
          style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
        >
          {TABS.map((t, i) => {
            const isActive = active === i
            const Icon = t.icon
            return (
              <button
                key={t.id}
                onClick={() => goTo(i)}
                className="flex-1 flex items-center justify-center gap-2.5 py-4 px-3 cursor-pointer transition-all duration-300 outline-none"
                style={{
                  background: isActive ? t.accent : 'var(--surface)',
                  borderRight: i < TABS.length - 1 ? '1px solid var(--border)' : 'none',
                }}
              >
                <Icon
                  size={15}
                  style={{ color: isActive ? '#fff' : 'var(--foreground-subtle)', flexShrink: 0 }}
                />
                <span
                  className="font-bold uppercase tracking-[0.18em] whitespace-nowrap"
                  style={{ fontSize: '11px', color: isActive ? '#fff' : 'var(--foreground-muted)' }}
                >
                  {t.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Vertical slide panels (scroll down → next comes up) ─── */}
      <div
        className="relative z-10 transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ height: containerH }}
      >
        {TABS.map((t, ti) => {
          const offset = ti - active            // <0 = passed (exit up), 0 = active, >0 = upcoming (waiting below)
          return (
            <div
              key={t.id}
              ref={el => { panelRefs.current[ti] = el }}
              className="absolute top-0 left-0 right-0 px-4 sm:px-8 lg:px-14 pt-2 pb-14 transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: offset === 0 ? 'translateY(0)' : offset < 0 ? 'translateY(-48px)' : 'translateY(48px)',
                opacity: offset === 0 ? 1 : 0,
                pointerEvents: offset === 0 ? 'auto' : 'none',
              }}
            >
              {/* Two-column: text left, images right */}
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,34%)_minmax(0,1fr)] gap-8 lg:gap-10 items-center">

                {/* LEFT — text */}
                <div>
                  <h2
                    className="font-display font-bold leading-[1.05]"
                    style={{ fontSize: 'clamp(28px, 3.6vw, 44px)', letterSpacing: '-0.03em', color: 'var(--foreground)' }}
                  >
                    {t.heading}
                  </h2>
                  <p className="mt-4 text-[14px] leading-relaxed" style={{ color: 'var(--foreground-muted)' }}>
                    {t.description}
                  </p>
                  <Link
                    to={t.viewMore}
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

                {/* RIGHT — image cards: fill space when few, arrows when overflowing */}
                <ImageRow items={t.items} brokenImgs={brokenImgs} onBroken={markBroken} />

              </div>
            </div>
          )
        })}
      </div>

    </div>
    </section>
  )
}
