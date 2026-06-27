import { useEffect, useState } from 'react'

const LOGO = 'https://tipcoengineering.com/public/uploads/Tipco.png'

export default function LoadingScreen() {
  const [fading, setFading] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 850)
    const t2 = setTimeout(() => setDone(true), 1350)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (done) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white pointer-events-none select-none"
      style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.5s ease' }}
    >
      <img src={LOGO} alt="Tipco Engineering" className="h-14 w-auto mb-6" />
      <div className="flex items-center gap-1.5">
        {[0, 1, 2].map(i => (
          <span
            key={i}
            className="block w-2 h-2 rounded-full animate-bounce"
            style={{ background: 'var(--brand)', animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  )
}
