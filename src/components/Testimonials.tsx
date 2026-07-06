import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    img: 'https://tipcoengineering.com/public/uploads/download__2_-removebg-preview.png',
    quote: 'The service and technical assistance offered by Tipco Engineering is excellent. When contacting Tipco Engineering, the service team is quick to respond and very knowledgeable.',
    name: 'Arya Sahani',
    role: 'Production Manager',
    company: 'Asian Paints Ltd.',
  },
  {
    img: 'https://tipcoengineering.com/public/uploads/download__2_-removebg-preview.png',
    quote: 'It has been a pleasure doing business with Tipco Engineering and we look forward to the possibility of another purchase in the future. I would feel quite comfortable recommending Tipco Engineering equipment.',
    name: 'Rajat Shabharwal',
    role: 'Plant Director',
    company: 'Kansai Nerolac Paints',
  },
  {
    img: 'https://tipcoengineering.com/public/uploads/download__2_-removebg-preview.png',
    quote: 'The machine performs flawlessly since installation and is capable of outperforming the specs that were guaranteed. A remarkable engineering product.',
    name: 'Mayank Singh',
    role: 'Head of Operations',
    company: 'Berger Paints India',
  },
]

export default function Testimonials() {
  const [cur, setCur] = useState(0)
  const n = TESTIMONIALS.length
  const next = useCallback(() => setCur(c => (c + 1) % n), [n])
  const prev = () => setCur(c => (c - 1 + n) % n)

  useEffect(() => {
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [next])

  const t = TESTIMONIALS[cur]

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0c1f1f 0%, #112929 60%, #0c1f1f 100%)' }}
    >
      {/* Subtle grid pattern — matches WorkingProcess */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(24,107,109,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(24,107,109,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Large decorative quote mark */}
      <div
        className="absolute top-8 left-1/2 -translate-x-1/2 select-none pointer-events-none"
        style={{ color: 'var(--brand)', opacity: 0.06, fontSize: '220px', lineHeight: 1, fontFamily: 'Georgia, serif' }}
      >
        "
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">

        {/* Eyebrow */}
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] mb-8" style={{ color: 'var(--brand)' }}>
          Client Testimonials
        </p>

        {/* Quote icon */}
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-8"
          style={{ background: 'var(--brand)' }}
        >
          <Quote size={20} className="text-white" />
        </div>

        {/* Quote text */}
        <div className="min-h-[96px] flex items-center justify-center">
          <p
            key={cur}
            className="text-white/85 text-base md:text-lg leading-relaxed italic"
          >
            "{t.quote}"
          </p>
        </div>

        {/* Avatar + attribution */}
        <div className="flex flex-col items-center gap-3 mt-8">
          <img
            src={t.img}
            alt={t.name}
            className="w-14 h-14 rounded-full object-cover border-2"
            style={{ borderColor: 'var(--brand)' }}
          />
          <div>
            <p className="font-bold text-white text-[15px]">{t.name}</p>
            <p className="text-sm mt-0.5" style={{ color: 'var(--brand)' }}>
              {t.role}
              <span className="text-white/40 mx-1.5">·</span>
              {t.company}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-5 mt-10">
          {/* Prev */}
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)' }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCur(i)}
                aria-label={`Testimonial ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width:  i === cur ? '24px' : '8px',
                  height: '8px',
                  background: i === cur ? 'var(--brand)' : 'rgba(255,255,255,0.3)',
                }}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)' }}
            aria-label="Next testimonial"
          >
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </section>
  )
}
