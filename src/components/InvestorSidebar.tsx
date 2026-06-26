import { NavLink } from 'react-router-dom'
import { INVESTOR_LINKS } from '../data/site'

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .7-.2 1l-2.3 2.2z" />
  </svg>
)

const SendIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
)

export default function InvestorSidebar() {
  return (
    <aside className="lg:w-72 flex-shrink-0">
      <div className="rounded-md overflow-hidden border border-gray-200">
        <h3 className="text-white font-bold text-base px-5 py-3.5" style={{ background: 'var(--brand)' }}>
          Investors
        </h3>
        <ul className="bg-white">
          {INVESTOR_LINKS.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `block px-5 py-3 text-sm border-b border-gray-100 transition-colors ${
                    isActive
                      ? 'text-brand font-semibold bg-brand/5'
                      : 'text-gray-600 hover:text-brand hover:bg-gray-50'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Phone contact card */}
        <a
          href="tel:+919996635489"
          className="flex items-center gap-3 px-5 py-4 text-white transition-opacity hover:opacity-90"
          style={{ background: 'var(--brand)' }}
        >
          <div className="w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center flex-shrink-0">
            <PhoneIcon />
          </div>
          <div>
            <p className="text-sm font-semibold leading-tight">Investor Relations</p>
            <span className="text-sm text-white/80">+91 9996635489</span>
          </div>
        </a>

        {/* Email contact card */}
        <a
          href="mailto:inverstors@tipcoengineering.com"
          className="flex items-center gap-3 px-5 py-4 text-white transition-opacity hover:opacity-90"
          style={{ background: '#186b6d' }}
        >
          <div className="w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center flex-shrink-0">
            <SendIcon />
          </div>
          <div>
            <p className="text-sm font-semibold leading-tight">Investor Relations</p>
            <span className="text-xs text-white/80 break-all">inverstors@tipcoengineering.com</span>
          </div>
        </a>
      </div>
    </aside>
  )
}
