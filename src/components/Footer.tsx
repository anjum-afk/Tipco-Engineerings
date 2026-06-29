import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'

const WA_ICON = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.115 1.527 5.838L.057 23.215a.5.5 0 0 0 .612.64l5.538-1.451A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z'

const SOCIAL_LINKS = [
  {
    href: 'https://www.facebook.com/TipcoEngineeringIndia/', label: 'Facebook', color: '#1877F2',
    d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  },
  {
    href: 'https://www.instagram.com/tipcoengineering/', label: 'Instagram', color: '#E1306C',
    d: 'M9 2H15a7 7 0 0 1 7 7v6a7 7 0 0 1-7 7H9A7 7 0 0 1 2 15V9a7 7 0 0 1 7-7zm0 2a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5H9zm7.5 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10A5 5 0 0 1 12 7zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
  },
  {
    href: 'https://www.linkedin.com/company/tipcoengineering/', label: 'LinkedIn', color: '#0A66C2',
    d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  },
  {
    href: 'https://www.youtube.com/@tipcoengineering', label: 'YouTube', color: '#FF0000',
    d: 'M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z',
  },
  {
    href: 'https://api.whatsapp.com/send/?phone=+918826176988', label: 'WhatsApp', color: '#25D366',
    d: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.115 1.527 5.838L.057 23.215a.5.5 0 0 0 .612.64l5.538-1.451A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z',
  },
  {
    href: 'mailto:mail@tipcoengineering.com', label: 'Email', color: 'var(--brand)',
    d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm8 7L4 6v12h16V6l-8 5z',
  },
]

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-white font-bold text-base mb-4 pb-2 border-b border-gray-700">{title}</h3>
      {children}
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li className="mb-2">
      <Link to={href} className="text-gray-400 hover:text-white text-sm transition-colors">
        {children}
      </Link>
    </li>
  )
}

export default function Footer() {
  return (
    <footer style={{ background: '#0d1f1f' }}>
      <div className="max-w-[1280px] mx-auto px-6 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {/* About */}
          <div className="col-span-2 lg:col-span-1">
            <img src="/img/logo/tipco-logo.png" alt="Tipco Engineering" className="h-10 mb-4 rounded px-2 py-1 w-fit" style={{ background: '#fff' }} />
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Tipco Engineering India Pvt. Ltd. — manufacturers of industrial process plants and machinery for the Chemical, Paint, Ink, Pharma and Food industries.
            </p>
            <div className="flex flex-wrap gap-2">
              {SOCIAL_LINKS.map(({ href, d, label, color }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                   className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 shadow-sm group"
                   style={{ background: 'rgba(255,255,255,0.08)' }}
                   onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = color }}
                   onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)' }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d={d} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Information */}
          <FooterCol title="Information">
            <ul>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/video-gallery">Videos</FooterLink>
              <FooterLink href="/catalogue">Catalogue</FooterLink>
              <FooterLink href="/event">Events</FooterLink>
              <FooterLink href="/photo-gallery">Company Gallery</FooterLink>
            </ul>
          </FooterCol>

          {/* Quick Link */}
          <FooterCol title="Quick Links">
            <ul>
              <FooterLink href="/about-us">About Us</FooterLink>
              <FooterLink href="/contact-us">Contact Us</FooterLink>
              <FooterLink href="/service">Service</FooterLink>
              <FooterLink href="/career">Career</FooterLink>
              <FooterLink href="/partner">Partner With Us</FooterLink>
            </ul>
          </FooterCol>

          {/* Contact */}
          <FooterCol title="Contact Us">
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex gap-2">
                <MapPin size={16} className="text-brand mt-0.5 flex-shrink-0" />
                <span>Plot No. 1689, 1658 SECTOR-38, PHASE-1, RAI, INDUSTRIAL AERA, Sonipat, Haryana 131029</span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone size={16} className="text-brand flex-shrink-0" />
                <a href="tel:18001020229" className="hover:text-white transition-colors">1800 1020 229</a>
              </li>
              <li className="flex gap-2 items-center">
                <Mail size={16} className="text-brand flex-shrink-0" />
                <a href="mailto:mail@tipcoengineering.com" className="hover:text-white transition-colors break-all">mail@tipcoengineering.com</a>
              </li>
              <li className="flex gap-2 items-center">
                <svg viewBox="0 0 24 24" width="16" height="16" className="flex-shrink-0" style={{ fill: '#25D366' }}>
                  <path d={WA_ICON} />
                </svg>
                <a href="https://api.whatsapp.com/send/?phone=+918826176988" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +91 88261 76988 <span className="text-gray-500">(WhatsApp)</span>
                </a>
              </li>
            </ul>
          </FooterCol>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ background: '#071212' }}>
        <div className="max-w-[1280px] mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <div className="flex flex-wrap gap-x-3 gap-y-1 justify-center">
            {([
              ['Privacy Policy', '/privacy-policy'],
              ['Certificate', '/certificates'],
              ['Term & conditions', '/term-condition'],
              ['Faqs', '/faq'],
            ] as const).map(([label, href]) => (
              <Link key={label} to={href} className="hover:text-white transition-colors">{label}</Link>
            ))}
          </div>
          <span>© {new Date().getFullYear()} Tipco Engineering.</span>
        </div>
      </div>
    </footer>
  )
}
