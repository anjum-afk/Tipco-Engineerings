import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'

const WA_ICON = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.115 1.527 5.838L.057 23.215a.5.5 0 0 0 .612.64l5.538-1.451A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z'

const SOCIAL_LINKS = [
  { href: 'https://www.facebook.com/TipcoEngineeringIndia/', label: 'Facebook', color: '#1877F2', d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
  { href: 'https://www.instagram.com/tipcoengineering/', label: 'Instagram', color: '#E1306C', d: 'M9 2H15a7 7 0 0 1 7 7v6a7 7 0 0 1-7 7H9A7 7 0 0 1 2 15V9a7 7 0 0 1 7-7zm0 2a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5H9zm7.5 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10A5 5 0 0 1 12 7zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z' },
  { href: 'https://www.linkedin.com/company/tipcoengineering/', label: 'LinkedIn', color: '#0A66C2', d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
  { href: 'https://www.youtube.com/@tipcoengineering', label: 'YouTube', color: '#FF0000', d: 'M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z' },
  { href: 'https://api.whatsapp.com/send/?phone=+918826176988', label: 'WhatsApp', color: '#25D366', d: WA_ICON },
  { href: 'mailto:mail@tipcoengineering.com', label: 'Email', color: '#186B6D', d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm8 7L4 6v12h16V6l-8 5z' },
]

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li className="mb-2.5">
      <Link to={href} className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200 flex items-center gap-2 group">
        <span className="w-1 h-1 rounded-full bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
        {children}
      </Link>
    </li>
  )
}

export default function Footer() {
  return (
    <footer className="relative" style={{ background: '#0a1a1a' }}>

      {/* ── Main body ── */}
      <div className="max-w-[1280px] mx-auto px-6 pb-14 pt-20">

        {/* Two-column: hanging yellow card + link columns */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

          {/* ── Green hanging card (sits INSIDE the dark footer) ──
              · fold tab   = a TRIANGLE div poking out the top edge = the folded peak
              · card body  = a FULL rectangle, deep + soft shadow so it floats/hangs
              The dark footer's top padding leaves room above for the triangle. */}
          <div className="w-full lg:w-[404px] flex-shrink-0 relative z-10">

            {/* Triangular fold tab — a TRIANGLE div attached OUTSIDE the card's top
                edge. Apex points up, base overlaps the card; slightly rotated with its
                own drop-shadow = the folded peak the card hangs from. */}
            <div
              className="absolute pointer-events-none"
              style={{
                left: '44px',
                top: '-46px',
                width: '160px',
                height: '52px',
                clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
                background: 'linear-gradient(180deg, #1ec6b7 0%, #009388 100%)',
                transform: 'rotate(-5deg)',
                filter: 'drop-shadow(0 9px 12px rgba(0,0,0,0.42))',
                zIndex: 2,
              }}
            />

            {/* Card body — full rectangle */}
            <div
              className="relative rounded-lg"
              style={{
                background: 'linear-gradient(150deg, #1f8a8c 0%, #186B6D 55%, #104d4f 100%)',
                boxShadow: '0 34px 62px rgba(0,0,0,0.55), 0 14px 28px rgba(0,0,0,0.42)',
                zIndex: 1,
              }}
            >
              {/* Soft crease shadow the fold casts onto the card top */}
              <div
                className="absolute inset-x-5 top-0 h-7 pointer-events-none rounded-t-lg"
                style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.20), rgba(0,0,0,0))' }}
              />
            <div className="relative z-10 p-8">
              {/* Logo */}
              <div className="inline-flex items-center rounded-xl px-3 py-2 mb-5" style={{ background: 'rgba(255,255,255,0.15)' }}>
                <img src="/img/logo/tipco-logo.png" alt="Tipco Engineering" className="h-9 w-auto object-contain" />
              </div>

              {/* Heading */}
              <h2 className="font-display font-bold text-2xl leading-snug mb-3" style={{ color: '#ffffff' }}>
                Tipco Engineering
              </h2>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.72)' }}>
                Tipco Engineering India Pvt. Ltd. — manufacturers of industrial process
                plants and machinery for the Chemical, Paint, Ink, Pharma and Food
                industries.
              </p>

              {/* Divider */}
              <div className="w-10 h-0.5 rounded-full mb-6" style={{ background: 'rgba(255,255,255,0.25)' }} />

              {/* Follow us */}
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2.5" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Follow us
              </p>
              <div className="flex flex-wrap gap-2">
                {SOCIAL_LINKS.map(({ href, d, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{ background: 'rgba(255,255,255,0.15)', color: '#ffffff' }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.background = color
                      el.style.color = '#fff'
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.background = 'rgba(255,255,255,0.15)'
                      el.style.color = '#ffffff'
                    }}
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d={d} fillRule="evenodd" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>{/* /content */}
            </div>{/* /card body */}
          </div>

          {/* ── Right: link columns ──
              pt-10 on desktop gives space above so columns align nicely next to the card */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-2 lg:pt-14">

            {/* Information */}
            <div>
              <h3 className="text-white font-bold text-xs uppercase tracking-[0.18em] mb-5 pb-2 border-b border-white/10">
                Information
              </h3>
              <ul>
                <FooterLink href="/blog">Blog</FooterLink>
                <FooterLink href="/video-gallery">Videos</FooterLink>
                <FooterLink href="/catalogue">Catalogue</FooterLink>
                <FooterLink href="/event">Events</FooterLink>
                <FooterLink href="/photo-gallery">Company Gallery</FooterLink>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-xs uppercase tracking-[0.18em] mb-5 pb-2 border-b border-white/10">
                Quick Links
              </h3>
              <ul>
                <FooterLink href="/about-us">About Us</FooterLink>
                <FooterLink href="/contact-us">Contact Us</FooterLink>
                <FooterLink href="/service">Service</FooterLink>
                <FooterLink href="/career">Career</FooterLink>
                <FooterLink href="/partner">Partner With Us</FooterLink>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold text-xs uppercase tracking-[0.18em] mb-5 pb-2 border-b border-white/10">
                Contact Us
              </h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex gap-2.5">
                  <MapPin size={14} className="flex-shrink-0 mt-0.5" style={{ color: '#f59e0b' }} />
                  <span className="leading-relaxed">Plot No. 1689, 1658 Sector-38, Phase-1, Rai Industrial Area, Sonipat, Haryana 131029</span>
                </li>
                <li className="flex gap-2.5 items-center">
                  <Phone size={14} className="flex-shrink-0" style={{ color: '#f59e0b' }} />
                  <a href="tel:18001020229" className="hover:text-white transition-colors">1800 1020 229</a>
                </li>
                <li className="flex gap-2.5 items-center">
                  <Mail size={14} className="flex-shrink-0" style={{ color: '#f59e0b' }} />
                  <a href="mailto:mail@tipcoengineering.com" className="hover:text-white transition-colors break-all">
                    mail@tipcoengineering.com
                  </a>
                </li>
                <li className="flex gap-2.5 items-center">
                  <svg viewBox="0 0 24 24" width="14" height="14" className="flex-shrink-0" style={{ fill: '#25D366' }}>
                    <path d={WA_ICON} fillRule="evenodd" />
                  </svg>
                  <a href="https://api.whatsapp.com/send/?phone=+918826176988" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    +91 88261 76988 <span className="text-gray-600 ml-1">(WhatsApp)</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#060f0f' }}>
        <div className="max-w-[1280px] mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center">
            {([
              ['Privacy Policy',      '/privacy-policy'],
              ['Certificate',         '/certificates'],
              ['Terms & Conditions',  '/term-condition'],
              ['FAQs',                '/faq'],
            ] as const).map(([label, href]) => (
              <Link key={label} to={href} className="hover:text-amber-400 transition-colors">{label}</Link>
            ))}
          </div>
          <span>© {new Date().getFullYear()} Tipco Engineering India Pvt. Ltd.</span>
        </div>
      </div>
    </footer>
  )
}
