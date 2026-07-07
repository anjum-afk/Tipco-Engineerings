import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { MoveRight, Send } from 'lucide-react'
import { CATEGORIES, NEWS_ARTICLES } from '../data/site'

// ─────────────────────────────────────────────────────────────────────────────
// Footer config — JSON-style: edit content here, not in the JSX below.
// Columns/news pull from the central data module (CMS-ready).
// ─────────────────────────────────────────────────────────────────────────────
const FOOTER = {
  headline: 'Have a Question? Feel Free to Ask',
  blurb:
    "Tell us what you're building and we'll tell you what it takes to make it — a straight answer from real engineers, no sales runaround.",
  newsletterLabel: 'Get Latest Updates & Offers',
  columns: [
    {
      title: 'Products',
      links: CATEGORIES.slice(0, 6).map((c) => ({ label: c.name, href: `/application/${c.slug}` })),
    },
    {
      title: 'Quick Links',
      links: [
        { label: 'About Us', href: '/about-us' },
        { label: 'Contact Us', href: '/contact-us' },
        { label: 'Service', href: '/service' },
        { label: 'Career', href: '/career' },
        { label: 'Partner With Us', href: '/partner' },
        { label: 'Blog', href: '/blog' },
      ],
    },
  ],
  news: NEWS_ARTICLES.slice(0, 6),
  legal: [
    { label: 'Terms of use', href: '/term-condition' },
    { label: 'Privacy policy', href: '/privacy-policy' },
    { label: 'Certificate', href: '/certificates' },
    { label: 'FAQs', href: '/faq' },
  ],
}

const WA_ICON = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.115 1.527 5.838L.057 23.215a.5.5 0 0 0 .612.64l5.538-1.451A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z'

const SOCIALS = [
  { href: 'https://www.facebook.com/TipcoEngineeringIndia/', label: 'Facebook', d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
  { href: 'https://www.instagram.com/tipcoengineering/', label: 'Instagram', d: 'M9 2H15a7 7 0 0 1 7 7v6a7 7 0 0 1-7 7H9A7 7 0 0 1 2 15V9a7 7 0 0 1 7-7zm0 2a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5H9zm7.5 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10A5 5 0 0 1 12 7zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z' },
  { href: 'https://www.linkedin.com/company/tipcoengineering/', label: 'LinkedIn', d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
  { href: 'https://www.youtube.com/@tipcoengineering', label: 'YouTube', d: 'M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z' },
  { href: 'https://api.whatsapp.com/send/?phone=+918826176988', label: 'WhatsApp', d: WA_ICON },
]

// Newsletter validation — React Hook Form + Zod
const newsletterSchema = z.object({
  email: z.email('Please enter a valid email address'),
})
type NewsletterValues = z.infer<typeof newsletterSchema>

// once: false → the animations replay every time the footer scrolls into view
const reveal = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: '-60px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
}

// Card hangs on the pin: drops in, then one pendulum swing (left↔right) that settles.
// Pivot = the pin at top-center (transformOrigin '50% 0'). Replays on each scroll into view.
const cardSwing = {
  initial: { opacity: 0, y: -36, rotate: -7 },
  whileInView: { opacity: 1, y: 0, rotate: [-7, 5.5, -3.5, 2, -1, 0] },
  viewport: { once: false, margin: '-60px' },
  transition: {
    opacity: { duration: 0.45, ease: 'easeOut' as const },
    y: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    rotate: { duration: 2.4, ease: 'easeInOut' as const, times: [0, 0.22, 0.45, 0.66, 0.84, 1] },
  },
}

function NewsletterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<NewsletterValues>({ resolver: zodResolver(newsletterSchema) })

  if (isSubmitSuccessful) {
    return <p className="text-sm font-bold text-white">Thanks — you're subscribed ✓</p>
  }

  return (
    <form onSubmit={handleSubmit(() => {})} noValidate>
      {/* input + button in ONE row like the reference; stacks only below sm */}
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          placeholder="Enter your email"
          {...register('email')}
          className="h-11 min-w-0 flex-1 rounded-md border border-white/20 bg-white px-4 text-sm text-[#151515] outline-none placeholder:text-gray-400 focus:border-white/60"
        />
        <button
          type="submit"
          className="inline-flex h-11 flex-shrink-0 items-center justify-center gap-1.5 rounded-md px-5 text-sm font-bold transition-transform hover:-translate-y-px"
          style={{ background: '#ffffff', color: '#0d4a4c' }}
        >
          <Send size={13} /> Subscribe
        </button>
      </div>
      {errors.email && (
        <p className="mt-2 text-xs font-semibold text-amber-300">{errors.email.message}</p>
      )}
    </form>
  )
}

export default function Footer() {
  return (
    /* Light page background around the floating dark panel — like the reference */
    <footer
      className="overflow-x-clip px-3 pb-6 pt-12 sm:px-4 md:pb-10 lg:px-6 lg:pt-24 max-md:pb-24"
      style={{ background: 'var(--surface)' }}
    >
      {/* ───────── Dark rounded floating panel ───────── */}
      <div
        className="relative mx-auto max-w-[1800px] rounded-[28px]"
        style={{
          /* slate-teal footer — graded around #405657 */
          background: 'linear-gradient(150deg, #4d6567 0%, #405657 45%, #35494a 100%)',
          boxShadow: '0 30px 80px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(255,255,255,0.10)',
        }}
      >
        <div className="relative px-6 pb-7 pt-9 sm:px-10 lg:px-14 lg:pt-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-14">

            {/* ───── Yellow folded card — compact, overlaps the panel's top edge ───── */}
            <motion.div
              {...cardSwing}
              className="relative z-10 -mt-16 w-full flex-shrink-0 lg:-mt-24 lg:w-[400px]"
              style={{
                ['--fold' as string]: 'clamp(48px, 8vw, 76px)',
                transformOrigin: '50% 0px',
              }}
            >
              {/* pin the card hangs from — sits at the pivot point, so it stays put while the card swings */}
              <div className="absolute -top-2.5 left-1/2 z-20 -translate-x-1/2">
                <div
                  className="h-5 w-5 rounded-full"
                  style={{
                    background: 'radial-gradient(circle at 35% 30%, #6b6b6b, #161616 72%)',
                    boxShadow:
                      '0 5px 10px rgba(0,0,0,0.45), 0 1px 2px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.35)',
                  }}
                />
              </div>
              {/* elevation shadow — soft ellipse under the bottom edge so the card reads as
                  floating ABOVE the footer (a full backdrop shadow would show through the glass) */}
              <div
                aria-hidden
                className="absolute -bottom-8 left-1 right-1 h-16"
                style={{
                  background:
                    'radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.35) 40%, transparent 70%)',
                  filter: 'blur(18px)',
                }}
              />
              <div
                className="relative text-white"
                style={{
                  /* dark-green glass — strong contrast against the light panel */
                  background:
                    'linear-gradient(140deg, rgba(16,77,79,0.88) 0%, rgba(10,58,60,0.82) 50%, rgba(6,42,44,0.9) 100%)',
                  backdropFilter: 'blur(16px) saturate(1.25)',
                  WebkitBackdropFilter: 'blur(16px) saturate(1.25)',
                  clipPath:
                    'polygon(0 0, calc(100% - var(--fold)) 0, 100% var(--fold), 100% 100%, 0 100%)',
                  boxShadow: 'inset 0 0 0 1.5px rgba(255,255,255,0.6)',
                }}
              >
                <div className="p-7 sm:p-9">
                  <h2
                    className="font-display text-[26px] font-black leading-[1.18] text-white sm:text-[28px]"
                    style={{ paddingRight: 'calc(var(--fold) - 14px)' }}
                  >
                    {FOOTER.headline}
                  </h2>
                  <p className="mt-4 text-[13.5px] leading-relaxed text-white/75">
                    {FOOTER.blurb}
                  </p>
                  <p className="mb-3 mt-6 text-[13px] font-bold text-white/80">
                    {FOOTER.newsletterLabel}
                  </p>
                  <NewsletterForm />
                </div>
              </div>

              {/* fold flap — darker triangle filling the cut corner */}
              <div
                className="pointer-events-none absolute right-0 top-0"
                style={{
                  width: 'var(--fold)',
                  height: 'var(--fold)',
                  clipPath: 'polygon(0 0, 100% 100%, 0 100%)',
                  background: 'linear-gradient(135deg, rgba(10,58,60,0.95), rgba(6,42,44,0.97))',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  filter: 'drop-shadow(-3px 3px 6px rgba(0,0,0,0.4))',
                }}
              />
            </motion.div>

            {/* ───── Right zone: logo + follow row, then columns ───── */}
            <motion.div
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.1 }}
              className="min-w-0 flex-1 lg:pt-2"
            >
              {/* logo (rendered white, no chip) + follow us on ⟶ plain glyphs */}
              <div className="flex flex-wrap items-center justify-between gap-6">
                {/* dark slate panel — invert + screen renders the logo white */}
                <img
                  src="/img/logo/tipco-logo.png"
                  alt="Tipco Engineering"
                  className="h-10 w-auto object-contain"
                  style={{ filter: 'invert(1) grayscale(1) brightness(1.9)', mixBlendMode: 'screen' }}
                />
                <div className="flex items-center gap-4">
                  <span className="text-[13px] font-medium text-white/70">Follow us on</span>
                  <MoveRight size={22} strokeWidth={1.5} className="text-white/60" />
                  <div className="flex items-center gap-4">
                    {SOCIALS.map(({ href, d, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="text-white/75 transition-colors duration-200 hover:text-white"
                      >
                        <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] fill-current">
                          <path d={d} fillRule="evenodd" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* columns — title-case semibold headings, plain grey links */}
              <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-12 xl:grid-cols-3">
                {FOOTER.columns.map((col) => (
                  <div key={col.title}>
                    <h3 className="mb-5 text-[16.5px] font-semibold text-white">{col.title}</h3>
                    <ul>
                      {col.links.map((l) => (
                        <li key={l.href + l.label}>
                          <Link
                            to={l.href}
                            className="block py-[7px] text-[13.5px] text-white/70 transition-colors duration-200 hover:text-[#8FE0D6]"
                          >
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Latest News — 3×2 thumbnail grid */}
                <div className="sm:col-span-2 xl:col-span-1">
                  <h3 className="mb-5 text-[16.5px] font-semibold text-white">Latest News</h3>
                  <div className="grid max-w-[280px] grid-cols-3 gap-2.5">
                    {FOOTER.news.map((n) => (
                      <Link
                        key={n.slug}
                        to={n.href}
                        aria-label={n.title}
                        className="group relative block overflow-hidden rounded-lg"
                        style={{ aspectRatio: '1 / 1', background: 'rgba(255,255,255,0.12)' }}
                      >
                        <img
                          src={n.img}
                          alt={n.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <span className="absolute inset-0 bg-[#186B6D]/0 transition-colors duration-300 group-hover:bg-[#186B6D]/15" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ───── Bottom row — inside the panel, like the reference ───── */}
          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[#186B6D]/20 pt-5 text-xs text-gray-600 md:flex-row md:pr-44">
            <span>
              © {new Date().getFullYear()} Tipco Engineering India Pvt. Ltd. — All rights reserved.
            </span>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
              {FOOTER.legal.map((l) => (
                <Link key={l.href} to={l.href} className="transition-colors hover:text-[#186B6D]">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
