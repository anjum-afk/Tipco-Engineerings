import { useParams } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import InvestorSidebar from '../components/InvestorSidebar'
import GetQuote from '../components/GetQuote'
import { DIRECTORS, INVESTOR_LINKS, CORPORATE_ANNOUNCEMENTS } from '../data/site'

function DirectorBlock({
  name, designation, intro, bio,
}: { name: string; designation: string; intro: string; bio: string }) {
  return (
    <div className="mb-10">
      <span className="block w-12 h-1 rounded mb-4" style={{ background: 'var(--brand)' }} />
      <h2 className="text-2xl font-bold text-gray-800 mb-1">{name}</h2>
      <span className="block text-brand font-semibold text-sm mb-3">{designation}</span>
      <p className="text-gray-600 text-sm leading-7 text-justify">
        <b className="text-gray-800">{intro}</b> {bio}
      </p>
    </div>
  )
}

function CorporateAnnouncementsView() {
  return (
    <div>
      <span className="block w-12 h-1 rounded mb-4" style={{ background: 'var(--brand)' }} />
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Corporate Announcements</h2>
      <ul className="space-y-3">
        {CORPORATE_ANNOUNCEMENTS.map(a => (
          <li key={a.slug}>
            <a
              href={`https://tipcoengineering.com/investors/corporate-announcements/${a.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 px-5 py-4 border border-gray-200 rounded hover:border-brand hover:bg-brand/5 transition-colors group"
            >
              <span className="text-sm font-semibold text-gray-700 group-hover:text-brand leading-snug">
                {a.title}
              </span>
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-gray-400 group-hover:text-brand flex-shrink-0 transition-colors">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function BoardOfDirectors() {
  const { section = 'board-of-directors' } = useParams()
  const meta = INVESTOR_LINKS.find(l => l.to === `/investors/${section}`)
  const title = meta?.label ?? 'Investors'
  const isBoard = section === 'board-of-directors'
  const isAnnouncements = section === 'corporate-announcements'

  return (
    <main>
      <PageBanner
        title={title}
        image="https://tipcoengineering.com/public/uploads/banner_team.jpg"
        crumbs={[{ label: 'Investors' }, { label: title }]}
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <InvestorSidebar />

            <div className="flex-1 min-w-0">
              {isBoard ? (
                DIRECTORS.map(d => <DirectorBlock key={d.name} {...d} />)
              ) : isAnnouncements ? (
                <CorporateAnnouncementsView />
              ) : (
                <div>
                  <span className="block w-12 h-1 rounded mb-4" style={{ background: 'var(--brand)' }} />
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>
                  <p className="text-gray-600 text-sm leading-7">
                    Information for {title} will be published here. For investor queries please reach
                    out to us at{' '}
                    <a href="mailto:mail@tipcoengineering.com" className="text-brand hover:underline">
                      mail@tipcoengineering.com
                    </a>.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <GetQuote />
    </main>
  )
}
