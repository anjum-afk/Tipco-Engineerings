const STATS = [
  { value: '35+',  label: 'Years of Expertise' },
  { value: '90%',  label: 'Jobs Done In-House' },
  { value: '500+', label: 'Machines Installed' },
  { value: '100%', label: 'Hassle-Free Commissioning' },
]

export default function StatsBar() {
  return (
    <section className="py-12 md:py-16" style={{ background: 'var(--brand)' }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map(stat => (
            <div key={stat.label} className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm md:text-base opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
