import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Phone, Download, Check, ChevronRight } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import GetQuote from '../components/GetQuote'
import { PRODUCTS, CATEGORIES, CONTACT, INDUSTRY_APPS } from '../data/site'
import { PRODUCT_DETAILS } from '../data/products'

export default function ProductPage() {
  const { slug } = useParams()
  const [sent, setSent] = useState(false)

  // Reset the enquiry-sent state when navigating between products
  useEffect(() => setSent(false), [slug])

  const product = PRODUCTS.find(p => p.slug === slug)
  const cat = product ? CATEGORIES.find(c => c.slug === product.categorySlug) : undefined
  const detail = slug ? PRODUCT_DETAILS[slug] : undefined

  if (!product) {
    return (
      <main>
        <section className="max-w-[1280px] mx-auto px-6 py-24 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-3">Product Not Found</h1>
          <p className="text-gray-600 mb-6">Sorry, we couldn't find that product.</p>
          <Link to="/product" className="btn btn-primary px-8 py-2.5 text-sm">Browse All Products</Link>
        </section>
      </main>
    )
  }

  const paras = detail?.paras?.length ? detail.paras : [product.desc]
  const features = detail?.features ?? []
  const benefits = detail?.benefits ?? []
  const specs = detail?.specs ?? []
  const related = PRODUCTS.filter(p => p.categorySlug === product.categorySlug && p.slug !== product.slug).slice(0, 4)

  // Tab anchors — only show tabs that have content
  const tabs = [
    features.length && { id: 'features', label: 'Features' },
    benefits.length && { id: 'benefits', label: 'Benefits' },
    { id: 'application', label: 'Application' },
    specs.length && { id: 'technical', label: 'Technical Info' },
  ].filter(Boolean) as { id: string; label: string }[]

  return (
    <main className="bg-white">
      {/* ── Breadcrumb ─────────────────────────────────────────── */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 py-3 flex items-center gap-1.5 text-sm text-gray-500">
          <Link to="/" className="hover:text-brand">Home</Link>
          <ChevronRight size={14} />
          <Link to="/product" className="hover:text-brand">Product</Link>
          <ChevronRight size={14} />
          <span className="text-gray-700 font-medium">{product.name}</span>
        </div>
      </div>

      {/* ── Hero: image + enquiry form ─────────────────────────── */}
      <section className="py-10">
        <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-[1fr_360px] gap-10 items-start">
          {/* Left column */}
          <div>
            <div className="relative bg-gray-50 rounded-xl border border-gray-100 p-6 flex items-center justify-center mb-6" style={{ minHeight: 360 }}>
              <span className="absolute top-0 left-0 text-[11px] font-semibold text-white px-3 py-1 rounded-tl-xl rounded-br-xl" style={{ background: 'var(--brand)' }}>
                Img Gallery
              </span>
              <img src={product.img} alt={product.name} className="max-h-[340px] max-w-full object-contain" />
            </div>

            {cat && (
              <Link to={`/application/${cat.slug}`} className="inline-block text-xs font-bold uppercase tracking-wide text-brand bg-brand/10 px-3 py-1 rounded mb-3">
                {cat.name}
              </Link>
            )}
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4">{product.name}</h1>
            <div className="space-y-3 mb-6">
              {paras.map((p, i) => (
                <p key={i} className="text-gray-600 text-sm leading-relaxed text-justify">{p}</p>
              ))}
            </div>
            <div className="flex gap-3 flex-wrap">
              <a href="#enquire" className="btn btn-primary px-6 py-2.5 text-sm">Get Quote</a>
              <Link to="/catalogue" className="btn btn-outline px-6 py-2.5 text-sm flex items-center gap-2">
                <Download size={15} /> Download Brochure
              </Link>
            </div>
          </div>

          {/* Right column — enquiry form */}
          <aside id="enquire" className="lg:sticky lg:top-20">
            <div className="border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-800 text-lg mb-4">Enquiry Now</h3>
              {sent ? (
                <div className="text-center py-10">
                  <div className="text-3xl text-brand mb-2">✓</div>
                  <p className="font-bold text-gray-800">Enquiry Sent!</p>
                  <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours.</p>
                </div>
              ) : (
                <form className="space-y-3" onSubmit={e => { e.preventDefault(); setSent(true) }}>
                  <input className="form-input" placeholder="Full Name" required />
                  <input className="form-input" type="email" placeholder="Email Address" required />
                  <input className="form-input" placeholder="Company Name" />
                  <input className="form-input" type="tel" placeholder="Mobile Number" required />
                  <textarea className="form-input" rows={3} placeholder="Write a message" />
                  <button type="submit" className="btn btn-primary w-full py-2.5 text-sm">Submit</button>
                </form>
              )}
              <div className="text-center text-xs text-gray-400 my-4">or contact us directly</div>
              <a href={`tel:${CONTACT.tollFree.replace(/\s/g, '')}`} className="btn btn-outline w-full py-2.5 text-sm flex items-center justify-center gap-2">
                <Phone size={15} /> {CONTACT.tollFree}
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Tab strip ──────────────────────────────────────────── */}
      <div className="border-y border-gray-200 sticky top-16 bg-white z-[100]">
        <div className="max-w-[1280px] mx-auto px-6 flex gap-6 overflow-x-auto">
          {tabs.map(t => (
            <a key={t.id} href={`#${t.id}`} className="py-4 text-xs font-bold uppercase tracking-wide text-gray-600 hover:text-brand whitespace-nowrap border-b-2 border-transparent hover:border-brand transition-colors">
              {t.label}
            </a>
          ))}
        </div>
      </div>

      {/* ── Major Feature ──────────────────────────────────────── */}
      {features.length > 0 && (
        <section id="features" className="py-12 scroll-mt-28">
          <div className="max-w-[1100px] mx-auto px-6">
            <SectionHeading>Major Feature</SectionHeading>
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3 mt-8">
              {features.map(f => (
                <li key={f} className="flex gap-2.5 text-sm text-gray-700">
                  <Check size={18} className="text-brand flex-shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── Benefits ───────────────────────────────────────────── */}
      {benefits.length > 0 && (
        <section id="benefits" className="py-12 bg-gray-50 scroll-mt-28">
          <div className="max-w-[1100px] mx-auto px-6">
            <SectionHeading>Benefits</SectionHeading>
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3 mt-8">
              {benefits.map(b => (
                <li key={b} className="flex gap-2.5 text-sm text-gray-700">
                  <Check size={18} className="text-brand flex-shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── Applications ───────────────────────────────────────── */}
      <section id="application" className="py-12 scroll-mt-28">
        <div className="max-w-[1100px] mx-auto px-6">
          <SectionHeading>Applications</SectionHeading>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
            {INDUSTRY_APPS.map(app => (
              <Link key={app.slug} to={`/application/${app.slug}`} className="group rounded overflow-hidden shadow-sm bg-white">
                <div className="relative overflow-hidden">
                  <img src={app.img} alt={app.label} className="w-full h-[140px] object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="text-center py-2.5" style={{ background: 'linear-gradient(316deg, #206c6d 0%, #37b9ba 100%)' }}>
                  <h3 className="text-white font-semibold text-sm">{app.label}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technical Information ──────────────────────────────── */}
      {specs.length > 0 && (
        <section id="technical" className="py-12 bg-gray-50 scroll-mt-28">
          <div className="max-w-[1100px] mx-auto px-6">
            <SectionHeading>Technical Information</SectionHeading>
            <div className="overflow-x-auto mt-8">
              <table className="w-full border-collapse text-sm">
                <tbody>
                  {specs.map((row, ri) => (
                    <tr key={ri}>
                      {row.map((cell, ci) => {
                        const isHeader = ri === 0
                        const isLabel = ci === 0
                        const teal = isHeader || isLabel
                        return (
                          <td
                            key={ci}
                            className={`border border-gray-300 px-3 py-2.5 align-middle ${
                              teal ? 'text-white font-semibold' : 'text-gray-700 text-center bg-white'
                            } ${isLabel && !isHeader ? 'text-left' : isHeader ? 'text-center' : ''}`}
                            style={teal ? { background: 'var(--brand)' } : undefined}
                          >
                            {cell}
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ── Related Products ───────────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-14">
          <div className="max-w-[1280px] mx-auto px-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {related.map(p => <ProductCard key={p.slug} product={p} />)}
            </div>
          </div>
        </section>
      )}

      <GetQuote />
    </main>
  )
}

// Centered section heading with a short teal underline, matching the
// live `.heading` style used across product detail sections.
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-800 inline-block relative pb-3">
        {children}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded" style={{ background: 'var(--brand)' }} />
      </h2>
    </div>
  )
}
