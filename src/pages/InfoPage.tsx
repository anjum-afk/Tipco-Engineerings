import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'

interface Props {
  title: string
  intro?: string
  body?: React.ReactNode
  crumbs?: { label: string; to?: string }[]
}

// Generic content page used for lighter routes (galleries, catalogue, partner,
// FAQ, legal). Keeps the site navigable end-to-end while real copy is added.
export default function InfoPage({ title, intro, body, crumbs }: Props) {
  return (
    <main>
      <PageBanner title={title} image="https://tipcoengineering.com/public/uploads/banner_team.jpg" crumbs={crumbs ?? [{ label: title }]} />
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 max-w-3xl">
          {intro && <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-6">{intro}</p>}
          {body}
          <div className="mt-10 flex gap-3 flex-wrap">
            <Link to="/product" className="btn btn-primary px-7 py-2.5 text-sm">Browse Products</Link>
            <Link to="/contact-us" className="btn btn-outline px-7 py-2.5 text-sm">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
