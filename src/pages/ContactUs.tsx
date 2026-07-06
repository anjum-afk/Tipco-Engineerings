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
      style={{ background: 'var(--surface)' }}
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
              <circle cx={px} cy={py} r={14} fill="none" stroke="#186B6D" strokeWidth={1.5} opacity={0.3}>
                <animate attributeName="r" values="8;20;8" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite" />
              </circle>
            )}
            <path
              d={`M${px},${py} C${px-7},${py-8} ${px-7},${py-22} ${px},${py-26} C${px+7},${py-22} ${px+7},${py-8} ${px},${py}Z`}
              fill={active ? '#186B6D' : '#2d4a4a'}
              stroke="#fff"
              strokeWidth={1.2}
            />
            <circle cx={px} cy={py - 18} r={3.5} fill="#fff" />
            <rect x={px - 28} y={py - 44} width={56} height={16} rx={4} fill={active ? '#186B6D' : '#2d4a4a'} />
            <polygon points={`${px-5},${py-28} ${px+5},${py-28} ${px},${py-22}`} fill={active ? '#186B6D' : '#2d4a4a'} />
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
    <div className="relative rounded-2xl overflow-hidden" style={{ height: 340, background: 'var(--surface-raised)' }}>
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
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' })

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      const res = await fetch(`${import.meta.env.VITE_STRAPI_URL}/api/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: form }),
      })
      if (!res.ok) throw new Error(`${res.status}`)
      setSent(true)
    } catch {
      setError('Could not send your message. Please try again or call us directly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <main>
      <PageBanner
        title="Contact Us"
        image="https://tipcoengineering.com/public/uploads/banner_contact.jpg"
        crumbs={[{ label: 'Contact Us' }]}
      />

      {/* ══ SECTION 1: GET IN TOUCH (Contact info + Form) ═══════ */}
      <section id="get-in-touch" className="py-12 md:py-16" style={{ background: 'var(--background)' }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

          {/* Section label */}
          <div className="mb-8 md:mb-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] mb-2" style={{ color: 'var(--brand)' }}>
              Reach Out
            </p>
            <h2 className="text-2xl md:text-3xl font-black" style={{ color: 'var(--foreground)', letterSpacing: '-0.02em' }}>
              Get in Touch
            </h2>
            <div className="h-1 w-10 rounded-full mt-3" style={{ background: 'var(--brand)' }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-14">

            {/* Left: contact info cards */}
            <div>
              <p className="text-sm mb-6" style={{ color: 'var(--foreground-muted)' }}>
                Reach out via phone or email — we'll get back within 24 hours.
              </p>
              <div className="space-y-3">
                {CONTACT_ITEMS.map(item => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-4 rounded-xl transition-all"
                    style={{ border: '1px solid var(--border)', background: 'var(--surface)' }}
                  >
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-white" style={{ background: 'var(--brand)' }}>
                      <item.icon size={17} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-wide mb-0.5" style={{ color: 'var(--foreground-subtle)' }}>{item.label}</p>
                      {item.href
                        ? <a href={item.href} className="font-semibold text-sm truncate block hover:underline" style={{ color: 'var(--foreground)' }}>{item.value}</a>
                        : <p className="font-semibold text-sm" style={{ color: 'var(--foreground)' }}>{item.value}</p>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick response CTA */}
              <div className="mt-6 rounded-2xl p-5 text-white" style={{ background: 'linear-gradient(135deg, var(--brand) 0%, #005a55 100%)' }}>
                <p className="font-bold text-base mb-1">Need a quick response?</p>
                <p className="text-xs opacity-80 mb-4">Call our sales team or drop us a WhatsApp message.</p>
                <div className="flex flex-wrap gap-2">
                  <a href={`tel:${CONTACT.phoneSales.replace(/\s/g,'')}`}
                    className="flex items-center gap-1.5 bg-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90"
                    style={{ color: 'var(--brand)' }}>
                    <Phone size={13} /> Call Now
                  </a>
                  <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-white/15 border border-white/30 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-white/25">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.115 1.527 5.838L.057 23.215a.5.5 0 0 0 .612.64l5.538-1.451A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Right: message form */}
            <div className="rounded-2xl p-6 md:p-8" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--foreground)' }}>Send us a Message</h3>
              <p className="text-sm mb-6" style={{ color: 'var(--foreground-muted)' }}>Fill in the form and our team will respond promptly.</p>
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ background: 'var(--brand-light)' }}>
                    <CheckCircle size={28} style={{ color: 'var(--brand)' }} />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--foreground)' }}>Message Sent!</h3>
                  <p className="text-sm max-w-xs" style={{ color: 'var(--foreground-muted)' }}>Thank you. Our team will contact you within 24 business hours.</p>
                  <button onClick={() => { setSent(false); setForm({ name:'', email:'', phone:'', company:'', message:'' }) }}
                    className="mt-5 text-sm font-semibold underline" style={{ color: 'var(--brand)' }}>
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: 'var(--foreground-muted)' }}>Full Name *</label>
                      <input className="form-input" placeholder="John Smith" required minLength={3} value={form.name} onChange={set('name')} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: 'var(--foreground-muted)' }}>Email *</label>
                      <input className="form-input" type="email" placeholder="you@company.com" required value={form.email} onChange={set('email')} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: 'var(--foreground-muted)' }}>Phone *</label>
                      <input className="form-input" type="tel" placeholder="+91 98765 43210" required value={form.phone} onChange={set('phone')} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: 'var(--foreground-muted)' }}>Company</label>
                      <input className="form-input" placeholder="Your company name" value={form.company} onChange={set('company')} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: 'var(--foreground-muted)' }}>Message *</label>
                    <textarea className="form-input" rows={4} placeholder="Tell us about your requirements…" required minLength={20} value={form.message} onChange={set('message')} />
                  </div>
                  <div className="p-3 rounded-lg" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
                    <div className="flex items-center gap-3 text-sm" style={{ color: 'var(--foreground-muted)' }}>
                      <input type="checkbox" id="robot" className="w-4 h-4 flex-shrink-0" />
                      <label htmlFor="robot" className="text-sm cursor-pointer">I'm not a robot</label>
                      <div className="ml-auto text-xs text-right leading-tight flex-shrink-0" style={{ color: 'var(--foreground-subtle)' }}>
                        <div className="font-bold">reCAPTCHA</div>
                        <div>Privacy · Terms</div>
                      </div>
                    </div>
                  </div>
                  {error && (
                    <p className="text-sm font-medium" style={{ color: '#dc2626' }}>{error}</p>
                  )}
                  <button type="submit" disabled={sending}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ background: 'var(--brand)' }}>
                    <Send size={15} /> {sending ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ══ DIVIDER ═══════════════════════════════════════════════ */}
      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* ══ SECTION 2: LOCATIONS ══════════════════════════════════ */}
      <section id="locations" className="py-12 md:py-16" style={{ background: 'var(--surface)' }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

          {/* Section label */}
          <div className="mb-8 md:mb-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] mb-2" style={{ color: 'var(--brand)' }}>
              Where We Are
            </p>
            <h2 className="text-2xl md:text-3xl font-black" style={{ color: 'var(--foreground)', letterSpacing: '-0.02em' }}>
              Our Locations
            </h2>
            <div className="h-1 w-10 rounded-full mt-3" style={{ background: 'var(--brand)' }} />
          </div>

          {/* Office cards + map side by side on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-6 lg:gap-8 items-start">

            {/* Office cards */}
            <div className="flex flex-col gap-4">
              {OFFICES.map((office, i) => (
                <button
                  key={office.id}
                  onClick={() => setActiveOffice(i)}
                  className="text-left rounded-2xl border-2 p-5 transition-all duration-200 w-full"
                  style={activeOffice === i
                    ? { borderColor: 'var(--brand)', background: 'var(--background)', boxShadow: '0 4px 20px rgba(0,120,114,0.12)' }
                    : { borderColor: 'var(--border)', background: 'var(--background)' }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: activeOffice === i ? 'var(--brand)' : 'var(--surface)', color: activeOffice === i ? '#fff' : 'var(--brand)' }}
                    >
                      <Building2 size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span
                        className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mb-1.5"
                        style={{ background: activeOffice === i ? 'var(--brand)' : 'var(--surface-raised)', color: activeOffice === i ? '#fff' : 'var(--brand)' }}
                      >
                        {office.tag}
                      </span>
                      <h3 className="font-bold text-base mb-1" style={{ color: 'var(--foreground)' }}>{office.city}, {office.state}</h3>
                      <p className="text-xs leading-relaxed whitespace-pre-line" style={{ color: 'var(--foreground-muted)' }}>{office.address}</p>
                      <a
                        href={office.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-2 text-xs font-bold hover:underline"
                        style={{ color: 'var(--brand)' }}
                        onClick={e => e.stopPropagation()}
                      >
                        <MapPin size={11} /> Get Directions <ExternalLink size={9} />
                      </a>
                    </div>
                    <ChevronRight size={16} className="flex-shrink-0 mt-1"
                      style={{ color: 'var(--brand)', opacity: activeOffice === i ? 1 : 0.3 }} />
                  </div>
                </button>
              ))}
            </div>

            {/* Embedded map */}
            <MapEmbed office={OFFICES[activeOffice]} key={activeOffice} />
          </div>

          {/* World map */}
          <div className="mt-10 rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
            <div className="px-5 pt-5 pb-3" style={{ background: 'var(--background)' }}>
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--foreground-subtle)' }}>
                Global Presence
              </p>
              <h3 className="text-base font-bold mt-0.5" style={{ color: 'var(--foreground)' }}>
                Tipco offices across India
              </h3>
            </div>
            <WorldMap activeOffice={activeOffice} onPinClick={setActiveOffice} />
          </div>

        </div>
      </section>
    </main>
  )
}
