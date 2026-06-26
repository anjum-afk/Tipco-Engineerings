import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, ChevronRight } from 'lucide-react'

const SOCIAL_LINKS = [
  { href: 'https://www.facebook.com/TipcoEngineeringIndia/', label: 'Facebook', d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
  { href: 'https://twitter.com/tipcoengineer', label: 'Twitter', d: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' },
  { href: 'https://www.linkedin.com/company/tipcoengineering/', label: 'LinkedIn', d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
  { href: 'https://www.youtube.com/@tipcoengineering', label: 'YouTube', d: 'M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z' },
  { href: 'https://www.instagram.com/tipcoengineering/', label: 'Instagram', d: 'M9 2H15a7 7 0 0 1 7 7v6a7 7 0 0 1-7 7H9A7 7 0 0 1 2 15V9a7 7 0 0 1 7-7zm0 2a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5H9zm7.5 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10A5 5 0 0 1 12 7zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z' },
  { href: 'https://api.whatsapp.com/send/?phone=+918826176988', label: 'WhatsApp', d: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.115 1.527 5.838L.057 23.215a.5.5 0 0 0 .612.64l5.538-1.451A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z' },
  { href: 'mailto:mail@tipcoengineering.com', label: 'Email', d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm8 7L4 6v12h16V6l-8 5z' },
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
      <Link to={href} className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1.5 group">
        <ChevronRight size={13} className="text-brand group-hover:translate-x-0.5 transition-transform" />
        {children}
      </Link>
    </li>
  )
}

export default function Footer() {
  return (
    <footer style={{ background: '#0d1f1f' }}>
      <div className="max-w-[1280px] mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {/* About */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <img src="https://tipcoengineering.com/public/uploads/Tipco.png" alt="Tipco Engineering" className="h-10 mb-4 bg-white rounded px-2 py-1 w-fit" />
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Tipco Engineering India Pvt. Ltd. was incorporated in 2021 primarily manufacturers of process plants and machinery
              required by the Chemical, Polyester Button and related Industries.
            </p>
            <div className="flex flex-wrap gap-2">
              {SOCIAL_LINKS.map(({ href, d, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                   className="w-8 h-8 rounded flex items-center justify-center text-gray-400 hover:text-white transition-all hover:bg-brand"
                   style={{ border: '1px solid #2a4040' }}>
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
          <FooterCol title="Quick Link">
            <ul>
              <FooterLink href="/about-us">About Us</FooterLink>
              <FooterLink href="/contact-us">Contact Us</FooterLink>
              <FooterLink href="/service">Service</FooterLink>
              <FooterLink href="/career">Career</FooterLink>
              <FooterLink href="/partner">Partner With US</FooterLink>
            </ul>
          </FooterCol>

          {/* Products */}
          <FooterCol title="Products">
            <ul>
              <FooterLink href="/application/mill-series">Mill Series</FooterLink>
              <FooterLink href="/application/production-line">Production Line</FooterLink>
              <FooterLink href="/application/laboratory-machines">Laboratory Machines</FooterLink>
              <FooterLink href="/application/homogenizers">Homogenizers</FooterLink>
            </ul>
          </FooterCol>

          {/* Machine Series */}
          <FooterCol title="Machine Series">
            <ul>
              <FooterLink href="/">C- Series</FooterLink>
              <FooterLink href="/">HS- Disperser Series</FooterLink>
              <FooterLink href="/">HS- Homogenizers Series</FooterLink>
              <FooterLink href="/">THM Series</FooterLink>
              <FooterLink href="/">Lab Series</FooterLink>
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
