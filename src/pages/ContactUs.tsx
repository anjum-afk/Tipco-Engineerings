import { useState } from 'react'
import worldMapData from '../data/worldmap.json'
import { Phone, Mail, MapPin, Clock, ExternalLink, Send, CheckCircle, Building2, ChevronRight } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import { CONTACT } from '../data/site'

const OFFICES = [
  {
    id: 'sonipat',
    tag: 'Head Office',
    city: 'Sonipat',
    state: 'Haryana',
    address: 'Plot No. 1689, 1658, Sector-38, Phase-1,\nRai Industrial Area, Sonipat, Haryana 131029',
    mapUrl: 'https://maps.google.com/?q=Tipco+Engineering+India+Pvt+Ltd+Rai+Sonipat+Haryana+131029',
    embedUrl: 'https://maps.google.com/maps?q=Tipco+Engineering+India+Pvt+Ltd+Rai+Sonipat+Haryana&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    id: 'pune',
    tag: 'Branch Office',
    city: 'Pune',
    state: 'Maharashtra',
    address: 'Bhumkar Chowk, Keystone Altura,\nnear Ginger Hotel, Mulshi, Wakad,\nPimpri-Chinchwad, Maharashtra 411033',
    mapUrl: 'https://maps.google.com/?q=Bhumkar+Chowk+Keystone+Altura+Wakad+Pimpri-Chinchwad+Maharashtra+411033',
    embedUrl: 'https://maps.google.com/maps?q=Bhumkar+Chowk+Keystone+Altura+Wakad+Pimpri-Chinchwad+Maharashtra+411033&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
]

const PIN_COORDS: Record<string, [number, number]> = {
  sonipat: worldMapData.pins.sonipat as [number, number],
  pune:    worldMapData.pins.pune    as [number, number],
}

const CONTACT_ITEMS = [
  { icon: Phone, label: 'Sales',     value: CONTACT.phoneSales, href: `tel:${CONTACT.phoneSales.replace(/\s/g,'')}` },
  { icon: Phone, label: 'Toll-Free', value: CONTACT.tollFree,   href: `tel:${CONTACT.tollFree.replace(/\s/g,'')}` },
  { icon: Mail,  label: 'Email',     value: CONTACT.email,      href: `mailto:${CONTACT.email}` },
  { icon: Clock, label: 'Hours',     value: 'Mon – Sat  9:00 AM – 6:00 PM', href: null },
]

function WorldMap({ activeOffice, onPinClick }: { activeOffice: number; onPinClick: (i: number) => void }) {
  return (
    <svg
      viewBox="0 0 960 500"
      className="w-full h-auto block"
      style={{ background: '#f0f2f4' }}
      aria-label="World map showing Tipco office locations"
    >
      <g fill="#c8d4da" stroke="#f0f2f4" strokeWidth={0.7}>
        {(worldMapData.countryPaths as string[]).map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
      {OFFICES.map((office, i) => {
        const [px, py] = PIN_COORDS[office.id]
        const active = activeOffice === i
        return (
          <g key={office.id} onClick={() => onPinClick(i)} style={{ cursor: 'pointer' }}>
            {active && (
              <circle cx={px} cy={py} r={14} fill="none" stroke="#007872" strokeWidth={1.5} opacity={0.3}>
                <animate attributeName="r" values="8;20;8" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite" />
              </circle>
            )}
            <path
              d={`M${px},${py} C${px-7},${py-8} ${px-7},${py-22} ${px},${py-26} C${px+7},${py-22} ${px+7},${py-8} ${px},${py}Z`}
              fill={active ? '#007872' : '#2d4a4a'}
              stroke="#fff"
              strokeWidth={1.2}
            />
            <circle cx={px} cy={py - 18} r={3.5} fill="#fff" />
            <rect x={px - 28} y={py - 44} width={56} height={16} rx={4} fill={active ? '#007872' : '#2d4a4a'} />
            <polygon points={`${px-5},${py-28} ${px+5},${py-28} ${px},${py-22}`} fill={active ? '#007872' : '#2d4a4a'} />
            <text x={px} y={py-32} textAnchor="middle" fill="#fff" fontSize={8} fontWeight="700" fontFamily="system-ui,sans-serif">
              {office.city}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

function MapEmbed({ office }: { office: typeof OFFICES[number] }) {
  return (
    <div className="relative" style={{ height: 320, background: '#e5e8eb' }}>
      <iframe
        title={`${office.city} office map`}
        src={office.embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0, display: 'block', width: '100%', height: '100%' }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <a
        href={office.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 right-3 flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-lg shadow-lg text-white"
        style={{ background: 'var(--brand)', zIndex: 20 }}
      >
        <MapPin size={12} /> Open in Google Maps <ExternalLink size={10} />
      </a>
    </div>
  )
}

export default function ContactUs() {
  const [activeOffice, setActiveOffice] = useState(0)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' })

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  return (
    <main>
      <PageBanner
        title="Contact Us"
        image="https://tipcoengineering.com/public/uploads/banner_contact.jpg"
        crumbs={[{ label: 'Contact Us' }]}
      />

      {/* ══ WORLD MAP SECTION ══════════════════════════════════════
          Mobile:  text block stacked above the map
          Desktop: text panel overlaid absolutely on left of map      */}
      <section className="relative w-full overflow-hidden" style={{ background: '#f0f2f4' }}>

        {/* Mobile text — only visible below md */}
        <div className="md:hidden px-5 py-8" style={{ background: '#fff' }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--brand)' }}>Our Locations</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Tipco offices<br />across India</h2>
          <p className="text-sm text-gray-500 mb-4">Manufacturing hub in Sonipat with a branch in Pune.</p>
          <div className="flex gap-2">
            {OFFICES.map((o, i) => (
              <button
                key={o.id}
                onClick={() => setActiveOffice(i)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded text-sm font-semibold transition-all"
                style={activeOffice === i
                  ? { background: 'var(--brand)', color: '#fff' }
                  : { background: '#f0f0f0', color: '#374151' }}
              >
                <MapPin size={11} />{o.city}
              </button>
            ))}
          </div>
        </div>

        {/* The SVG map — full width always */}
        <div className="w-full">
          <WorldMap activeOffice={activeOffice} onPinClick={setActiveOffice} />
        </div>

        {/* Desktop overlay panel — hidden on mobile */}
        <div className="hidden md:flex absolute inset-0 items-center pointer-events-none">
          <div
            className="pointer-events-auto ml-10 lg:ml-16 xl:ml-24"
            style={{
              background: 'rgba(255,255,255,0.96)',
              backdropFilter: 'blur(8px)',
              borderRadius: 8,
              padding: '32px 36px',
              maxWidth: 340,
              boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
            }}
          >
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--brand)' }}>
              Our Locations
            </p>
            <h2 className="text-2xl lg:text-[28px] font-bold text-gray-900 leading-tight mb-3">
              Tipco offices<br />across India
            </h2>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Manufacturing hub in Sonipat with a branch presence in Pune — always close to help.
            </p>
            <div className="flex gap-3 flex-wrap">
              {OFFICES.map((o, i) => (
                <button
                  key={o.id}
                  onClick={() => setActiveOffice(i)}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-all rounded"
                  style={activeOffice === i
                    ? { background: 'var(--brand)', color: '#fff' }
                    : { background: '#f0f0f0', color: '#374151' }}
                >
                  <MapPin size={12} />{o.city}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ OFFICE CARDS ══════════════════════════════════════════ */}
      <section className="py-6 md:py-10 bg-gray-50 border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {OFFICES.map((office, i) => (
              <button
                key={office.id}
                onClick={() => setActiveOffice(i)}
                className="text-left rounded-xl border-2 p-4 md:p-6 transition-all duration-200 w-full"
                style={activeOffice === i
                  ? { borderColor: 'var(--brand)', background: '#f0fafa', boxShadow: '0 4px 20px #00787215' }
                  : { borderColor: '#e5e7eb', background: '#fff' }}
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div
                    className="w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: activeOffice === i ? 'var(--brand)' : '#e8f5f5', color: activeOffice === i ? '#fff' : 'var(--brand)' }}
                  >
                    <Building2 size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span
                      className="inline-block text-[10px] md:text-[11px] font-bold px-2 py-0.5 rounded-full mb-1"
                      style={{ background: activeOffice === i ? 'var(--brand)' : '#e8f5f5', color: activeOffice === i ? '#fff' : 'var(--brand)' }}
                    >
                      {office.tag}
                    </span>
                    <h3 className="font-bold text-gray-800 text-base md:text-lg">{office.city}, {office.state}</h3>
                    <p className="text-xs md:text-sm text-gray-500 mt-1 leading-relaxed whitespace-pre-line">{office.address}</p>
                    <a
                      href={office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-2 md:mt-3 text-xs font-bold hover:underline"
                      style={{ color: 'var(--brand)' }}
                      onClick={e => e.stopPropagation()}
                    >
                      <MapPin size={11} /> Get Directions <ExternalLink size={9} />
                    </a>
                  </div>
                  <ChevronRight size={16} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand)', opacity: activeOffice === i ? 1 : 0.3 }} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══ EMBEDDED GOOGLE MAP ═══════════════════════════════════ */}
      <section className="border-t border-gray-200">
        <MapEmbed office={OFFICES[activeOffice]} key={activeOffice} />
      </section>

      {/* ══ CONTACT INFO + FORM ═══════════════════════════════════ */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-12">

            {/* Contact cards */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Get in Touch</h2>
              <p className="text-sm text-gray-500 mb-6">Reach out via phone or email — we'll get back within 24 hours.</p>
              <div className="space-y-3">
                {CONTACT_ITEMS.map(item => (
                  <div key={item.label} className="flex items-center gap-3 p-3 md:p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all">
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-white" style={{ background: 'var(--brand)' }}>
                      <item.icon size={17} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{item.label}</p>
                      {item.href
                        ? <a href={item.href} className="font-semibold text-gray-800 hover:text-brand text-sm truncate block">{item.value}</a>
                        : <p className="font-semibold text-gray-800 text-sm">{item.value}</p>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl p-4 md:p-5 text-white" style={{ background: 'linear-gradient(135deg, var(--brand) 0%, #005a55 100%)' }}>
                <p className="font-bold text-base md:text-lg mb-1">Need a quick response?</p>
                <p className="text-xs md:text-sm opacity-80 mb-4">Call our sales team or drop us a WhatsApp message.</p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  <a href={`tel:${CONTACT.phoneSales.replace(/\s/g,'')}`} className="flex items-center gap-1.5 bg-white text-sm font-semibold px-3 md:px-4 py-2 rounded-lg hover:opacity-90" style={{ color: 'var(--brand)' }}>
                    <Phone size={13} /> Call Now
                  </a>
                  <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-white/15 border border-white/30 text-white text-sm font-semibold px-3 md:px-4 py-2 rounded-lg hover:bg-white/25">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.115 1.527 5.838L.057 23.215a.5.5 0 0 0 .612.64l5.538-1.451A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-5 md:p-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-1">Send us a Message</h2>
              <p className="text-sm text-gray-400 mb-5 md:mb-7">Fill in the form and our team will respond promptly.</p>
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4" style={{ background: '#e6faf8' }}>
                    <CheckCircle size={28} style={{ color: 'var(--brand)' }} />
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg md:text-xl mb-2">Message Sent!</h3>
                  <p className="text-sm text-gray-500 max-w-xs">Thank you. Our team will contact you within 24 business hours.</p>
                  <button onClick={() => { setSent(false); setForm({ name:'', email:'', phone:'', company:'', message:'' }) }} className="mt-5 text-sm font-semibold underline" style={{ color: 'var(--brand)' }}>
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="space-y-3 md:space-y-4" onSubmit={e => { e.preventDefault(); setSent(true) }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Full Name *</label>
                      <input className="form-input" placeholder="John Smith" required minLength={3} value={form.name} onChange={set('name')} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Email *</label>
                      <input className="form-input" type="email" placeholder="you@company.com" required value={form.email} onChange={set('email')} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Phone *</label>
                      <input className="form-input" type="tel" placeholder="+91 98765 43210" required value={form.phone} onChange={set('phone')} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Company</label>
                      <input className="form-input" placeholder="Your company name" value={form.company} onChange={set('company')} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Message *</label>
                    <textarea className="form-input" rows={4} placeholder="Tell us about your requirements…" required minLength={20} value={form.message} onChange={set('message')} />
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg w-full max-w-[280px]">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <input type="checkbox" id="robot" className="w-4 h-4 flex-shrink-0" />
                      <label htmlFor="robot" className="text-sm">I'm not a robot</label>
                      <div className="ml-auto text-xs text-gray-400 text-right leading-tight flex-shrink-0">
                        <div className="font-bold text-gray-500">reCAPTCHA</div>
                        <div>Privacy · Terms</div>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-opacity" style={{ background: 'var(--brand)' }}>
                    <Send size={15} /> Send Message
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
