import type { Product } from "../types";

export const cablesProduct: Product = {
  slug: "cables",
  name: "High Voltage / High Tension Cables",
  description:
    "Medical Federal Standard high voltage cables for X-ray systems with standard and high-flex cable types. Available in custom lengths.",
  seoTitle: "X-Ray High Voltage Cables | Pacific Northwest X-Ray",
  seoDescription:
    "X-ray high voltage / high tension cables with Medical Federal Standard ends. Standard and high-flex types. 65ft cable available.",
  images: ["/images/Parts/HT_Cables/L3-005_1.jpg"],
  variants: [
    { stockNumber: "J995-65", description: "65 ft High Voltage Cable", price: "$2,219.00" },
  ],
  features: [
    "Medical Federal Standard ends",
    "Available in standard and high-flex cable types",
    "Custom lengths available upon request",
  ],
  category: "parts",
};
