import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

interface Crumb {
  label: string
  to?: string
}

interface Props {
  title: string
  image?: string
  crumbs?: Crumb[]
}

const DEFAULT_BANNER = 'https://tipcoengineering.com/public/uploads/banner_team.jpg'

export default function PageBanner({ title, image = DEFAULT_BANNER, crumbs = [] }: Props) {
  return (
    <section
      className="relative"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(0,77,73,0.92) 0%, rgba(0,120,114,0.78) 100%)' }} />
      <div className="relative max-w-[1280px] mx-auto px-6 py-14 md:py-20">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">{title}</h1>
        <nav className="flex items-center gap-1.5 text-sm text-gray-100/90 flex-wrap">
          <Link to="/" className="hover:text-white">Home</Link>
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <ChevronRight size={14} className="opacity-70" />
              {c.to ? <Link to={c.to} className="hover:text-white">{c.label}</Link> : <span className="text-white font-medium">{c.label}</span>}
            </span>
          ))}
        </nav>
      </div>
    </section>
  )
}
