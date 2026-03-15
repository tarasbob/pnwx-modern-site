import type { Product } from "../types";

export const lampsProduct: Product = {
  slug: "lamps",
  name: "Collimator Projection Lamps",
  description:
    "Replacement lamps for X-ray collimator projection lights. Clearance items available for older collimators in incandescent and halogen types.",
  seoTitle: "Collimator Projection Lamps | Pacific Northwest X-Ray",
  seoDescription:
    "Replacement x-ray collimator projection lamps: BLX 120V/50W, BNF 120V/75W incandescent, and FCR 12V/100W halogen. Clearance pricing.",
  images: ["/images/Parts/Lamps/BBA_1.jpg"],
  variants: [
    { stockNumber: "BLX", description: "Incandescent 120V 50W", price: "$9.00" },
    { stockNumber: "BNF", description: "Incandescent 120V 75W", price: "$9.00" },
    { stockNumber: "FCR", description: "Halogen 12V 100W", price: "$7.00" },
  ],
  notes: ["Clearance items — limited stock remaining for older collimators"],
  category: "parts",
};
