import type { Product } from "../../types";

export const merchantBoardsProduct: Product = {
  slug: "merchant-boards",
  name: "PNWX Merchant Board",
  description:
    "Solid oak merchant boards for weight-bearing knee views, available in DR panel and light duty film versions with adjustable angles.",
  seoTitle: "PNWX Merchant Board | PNWX",
  seoDescription:
    "PNWX Merchant Boards: solid oak construction for weight-bearing knee views. DR panel compatible (1104-C3a) and light duty film (1104) versions. 45-degree angle, auto-locking hinge.",
  images: [
    "/images/Accessories/PatAsst/MerchantBoards/1104-C3a_1.jpg",
    "/images/Accessories/PatAsst/MerchantBoards/1104-C3a_2.jpg",
    "/images/Accessories/PatAsst/MerchantBoards/1104-C3a_3.jpg",
    "/images/Accessories/PatAsst/MerchantBoards/1104_1.jpg",
    "/images/Accessories/PatAsst/MerchantBoards/1104_2.jpg",
  ],
  variants: [
    // DR Panel version
    {
      stockNumber: "1104-C3a",
      description:
        "DR Panel Merchant Board with arms, solid box design, 45-degree angle, includes leg straps",
      price: "$2,296.00",
    },
    {
      stockNumber: "1104-C3",
      description:
        "DR Panel Merchant Board without arms, solid box design, 45-degree angle, includes leg straps",
      price: "$1,685.00",
    },
    // Light Duty Film version
    {
      stockNumber: "1104",
      description:
        "Light Duty Film Merchant Board, solid oak with formica laminate, adjustable 10-80 degrees, CR compatible",
      price: "$1,225.00",
    },
  ],
  features: [
    "Solid oak construction",
    "45-degree angle",
    'Adjustable for table tops 29.5"-36"',
    "Auto-locking hinge",
    "DR panel compatible",
  ],
  notes: [
    'DR version accommodates panels up to 1-1/4" thick',
    "Light duty version NOT suitable for DR panels",
    "Light duty version ships in 6-8 weeks",
    "90-day limited warranty",
  ],
  category: "accessories",
  subcategory: "patient-care",
};
