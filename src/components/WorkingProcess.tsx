import { ClipboardList, Compass, Cog, PackageCheck, ChevronRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
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

// Icon-only animation, powered by Motion (framer-motion). The card/background stays static.
// Outer span = hover reaction (fired by the card's whileHover). Inner span = gentle idle float.
function AnimatedIcon({ icon: Icon, size, delay }: { icon: LucideIcon; size: number; delay: number }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.span
      className="inline-flex"
      variants={{ hover: { scale: 1.18, rotate: 8 } }}
      transition={{ type: 'spring', stiffness: 300, damping: 14 }}
    >
      <motion.span
        className="inline-flex"
        animate={reduceMotion ? undefined : { y: [0, -4, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity, delay }}
      >
        <Icon size={size} strokeWidth={1.8} />
      </motion.span>
    </motion.span>
  )
}

function StepCard({ s, i }: { s: typeof STEPS[number]; i: number }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className="relative flex-1 rounded-2xl px-5 py-8 flex flex-col items-center text-center gap-3 overflow-hidden border border-white/10 bg-white/[0.09] transition-[background-color,border-color,box-shadow] duration-300 hover:bg-white/[0.14] hover:border-white/20 hover:shadow-2xl hover:shadow-black/30"
      whileHover={reduceMotion ? undefined : 'hover'}
      variants={{ hover: { y: -6 } }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white flex-shrink-0 mt-2"
        style={{ background: 'var(--brand)' }}
      >
        <AnimatedIcon icon={s.icon} size={24} delay={i * 0.25} />
      </div>

      {/* Step label */}
      <span
        className="text-[11px] font-bold tracking-[0.2em] uppercase"
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
    </motion.div>
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
              <StepCard s={s} i={i} />
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
          {STEPS.map((s, i) => (
            <StepCard key={s.step} s={s} i={i} />
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
            {STEPS.map((s, i) => (
              <div key={s.step} className="relative flex gap-4">
                <div
                  className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center text-white flex-shrink-0"
                  style={{ background: 'var(--brand)', boxShadow: '0 0 0 5px #0c1f1f' }}
                >
                  <AnimatedIcon icon={s.icon} size={22} delay={i * 0.25} />
                </div>
                <div className="pt-1.5 min-w-0">
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: 'var(--brand)' }}>
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
