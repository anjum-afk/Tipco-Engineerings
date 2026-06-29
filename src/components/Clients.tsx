const CLIENTS = [
  { id: 12 }, { id: 13 }, { id: 14 }, { id: 15 }, { id: 16 },
  { id: 17 }, { id: 18 }, { id: 19 }, { id: 21 }, { id: 22 },
  { id: 23 }, { id: 24 }, { id: 25 }, { id: 26 }, { id: 27 },
  { id: 28 }, { id: 29 },
]

const ROW1 = CLIENTS.slice(0, 9)
const ROW2 = CLIENTS.slice(9)

function Logo({ c }: { c: { id: number } }) {
  const ext = c.id >= 16 ? 'png' : 'jpg'
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center mx-5"
      style={{ width: '130px', height: '56px' }}
    >
      <img
        src={`https://tipcoengineering.com/public/uploads/client-${c.id}.${ext}`}
        alt={`Client ${c.id}`}
        className="max-h-10 max-w-[110px] w-auto object-contain"
        style={{ filter: 'grayscale(1) opacity(0.55)', transition: 'filter 0.3s' }}
        onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(0) opacity(1)' }}
        onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(1) opacity(0.55)' }}
        loading="lazy"
      />
    </div>
  )
}

export default function Clients() {
  return (
    <section className="py-14 overflow-hidden" style={{ background: 'var(--background)' }}>
      <style>{`
        @keyframes marquee-ltr {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes marquee-rtl {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>

      {/* Header */}
      <div className="text-center mb-10 px-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] mb-2" style={{ color: 'var(--brand)' }}>
          Trusted Worldwide
        </p>
        <h2
          className="font-black mb-3"
          style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', letterSpacing: '-0.02em', color: 'var(--foreground)' }}
        >
          Our Clients
        </h2>
        <div className="flex justify-center">
          <span className="block h-1 w-10 rounded-full" style={{ background: 'var(--brand)' }} />
        </div>
      </div>

      {/* Row 1 — left to right */}
      <div className="overflow-hidden mb-6">
        <div
          className="marquee-track flex"
          style={{ width: 'max-content', animation: 'marquee-ltr 30s linear infinite' }}
        >
          {[...ROW1, ...ROW1].map((c, i) => <Logo key={i} c={c} />)}
        </div>
      </div>

      {/* Row 2 — right to left */}
      <div className="overflow-hidden">
        <div
          className="marquee-track flex"
          style={{ width: 'max-content', animation: 'marquee-rtl 24s linear infinite' }}
        >
          {[...ROW2, ...ROW2].map((c, i) => <Logo key={i} c={c} />)}
        </div>
      </div>
    </section>
  )
}
