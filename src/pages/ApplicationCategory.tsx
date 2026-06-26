import { useParams, Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import GetQuote from '../components/GetQuote'
import { CDN, PRODUCTS, INDUSTRY_APPS, CONTACT } from '../data/site'
import { APPLICATION_PAGES, type AppPage } from '../data/applications'

// Encode the literal spaces the live CMS leaves in image filenames.
const enc = (u: string) => u.replace(/ /g, '%20')

// ── Industry overview page (/application/industry) ───────────────────────────
// Faithful replica of https://tipcoengineering.com/application/industry

function IndustryPage() {
  return (
    <main className="bg-white">
      <section className="relative">
        <img
          src={`${CDN}/public/uploads/banner_team.jpg`}
          alt="Industry"
          className="w-full h-[260px] md:h-[340px] object-cover"
        />
        <div className="max-w-4xl mx-auto px-6 relative z-10 -mt-28 md:-mt-32">
          <div className="bg-white rounded shadow-[0_10px_40px_rgba(0,0,0,0.12)] px-6 md:px-12 py-8 md:py-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Industry</h2>
            <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed">
              With over 35 years of experience in Industrial machine manufacturing, Tipco Engineering
              India high-end products are designed for long life and minimum maintenance, offering a
              wide range of innovative equipment for numerous applications in Paint, Pharma, Chemicals,
              Pesticides industries, etc. Tipco has gained a leading position in the Indian market with
              its innovative mixers, dispersers, homogenizers, mills, laboratory machines, reactors to
              meeting global industry standards.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRY_APPS.map(app => (
              <div key={app.slug} className="shop-item rounded overflow-hidden shadow-sm bg-white">
                <div className="relative overflow-hidden group">
                  <img
                    src={app.img}
                    alt={app.label}
                    className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      to={`/application/${app.slug}`}
                      className="border border-white text-white text-xs font-semibold uppercase tracking-wide px-5 py-2 rounded transition-colors hover:bg-white hover:text-brand"
                    >
                      More Details
                    </Link>
                  </div>
                </div>
                <Link
                  to={`/application/${app.slug}`}
                  className="block text-center py-3.5"
                  style={{ background: 'linear-gradient(316deg, #206c6d 0%, #37b9ba 100%)' }}
                >
                  <h3 className="text-white font-semibold text-base">{app.label}</h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GetQuote />
    </main>
  )
}

// ── Generic application / category page ──────────────────────────────────────
// Banner image + overlapping white intro card + product (or sub-category) cards.
// Matches e.g. https://tipcoengineering.com/application/milling

function ApplicationPage({ slug, page }: { slug: string; page: AppPage }) {
  const products = (page.products ?? [])
    .map(ps => PRODUCTS.find(p => p.slug === ps))
    .filter(Boolean) as typeof PRODUCTS

  return (
    <main className="bg-white">
      {/* Banner + overlapping intro card */}
      <section className="relative">
        <img
          src={enc(page.banner)}
          alt={page.title}
          className="w-full h-[260px] md:h-[340px] object-cover"
        />
        <div className="max-w-4xl mx-auto px-6 relative z-10 -mt-28 md:-mt-32">
          <div className="bg-white rounded shadow-[0_10px_40px_rgba(0,0,0,0.12)] px-6 md:px-12 py-8 md:py-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{page.title}</h2>
            <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed text-justify whitespace-pre-line">
              {page.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Sub-category cards (process / production-setup) */}
      {page.subCards && page.subCards.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {page.subCards.map(c => (
                <div key={c.slug} className="rounded overflow-hidden shadow-sm bg-white">
                  <div className="relative overflow-hidden group">
                    <img src={enc(c.img)} alt={c.label} className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link to={`/application/${c.slug}`} className="border border-white text-white text-xs font-semibold uppercase tracking-wide px-5 py-2 rounded transition-colors hover:bg-white hover:text-brand">
                        More Details
                      </Link>
                    </div>
                  </div>
                  <Link to={`/application/${c.slug}`} className="block text-center py-3.5" style={{ background: 'linear-gradient(316deg, #206c6d 0%, #37b9ba 100%)' }}>
                    <h3 className="text-white font-semibold text-base">{c.label}</h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Product cards */}
      {products.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {products.map(p => (
                <div key={p.slug} className="rounded-lg border border-gray-200 overflow-hidden bg-white flex flex-col hover:shadow-lg transition-shadow">
                  <Link to={`/${slug}/${p.slug}`} className="h-52 bg-gray-50 flex items-center justify-center overflow-hidden p-4 group">
                    <img src={p.img} alt={p.name} loading="lazy" className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform" />
                  </Link>
                  <div className="p-5 flex flex-col flex-1">
                    <Link to={`/${slug}/${p.slug}`}>
                      <h3 className="font-bold text-brand text-base mb-2 hover:underline">{p.name}</h3>
                    </Link>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 flex-1">{p.desc}</p>
                    <div className="mt-4">
                      <Link to={`/${slug}/${p.slug}`} className="btn btn-primary text-xs px-5 py-2 rounded inline-block">Get Quote</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <GetQuote />
    </main>
  )
}

// ── Fallback for any application slug we don't have content for ───────────────

function FallbackPage({ slug }: { slug: string }) {
  const pretty = slug.split('-').map(w => w[0]?.toUpperCase() + w.slice(1)).join(' ')
  return (
    <main>
      <PageBanner title={pretty} crumbs={[{ label: 'Application', to: '/all-category' }, { label: pretty }]} />
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-gray-600 leading-relaxed">
            Tipco Engineering offers a complete range of mixing and milling machinery for{' '}
            {pretty.toLowerCase()} applications. Explore our full catalogue or get in touch at{' '}
            <a href={`mailto:${CONTACT.email}`} className="text-brand hover:underline">{CONTACT.email}</a>.
          </p>
          <div className="flex justify-center gap-3 mt-8">
            <Link to="/product" className="btn btn-primary px-8 py-2.5 text-sm">View All Products</Link>
            <Link to="/contact-us" className="btn btn-outline px-8 py-2.5 text-sm">Contact Us</Link>
          </div>
        </div>
      </section>
      <GetQuote />
    </main>
  )
}

// ── Router ───────────────────────────────────────────────────────────────────

export default function ApplicationCategory() {
  const { slug = '' } = useParams()

  if (slug === 'industry') return <IndustryPage />
  const page = APPLICATION_PAGES[slug]
  if (page) return <ApplicationPage slug={slug} page={page} />
  return <FallbackPage slug={slug} />
}
