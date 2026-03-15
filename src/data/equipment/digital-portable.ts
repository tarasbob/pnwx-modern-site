import type { Product } from "../types";

export const digitalPortableProduct: Product = {
  slug: "digital-portable",
  name: "Digital Portable DR X-Ray Systems",
  description:
    "Complete direct-digital portable x-ray imaging systems combining Source-Ray generators with flat-panel DR detectors.",
  longDescription:
    "Complete direct-digital portable x-ray imaging systems combining Source-Ray generators (SR-130 at 100kV/30mA 3kW or PowerMax 1260 at 120kV/60mA 3kW) with flat-panel DR detectors. Systems include generator, tube head, collimator, stand, DR panel, workstation, and imaging software.",
  seoTitle: "Digital Portable DR X-Ray Systems | PNWX",
  seoDescription:
    "Digital portable DR x-ray systems with Source-Ray generators and flat-panel detectors. Tethered and wireless options with multiple imaging platforms.",
  images: [
    "/images/Equipment/MedXray/Source-Ray/Digital/SR-130D-V_1.jpg",
    "/images/Equipment/MedXray/Source-Ray/Digital/SR-130D-V_2.jpg",
  ],
  variants: [
    {
      stockNumber: "SR-130D-V",
      description: "SR-130 + Varian Tethered",
      price: "$Call",
    },
    {
      stockNumber: "SR-130D-VW",
      description: "SR-130 + Vieworks Wireless",
      price: "$Call",
    },
    {
      stockNumber: "SR-130D-IW",
      description: "SR-130 + Konica Wireless",
      price: "$Call",
    },
    {
      stockNumber: "SR-1260D-V",
      description: "PowerMax 1260 + Varian",
      price: "$Call",
    },
    {
      stockNumber: "SR-1260D-VW",
      description: "PowerMax 1260 + Vieworks",
      price: "$Call",
    },
    {
      stockNumber: "SR-1260D-IW",
      description: "PowerMax 1260 + Konica",
      price: "$36,725.00",
    },
    {
      stockNumber: "900104",
      description: "Grid Adapter 6:1 215L",
      price: "$2,118.75",
    },
    {
      stockNumber: "900110",
      description: "Grid Adapter 6:1 103L",
      price: "$1,375.00",
    },
  ],
  features: [
    "SR-130: 100kV/30mA, 3kW power",
    "PowerMax 1260: 120kV/60mA, 3kW full range",
    "Tethered and wireless DR options",
    "Multiple imaging software platforms",
    "Collimator with laser crosshairs and SID indicator",
    "Standard wall power (115/230VAC)",
  ],
  category: "equipment",
};
