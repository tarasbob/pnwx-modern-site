import type { Product } from "../../types";

export const windowsProduct: Product = {
  slug: "windows",
  name: "Lead Glass, Frames & Accessories",
  description:
    "Leaded glass windows, telescopic frames, and accessories for radiation shielding. Pre-packaged and custom-cut sizes available.",
  longDescription:
    "Radiation-shielding lead glass with a refractive index of 1.76–1.79 and light transmission of 86–88%. Available in pre-packaged sizes (8×10\" through 16×24\") or custom-cut standard 5/16\" glass in standard and custom dimensions. Telescopic window frames accommodate varying wall thicknesses and are available with or without glass. Accessories include glazing tape, polishing kits, and powder coat finishes for frames.",
  seoTitle: "Lead Glass Windows & Frames | PNWX",
  seoDescription:
    "Lead glass windows with 1.76–1.79 refractive index and 86–88% light transmission. Pre-packaged and custom sizes with telescopic frames.",
  images: [
    "/images/Accessories/LeadProducts/Windows/14307_1.jpg",
    "/images/Accessories/LeadProducts/Windows/RayBarGlass_1.jpg",
    "/images/Accessories/LeadProducts/Windows/RayBarGlass_2.jpg",
    "/images/Accessories/LeadProducts/Windows/RayBarFrames_1.jpg",
    "/images/Accessories/LeadProducts/Windows/RayBarFrames_2.jpg",
  ],
  variants: [
    {
      stockNumber: "14307",
      description: "Pre-Packaged Lead Glass, 8×10\", 2.0mm Pb equivalence",
      price: "$495.00",
    },
    {
      stockNumber: "14315",
      description: "Pre-Packaged Lead Glass, 12×16\", 1.6mm Pb equivalence",
      price: "$850.00",
    },
    {
      stockNumber: "14316",
      description: "Pre-Packaged Lead Glass, 16×24\", 2.0mm Pb equivalence",
      price: "$1,550.00",
    },
    {
      stockNumber: "PNWX-XG12X12",
      description: "Standard 5/16\" Lead Glass, 12×12\", without frame",
      price: "$Call",
    },
    {
      stockNumber: "PNWX-XG12X16",
      description: "Standard 5/16\" Lead Glass, 12×16\", without frame",
      price: "$Call",
    },
    {
      stockNumber: "PNWX-XG18X18",
      description: "Standard 5/16\" Lead Glass, 18×18\", without frame",
      price: "$Call",
    },
    {
      stockNumber: "PNWX-XG24X24",
      description: "Standard 5/16\" Lead Glass, 24×24\", without frame",
      price: "$Call",
    },
    {
      stockNumber: "XRGT",
      description: "Glazing Tape accessory",
      price: "$Call",
    },
    {
      stockNumber: "XR-POL",
      description: "Polishing Kit accessory",
      price: "$Call",
    },
    {
      stockNumber: "PCOAT",
      description: "Powder Coat finish for frame",
      price: "$Call",
    },
  ],
  features: [
    "Refractive index 1.76–1.79",
    "Light transmission 86–88%",
    "Pre-packaged and custom-cut sizes",
    "Telescopic frame options for varying wall thicknesses",
    "Glazing tape, polishing kits, and powder coat available",
  ],
  category: "accessories",
  subcategory: "lead-products",
};
