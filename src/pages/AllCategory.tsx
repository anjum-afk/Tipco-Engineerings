import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import { CATEGORIES } from '../data/site'

export default function AllCategory() {
  return (
    <main>
      <PageBanner
        title="Categories"
        image="https://tipcoengineering.com/public/uploads/banner_team.jpg"
        crumbs={[{ label: 'Application' }]}
      />

      <section className="py-14 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map(cat => (
              <Link
                key={cat.slug}
                to={`/application/${cat.slug}`}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all"
              >
                <div className="h-52 overflow-hidden">
                  <img src={cat.img} alt={cat.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-800 group-hover:text-brand transition-colors mb-2">{cat.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{cat.blurb}</p>
                  <span className="inline-block mt-3 text-brand text-sm font-bold">View Machines →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
