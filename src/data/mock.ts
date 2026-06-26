import type { Category, Product, Testimonial, Stat, Industry } from '../types'

export const CATEGORIES: Category[] = [
  { slug: 'bead-mills', name: 'Bead Mills', description: 'High-efficiency wet grinding and dispersion machines for fine particle size reduction in paint, ink, and pharma applications.', image: '', productCount: 8 },
  { slug: 'dispersers', name: 'Dispersers', description: 'High-speed dispersers for mixing, dissolving, and dispersing solid materials into liquid media.', image: '', productCount: 6 },
  { slug: 'homogenizers', name: 'Homogenizers', description: 'Industrial homogenizers for emulsification and uniform particle distribution in food, pharma, and chemical processes.', image: '', productCount: 5 },
  { slug: 'mixers', name: 'Mixers & Agitators', description: 'Heavy-duty industrial mixers and agitators for blending viscous materials in large-volume production.', image: '', productCount: 7 },
  { slug: 'production-lines', name: 'Production Lines', description: 'Complete turnkey production line solutions for paint, ink, and specialty chemical manufacturing.', image: '', productCount: 4 },
]

export const PRODUCTS: Product[] = [
  {
    id: '1',
    slug: 'dyno-mill',
    name: 'Dyno Mill (Bead Mill)',
    category: 'Bead Mills',
    categorySlug: 'bead-mills',
    shortDesc: 'Continuous-flow bead mill for ultra-fine grinding of pigments, inks, and pharmaceutical suspensions down to nano-scale.',
    description: 'The Tipco Dyno Mill is a high-performance continuous-flow bead mill designed for the finest wet grinding and dispersion requirements. Suitable for paint, ink, pharma, and agrochemical industries, it delivers consistent particle size reduction with minimal heat generation.',
    image: '',
    images: [],
    specs: [
      { label: 'Grinding Chamber Volume', value: '0.3 L – 600 L' },
      { label: 'Motor Power', value: '1.5 kW – 132 kW' },
      { label: 'Bead Size', value: '0.3 mm – 3.0 mm' },
      { label: 'Material of Construction', value: 'SS 316L / Ceramic' },
      { label: 'Max. Operating Pressure', value: '6 bar' },
      { label: 'Temperature Control', value: 'Water-cooled jacket' },
      { label: 'Output Fineness', value: 'Up to 50 nm' },
      { label: 'Drive Type', value: 'Direct / Belt drive' },
    ],
    applications: ['Paint & Coatings', 'Printing Inks', 'Pharmaceuticals', 'Agrochemicals', 'Cosmetics', 'Nano-materials'],
    industries: ['Paint', 'Pharma', 'Chemical', 'Ink', 'Cosmetics'],
  },
  {
    id: '2',
    slug: 'high-speed-disperser',
    name: 'High Speed Disperser',
    category: 'Dispersers',
    categorySlug: 'dispersers',
    shortDesc: 'Heavy-duty high speed disperser for rapid dissolution and mixing of pigments, fillers, and additives.',
    description: 'Tipco High Speed Dispersers are designed for efficient mixing and dispersion of solid materials into liquid media. Widely used in paint, adhesive, and chemical manufacturing.',
    image: '',
    images: [],
    specs: [
      { label: 'Motor Power', value: '1.5 kW – 75 kW' },
      { label: 'Blade Diameter', value: '100 mm – 600 mm' },
      { label: 'Shaft Speed', value: '200 – 1800 RPM' },
      { label: 'Vessel Capacity', value: '50 L – 10,000 L' },
      { label: 'Material of Construction', value: 'MS / SS 304 / SS 316' },
      { label: 'Mounting', value: 'Fixed / Movable / Hydraulic lift' },
    ],
    applications: ['Paint Mixing', 'Adhesives', 'Resins', 'Chemicals', 'Cosmetics'],
    industries: ['Paint', 'Chemical', 'Cosmetics', 'Food'],
  },
  {
    id: '3',
    slug: 'basket-mill',
    name: 'Basket Mill',
    category: 'Bead Mills',
    categorySlug: 'bead-mills',
    shortDesc: 'Batch-type bead mill for small to medium volume grinding and dispersion — ideal for R&D and production.',
    description: 'The Tipco Basket Mill combines high-speed dispersion and bead milling in a single machine. Perfect for batch production of paints, inks, and coatings.',
    image: '',
    images: [],
    specs: [
      { label: 'Basket Volume', value: '1 L – 100 L' },
      { label: 'Motor Power', value: '1.5 kW – 30 kW' },
      { label: 'Bead Size', value: '0.5 mm – 3 mm' },
      { label: 'Material', value: 'SS 316L' },
      { label: 'Batch Size', value: '10 L – 1000 L' },
    ],
    applications: ['Paints', 'Inks', 'Pigment Pastes', 'Varnishes'],
    industries: ['Paint', 'Ink', 'Chemical'],
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'We switched to Tipco bead mills 3 years ago and the output fineness and consistency have been exceptional. Their after-sales support is even better.',
    name: 'Rajesh Mehta',
    role: 'Production Manager',
    company: 'Asian Paints Ltd.',
    rating: 5,
  },
  {
    id: '2',
    quote: 'Tipco delivered our complete paint production line on time and within budget. The engineers understood our process requirements from day one.',
    name: 'Priya Sharma',
    role: 'Plant Head',
    company: 'Berger Paints India',
    rating: 5,
  },
  {
    id: '3',
    quote: 'The high-speed dispersers we ordered have been running non-stop for 2 years with zero major downtime. Solid machines, solid team.',
    name: 'Anil Kumar',
    role: 'Purchase Manager',
    company: 'Sun Pharmaceutical',
    rating: 5,
  },
]

export const STATS: Stat[] = [
  { value: '38+', label: 'Years of Experience' },
  { value: '500+', label: 'Machines Installed' },
  { value: '200+', label: 'Happy Clients' },
  { value: '15+', label: 'Countries Served' },
]

export const WHY_TIPCO = [
  { icon: 'shield-check', title: 'ISO Certified Quality', desc: 'Every machine manufactured under strict ISO 9001:2015 quality management systems.' },
  { icon: 'settings', title: 'Custom Engineering', desc: 'We engineer each machine to your exact process parameters — no off-the-shelf compromises.' },
  { icon: 'truck', title: 'Pan-India Delivery', desc: 'Fast delivery and on-site installation support across all major industrial zones in India.' },
  { icon: 'headphones', title: '24/7 After-Sales Support', desc: 'Dedicated service engineers available round the clock for troubleshooting and maintenance.' },
]

export const PROCESS_STEPS = [
  { step: '01', title: 'Share Requirement', desc: 'Tell us your product, viscosity, particle size target, and production volume.' },
  { step: '02', title: 'Engineering Review', desc: 'Our engineers analyze your process and recommend the optimal machine configuration.' },
  { step: '03', title: 'Manufacturing', desc: 'We build your machine to spec under ISO-certified manufacturing processes.' },
  { step: '04', title: 'Installation & Training', desc: 'On-site commissioning, operator training, and post-installation support.' },
]

export const INDUSTRIES: Industry[] = [
  { slug: 'paint', name: 'Paint & Coatings', desc: 'Mixing, grinding, and dispersion for decorative and industrial coatings.' },
  { slug: 'pharma', name: 'Pharmaceuticals', desc: 'GMP-compliant processing for suspensions, ointments, and API dispersion.' },
  { slug: 'chemical', name: 'Specialty Chemicals', desc: 'Batch and continuous processing for adhesives, sealants, and resins.' },
  { slug: 'ink', name: 'Printing Inks', desc: 'Ultra-fine pigment grinding for offset, flexo, and gravure inks.' },
  { slug: 'food', name: 'Food & Beverage', desc: 'Hygienic mixing and emulsification for food-grade applications.' },
  { slug: 'cosmetics', name: 'Cosmetics & Personal Care', desc: 'Gentle emulsification and dispersion for creams, lotions, and gels.' },
]
