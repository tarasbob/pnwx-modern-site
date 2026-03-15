import type { Product } from "../../types";

export const filmProcessorProduct: Product = {
  slug: "film-processor",
  name: "Protec OPTIMAX Film Processor",
  description:
    "The Protec OPTIMAX 90-second automatic x-ray film processor handles film volumes from very low to high capacity.",
  longDescription:
    "The OPTIMAX is the world's premier 90-second automatic x-ray film processor. Designed as a rugged workhorse, the OPTIMAX handles film volumes from very low to high capacity. Manufactured by Protec Medical in Germany in compliance with DIN ISO 9001:2000, IEC, TUV, CE, CSA, and UL quality standards.",
  seoTitle: "Protec OPTIMAX Film Processor | PNWX",
  seoDescription:
    "Protec OPTIMAX 90-second automatic x-ray film processor. Handles low to high film volumes. Made in Germany with ISO/IEC/CE/TUV/CSA/UL certification.",
  images: ["/images/Equipment/FilmProc/Protec/OPTIMAX_1.jpg"],
  variants: [
    {
      stockNumber: "OPTIMAX",
      description: "OPTIMAX Film Processor",
      price: "$Call",
    },
    {
      stockNumber: "OPTIMAX-STAND",
      description: "OPTIMAX with Stand",
      price: "$Call",
    },
  ],
  features: [
    "90-second processing, leading edge to leading edge",
    'Film size: 4"x4" min to 14" x any length max, accepts roll film',
    "Developer temp: 82-99F (28-37C), adjustable",
    "Net weight: 77 lbs empty / 110 lbs filled",
    "Tank capacity: 1.3 gallons each section",
    "Warm circulated air drying at 149F (65C)",
    "Anti-oxidation and anti-crystallization programs",
    "Intelligent replenishment sensor",
    "Spring-loaded roller transport eliminates film jams",
    "Made in Germany, ISO/IEC/CE/TUV/CSA/UL certified",
    "1 year parts warranty",
    "220-240VAC standard with 120V converter included",
  ],
  category: "equipment",
  subcategory: "darkroom",
};
