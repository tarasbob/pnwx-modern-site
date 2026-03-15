import type { Category } from "../types";

export const ultrasoundCategory: Category = {
  slug: "ultrasound",
  name: "Ultrasound Products",
  description:
    "Complete ultrasound product line including gels, gel warmers, phantoms, imaging tables, probe covers, and sanitizing wipes for ultrasound departments.",
  seoTitle: "Ultrasound Products & Accessories | Pacific Northwest X-Ray",
  seoDescription:
    "Ultrasound products: gels, gel warmers, 24+ phantoms, Biodex imaging tables, probe covers, and sanitizing wipes for ultrasound departments.",
  image: "/images/Supplies/USO-025_but.jpg",
  subcategories: [
    { slug: "gel", name: "Ultrasound Gel", description: "Wide array of ultrasound gels available in bottles and larger jugs for every clinical need.", seoTitle: "Ultrasound Gel | PNWX", seoDescription: "Ultrasound gel in bottles and jugs for clinical imaging.", parentSlug: "ultrasound" },
    { slug: "warmers", name: "Gel Warmers", description: "Constant-temperature ultrasound gel warmers that increase patient comfort during procedures.", seoTitle: "Ultrasound Gel Warmers | PNWX", seoDescription: "Constant-temperature ultrasound gel warmers for patient comfort.", parentSlug: "ultrasound" },
    { slug: "phantoms", name: "Ultrasound Phantoms", description: "24+ CIRS ultrasound test and training phantoms covering general purpose, breast, fetal, vascular, cardiac, and specialty applications.", seoTitle: "Ultrasound Phantoms | PNWX", seoDescription: "24+ CIRS ultrasound phantoms: general purpose, breast, fetal, vascular, cardiac, kidney, and more.", parentSlug: "ultrasound", itemCount: 24 },
    { slug: "tables", name: "Ultrasound Tables", description: "Full line of 8 Biodex ultrasound imaging tables including specific models for echocardiography and vascular studies.", seoTitle: "Biodex Ultrasound Tables | PNWX", seoDescription: "Biodex ultrasound tables: Sound Pro, Ultra Pro, Econo, Echo Pro, and Vascular Pro models.", parentSlug: "ultrasound", itemCount: 8 },
    { slug: "wipes", name: "Sanitizing Wipes", description: "Surface wipes in alcohol-free and standard formulations to keep ultrasound equipment sanitary.", seoTitle: "Ultrasound Equipment Wipes | PNWX", seoDescription: "Sanitizing wipes for ultrasound equipment in alcohol-free and standard formulations.", parentSlug: "ultrasound" },
  ],
};
