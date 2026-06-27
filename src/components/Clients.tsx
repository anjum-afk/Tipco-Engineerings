const CLIENTS = [
  { id: 12 }, { id: 13 }, { id: 14 }, { id: 15 }, { id: 16 },
  { id: 17 }, { id: 18 }, { id: 19 }, { id: 21 }, { id: 22 },
  { id: 23 }, { id: 24 }, { id: 25 }, { id: 26 }, { id: 27 },
  { id: 28 }, { id: 29 },
]

export default function Clients() {
  return (
    <section
      className="py-14 relative"
      style={{
        backgroundImage: 'url(https://tipcoengineering.com/assets/demos/parallax_03.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0" style={{ background: 'rgba(15,30,30,0.82)' }} />
      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">Our Clients</h2>
        <div className="flex justify-center mb-8">
          <span className="block h-1 w-10 rounded" style={{ background: '#007872' }} />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4">
          {CLIENTS.map(c => {
            const ext = c.id >= 16 ? 'png' : 'jpg'
            return (
              <div key={c.id}
                   className="bg-white rounded flex items-center justify-center p-2 h-14 sm:h-16">
                <img
                  src={`https://tipcoengineering.com/public/uploads/client-${c.id}.${ext}`}
                  alt={`Client ${c.id}`}
                  className="max-h-10 max-w-full object-contain"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
