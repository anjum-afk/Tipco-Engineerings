import { ClipboardList, Compass, Cog, PackageCheck, ChevronRight } from 'lucide-react'
import SectionHeader from './SectionHeader'

const STEPS = [
  {
    icon: ClipboardList,
    step: '01',
    label: 'Understand Requirements',
    description: 'We analyse your process, raw materials, output specs and production volumes before recommending anything.',
  },
  {
    icon: Compass,
    step: '02',
    label: 'Planning & Designing',
    description: 'Engineers design the process flow, select equipment and produce detailed fabrication drawings.',
  },
  {
    icon: Cog,
    step: '03',
    label: 'Production',
    description: 'Machines are manufactured in-house at our Sonipat facility to exact tolerances and quality standards.',
  },
  {
    icon: PackageCheck,
    step: '04',
    label: 'Machine Installation',
    description: 'Our team handles delivery, site commissioning, trials and hands-on operator training.',
  },
]

function StepCard({ s }: { s: typeof STEPS[number] }) {
  return (
    <div
      className="group relative flex-1 rounded-2xl px-5 py-8 flex flex-col items-center text-center gap-3 overflow-hidden transition-all duration-300 hover:-translate-y-2"
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.10)',
      }}
    >
      {/* Watermark number */}
      <span
        className="absolute top-2 right-3 font-black select-none pointer-events-none leading-none"
        style={{ fontSize: '64px', color: 'var(--brand)', opacity: 0.08, letterSpacing: '-0.04em' }}
      >
        {s.step}
      </span>

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white flex-shrink-0 mt-2 transition-transform duration-300 group-hover:scale-110"
        style={{ background: 'var(--brand)' }}
      >
        <s.icon size={24} strokeWidth={1.8} />
      </div>

      {/* Step label */}
      <span
        className="text-[10px] font-bold tracking-[0.2em] uppercase"
        style={{ color: 'var(--brand)' }}
      >
        Step {s.step}
      </span>

      <h3 className="font-bold text-[15px] leading-snug text-white">
        {s.label}
      </h3>

      <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
        {s.description}
      </p>

      {/* Hover bottom accent */}
      <span
        className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl"
        style={{ background: 'var(--brand)' }}
      />
    </div>
  )
}

export default function WorkingProcess() {
  return (
    <section
      className="py-16 sm:py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0c1f1f 0%, #112929 60%, #0c1f1f 100%)' }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(24,107,109,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(24,107,109,0.07) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Our Working Process"
          subtitle="Step-by-step excellence from requirement to installation"
          align="center"
          light
        />

        {/* Desktop: flex row with arrow connectors */}
        <div className="hidden lg:flex items-stretch gap-0 mt-12">
          {STEPS.map((s, i) => (
            <div key={s.step} className="flex items-stretch flex-1 min-w-0">
              <StepCard s={s} />
              {i < STEPS.length - 1 && (
                <div className="flex-shrink-0 flex items-center justify-center w-8">
                  <ChevronRight size={20} style={{ color: 'var(--brand)', opacity: 0.45 }} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tablet (sm–lg): simple 2-col card grid, no arrows */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-4 mt-10">
          {STEPS.map(s => (
            <StepCard key={s.step} s={s} />
          ))}
        </div>

        {/* Phone (<sm): compact vertical timeline — reads as a process, less scrolling */}
        <div className="sm:hidden relative mt-9">
          {/* connecting line, centered under the icon nodes */}
          <span
            className="absolute w-px top-4 bottom-4"
            style={{ left: '27px', background: 'rgba(255,255,255,0.16)' }}
          />
          <div className="flex flex-col gap-7">
            {STEPS.map(s => (
              <div key={s.step} className="relative flex gap-4">
                <div
                  className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center text-white flex-shrink-0"
                  style={{ background: 'var(--brand)', boxShadow: '0 0 0 5px #0c1f1f' }}
                >
                  <s.icon size={22} strokeWidth={1.8} />
                </div>
                <div className="pt-1.5 min-w-0">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: 'var(--brand)' }}>
                    Step {s.step}
                  </span>
                  <h3 className="font-bold text-[15.5px] leading-snug text-white mt-1 mb-1.5">{s.label}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
