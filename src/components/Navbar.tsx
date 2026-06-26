import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import { NAV_LINKS, SOCIAL_LINKS, CONTACT, type NavLinkItem } from '../data/site'

const LOGO = 'https://tipcoengineering.com/public/uploads/Tipco.png'
const PROFILE = 'https://tipcoengineering.com/assets/images/profile.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)          // mobile drawer
  const [expanded, setExpanded] = useState<string | null>(null) // accordion in drawer
  const location = useLocation()

  // Close the drawer whenever the route changes
  useEffect(() => {
    setOpen(false)
    setExpanded(null)
  }, [location.pathname])

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="sticky top-0 z-[200] bg-white shadow-md">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex-shrink-0">
          <img src={LOGO} alt="Tipco Engineering" className="h-9 md:h-10 w-auto" />
        </Link>

        {/* ── Desktop nav ─────────────────────────────────────── */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {NAV_LINKS.map(l => <DesktopNavItem key={l.label} item={l} />)}
          <Link to="/contact-us" className="btn btn-primary text-sm px-5 py-2 rounded">
            Get Quote
          </Link>
        </nav>

        {/* ── Mobile hamburger ────────────────────────────────── */}
        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* ── Mobile off-canvas drawer ──────────────────────────── */}
      {/* Backdrop */}
      <div
        className={`lg:hidden fixed inset-0 z-[300] bg-black/50 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setOpen(false)}
      />
      {/* Panel */}
      <aside
        className={`lg:hidden fixed top-0 left-0 z-[310] h-full w-[300px] max-w-[85vw] bg-white shadow-2xl flex flex-col transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Profile header */}
        <div className="relative flex items-center gap-3 bg-gray-100 px-5 py-5">
          <img src={PROFILE} alt="" className="w-14 h-14 rounded-full object-cover" />
          <div>
            <div className="font-bold text-gray-800 text-lg leading-tight">Guest</div>
            <div className="text-sm text-gray-500">
              <Link to="/login" className="hover:text-brand">Login</Link>
              {' / '}
              <Link to="/register" className="hover:text-brand">SignUp</Link>
            </div>
          </div>
          <button
            className="absolute top-3 right-3 text-gray-600 hover:text-brand"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable nav links */}
        <nav className="flex-1 overflow-y-auto">
          <ul>
            {NAV_LINKS.map(l => (
              <DrawerNavItem
                key={l.label}
                item={l}
                expanded={expanded === l.label}
                onToggle={() => setExpanded(e => (e === l.label ? null : l.label))}
                onNavigate={() => setOpen(false)}
              />
            ))}
            <li className="border-b border-gray-100">
              <Link
                to="/login"
                className="block px-5 py-3.5 text-sm font-semibold uppercase tracking-wide text-gray-700 hover:text-brand"
                onClick={() => setOpen(false)}
              >
                Login
              </Link>
            </li>
          </ul>

          {/* Footer: email, social, phone */}
          <div className="px-5 py-5">
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand mb-4 break-all"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-shrink-0 text-brand">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm8 7L4 6v12h16V6l-8 5z" />
              </svg>
              {CONTACT.email}
            </a>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {SOCIAL_LINKS.map(({ href, d, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110"
                  style={{ background: 'var(--brand)' }}
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d={d} /></svg>
                </a>
              ))}
            </div>

            <div className="text-sm text-gray-500">For any Help</div>
            <a href={`tel:${CONTACT.tollFree.replace(/\s/g, '')}`} className="flex items-center gap-2 text-lg font-bold text-gray-800 hover:text-brand">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-brand">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .7-.2 1l-2.3 2.2z" />
              </svg>
              {CONTACT.tollFree}
            </a>
          </div>
        </nav>
      </aside>
    </header>
  )
}

// ── Desktop nav item with hover mega-menu ──────────────────────

function DesktopNavItem({ item }: { item: NavLinkItem }) {
  if (!item.mega) {
    return (
      <NavLink
        to={item.to}
        className={({ isActive }) => `nav-link${isActive ? ' text-brand' : ''}`}
      >
        {item.label}
      </NavLink>
    )
  }

  return (
    <div className="relative group">
      <NavLink
        to={item.to}
        className={({ isActive }) => `nav-link flex items-center gap-1${isActive ? ' text-brand' : ''}`}
      >
        {item.label}
        <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
      </NavLink>

      {/* Mega menu panel */}
      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[250]">
        <div className="bg-white rounded-md shadow-xl border border-gray-100 p-6 grid gap-8" style={{ gridTemplateColumns: `repeat(${item.mega.length}, minmax(180px, 1fr))` }}>
          {item.mega.map(col => (
            <div key={col.title}>
              <Link to={col.titleTo} className="block font-bold text-gray-800 text-sm mb-3 pb-2 border-b-2 border-brand hover:text-brand">
                {col.title}
              </Link>
              <ul className="space-y-2">
                {col.links.map(lnk => (
                  <li key={lnk.label}>
                    <Link to={lnk.to} className="text-sm text-gray-600 hover:text-brand flex items-center gap-1.5 group/link">
                      <ChevronRight size={12} className="text-brand opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      {lnk.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to={col.titleTo} className="text-xs font-semibold text-brand hover:underline">View More →</Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Mobile drawer nav item (accordion) ─────────────────────────

function DrawerNavItem({
  item, expanded, onToggle, onNavigate,
}: {
  item: NavLinkItem
  expanded: boolean
  onToggle: () => void
  onNavigate: () => void
}) {
  if (!item.mega) {
    return (
      <li className="border-b border-gray-100">
        <Link
          to={item.to}
          className="block px-5 py-3.5 text-sm font-semibold uppercase tracking-wide text-gray-700 hover:text-brand"
          onClick={onNavigate}
        >
          {item.label}
        </Link>
      </li>
    )
  }

  return (
    <li className="border-b border-gray-100">
      <button
        className="w-full flex items-center justify-between px-5 py-3.5 text-sm font-semibold uppercase tracking-wide text-gray-700 hover:text-brand"
        onClick={onToggle}
        aria-expanded={expanded}
      >
        {item.label}
        <ChevronRight size={16} className={`transition-transform ${expanded ? 'rotate-90' : ''}`} />
      </button>

      {expanded && (
        <div className="bg-gray-50 pb-2">
          {item.mega.map(col => (
            <div key={col.title} className="px-5 py-2">
              <Link
                to={col.titleTo}
                className="block font-semibold text-gray-700 text-[13px] mb-1.5 hover:text-brand"
                onClick={onNavigate}
              >
                {col.title}
              </Link>
              <ul className="pl-3 space-y-1.5 border-l border-gray-200">
                {col.links.map(lnk => (
                  <li key={lnk.label}>
                    <Link
                      to={lnk.to}
                      className="block text-[13px] text-gray-500 hover:text-brand"
                      onClick={onNavigate}
                    >
                      {lnk.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </li>
  )
}
