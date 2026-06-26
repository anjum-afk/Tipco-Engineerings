import { useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import { CONTACT } from '../data/site'

export default function ContactUs() {
  const [sent, setSent] = useState(false)

  return (
    <main>
      <PageBanner
        title="Contact Us"
        image="https://tipcoengineering.com/public/uploads/banner_contact.jpg"
        crumbs={[{ label: 'Contact Us' }]}
      />

      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <blockquote className="border-l-4 pl-4 text-gray-600 italic max-w-3xl mb-12" style={{ borderColor: '#007872' }}>
            At Tipco Engineering we strive to provide you with top-notch products and services. We are available at
            the given contact addresses — feel free to reach out to us.
          </blockquote>

          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10">
            {/* Info cards */}
            <div className="space-y-4">
              <InfoCard icon={<MapPin size={20} />} title="Head Office">
                {CONTACT.address}
              </InfoCard>
              <InfoCard icon={<Phone size={20} />} title="Call Us">
                <div className="space-y-1">
                  <div><span className="font-semibold text-gray-700">Sales:</span> <a href={`tel:${CONTACT.phoneSales.replace(/\s/g, '')}`} className="hover:text-brand">{CONTACT.phoneSales}</a></div>
                  <div><span className="font-semibold text-gray-700">Toll-Free:</span> <a href={`tel:${CONTACT.tollFree.replace(/\s/g, '')}`} className="hover:text-brand">{CONTACT.tollFree}</a></div>
                  <div><span className="font-semibold text-gray-700">Purchase:</span> <a href={`tel:${CONTACT.phasePurchase.replace(/\s/g, '')}`} className="hover:text-brand">{CONTACT.phasePurchase}</a></div>
                </div>
              </InfoCard>
              <InfoCard icon={<Mail size={20} />} title="Email Us">
                <a href={`mailto:${CONTACT.email}`} className="hover:text-brand break-all">{CONTACT.email}</a>
              </InfoCard>
              <InfoCard icon={<Clock size={20} />} title="Working Hours">
                Monday – Saturday: 9:00 AM – 6:00 PM
              </InfoCard>
            </div>

            {/* Form */}
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-800 mb-1">Send us a message</h2>
              <p className="text-sm text-gray-500 mb-6">We'll get back to you within 24 hours.</p>
              {sent ? (
                <div className="text-center py-12">
                  <div className="text-4xl text-brand mb-3">✓</div>
                  <p className="font-bold text-gray-800 text-lg">Thank you!</p>
                  <p className="text-sm text-gray-500 mt-1">Your message has been sent.</p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={e => { e.preventDefault(); setSent(true) }}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input className="form-input" placeholder="Name" required minLength={3} />
                    <input className="form-input" type="email" placeholder="Email" required />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input className="form-input" type="tel" placeholder="Mobile" required pattern="[6789][0-9]{9}" />
                    <input className="form-input" placeholder="Company Name" required minLength={3} />
                  </div>
                  <textarea className="form-input" rows={6} placeholder="Message" required minLength={20} />
                  <button type="submit" className="btn btn-primary px-8 py-3 text-sm">Send</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-gray-100">
        <iframe
          title="Tipco Engineering location"
          src={CONTACT.mapEmbed}
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  )
}

function InfoCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 bg-white border border-gray-200 rounded-xl p-5">
      <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 text-white" style={{ background: '#007872' }}>
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-gray-800 mb-1">{title}</h3>
        <div className="text-sm text-gray-600 leading-relaxed">{children}</div>
      </div>
    </div>
  )
}
