import { useState, useEffect, useCallback } from 'react'

const TESTIMONIALS = [
  {
    img: 'https://tipcoengineering.com/public/uploads/download__2_-removebg-preview.png',
    quote: 'The service and technical assistance offered by Tipco Engineering is excellent. When contacting Tipco Engineering, the service team is quick to respond and very knowledgeable…..',
    name: 'Arya Sahani',
  },
  {
    img: 'https://tipcoengineering.com/public/uploads/download__2_-removebg-preview.png',
    quote: 'It has been a pleasure doing business with you and Tipco Engineering and we look forward to the possibility of another purchase in the future. I would feel quite comfortable in recommending Tipco Engineering equipment..',
    name: 'Rajat Shabharwal',
  },
  {
    img: 'https://tipcoengineering.com/public/uploads/download__2_-removebg-preview.png',
    quote: 'The machine has performs flawlessly since installation and is capable of outperforming the specs that were guaranteed...',
    name: 'Mayank Singh',
  },
]

export default function Testimonials() {
  const [cur, setCur] = useState(0)
  const n = TESTIMONIALS.length
  const next = useCallback(() => setCur(c => (c + 1) % n), [n])

  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  const t = TESTIMONIALS[cur]

  return (
    <section
      className="py-20 relative text-white"
      style={{
        backgroundImage: 'url(https://tipcoengineering.com/assets/demos/parallax_02.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0" style={{ background: 'rgba(8,30,30,0.84)' }} />
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <div className="text-6xl font-serif leading-none mb-2" style={{ color: '#007872' }}>"</div>
        <img
          src={t.img}
          alt={t.name}
          className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4"
          style={{ borderColor: '#007872' }}
        />
        <p className="text-gray-200 text-sm md:text-base leading-relaxed italic mb-6">{t.quote}</p>
        <h4 className="font-bold text-lg" style={{ color: '#4ec159' }}>{t.name}</h4>
        <div className="flex justify-center gap-2 mt-5">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCur(i)}
              className="w-2.5 h-2.5 rounded-full transition-all"
              style={{ background: i === cur ? '#007872' : 'rgba(255,255,255,0.35)' }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
