import type { Product } from "../../types";

export const glovesProduct: Product = {
  slug: "gloves",
  name: "Proguard Radiation-Reducing Gloves",
  description:
    "Radiation-reducing exam, surgical, and high-protection gloves with up to 81% reduction at 60kVp. Protective sleeves also available.",
  longDescription:
    "Proguard radiation-reducing gloves are available in multiple thickness options for varying protection levels. Section A exam/surgical gloves (RR1 at 0.0088\"/0.24mm and RR2 at 0.012\"/0.28mm) provide everyday radiation reduction. Section B higher-protection gloves (RR3 at 0.015\"/0.38mm) deliver up to 81% radiation reduction at 60kVp for demanding procedures. Protective sleeves (Section C) extend coverage for arm and forearm protection.",
  seoTitle: "Proguard Radiation-Reducing Gloves & Sleeves | PNWX",
  seoDescription:
    "Proguard radiation-reducing gloves with up to 81% reduction at 60kVp. Exam, surgical, and high-protection grades plus protective sleeves.",
  images: [
    "/images/Accessories/LeadProducts/Gloves/Proguard/RR1_1.jpg",
    "/images/Accessories/LeadProducts/Gloves/Proguard/RR3_1.jpg",
    "/images/Accessories/LeadProducts/Gloves/Proguard/SL-S_1.jpg",
    "/images/Accessories/LeadProducts/Gloves/Proguard/SL-S_2.jpg",
  ],
  variants: [
    {
      stockNumber: "RR1",
      description:
        "Section A - Exam/Surgical Glove, 0.0088\"/0.24mm lead equivalence",
      price: "$44.00",
    },
    {
      stockNumber: "RR2",
      description:
        "Section A - Exam/Surgical Glove, 0.012\"/0.28mm lead equivalence",
      price: "$47.00",
    },
    {
      stockNumber: "RR3",
      description:
        "Section B - Higher Protection Glove, 0.015\"/0.38mm, 81% reduction at 60kVp",
      price: "$63.00",
    },
    {
      stockNumber: "RR-SLV-SM",
      description: "Section C - Protective Sleeve, Small",
      price: "$87.00",
    },
    {
      stockNumber: "RR-SLV-MD",
      description: "Section C - Protective Sleeve, Medium",
      price: "$87.00",
    },
    {
      stockNumber: "RR-SLV-LG",
      description: "Section C - Protective Sleeve, Large",
      price: "$87.00",
    },
  ],
  features: [
    "Radiation reduction up to 81% at 60kVp",
    "Multiple thickness options",
    "Surgical and exam grades",
    "Protective sleeves available",
  ],
  category: "accessories",
  subcategory: "lead-products",
};
