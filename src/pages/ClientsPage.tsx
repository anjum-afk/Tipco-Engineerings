import PageBanner from '../components/PageBanner'
import GetQuote from '../components/GetQuote'
import { CLIENT_IDS, clientLogo } from '../data/site'

export default function ClientsPage() {
  return (
    <main>
      <PageBanner
        title="Top Clients"
        image="https://tipcoengineering.com/public/uploads/banner_team.jpg"
        crumbs={[{ label: 'Our Clients' }]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-sm md:text-[15px] leading-relaxed">
            Over the years, Tipco Engineering has earned the trust of leading manufacturers across the paint, ink,
            chemical, pharmaceutical and food industries. Here are some of the brands we are proud to work with.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-5">
            {CLIENT_IDS.map(id => (
              <div key={id} className="bg-white border border-gray-200 rounded-lg flex items-center justify-center p-3 hover:shadow-md transition-shadow" style={{ height: 96 }}>
                <img src={clientLogo(id)} alt={`Client ${id}`} loading="lazy" className="max-h-16 max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <GetQuote />
    </main>
  )
}
