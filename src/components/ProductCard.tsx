import { Link } from 'react-router-dom'
import type { Product } from '../data/site'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to={product.href}
      className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all flex flex-col"
    >
      <div className="h-48 bg-gray-50 flex items-center justify-center overflow-hidden p-3">
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-gray-800 text-sm mb-1.5 group-hover:text-brand transition-colors">{product.name}</h3>
        <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 flex-1">{product.desc}</p>
        <span className="mt-3 text-brand text-xs font-bold uppercase tracking-wide">View Details →</span>
      </div>
    </Link>
  )
}
