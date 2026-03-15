import type { Product, ProductVariant } from "../types";

const standardGridVariants: ProductVariant[] = [
  { stockNumber: "11432", specs: { size: '9"x11" (8"x10")', ratio: "8:1", focal: '34"-44"', lpi: "103" }, price: "$Call" },
  { stockNumber: "11433", specs: { size: '9"x11" (8"x10")', ratio: "8:1", focal: '40"-72"', lpi: "103" }, price: "$Call" },
  { stockNumber: "11434", specs: { size: '9"x11" (8"x10")', ratio: "8:1", focal: '62"-72"', lpi: "103" }, price: "$Call" },
  { stockNumber: "11442", specs: { size: '9"x11" (8"x10")', ratio: "10:1", focal: '34"-44"', lpi: "103" }, price: "$Call" },
  { stockNumber: "11443", specs: { size: '9"x11" (8"x10")', ratio: "10:1", focal: '40"-72"', lpi: "103" }, price: "$Call" },
  { stockNumber: "11444", specs: { size: '9"x11" (8"x10")', ratio: "10:1", focal: '62"-72"', lpi: "103" }, price: "$Call" },
  { stockNumber: "11452", specs: { size: '9"x11" (8"x10")', ratio: "12:1", focal: '34"-44"', lpi: "103" }, price: "$Call" },
  { stockNumber: "11453", specs: { size: '9"x11" (8"x10")', ratio: "12:1", focal: '40"-72"', lpi: "103" }, price: "$Call" },
  { stockNumber: "11454", specs: { size: '9"x11" (8"x10")', ratio: "12:1", focal: '62"-72"', lpi: "103" }, price: "$Call" },
  { stockNumber: "12432", specs: { size: '11"x13" (10"x12")', ratio: "8:1", focal: '34"-44"', lpi: "103" }, price: "$Call" },
  { stockNumber: "12442", specs: { size: '11"x13" (10"x12")', ratio: "10:1", focal: '34"-44"', lpi: "103" }, price: "$Call" },
  { stockNumber: "12452", specs: { size: '11"x13" (10"x12")', ratio: "12:1", focal: '34"-44"', lpi: "103" }, price: "$Call" },
  { stockNumber: "16432", specs: { size: '12"x15" (11"x14")', ratio: "8:1", focal: '34"-44"', lpi: "103" }, price: "$Call" },
  { stockNumber: "16442", specs: { size: '12"x15" (11"x14")', ratio: "10:1", focal: '34"-44"', lpi: "103" }, price: "$Call" },
  { stockNumber: "16452", specs: { size: '12"x15" (11"x14")', ratio: "12:1", focal: '34"-44"', lpi: "103" }, price: "$Call" },
  { stockNumber: "17432", specs: { size: '15"x18" (14"x17")', ratio: "8:1", focal: '34"-44"', lpi: "103" }, price: "$Call" },
  { stockNumber: "17442", specs: { size: '15"x18" (14"x17")', ratio: "10:1", focal: '34"-44"', lpi: "103" }, price: "$Call" },
  { stockNumber: "17452", specs: { size: '15"x18" (14"x17")', ratio: "12:1", focal: '34"-44"', lpi: "103" }, price: "$Call" },
  { stockNumber: "18432", specs: { size: '17-1/4" x 17-3/4"', ratio: "8:1", focal: '34"-44"', lpi: "103" }, price: "$Call" },
  { stockNumber: "18442", specs: { size: '17-1/4" x 17-3/4"', ratio: "10:1", focal: '34"-44"', lpi: "103" }, price: "$Call" },
  { stockNumber: "18452", specs: { size: '17-1/4" x 17-3/4"', ratio: "12:1", focal: '34"-44"', lpi: "103" }, price: "$Call" },
  { stockNumber: "110432", specs: { size: '15"x37" (14"x36")', ratio: "8:1", focal: '34"-44"', lpi: "103" }, price: "$Call" },
  { stockNumber: "110442", specs: { size: '15"x37" (14"x36")', ratio: "10:1", focal: '34"-44"', lpi: "103" }, price: "$Call" },
  { stockNumber: "110452", specs: { size: '15"x37" (14"x36")', ratio: "12:1", focal: '34"-44"', lpi: "103" }, price: "$Call" },
];

const encasementVariants: ProductVariant[] = [
  { stockNumber: "FEWFEO-10X12", description: 'Flat Encasement 10"x12"', price: "$Call" },
  { stockNumber: "FEWFEO-24X30", description: "Flat Encasement 24cmx30cm", price: "$Call" },
  { stockNumber: "FEWFEO-14X17", description: 'Flat Encasement 14"x17"', price: "$Call" },
  { stockNumber: "DOEEO-10X12", description: 'Drop-On Encasement 10"x12"', price: "$Call" },
  { stockNumber: "DOEEO-14X17", description: 'Drop-On Encasement 14"x17"', price: "$Call" },
  { stockNumber: "DOEEO-24X30", description: "Drop-On Encasement 24cmx30cm", price: "$Call" },
  { stockNumber: "XRAC-8X10", description: 'XRAC Channel Encasement 8"x10"', price: "$Call" },
  { stockNumber: "XRAC-10X12", description: 'XRAC Channel Encasement 10"x12"', price: "$Call" },
  { stockNumber: "XRAC-14X17", description: 'XRAC Channel Encasement 14"x17"', price: "$Call" },
  { stockNumber: "XRAC-II8X10", description: 'XRAC EZ Slide-II Aluminum 8"x10"', price: "$Call" },
  { stockNumber: "XRAC-II10X12", description: 'XRAC EZ Slide-II Aluminum 10"x12"', price: "$Call" },
  { stockNumber: "XRAC-II14X17", description: 'XRAC EZ Slide-II Aluminum 14"x17"', price: "$Call" },
  { stockNumber: "XRAC-III14X17", description: 'XRAC EZ Slide-III for Portables 14"x17"', price: "$Call" },
  { stockNumber: "WBGE-14X17", description: 'Weight Bearing Encasement 14"x17"', price: "$Call" },
  { stockNumber: "WBGE-17X17", description: 'Weight Bearing Encasement 17"x17"', price: "$Call" },
];

export const gridsProduct: Product = {
  slug: "grids",
  name: "X-Ray Grids",
  description:
    "Aluminum interspaced X-ray grids available in standard 103 lpi and ultra-high line 178/200 lpi for digital CR and DR applications. Multiple grid sizes from 8\"x10\" to 14\"x36\" with ratios from 6:1 to 12:1. Optional encasement solutions including flat, drop-on, XRAC channel, aluminum EZ Slide, and weight bearing configurations.",
  longDescription:
    "Our X-ray grids are designed to improve image quality by reducing scatter radiation. Standard grids are available at 103 lines per inch, while our ultra-high line grids at 178 and 200 lpi are specifically engineered for digital CR and DR applications where Moiré artifact elimination is critical. All grids feature aluminum interspacing for lightweight durability. Lead strips run in the long (widest) dimension by default — decubitus orientation is available at an up-charge. Be sure to specify focal distance when ordering: FFD 26\"-32\", 34\"-44\", 48\"-72\", 62\"-72\", or Parallel.",
  seoTitle: "X-Ray Grids | Standard & Digital CR/DR | Pacific Northwest X-Ray",
  seoDescription:
    "X-ray grids: standard 103 lpi and ultra-high line 178/200 lpi for digital CR/DR. Sizes 8x10 to 14x36. Multiple encasement options. Call for pricing.",
  images: ["/images/Parts/Grids/11432_1.jpg", "/images/Parts/Grids/11432_2.gif"],
  variants: [...standardGridVariants, ...encasementVariants],
  features: [
    "Aluminum interspaced construction",
    "Standard 103 lpi and ultra-high 178/200 lpi options",
    "Multiple focal distance ranges available",
    "Grid sizes from 8\"x10\" to 14\"x36\"",
    "Ratios from 6:1 to 12:1",
    "Designed for CR, DR, and standard film applications",
    "Multiple encasement options available",
    "Decubitus orientation available (upcharge applies)",
  ],
  notes: [
    "Specify focal distance when ordering",
    "Standard lead strips run in the long dimension",
    "Non-Soyee brand grids require additional $25 encasement fee",
    "Encasements must be ordered with new grids or ship existing grid to us",
  ],
  category: "parts",
};
