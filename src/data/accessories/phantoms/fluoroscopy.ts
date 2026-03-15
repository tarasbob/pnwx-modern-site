import type { Product } from "../../types";

export const fluoroscopyProduct: Product = {
  slug: "fluoroscopy",
  name: "Fluoroscopy Test Phantoms",
  description:
    "IEC 61223-3-1 compliant fluoroscopy test phantoms for resolution, contrast, and QC testing across a wide range of line-pair frequencies.",
  seoTitle: "Fluoroscopy Test Phantoms | PNWX",
  seoDescription:
    "Fluoroscopy QC and resolution test phantoms: R/F QC, Pro-RF, Pro-Fluo, NEMA XR21, and Ludlum models. IEC 61223-3-1 compliant, CE certified.",
  images: [
    "/images/Accessories/Phantoms/Test/Fluoroscopy/07-647_1.jpg",
    "/images/Accessories/Phantoms/Test/Fluoroscopy/02-115_1.jpg",
    "/images/Accessories/Phantoms/Test/Fluoroscopy/02-220_1.jpg",
    "/images/Accessories/Phantoms/Test/Fluoroscopy/99-9407_1.jpg",
  ],
  variants: [
    {
      stockNumber: "07-647",
      description: "R/F QC Phantom",
      price: "$685.00",
    },
    {
      stockNumber: "07-647-CUST",
      description: "RF QC Phantom NO COPPER",
      price: "$628.00",
    },
    {
      stockNumber: "02-112",
      description: "Pro-RF High Res (Wire Mesh) Standard 16-60",
      price: "$765.00",
    },
    {
      stockNumber: "02-111",
      description: "Pro-RF High Res (Wire Mesh) High-Res 60-150",
      price: "$725.00",
    },
    {
      stockNumber: "02-115",
      description: "Pro-Fluo 150 with cone",
      price: "$1,895.00",
    },
    {
      stockNumber: "07-601",
      description: "Fluoro Resolution 16-60 LPI",
      price: "$650.00",
    },
    {
      stockNumber: "07-619",
      description: "Fluoro Resolution 60-150 LPI",
      price: "$650.00",
    },
    {
      stockNumber: "02-220",
      description: "NEMA XR21 Performance complete with case",
      price: "$9,800.00",
    },
    {
      stockNumber: "02-220-MTR",
      description: "Rotating Motor for XR21",
      price: "$875.00",
    },
    {
      stockNumber: "02-401",
      description: "Pro-RF Fluo18 High & Low Contrast",
      price: "$1,997.00",
    },
    {
      stockNumber: "99-9407",
      description: "Ludlum L-601 16-60 LPI",
      price: "$595.00",
    },
    {
      stockNumber: "99-9408",
      description: "Ludlum L-618 30-100 LPI",
      price: "$595.00",
    },
    {
      stockNumber: "99-9409",
      description: "Ludlum L-619 60-150 LPI",
      price: "$595.00",
    },
    {
      stockNumber: "99-9410",
      description: "Ludlum L-647 Contrast Resolution",
      price: "$880.00",
    },
    {
      stockNumber: "99-9411",
      description: "Ludlum L-656 Digital Contrast Resolution",
      price: "$1,900.00",
    },
  ],
  features: [
    "IEC 61223-3-1 compliant",
    "CE certified",
    "Multiple resolution ranges",
    "NEMA NU compliance",
  ],
  category: "accessories",
  subcategory: "phantoms",
};
