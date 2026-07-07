interface CardItem {
  category: string
  title: string
  description: string
  image: string
}

interface Group {
  key: string
  label: string
  items: CardItem[]
  imageAspect?: string
}

const GROUPS: Group[] = [
  {
    key: 'industry',
    label: 'Industry',
    items: [
      { category: 'Paint', title: 'Dispersers & Bead Mills', description: 'High-shear dispersion for pigment grind and let-down stages.', image: '/img/applicationimg/paint-industry.jpg' },
      { category: 'Pharma', title: 'Homogenizers & Blenders', description: 'SS 316 contact parts built for hygienic, validated processing.', image: '/img/applicationimg/pharma-industry.jpg' },
      { category: 'Chemical', title: 'Mixing & Production Lines', description: 'Automated setups sized to batch volume and corrosive-media needs.', image: '/img/applicationimg/chemical-industry.jpg' },
      { category: 'Ink', title: 'Bead Mills & Production Lines', description: 'Turnkey ink production lines, from pigment grinding to filling.', image: '/img/applicationimg/ink-industry.jpg' },
    ],
  },
  {
    key: 'production',
    label: 'Production Setup',
    items: [
      { category: 'Paint Production', title: 'Automated Paint Lines', description: 'End-to-end batching, grinding and filling for paint manufacturing.', image: '/img/applicationimg/paint-production.jpg' },
      { category: 'Ink Production', title: 'Turnkey Ink Lines', description: 'Complete ink production from pigment grind to packaged output.', image: '/img/applicationimg/ink-production.jpg' },
      { category: 'Chemical Production', title: 'Process Plant Setups', description: 'Custom-engineered lines sized to batch volume and chemistry.', image: '/img/applicationimg/chemical-production.jpg' },
      { category: 'Powder Production', title: 'Powder Handling Systems', description: 'Dust-free powder induction and blending for dry-process lines.', image: '/img/applicationimg/powder-production.jpg' },
    ],
  },
  {
    key: 'process',
    label: 'Process',
    imageAspect: '21 / 9',
    items: [
      { category: 'Mixing', title: 'Sigma & Ribbon Mixers', description: 'High-viscosity and dry-powder mixing for pastes, putties and blends.', image: '/img/applicationimg/mixing.jpg' },
      { category: 'Milling', title: 'Bead & Basket Mills', description: 'Wet grinding and fine dispersion down to sub-micron particle size.', image: '/img/applicationimg/milling.png' },
    ],
  },
]

function Card({ item, imageAspect = '4 / 3' }: { item: CardItem; imageAspect?: string }) {
  return (
    <div
      className="group rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1"
      style={{ background: 'var(--background)', border: '1px solid var(--border)' }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-lg)' }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none' }}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: imageAspect, background: 'var(--surface)' }}>
        <img
          src={item.image}
          alt={item.category}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <span className="text-[10.5px] font-bold uppercase tracking-[0.14em]" style={{ color: 'var(--brand)' }}>
          {item.category}
        </span>
        <h4 className="font-bold text-[18px] mt-2 mb-2" style={{ color: 'var(--foreground)' }}>
          {item.title}
        </h4>
        <p className="text-[13.5px] leading-relaxed" style={{ color: 'var(--foreground-muted)' }}>
          {item.description}
        </p>
      </div>
    </div>
  )
}

export default function Applications() {
  return (
    <section id="applications" className="py-16 sm:py-20 lg:py-24" style={{ background: 'var(--surface)' }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

        {/* Section head */}
        <div
          className="flex flex-wrap items-end justify-between gap-4 sm:gap-6 pb-6 mb-9 sm:mb-16"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <div>
            <div className="flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.14em]" style={{ color: 'var(--brand)' }}>
              <span className="inline-block w-[18px] h-px flex-shrink-0" style={{ background: 'var(--brand)' }} />
              Applications
            </div>
            <h2
              className="font-display font-black mt-3.5"
              style={{ fontSize: 'clamp(28px, 3.4vw, 42px)', letterSpacing: '-0.01em', lineHeight: 1.15, maxWidth: '560px', color: 'var(--foreground)' }}
            >
              Built for what's actually in the tank.
            </h2>
          </div>
          <p className="text-[14.5px] max-w-[340px]" style={{ color: 'var(--foreground-muted)' }}>
            Contact parts, seals and finishes are matched to what each industry, process and production line actually needs.
          </p>
        </div>

        {/* Groups */}
        <div className="flex flex-col gap-10 sm:gap-16">
          {GROUPS.map(group => (
            <div key={group.key}>
              <h3
                className="text-[11px] font-bold uppercase tracking-[0.18em] mb-5"
                style={{ color: 'var(--foreground-subtle)' }}
              >
                {group.label}
              </h3>
              <div
                className={
                  group.items.length === 2
                    ? 'grid grid-cols-1 sm:grid-cols-2 gap-6'
                    : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'
                }
              >
                {group.items.map(item => (
                  <Card key={item.category} item={item} imageAspect={group.imageAspect} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
