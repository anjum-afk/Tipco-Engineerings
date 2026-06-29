import SectionHeader from './SectionHeader'

const STEPS = [
  {
    img: 'https://tipcoengineering.com/assets/Untitled-1_0000_Understand-Organization-Requirements.png',
    label: 'Understand Organization Requirements',
    step: '01',
  },
  {
    img: 'https://tipcoengineering.com/assets/Untitled-1_0001_Planning-&-Designing-.png',
    label: 'Planning & Designing',
    step: '02',
  },
  {
    img: 'https://tipcoengineering.com/assets/Untitled-1_0002_Production-.png',
    label: 'Production',
    step: '03',
  },
  {
    img: 'https://tipcoengineering.com/assets/Untitled-1_0003_comMachine-Installationputing.png',
    label: 'Machine Installation',
    step: '04',
  },
]

export default function WorkingProcess() {
  return (
    <section
      className="py-16 sm:py-20 relative"
      style={{
        backgroundImage: 'url(https://tipcoengineering.com/assets/demos/contast.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0" style={{ background: 'rgba(10,22,22,0.88)' }} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Our Working Process"
          subtitle="Step-by-step excellence from requirement to installation"
          align="center"
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10">
          {STEPS.map((s, i) => (
            <div
              key={i}
              className="group relative rounded-2xl px-5 py-8 flex flex-col items-center text-center gap-4
                         transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            >
              {/* Watermark step number */}
              <span
                className="absolute top-2 right-4 font-black select-none pointer-events-none leading-none"
                style={{ fontSize: '60px', color: 'var(--brand)', opacity: 0.06, letterSpacing: '-0.04em' }}
              >
                {s.step}
              </span>

              <img
                src={s.img}
                alt={s.label}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain mt-5 transition-transform duration-300 group-hover:scale-110"
              />
              <h3
                className="font-semibold leading-snug text-sm sm:text-[15px]"
                style={{ color: 'var(--foreground)' }}
              >
                {s.label}
              </h3>

              {/* Hover bottom accent */}
              <span
                className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100
                           transition-transform duration-400 origin-left rounded-b-2xl"
                style={{ background: 'var(--brand)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
