import { useState } from 'react'
import { CONTACT } from '../data/site'

const INFO_LINES = [
  { label: 'Phone', value: CONTACT.tollFree },
  { label: 'Email', value: CONTACT.email },
  { label: 'Works', value: CONTACT.address },
  { label: 'Hours', value: 'Mon–Sat, 9:30–18:30 IST' },
]

export default function GetQuote() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', details: '' })
  const [submitted, setSubmitted] = useState(false)

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="get-quote" className="relative overflow-hidden text-white" style={{ minHeight: '620px' }}>
      {/* Full-bleed background photo — spans 100% of the page width, not just the container */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://pixnio.com/free-images/2017/03/24/2017-03-24-09-19-52-1536x1024.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Scrim — dark enough on the left for text, clear enough on the right to see the photo behind the card;
          tinted brand-teal so the black-and-white photo reads as part of the palette, not just grayscale */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(100deg, rgba(8,24,26,0.94) 0%, rgba(10,40,42,0.75) 38%, rgba(16,60,62,0.35) 62%, rgba(16,60,62,0.12) 78%, rgba(16,60,62,0.1) 100%)',
        }}
      />

      {/* Content — kept at the same contained width as the rest of the page */}
      <div className="relative z-[1] max-w-[1280px] mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10" style={{ minHeight: '420px' }}>

          {/* LEFT — headline, description, contact lines */}
          <div className="flex flex-col justify-between flex-1" style={{ minHeight: '420px' }}>
            <div>
              <h3
                className="font-display font-black leading-[1.2] mb-4"
                style={{ fontSize: 'clamp(24px, 2.8vw, 34px)', letterSpacing: '-0.01em', maxWidth: '420px', color: '#fff' }}
              >
                Tell us what you're building — we'll tell you what it takes to make it.
              </h3>
              <p className="text-[14.5px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '420px' }}>
                Attach a drawing if you have one. If not, describe the part and we'll follow up with questions.
              </p>
            </div>

            <div className="flex flex-col gap-2 text-[13.5px] mt-10 lg:mt-0" style={{ color: 'rgba(255,255,255,0.85)' }}>
              {INFO_LINES.map(line => (
                <div key={line.label} className="flex gap-3">
                  <b className="flex-shrink-0" style={{ width: '64px', color: '#fff' }}>{line.label}</b>
                  <span>{line.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — floating form card */}
          <div
            className="w-full lg:w-[420px] flex-shrink-0 rounded-2xl p-7 sm:p-8"
            style={{ background: 'var(--background)', boxShadow: '0 24px 60px rgba(0,0,0,0.35)' }}
          >
            <div
              className="flex items-center justify-between text-[10.5px] font-bold uppercase tracking-[0.08em] pb-4 mb-5"
              style={{ color: 'var(--foreground-subtle)', borderBottom: '1px solid var(--border)' }}
            >
              <span>Quote Request</span>
              <span>Form TE-QT-01</span>
            </div>

            <form onSubmit={handleSubmit}>
              {[
                { key: 'name' as const, label: 'Name', type: 'text', placeholder: 'Your full name', required: true },
                { key: 'company' as const, label: 'Company', type: 'text', placeholder: 'Company name', required: false },
                { key: 'email' as const, label: 'Email', type: 'email', placeholder: 'you@company.com', required: true },
                { key: 'phone' as const, label: 'Phone / WhatsApp', type: 'tel', placeholder: '+91 98xxx xxxxx', required: true },
              ].map(f => (
                <div className="mb-5" key={f.key}>
                  <label
                    htmlFor={f.key}
                    className="block text-[11px] font-semibold uppercase tracking-[0.05em] mb-2"
                    style={{ color: 'var(--foreground-subtle)' }}
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.key}
                    type={f.type}
                    required={f.required}
                    placeholder={f.placeholder}
                    value={form[f.key]}
                    onChange={set(f.key)}
                    className="w-full bg-transparent text-[14.5px] py-2 outline-none transition-colors"
                    style={{ borderBottom: '1px solid var(--border)', color: 'var(--foreground)' }}
                    onFocus={e => { e.currentTarget.style.borderBottomColor = 'var(--brand)' }}
                    onBlur={e => { e.currentTarget.style.borderBottomColor = 'var(--border)' }}
                  />
                </div>
              ))}

              <div className="mb-6">
                <label
                  htmlFor="details"
                  className="block text-[11px] font-semibold uppercase tracking-[0.05em] mb-2"
                  style={{ color: 'var(--foreground-subtle)' }}
                >
                  Machine &amp; Application
                </label>
                <textarea
                  id="details"
                  rows={3}
                  placeholder="Machine type, material to process, batch size, target fineness..."
                  value={form.details}
                  onChange={set('details')}
                  className="w-full bg-transparent text-[14.5px] py-2 outline-none resize-y transition-colors"
                  style={{ borderBottom: '1px solid var(--border)', color: 'var(--foreground)' }}
                  onFocus={e => { e.currentTarget.style.borderBottomColor = 'var(--brand)' }}
                  onBlur={e => { e.currentTarget.style.borderBottomColor = 'var(--border)' }}
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-[10px] px-6 py-3 text-sm font-semibold text-white transition-all duration-150 hover:-translate-y-px"
                style={{ background: 'var(--brand)', boxShadow: '0 1px 2px rgba(0,0,0,0.08)' }}
              >
                {submitted ? 'Request Sent ✓' : 'Request Quote →'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
