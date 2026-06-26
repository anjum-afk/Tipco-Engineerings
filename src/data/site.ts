// ─────────────────────────────────────────────────────────────
// Tipco Engineering — site content (replica of tipcoengineering.com)
// All asset URLs point to the live origin so the replica matches 1:1.
// ─────────────────────────────────────────────────────────────

const CDN = 'https://tipcoengineering.com'

export const CONTACT = {
  phoneSales: '+91 8826176988',
  tollFree: '1800 1020 229',
  phasePurchase: '+91 7496962283',
  email: 'mail@tipcoengineering.com',
  whatsapp: 'https://api.whatsapp.com/send/?phone=+918826176988',
  address: 'Plot No. 1689, 1658 SECTOR-38, PHASE-1, RAI, INDUSTRIAL AREA, Sonipat, Haryana 131029',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55885.43619134965!2d77.0671381255586!3d28.90310937168003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390daf8c20439363%3A0x1188369c97ad3053!2sTipco%20Engineering%20India%20Pvt.%20Ltd.%20(Rai)!5e0!3m2!1sen!2sin!4v1643619552622!5m2!1sen!2sin',
}

export interface MegaCol {
  title: string
  titleTo: string
  links: { label: string; to: string }[]
}

export interface NavLinkItem {
  label: string
  to: string
  mega?: MegaCol[]
}

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'About Tipco', to: '/about-us' },
  {
    label: 'Product',
    to: '/product',
    mega: [
      {
        title: 'Mill Series', titleTo: '/application/mill-series',
        links: [
          { label: 'Basket Mill', to: '/mill-series/basket-mill' },
          { label: 'Bead Mill', to: '/mill-series/bead-mill' },
          { label: 'Dyno Mill', to: '/mill-series/dyno-mill' },
          { label: 'Horizontal Bead Mill', to: '/mill-series/horizontal-bead-mill' },
        ],
      },
      {
        title: 'Production Line', titleTo: '/application/production-line',
        links: [
          { label: 'Ink Production Line', to: '/production-line/ink-production-line' },
          { label: 'Paint Production Line Setup', to: '/production-line/paint-production-line-setup' },
          { label: 'Paint Sludge to Primer Process Production Setup', to: '/production-line/paint-sludge-to-primer-process-production-setup' },
        ],
      },
      {
        title: 'Laboratory Machines', titleTo: '/application/laboratory-machines',
        links: [
          { label: 'Lab Attritor Mill', to: '/laboratory-machines/lab-attritor-mill' },
          { label: 'Lab Basket Mill', to: '/laboratory-machines/lab-basket-mill' },
          { label: 'Lab Ribbon Blender', to: '/laboratory-machines/lab-ribbon-blender' },
          { label: 'Lab High Speed Disperser', to: '/laboratory-machines/lab-high-speed-disperser' },
        ],
      },
      {
        title: 'Homogenizers', titleTo: '/application/homogenizers',
        links: [
          { label: 'Liquid Powder Mixing Machine', to: '/homogenizers/liquid-powder-mixing-machine' },
          { label: 'In-line Homogenizer', to: '/homogenizers/in-line-homogenizer' },
          { label: 'In-Tank Homogenizer', to: '/homogenizers/in-tank-homogenizer' },
          { label: 'Intank Batch Homogenizer', to: '/homogenizers/intank-batch-homogenizer' },
        ],
      },
    ],
  },
  {
    label: 'Application',
    to: '/application/industry',
    mega: [
      {
        title: 'Industry', titleTo: '/application/industry',
        links: [
          { label: 'Paint', to: '/application/paint' },
          { label: 'Pharma', to: '/application/pharma' },
          { label: 'Chemical', to: '/application/chemical' },
          { label: 'Ink', to: '/application/ink' },
        ],
      },
      {
        title: 'Process', titleTo: '/application/process',
        links: [
          { label: 'Mixing', to: '/application/mixing' },
          { label: 'Milling', to: '/application/milling' },
        ],
      },
      {
        title: 'Production Setup', titleTo: '/application/production-setup',
        links: [
          { label: 'Paint Production', to: '/application/paint-production' },
          { label: 'Ink Production', to: '/application/ink-production' },
        ],
      },
    ],
  },
  { label: 'Investors', to: '/investors/board-of-directors' },
  { label: 'Events', to: '/event' },
  { label: 'Our Clients', to: '/client' },
  { label: 'Contact US', to: '/contact-us' },
]

// Brand social links (shared by TopBar, Footer and the mobile drawer)
export const SOCIAL_LINKS = [
  { href: 'https://www.facebook.com/TipcoEngineeringIndia/', label: 'Facebook', d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
  { href: 'https://twitter.com/tipcoengineer', label: 'Twitter', d: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' },
  { href: 'https://www.linkedin.com/company/tipcoengineering/', label: 'LinkedIn', d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
  { href: 'https://www.youtube.com/@tipcoengineering', label: 'YouTube', d: 'M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z' },
  { href: 'https://www.instagram.com/tipcoengineering/', label: 'Instagram', d: 'M9 2H15a7 7 0 0 1 7 7v6a7 7 0 0 1-7 7H9A7 7 0 0 1 2 15V9a7 7 0 0 1 7-7zm0 2a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5H9zm7.5 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10A5 5 0 0 1 12 7zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z' },
  { href: 'https://api.whatsapp.com/send/?phone=+918826176988', label: 'WhatsApp', d: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.115 1.527 5.838L.057 23.215a.5.5 0 0 0 .612.64l5.538-1.451A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z' },
  { href: 'mailto:mail@tipcoengineering.com', label: 'Email', d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm8 7L4 6v12h16V6l-8 5z' },
]

export interface Category {
  slug: string          // /application/<slug>
  name: string
  img: string
  blurb: string
}

export const CATEGORIES: Category[] = [
  {
    slug: 'mill-series',
    name: 'Mill Series',
    img: `${CDN}/public/uploads/Catagoery-Banner.jpg`,
    blurb:
      'Tipco offers advanced multitasking milling machines capable of breaking larger particles into many microparticles for both powder and liquid form, customized as per the specification and requirement of the operation.',
  },
  {
    slug: 'production-line',
    name: 'Production Line',
    img: `${CDN}/public/uploads/SIRCA-02.JPG`,
    blurb:
      'Complete turnkey production line solutions — from additive storage and batching to finished product — for paint, ink and specialty chemical manufacturing.',
  },
  {
    slug: 'laboratory-machines',
    name: 'Laboratory Machines',
    img: `${CDN}/public/uploads/portfolio-category-38.png`,
    blurb:
      'Compact lab-scale machines for R&D and trial runs — get your manufacturing process right the first time before scaling to production.',
  },
  {
    slug: 'homogenizers',
    name: 'Homogenizers',
    img: `${CDN}/public/uploads/banner.jpeg`,
    blurb:
      'High-shear in-tank and in-line homogenizers operating at high velocity for emulsification and uniform particle distribution.',
  },
  {
    slug: 'disperser-series',
    name: 'Disperser Series',
    img: `${CDN}/public/uploads/banner-2.jpeg`,
    blurb:
      'Single and twin-shaft high-speed dispersers for stirring and mixing high-viscosity materials, available with gripper and hydraulic lifting options.',
  },
  {
    slug: 'mixing',
    name: 'Mixing Equipment',
    img: `${CDN}/public/uploads/Mixing%20%20(1).jpg`,
    blurb:
      'Sigma mixers, plough share mixers, wall putty mixers and liquid-powder mixing systems for viscous and powder applications.',
  },
]

export interface Product {
  name: string
  slug: string
  href: string         // real product URL pattern: /<prefix>/<slug>
  img: string
  desc: string
  categorySlug: string // which Category it belongs to
}

export const PRODUCTS: Product[] = [
  // Mill Series
  { name: 'Dyno Mill', slug: 'dyno-mill', href: '/mill-series/dyno-mill', img: `${CDN}/public/productwork/Dyno%20Mill.png`, desc: 'Dyno Mill is an agitator bead mill with a horizontal grinding chamber for continuous fine grinding and dispersion.', categorySlug: 'mill-series' },
  { name: 'Vertical Bead Mill', slug: 'vertical-bead-mill', href: '/mill-series/vertical-bead-mill', img: `${CDN}/public/productwork/TVM%20(4).png`, desc: 'Suitable for the grinding and dispersing of liquid – hazardous and non-hazardous materials.', categorySlug: 'mill-series' },
  { name: 'Basket Mill', slug: 'basket-mill', href: '/mill-series/basket-mill', img: `${CDN}/public/productwork/Basket%20Mill%20(1).png`, desc: 'Basket Mill (Hydraulic Lifting) is a wet grinding machine combining dispersion and bead milling in one unit.', categorySlug: 'mill-series' },
  { name: 'Horizontal Bead Mill', slug: 'horizontal-bead-mill', href: '/mill-series/horizontal-bead-mill', img: `${CDN}/public/productwork/Bead%20Mill%20for%20Ink%20Manufacturing.png`, desc: 'Horizontal Bead Mill is suitable for grinding, milling and dispersing of pigments and pastes.', categorySlug: 'mill-series' },
  { name: 'Attritor Mill Machine', slug: 'attritor-mill-machine', href: '/mill-series/attritor-mill-machine', img: `${CDN}/public/productwork/Attritor%20(1).png`, desc: 'Tipco Engineering Attritor Mill Machine is used for high output fine grinding applications.', categorySlug: 'mill-series' },
  { name: 'Bead Mill', slug: 'bead-mill', href: '/mill-series/bead-mill', img: `${CDN}/public/productwork/Dyno%20Mill%20for%20Ink%20Manufacturing.png`, desc: 'Bead Mill is an agitator bead mill with a horizontal grinding chamber for fine particle reduction.', categorySlug: 'mill-series' },

  // Production Line
  { name: 'Paint Sludge to Primer Process Production Setup', slug: 'paint-sludge-to-primer-process-production-setup', href: '/production-line/paint-sludge-to-primer-process-production-setup', img: `${CDN}/public/productwork/Paint%20Sludge%20to%20Primer%20Process%20Production%20Setup.png`, desc: 'The production line consists of additive storage and batching for converting paint sludge into usable primer.', categorySlug: 'production-line' },
  { name: 'Paint Production Line Setup', slug: 'paint-production-line-setup', href: '/production-line/paint-production-line-setup', img: `${CDN}/public/productwork/Production%20Line%20Setup%20for%20Paint.jpg`, desc: 'We are the leading brand to set up paint production equipment and complete turnkey lines.', categorySlug: 'production-line' },
  { name: 'Ink Production Line', slug: 'ink-production-line', href: '/production-line/ink-production-line', img: `${CDN}/public/productwork/Ink%20Production%20Line.png`, desc: "We are India's leading brand machine manufacturer & exporter for complete ink production lines.", categorySlug: 'production-line' },

  // Laboratory Machines
  { name: 'Lab High Speed Disperser', slug: 'lab-high-speed-disperser', href: '/lab-machines/lab-high-speed-disperser', img: `${CDN}/public/productwork/Dispersers%20for%20Paint.png`, desc: 'Lab High Speed Disperser is mainly used in industrial departments and small-scale R&D laboratories for mixing and dispersing.', categorySlug: 'laboratory-machines' },
  { name: 'Lab Attritor Mill', slug: 'lab-attritor-mill', href: '/lab-machines/lab-attritor-mill', img: `${CDN}/public/productwork/Lab%20Attritor%20Mill%20(1).png`, desc: 'Tipco Engineering Lab Attritor Mill Machine is used for high output lab-scale grinding.', categorySlug: 'laboratory-machines' },
  { name: 'Lab Mixer', slug: 'lab-mixer', href: '/lab-machines/lab-mixer', img: `${CDN}/public/productwork/lab-mixer.png`, desc: 'Tipco Engineering Lab Mixer Machine is used for high output mixing in laboratory settings.', categorySlug: 'laboratory-machines' },
  { name: 'Lab Basket Mill', slug: 'lab-basket-mill', href: '/lab-machines/lab-basket-mill', img: `${CDN}/public/productwork/Lab%20Basket%20Mill%20(1).png`, desc: 'Basket Mill (Hydraulic Lifting) wet grinding machine in a compact lab-scale format.', categorySlug: 'laboratory-machines' },
  { name: 'Lab Ribbon Blender', slug: 'lab-ribbon-blender', href: '/lab-machines/lab-ribbon-blender', img: `${CDN}/public/productwork/Lab%20Ribbon%20Blender.jpg`, desc: 'We offer a premium quality Lab Ribbon Blender Mixer for uniform dry powder blending.', categorySlug: 'laboratory-machines' },

  // Mixing Equipment
  { name: 'Lab Sigma Mixer Machine', slug: 'lab-sigma-mixer-machine', href: '/mixing/lab-sigma-mixer-machine', img: `${CDN}/public/productwork/@1%20(4).png`, desc: 'Lab Sigma Mixer is used for managing very viscous materials and dough-like products.', categorySlug: 'mixing' },
  { name: 'Industrial Wall Putty Mixer Machine', slug: 'industrial-wall-putty-mixer-machine', href: '/mixing/industrial-wall-putty-mixer-machine', img: `${CDN}/public/productwork/Putty%20Mixer%20Machine%20Manufacturer%20.png`, desc: 'Widely used for mixing powder with powder and powder with liquid in wall putty production.', categorySlug: 'mixing' },
  { name: 'Plough Share Mixer', slug: 'plough-share-mixer', href: '/mixing/plough-share-mixer', img: `${CDN}/public/productwork/Putty%20Mixer%20.png`, desc: 'Horizontal Plough Shear Mixer is widely used for mixing dry and semi-dry materials.', categorySlug: 'mixing' },
  { name: 'Liquid Powder Mixing Machine', slug: 'liquid-powder-mixing-machine', href: '/mixing/liquid-powder-mixing-machine', img: `${CDN}/public/productwork/In%20Line%20Homo.png`, desc: 'TIPCO offers Liquid Powder Mixing (LPM) solutions for rapid incorporation of powders into liquid.', categorySlug: 'mixing' },

  // Homogenizers
  { name: 'In-Tank Homogenizer', slug: 'in-tank-homogenizer', href: '/homogenizers/in-tank-homogenizer', img: `${CDN}/public/productwork/Homogenizer%20for%20Ink%20Mixing.png`, desc: 'High shear in-tank homogenizers operate at a high velocity for fine emulsification.', categorySlug: 'homogenizers' },
  { name: 'High Share In-Tank Homogenizer', slug: 'high-share-in-tank-homogenizer', href: '/paint/high-share-in-tank-homogenizer', img: `${CDN}/public/productwork/Homogenizer%20.png`, desc: 'High shear homogenization (rotor/stator design) process for uniform particle distribution.', categorySlug: 'homogenizers' },
  { name: 'In-line Homogenizer', slug: 'in-line-homogenizer', href: '/homogenizers/in-line-homogenizer', img: `${CDN}/public/productwork/In-line%20homogenizer.png`, desc: 'In-line homogenizer is a high-pressure mechanical device for continuous processing.', categorySlug: 'homogenizers' },
  { name: 'Intank Batch Homogenizer', slug: 'intank-batch-homogenizer', href: '/homogenizers/intank-batch-homogenizer', img: `${CDN}/public/productwork/Homogenizer%20for%20Mixing%20(2).png`, desc: 'Batch in-tank homogenizer operates at high velocity for batch emulsification.', categorySlug: 'homogenizers' },

  // Disperser Series
  { name: 'High Speed Disperser', slug: 'high-speed-disperser', href: '/disperser-series/high-speed-disperser', img: `${CDN}/public/productwork/Dispersers%20for%20Paint.png`, desc: 'Single Shaft High-Speed Disperser Machine is commonly used in paint and coating manufacturing.', categorySlug: 'disperser-series' },
  { name: 'High Speed Disperser with Gripper', slug: 'high-speed-disperser-with-gripper', href: '/disperser-series/high-speed-disperser-with-gripper', img: `${CDN}/public/productwork/Disperser%20Machine%20with%20Lid.png`, desc: 'A High-Speed Disperser Machine with a Gripper for secure vessel handling during dispersion.', categorySlug: 'disperser-series' },
  { name: 'High Speed Disperser with Hydraulic Lifting', slug: 'high-speed-disperser-with-hydraulic-lifting', href: '/chemical/high-speed-disperser-with-hydraulic-lifting', img: `${CDN}/public/productwork/180.png`, desc: 'Suitable for stirring and mixing high viscosity material with hydraulic blade lifting.', categorySlug: 'disperser-series' },
  { name: 'High Speed Disperser with Gripper and Hydraulic', slug: 'high-speed-disperser-with-gripper-and-hydraulic', href: '/disperser-series/high-speed-disperser-with-gripper-and-hydraulic', img: `${CDN}/public/productwork/Disperser%20Machine%20Manufacturer%20%20(3).png`, desc: 'Suitable for stirring and mixing high-viscosity material with both gripper and hydraulic lift.', categorySlug: 'disperser-series' },
  { name: 'Vacuum High Speed Disperser', slug: 'vacuum-high-speed-disperser', href: '/paint/vacuum-high-speed-disperser', img: `${CDN}/public/productwork/Disperser%20Machine%20Manufacturer%20%20(12).png`, desc: 'Tipco High Speed Disperser Machine for mixing under vacuum, suitable for de-aerating products.', categorySlug: 'disperser-series' },
  { name: 'Twin Shaft Disperser', slug: 'twin-shaft-disperser', href: '/paint/twin-shaft-disperser', img: `${CDN}/public/productwork/twin%20shaft%20disperser%20machine%20(1).png`, desc: 'Twin Shaft Disperser Machine is a reliable and efficient solution for demanding dispersion.', categorySlug: 'disperser-series' },
]

export interface SiteEvent {
  title: string
  date: string
  desc: string
  img: string
}

export const EVENTS: SiteEvent[] = [
  { title: 'THE COLOUR SOCIETY Annual Seminar 2025', date: 'January 16–17, 2025', desc: 'Tipco Lights Up the Stage at THE COLOUR SOCIETY Annual Seminar 2025, Lonavala, Maharashtra.', img: `${CDN}/public/uploads/event-15.jpg` },
  { title: 'China Coating Show 2024', date: 'December 3–5, 2024', desc: 'Exhibiting at Guangzhou on 3–5 December, 2024.', img: `${CDN}/public/uploads/event-14.jpg` },
  { title: 'China Coating Show 2023', date: 'November 15–17, 2023', desc: 'Empowering industries with precision machinery for chemicals, paints, pharmaceuticals, minerals, food, polyester resins and more.', img: `${CDN}/public/uploads/event-13.jpg` },
  { title: 'Paint India 2023', date: 'March 2–3, 2023', desc: 'PaintIndia is the premier trade fair for the paints, coatings and allied industries — the third largest show of its kind worldwide.', img: `${CDN}/public/uploads/event-12.png` },
  { title: 'IPCA Biennial Conference', date: 'September 16–18, 2022', desc: 'We invite you all to the IPCA Biennial Conference hosted by the Indian Paint & Coating Association in New Delhi, India.', img: `${CDN}/public/uploads/event-11.png` },
  { title: 'Paint India Exhibition (Mumbai)', date: 'May 26–28, 2022', desc: 'Thank you to everyone who visited our stall at Paint India and made the event a success.', img: `${CDN}/public/uploads/event-10.jpg` },
  { title: 'Technical Session — Machinery for Chemical Industries', date: 'April 13, 2022', desc: 'Hosted by ICT (Institute of Chemical Technology), Mumbai.', img: `${CDN}/public/uploads/Paint%20&%20Coating%20Event%20by%20Tipco%20in%20ICT.png` },
]

export interface Director {
  name: string
  designation: string
  intro: string   // bold lead-in shown before the bio ("Mr. X, aged Y years,")
  bio: string     // remainder of the biography
}

export const DIRECTORS: Director[] = [
  {
    name: 'Mr. Ritesh Sharma',
    designation: 'Chairman and Managing Director',
    intro: 'Mr. Ritesh Sharma, aged 37 years,',
    bio: 'is one of the Promoter, Chairman and Managing Director of our Company. In his previous stint, he was associated with Ritesh Engineers, partnership firm as a partner from August 2007 to June 2019 and has handled production and design department in manufacturing of machines and other related engineering good. He was also associated with Tipco Engineering Works, partnership firm as a partner from November 2017 to January 2019 and subsequently re-admitted as a partner on December 2020 and still is in association and is responsible for managing production operations, business development and strategic decision making in machine manufacturing and other related engineering goods. Currently, he is also associated with RGVY Enterprise, partnership firm as a partner since March 31, 2018. He is also associated as a partner in Hanutech Engineering Solutions, partnership firm since December 2020 and is responsible for business development, vendor and client management, supply chain coordination and operational planning in the trading and distribution of machines, pumps and valves. He was also associated with M/s. KR Industries (Partnership Firm) from February 2024 to April 2024, the partnership firm was engaged in trading, supplying of paints and polish materials. He was also associated with M/s. HRS07 Buildcon (Partnership Firm) as a Partner from April 2024 to December 2024, the partnership firm was engaged in business of real estate agents, builders and developers.',
  },
  {
    name: 'Ms. Sonia Sharma',
    designation: 'Whole-time Director',
    intro: 'Ms. Sonia Sharma, aged 35 years,',
    bio: 'is one of the Promoter and Whole Time Director of our company. She is associated with Tipco Engineering Works, partnership firm as a partner since November 2017 and is responsible for production management, operations and overall business administration in machine manufacturing and other related engineering goods. She is also associated with RGVY Enterprises, partnership firm as a partner since March 31, 2018. She is also associated with Ritesh Engineers, partnership firm as a partner since June 01, 2019 and is responsible for handling the HR Department and Operations Management which is involved in manufacturing of machines and other related engineering good. She is associated with Polish Pro Private Limited since December 2021 as the First Director and Subscriber to Memorandum of Association of the Company (Polish Pro Private Limited is in the process of voluntary Striking off from MCA). She was appointed as the first Director (Executive Director) of our Company from the time of Company’s Incorporation since September 30, 2021 and subsequently was re-designated as the Whole Time Director with effect from August 07, 2025 and she is the subscriber to memorandum of association in our Company. She has total 7 years of experience in the Machine Manufacturing industry in which our company operates. In our Company she is responsible for overseeing the company’s Human Resource management and Operations management.',
  },
  {
    name: 'Mr. Anup Kumar Singh',
    designation: 'Non- Executive Director',
    intro: 'Mr. Anup Kumar Singh, aged 43 years,',
    bio: 'is one of the Non- Executive Director of our Company since July 16, 2025. He holds a Provisional Degree Certificate in B.Tech. Electronics & Communication Engineering from Allahabad Agricultural Institute-Deemed University. He also holds Post Graduate Degree in Management (Entrepreneurship Development) from Symbiosis Centre for Distance Learning. In his previous stint, he was associated with Aksh Technologies Limited as Process Member-Engg. Services from June 2008 to May 01, 2010. He was also associated with Ross Process Equipment Private Limited as National Sales Manager from October 2014 to September 2024 He is responsible for overall growth of proprietorship in chemical sector and is responsible for business expansion, strategic growth, quality check and operational management. He has a total of 12 years of work experience in Engineering field.',
  },
  {
    name: 'Mr. Jeewan Chandra',
    designation: 'Non-Executive Independent Director',
    intro: 'Mr. Jeewan Chandra, aged 50 years,',
    bio: 'is the Non-Executive Independent Director of our Company. He holds a bachelor’s degree in Commerce. He is a Practicing Fellow member of Cost and Works Accountants of India. He also holds a Certificate of passing Intermediate Examination of the Institute of Chartered Accountants of India. He was associated with Vodafone Digilink Limited as Deputy Manager-Finance & Accounts from January 2005 to March 2012. He was also associated with Telesuprecon Group of Companies as Chief of Finance & Accounting/ Audits Officer (CAFO) as a consultant from July 2015 to December 2016. Currently he is associated with J Chandra & Associates as a managing partner since September 2012 and still is in association and is responsible for overseeing cost accounting, cost audits, management accounting services, managing taxation vertical including direct and indirect tax compliance, advisory and representation before tax authorities. He is also been appointed as an Independent Director in PAN HR Solution Limited since July 2025 and is still in association. He has been appointed as the Non-Executive Independent Director in our Company w.e.f. July 16, 2025 for a term of 3 years. He has a total experience of 20 years in the fields of Finance & Accounts.',
  },
  {
    name: 'Mr. Patterson Thomas',
    designation: 'Non-Executive Independent Director',
    intro: 'Mr. Patterson Thomas, aged 34 years,',
    bio: 'is the Non-Executive Independent Director of our Company. He holds Bachelor of Commerce and Bachelor of Law from Dr. Bhimrao Ambedkar University Agra. He has also completed Company Secretary Course from Institute of Company Secretaries of India and is an associate member of Institute of Company Secretaries of India. In his previous stint he was associated with Bloomm Inn Private Limited as Company Secretary from February 2018 to July 2020 and was also associated with SGS Infratech Limited as Company Secretary from September 2020 to September 2021. He is currently associated with Luxmi Shoes Private Limited since April 2022. He has a total experience of 7 years in Secretarial field. He has been appointed as the Non-Executive Independent Director in our Company w.e.f. July 16, 2025 for a term of 3 years.',
  },
]

// ── Investors section left-sidebar menu ─────────────────────────────────────
export const INVESTOR_LINKS: { label: string; to: string }[] = [
  { label: 'Corporate Announcements',            to: '/investors/corporate-announcements' },
  { label: 'Board of Directors',                 to: '/investors/board-of-directors' },
  { label: 'Committee Board',                    to: '/investors/committee-board' },
  { label: 'List of Key Managerial Personnel',   to: '/investors/list-of-key-managerial-personnel' },
  { label: 'Group & Subsidiary Companies',       to: '/investors/group---subsidiary-companies' },
  { label: 'Corporate Policies',                 to: '/investors/corporate-policies' },
  { label: 'IPO',                                to: '/investors/ipo' },
  { label: 'Investor Presentation',              to: '/investors/investor-presentation' },
  { label: 'Annual Reports',                     to: '/investors/annual-reports' },
  { label: 'Annual Returns',                     to: '/investors/annual-returns' },
  { label: 'Shareholding Patterns',              to: '/investors/shareholding-patterns' },
  { label: 'Corporate Information',              to: '/investors/corporate-information' },
  { label: 'Investors Grievance',               to: '/investors/investors-grievance' },
  { label: 'Material Contracts',                 to: '/investors/material-contracts' },
  { label: 'Material Creditors',                 to: '/investors/material-creditors' },
  { label: 'Material Documents',                 to: '/investors/material-documents' },
]

export interface Announcement {
  title: string
  slug: string
}

export const CORPORATE_ANNOUNCEMENTS: Announcement[] = [
  { title: 'Closure of Trading Window',                                                                           slug: 'closure-of-trading-window' },
  { title: 'Disclosure under Regulation 30(5) of the SEBI',                                                      slug: 'disclosure-under-regulation-30-5--of-the-sebi' },
  { title: 'Covering letter_Earning call f_Signed',                                                               slug: 'covering-letter_earning-call-f_signed' },
  { title: 'Outcome of Board Meeting -Regulations 30 and 33 of Securities and Exchange Board of India',           slug: 'outcome-of-board-meeting--regulations-30-and-33-of-securities-and-exchange-board-of-india' },
  { title: 'Tipco Engineering India Limited',                                                                     slug: 'tipco-engineering--india-limited' },
  { title: 'Covering Letter Transcript',                                                                          slug: 'covering-letter-transcript-' },
  { title: 'Covering Letter Intimation Investormeet',                                                             slug: 'covering-letter-intimation-investormeet' },
  { title: 'Appointment of Investor and public relation',                                                         slug: 'appointment-of-investor-and-public-relation' },
]

// ── Industry application overview cards (/application/industry) ──────────────
export interface IndustryApp {
  label: string
  slug: string   // links to /application/<slug>
  img: string
}

export const INDUSTRY_APPS: IndustryApp[] = [
  { label: 'Paint',               slug: 'paint',               img: `${CDN}/public/uploads/Paint%20Industries%20.jpg` },
  { label: 'Pharma',              slug: 'pharma',              img: `${CDN}/public/uploads/Pharma%20Industries%20.jpg` },
  { label: 'Chemical',            slug: 'chemical',            img: `${CDN}/public/uploads/Chemical%20Industries%20.jpg` },
  { label: 'Ink',                 slug: 'ink',                 img: `${CDN}/public/uploads/Ink%20Industries%20.jpg` },
  { label: 'Pesticides Industry', slug: 'pesticides-industry', img: `${CDN}/public/uploads/Pesticide%20Industries%20.jpg` },
  { label: 'Lab Machines',        slug: 'lab-machines',        img: `${CDN}/public/uploads/Laboratories%20Industries.jpg` },
  { label: 'Coating',             slug: 'coating',             img: `${CDN}/public/uploads/portfolio-category-52.jpg` },
]

export const CLIENT_IDS = [12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29]

export function clientLogo(id: number) {
  const ext = id >= 16 ? 'png' : 'jpg'
  return `${CDN}/public/uploads/client-${id}.${ext}`
}

export { CDN }
