import { Link } from 'react-router-dom'
import SectionHeader from './SectionHeader'

const INDUSTRIES = [
  { label: 'Paint', img: 'https://tipcoengineering.com/public/uploads/Paint%20Industries%20.jpg', href: '/application/paint' },
  { label: 'Pharma', img: 'https://tipcoengineering.com/public/uploads/Pharma%20Industries%20.jpg', href: '/application/pharma' },
  { label: 'Chemical', img: 'https://tipcoengineering.com/public/uploads/Chemical%20Industries%20.jpg', href: '/application/chemical' },
  { label: 'Ink', img: 'https://tipcoengineering.com/public/uploads/Ink%20Industries%20.jpg', href: '/application/ink' },
]

const PROCESSES = [
  { label: 'Mixing', img: 'https://tipcoengineering.com/public/uploads/Mixing%20%20(1).jpg', href: '/application/mixing' },
  { label: 'Milling', img: 'https://tipcoengineering.com/public/uploads/portfolio-category-51.png', href: '/application/milling' },
]

const PRODUCTION = [
  { label: 'Paint Production', img: 'https://tipcoengineering.com/public/uploads/Paint%20Production%20Setup.jpg', href: '/application/paint-production' },
  { label: 'Ink Production', img: 'https://tipcoengineering.com/public/uploads/ink%20production.jpg', href: '/application/ink-production' },
  { label: 'Chemical Production', img: 'https://tipcoengineering.com/public/uploads/Chemical%20Production%20Setup.jpg', href: '/application/chemical-production' },
  { label: 'Powder Production', img: 'https://tipcoengineering.com/public/uploads/Powder%20Production.jpg', href: '/application/powder-production' },
]

function CardGrid({ items, cols = 4 }: { items: typeof INDUSTRIES; cols?: number }) {
  const gridClass = cols === 2
    ? 'grid-cols-1 sm:grid-cols-2'
    : 'grid-cols-2 md:grid-cols-4'
  return (
    <div className={`grid gap-3 md:gap-4 mt-4 ${gridClass}`}>
      {items.map(p => (
        <Link key={p.label} to={p.href} className="img-card block h-32 md:h-40">
          <img src={p.img} alt={p.label} className="w-full h-full object-cover" />
          <div className="img-card-label">{p.label}</div>
        </Link>
      ))}
    </div>
  )
}

export default function IndustrySection() {
  return (
    <>
      {/* Industry */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader title="Industry" align="center" />
          <p className="text-gray-600 text-sm leading-relaxed max-w-3xl mx-auto text-center -mt-4 mb-6">
            With over 35 years of experience in Industrial machine manufacturing, Tipco Engineering India high-end products are
            designed for long life and minimum maintenance, offering a wide range of innovative equipment for numerous applications
            in Paint, Pharma, Chemicals, Pesticides industries, etc.
          </p>
          <CardGrid items={INDUSTRIES} cols={4} />
          <div className="flex justify-center mt-6">
            <Link to="/application/industry" className="btn btn-outline px-8 py-2.5 text-sm">View More</Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader title="Process" align="center" />
          <p className="text-gray-600 text-sm leading-relaxed max-w-3xl mx-auto text-center -mt-4 mb-6">
            Tipco Engineering India has a wide range of products to offer reliable solutions for paint, ink, glue, gel, and many
            other applications. Our expertise in determining how assembly line balancing problems can affect your system throughput
            helps prevent sudden production process disruptions.
          </p>
          <CardGrid items={PROCESSES} cols={2} />
          <div className="flex justify-center mt-6">
            <Link to="/application/process" className="btn btn-outline px-8 py-2.5 text-sm">View More</Link>
          </div>
        </div>
      </section>

      {/* Production Setup */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader title="Production Setup" align="center" />
          <p className="text-gray-600 text-sm leading-relaxed max-w-3xl mx-auto text-center -mt-4 mb-6">
            Within Tipco Engineering's portfolio, it is possible to find a wide range of products and solutions not only for the
            machines but for the entire production line. Tipco Engineering is a leader in automated production line technology and
            has supplied automated systems across various industries.
          </p>
          <CardGrid items={PRODUCTION} cols={4} />
          <div className="flex justify-center mt-6">
            <Link to="/application/production-setup" className="btn btn-outline px-8 py-2.5 text-sm">View More</Link>
          </div>
        </div>
      </section>
    </>
  )
}
