import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Exact replica of the live hero: a full-bleed banner carousel.
// The headline ("Machine Manufacturer · Since 1985 · 35+ Years of Experience…")
// and the blue diagonal panel are baked into the slide artwork itself —
// they are NOT DOM text on the live site — so we simply cycle the images.
const SLIDES = [
  'https://tipcoengineering.com/public/uploads/slider-18.jpg',
  'https://tipcoengineering.com/public/uploads/slider-19.jpg',
]

export default function Hero() {
  const [cur, setCur] = useState(0)
  const n = SLIDES.length

  const next = useCallback(() => setCur(c => (c + 1) % n), [n])
  const prev = () => setCur(c => (c - 1 + n) % n)

  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Native slide ratio is 1600 x 500 — keep it so the artwork never crops */}
      <div className="relative w-full" style={{ aspectRatio: '1600 / 500' }}>
        {SLIDES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Tipco Engineering — Machine Manufacturer, Since 1985"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            style={{ opacity: i === cur ? 1 : 0 }}
            draggable={false}
          />
        ))}

        {/* Prev / Next — owl-carousel style circular arrows */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all hover:bg-white/40"
          style={{ background: 'rgba(255,255,255,0.28)' }}
        >
          <ChevronLeft className="text-white" size={24} />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all hover:bg-white/40"
          style={{ background: 'rgba(255,255,255,0.28)' }}
        >
          <ChevronRight className="text-white" size={24} />
        </button>
      </div>
    </section>
  )
}
