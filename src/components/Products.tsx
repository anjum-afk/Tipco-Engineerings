import { useState } from 'react'
import { Link } from 'react-router-dom'

interface ProductItem { name: string; desc: string; to: string }
interface Category {
  label: string
  viewAllLabel: string
  viewAllTo: string
  products: ProductItem[]
}

const CATEGORIES: Category[] = [
  {
    label: 'Mill Series',
    viewAllLabel: 'View All Milling Systems',
    viewAllTo: '/application/mill-series',
    products: [
      { name: 'Basket Mill',          desc: 'Premium batch wet milling system combining high-shear dispersing and grinding.',             to: '/mill-series/basket-mill' },
      { name: 'Bead Mill',            desc: 'High-capacity fine wet grinding system designed for industrial dispersions.',               to: '/mill-series/bead-mill' },
      { name: 'Dyno Mill',            desc: 'Continuous wet milling chamber utilizing micro-media for sub-micron processing.',           to: '/mill-series/dyno-mill' },
      { name: 'Horizontal Bead Mill', desc: 'High-efficiency milling system with advanced dynamic screen separation.',                   to: '/mill-series/horizontal-bead-mill' },
      { name: 'Attritor Mill',        desc: 'Vertical stationary-tank attritor for hard-particle dispersion and size reduction.',        to: '/mill-series/attritor-mill-machine' },
    ],
  },
  {
    label: 'Production Line',
    viewAllLabel: 'View All Production Lines',
    viewAllTo: '/application/production-line',
    products: [
      { name: 'Ink Production Line',                         desc: 'Turnkey ink manufacturing line from raw pigment to packaged finished ink.',                to: '/production-line/ink-production-line' },
      { name: 'Paint Production Line Setup',                  desc: 'End-to-end automated paint batching, grinding and filling line.',                         to: '/production-line/paint-production-line-setup' },
      { name: 'Paint Sludge to Primer Production Setup',      desc: 'Eco-friendly recycling line that converts paint sludge into usable primer.',              to: '/production-line/paint-sludge-to-primer-process-production-setup' },
    ],
  },
  {
    label: 'Laboratory Machines',
    viewAllLabel: 'View All Lab Machines',
    viewAllTo: '/application/laboratory-machines',
    products: [
      { name: 'Lab Attritor Mill',         desc: 'Compact attritor mill for R&D-scale batch milling and fine dispersion.',           to: '/lab-machines/lab-attritor-mill' },
      { name: 'Lab Basket Mill',           desc: 'Small-batch in-tank basket mill for laboratory formulation development.',           to: '/lab-machines/lab-basket-mill' },
      { name: 'Lab High Speed Disperser',  desc: 'Lab-scale high-shear disperser for pigment wetting and particle testing.',         to: '/lab-machines/lab-high-speed-disperser' },
      { name: 'Lab Ribbon Blender',        desc: 'Benchtop ribbon blender for dry powder and granule blending applications.',        to: '/laboratory-machines/lab-ribbon-blender' },
      { name: 'Lab Sigma Mixer',           desc: 'Heavy-duty sigma blade mixer for high-viscosity laboratory batches.',              to: '/lab-machines/lab-sigma-mixer-machine' },
      { name: 'Lab Mixer',                 desc: 'Versatile benchtop mixer suitable for general laboratory mixing tasks.',           to: '/lab-machines/lab-mixer' },
    ],
  },
  {
    label: 'Homogenizers',
    viewAllLabel: 'View All Homogenizers',
    viewAllTo: '/application/homogenizers',
    products: [
      { name: 'In-Tank Homogenizer',             desc: 'Tank-mounted rotor-stator homogenizer for efficient batch emulsification.',           to: '/homogenizers/in-tank-homogenizer' },
      { name: 'High Shear In-Tank Homogenizer',  desc: 'High-shear in-tank unit engineered for demanding emulsification processes.',          to: '/homogenizers/high-share-in-tank-homogenizer' },
      { name: 'In-Line Homogenizer',             desc: 'Continuous-flow inline homogenizer ideal for large-volume production.',               to: '/homogenizers/in-line-homogenizer' },
      { name: 'Intank Batch Homogenizer',        desc: 'Batch-mode in-tank homogenizer with stepless speed control.',                         to: '/homogenizers/intank-batch-homogenizer' },
      { name: 'Liquid Powder Mixing Machine',    desc: 'Dust-free powder induction system for liquid-powder integration.',                    to: '/homogenizers/liquid-powder-mixing-machine' },
    ],
  },
  {
    label: 'Disperser Series',
    viewAllLabel: 'View All Dispersers',
    viewAllTo: '/application/disperser-series',
    products: [
      { name: 'High Speed Disperser',                        desc: 'Standard versatile disperser for paints, inks and coating applications.',                      to: '/disperser-series/high-speed-disperser' },
      { name: 'Disperser with Gripper',                      desc: 'Fixed-drum disperser with integrated vessel gripping for operator safety.',                     to: '/disperser-series/high-speed-disperser-with-gripper' },
      { name: 'Disperser with Hydraulic Lifting',            desc: 'Hydraulic-lift disperser designed for tall vessels and heavy batch loads.',                     to: '/disperser-series/high-speed-disperser-with-hydraulic-lifting' },
      { name: 'Disperser — Gripper & Hydraulic',             desc: 'Combined gripper and hydraulic lifting system for maximum operator versatility.',               to: '/disperser-series/high-speed-disperser-with-gripper-and-hydraulic' },
      { name: 'Vacuum High Speed Disperser',                 desc: 'Sealed vacuum disperser for solvent-sensitive and air-free formulations.',                      to: '/disperser-series/vacuum-high-speed-disperser' },
      { name: 'Twin Shaft Disperser',                        desc: 'Dual-shaft disperser optimised for high-viscosity pastes and thick-bodied batches.',            to: '/disperser-series/twin-shaft-disperser' },
    ],
  },
]

export default function Products() {
  const [activeIdx, setActiveIdx] = useState(0)
  const active = CATEGORIES[activeIdx]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* ── Two-column layout ─────────────────────────────── */}
        <div className="flex flex-col lg:flex-row">

          {/* Mobile: horizontal scrollable tabs / Desktop: vertical sidebar */}
          <aside className="lg:w-[260px] flex-shrink-0">
            {/* Mobile tabs */}
            <div className="flex lg:hidden gap-2 overflow-x-auto pb-2 mb-4 -mx-1 px-1 scrollbar-none">
              {CATEGORIES.map((cat, i) => (
                <button
                  key={cat.label}
                  onClick={() => setActiveIdx(i)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                    activeIdx === i
                      ? 'text-white border-brand'
                      : 'text-gray-600 border-gray-200 hover:border-brand hover:text-brand bg-white'
                  }`}
                  style={activeIdx === i ? { background: 'var(--brand)', borderColor: 'var(--brand)' } : {}}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            {/* Desktop vertical list */}
            <ul className="hidden lg:block">
              {CATEGORIES.map((cat, i) => (
                <li key={cat.label}>
                  <button
                    onClick={() => setActiveIdx(i)}
                    className={`w-full text-left py-3.5 pr-6 text-[15px] font-medium transition-colors border-l-[3px] pl-5 ${
                      activeIdx === i
                        ? 'border-l-brand text-brand bg-gray-50'
                        : 'border-l-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-50/50'
                    }`}
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Vertical divider */}
          <div className="hidden lg:block w-px mx-0 flex-shrink-0" style={{ background: '#ebebeb' }} />

          {/* Right: product grid */}
          <div className="flex-1 min-w-0 lg:pl-10">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-5 md:mb-7">{active.label}</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-5 md:gap-x-8 md:gap-y-6">
              {active.products.map(p => (
                <Link
                  key={p.name}
                  to={p.to}
                  className="group block"
                >
                  <h4 className="font-semibold text-[15px] text-gray-800 group-hover:text-brand mb-1.5 leading-snug transition-colors">
                    {p.name}
                  </h4>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{p.desc}</p>
                </Link>
              ))}
            </div>

            {/* View all link */}
            <div className="mt-8 flex justify-end">
              <Link
                to={active.viewAllTo}
                className="text-[13px] font-semibold hover:underline transition-colors"
                style={{ color: 'var(--brand)' }}
              >
                {active.viewAllLabel} →
              </Link>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}
