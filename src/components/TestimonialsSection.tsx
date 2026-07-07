import { Star, Search, ArrowRight } from 'lucide-react'

// ─────────────────────────────────────────────────────────────────────────────
// Config — swap photos / testimonials here (or pass as props). Content-agnostic.
// ─────────────────────────────────────────────────────────────────────────────
const CREAM = '#f5f3ef'
const YELLOW = '#f4c430'
const PINK = '#e91e8c'

export interface Photo {
  src: string
  alt: string
}

export interface Testimonial {
  quote: string
  name: string
  company: string
  rating: number
  avatar?: string       // optional image URL — falls back to an initials badge if omitted
  avatarColor?: string  // background color for the initials-badge fallback
}

const DEFAULT_PHOTOS: Photo[] = [
  { src: '/img/applicationimg/paint-industry.jpg', alt: 'Paint industry client' },
  { src: '/img/applicationimg/pharma-industry.jpg', alt: 'Pharma industry client' },
  { src: '/img/applicationimg/chemical-industry.jpg', alt: 'Chemical industry client' },
  { src: '/img/applicationimg/ink-industry.jpg', alt: 'Ink industry client' },
  { src: '/img/applicationimg/paint-production.jpg', alt: 'Paint production line' },
  { src: '/img/applicationimg/ink-production.jpg', alt: 'Ink production line' },
  { src: '/img/applicationimg/chemical-production.jpg', alt: 'Chemical production plant' },
  { src: '/img/applicationimg/powder-production.jpg', alt: 'Powder production system' },
  { src: '/img/applicationimg/mixing.jpg', alt: 'Mixing process' },
  { src: '/img/applicationimg/milling.png', alt: 'Milling process' },
]

// ── Photo placement — 13 slots, one continuous composition ──────────────────
// LEFT cluster (4 = 2 columns × 2 rows): column 1 ("1st pair") sits DOWN/low,
// column 2 ("2nd pair") sits noticeably UP/high — the two columns are never
// level with each other, so it doesn't read as a flat grid.
// MIDDLE (5): alternates up/down (zigzag) while trending upward overall,
// bridging from the left cluster's high column up to the right cluster's.
// RIGHT cluster (4): mirrors the left, so it rises symmetrically toward center.
const CARD_W = 110
const CARD_H = 138
const GAP = 10
const COL_STEP = CARD_W + GAP
const STEP = CARD_H + GAP   // vertical distance to clear one card + a small gap
const col = (i: number) => i * COL_STEP

const DOWN_TOP = 130                 // "1st pair" — low
const UP_TOP = 40                    // "2nd pair" — quite high
const DOWN_BOTTOM = DOWN_TOP + STEP
const UP_BOTTOM = UP_TOP + STEP

// Middle: alternating zigzag riding on an overall upward (rising) trend —
// values fall (rise on screen) as we move left → right through the middle.
const MID_MACRO = [80, 65, 50, 35, 20]
const MID_MICRO = [15, -15, 15, -15, 15]
const MID = MID_MACRO.map((m, i) => m + MID_MICRO[i])

const ARC = [
  // ── left cluster: col A (1st pair) down, col B (2nd pair) quite up ──
  { left: col(0), top: DOWN_TOP },
  { left: col(1), top: UP_TOP },
  { left: col(0), top: DOWN_BOTTOM },
  { left: col(1), top: UP_BOTTOM },
  // ── middle: zigzag, trending upward left → right ──
  { left: col(2), top: MID[0] },
  { left: col(3), top: MID[1] },
  { left: col(4), top: MID[2] },
  { left: col(5), top: MID[3] },
  { left: col(6), top: MID[0] },
  // ── right cluster: mirrors the left — inner col up, outer col down ──
  { left: col(7), top: UP_TOP },
  { left: col(8), top: DOWN_TOP },
  { left: col(7), top: UP_BOTTOM },
  { left: col(8), top: DOWN_BOTTOM },
]
const STAGE_W = 9 * CARD_W + 8 * GAP
const STAGE_H = Math.max(...ARC.map(p => p.top)) + CARD_H

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Delivery was fast and the machine quality exceeded expectations. The support team stayed involved well after purchase.',
    name: 'Arya Sahani',
    company: 'Asian Paints Ltd.',
    rating: 5,
    avatarColor: '#186B6D',
  },
  {
    quote: 'Equipment performance is outstanding, delivering dependable operation with responsive customer support.',
    name: 'Rajat Shabharwal',
    company: 'Kansai Nerolac Paints',
    rating: 5,
    avatarColor: '#c2410c',
  },
  {
    quote: 'Maintenance response is excellent, ensuring fast support with consistently reliable spare parts availability.',
    name: 'Mayank Singh',
    company: 'Berger Paints India',
    rating: 5,
    avatarColor: '#7c3aed',
  },
]

// ── helpers ──────────────────────────────────────────────────────────────────
function initials(name: string) {
  return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase()
}

// Renders a real photo if `src` is given, otherwise a colored initials badge —
// so the component never shows a broken image when no headshot is available.
function Avatar({ name, src, size = 40, color = '#186B6D' }: { name: string; src?: string; size?: number; color?: string }) {
  if (src) {
    return <img src={src} alt={name} className="flex-shrink-0 rounded-full object-cover" style={{ width: size, height: size }} />
  }
  return (
    <span
      className="inline-flex flex-shrink-0 items-center justify-center rounded-full font-bold text-white"
      style={{ width: size, height: size, background: color, fontSize: size * 0.36 }}
      aria-hidden="true"
    >
      {initials(name)}
    </span>
  )
}

// ── ProfileBadge ─────────────────────────────────────────────────────────────
function ProfileBadge({ name, role }: { name: string; role: string }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full bg-white py-2 pl-2 pr-3 shadow-sm">
      <Avatar name={name} size={38} color="#186B6D" />
      <div className="leading-tight">
        <p className="text-[13px] font-bold text-gray-900">{name}</p>
        <p className="flex items-center gap-1 text-[11px] text-gray-500">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
          {role}
        </p>
      </div>
      <button
        type="button"
        className="ml-1 rounded-full px-3.5 py-1.5 text-[11px] font-bold text-white transition-transform hover:-translate-y-px"
        style={{ background: '#151515' }}
      >
        Follow
      </button>
    </div>
  )
}

// ── PhotoDeck (desktop, 13-slot composition) + PhotoGrid (mobile) ───────────
function PhotoDeck({ photos }: { photos: Photo[] }) {
  return (
    <>
      {/* Desktop: 13 photos in one continuous composition — the array is
          longer than the unique photo set, so photos repeat to fill every slot. */}
      <div className="relative mx-auto hidden md:block" style={{ height: STAGE_H, width: STAGE_W }}>
        {ARC.map((pos, i) => {
          const p = photos[i % photos.length]
          return (
            <div
              key={i}
              className="absolute rounded-md bg-white p-1 shadow-md ring-1 ring-black/5"
              style={{ left: pos.left, top: pos.top, width: CARD_W }}
            >
              <img src={p.src} alt={p.alt} loading="lazy" className="w-full rounded-sm object-cover" style={{ height: CARD_H }} />
            </div>
          )
        })}
      </div>

      {/* Mobile: simple 2-column grid */}
      <div className="grid grid-cols-2 gap-3 md:hidden">
        {photos.map(p => (
          <div key={p.src} className="overflow-hidden rounded-xl bg-white p-1 shadow-md">
            <img src={p.src} alt={p.alt} loading="lazy" className="w-full rounded-lg object-cover" style={{ aspectRatio: '1 / 1' }} />
          </div>
        ))}
      </div>
    </>
  )
}

// ── SectionHeading ───────────────────────────────────────────────────────────
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-display font-black uppercase text-gray-900"
      style={{ fontSize: 'clamp(28px, 4.4vw, 52px)', lineHeight: 1.04, letterSpacing: '-0.01em' }}
    >
      {children}
    </h2>
  )
}

// ── StarRating ───────────────────────────────────────────────────────────────
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} strokeWidth={0} fill={i < rating ? YELLOW : '#d8d3ca'} />
      ))}
    </div>
  )
}

// ── TestimonialCard ──────────────────────────────────────────────────────────
function TestimonialCard({ quote, name, company, rating, avatar, avatarColor }: Testimonial) {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
      <StarRating rating={rating} />
      <p className="mt-3 flex-1 text-[14.5px] italic leading-relaxed text-gray-700">“{quote}”</p>
      <div className="mt-5 flex items-center gap-3">
        <Avatar name={name} src={avatar} size={40} color={avatarColor} />
        <div className="leading-tight">
          <p className="text-[13px] font-bold uppercase tracking-wide text-gray-900">{name}</p>
          <p className="text-[12px] text-gray-500">{company}</p>
        </div>
      </div>
    </div>
  )
}

// ── CTAButton ────────────────────────────────────────────────────────────────
function CTAButton({ label, href = '#' }: { label: string; href?: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold text-black transition-transform hover:-translate-y-0.5"
      style={{ background: YELLOW, boxShadow: '0 8px 20px rgba(244,196,48,0.35)' }}
    >
      {label}
      <ArrowRight size={16} />
    </a>
  )
}

// ── Section ──────────────────────────────────────────────────────────────────
interface Props {
  photos?: Photo[]
  testimonials?: Testimonial[]
  profileName?: string
  profileRole?: string
  heading?: React.ReactNode
  ctaLabel?: string
  ctaHref?: string
}

export default function TestimonialsSection({
  photos = DEFAULT_PHOTOS,
  testimonials = DEFAULT_TESTIMONIALS,
  profileName = 'Tipco Engineering',
  profileRole = 'Trusted since 1985',
  heading = 'See what our clients say about us',
  ctaLabel = 'See All Client Feedback',
  ctaHref = '/client',
}: Props) {
  return (
    <section className="overflow-hidden py-16 sm:py-20 lg:py-24" style={{ background: CREAM }}>
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">

        {/* Top row: profile badge (left) + pink search (right) */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <ProfileBadge name={profileName} role={profileRole} />
          <button
            type="button"
            aria-label="Search client feedback"
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-white transition-transform hover:scale-105"
            style={{ background: PINK, boxShadow: '0 8px 18px rgba(233,30,140,0.4)' }}
          >
            <Search size={18} />
          </button>
        </div>

        {/* 13-photo composition */}
        <PhotoDeck photos={photos} />

        <div className="mt-6 text-center">
          <SectionHeading>{heading}</SectionHeading>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map(t => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <CTAButton label={ctaLabel} href={ctaHref} />
        </div>

      </div>
    </section>
  )
}
