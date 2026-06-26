// ─────────────────────────────────────────────────────────────
// Application / category pages (/application/<slug>) — content
// transcribed verbatim from the live tipcoengineering.com pages.
// Banner image, intro copy, SEO title and the exact set of product
// (or sub-category) cards shown on each page.
// ─────────────────────────────────────────────────────────────

export interface AppSubCard {
  label: string
  slug: string   // links to /application/<slug>
  img: string
}

export interface AppPage {
  title: string          // display heading
  intro: string          // verbatim intro copy (may contain newlines)
  banner: string         // hero / banner image
  pageTitle?: string     // live SEO <title>
  products?: string[]    // product slugs shown as cards → /<slug>/<product>
  subCards?: AppSubCard[] // sub-category cards (process / production-setup)
}

const U = 'https://tipcoengineering.com/public/uploads'

export const APPLICATION_PAGES: Record<string, AppPage> = {
  'mill-series': {
    title: 'Mill Series',
    banner: `${U}/Catagoery-Banner.jpg`,
    pageTitle: 'Shop Industrial Mill Machine Online In India',
    intro:
      'Tipco offers advanced multitasking milling machines and is capable of breaking larger particles into many microparticles for both powder as well as liquid form, also our machines are customized as per the specification and requirement of the operation. In the milling process, raw material is poured into a funnel, which allows the material to pass through crushing plates and produce fined-sized particles that industries that use for pharmaceutical, food, plastic, paint, ink etc.',
    products: ['dyno-mill', 'vertical-bead-mill', 'basket-mill', 'horizontal-bead-mill', 'attritor-mill-machine', 'bead-mill'],
  },

  'production-line': {
    title: 'Production Line',
    banner: `${U}/SIRCA-02.JPG`,
    pageTitle: 'Automated Paint Production Line Technology and Systems',
    intro:
      'Within Tipco Engineering’s portfolio, it is possible to find a wide range of products and solutions not only for the machines but for the entire production line. Tipco Engineering is a leader in automated production line technology and has supplied automated systems across various industries. Following the latest market trends of the industry, we provide the most advanced technologies in automation for maximum performance on the factory floor. At Tipco, our customer’s requirements are at the forefront of our designs to ensure the equipment suits their needs. We pay due consideration to all system components and auxiliary systems with our team. To this end, interfaces are handled by one single source, focusing on cost-effective system performance.',
    products: ['paint-sludge-to-primer-process-production-setup', 'paint-production-line-setup', 'ink-production-line'],
  },

  'process': {
    title: 'Process',
    banner: `${U}/banner_team.jpg`,
    intro:
      'Tipco Engineering India has a wide range of products to offer reliable solutions for paint, ink, glue, gel, and many other applications. Our expertise in determining how assembly line balancing problems can affect your system throughput helps prevent sudden production process disruptions. We have high-quality machines, your raw materials become more valuable with the different processes like dispersing, milling, mixing, dissolving in solids into the liquids and liquid to liquid moreover take precautions to prevent time delays in your production process with quality productions.',
    subCards: [
      { label: 'Mixing', slug: 'mixing', img: `${U}/Mixing  (1).jpg` },
      { label: 'Milling', slug: 'milling', img: `${U}/portfolio-category-51.png` },
    ],
  },

  'production-setup': {
    title: 'Production Setup',
    banner: `${U}/banner_team.jpg`,
    intro:
      'Within Tipco Engineering’s portfolio, it is possible to find a wide range of products and solutions not only for the machines but for the entire production line. Tipco Engineering is a leader in automated production line technology and has supplied automated systems across various industries. Following the latest market trends of the industry, we provide the most advanced technologies in automation for maximum performance on the factory floor. At Tipco, our customer’s requirements are at the forefront of our designs to ensure the equipment suits their needs. We pay due consideration to all system components and auxiliary systems with our team. To this end, interfaces are handled by one single source, focusing on cost-effective system performance.',
    subCards: [
      { label: 'Paint Production', slug: 'paint-production', img: `${U}/Paint Production Setup.jpg` },
      { label: 'Ink Production', slug: 'ink-production', img: `${U}/ink production.jpg` },
      { label: 'Chemical Production', slug: 'chemical-production', img: `${U}/Chemical Production Setup.jpg` },
      { label: 'Powder Production', slug: 'powder-production', img: `${U}/Powder Production.jpg` },
    ],
  },

  'mixing': {
    title: 'Mixing',
    banner: `${U}/Mixing  (1).jpg`,
    pageTitle: 'Buy Mixing Machine In India At Reasonable Price',
    intro:
      'Among the many Mixing Machines on the market, we at Tipco Engineering take pride in producing high-quality products that meet or exceed all applicable specifications. The construction, engineering, and related industries heavily use these machines due to their good performance, efficiency, low power consumption, and low maintenance requirements. The addition of features like sturdy construction, durability, and corrosion resistance is achieved through exclusively quality-checked raw materials and components during manufacturing. Our selection of industrial mixers, blenders, ribbon blenders, and vertical mixers are all user-friendly and straightforward in design.',
    products: ['lab-sigma-mixer-machine', 'industrial-wall-putty-mixer-machine', 'plough-share-mixer', 'liquid-powder-mixing-machine'],
  },

  'paint': {
    title: 'Paint',
    banner: `${U}/Paint Industries .jpg`,
    intro:
      'Tipco Engineering is a well-known name in Paint Manufacturing Machines, Paint Dispersers, Sand Mills, Ribbon Blenders, Sigma Kneader, Twin Shaft Dispenser, Ball Mill, Reactors, and other processes equipment. Backed by a modern plant and facilitated with an adaptable production line, we offer highly effective solutions for each customer requirement. Our machinery is ideal for producing the paint and helps increase the quality and cost-effectiveness of the paint manufacturing company. These are very effective for manufacturing paints and easy to use. The offered machine is developed with the help of high-class material and modern techniques. Additionally, these machines are available within a specific time frame at is nominal price and are highly recognized for their reliability, easy operation, and longer service life.',
    products: ['lab-high-speed-disperser', 'dyno-mill', 'vertical-bead-mill', 'basket-mill', 'horizontal-bead-mill', 'attritor-mill-machine', 'bead-mill', 'high-share-in-tank-homogenizer', 'vacuum-high-speed-disperser', 'twin-shaft-disperser'],
  },

  'pharma': {
    title: 'Pharma',
    banner: `${U}/Pharma Industries .jpg`,
    intro:
      'Tipco is known to be a respectable and reliable partner of the pharmaceutical industry. The portfolio of Tipco Engineering includes machines and equipment used for the production of homogenous emulsions and suspension, as well as for drying and mixing of free-flowing solids. Tipco\'s innovative mixing technology covers the entire spectrum of pharmaceutical production: from products low in viscosity such as injections and cough syrup to highly viscous products such as suppositories and dental masses.\nWe are with 35+ years of long-standing experience and continuous collaborations with pharmaceutical companies, Tipco is able to fulfill even the most challenging demands that arise in the pharmaceutical industry today.',
    products: ['dyno-mill', 'vertical-bead-mill', 'basket-mill', 'attritor-mill-machine', 'bead-mill'],
  },

  'chemical': {
    title: 'Chemical',
    banner: `${U}/Chemical Industries .jpg`,
    intro:
      'We offer many machines for the chemical industry for the effective process of mixing and dispersing the solid into the liquid and liquid to liquid. Tipco sets an innovative example: all of Tipco\'s machines for the chemical industry work in an energy-efficient manner. An organization simultaneously achieve higher productivity while requiring minimal space and we provide ideal solutions even when it comes to demanding mixing, dispersing task. The machinery\'s step-up from basic to high-end models allow the organization to invest only in what they actually need. Tipco offers well-priced and robust stirring devices for simple mixing tasks. These machines can even crush and mix generally non-mixable substances thanks to the high-performance rotor systems.',
    products: ['lab-high-speed-disperser', 'horizontal-bead-mill', 'bead-mill', 'high-speed-disperser-with-hydraulic-lifting', 'vacuum-high-speed-disperser'],
  },

  'paint-production': {
    title: 'Paint Production',
    banner: `${U}/Paint Production Setup.jpg`,
    intro:
      'We are the leading brand to set up paint production equipment ranges from single equipment to complete production line capacity. We have successfully setup many semi-automatic and fully automatic paint manufacturing plant in water-based paint, solvent-based paint, water-dilutable coating, water-dispersible paint(latex paint), water-soluble alkyd resin, water-soluble epoxy resin, inorganic polymer water-based resin, etc.\nWater & solvent-based paint production line adopts raw materials auto feeding system, metering system, basket dispersing and milling system, multi-function mixing and tinting system, cleaning system, auto control system, auto-filling ect, with automatic advanced production method. Tipco believes the automatic production process reduces workloads and avoids quality problems caused by human factors and herein improves the quality and efficiency of the product to a large extent.',
    products: ['lab-high-speed-disperser', 'dyno-mill', 'vertical-bead-mill', 'paint-sludge-to-primer-process-production-setup', 'horizontal-bead-mill', 'attritor-mill-machine', 'paint-production-line-setup', 'high-share-in-tank-homogenizer', 'high-speed-disperser-with-hydraulic-lifting'],
  },

  'ink-production': {
    title: 'Ink Production',
    banner: `${U}/ink production.jpg`,
    intro:
      'Tipco industry provides design and manufacturing of complete Ink Production Lines, including water-based ink, UV ink and inkjet. The ink production line adopts raw materials automatic charging, metering system, dispersing and milling system(Basket mill, Horizontal beads mill), mixing system, cleaning system, automatic control system and automatic filling machines with advanced manufacturing methods and technology. The Completely automatic production process reduces workloads and avoids quality problems caused by human factors and improves the quality of product with efficiency to a large extent.\nPrimary applications are suitable for inks, according to solvent: water-based ink, UV ink; and According to plate type: offset print, relief block, lithographic plate, screen printing, inkjet, etc.',
    products: ['dyno-mill', 'vertical-bead-mill', 'basket-mill', 'horizontal-bead-mill', 'attritor-mill-machine', 'ink-production-line', 'bead-mill', 'high-share-in-tank-homogenizer', 'vacuum-high-speed-disperser', 'twin-shaft-disperser'],
  },

  'chemical-production': {
    title: 'Chemical Production',
    banner: `${U}/Chemical Production Setup.jpg`,
    intro:
      'Tipco Engineering has rich experience in equipments, machinery and production setup for the chemical industry with many global chemical enterprises. The mixing equipment is the center of the chemical production line, and the organization needs different mixers with additional features according to different technical requirements. Chemical products are widely used and directly serve industries areas with innovative technology industries of the national economy. In the chemical industry, there are many stages, where mixing, milling, dispersion are required to make a final product or solution and we have more than 35+ years of experience in setup the fully and semi-automated plant. Suitable applications are in pharmaceuticals, pesticides, cosmetics, surfactants, detergents, precision ceramics, and biochemical products.',
    products: ['lab-high-speed-disperser', 'horizontal-bead-mill', 'high-speed-disperser-with-hydraulic-lifting'],
  },

  'powder-production': {
    title: 'Powder Production',
    banner: `${U}/Powder Production.jpg`,
    intro:
      'A fragmented approach to plant design has several pitfalls, and many projects have been largely unsuccessful due to the fact that there was no proper coordination between the various aspects of the project. Here, Tipco\'s expertise comes in a simplified turnkey approach that solves many of the underlying issues. Our complete powder production line sets the mixing machinery as the core and chooses different types of mixer with specific additional functions according to different technics; the former part includes: raw material handling system(unpacking, feeding, crushing, sieving, etc.), raw material conveying system, storage system, batching system and necessary intermediate storage system; the latter part includes: finished products caching system, conveying system, temporary storage system, packing system, stacking system, etc; the steel structure platform, dust collecting system and electric control system we have the complete solution to Setup the production of Powder Production.',
    products: ['plough-share-mixer'],
  },

  'ink': {
    title: 'Ink',
    banner: `${U}/Ink Industries .jpg`,
    intro:
      'We are India’s Leading brand machine manufacturer & exporter in the printing ink industry and also provide customized designs to organizations to produce ink widely used in the printing process. At Tipco, we are the Printing Ink Machine Manufacturers equipped with an excellent speed disperser to dissolve and mix materials with different viscosities for commercial printing and dyeing operations, our manufactured printing ink machine is used to produce high-quality printing ink safely and efficiently. Our printing ink-making machine is available in various technical specifications, so you can purchase the best one that suits your requirements. Our market-leading printing ink manufacturing machine includes advanced technology and high-quality raw materials specially designed to improve product quality and decrease production costs. Our innovative machines and process engineering can help you meet these challenges while improving your product quality and profitability.',
    products: ['dyno-mill', 'vertical-bead-mill', 'basket-mill', 'horizontal-bead-mill', 'attritor-mill-machine', 'bead-mill', 'high-share-in-tank-homogenizer', 'vacuum-high-speed-disperser', 'twin-shaft-disperser'],
  },

  'pesticides-industry': {
    title: 'Pesticides Industry',
    banner: `${U}/Pesticide Industries .jpg`,
    intro:
      'Tipco Engineering provides machines for pesticide enterprises and has a long history of manufacturing pesticide equipment & machines, making it possible for us to provide equipment for many famous pesticide enterprises around the world. Our portfolio includes liquid automatic feeding system, mixing system, dispersing emulsion mixing system, grinding system, automatic filling system, automation control system, and achieved a significant breakthrough in mixing grinding. Pesticide is a common name of one kind of drug that can kill an insect, sterilize and kill harmful animals(weeds) for protecting and enhancing the growth of the plants and crops. It mainly refers to medicine to prevent pests, regulate plants\' growth, and weeds in agriculture. Pesticides can be chemical, biological(such as viruses or bacteria), fungicide, anti-infective agents, or any means to fight pests.',
    products: ['high-speed-disperser-with-hydraulic-lifting', 'twin-shaft-disperser'],
  },

  'lab-machines': {
    title: 'Lab Machines',
    banner: `${U}/Laboratories Industries.jpg`,
    intro:
      'Tipco Lab Machines are designed for a wide variety of research and development work both for institutions as well as companies. There are many different kinds of laboratory machines operating on various input materials. Focusing on this, Tipco’s offers a wide range of lab machines that are highly efficient and demonstrate high surface quality and high accuracy of shape and dimensions. We also provide ease of operation and a high degree of flexibility. For these tasks, our range of products for laboratory purposes includes Lab disperser machine, Lab bead mill, Lab Ball mill machine, Lab Twin-shaft disperser, Lab Mixer & Lab sigma mixer machines. It is essential for any R&D analytical methods to perfectly homogenize the specimen to an adequate degree of analytical fineness.',
    products: ['lab-high-speed-disperser', 'lab-sigma-mixer-machine', 'lab-attritor-mill', 'lab-mixer', 'lab-basket-mill', 'lab-ribbon-blender'],
  },

  'laboratory-machines': {
    title: 'Laboratory Machines',
    banner: `${U}/portfolio-category-38.png`,
    pageTitle: 'Premium Quality Laboratory Machine for Industries at Best Price',
    intro:
      'Tipco Laboratory Machines are designed for a wide variety of research and development work both for institutions as well as companies. There are many different kinds of laboratory machines operating on various input materials. Focusing on this, Tipco’s offers a wide range of lab machines that are highly efficient and demonstrate high surface quality and high accuracy of shape and dimensions. We also provide ease of operation and a high degree of flexibility. For these tasks, our range of products for laboratory purposes includes Lab disperser machine, Lab bead mill, Lab Ball mill machine, Lab Twin-shaft disperser, Lab Mixer & Lab sigma mixer machines. It is essential for any R&D analytical methods to perfectly homogenize the specimen to an adequate degree of analytical fineness.',
    products: ['lab-high-speed-disperser', 'lab-sigma-mixer-machine', 'lab-attritor-mill', 'lab-mixer', 'lab-basket-mill', 'lab-ribbon-blender'],
  },

  'homogenizers': {
    title: 'Homogenizers',
    banner: `${U}/banner.jpeg`,
    pageTitle: 'Homogenizer Machine Manufacturer in India - Tipco Engineering',
    intro:
      'Tipco Engineering provides a wide range of Homogenizers with the latest and improved technology. High shear Homogenizers are fast and efficient and are capable of producing a fine droplet or particle size, typically in the range of 2-5 microns. This degree of homogenization is suitable for the vast majority of products, such as creams and ointments, lotions, sauces and flavor emulsions and in various other industries.',
    products: ['in-tank-homogenizer', 'high-share-in-tank-homogenizer', 'liquid-powder-mixing-machine', 'in-line-homogenizer', 'intank-batch-homogenizer'],
  },

  'disperser-series': {
    title: 'Disperser Series',
    banner: `${U}/banner-2.jpeg`,
    pageTitle: 'Advanced Disperser Series for Paint, Ink & Chemical Processing',
    intro:
      'Dispersers are widely used across industries for dispersing paste such as colour paint, ink, dye, adhesion, ceramic glaze, etc. Besides, we also customized the design based on the property and technology process of the processed material. Dispersers are suitable for stirring and mixing high & low viscosity materials in the paint, coating, printing ink and many others industries. The frame stirring device makes the material be adequately mixed and prevents wall sticking. Our high-speed dispersion allows the materials to be mixed and dispersed adequately. We have a range of Disperser machines like high-speed dispersers, Single Shaft Dispersers, Twin-shaft dispersers, fixed shaft dispersers all of are highly efficient in many cases, which is needed to achieve the required dispersion result.',
    products: ['high-speed-disperser', 'high-speed-disperser-with-gripper', 'high-speed-disperser-with-hydraulic-lifting', 'high-speed-disperser-with-gripper-and-hydraulic', 'vacuum-high-speed-disperser', 'twin-shaft-disperser'],
  },

  'machine-series': {
    title: 'Machine Series',
    banner: `${U}/portfolio-category-45.jpg`,
    intro:
      'Tipco Engineering India Pvt. Ltd. was incorporated in 2021 primarily manufacturers of process plants and machinery required by the Chemical,Polyester Button and related Industries.',
    products: [],
  },

  'milling': {
    title: 'Milling',
    banner: `${U}/portfolio-category-51.png`,
    pageTitle: 'Buy Precision Milling Machines – Reliable & Durable Designs',
    intro:
      'Milling Process is an essential step in the production of paint, ink, and coating formulations. It involves dispersing and mixing solid particles or pigments into a liquid medium to create a uniform and stable product. The process begins with preparing the ingredients and mixing them. The dispersion process breaks down agglomerates into smaller particles using mechanical forces like milling, grinding, or shearing. Various types of milling equipment can be used for this purpose. The milling process ensures even distribution of pigments, enhances color intensity, improves gloss and opacity, and promotes stability and durability.',
    products: ['dyno-mill', 'vertical-bead-mill', 'basket-mill', 'horizontal-bead-mill', 'bead-mill'],
  },

  'coating': {
    title: 'Coating',
    banner: `${U}/portfolio-category-52.jpg`,
    pageTitle: 'Coating Plant Setup in India by Tipco Engineering',
    intro:
      'Setting up a coating production plant involves several key machines that are vital for efficient operations. These machines include a mixer for blending raw materials, a disperser or bead mill for achieving uniform dispersion, and a filtration system for removing impurities. Tipco Engineering provides proper installation, maintenance, and operator training and machines are essential to maximize the performance and productivity of the coating production plant setup.',
    products: ['vertical-bead-mill', 'basket-mill', 'horizontal-bead-mill', 'attritor-mill-machine', 'bead-mill', 'vacuum-high-speed-disperser', 'twin-shaft-disperser'],
  },
}
