import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const TABS = [
  {
    id: 'industry',
    label: 'Industry',
    description:
      'With over 35 years of experience in industrial machine manufacturing, Tipco Engineering high-end products are designed for long life and minimum maintenance — covering Paint, Pharma, Chemicals, and Pesticide industries.',
    items: [
      { label: 'Paint',    img: 'https://tipcoengineering.com/public/uploads/Paint%20Industries%20.jpg',    href: '/application/paint' },
      { label: 'Pharma',  img: 'https://tipcoengineering.com/public/uploads/Pharma%20Industries%20.jpg',  href: '/application/pharma' },
      { label: 'Chemical',img: 'https://tipcoengineering.com/public/uploads/Chemical%20Industries%20.jpg',href: '/application/chemical' },
      { label: 'Ink',     img: 'https://tipcoengineering.com/public/uploads/Ink%20Industries%20.jpg',     href: '/application/ink' },
    ],
    viewMore: '/application/industry',
    cols: 4,
  },
  {
    id: 'process',
    label: 'Process',
    description:
      'Tipco Engineering offers reliable solutions for paint, ink, glue, gel, and many other applications. Our expertise in assembly line balancing prevents production disruptions and keeps your throughput optimal.',
    items: [
      { label: 'Mixing', img: 'https://tipcoengineering.com/public/uploads/Mixing%20%20(1).jpg',        href: '/application/mixing' },
      { label: 'Milling',img: 'https://tipcoengineering.com/public/uploads/portfolio-category-51.png', href: '/application/milling' },
    ],
    viewMore: '/application/process',
    cols: 2,
  },
  {
    id: 'production',
    label: 'Production Setup',
    description:
      'From individual machines to complete production lines — Tipco Engineering leads in automated production line technology, supplying fully integrated systems across industries worldwide.',
    items: [
      { label: 'Paint Production',   img: 'https://tipcoengineering.com/public/uploads/Paint%20Production%20Setup.jpg',    href: '/application/paint-production' },
      { label: 'Ink Production',     img: 'https://tipcoengineering.com/public/uploads/ink%20production.jpg',             href: '/application/ink-production' },
      { label: 'Chemical Production',img: 'https://tipcoengineering.com/public/uploads/Chemical%20Production%20Setup.jpg',href: '/application/chemical-production' },
      { label: 'Powder Production',  img: 'https://tipcoengineering.com/public/uploads/Powder%20Production.jpg',          href: '/application/powder-production' },
    ],
    viewMore: '/application/production-setup',
    cols: 4,
  },
]

export default function ApplicationTabs() {
  const [active, setActive] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })

  useEffect(() => {
    const btn = tabRefs.current[active]
    if (btn) {
      setIndicatorStyle({ left: btn.offsetLeft, width: btn.offsetWidth })
    }
  }, [active])

  const tab = TABS[active]
  const gridCols = tab.cols === 2
    ? 'grid-cols-1 sm:grid-cols-2'
    : 'grid-cols-2 md:grid-cols-4'

  return (
    <section className="bg-white py-14">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

        {/* Section eyebrow */}
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--brand)' }}>
          Applications
        </p>

        {/* Tab bar */}
        <div className="relative border-b border-gray-200 mb-8">
          <div className="flex gap-0 overflow-x-auto scrollbar-hide">
            {TABS.map((t, i) => (
              <button
                key={t.id}
                ref={el => { tabRefs.current[i] = el }}
                onClick={() => setActive(i)}
                className="relative flex-shrink-0 px-5 sm:px-8 py-4 text-sm font-semibold tracking-wide transition-colors duration-200 whitespace-nowrap"
                style={{ color: active === i ? 'var(--brand)' : '#6b7280' }}
              >
                {t.label}
              </button>
            ))}
          </div>
          {/* Sliding indicator */}
          <span
            className="absolute bottom-0 h-[3px] transition-all duration-300 ease-in-out rounded-t"
            style={{ background: 'var(--brand)', left: indicatorStyle.left, width: indicatorStyle.width }}
          />
        </div>

        {/* Sliding content */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {TABS.map(t => {
              const gc = t.cols === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-2 md:grid-cols-4'
              return (
                <div key={t.id} className="min-w-full">
                  {/* Description row */}
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
                    <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">{t.description}</p>
                    <Link
                      to={t.viewMore}
                      className="inline-flex items-center gap-2 text-sm font-bold flex-shrink-0 hover:gap-3 transition-all"
                      style={{ color: 'var(--brand)' }}
                    >
                      View All <ArrowRight size={14} />
                    </Link>
                  </div>

                  {/* Image grid */}
                  <div className={`grid gap-3 md:gap-4 ${gc}`}>
                    {t.items.map(item => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="group relative block overflow-hidden rounded-xl"
                        style={{ height: 220 }}
                      >
                        <img
                          src={item.img}
                          alt={item.label}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                        {/* Label */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                          <span className="text-white font-semibold text-sm">{item.label}</span>
                          <span
                            className="w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ background: 'var(--brand)' }}
                          >
                            <ArrowRight size={13} className="text-white" />
                          </span>
                        </div>
                        {/* Top-left brand accent on hover */}
                        <div
                          className="absolute top-3 left-3 h-1 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ background: 'var(--brand)' }}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
