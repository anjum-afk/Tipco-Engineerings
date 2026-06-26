// ─────────────────────────────────────────────────────────────
// Per-product rich detail content — transcribed verbatim from the
// live tipcoengineering.com product pages. Keyed by product slug.
// Used by the product detail page (ProductPage.tsx).
// ─────────────────────────────────────────────────────────────

export interface ProductDetail {
  paras: string[]        // description paragraphs
  features: string[]     // "Major Feature" bullet list
  benefits: string[]     // "Benefits" bullet list
  specs: string[][]      // technical info table; row 0 is the header
  pageTitle?: string     // SEO <title> of the live page
}

export const PRODUCT_DETAILS: Record<string, ProductDetail> = {
  'dyno-mill': {
    paras: [
      'Dyno Mill is an agitator bead mill with a horizontal grinding container for dispersion and finest wet grinding in a completely enclosed system. The dyno mill is appropriate for a wide range of items from low to exceptionally gooey pumpable items. Uniquely composed instigator circles, mounted symmetrically on a pole, exchange the vitality required for scattering and wet granulating to the round crushing globules. An outside pump feeds the product into the mill.',
      'Dyno mill is available in different designs and sizes, from small laboratory model up to huge factories for creation plants, offering the ideal size for each application. The mill equipment, material, and grinding bead separation system can be adapted to the individual needs of each application.',
    ],
    features: [
      'Higher Flow Rate',
      'Faster Grinding Process',
      'Comes with Pressure and Temperature Measurement',
      'Minimum Maintenance Cost',
      'A larger Screen Diameter to reduce the pressure in the Chamber',
      'For Low and Medium Viscosity Material',
      'Machine Can Be Used in Paint, Ink & Pigment Grinding',
    ],
    benefits: [
      'Easy Operationally Machines',
      'High Flow rates even with High Viscous Products',
      'Appropriate for High Pressure and Temperature Product',
      'Less Maintenance Required',
      'The machine is Specially designed for Accelerated wet-grading operation',
      'Less Energy Consumption with High Performance',
      'Comes with a narrow particle size reduction and distribution.',
    ],
    specs: [
      ['TIPCO THM Series:', 'THM-10', 'THM-15', 'THM-25'],
      ['Material Output Capacity:', '1-3 Liter Per Min', '2-6 Liter Per Min', '4-10 Liter Per Min'],
      ['Diameter of Beads:', '0.8 -2 mm', '0.8 -2 mm', '0.8 - 2.2 mm'],
      ['Disk Material Type:', 'SS, TC, HCHC (High Carbon High Chromium)', 'SS, TC, HCHC (High Carbon High Chromium)', 'SS, TC, HCHC (High Carbon High Chromium)'],
      ['Actual Volume of Process Chamber:', '6.5 L', '14.5 L', '25 L'],
      ['Tip Speed:', '0-13 m/s', '0-13 m/s', '0-13 m/s'],
      ['Gap Separator Rings:', 'Tungsten Carbide', 'Tungsten Carbide', 'Tungsten Carbide'],
      ['Main Motor Details*:', '10 HP', '15 HP', '25 HP'],
      ['Weight:', '700', '900', '1200'],
      ['Application:', 'Solvent Printing Ink, Solvent Wood Lacquer, Water Based Ink, Solvent Based Paint', 'Same', 'Same'],
    ],
    pageTitle: 'Buy Dyno Mill Machine At Reasonable Price In India',
  },

  'vertical-bead-mill': {
    paras: [
      'Vertical Bead Mill is dispersion processing machines that reduce the size of solid particles (pigments, fillers) and finely scatter them in a liquid condition. Small ceramic, glass, or metal beads are moved inside the mill chamber to help reduce particle size through impact, and energy input when grinding is pumped through the mill.',
      'Bead grinding is the most effective method for processing microscopic particles in the sub-micron or even nanometer size range. A variety of designs exists to match the grinding of different viscosities, physical properties, and targeted particle sizes. Depending on the design of the machine, the machine can operate in separate passes or continuous operations.',
      'Vertical Bead Mill is a small laboratory as well as an industrial machine that is perfect for grinding and dispersing materials into small particles. The mill uses batch-type grinding method, so it is best suited for wet grinding with three corresponding sentences of premixing. Grinding and dispersing can be done simultaneously on this machine.',
    ],
    features: [],
    benefits: [
      'Efficient grinding and dispersion of materials.',
      'High-speed operation for quick processing.',
      'Narrow particle size distribution for consistent results.',
      'Ability to handle a wide range of viscosities.',
      'Enhanced product quality and performance.',
      'Customizable design to meet specific process requirements.',
      'Easy maintenance and cleaning.',
      'Energy-efficient operation.',
      'Reduced processing time and increased productivity.',
      'Cost savings through optimized resource usage.',
    ],
    specs: [
      ['Machine Name TVM-25', 'Technical Specifications'],
      ['Material Output Capacity:', '3-6L'],
      ['Disk Material Type:', 'HCHC, SS, MS'],
      ['Valume of Chamber:', '25L'],
      ['Motor:', '25Hp'],
      ['Motor Power:', '25ph'],
      ['Diameter of Beads:', '1.6 - 2mm'],
      ['Weight:', '800kg'],
    ],
    pageTitle: 'Buy Vertical Bead Mill Machine at Reasonable Price',
  },

  'basket-mill': {
    paras: [
      'Basket Mill (Hydraulic Lifting) is a wet grinding machine applicable for middle and low viscosity fluids and batch type production equipment. Through all-direction strong momentum generated by irregular collision between the grinding beads, the particle size of the materials becomes smaller is suitable for coatings, inks, pigments, colorants, pesticides, cosmetics and other industries with high requirements of fineness. The machine has altered traditional production processing by integrating dispersing and milling two processes into one, which reduces production process significantly. No pump nor valve is required. One machine and one container can finish dispersing and milling together, which increases efficiency greatly and reduce materials waste. Compared to other grinding equipment, it is more convenient to clean and suitable for grinding more varieties of materials.',
    ],
    features: [],
    benefits: [
      'Efficient Dispersion: Basket mills are effective in dispersing pigments and other solid particles in the paint and ink formulation, ensuring a homogeneous mixture.',
      'Uniform Particle Size Reduction: The milling action of basket mills results in a consistent and controlled reduction in particle size, contributing to the desired characteristics of the final product.',
      'High Shear Forces: Basket mills generate high shear forces, facilitating the breakdown of agglomerates and promoting the optimal distribution of pigments throughout the liquid medium.',
      'Adjustable Fineness: Operators can control the fineness of the final product by adjusting the milling parameters, allowing for customization based on specific requirements.',
      'Short Processing Time: Basket mills offer relatively quick processing times, contributing to efficiency and productivity in the paint and ink manufacturing process.',
      'Versatility: These mills can handle a variety of formulations and are adaptable to different types of pigments and raw materials commonly used in the paint and ink industry.',
      'Reduced Risk of Contamination: The closed design of the basket mill minimizes the risk of contamination, ensuring the purity and quality of the final paint or ink.',
      'Easy Cleaning and Maintenance: Basket mills often feature designs that facilitate easy cleaning between batches and straightforward maintenance, contributing to operational convenience.',
      'Energy Efficiency: Compared to some other milling equipment, basket mills can be energy-efficient, making them a cost-effective choice for paint and ink manufacturers.',
      'Scalability: Basket mills are available in various sizes, allowing manufacturers to scale up or down based on production needs, providing flexibility in the manufacturing process.',
    ],
    specs: [],
    pageTitle: 'Basket Mill Machine Manufacturer | Tipco Engineering',
  },

  'horizontal-bead-mill': {
    paras: [
      'Horizontal Bead Mill is suitable for grinding, milling, and dispersion of liquid-phase particulate materials such as surface coating, dyes, pigments, printing ink, pesticides, and paper industries. The machinery is designed for continuous production with effective grading and dispersing, suitable for low-middle-viscosity materials. The grinding mechanism is totally enclosed and solvent loss is cut down to a minimum specifically designed to incorporate rotating disc-type agitation.',
    ],
    features: [
      'Improved Cooling System',
      'Higher Productivity',
      'Higher Flow Rate',
      'Faster Grinding Process',
      'Comes with Pressure and Temperature Measurement',
      'Minimum Maintenance Cost',
      'Larger Screen Diameter to reduce the pressure in Chamber',
      'For Low and Medium Viscosity Material',
      'Machine Can Be Used in Paint, Ink & Pigment Grinding',
    ],
    benefits: [
      'Easy Operationally Machines',
      'High Flow rates even with High Viscous Products',
      'Appropriate for High Pressure and Temperature Product',
      'Less Maintenance Required',
      'The machine is Specially designed for Accelerated wet Grading operation',
      'Less Energy Consumption with High Performance',
      'Comes with a narrow particle size reduction and distribution.',
    ],
    specs: [
      ['TIPCO C-Series:', 'C-02', 'C-60', 'C-100'],
      ['Material Output Capacity:', '4-6 Liter Per Min', '6-20 Liter Per Min', '15-35 Liter Per Min'],
      ['Chamber Volume:', '30 Liter', '55 Liter', '90 Liter'],
      ['Diameter of Beads:', '0.8 -2 mm', '0.8 -2 mm', '0.8 - 2.2 mm'],
      ['Disk Material Type:', 'SS, TC, HCHC( High Carbon High Chromium)', 'SS, TC, HCHC( High Carbon High Chromium)', 'SS, TC, HCHC( High Carbon High Chromium)'],
      ['Actual Volume of Process Chamber:', '30 L', '50 L', '85 L'],
      ['Tip Speed:', '8-10 m/s', '7-12 m/s', '6-11 m/s'],
      ['Stator Type:', 'SS, HCHC (High Carbon High Chromium)', 'SS, TC, HCHC (High Carbon High Chromium)', 'SS, HCHC (High Carbon High Chromium)'],
      ['Rotors Type:', 'SS, HCHC (High Carbon High Chromium)', 'SS, TC, HCHC (High Carbon High Chromium)', 'SS, TC, HCHC (High Carbon High Chromium)'],
      ['Pins:', 'Carbide', 'Carbide', 'Carbine'],
      ['Main Motor Details:', '30HP', '50HP', '60HP'],
      ['Weight:', '1200 kg', '1500 kg', '2200 kg'],
      ['Application:', 'Water Based Paper Coating, Water Based Ink, Solvent Based Paint', 'Same', 'Same'],
    ],
    pageTitle: 'Horizontal Bead Mill Machine - Tipco Engineering',
  },

  'attritor-mill-machine': {
    paras: [
      'Tipco Engineering Attritor Mill Machine is used for high output fine grinding machine employs the well-known principle of grinding & dispersing with agitated balls. The materials take a shorter grinding time in our Attritor Mill.',
      'We are one of the foremost Manufacturers and Suppliers of Fluid & Powder Machinery used in various industries. The wide range that we offer includes Ball Mill, Basket Mill, Drum Filter, and many more. In addition to this, our products are stringently tested on various parameters to make sure that we are maintaining our high-quality standard.',
    ],
    features: [],
    benefits: [],
    specs: [],
    pageTitle: 'Attritor Mill Machine Manufacturer in India - Tipco Engineering',
  },

  'bead-mill': {
    paras: [
      'Bead Mill is an agitator bead mill with a horizontal grinding container for dispersion and the finest wet grinding in a completely enclosed system. The dyno mill is appropriate for a wide range of low to exceptionally gooey pumpable items. Uniquely composed instigator circles, mounted symmetrically on a pole, exchange the vitality required for scattering and wet granulating to the round crushing globules. An outside pump feeds the product into the mill.',
      'Bead Mill is available in different designs and sizes, from small laboratory models to huge factories for creating plants, offering the ideal size for each application. The mill equipment, material, and grinding bead separation system can be adapted to the individual needs of each application.',
    ],
    features: [
      'Improved Cooling System',
      'Higher Productivity',
      'Higher Flow Rate',
      'Faster Grinding Process',
      'Comes with Pressure and Temperature Measurement',
      'Minimum Maintenance Cost',
      'A larger Screen Diameter to reduce the pressure in the Chamber',
      'For Low and Medium Viscosity Material',
      'Machine Can Be Used in Paint, Ink & Pigment Grinding',
    ],
    benefits: [
      'Easy Operationally Machines',
      'High Flow rates even with High Viscous Products',
      'Appropriate for High Pressure and Temperature Product',
      'Less Maintenance Required',
      'The machine is Specially designed for Accelerated wet-grading operation',
      'Less Energy Consumption with High Performance',
      'Comes with a narrow particle size reduction and distribution.',
    ],
    specs: [
      ['TIPCO THM Series:', 'THM-10', 'THM-15', 'THM-25'],
      ['Material Output Capacity:', '1- 3 Liter Per Min', '2-6 Liter Per Min', '4-10 Liter Per Min'],
      ['Diameter of Beads:', '0.8 -2 mm', '0.8 -2 mm', '0.8 - 2 mm'],
      ['Disk Material Type:', 'SS, TC, HCHC (High Carbon High Chromium)', 'SS, TC, HCHC (High Carbon High Chromium)', 'SS, TC, HCHC (High Carbon High Chromium)'],
      ['Actual Volume of Process Chamber:', '6.5 L', '14.5 L', '25 L'],
      ['Tip Speed:', '0-13 m/s', '0-13 m/s', '0-13 m/s'],
      ['Gap Separator Rings:', 'Tungsten Carbide', 'Tungsten Carbide', 'Tungsten Carbide'],
      ['Main Motor Details*:', '10 HP', '15 HP', '25 HP'],
      ['Weight:', '700', '900', '1200'],
      ['Application:', 'Solvent Printing Ink, Solvent Wood Lacquer, Water Based Ink, Solvent Based Paint', 'Same', 'Same'],
    ],
    pageTitle: 'Bead Mill Machine Manufacturer & Suppliers',
  },

  'paint-sludge-to-primer-process-production-setup': {
    paras: [
      'The production line consists of additive storage and batching system vacuum charging system, solvent storage tank, Tipco Sigma Mixer for process the solvent dilution into the semi-liquid and the further process High-Speed Disperser - HSD30HP then semi-liquid is processed in Homogenizer HSH-30HP after that the processed is completed and goes to the storage system and finally go for the packing.',
    ],
    features: [],
    benefits: [],
    specs: [],
    pageTitle: 'Best Paint and Primer Making Machine Manufacturer and Supplier',
  },

  'paint-production-line-setup': {
    paras: [
      'We are the leading brand to set up paint production equipment ranging from single equipment to complete production line capacity. We have successfully set up many semi-automatic and fully automatic paint manufacturing plants in water-based paint, solvent-based paint, water-dilutable coating, water-dispersible paint(latex paint), water-soluble alkyd resin, water-soluble epoxy resin, inorganic polymer water-based resin, etc.',
      'Water & solvent-based paint production line adopts raw materials auto feeding system, metering system, basket dispersing and milling system, multi-function mixing and tinting system, cleaning system, auto control system, auto-filling, etc, with the automatic advanced production method. Tipco believes the automatic production process reduces workloads and avoids quality problems caused by human factors and herein improves the quality and efficiency of the product to a large extent.',
    ],
    features: [
      'Meterials Feeding Syestem',
      'Granding System for Paint Making',
      'Tinting System',
      'Discharging & Filtation System',
      'Filling Sustem',
      'Contral System',
      'Operation Platform',
      'Pipeline System',
    ],
    benefits: [],
    specs: [],
    pageTitle: 'Paint Production Line Setup Online - Tipco Engineering',
  },

  'ink-production-line': {
    paras: [
      'We are India’s Leading brand machine manufacturer & exporter in Ink industry and also provide customised designs to organisations to produce ink widely used in the printing process. At Tipco, we are the Printing Ink Machines Manufacturer equipped with an excellent speed disperser to dissolve and mix materials with different viscosities for commercial printing and dyeing operations, our manufactured printing ink machine is used to produce high-quality printing ink safely and efficiently. Our market-leading printing ink manufacturing machine includes advanced technology and high-quality raw materials specially designed to improve product quality and decrease production costs. Our innovative machines and process engineering can help you meet these challenges while improving your product quality and profitability.',
      'Water Based Ink.',
      'Solvent Based Ink',
    ],
    features: [],
    benefits: [],
    specs: [],
    pageTitle: 'Best Ink Making Machine Manufacturer In India.',
  },

  'lab-sigma-mixer-machine': {
    paras: [
      'Lab Sigma Mixer Machine is used for managing very viscous materials, it is essential to support both tangential and oblique motion of the substance. The geometry and profile of the sigma blade are intended such that the glutinous mass of a substance is pulled, sheared, dense, kneaded, and folded by the exploit of the blade next to the walls of the mixer trough. The amount to which this happens depends on the exploit of the blades - peripheral or overlap and the ratio of the speed of replacement of the blades. The twist angle of the blade can be customized depending on the necessary shearing.',
    ],
    features: [
      'Double-arm spiral blade design for efficient and thorough mixing.',
      'Unique kneading action ensures uniform mixing of materials.',
      'Facilitates excellent heat transfer for applications requiring heating or cooling.',
      'Precise control over mixing parameters ensures consistent quality in every batch.',
    ],
    benefits: [
      'Efficient Mixing: The Lab Sigma Mixer ensures efficient mixing of materials due to its unique design. Its double-arm spiral blades provide a thorough and uniform mixing of ingredients, resulting in homogenous mixtures.',
      'Versatility: Lab Sigma Mixer is highly versatile and can handle a wide range of materials, including powders, pastes, creams, gels, and even high-viscosity materials.',
      'Excellent Heat Transfer: The Lab Sigma Mixer is designed to provide excellent heat transfer during the mixing process. The double-arm spiral blades create a kneading action that facilitates heat transfer, making it ideal for applications that require heating or cooling of the mixture.',
      'Easy to Clean: The Lab Sigma Mixer is designed with ease of cleaning in mind. Its removable blades and easily accessible mixing chamber allow for quick and thorough cleaning, reducing downtime between batches and ensuring product purity.',
      'Consistent Quality: The Lab Sigma Mixer ensures consistent quality in every batch. Its precise control over mixing parameters such as speed, temperature, and mixing time guarantees reproducibility and minimizes batch-to-batch variations.',
    ],
    specs: [
      ['Motor Power', 'Motor RPM', 'Phase', 'Jacket', 'Power Supply'],
      ['1 hp', '1440', '3ph', '2.5-3mm', '440 Volt'],
    ],
    pageTitle: 'Lab Sigma Mixer Machine Manufacturer & Suppliers',
  },

  'industrial-wall-putty-mixer-machine': {
    paras: [
      'It is widely used for mixing and powder, and powder and liquid. When mixing solid with liquid, liquid spraying or aerosol spraying system is optional.',
      'Our Industrial Wall Putty Machine has a high-speed rotating cutter that can enhance mixing efficiency to break the cacked material quickly.',
    ],
    features: [],
    benefits: [],
    specs: [],
    pageTitle: 'Buy Industrial Wall Putty Mixing Machine',
  },

  'plough-share-mixer': {
    paras: [
      'Plough Sear Mixer is widely used for mixing powder and powder, powder and liquid, powder and granule. When mixing solid with liquid, liquid spraying or aerosol spraying system is optional.',
      'High-Speed rotating cutter enhances mixing efficiency to break the cacked materials quickly. For materials with smaller particle sizes, we adopt double sealing to ensure excellent airtightness.',
    ],
    features: [],
    benefits: [],
    specs: [],
    pageTitle: 'Horizontal Plough Share Mixer - Tipco Engineering',
  },

  'liquid-powder-mixing-machine': {
    paras: [
      'TIPCO offers Liquid Powder Mixing ( LPM ) solutions for powder wetting and dispersing machines that provide fast, lump-free wetting and dispersing of various powders or granules in liquids. Suitable for both continuous as well as batch (recirculation) processes.',
      'TIPCO LPM works on a special Rotor Stator System that generates a large negative pressure and absorbs powder, without dust formation and loss-free, directly into the liquid. The inducted powder is dispersed immediately and under high shear.',
    ],
    features: [
      'No dust or solvent emissions',
      'Agglomerates and caking are prevented',
      'Avoids Lump formation',
      'Shorter production times',
      'Improved and constant mixture quality',
      'Efficient use of raw materials',
      'Easy and fail-safe handling',
      'Automation optionally available',
      'Reliable scale-up of mixing processes from the lab to production',
      'Compact design minimizes space requirements',
      'Easy installation/compatibility with existing plants',
      'Various design Options like Trolley type, suction from Hose, suction from the Funnel and Silo bags with automation.',
    ],
    benefits: [],
    specs: [],
    pageTitle: 'Liquid Powder Mixing Machine in India at Best Price',
  },

  'lab-high-speed-disperser': {
    paras: [
      'Lab High Speed Disperser is mainly used in industrial department and small-scale R&D laboratories for mixing, dissolving and dispersing of materials with different viscosities. It is the ideal machine to get your manufacturing process right before scaling to production.',
    ],
    features: [],
    benefits: [],
    specs: [],
    pageTitle: 'Lab High Speed Disperser Manufacturer & Suppliers',
  },

  'lab-attritor-mill': {
    paras: [
      'Tipco Engineering Lab Attritor Mill Machine is used for high output fine grinding machine employs the well-known principle of grinding & dispersing with agitated balls. The materials take a shorter grinding time in our Attritor Mill.',
      'We are one of the foremost Manufacturers and Suppliers of Fluid & Powder Machinery used in various industries. The wide range that we offer includes Ball Mill, Basket Mill, Drum Filter, and many more. In addition to this, our products are stringently tested on various parameters to make sure that we are maintaining our high-quality standard.',
    ],
    features: [],
    benefits: [],
    specs: [
      ['Motor Power', 'Motor RPM', 'Phase', 'Shaft', 'Thinckness of Tank', 'Rod Dia', 'Power Supply'],
      ['1 hp', '1440', '3ph', '25mm', '3mm/4mm', '6”', '440 Volt'],
    ],
    pageTitle: 'Buy Lab Attritor Mill Machine Manufacturer',
  },

  'lab-mixer': {
    paras: [
      'Tipco Engineering Lab Mixer Machine is used for high output fine grinding machine employs the well-known principle of grinding & dispersing with agitated balls. The materials take a shorter grinding time in our Lab Mixer.',
      'We are one of the foremost Manufacturers and Suppliers of Fluid and powder Machinery used in various industries. The wide range that we offer includes a Ball Mill, Basket Mill, and many other Lab Machines. In addition to this, our products are stringently tested on various parameters to make sure that we are maintaining our high-quality standard.',
    ],
    features: [],
    benefits: [],
    specs: [
      ['Motor Power', 'Motor RPM', 'Phase', 'Shaft', 'Hydraulic Lifting', 'Blade', 'Power Supply'],
      ['1 hp', '1440', '3ph', '25mm', '720', '4”', '440 Volt'],
    ],
    pageTitle: 'Lab Mixer Machine Manufacturer in India | Laboratory Mixer',
  },

  'lab-basket-mill': {
    paras: [
      'Lab Basket Mill (Hydraulic Lifting) is a wet grinding machine applicable for middle and low viscosity fluids and batch-type production equipment. Through all-direction strong momentum generated by the irregular collision between the grinding beads, the particle size of the materials becomes smaller is suitable for coatings, inks, pigments, colourants, pesticides, cosmetics and other industries with high requirements of fineness. The machine has altered traditional production processing by integrating dispersing and milling two processes into one, which reduces the production process significantly. No pump nor valve is required. One machine and one container can finish dispersing and milling together, which increases efficiency greatly and reduce materials waste. Compared to other grinding equipment, it is more convenient to clean and suitable for grinding more varieties of materials.',
    ],
    features: [],
    benefits: [],
    specs: [],
    pageTitle: 'Lab Basket Mill Machine - Tipco Engineering',
  },

  'lab-ribbon-blender': {
    paras: [
      'We offer a premium quality Lab Ribbon Blender Mixer for your laboratories & small production use. This machine is handy for producing highly viscous products such as polyester putty, distemper, and emulsion paint.',
    ],
    features: [
      'Efficient Mixing: The lab ribbon blender is designed to efficiently mix dry powders, granules, and other materials to achieve a uniform blend.',
      'Gentle Blending: It ensures gentle blending to prevent damage or degradation of the materials being mixed.',
      'Customizable: The blender can be customized with various ribbon configurations and speeds to accommodate different materials and mixing requirements.',
      'Hygienic Design: Many lab ribbon blenders are constructed with sanitary features, making them suitable for use in the pharmaceutical, food, and cosmetic industries.',
      'Easy to Clean: The design facilitates easy cleaning and maintenance, crucial for maintaining product quality and preventing cross-contamination.',
    ],
    benefits: [
      'Less Ower Consumption',
      'Highly Efficient Result',
      'Compact Design',
    ],
    specs: [],
    pageTitle: 'Lab Ribbon Blender for Mixing & Milling - Tipco Engineering',
  },

  'in-tank-homogenizer': {
    paras: [
      'Tipco High-Shear In-Tank Homogenizer can be used to create emulsions, suspensions, lyosols (gas dispersed in a liquid), and granular products. It is used in the paint, adhesives, chemical, cosmetic, food, pharmaceutical, and plastics industries for emulsification, homogenization, particle size reduction, and dispersion, and in today’s world with a lot of new evolutions, process changes to improve the quality and efficiency of the production process, the use of High shear Homogenizers are more. Our Homogenizers are fast and efficient and are capable of producing a fine droplet or particle size, typically in the range of 2 -5 microns. This degree of homogenization is suitable for the vast majority of products, such as creams and ointments, lotions, sauces, and flavor emulsions, and in various other industries.',
    ],
    features: [
      'High-speed impellers create intense turbulence for thorough mixing.',
      'Ideal for emulsification, dispersion, and particle size reduction.',
      'Ensures uniformity and consistency in liquid blending within the tank.',
      'Widely used in food and beverage, pharmaceutical, and cosmetic industries.',
      'Contributes to improved product quality and production efficiency.',
    ],
    benefits: [
      'Enhances product stability and shelf life.',
      'Reduces production time and costs.',
      'Ensures consistent product quality.',
      'Facilitates efficient and thorough mixing.',
      'Enables versatile applications across different industries.',
    ],
    specs: [],
    pageTitle: 'High Share In-Tank Homogenizer',
  },

  'high-share-in-tank-homogenizer': {
    paras: [
      'In-Tank Homogenizer is a machine used for the blending and mixing of liquids within a tank. It is designed to effectively reduce particle sizes and create a uniform mixture. By using high-speed impellers or rotors, the in-tank homogenizer generates intense turbulence, resulting in a consistent and homogeneous product. This equipment is commonly employed in industries such as food and beverage, pharmaceuticals, and cosmetics for processes like emulsification, dispersion, and particle size reduction. The in-tank homogenizer significantly contributes to improved product quality, enhanced stability, and efficient production processes in various manufacturing applications.',
    ],
    features: [
      'Efficient Mixing: In-tank homogenizers provide efficient mixing and blending of liquids, powders, and other ingredients, ensuring uniformity and consistency in the final product.',
      'High Shear Capability: These homogenizers are capable of producing high shear forces, effectively breaking down particles and achieving desired particle size reduction or emulsification.',
      'Versatility: In-tank homogenizers can handle a wide range of viscosities and can be used for various applications, including food and beverage processing, pharmaceuticals, cosmetics, and more.',
      'Easy Integration: They can be easily integrated into existing production lines or tanks, minimizing installation time and costs.',
      'Process Control: In-tank homogenizers offer precise control over process parameters such as speed, time, and intensity, allowing for fine-tuning of the homogenization process.',
      'Sanitary Design: These homogenizers are designed with hygienic considerations, featuring smooth surfaces, sanitary seals, and easy disassembly for cleaning and maintenance.',
      'Scalability: In-tank homogenizers can be scaled up or down to accommodate different batch sizes, making them suitable for both small-scale and industrial production.',
      'Energy Efficiency: They are designed to be energy-efficient, minimizing energy consumption and reducing operational costs.',
      'Safety Features: In-tank homogenizers are equipped with safety features such as overload protection, motor thermal protection, and safety interlocks to ensure safe operation.',
      'Durability: With their robust construction and high-quality materials, in-tank homogenizers offer long-lasting performance and reliability.',
    ],
    benefits: [
      'Improved safety and awareness',
      'Increased productivity and efficiency',
      'Long-lasting performance',
      'Versatility for different surfaces and applications',
      'Easy application',
      'Cost-effective solution',
    ],
    specs: [],
    pageTitle: 'High Share In-Tank Homogenizer Manufacturer and Suppliers',
  },

  'in-line-homogenizer': {
    paras: [
      'In-line homogenizer is a high-pressure mechanical device used for creating a stable mixture or emulsion of two or more immiscible liquids, or for reducing the size of particles in a liquid. It is commonly employed in industries such as food and beverage, pharmaceuticals, and cosmetics for processes such as emulsification, dispersion, and particle size reduction.',
    ],
    features: [
      'High Pressure Homogenization: Capable of subjecting materials to high pressure, leading to thorough mixing and uniform particle size reduction.',
      'Emulsification: Efficiently creates stable emulsions of immiscible liquids, crucial for various industries such as food, pharmaceuticals, and cosmetics.',
      'Particle Size Reduction: Effectively reduces the size of particles in liquids, leading to improved product stability and consistency.',
      'Scalability: Suitable for both laboratory and industrial-scale operations, offering versatility in production processes.',
      'Customization: Can be tailored to specific process requirements, with options for different pressure levels and configurations to achieve desired results.',
      'Hygienic Design: Many in-line homogenizers are designed with sanitary features, making them suitable for use in industries with stringent cleanliness standards.',
      'Continuous Processing: Enables continuous mixing and homogenization, contributing to efficient and streamlined production processes.',
    ],
    benefits: [],
    specs: [],
    pageTitle: 'Buy In-line homogenizer Online at Best Price',
  },

  'intank-batch-homogenizer': {
    paras: [
      'Tipco Batch In-Tank Homogenizer can be used to create emulsions, suspensions, lyosols (gas dispersed in a liquid), and granular products. It is used in the paint, adhesives, chemical, cosmetic, food, pharmaceutical, and plastics industries for emulsification, homogenization, particle size reduction, and dispersion, and in today’s world with a lot of new evolutions, process changes to improve the quality and efficiency of the production process, the use of High shear Homogenizers are more. Our Homogenizers are fast and efficient and are capable of producing a fine droplet or particle size, typically in the range of 2 -5 microns. This degree of homogenization is suitable for the vast majority of products, such as creams and ointments, lotions, sauces, and flavor emulsions, and in various other industries.',
    ],
    features: [
      'High-speed impellers create intense turbulence for thorough mixing.',
      'Ideal for emulsification, dispersion, and particle size reduction.',
      'Ensures uniformity and consistency in liquid blending within the tank.',
      'Widely used in food and beverage, pharmaceutical, and cosmetic industries.',
      'Contributes to improved product quality and production efficiency.',
    ],
    benefits: [
      'Enhances product stability and shelf life.',
      'Reduces production time and costs.',
      'Ensures consistent product quality.',
      'Facilitates efficient and thorough mixing.',
      'Enables versatile applications across different industries.',
    ],
    specs: [],
    pageTitle: 'Buy Intank Batch Homogenizer Online - Tipco Engineering',
  },

  'high-speed-disperser': {
    paras: [
      'Single Shaft High-Speed Disperser Machine is commonly used in chemicals for mixing and distribution with variable frequency speed adjustment. Currently available for customers to choose from the ordinary or the explosion-proof models.',
      'Items of this equipment with blade distributor are designed on request with variable specifications of power. With a hydraulic lift system, these machines lift the distance and center distance between the base and the scattered axles. If required, a User-friendly hydraulic lift system of 180°orotation is available, it is easily operated.',
    ],
    features: [
      'Suitable for Industrial production',
      'Hydraulic lift system for the convenience of machine handling.',
      'Low investment will be required to purchase this product.',
      'Speed controller with easy to operate this machine.',
      'The machine comes with a 0-1440 RPM speed controller.',
      'Mass production for large industries.',
      'The machine comes with changeable blades',
    ],
    benefits: [
      'Efficient dispersion and uniform mixing.',
      'Customizability to meet specific process requirements.',
      'Precise control over the mixing process.',
      'Enhanced operator safety with built-in safety features.',
      'Improved product quality and performance.',
      'Increased product stability and shelf life.',
      'Cost savings through reduced processing time and optimized resource usage.',
    ],
    specs: HSD_SPECS(),
    pageTitle: 'High Speed Disperser for Industrial Mixing at Best Price',
  },

  'high-speed-disperser-with-gripper': {
    paras: [
      'High-Speed Disperser Machine with a Gripper is commonly used in chemicals, paint, and ink for mixing and distribution with variable frequency speed adjustment. Currently available for customers to choose from the ordinary or the explosion-proof models.',
      'Items of this equipment with blade distributor are designed on request with variable specifications of power. With a hydraulic lift system, these machines lift the distance and center distance between the base and the scattered axles. If required, a User-friendly hydraulic lift system of 180°orotation is available, it is easily operated.',
    ],
    features: [
      'Suitable for Industrial Production',
      'Hydraulic lift system for the convenience of machine handling.',
      'Low investment will be required to purchase this product.',
      'Speed controller with easy to operate this machine.',
      'The machine comes with a 0-1440 RPM speed controller.',
      'Mass production for large industries.',
      'The machine comes with changeable blades',
    ],
    benefits: [
      'Efficient dispersion and uniform mixing.',
      'Customizability to meet specific process requirements.',
      'Precise control over the mixing process.',
      'Enhanced operator safety with built-in safety features.',
      'Improved product quality and performance.',
      'Increased product stability and shelf life.',
      'Cost savings through reduced processing time and optimized resource usage.',
    ],
    specs: HSD_SPECS(),
    pageTitle: 'High Speed Disperser with Gripper Technology',
  },

  'high-speed-disperser-with-hydraulic-lifting': {
    paras: [
      'Suitable for stirring and mixing high-viscosity materials in paint, coating, and printing ink industries. The frame stirring device makes the material be mixed and prevents wall sticking. The high-speed dispersion makes the materials be mixed and dispersed adequately and the product can reach the requirement in a short time. Dispersing and mixing can go at the same time and result in an ideal effect. Various agitator types: Anchor agitator with scraper, three-blade, high-speed dispersion disc, high shear emulsifier, screw agitator, multi-layer impellers, etc. The agitator can be designed according to the properties of the materials and the requirements of different production technologies.',
    ],
    features: [
      'Suitable for Industrial production',
      'Hydraulic lift system for the convenience of machine handling.',
      'Low investment will be required to purchase this product.',
      'Speed controller with easy to operate this machine.',
      'The machine comes with a 0-1440 RPM speed controller.',
      'Mass production for large industries.',
      'The machine comes with changeable blades',
    ],
    benefits: [],
    specs: HSD_SPECS(),
    pageTitle: 'Buy High Speed Disperser Machine With Hydraulic Lifting',
  },

  'high-speed-disperser-with-gripper-and-hydraulic': {
    paras: [
      'Tipco High Speed Disperser with Gripper and Hydraulic is Suitable for stirring and mixing high-viscosity materials in the paint, coating, and printing ink industries. The frame stirring device makes the material be mixed and prevents wall sticking. The high-speed dispersion makes the materials be mixed and dispersed adequately and the product can reach the requirement in a short time. Dispersing and mixing can go at the same time and result in an ideal effect. Various agitator types: Anchor agitator with scraper, three-blade, high-speed dispersion disc, high shear emulsifier, screw agitator, multi-layer impellers, etc. The agitator can be designed according to the properties of the materials and the requirements of different production technologies.',
    ],
    features: [
      'Suitable for Industrial production',
      'Hydraulic lift system for the convenience of machine handling.',
      'Low investment will be required to purchase this product.',
      'Speed controller with easy to operate this machine.',
      'The machine comes with a 0-1440 RPM speed controller.',
      'Mass production for large industries.',
      'The machine comes with changeable blades',
    ],
    benefits: [],
    specs: HSD_SPECS(),
    pageTitle: 'High Speed Disperser with Gripper and Hydraulic',
  },

  'vacuum-high-speed-disperser': {
    paras: [
      'Tipco Vacuum High Speed Disperserg is Suitable for stirring and mixing high-viscosity materials in the paint, coating, and printing ink industries. The frame stirring device makes the material be mixed and prevents wall sticking. The high-speed dispersion makes the materials be mixed and dispersed adequately and the product can reach the requirement in a short time. Dispersing and mixing can go at the same time and result in an ideal effect. Various agitator types: Anchor agitator with scraper, three-blade, high-speed dispersion disc, high shear emulsifier, screw agitator, multi-layer impellers, etc. The agitator can be designed according to the properties of the materials and the requirements of different production technologies.',
    ],
    features: [
      'Suitable for Industrial production',
      'Hydraulic lift system for the convenience of machine handling.',
      'Low investment will be required to purchase this product.',
      'Speed controller with easy to operate this machine.',
      'The machine comes with a 0-1440 RPM speed controller.',
      'Mass production for large industries.',
      'The machine comes with changeable blades',
    ],
    benefits: [],
    specs: HSD_SPECS(),
    pageTitle: 'Vacuum High Speed Disperser Manufacturer in India',
  },

  'twin-shaft-disperser': {
    paras: [
      'Twin Shaft Disperser Machine is a reliable and efficient solution for the paint, ink, and coating industries. Its ability to effectively disperse and mix materials leads to improved product quality, reduced processing time, and increased productivity. With its versatility and advanced features, it serves as an essential tool for achieving optimal results in the formulation and production of paints, inks, and coatings.',
    ],
    features: [
      'High-Speed Disperser Blades: Disperser blades attached to each shaft are designed to rotate at high speeds, ranging from 500 to 1440 RPM.',
      'Adjustable Speed and Blade Configurations: The machine offers adjustable speed controls, allowing operators to modify the mixing intensity according to the specific requirements of the materials being processed.',
      'Advanced Control Systems: Twin shaft dispersers are equipped with advanced control systems that enable precise control over the mixing process.',
      'Safety Features: The disperser is designed with safety in mind. It is equipped with safety interlocks, emergency stop buttons, and protective covers to prevent accidents and protect operators from potential hazards.',
      'Customization Options: Twin shaft dispersers can be customized to meet specific process requirements. Optional features such as variable frequency drives, hydraulic lifting systems, and vacuum capabilities can be added to enhance performance and versatility.',
    ],
    benefits: [
      'Efficient dispersion and uniform mixing.',
      'Customizability to meet specific process requirements.',
      'Precise control over the mixing process.',
      'Enhanced operator safety with built-in safety features.',
      'Improved product quality and performance.',
      'Increased product stability and shelf life.',
      'Cost savings through reduced processing time and optimized resource usage.',
    ],
    specs: [],
    pageTitle: 'Twin Shaft Disperser Machine Manufacturer in India',
  },
}

// The HSD (High Speed Disperser) series share one technical table across
// all disperser variants — defined once and reused.
function HSD_SPECS(): string[][] {
  return [
    ['TIPCO HSD Series:', 'HS-0.5', 'HS-1', 'HS-2', 'HS-2.1'],
    ['Capacity', '50-200 Ltr', '200-500 Ltr', '500-1000 Ltr', '1000-1500 Ltr'],
    ['Motor Power', '5HP', '10HP', '15/20HP', '25/30/40HP'],
    ['Motor RPM', '1440', '1440', '1440', '1440'],
    ['Hydraulic Lifting', '900MM', '1100MM', '1200MM', '1400'],
    ['Hydraulic Motor', '1HP', '1HP', '1HP', '2HP'],
    ['Hydraulic Motor RPM', '1440', '1440', '1440', '1440'],
    ['Shaft Dia', '45MM', '60MM', '65/70MM', '75/80MM'],
    ['Blade', '6"-8"', '10', '12"', '14"'],
  ]
}
