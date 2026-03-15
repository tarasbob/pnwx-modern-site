import type { Product } from "../../types";

export const tablePadsProduct: Product = {
  slug: "table-pads",
  name: "X-Ray Table Pads",
  description:
    "Radiolucent x-ray table pads in standard and premium options with multiple covering materials, thicknesses, and anti-slip bottoms.",
  seoTitle: "X-Ray Table Pads | PNWX",
  seoDescription:
    "Radiolucent x-ray table pads: economy vinyl, upholstery, Techno-TUFF, and premium 4-way stretch. Standard and plus sizes with memory foam options.",
  images: [
    "/images/Accessories/PatAsst/TablePads/X-Ray/PAD-51_1.jpg",
    "/images/Accessories/PatAsst/TablePads/X-Ray/PAD-51_2.jpg",
    "/images/Accessories/PatAsst/TablePads/X-Ray/CPAD-PPC-4WY-AS_1.jpg",
    "/images/Accessories/PatAsst/TablePads/X-Ray/CPAD-PPC-4WY-AS_2.jpg",
  ],
  variants: [
    // Standard pads
    {
      stockNumber: "PAD-ST1-ECO-NG",
      description: '1" Economy Vinyl Standard Table Pad',
      price: "$209.33",
    },
    {
      stockNumber: "PAD-ST2-ECO-NG",
      description: '2" Economy Vinyl Standard Table Pad',
      price: "$541.92",
    },
    {
      stockNumber: "PAD-ST1-BLK-NG",
      description: '1" Upholstery Black Standard Table Pad',
      price: "$441.33",
    },
    {
      stockNumber: "PAD-ST2-BLK-NG",
      description: '2" Upholstery Black Standard Table Pad',
      price: "$569.48",
    },
    {
      stockNumber: "PAD-ST1-TBK-NG",
      description: '1" Techno-TUFF Standard Table Pad',
      price: "$457.33",
    },
    {
      stockNumber: "PAD-ST2-TBK-NG",
      description: '2" Techno-TUFF Standard Table Pad',
      price: "$596.19",
    },
    {
      stockNumber: "PAD-SP1-ECO-NG",
      description: '1" Economy Vinyl Plus Table Pad 80x30',
      price: "$433.39",
    },
    {
      stockNumber: "PAD-SP2-ECO-NG",
      description: '2" Economy Vinyl Plus Table Pad',
      price: "$725.33",
    },
    // Premium pads
    {
      stockNumber: "CPAD-PRC-4WY-AS",
      description: "Premium Comfort 4-Way Stretch Anti-Slip Table Pad",
      price: "$1,354.92",
    },
    {
      stockNumber: "CPAD-PRF-4WY-AS",
      description: "Premium Firm 4-Way Stretch Anti-Slip Table Pad",
      price: "$1,429.84",
    },
    {
      stockNumber: "CPAD-PRM-4WY-AS",
      description: "Premium Memory Foam 4-Way Stretch Anti-Slip Table Pad",
      price: "$1,752.38",
    },
    {
      stockNumber: "CPAD-PPC-4WY-AS",
      description:
        "Premium Comfort Plus 4-Way Stretch Anti-Slip Table Pad 80x30",
      price: "$1,817.14",
    },
    {
      stockNumber: "CPAD-PPM-4WY-AS",
      description:
        "Premium Memory Foam Plus 4-Way Stretch Anti-Slip Table Pad",
      price: "$2,033.02",
    },
  ],
  features: [
    "Radiolucent construction",
    "Multiple covering options (Econo Vinyl, Upholstery, Techno-TUFF, 4-Way Stretch)",
    "Standard and Plus sizes",
    "Anti-slip bottom option",
    "Memory foam premium option",
  ],
  notes: [
    'Pads over 1-1/4" thick NOT recommended for diagnostic imaging',
  ],
  category: "accessories",
  subcategory: "patient-care",
};
