import type { Category } from "../types";

export const equipmentCategories: Category[] = [
  {
    slug: "darkroom",
    name: "Darkroom Equipment",
    description:
      "Essential darkroom equipment including automatic film processors, chemical mixers, film duplicators, densitometers, safelights, silver recovery systems, and more.",
    seoTitle: "Darkroom Equipment for Radiology | Pacific Northwest X-Ray",
    seoDescription:
      "Darkroom equipment: Protec film processors, IS-199 chemical mixers, Wolf film duplicators, silver recovery systems, safelights, and accessories.",
    itemCount: 13,
    image: "/images/Equipment/FilmProc/Protec/OPTIMAX_but.jpg",
    subcategories: [
      { slug: "film-processor", name: "Film Processor", description: "Protec OPTIMAX table-top automatic film processor. Made in Germany with ISO, IEC, CE, TUV, CSA, UL certifications. Processes films from 4\"x4\" to 14\" x any length in 90 seconds.", seoTitle: "Protec OPTIMAX Film Processor | PNWX", seoDescription: "Protec OPTIMAX automatic x-ray film processor: 90-second processing, German made, multiple certifications.", parentSlug: "darkroom" },
      { slug: "chemical-mixers", name: "Chemical Mixers", description: "IS-199 Chemical Mixers with specific gravity mixing and low-level warning system. Available in standard 12.5 gallon and space saver 7.5 gallon configurations for multiple chemistry types.", seoTitle: "IS-199 Chemical Mixers | PNWX", seoDescription: "IS-199 chemical mixers with specific gravity mixing for darkroom film processing.", parentSlug: "darkroom" },
      { slug: "duplicators", name: "Film Duplicators", description: "Wolf steel construction film duplicators with durable baked enamel finish. Available in 6\"x12\", 10\"x12\", and 14\"x17\" maximum film sizes.", seoTitle: "Wolf Film Duplicators | PNWX", seoDescription: "Wolf x-ray film duplicators in three sizes for copying existing radiographs.", parentSlug: "darkroom" },
      { slug: "silver-recovery", name: "Silver Recovery Systems", description: "Rotex silver recovery systems including reloadable steel wool canisters, electrolytic Ultra series, combo models, and auto/batch systems.", seoTitle: "Rotex Silver Recovery Systems | PNWX", seoDescription: "Rotex silver recovery: steel wool canisters, electrolytic units, combo models, and automated systems.", parentSlug: "darkroom" },
    ],
  },
  {
    slug: "digital-portable",
    name: "Digital Portable X-Ray Systems",
    description:
      "Complete direct-digital portable X-ray imaging systems combining Source-Ray generators with flat-panel DR systems for immediate bedside imaging.",
    seoTitle: "Digital Portable X-Ray Systems | Pacific Northwest X-Ray",
    seoDescription:
      "Complete digital portable x-ray systems: Source-Ray SR-130 and PowerMax 1260 generators with Varian, Vieworks, and Konica DR flat panels.",
    image: "/images/Equipment/MedXray/Source-Ray/900015_but.jpg",
  },
  {
    slug: "exam-room",
    name: "Exam Room Equipment",
    description:
      "Complete exam room equipment including powered and basic exam tables, instrument stands, IV poles, lighting, mammography chairs, step stools, and overbed tables.",
    seoTitle: "Exam Room Equipment | Pacific Northwest X-Ray",
    seoDescription:
      "Exam room equipment: Brewer exam tables, instrument stands, IV poles, medical lighting, mammography chairs, and seating products.",
    itemCount: 8,
    image: "/images/Equipment/5000_but.jpg",
  },
  {
    slug: "film-viewing",
    name: "Film Viewing Equipment",
    description:
      "X-ray viewboxes and illuminators from Wolf X-Ray Corporation for proper viewing of analog films, including standard, mammography, full-spine, and special purpose models.",
    seoTitle: "X-Ray Viewboxes & Film Viewing Equipment | Pacific Northwest X-Ray",
    seoDescription:
      "Wolf x-ray viewboxes: Liberator, Trimline, mammography, full-spine, Econoline, MG-7, and special purpose illuminators.",
    image: "/images/Equipment/viewbox_but.jpg",
    subcategories: [
      { slug: "liberator", name: "Liberator Viewboxes", description: "Highest output, easiest to service viewbox with 4 or 6 lamps per panel.", seoTitle: "Wolf Liberator Viewboxes | PNWX", seoDescription: "Wolf Liberator viewboxes: highest output illuminators with easy bulb access.", parentSlug: "film-viewing" },
      { slug: "trimline", name: "Trimline Viewboxes", description: "Wolf's main line standard illuminators for general radiology viewing.", seoTitle: "Wolf Trimline Viewboxes | PNWX", seoDescription: "Wolf Trimline standard x-ray viewboxes for radiology departments.", parentSlug: "film-viewing" },
      { slug: "mammography", name: "Mammography Viewboxes", description: "Specialized mammography illuminators for optimal mammogram viewing.", seoTitle: "Mammography Viewboxes | PNWX", seoDescription: "Wolf mammography viewboxes and illuminators for mammogram viewing.", parentSlug: "film-viewing" },
      { slug: "econoline", name: "Econoline Viewboxes", description: "Most economical illuminator option for budget-conscious facilities.", seoTitle: "Wolf Econoline Viewboxes | PNWX", seoDescription: "Wolf Econoline budget x-ray viewboxes and illuminators.", parentSlug: "film-viewing" },
      { slug: "mg-7", name: "MG-7 Viewboxes", description: "Workhorse illuminator designed for private practitioners.", seoTitle: "Wolf MG-7 Viewboxes | PNWX", seoDescription: "Wolf MG-7 x-ray viewboxes for private practice radiology.", parentSlug: "film-viewing" },
    ],
  },
  {
    slug: "medical",
    name: "Medical & Patient Care Equipment",
    description:
      "General medical facility equipment not specifically for radiology including stretchers, warming cabinets, anesthesia cabinets, case carts, instrument tables, and stands.",
    seoTitle: "Medical Equipment & Patient Care | Pacific Northwest X-Ray",
    seoDescription:
      "Medical equipment: Pedigo stretchers, warming cabinets, anesthesia cabinets, case carts, instrument tables, and surgical stands.",
    image: "/images/Accessories/ExamRoom/Stretchers/Pedigo/7500/7500-N_but.jpg",
  },
  {
    slug: "portable-xray",
    name: "Portable X-Ray Systems",
    description:
      "Wide range of portable and semi-portable X-ray systems for medical, podiatric, and veterinary applications from JPI, MinXray, Source-Ray, Soyee, and Ultra Series.",
    seoTitle: "Portable X-Ray Systems & Generators | Pacific Northwest X-Ray",
    seoDescription:
      "Portable x-ray systems: JPI, MinXray, Source-Ray, Soyee, and Ultra Series generators for medical, podiatric, and veterinary use.",
    itemCount: 5,
    image: "/images/Equipment/MedXray/JPI/Portable/AJEX-8020HF_but.jpg",
    subcategories: [
      { slug: "jpi", name: "JPI America", description: "Quality portable x-ray systems for human and veterinary applications including 240HF, 9015HF, 9020HF, and podiatric systems.", seoTitle: "JPI Portable X-Ray Systems | PNWX", seoDescription: "JPI America portable x-ray generators for medical, podiatric, and veterinary applications.", parentSlug: "portable-xray" },
      { slug: "minxray", name: "MinXray Portables", description: "Trusted portable x-ray systems certified for human use in the US, offering HF120/60HPPWV and HF100H+ models.", seoTitle: "MinXray Portable X-Ray Systems | PNWX", seoDescription: "MinXray portable x-ray systems: HF120/60HPPWV and HF100H+ models for medical imaging.", parentSlug: "portable-xray" },
      { slug: "source-ray", name: "Source-Ray Portables", description: "Digital and film-based portable x-ray systems certified for human use, including DR digital packages.", seoTitle: "Source-Ray Portable X-Ray Systems | PNWX", seoDescription: "Source-Ray portable x-ray: digital DR systems, PowerMax 1260, SR-130, SR-115, and PXS-810 podiatric.", parentSlug: "portable-xray" },
      { slug: "soyee", name: "Soyee Portables", description: "Affordable hand-held portable x-ray units for veterinary and non-certified applications.", seoTitle: "Soyee Portable X-Ray Units | PNWX", seoDescription: "Soyee affordable portable x-ray units: SY-31 line frequency and SY-HF-110 high frequency.", parentSlug: "portable-xray" },
      { slug: "ultra", name: "Ultra Series Veterinary", description: "Lightest weight, highest powered hand-carry portable x-ray systems for equine and veterinary use.", seoTitle: "Ultra Series Veterinary X-Ray | PNWX", seoDescription: "Ultra Series high-frequency portable x-ray: 8030HF through 12040HF for equine and veterinary.", parentSlug: "portable-xray" },
    ],
  },
  {
    slug: "test",
    name: "Test Equipment",
    description:
      "Full line of radiation test equipment including survey meters, personal radiation monitors, wipe test counters, area monitors, and isotope identifiers.",
    seoTitle: "Radiation Test Equipment | Pacific Northwest X-Ray",
    seoDescription:
      "Radiation test equipment: survey meters, ion chambers, personal monitors, wipe test counters, area monitors, and isotope identifiers.",
    itemCount: 2,
    image: "/images/Equipment/Test/ASM-990_but.jpg",
    subcategories: [
      { slug: "survey-meters", name: "Survey Meters", description: "Advanced survey meters, ion chamber meters, pressurized uR chambers, and personal radiation monitors.", seoTitle: "Radiation Survey Meters | PNWX", seoDescription: "Radiation survey meters: ASM-990, ion chambers, pressurized uR meters, and personal monitors.", parentSlug: "test" },
      { slug: "wipe-counters", name: "Wipe Test Counters", description: "Multi-Wiper series well counters and single detector wipe test counters with advanced isotope analysis.", seoTitle: "Wipe Test Counters | PNWX", seoDescription: "Wipe test counters: multi-well and single detector models with isotope identification and reporting.", parentSlug: "test" },
    ],
  },
];
