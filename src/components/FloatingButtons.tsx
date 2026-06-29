import { useState, useRef, useEffect } from 'react'
import { X, User, Mail, Phone, Building2, MessageSquare, Send, Bot, ChevronRight } from 'lucide-react'

// ── Enquiry form ──────────────────────────────────────────────────────────────

function Field({
  icon: Icon, label, name, type = 'text', required = false, textarea = false,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>
  label: string; name: string; type?: string; required?: boolean; textarea?: boolean
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-1">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <div className="relative">
        <Icon size={14} className="absolute left-3 top-3 text-gray-400 pointer-events-none" />
        {textarea ? (
          <textarea name={name} rows={4} required={required} placeholder={label}
            className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-brand resize-none" />
        ) : (
          <input type={type} name={name} required={required} placeholder={label}
            className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-brand" />
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
      <div className={`fixed inset-0 z-[490] bg-black/40 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={onClose} />
      <aside className={`fixed top-0 right-0 z-[500] h-full w-full max-w-[420px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between px-6 py-5" style={{ background: 'var(--brand)' }}>
          <div>
            <div className="text-white font-bold text-lg leading-tight">Get a Quote</div>
            <div className="text-white/70 text-xs mt-0.5">We'll respond within 24 hours</div>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-lg text-white/80 hover:text-white hover:bg-white/15 transition-colors" aria-label="Close">
            <X size={18} />
          </button>
        </div>
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
              <button onClick={() => { setSubmitted(false); onClose() }} className="mt-4 px-6 py-2.5 rounded-lg text-sm font-semibold text-white" style={{ background: 'var(--brand)' }}>
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
              <button type="submit" className="w-full py-3 rounded-lg text-sm font-bold text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-90" style={{ background: 'var(--brand)' }}>
                <Send size={15} /> Send Enquiry
              </button>
              <p className="text-[11px] text-gray-400 text-center">
                By submitting you agree to our <a href="/privacy-policy" className="underline hover:text-gray-600">Privacy Policy</a>.
              </p>
            </form>
          )}
        </div>
      </aside>
    </>
  )
}

// ── AI Chat ───────────────────────────────────────────────────────────────────

interface Msg { role: 'ai' | 'user'; text: string }

const QUICK = ['Bead mills', 'Dispersers', 'Get a quote', 'Contact us', 'Industries served']

function getReply(input: string): string {
  const q = input.toLowerCase()
  if (q.includes('hello') || q.includes('hi') || q.includes('hey'))
    return "Hello! Welcome to Tipco Engineering 👋 I can help with product info, industries we serve, quotes, and more. What would you like to know?"
  if (q.includes('bead') || q.includes('mill'))
    return "Our bead mills deliver nano to micron-range particle size reduction for paint, ink, and chemical applications. We offer horizontal bead mills, basket mills, dyno mills, and attritor mills. Would you like details on a specific type?"
  if (q.includes('disperser'))
    return "Tipco dispersers include high-speed, hydraulic-lift, and gripper models — perfect for paint, coating, and adhesive manufacturing. All are built for long life with minimal maintenance."
  if (q.includes('homogeniz'))
    return "Our homogenizers create stable emulsions with precise droplet size control. Ideal for pharma, personal care, and food processing applications."
  if (q.includes('production') || q.includes('turnkey') || q.includes('plant'))
    return "Tipco supplies complete turnkey production lines — from raw material intake to finished product filling — for paint, ink, chemical, and powder industries."
  if (q.includes('quote') || q.includes('price') || q.includes('cost') || q.includes('enquir'))
    return "For a tailored quote, please use our Enquiry form (red tab on the right) or call 1800 1020 229. Our team responds within 24 hours."
  if (q.includes('contact') || q.includes('phone') || q.includes('email') || q.includes('reach'))
    return "📞 1800 1020 229 (toll-free)\n📱 +91 88261 76988 (WhatsApp)\n✉️ mail@tipcoengineering.com\n📍 Sonipat, Haryana & Pune, Maharashtra"
  if (q.includes('industr'))
    return "We serve Paint & Coatings, Printing Inks, Chemicals & Adhesives, Pharma & Personal Care, Defence & Aerospace (DRDO), and Food & FMCG industries."
  if (q.includes('paint'))
    return "For the paint industry we offer dispersers for pigment dispersion, bead mills for fineness control, and complete paint production lines."
  if (q.includes('pharma') || q.includes('medicine'))
    return "Our cGMP-compatible equipment with stainless-steel contact parts meets pharma-grade requirements for mixing, homogenizing, and milling."
  if (q.includes('drdo') || q.includes('defence') || q.includes('defense') || q.includes('aerospace'))
    return "Tipco supplies specialized rocket coating systems and aerospace-grade mixing equipment, working with DRDO and related organisations."
  if (q.includes('location') || q.includes('address') || q.includes('where'))
    return "Our head office is in Sonipat, Haryana (Plot No. 1689, 1658, Sector-38, Phase-1, Rai Industrial Area). We also have a branch in Pune, Maharashtra."
  if (q.includes('experience') || q.includes('year') || q.includes('since'))
    return "Tipco Engineering has 35+ years of experience in industrial machine manufacturing, supplying equipment globally since 1985."
  if (q.includes('thank'))
    return "You're welcome! Feel free to ask anything else, or use the Enquiry form for a detailed quote. 😊"
  return "I can help with Tipco's products, industries, pricing, and contact details. Could you rephrase your question? You can also use the quick options below."
}

function AiChatDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: 'ai', text: "Hi! I'm Tipco's AI assistant. Ask me about our products, industries we serve, or anything else. How can I help?" },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [msgs, typing])

  function send(text: string) {
    if (!text.trim()) return
    const userMsg: Msg = { role: 'user', text: text.trim() }
    setMsgs(m => [...m, userMsg])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMsgs(m => [...m, { role: 'ai', text: getReply(text) }])
    }, 900)
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(input) }
  }

  return (
    <>
      <div className={`fixed inset-0 z-[490] bg-black/40 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={onClose} />
      <aside className={`fixed top-0 right-0 z-[500] h-full w-full max-w-[400px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>

        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4" style={{ background: 'var(--brand)' }}>
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
            <Bot size={18} className="text-white" />
          </div>
          <div className="flex-1">
            <div className="text-white font-bold text-sm leading-tight">Tipco AI Assistant</div>
            <div className="text-white/70 text-[11px] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-300 inline-block" />
              Online · Instant replies
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-lg text-white/80 hover:text-white hover:bg-white/15 transition-colors" aria-label="Close">
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50">
          {msgs.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {m.role === 'ai' && (
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-0.5" style={{ background: 'var(--brand)' }}>
                  <Bot size={13} className="text-white" />
                </div>
              )}
              <div
                className="max-w-[78%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line"
                style={m.role === 'ai'
                  ? { background: '#fff', color: '#1a1a1a', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', borderTopLeftRadius: '4px' }
                  : { background: 'var(--brand)', color: '#fff', borderTopRightRadius: '4px' }}
              >
                {m.text}
              </div>
            </div>
          ))}

          {typing && (
            <div className="flex justify-start">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-0.5" style={{ background: 'var(--brand)' }}>
                <Bot size={13} className="text-white" />
              </div>
              <div className="px-4 py-3 rounded-2xl bg-white shadow-sm" style={{ borderTopLeftRadius: '4px' }}>
                <div className="flex gap-1 items-center h-4">
                  {[0, 1, 2].map(i => (
                    <span key={i} className="w-1.5 h-1.5 rounded-full bg-gray-400 inline-block animate-bounce" style={{ animationDelay: `${i * 150}ms` }} />
                  ))}
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Quick replies */}
        <div className="px-4 py-2 flex gap-2 overflow-x-auto bg-white border-t border-gray-100 scrollbar-hide">
          {QUICK.map(q => (
            <button
              key={q}
              onClick={() => send(q)}
              className="flex-shrink-0 text-[11.5px] font-semibold px-3 py-1.5 rounded-full border transition-colors whitespace-nowrap"
              style={{ borderColor: 'var(--brand)', color: 'var(--brand)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--brand)'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--brand)' }}
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="px-4 py-3 bg-white border-t border-gray-100 flex gap-2">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Type your question…"
            className="flex-1 px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-brand bg-gray-50"
          />
          <button
            onClick={() => send(input)}
            disabled={!input.trim()}
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-opacity disabled:opacity-40 flex-shrink-0"
            style={{ background: 'var(--brand)' }}
          >
            <ChevronRight size={18} className="text-white" />
          </button>
        </div>
      </aside>
    </>
  )
}

// ── Main export ───────────────────────────────────────────────────────────────

export default function FloatingButtons() {
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <>
      {/* Vertical ENQUIRY tab — all devices */}
      <button
        onClick={() => setEnquiryOpen(true)}
        aria-label="Open enquiry form"
        className="fixed z-[400] flex items-center justify-center font-bold text-sm tracking-wide text-white shadow-md transition-colors cursor-pointer"
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

      {/* AI Chat floating button — bottom-left */}
      <button
        onClick={() => setChatOpen(true)}
        aria-label="Chat with AI assistant"
        className="fixed z-[400] bottom-6 left-6 flex items-center gap-2.5 px-4 py-3 rounded-2xl shadow-lg text-white text-sm font-semibold transition-all hover:scale-105 hover:shadow-xl"
        style={{ background: 'var(--brand)' }}
      >
        <Bot size={18} />
        <span>Chat with AI</span>
        <span className="w-2 h-2 rounded-full bg-green-300 flex-shrink-0" />
      </button>

      <EnquiryDrawer open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
      <AiChatDrawer open={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  )
}
