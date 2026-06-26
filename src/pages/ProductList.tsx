import PageBanner from '../components/PageBanner'
import ProductCard from '../components/ProductCard'
import GetQuote from '../components/GetQuote'
import { CATEGORIES, PRODUCTS } from '../data/site'

export default function ProductList() {
  return (
    <main>
      <PageBanner
        title="All Products"
        image="https://tipcoengineering.com/public/uploads/banner.jpeg"
        crumbs={[{ label: 'Products' }]}
      />

      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 space-y-14">
          {CATEGORIES.map(cat => {
            const items = PRODUCTS.filter(p => p.categorySlug === cat.slug)
            if (items.length === 0) return null
            return (
              <div key={cat.slug}>
                <div className="flex items-end justify-between mb-6 border-b border-gray-200 pb-3">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800">{cat.name}</h2>
                  <span className="text-sm text-gray-400">{items.length} machines</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {items.map(p => <ProductCard key={p.slug} product={p} />)}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <GetQuote />
    </main>
  )
}
