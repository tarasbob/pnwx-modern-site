export const COMPANY = {
  name: "Pacific Northwest X-Ray Inc.",
  tagline: "Simply the best!",
  address: "P.O. Box 625, Gresham, OR 97030 U.S.A.",
  phone: "503-667-3000",
  tollFree: "800-827-9729",
  tollFreeFormatted: "800-827-XRAY",
  fax: "503-666-8855",
  email: "SalesD@pnwx.com",
  hours: "8am – 5pm Monday–Friday (Pacific Time)",
  copyright: "©1997–2026 Pacific Northwest X-Ray Inc.",
  note: "This web site is our catalog! No printed catalog is available.",
  updatedDaily: "Website updated daily",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Equipment", href: "/equipment" },
  { label: "Accessories", href: "/accessories" },
  { label: "Supplies", href: "/supplies" },
  { label: "Parts", href: "/parts" },
  { label: "Contact", href: "/contact" },
] as const;

export const POPULAR_PRODUCTS = [
  {
    name: "Lightning Fast Lead Apparel",
    description: "Infab Lightning Fast 24hr ship aprons — the fastest shipping lead apparel available.",
    category: "Radiation Protection",
  },
  {
    name: "Revolution Lead Aprons",
    description: "The most comfortable aprons on the market from Infab — designed for all-day wear.",
    category: "Radiation Protection",
  },
  {
    name: "Surgical Radiation Reducing Gloves",
    description: "Proguard surgical gloves for radiation reduction during fluoroscopic procedures.",
    category: "Radiation Protection",
  },
  {
    name: "Resolution Test Tools & Phantoms",
    description: "Precision QC testing equipment for image quality verification.",
    category: "Test Equipment",
  },
  {
    name: "X-Ray Merchant Boards",
    description: "Patient positioning boards for consistent, accurate imaging.",
    category: "Patient Positioning",
  },
  {
    name: "ACR Medium MRI Phantom",
    description: "ACR accredited Medium MRI Phantom for quality assurance testing.",
    category: "QC Phantoms",
  },
  {
    name: "Line-Pair Resolution Phantoms",
    description: "High-precision line-pair resolution test phantoms for spatial resolution evaluation.",
    category: "QC Phantoms",
  },
  {
    name: "Small Animal Immobilizers",
    description: "Pet-Sitioner veterinary immobilizers for safe, stress-free animal imaging.",
    category: "Veterinary",
  },
  {
    name: "Lead Glass Windows",
    description: "Radiation protection leaded glass for viewing windows and barriers.",
    category: "Radiation Protection",
  },
  {
    name: "Mobile Lead Barriers",
    description: "Wheeled lead barriers from Infab for flexible radiation shielding.",
    category: "Radiation Protection",
  },
  {
    name: "System Test Phantoms",
    description: "Comprehensive system test phantoms for full diagnostic equipment evaluation.",
    category: "QC Phantoms",
  },
  {
    name: "X-Ray Table Pads",
    description: "Comfortable table pads for improved patient experience during imaging.",
    category: "Patient Care",
  },
  {
    name: "Lead Curtains",
    description: "Flexible lead curtains for radiation shielding in procedure rooms.",
    category: "Radiation Protection",
  },
  {
    name: "Silver Recovery Systems",
    description: "Rotex silver recovery systems for environmentally responsible film processing.",
    category: "Darkroom",
  },
  {
    name: "X-Ray Grids",
    description: "Aluminum interspaced X-Ray grids for improved image clarity.",
    category: "Parts",
  },
] as const;

export const EQUIPMENT_CATEGORIES = [
  {
    title: "Darkroom Equipment",
    description: "Film processors, chemical mixers, densitometers, sensitometers, film cases, duplicators, ID printers, passboxes, revolving doors, safelights, signs, silver recovery systems, thermometers, and timers.",
    items: ["Film Processors", "Chemical Mixers", "Densitometer/Sensitometer", "Film Cases", "Film Duplicators", "Film ID Printers", "Passboxes", "Revolving Doors", "Safelights", "Signs", "Silver Recovery Systems", "Thermometers", "Timers"],
  },
  {
    title: "Digital Portable X-Ray Systems",
    description: "State-of-the-art digital portable X-Ray systems for versatile imaging applications.",
    items: ["Digital Portable X-Ray Units"],
  },
  {
    title: "Exam Room Equipment",
    description: "Complete exam room outfitting with tables, stands, lighting, and patient comfort essentials.",
    items: ["Exam/Power Tables", "Instrument Stands", "IV Poles", "Lighting", "Mammography Chairs", "Step Stools", "Linen Hampers", "Overbed Tables"],
  },
  {
    title: "Film Viewing Equipment",
    description: "Professional film viewing and illumination equipment for accurate diagnostic reading.",
    items: ["Film Illuminators", "Film Viewing Stations"],
  },
  {
    title: "Medical Equipment & Patient Care",
    description: "Essential medical equipment including stretchers, warming cabinets, anesthesia cabinets, case carts, and instrument tables.",
    items: ["Stretchers", "Warming Cabinets", "Anesthesia Cabinets", "Case Carts", "Instrument Tables"],
  },
  {
    title: "Portable X-Ray Systems",
    description: "Portable medical, podiatric, and veterinary X-Ray systems from leading manufacturers including JPI, MinXray, Source-Ray, Soyee, and Ultra Series.",
    items: ["JPI Systems", "MinXray Systems", "Source-Ray Systems", "Soyee Systems", "Ultra Series"],
  },
  {
    title: "Test Equipment",
    description: "Precision test and survey equipment for radiation safety compliance and quality assurance.",
    items: ["Survey Meters", "Wipe Counters"],
  },
] as const;

export const ACCESSORIES_CATEGORIES = [
  {
    title: "Darkroom Products",
    description: "Complete range of darkroom accessories across 10 product categories for film processing and management.",
  },
  {
    title: "Exam Room Products",
    description: "23 categories of exam room accessories for a fully equipped and efficient radiology suite.",
  },
  {
    title: "Film Identification Markers",
    description: "Professional film identification markers for accurate patient and image labeling.",
  },
  {
    title: "Cassette/CR-Plate Storage & Viewing",
    description: "14 categories of cassette and CR-plate storage, handling, and viewing products.",
  },
  {
    title: "MRI Accessories",
    description: "15 categories of MRI-compatible accessories for safe and efficient MR imaging.",
  },
  {
    title: "Patient Positioning & Care",
    description: "20 categories of positioning aids and patient care products for comfortable, accurate imaging.",
  },
  {
    title: "Training & QC Test Phantoms",
    description: "13 categories of training phantoms and QC test tools for education and quality assurance.",
  },
  {
    title: "Seating Products",
    description: "8 categories of ergonomic seating solutions for technologists, physicians, and patients.",
  },
  {
    title: "Technologist Aids",
    description: "6 categories of essential aids and tools for radiology technologists.",
  },
  {
    title: "Radiation Protection / Lead Products",
    description: "15 categories including lead aprons, leaded eyewear, thyroid collars, gloves, pediatric shielding, caps, leg shields, mobile barriers, gonad shields, lead curtains, and leaded glass.",
  },
  {
    title: "Ultrasound Accessories",
    description: "Accessories for ultrasound equipment including probe covers, gel, and scanning aids.",
  },
  {
    title: "Veterinary Products",
    description: "Specialized accessories for veterinary radiology and imaging procedures.",
  },
] as const;

export const SUPPLIES_CATEGORIES = [
  { title: "Hand Sanitizer", description: "WHO/FDA formula hand sanitizer for clinical hygiene and infection control." },
  { title: "CT Gantry Covers", description: "Protective covers for CT gantry equipment to maintain cleanliness and appearance." },
  { title: "CR Plate Cleaning System", description: "Cleaning systems to maintain CR plate image quality and extend plate life." },
  { title: "Custom Printed CD/DVD Media", description: "Custom printed CD/DVD storage media for patient image distribution." },
  { title: "Exam Gowns & Capes", description: "Comfortable, disposable exam gowns and capes for patient modesty and convenience." },
  { title: "Labels & Dispensers", description: "Medical labels and dispensing systems for organized workflow management." },
  { title: "Mailing & Filing Envelopes", description: "Specialized envelopes for mailing and filing radiographic images and reports." },
  { title: "MRI Breast Coil Covers", description: "Hygienic covers for MRI breast coils to maintain sanitation between patients." },
  { title: "MRI Safe Earplugs", description: "MRI-safe earplugs for patient hearing protection during MR imaging." },
  { title: "Radioactive Decontamination", description: "Bind-It radioactive decontamination products for nuclear medicine safety." },
  { title: "Screen Cleaners", description: "Specialized screen cleaning solutions for diagnostic monitors and displays." },
  { title: "Ultrasound Gel", description: "Professional-grade ultrasound transmission gel for clear diagnostic imaging." },
  { title: "Ultrasound Probe Covers", description: "Sterile and non-sterile probe covers for infection control during ultrasound procedures." },
  { title: "Wipes", description: "Medical-grade cleaning and disinfecting wipes for equipment and surfaces." },
] as const;

export const PARTS_CATEGORIES = [
  { title: "Aluminum Interspaced X-Ray Grids", description: "Precision aluminum interspaced grids for improved radiographic image quality and scatter reduction." },
  { title: "Collimators", description: "X-Ray collimators for precise beam limitation and radiation field control." },
  { title: "Collimator Projection Lamps", description: "Replacement projection lamps for X-Ray collimator light field indicators." },
  { title: "High Voltage / High Tension Cables", description: "High voltage and high tension cables for X-Ray tube and generator connections." },
] as const;
