import { Link } from 'react-router-dom'
import { MapPin, ExternalLink, Building2 } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import SectionHeader from '../components/SectionHeader'
import GetQuote from '../components/GetQuote'
import StatsBar from '../components/StatsBar'

const OFFICES = [
  {
    tag: 'Head Office',
    city: 'Sonipat',
    state: 'Haryana',
    address: 'Plot No. 1689, 1658, Sector-38, Phase-1,\nRai Industrial Area, Sonipat, Haryana 131029',
    mapUrl: 'https://maps.google.com/?q=Tipco+Engineering+India+Pvt+Ltd+Rai+Sonipat+Haryana+131029',
  },
  {
    tag: 'Branch Office',
    city: 'Pune',
    state: 'Maharashtra',
    address: 'Bhumkar Chowk, Keystone Altura,\nnear Ginger Hotel, Mulshi, Wakad,\nPimpri-Chinchwad, Maharashtra 411033',
    mapUrl: 'https://maps.google.com/?q=Bhumkar+Chowk+Keystone+Altura+Wakad+Pimpri-Chinchwad+Maharashtra+411033',
  },
]

export default function AboutUs() {
  return (
    <main>
      <PageBanner
        title="About Tipco Engineering"
        image="https://tipcoengineering.com/public/uploads/banner_team.jpg"
        crumbs={[{ label: 'About Us' }]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader title="About Us" align="center" />
          <div className="max-w-4xl mx-auto space-y-5 text-gray-600 text-sm md:text-[15px] leading-relaxed">
            <p>
              Tipco Engineering India Pvt. Ltd. was initiated in 2021, primarily as a manufacturer of process
              plants and machinery required by the Chemical, Paint, Inks, Pharmaceuticals, Minerals, Food,
              Polyester resins machines, Polyester Button, and related Industries.
            </p>
            <p>
              Over the years, as the country was aiming towards self-reliance and industrialization, our firm,
              jointly with our clients, took up the challenge of finding solutions and developing cost-effective
              equipment &amp; processes for meeting their stringent requirements. Along with the growth of our
              clients, our reputation, experience, and knowledge of the manufacturing process and technologies
              grew, which we wish to pass on to industrialists &amp; entrepreneurs desirous of setting up new
              industries, expanding or diversifying their present range of activity.
            </p>
            <p>
              Today we manufacture a wide range of Mixers, Grinders, Dispersers, Milling, Drying, and separating
              equipment, and many more for many industries. We have been working closely with our clients to
              tailor machines to their requirements. We offer trial runs on lab machines to get the manufacturing
              process right the first time. Our manufacturing facilities are equipped with sufficient machinery and
              fabrication equipment. Over 90% of our jobs are carried out in-house with a team of skilled workforce
              and qualified engineers. Each stage of manufacture is closely inspected for quality and workmanship.
            </p>
            <p>
              Plants and Machines manufactured by us are based on proven technologies presently operating
              successfully in India and Overseas. Therefore, there is no delay in the commissioning of plants &amp;
              machinery manufactured by us. We guarantee 100% hassle-free production from day one of commissioning.
              Due to our sound knowledge and working methods, our client is kept well informed of all the hurdles
              he may face before and after the commissioning of the plant. Lastly, the plants supplied by us are
              cost-effective, utilize low labour, and keep the client's best interests in mind. Spares are readily
              available.
            </p>
            <p>
              Our company is powered by a highly diligent team of professionals. Our experts have tremendous
              knowledge and experience in their respective areas of expertise. They promptly look into
              product-related problems and grievances. Furthermore, they are given proper training, so as to have
              ample information about the current dynamics of the market.
            </p>
          </div>
        </div>
      </section>

      <StatsBar />

      {/* Vision / Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h3>
            <div className="h-1 w-10 rounded mb-4" style={{ background: '#186B6D' }} />
            <p className="text-gray-600 text-sm leading-relaxed">
              To be India's most trusted partner in mixing and milling technology — delivering proven,
              cost-effective process equipment that powers self-reliant manufacturing across industries.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h3>
            <div className="h-1 w-10 rounded mb-4" style={{ background: '#186B6D' }} />
            <p className="text-gray-600 text-sm leading-relaxed">
              To engineer reliable machines tailored to each client's requirement, back them with prompt
              after-sales support and readily available spares, and guarantee hassle-free production from day
              one of commissioning.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Link to="/product" className="btn btn-primary px-8 py-2.5 text-sm">Explore Our Products</Link>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16" style={{ background: 'var(--background)' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader title="Our Locations" align="center" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {OFFICES.map(o => (
              <div
                key={o.city}
                className="rounded-2xl p-6 flex gap-4 items-start"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-white" style={{ background: 'var(--brand)' }}>
                  <Building2 size={18} />
                </div>
                <div>
                  <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mb-2" style={{ background: 'var(--brand-light)', color: 'var(--brand)' }}>
                    {o.tag}
                  </span>
                  <h3 className="font-bold text-base mb-1" style={{ color: 'var(--foreground)' }}>{o.city}, {o.state}</h3>
                  <p className="text-sm leading-relaxed whitespace-pre-line mb-3" style={{ color: 'var(--foreground-muted)' }}>{o.address}</p>
                  <a
                    href={o.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold hover:underline"
                    style={{ color: 'var(--brand)' }}
                  >
                    <MapPin size={11} /> Get Directions <ExternalLink size={9} />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link to="/contact-us#locations" className="btn btn-outline px-8 py-2.5 text-sm">
              View on Map
            </Link>
          </div>
        </div>
      </section>

      <GetQuote />
    </main>
  )
}
