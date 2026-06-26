import { Link } from 'react-router-dom'
import SectionHeader from './SectionHeader'

const PRODUCTS = [
  { label: 'Mill Series', img: 'https://tipcoengineering.com/public/uploads/Catagoery-Banner.jpg', href: '/application/mill-series' },
  { label: 'Production Line', img: 'https://tipcoengineering.com/public/uploads/SIRCA-02.JPG', href: '/application/production-line' },
  { label: 'Laboratory Machines', img: 'https://tipcoengineering.com/public/uploads/portfolio-category-38.png', href: '/application/laboratory-machines' },
  { label: 'Homogenizers', img: 'https://tipcoengineering.com/public/uploads/banner.jpeg', href: '/application/homogenizers' },
]

export default function Products() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader
          title="PRODUCTS & SOLUTIONS"
          subtitle="We provide the best machines for industrial purposes like Mixing machines, Disperser Machines, Wall Putty Mixture machines, and a wide range of Machines that are required for mixing and milling technology."
          align="center"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-2">
          {PRODUCTS.map(p => (
            <Link key={p.label} to={p.href} className="img-card block" style={{ height: 200 }}>
              <img src={p.img} alt={p.label} className="w-full h-full object-cover" />
              <div className="img-card-label">{p.label}</div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link to="/all-category" className="btn btn-outline px-8 py-2.5 text-sm">View More</Link>
        </div>
      </div>
    </section>
  )
}
