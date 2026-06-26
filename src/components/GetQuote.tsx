import { useState } from 'react'

export default function GetQuote() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', message: '' })

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  return (
    <section id="get-quote" className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Get Quote Now</h2>
          <div className="flex justify-center mt-2 mb-2">
            <span className="block h-1 w-10 rounded" style={{ background: '#007872' }} />
          </div>
          <p className="text-gray-500 text-sm">We provide best solution for your business</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="form-input" placeholder="Full Name" value={form.name} onChange={set('name')} />
            <input className="form-input" type="email" placeholder="Email Address" value={form.email} onChange={set('email')} />
            <input className="form-input" placeholder="Company Name" value={form.company} onChange={set('company')} />
            <div className="flex gap-2">
              <div className="flex-shrink-0">
                <select className="form-input h-full pr-2" style={{ width: 90 }}>
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                </select>
              </div>
              <input className="form-input flex-1" type="tel" placeholder="Mobile Number" value={form.phone} onChange={set('phone')} />
            </div>
          </div>
          <textarea
            className="form-input mt-4"
            rows={4}
            placeholder="Message"
            value={form.message}
            onChange={set('message')}
          />
          <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded w-fit">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <input type="checkbox" id="robot" className="w-4 h-4" />
              <label htmlFor="robot">I'm not a robot</label>
              <div className="ml-2 text-xs text-gray-400 text-right leading-tight">
                <div className="font-bold text-gray-600">reCAPTCHA</div>
                <div>Privacy · Terms</div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary w-full mt-6 py-3 text-base"
          >
            Get Quote
          </button>
        </div>
      </div>
    </section>
  )
}
