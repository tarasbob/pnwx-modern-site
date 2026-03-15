import type { Category } from "../types";

export const accessoriesCategories: Category[] = [
  {
    slug: "darkroom",
    name: "Darkroom Products",
    description:
      "Essential darkroom accessories and equipment including film processors, chemical mixers, safelights, thermometers, timers, and silver recovery systems for analog radiography workflows.",
    seoTitle: "Darkroom X-Ray Products & Accessories | Pacific Northwest X-Ray",
    seoDescription:
      "Shop darkroom accessories for radiology: film processors, chemical mixers, safelights, thermometers, timers, ID printers, and silver recovery systems. Since 1997.",
    itemCount: 10,
    image: "/images/Accessories/Darkroom/Safelight_but.jpg",
    subcategories: [
      { slug: "film-processor", name: "Automatic Film Processor", description: "Table-top automatic film processor still available for analog workflows.", seoTitle: "X-Ray Film Processor | PNWX", seoDescription: "Protec OPTIMAX table-top automatic x-ray film processor. Made in Germany.", parentSlug: "darkroom" },
      { slug: "chemical-mixers", name: "Chemical Mixers", description: "Versatile chemical mixers for X-Ray, graphic arts, and photo products with specific gravity mixing.", seoTitle: "Darkroom Chemical Mixers | PNWX", seoDescription: "IS-199 chemical mixers with specific gravity mixing for x-ray film processing.", parentSlug: "darkroom" },
      { slug: "film-transport", name: "Film Transport Cases", description: "Convenient cases for transporting heavy cassettes or films between departments.", seoTitle: "Film Transport Cases | PNWX", seoDescription: "X-ray film transport cases for safely moving cassettes and films.", parentSlug: "darkroom" },
      { slug: "duplicators", name: "Film Duplicators", description: "X-Ray film duplicators for making copies of existing radiographs.", seoTitle: "X-Ray Film Duplicators | PNWX", seoDescription: "Wolf film duplicators in multiple sizes for copying x-ray films.", parentSlug: "darkroom" },
      { slug: "id-printers", name: "Film Identification Imprinters", description: "Imprinting printers for permanent patient and facility identification on x-ray films.", seoTitle: "Film ID Printers | PNWX", seoDescription: "Film identification imprinters for permanent imaging of patient information onto x-ray films.", parentSlug: "darkroom" },
      { slug: "safelights", name: "Safelights", description: "Wall-mounted, ceiling-mount, fluorescent safelights, combination lights, and darkroom flashlights.", seoTitle: "Darkroom Safelights | PNWX", seoDescription: "Complete selection of darkroom safelights: swivel, angular, circular, fluorescent, and flashlights with GBX filters.", parentSlug: "darkroom" },
      { slug: "signs", name: "Signs", description: "Darkroom and radiology department in-use signs, warning signs, and safety signage.", seoTitle: "Radiology Signs | PNWX", seoDescription: "X-ray in use signs, MRI warnings, darkroom signs, radiation caution stickers, and engraved signs.", parentSlug: "darkroom" },
      { slug: "silver-recovery", name: "Silver Recovery Systems", description: "Remove silver from fixer solutions and maintain environmental compliance with Rotex systems.", seoTitle: "Silver Recovery Systems | PNWX", seoDescription: "Rotex silver recovery systems: electrolytic units, steel wool canisters, and combo models.", parentSlug: "darkroom" },
      { slug: "thermometers", name: "Thermometers", description: "Dial, floating, clip-on, and digital thermometers for precise darkroom temperature monitoring.", seoTitle: "Darkroom Thermometers | PNWX", seoDescription: "Darkroom thermometers: dial clip-on, glass floating, stainless steel, and digital LCD models.", parentSlug: "darkroom" },
      { slug: "timers", name: "Timers", description: "Darkroom timers for accurate immersion timing during film processing.", seoTitle: "Darkroom Timers | PNWX", seoDescription: "Darkroom timers for precise immersion timing during x-ray film development.", parentSlug: "darkroom" },
    ],
  },
  {
    slug: "exam-room",
    name: "Exam Room Products",
    description:
      "Complete exam room solutions including tables, lighting, instrument stands, stretchers, warming cabinets, carts, disposables, and MRI-safe equipment for medical imaging facilities.",
    seoTitle: "Exam Room Equipment & Products | Pacific Northwest X-Ray",
    seoDescription:
      "Exam room products for radiology: tables, lighting, instrument stands, stretchers, warming cabinets, IV poles, linen hampers, and more. Shop PNWX.",
    itemCount: 23,
    image: "/images/Accessories/ExamRoom/80AC_but.jpg",
    subcategories: [
      { slug: "disposable-apparel", name: "Disposable Apparel", description: "Single-use exam capes, ponchos, gowns, and ortho shorts for patient comfort and hygiene.", seoTitle: "Disposable Exam Apparel | PNWX", seoDescription: "Disposable exam capes, ponchos, gowns, and ortho shorts for medical imaging.", parentSlug: "exam-room" },
      { slug: "warming-cabinets", name: "Warming Cabinets", description: "Standard and deluxe warming cabinets for blankets, linens, and fluids.", seoTitle: "Medical Warming Cabinets | PNWX", seoDescription: "Blanket and fluid warming cabinets for medical facilities.", parentSlug: "exam-room" },
      { slug: "tables", name: "Exam & Power Tables", description: "Basic exam tables to powered hi-low versions from Brewer for medical facilities.", seoTitle: "Medical Exam Tables | PNWX", seoDescription: "Brewer exam tables: basic, access, high-low, and powered assist models.", parentSlug: "exam-room" },
      { slug: "instrument-stands", name: "Instrument Stands", description: "Surgical instrument stands in chrome and stainless steel.", seoTitle: "Surgical Instrument Stands | PNWX", seoDescription: "Mayo stands and instrument stands in chrome and stainless steel.", parentSlug: "exam-room" },
      { slug: "iv-poles", name: "IV & Infusion Pump Poles", description: "Wheeled and non-wheeled IV poles with a complete line of accessories.", seoTitle: "IV Poles & Infusion Pump Stands | PNWX", seoDescription: "IV poles and infusion pump stands with accessories for medical facilities.", parentSlug: "exam-room" },
      { slug: "lighting", name: "Lighting", description: "Exam and special procedure lighting including gooseneck, halogen, and OB/GYN models.", seoTitle: "Medical Exam Lighting | PNWX", seoDescription: "Exam room lighting: gooseneck, halogen, incandescent, and procedure lamps.", parentSlug: "exam-room" },
      { slug: "linen-hampers", name: "Linen Hampers", description: "Sturdy, space-saving medical linen hampers including MRI-safe models.", seoTitle: "Medical Linen Hampers | PNWX", seoDescription: "Medical linen hampers in chrome and stainless steel, including MRI-safe models.", parentSlug: "exam-room" },
      { slug: "stretchers", name: "Stretchers", description: "Full line of Pedigo/Midmark stretchers at discount pricing, plus MRI-safe options.", seoTitle: "Medical Stretchers & Gurneys | PNWX", seoDescription: "Pedigo stretchers, patient gurneys, and MRI-safe transport stretchers.", parentSlug: "exam-room" },
      { slug: "carts", name: "Carts", description: "Stainless steel medical carts for OR, sterile processing, and supply management.", seoTitle: "Medical Carts | PNWX", seoDescription: "Surgical case carts, utility carts, sterilizer carts, and supply carts.", parentSlug: "exam-room" },
      { slug: "overbed-tables", name: "Overbed Tables", description: "Overbed tables for patient comfort in exam rooms and hospital rooms.", seoTitle: "Overbed Tables | PNWX", seoDescription: "Overbed tables for patient comfort in medical exam rooms.", parentSlug: "exam-room" },
    ],
  },
  {
    slug: "markers",
    name: "Film Identification Markers",
    description:
      "Complete selection of X-ray lead markers including elite, identifier, position indicator, digital, special use, mammography skin markers, and marker accessories.",
    seoTitle: "X-Ray Lead Markers & Film Identification | Pacific Northwest X-Ray",
    seoDescription:
      "X-ray lead markers: elite color-coded, identifier, position indicator, digital, special use, mammography skin markers, and complete marker word sets.",
    itemCount: 12,
    image: "/images/Accessories/Markers/EliteMarkers_but.jpg",
    subcategories: [
      { slug: "elite", name: "Elite Markers", description: "Highest quality lead markers, color coded (Red=Right, Blue=Left), wrapped in aluminum frames.", seoTitle: "Elite X-Ray Markers | PNWX", seoDescription: "Premium aluminum-framed x-ray lead markers, color coded for left and right.", parentSlug: "markers" },
      { slug: "identifier", name: "Identifier Markers", description: "Color-coded injection molded polystyrene cased markers with or without initials.", seoTitle: "Identifier X-Ray Markers | PNWX", seoDescription: "Color-coded identifier x-ray markers in injection molded polystyrene cases.", parentSlug: "markers" },
      { slug: "position-indicator", name: "Position Indicator Markers", description: "Color-coded marker sets with lead balls in a vial to indicate gravity direction.", seoTitle: "Position Indicator X-Ray Markers | PNWX", seoDescription: "Position indicator x-ray markers with lead ball gravity indicators.", parentSlug: "markers" },
      { slug: "digital", name: "Digital Markers", description: "Markers containing a 3cm ruler for scale reference on digital images at different zoom levels.", seoTitle: "Digital X-Ray Markers | PNWX", seoDescription: "Digital x-ray markers with built-in rulers for scale reference.", parentSlug: "markers" },
      { slug: "special-use", name: "Special Use Markers", description: "Extra thick and filtered markers for higher kVp/mA procedures and oncology applications.", seoTitle: "Special Use X-Ray Markers | PNWX", seoDescription: "Heavy-duty x-ray markers for high kVp/mA and oncology applications.", parentSlug: "markers" },
      { slug: "marker-sets", name: "Complete Marker Word Sets", description: "Complete packages with commonly used word sets for general use, tomography, IVP, oncology, and more.", seoTitle: "X-Ray Marker Word Sets | PNWX", seoDescription: "Complete x-ray marker word sets for general use, tomography, IVP, and oncology.", parentSlug: "markers" },
      { slug: "mammo-skin", name: "Mammography Skin Markers", description: "Disposable markers applied directly to skin during mammography procedures.", seoTitle: "Mammography Skin Markers | PNWX", seoDescription: "Disposable mammography skin markers for procedure reference.", parentSlug: "markers" },
      { slug: "skin-markers", name: "Multi-Modality Skin Markers", description: "Skin markers visible on multiple imaging modalities for reference point identification.", seoTitle: "Multi-Modality Skin Markers | PNWX", seoDescription: "Multi-modality skin markers visible across imaging systems.", parentSlug: "markers" },
      { slug: "accessories", name: "Marker Accessories", description: "Radiopaque rulers, ID stickers, wax pens, tape dispensers, fanny packs, and lapel pouches.", seoTitle: "X-Ray Marker Accessories | PNWX", seoDescription: "X-ray marker accessories: rulers, stickers, wax pens, and storage pouches.", parentSlug: "markers" },
    ],
  },
  {
    slug: "cassettes",
    name: "Cassettes, Storage & Viewing",
    description:
      "X-Ray film and cassette products including aluminum cassettes, CR plate covers, cassette racks, holders, transport cases, film bins, shelving, grids, and viewboxes.",
    seoTitle: "X-Ray Cassettes, Storage & Film Viewing | Pacific Northwest X-Ray",
    seoDescription:
      "X-ray cassettes, CR plate covers, cassette holders, transport cases, film storage shelving, viewboxes, and grids for radiology departments.",
    itemCount: 14,
    image: "/images/Accessories/Cassettes/AlCassettes_but.jpg",
    subcategories: [
      { slug: "aluminum", name: "Aluminum Cassettes", description: "Push-button, wafer-thin, lightweight aluminum X-ray cassettes.", seoTitle: "Aluminum X-Ray Cassettes | PNWX", seoDescription: "Lightweight aluminum x-ray cassettes with push-button operation.", parentSlug: "cassettes" },
      { slug: "covers", name: "DR & CR Plate Covers", description: "Disposable polyethylene covers to protect cassettes from fluids and contaminants.", seoTitle: "CR DR Plate Covers | PNWX", seoDescription: "Disposable cassette and CR/DR plate covers for contamination protection.", parentSlug: "cassettes" },
      { slug: "holders", name: "Cassette & CR/DR Plate Holders", description: "Mobile and table-top position holders and wall storage for cassettes, CR, and DR plates.", seoTitle: "Cassette & DR Plate Holders | PNWX", seoDescription: "Cassette holders and CR/DR plate positioning devices for radiology.", parentSlug: "cassettes" },
      { slug: "shelving", name: "Shelving & Storage", description: "Cabinets and storage solutions for X-ray films, records, and digital media.", seoTitle: "X-Ray Film Storage & Shelving | PNWX", seoDescription: "Film storage shelving, cabinets, and record storage solutions for radiology.", parentSlug: "cassettes" },
      { slug: "viewboxes", name: "Viewboxes", description: "X-ray viewboxes from multiple manufacturers for virtually any application.", seoTitle: "X-Ray Viewboxes & Illuminators | PNWX", seoDescription: "X-ray viewboxes and illuminators from Wolf, Maxant, and other manufacturers.", parentSlug: "cassettes" },
    ],
  },
  {
    slug: "patient-care",
    name: "Patient Care & Positioning",
    description:
      "Patient comfort, positioning, measurement, and care products including positioning aids, table pads, stretchers, transfer systems, merchant boards, immobilizers, and restraints.",
    seoTitle: "Patient Care & Positioning Products | Pacific Northwest X-Ray",
    seoDescription:
      "Patient positioning aids, radiology table pads, transfer systems, merchant boards, immobilizers, wheelchairs, and comfort products for imaging departments.",
    itemCount: 20,
    image: "/images/Accessories/PatAsst/MBW-18_but.jpg",
    subcategories: [
      { slug: "positioning-aids", name: "Positioning Aids", description: "Foam blocks, sandbags, sponges, and specialized positioning devices for radiographic procedures.", seoTitle: "Radiology Positioning Aids | PNWX", seoDescription: "Positioning foam, sandbags, and sponges for patient positioning during imaging procedures.", parentSlug: "patient-care" },
      { slug: "table-pads", name: "X-Ray Table Pads", description: "Radiolucent table pads for imaging tables in standard, plus, premium, and memory foam options.", seoTitle: "X-Ray Table Pads | PNWX", seoDescription: "Radiolucent x-ray table pads: standard economy, upholstery, Techno-TUFF, and premium options.", parentSlug: "patient-care" },
      { slug: "merchant-boards", name: "Merchant Boards", description: "Solid oak merchant boards for knee views with adjustable angles, available for DR panels and film cassettes.", seoTitle: "X-Ray Merchant Boards | PNWX", seoDescription: "PNWX merchant boards: solid oak construction for knee views, DR panel and cassette compatible.", parentSlug: "patient-care" },
      { slug: "pet-sitioner", name: "Veterinary Immobilizers", description: "Specialized foam immobilizers and positioning devices for veterinary radiographic procedures.", seoTitle: "Veterinary X-Ray Positioning | PNWX", seoDescription: "Veterinary positioning devices and immobilizers: Techno-Aide, Stealth-Core, and Pet-Sitioner.", parentSlug: "patient-care" },
      { slug: "transfer-systems", name: "Patient Transfer Systems", description: "BeasyBoard sliding transfer systems for safe, low-effort patient transfers.", seoTitle: "Patient Transfer Systems | PNWX", seoDescription: "BeasyBoard patient transfer systems for safe wheelchair-to-table transfers.", parentSlug: "patient-care" },
      { slug: "wheelchairs", name: "MRI Safe Wheelchairs", description: "Patient wheelchairs rated safe up to 3-Tesla for use in MRI suites.", seoTitle: "MRI Safe Wheelchairs | PNWX", seoDescription: "MRI-safe patient wheelchairs rated for use up to 3-Tesla magnetic fields.", parentSlug: "patient-care" },
      { slug: "restraints", name: "Patient Restraints", description: "Radiolucent immobilizer straps and restraint systems for imaging procedures.", seoTitle: "Patient Restraints for Radiology | PNWX", seoDescription: "Radiolucent patient restraints and immobilization straps for radiographic procedures.", parentSlug: "patient-care" },
      { slug: "pediatric", name: "Pediatric Products", description: "Pediatric bassinets, restraint systems, and immobilizers for small patients.", seoTitle: "Pediatric Radiology Products | PNWX", seoDescription: "Pediatric bassinets, immobilizers, and restraint systems for radiology.", parentSlug: "patient-care" },
    ],
  },
  {
    slug: "phantoms",
    name: "Phantoms & Test Tools",
    description:
      "Training, teaching, quality control, accreditation, and resolution test phantoms for radiology, CT, MRI, mammography, ultrasound, and nuclear medicine applications.",
    seoTitle: "Radiology Phantoms & QC Test Tools | Pacific Northwest X-Ray",
    seoDescription:
      "Radiology phantoms for training, QC testing, and accreditation: CT, MRI, mammography, ultrasound, nuclear medicine, resolution, and alignment test tools.",
    itemCount: 13,
    image: "/images/Accessories/Phantoms/Radiology/RS-102_but.jpg",
    subcategories: [
      { slug: "training", name: "Training & Teaching Phantoms", description: "Anthropomorphic phantoms for radiology training: angio head, whole body, sectional, mammography, and lung/chest.", seoTitle: "Training Radiology Phantoms | PNWX", seoDescription: "Anthropomorphic training phantoms for radiology education and demonstration.", parentSlug: "phantoms" },
      { slug: "test", name: "Accreditation & Test Phantoms", description: "Resolution, quality, alignment, and accreditation test phantoms for multiple imaging modalities.", seoTitle: "Radiology Test Phantoms & QC Tools | PNWX", seoDescription: "Accreditation and test phantoms: resolution, fluoroscopy, CT performance, focal spot, beam alignment, and more.", parentSlug: "phantoms" },
      { slug: "ct", name: "CT Phantoms", description: "Phantoms designed specifically for testing and training on computed tomography scanners.", seoTitle: "CT Phantoms | PNWX", seoDescription: "CT phantoms: Catphan 500/600, head, performance, and PET-CT phantoms.", parentSlug: "phantoms" },
      { slug: "mammography", name: "Mammography Phantoms", description: "Mammography training, test, QA, and accreditation phantoms and tools.", seoTitle: "Mammography Phantoms & Test Tools | PNWX", seoDescription: "Mammography phantoms for accreditation, performance testing, and procedure training.", parentSlug: "phantoms" },
      { slug: "mri", name: "MRI Phantoms", description: "Phantoms designed for testing and evaluation of MR systems in medical applications.", seoTitle: "MRI Phantoms | PNWX", seoDescription: "MRI phantoms: ACR accredited medium and large, comprehensive, and Magphan models.", parentSlug: "phantoms" },
      { slug: "ultrasound", name: "Ultrasound Phantoms", description: "24+ ultrasound test and training phantoms including specialty models for multiple clinical applications.", seoTitle: "Ultrasound Phantoms | PNWX", seoDescription: "Ultrasound phantoms: general purpose, breast, fetal, vascular, cardiac, and specialty models.", parentSlug: "phantoms" },
      { slug: "nuclear", name: "Nuclear Medicine Phantoms", description: "Exposure test and training phantoms for nuclear medicine applications.", seoTitle: "Nuclear Medicine Phantoms | PNWX", seoDescription: "Nuclear medicine phantoms for exposure testing and training.", parentSlug: "phantoms" },
    ],
  },
  {
    slug: "seating",
    name: "Seating Products",
    description:
      "Medical-grade seating including stools, chairs, step stools, phlebotomy chairs, and clinical recliners from Brewer, Pedigo, OFM, and Techno-Aide.",
    seoTitle: "Medical Stools, Chairs & Seating | Pacific Northwest X-Ray",
    seoDescription:
      "Medical stools and seating: Brewer, Pedigo, OFM, Techno-Aide stools, step stools, phlebotomy chairs, clinical chairs, and MRI-safe seating.",
    itemCount: 8,
    image: "/images/Accessories/Seating/Cen21_but.jpg",
    subcategories: [
      { slug: "brewer", name: "Brewer Stools", description: "Century, Dental & Optical, Millennium, and Value Plus series medical stools.", seoTitle: "Brewer Medical Stools | PNWX", seoDescription: "Brewer medical stools: Century, Millennium, Value Plus, and dental/optical series.", parentSlug: "seating" },
      { slug: "pedigo", name: "Pedigo Stools", description: "Quality medical stools in a wide range of styles including stainless steel and hydraulic models.", seoTitle: "Pedigo Medical Stools | PNWX", seoDescription: "Pedigo medical stools: stainless steel, foot-operated, chrome, and hydraulic surgeon models.", parentSlug: "seating" },
      { slug: "phlebotomy", name: "Phlebotomy Chairs", description: "Chairs specifically designed for phlebotomy and venipuncture procedures.", seoTitle: "Phlebotomy Chairs | PNWX", seoDescription: "Blood drawing and phlebotomy chairs designed for venipuncture procedures.", parentSlug: "seating" },
      { slug: "techno-aide", name: "Techno-Aide Seating", description: "Screw-adjustable and pneumatic stools plus clinical recliner chairs.", seoTitle: "Techno-Aide Stools & Chairs | PNWX", seoDescription: "Techno-Aide medical stools and clinical recliner chairs for healthcare.", parentSlug: "seating" },
      { slug: "step-stools", name: "Step Stools", description: "Standard and MRI-safe step stools built for lasting medical facility service.", seoTitle: "Medical Step Stools | PNWX", seoDescription: "Medical step stools: standard and MRI-safe models for healthcare facilities.", parentSlug: "seating" },
    ],
  },
  {
    slug: "tech-aides",
    name: "Technologist Aids",
    description:
      "Tools and aids for X-ray technologists including badge storage, compression paddles, film markers, radiation protection products, mobile imaging caddies, and step wedges.",
    seoTitle: "X-Ray Technologist Aids & Tools | Pacific Northwest X-Ray",
    seoDescription:
      "X-ray technologist aids: badge storage, compression paddles, film markers, mobile imaging caddies, step wedges, and technique tools.",
    itemCount: 6,
    image: "/images/Accessories/Darkroom/DarkroomInUse_but.jpg",
    subcategories: [
      { slug: "badge-storage", name: "Badge Storage Systems", description: "Radiation badge storage boards for complete accountability systems.", seoTitle: "Radiation Badge Storage | PNWX", seoDescription: "Radiation badge storage boards and systems for dosimetry accountability.", parentSlug: "tech-aides" },
      { slug: "compression-paddles", name: "Compression Paddles", description: "Compression paddles designed for applying compression during various radiographic procedures.", seoTitle: "X-Ray Compression Paddles | PNWX", seoDescription: "Compression paddles for radiographic procedures.", parentSlug: "tech-aides" },
      { slug: "mobile-caddy", name: "Mobile Imaging Caddy", description: "Accessory caddy for mobile X-ray systems that keeps everything needed for portable service close at hand.", seoTitle: "Mobile X-Ray Caddy | PNWX", seoDescription: "Mobile imaging caddy for portable x-ray system accessories.", parentSlug: "tech-aides" },
      { slug: "step-wedges", name: "Step Wedges", description: "11-step penetrometer made of high-purity aluminum for technique testing.", seoTitle: "X-Ray Step Wedges | PNWX", seoDescription: "Aluminum step wedge penetrometer for x-ray technique calibration.", parentSlug: "tech-aides" },
    ],
  },
  {
    slug: "lead-products",
    name: "Radiation Protection (Lead)",
    description:
      "Comprehensive radiation protection products including lead aprons, thyroid collars, gloves, eyewear, gonad shields, caps, mobile barriers, curtains, construction materials, and storage solutions.",
    seoTitle: "Radiation Protection Products | Pacific Northwest X-Ray",
    seoDescription:
      "Radiation protective products: lead aprons, thyroid collars, gloves, eyewear, gonad shields, lead caps, mobile barriers, curtains, lead glass windows, and sheetrock.",
    itemCount: 15,
    image: "/images/Accessories/LeadProducts/Aprons/61300_but.jpg",
    subcategories: [
      { slug: "aprons", name: "Radiation Protective Aprons", description: "Over 92 models of lead and lead-free aprons from 6 manufacturers in multiple styles and protection levels.", seoTitle: "Lead Aprons & Radiation Protective Aprons | PNWX", seoDescription: "92+ radiation protective aprons: economy, frontal, wrap-around, vest/skirt, surgical, pregnancy, dental, and pediatric from Infab, Techno-Aide, Wolf, and PNWX Elite.", parentSlug: "lead-products", itemCount: 92 },
      { slug: "thyroid-collars", name: "Thyroid Collars", description: "Radiation protective thyroid collars from Infab, PNWX Elite, Techno-Aide, Wolf, plus disposable covers.", seoTitle: "Thyroid Collars | PNWX", seoDescription: "Radiation protective thyroid collars from multiple manufacturers with magnetic close options.", parentSlug: "lead-products" },
      { slug: "gloves", name: "Protective Gloves", description: "Leaded gloves, mittens, and protective sleeves for radiation reduction during procedures.", seoTitle: "Radiation Reducing Gloves | PNWX", seoDescription: "Radiation reducing gloves: exam, surgical, high-protection, mittens, and sleeves from Infab, Proguard, and more.", parentSlug: "lead-products" },
      { slug: "eyewear", name: "Protective Eyewear", description: "Leaded glasses, goggles, face shields, medical loupes, and lens care products.", seoTitle: "Leaded Eyewear & Radiation Glasses | PNWX", seoDescription: "Radiation protective eyewear: leaded glasses, goggles, face shields, and NIKE/Wiley-X designer frames.", parentSlug: "lead-products" },
      { slug: "gonad-shields", name: "Gonad Shields", description: "Gonad shielding products including blankets, diapers, and bras from multiple manufacturers.", seoTitle: "Gonad Shields & Lead Blankets | PNWX", seoDescription: "Gonad shields, lead blankets, and protective diapers from Bar-Ray, Infab, PNWX, Techno-Aide, and Wolf.", parentSlug: "lead-products" },
      { slug: "caps", name: "Protective Caps", description: "Radiation protective caps and surgical scatter caps in multiple styles and protection levels.", seoTitle: "Radiation Protective Caps | PNWX", seoDescription: "Lead caps: Infab Revolution, Page cap, scrub cap, and disposable scatter caps for radiation protection.", parentSlug: "lead-products" },
      { slug: "mobile-barriers", name: "Mobile Lead Barriers", description: "Infab mobile radiation barriers in 13+ configurations from shorty to extra-wide with lead glass or acrylic windows.", seoTitle: "Mobile Lead Barriers | PNWX", seoDescription: "Infab mobile radiation barriers with lead glass or acrylic windows in multiple sizes and configurations.", parentSlug: "lead-products" },
      { slug: "curtains", name: "Lead Curtains", description: "Infab solid panel mobile radiation curtains with grommets, available in multiple lead equivalencies.", seoTitle: "Lead Curtains | PNWX", seoDescription: "Infab lead curtains: 0.25mm to 1.0mm Pb with mounting track systems and custom sizing.", parentSlug: "lead-products" },
      { slug: "windows", name: "Lead Glass & Windows", description: "Leaded glass, window frames, and construction-grade radiation shielding products.", seoTitle: "Lead Glass Windows & Frames | PNWX", seoDescription: "Leaded glass windows, telescopic frames, safety glass, and radiation shielding construction products.", parentSlug: "lead-products" },
      { slug: "drywall", name: "Lead-Lined Drywall", description: "X-ray shielding sheetrock with factory-laminated pure lead sheet for radiation room construction.", seoTitle: "Lead-Lined Drywall & Sheetrock | PNWX", seoDescription: "Lead-lined gypsum wallboard for x-ray room construction, custom manufactured to specification.", parentSlug: "lead-products" },
      { slug: "racks", name: "Apron & Glove Storage", description: "Wall-mounted racks, mobile racks, closet hangers, and carry bags for lead apparel storage.", seoTitle: "Lead Apron Storage Racks | PNWX", seoDescription: "Lead apron and glove storage: wall-mounted racks, mobile racks, closet hangers, and carry bags.", parentSlug: "lead-products" },
      { slug: "pediatric", name: "Pediatric Protection", description: "Radiation protective products specifically designed for small patients.", seoTitle: "Pediatric Radiation Protection | PNWX", seoDescription: "Pediatric radiation protection: child guards, kiddie kovers, dental drapes, and gonadal guards.", parentSlug: "lead-products" },
    ],
  },
];
