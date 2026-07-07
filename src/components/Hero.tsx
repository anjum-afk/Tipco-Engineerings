import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const SLIDES = [
  { src: '/img/hero-slider-1.jpg', alt: 'Tipco Engineering manufacturing floor' },
  { src: '/img/hero-slider-2.jpg', alt: 'Tipco Engineering process machinery' },
]

const SPECS = [
  { value: '35+', label: 'Years of Expertise' },
  { value: '90%', label: 'Jobs Done In-House' },
  { value: '500+', label: 'Machines Installed' },
  { value: '100%', label: 'Hassle-Free Commissioning' },
]

const MINT = '#8FE0D6'

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const n = SLIDES.length

  const next = useCallback(() => setIndex(i => (i + 1) % n), [n])
  const prev = () => setIndex(i => (i - 1 + n) % n)

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [next, paused])

  return (
    <section
      className="relative overflow-hidden text-white flex items-center"
      style={{ minHeight: 'clamp(420px, 78vh, 560px)' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <div className="absolute inset-0">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            role="img"
            aria-label={slide.alt}
            className="absolute inset-0 transition-opacity"
            style={{
              backgroundImage: `url(${slide.src})`,
              // These source banners have an old text panel baked into their left ~55% —
              // zoom into the clean machine-photo side only, so it never shows through the overlay.
              backgroundSize: '250% auto',
              backgroundPosition: 'right center',
              backgroundRepeat: 'no-repeat',
              opacity: i === index ? 1 : 0,
              transitionDuration: '1100ms',
            }}
          />
        ))}
      </div>

      {/* Brand gradient overlay — deep navy-teal fading through brand teal to a mint edge */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(102deg, rgba(8,32,36,0.96) 0%, rgba(18,79,80,0.94) 28%, rgba(24,107,109,0.62) 52%, rgba(60,150,148,0.28) 72%, rgba(143,224,214,0.08) 88%, rgba(143,224,214,0) 98%)',
        }}
      />

      {/* Mobile-only extra scrim — the angled desktop gradient fades to transparent on the
          right, which leaves the CTA + stats sitting on the bright photo on a narrow screen.
          This uniform layer keeps everything legible edge-to-edge on phones. */}
      <div className="md:hidden absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(8,28,30,0.42) 0%, rgba(8,28,30,0.58) 100%)' }} />

      {/* Content */}
      <div className="relative z-[2] max-w-[1280px] mx-auto w-full" style={{ padding: 'clamp(48px, 9vh, 96px) clamp(20px, 5vw, 32px) clamp(64px, 13vh, 130px)' }}>
        <div className="flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.14em]" style={{ color: MINT }}>
          <span className="inline-block w-[18px] h-px flex-shrink-0" style={{ background: MINT }} />
          Process Plants &amp; Machinery · Sonipat, Haryana
        </div>

        <h1
          className="font-extrabold mt-4 mb-4"
          style={{ fontSize: 'clamp(28px, 4vw, 46px)', lineHeight: 1.1, letterSpacing: '-0.01em', maxWidth: '600px', color: '#fff' }}
        >
          Machines that <span style={{ color: MINT }}>mix, mill</span>
          <br />
          and <span style={{ color: MINT }}>hold up</span> on the floor.
        </h1>

        <p className="mb-6" style={{ fontSize: '15px', maxWidth: '460px', color: 'rgba(255,255,255,0.82)' }}>
          Incorporated in 2021 to carry forward a 35-year manufacturing legacy, Tipco Engineering
          builds mixers, dispersers, homogenizers and mills for the Paint, Ink, Pharma and Chemical
          industries — designed with the customer's process first, not adapted to fit it.
        </p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
          <a
            href="#get-quote"
            className="inline-flex w-full sm:w-auto justify-center sm:justify-start items-center gap-2 rounded-[10px] px-[22px] py-3 sm:py-[11px] text-sm font-semibold text-white transition-all duration-150 hover:-translate-y-px"
            style={{ background: 'var(--brand)', boxShadow: '0 1px 2px rgba(0,0,0,0.08)' }}
          >
            Get a Quote →
          </a>
          <a
            href="#applications"
            className="inline-flex w-full sm:w-auto justify-center sm:justify-start items-center gap-2 rounded-[10px] px-[22px] py-3 sm:py-[11px] text-sm font-semibold text-white border transition-all duration-150 hover:bg-white bg-white/12 backdrop-blur-sm sm:bg-transparent sm:backdrop-blur-none"
            style={{ borderColor: 'rgba(255,255,255,0.5)' }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--brand-hover)' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#fff' }}
          >
            See Products
          </a>
        </div>

        {/* 2×2 stat grid through tablet — a single row collides with the fixed ENQUIRY tab below lg */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-5 mt-8 lg:flex lg:flex-wrap lg:gap-7">
          {SPECS.map(s => (
            <div key={s.label} className="max-lg:border-l-2 max-lg:pl-3" style={{ borderColor: MINT }}>
              <b className="block text-2xl font-semibold text-white">{s.value}</b>
              <span className="text-[11px] uppercase tracking-[0.06em]" style={{ color: 'rgba(255,255,255,0.65)' }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      {n > 1 && (
        <>
          {/* side arrows only where there is real side gutter (container is 1280 + padding);
              below ~1400px they overlap the copy / the fixed ENQUIRY tab */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="hidden min-[1400px]:flex absolute left-5 top-1/2 -translate-y-1/2 z-[3] w-11 h-11 rounded-full items-center justify-center text-white transition-all hover:scale-105"
            style={{ background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(4px)' }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="hidden min-[1400px]:flex absolute right-5 top-1/2 -translate-y-1/2 z-[3] w-11 h-11 rounded-full items-center justify-center text-white transition-all hover:scale-105"
            style={{ background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(4px)' }}
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-[14px] left-1/2 -translate-x-1/2 z-[3] flex">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.src}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="flex items-center justify-center p-2"
              >
                {/* visual dot — button padding gives a ≥24px touch target */}
                <span
                  className="block h-2 rounded-full transition-all duration-200"
                  style={{ width: i === index ? '24px' : '8px', background: i === index ? '#fff' : 'rgba(255,255,255,0.4)' }}
                />
              </button>
            ))}
          </div>
        </>
      )}

      {/* Wave divider — curves the hero into the section below instead of a hard edge */}
      <svg
        className="absolute bottom-0 left-0 w-full z-[1] pointer-events-none"
        style={{ height: 'clamp(48px, 8vw, 110px)', display: 'block' }}
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,32 C240,80 480,80 720,48 C960,16 1200,16 1440,48 L1440,100 L0,100 Z"
          fill="var(--surface)"
        />
      </svg>
    </section>
  )
}
