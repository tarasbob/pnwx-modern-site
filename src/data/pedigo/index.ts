import type { Category } from "../types";

export const pedigoCategory: Category = {
  slug: "pedigo",
  name: "Pedigo Medical Products",
  description:
    "Complete line of Pedigo/Midmark medical products including bassinets, cabinets, carts, IV stands, linen hampers, instrument stands, stretchers, stools, and utility tables for healthcare facilities.",
  seoTitle: "Pedigo Medical Products | Pacific Northwest X-Ray",
  seoDescription:
    "Pedigo medical products: bassinets, anesthesia cabinets, warming cabinets, case carts, IV stands, linen hampers, stretchers, stools, and instrument tables.",
  image: "/images/Pedigo/P-1110-A-SS_but.jpg",
  subcategories: [
    { slug: "bassinets", name: "Bassinets", description: "Hospital quality maternity bassinets for NICU and medical facilities.", seoTitle: "Pedigo Bassinets | PNWX", seoDescription: "Hospital quality Pedigo maternity bassinets for NICU and medical facilities.", parentSlug: "pedigo" },
    { slug: "cabinets", name: "Cabinets", description: "Anesthesia, cardiac, blanket warming, fluid warming, and operating room cabinets.", seoTitle: "Pedigo Medical Cabinets | PNWX", seoDescription: "Pedigo cabinets: anesthesia, cardiac, blanket warming, and operating room.", parentSlug: "pedigo" },
    { slug: "carts", name: "Carts", description: "Mobile carts including instrument wash, supply, sterilizer, surgical case, and utility carts.", seoTitle: "Pedigo Medical Carts | PNWX", seoDescription: "Pedigo carts: instrument wash, supply, sterilizer, surgical case, and utility.", parentSlug: "pedigo", itemCount: 5 },
    { slug: "iv-stands", name: "IV & Infusion Pump Stands", description: "Pedigo IV and infusion pump stands with a full line of accessories.", seoTitle: "Pedigo IV Stands | PNWX", seoDescription: "Pedigo IV and infusion pump stands with accessories.", parentSlug: "pedigo" },
    { slug: "hampers", name: "Linen Hampers", description: "Chrome and stainless steel linen hampers for medical facilities.", seoTitle: "Pedigo Linen Hampers | PNWX", seoDescription: "Pedigo chrome and stainless steel medical linen hampers.", parentSlug: "pedigo" },
    { slug: "mayo-stands", name: "Mayo Stands", description: "Full line of Mayo stands in chrome plated steel and stainless steel.", seoTitle: "Pedigo Mayo Stands | PNWX", seoDescription: "Pedigo Mayo stands in chrome and stainless steel.", parentSlug: "pedigo" },
    { slug: "stretchers", name: "Stretchers", description: "Complete line of quality stretchers from budget to premium series for any facility.", seoTitle: "Pedigo Stretchers | PNWX", seoDescription: "Pedigo stretchers: P-170, 5110, 5400, 7500 series, and pediatric crib.", parentSlug: "pedigo", itemCount: 6 },
    { slug: "stools", name: "Stools & Seating", description: "Quality stools in stainless steel, chrome, foot-operated, hydraulic surgeon, and step stool styles.", seoTitle: "Pedigo Stools & Seating | PNWX", seoDescription: "Pedigo stools: stainless steel, chrome, foot-operated, hydraulic surgeon, and step stools.", parentSlug: "pedigo" },
    { slug: "tables", name: "Tables", description: "Central supply work tables, instrument tables, assembly stations, and utility tables.", seoTitle: "Pedigo Medical Tables | PNWX", seoDescription: "Pedigo tables: central supply work, instrument, assembly station, and utility.", parentSlug: "pedigo" },
  ],
};
