import { useState } from 'react'
import { X, User, Mail, Phone, Building2, MessageSquare, Send } from 'lucide-react'

const PhoneGlyph = () => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden="true">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .7-.2 1l-2.3 2.2z" />
  </svg>
)

const EnquireGlyph = () => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden="true">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
)

const WhatsAppGlyph = () => (
  <svg viewBox="0 0 32 32" width={20} height={20} fill="currentColor" aria-hidden="true">
    <path d="M16.004 0h-.008C7.174 0 .002 7.174.002 16c0 3.5 1.128 6.743 3.046 9.377L1.05 31.4l6.232-1.992A15.9 15.9 0 0 0 16.004 32C24.83 32 32 24.826 32 16S24.83 0 16.004 0zm9.31 22.6c-.386 1.09-1.92 1.994-3.142 2.258-.836.178-1.928.32-5.604-1.204-4.7-1.948-7.726-6.724-7.962-7.034-.226-.31-1.9-2.53-1.9-4.826s1.166-3.42 1.58-3.89c.386-.434.846-.62 1.166-.62.354 0 .642.004.918.018.36.014.626.034.918.726.386.91 1.3 3.206 1.414 3.44.116.234.192.508.038.818-.154.31-.232.502-.46.772-.226.27-.476.602-.68.81-.226.232-.462.484-.198.93.264.448 1.176 1.94 2.524 3.142 1.736 1.55 3.2 2.03 3.654 2.258.454.226.718.19.98-.116.27-.31 1.14-1.328 1.444-1.784.302-.456.604-.378 1.02-.226.42.15 2.652 1.252 3.106 1.478.454.226.756.34.87.53.116.19.116 1.094-.27 2.184z" />
  </svg>
)

function Field({
  icon: Icon, label, name, type = 'text', required = false, textarea = false,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>
  label: string
  name: string
  type?: string
  required?: boolean
  textarea?: boolean
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-1">{label}{required && <span className="text-red-500 ml-0.5">*</span>}</label>
      <div className="relative">
        <Icon size={14} className="absolute left-3 top-3 text-gray-400 pointer-events-none" />
        {textarea ? (
          <textarea
            name={name}
            rows={4}
            required={required}
            placeholder={label}
            className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-brand resize-none"
          />
        ) : (
          <input
            type={type}
            name={name}
            required={required}
            placeholder={label}
            className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-brand"
          />
        )}
      </div>
    </div>
  )
}

function EnquiryDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[490] bg-black/40 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-[500] h-full w-full max-w-[420px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5" style={{ background: 'var(--brand)' }}>
          <div>
            <div className="text-white font-bold text-lg leading-tight">Get a Quote</div>
            <div className="text-white/70 text-xs mt-0.5">We'll respond within 24 hours</div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-white/80 hover:text-white hover:bg-white/15 transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'var(--brand-light)' }}>
                <Send size={28} style={{ color: 'var(--brand)' }} />
              </div>
              <div>
                <div className="text-lg font-bold text-gray-800 mb-1">Enquiry Sent!</div>
                <div className="text-sm text-gray-500">Our team will get back to you within 24 hours.</div>
              </div>
              <button
                onClick={() => { setSubmitted(false); onClose() }}
                className="mt-4 px-6 py-2.5 rounded-lg text-sm font-semibold text-white"
                style={{ background: 'var(--brand)' }}
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Field icon={User} label="Full Name" name="name" required />
              <Field icon={Mail} label="Email Address" name="email" type="email" required />
              <Field icon={Phone} label="Phone Number" name="phone" type="tel" required />
              <Field icon={Building2} label="Company / Organisation" name="company" />
              <Field icon={MessageSquare} label="Message / Enquiry" name="message" textarea required />

              <button
                type="submit"
                className="w-full py-3 rounded-lg text-sm font-bold text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
                style={{ background: 'var(--brand)' }}
              >
                <Send size={15} />
                Send Enquiry
              </button>

              <p className="text-[11px] text-gray-400 text-center">
                By submitting you agree to our{' '}
                <a href="/privacy-policy" className="underline hover:text-gray-600">Privacy Policy</a>.
              </p>
            </form>
          )}
        </div>
      </aside>
    </>
  )
}

export default function FloatingButtons() {
  const [enquiryOpen, setEnquiryOpen] = useState(false)

  return (
    <>
      {/* Vertical Enquiry tab — desktop only */}
      <button
        onClick={() => setEnquiryOpen(true)}
        aria-label="Open enquiry form"
        className="fixed z-[400] hidden md:flex items-center justify-center font-bold text-sm tracking-wide text-white shadow-md transition-colors cursor-pointer"
        style={{
          right: 0,
          top: '50%',
          transform: 'translateY(-50%) rotate(180deg)',
          writingMode: 'vertical-rl',
          background: '#e74c3c',
          padding: '16px 8px',
          borderRadius: '0 6px 6px 0',
          border: 'none',
        }}
      >
        ENQUIRY
      </button>

      {/* Mobile sticky bottom bar — Call / Enquire / WhatsApp */}
      <div className="fixed bottom-0 left-0 right-0 z-[450] md:hidden flex border-t border-white/10">
        <a
          href="tel:+918826176988"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-white text-xs font-semibold"
          style={{ background: 'var(--brand)' }}
        >
          <PhoneGlyph />
          Call
        </a>
        <div className="w-px bg-white/20" />
        <button
          onClick={() => setEnquiryOpen(true)}
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-white text-xs font-semibold border-none cursor-pointer"
          style={{ background: '#186b6d' }}
        >
          <EnquireGlyph />
          Enquire
        </button>
        <div className="w-px bg-white/20" />
        <a
          href="https://api.whatsapp.com/send/?phone=+918826176988&text=Hello I have a question about tipco engineering&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-white text-xs font-semibold"
          style={{ background: '#25D366' }}
        >
          <WhatsAppGlyph />
          WhatsApp
        </a>
      </div>

      <EnquiryDrawer open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </>
  )
}
