import type { Product } from "../../types";

export const mriAcrProduct: Product = {
  slug: "mri",
  name: "ACR Medium MRI Phantom",
  description:
    "ACR-compliant MRI phantoms for accreditation testing, quality assurance, and system evaluation with optional accessories.",
  seoTitle: "ACR MRI Phantoms | PNWX",
  seoDescription:
    "ACR Medium and Large MRI phantoms for accreditation program compliance. IPEM Report 80, AAPM Reports 28/34/100 compliant. CE certified.",
  images: [
    "/images/Accessories/Phantoms/MRI/Pro-Project/ACR-Medium/09-301_1.jpg",
  ],
  variants: [
    {
      stockNumber: "09-301",
      description: "ACR Medium MRI Phantom",
      price: "$2,888.00",
    },
    {
      stockNumber: "09-302",
      description: "ACR Large MRI Phantom",
      price: "$2,888.00",
    },
    {
      stockNumber: "09-104",
      description: "3-axis spirit level for MRI Phantom",
      price: "$Call",
    },
    {
      stockNumber: "09-102",
      description: "Heavy Duty Case for MRI Phantom",
      price: "$Call",
    },
    {
      stockNumber: "09-103",
      description: "6 removable vials option for MRI Phantom",
      price: "$Call",
    },
    {
      stockNumber: "09-201",
      description: "SpineRect MRI Phantom",
      price: "$Call",
    },
    {
      stockNumber: "09-202",
      description: "Agar MRI Phantom",
      price: "$Call",
    },
  ],
  features: [
    "ACR MRI Accreditation Program compliant",
    "IPEM Report 80 compliant",
    "AAPM Reports 28/34/100",
    "CE certified",
  ],
  category: "accessories",
  subcategory: "phantoms",
};
