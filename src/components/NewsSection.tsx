import { Link } from 'react-router-dom'
import { ArrowUpRight, Calendar, ChevronRight } from 'lucide-react'
import { NEWS_ARTICLES } from '../data/site'

export default function NewsSection() {
  const [featured, ...rest] = NEWS_ARTICLES.slice(0, 4)

  return (
    <section className="w-full bg-white overflow-hidden">

      {/* ── Header strip ───────────────────────────────────── */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 pt-14 pb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] mb-2" style={{ color: 'var(--brand)' }}>
            News & Insights
          </p>
          <h2
            className="font-black leading-tight"
            style={{ fontSize: 'clamp(24px, 3.5vw, 44px)', letterSpacing: '-0.025em', color: 'var(--foreground)' }}
          >
            Latest from Tipco
          </h2>
        </div>
        <Link
          to="/blog"
          className="hidden sm:inline-flex items-center gap-2 text-[13px] font-bold flex-shrink-0 group"
          style={{ color: 'var(--brand)' }}
        >
          All articles
          <span
            className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{ border: '1.5px solid var(--brand)', color: 'var(--brand)' }}
          >
            <ArrowUpRight size={13} />
          </span>
        </Link>
      </div>

      {/* ── Grid: 1 featured left + 3 stacked right ────────── */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 pb-14">
        <div className="grid lg:grid-cols-[1fr_380px] gap-4 lg:gap-6">

          {/* Featured article */}
          <Link
            to={featured.href}
            className="group relative block overflow-hidden rounded-2xl"
            style={{ minHeight: '460px' }}
          >
            {/* Image */}
            <img
              src={featured.img}
              alt={featured.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

            {/* Tag */}
            <div className="absolute top-5 left-5">
              <span
                className="text-[10.5px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                style={{ background: 'var(--brand)', color: '#fff' }}
              >
                Featured
              </span>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="flex items-center gap-1.5 mb-3" style={{ color: 'rgba(255,255,255,0.55)' }}>
                <Calendar size={12} />
                <span className="text-[11.5px] font-medium">{featured.date}</span>
              </div>
              <h3
                className="font-black text-white leading-tight mb-3"
                style={{ fontSize: 'clamp(18px, 2.2vw, 26px)', letterSpacing: '-0.02em' }}
              >
                {featured.title}
              </h3>
              <p className="text-[13.5px] leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
                {featured.excerpt}
              </p>
              <span
                className="inline-flex items-center gap-2 text-[13px] font-bold text-white group-hover:gap-3 transition-all"
              >
                Read article <ChevronRight size={14} />
              </span>
            </div>
          </Link>

          {/* Right stack of 3 smaller cards */}
          <div className="flex flex-col gap-4">
            {rest.map((article) => (
              <Link
                key={article.slug}
                to={article.href}
                className="group flex gap-4 rounded-xl overflow-hidden border border-gray-100 bg-white hover:border-gray-200 hover:shadow-md transition-all duration-300"
                style={{ flex: 1 }}
              >
                {/* Thumbnail */}
                <div className="w-28 sm:w-32 flex-shrink-0 overflow-hidden bg-gray-100">
                  <img
                    src={article.img}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ minHeight: '110px' }}
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center py-4 pr-4">
                  <div className="flex items-center gap-1.5 mb-2" style={{ color: 'var(--brand)' }}>
                    <Calendar size={11} />
                    <span className="text-[11px] font-semibold">{article.date}</span>
                  </div>
                  <h3
                    className="font-bold leading-snug text-gray-800 group-hover:text-brand transition-colors mb-2"
                    style={{ fontSize: 'clamp(12.5px, 1.2vw, 14px)' }}
                  >
                    {article.title}
                  </h3>
                  <span
                    className="text-[11.5px] font-semibold inline-flex items-center gap-1 transition-all group-hover:gap-2"
                    style={{ color: 'var(--brand)' }}
                  >
                    Read more <ChevronRight size={11} />
                  </span>
                </div>
              </Link>
            ))}

            {/* Mobile "view all" */}
            <Link
              to="/blog"
              className="sm:hidden flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-[13px] border-2 transition-colors"
              style={{ borderColor: 'var(--brand)', color: 'var(--brand)' }}
            >
              View all articles <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>

    </section>
  )
}
