import { Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import { NEWS_ARTICLES, CDN } from '../data/site'

export default function Blog() {
  return (
    <main>
      <PageBanner
        title="Blog & News"
        image={`${CDN}/public/uploads/banner_team.jpg`}
        crumbs={[{ label: 'Blog & News' }]}
      />

      <section className="py-14 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEWS_ARTICLES.map(article => (
              <article
                key={article.slug}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img
                    src={article.img}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold mb-2" style={{ color: '#186B6D' }}>
                    <Calendar size={14} />
                    {article.date}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2 leading-snug">{article.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{article.excerpt}</p>
                  <Link
                    to={article.href}
                    className="mt-4 text-sm font-semibold inline-flex items-center gap-1 hover:underline"
                    style={{ color: '#186B6D' }}
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
