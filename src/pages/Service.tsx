import { Link } from 'react-router-dom'
import { Wrench, Settings, Headphones, PackageCheck } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import GetQuote from '../components/GetQuote'

const SERVICES = [
  { icon: <Settings size={24} />, title: 'Custom Engineering', desc: 'Machines tailored to your exact process parameters — over 90% of work carried out in-house.' },
  { icon: <PackageCheck size={24} />, title: 'Installation & Commissioning', desc: 'On-site installation with hassle-free production guaranteed from day one of commissioning.' },
  { icon: <Wrench size={24} />, title: 'Machine Service & Spares', desc: 'Prompt maintenance and readily available spares to keep your line running.' },
  { icon: <Headphones size={24} />, title: 'After-Sales Support', desc: 'A diligent team of professionals quick to respond to product-related queries and grievances.' },
]

export default function Service() {
  return (
    <main>
      <PageBanner title="Our Services" image="https://tipcoengineering.com/public/uploads/banner_team.jpg" crumbs={[{ label: 'Service' }]} />

      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-sm md:text-[15px] leading-relaxed">
            Tipco Engineering India Pvt. Ltd. provides complete process plant and machinery solutions — from
            engineering and manufacturing to installation, service and after-sales support.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map(s => (
              <div key={s.title} className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
                <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center text-white" style={{ background: '#007872' }}>
                  {s.icon}
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Register for service CTA */}
          <div className="mt-12 rounded-xl p-8 md:p-10 text-center text-white" style={{ background: 'linear-gradient(135deg,#004D49,#007872)' }}>
            <h2 className="text-2xl font-bold mb-2">Register For Machine Service</h2>
            <p className="opacity-90 mb-6 text-sm">Already a Tipco customer? Register your machine for priority service support.</p>
            <Link to="/contact-us" className="btn btn-white px-8 py-2.5 text-sm">Register</Link>
          </div>
        </div>
      </section>

      <GetQuote />
    </main>
  )
}
