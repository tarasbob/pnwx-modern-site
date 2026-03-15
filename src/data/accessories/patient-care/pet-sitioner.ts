import type { Product } from "../../types";

export const petSitionerProduct: Product = {
  slug: "pet-sitioner",
  name: "Veterinary X-Ray Positioning Devices & Immobilizers",
  description:
    "Radiolucent veterinary positioning devices and immobilizers from Techno-Aide, Stealth-Core, and Pet-Sitioner for artifact-free imaging of all animal sizes.",
  seoTitle: "Veterinary X-Ray Positioning Devices & Immobilizers | PNWX",
  seoDescription:
    "Veterinary x-ray positioning: Techno-Aide immobilizers, Stealth-Core coated positioners, and Pet-Sitioner troughs. Radiolucent, artifact-free imaging for all animals.",
  images: [
    "/images/Accessories/PosAides/Pet-Sitioner/QUVCA_1.jpg",
    "/images/Accessories/PosAides/Pet-Sitioner/QUVCA_2.jpg",
    "/images/Accessories/PosAides/Pet-Sitioner/QNVI-10_1.jpg",
    "/images/Accessories/PosAides/Pet-Sitioner/PSL_1.jpg",
  ],
  variants: [
    // Techno-Aide Immobilizers
    {
      stockNumber: "VIT-X",
      description: "Techno-Aide Immobilizer X-Large",
      price: "$345.00",
    },
    {
      stockNumber: "VIT-L",
      description: "Techno-Aide Immobilizer Large",
      price: "$240.00",
    },
    {
      stockNumber: "VIT-M",
      description: "Techno-Aide Immobilizer Medium",
      price: "$165.00",
    },
    {
      stockNumber: "VIT-S",
      description: "Techno-Aide Immobilizer Small",
      price: "$140.00",
    },
    {
      stockNumber: "VIT-B",
      description: "Techno-Aide Immobilizer Bundle (S/M/L/XL)",
      price: "$849.33",
    },
    // Stealth-Core Positioners (foam)
    {
      stockNumber: "YFCA",
      description: "Stealth-Core Foam Positioner A",
      price: "$36.00",
    },
    {
      stockNumber: "YCCA",
      description: "Stealth-Core Coated Positioner A",
      price: "$249.33",
    },
    {
      stockNumber: "YFCB",
      description: "Stealth-Core Foam Positioner B",
      price: "$94.67",
    },
    {
      stockNumber: "YCCB",
      description: "Stealth-Core Coated Positioner B",
      price: "$424.00",
    },
    {
      stockNumber: "YFCC",
      description: "Stealth-Core Foam Positioner C",
      price: "$260.00",
    },
    {
      stockNumber: "YCCC",
      description: "Stealth-Core Coated Positioner C",
      price: "$689.14",
    },
    {
      stockNumber: "YFCD",
      description: "Stealth-Core Foam Positioner D",
      price: "$316.00",
    },
    {
      stockNumber: "YCCD",
      description: "Stealth-Core Coated Positioner D",
      price: "$1,242.67",
    },
    // Pet-Sitioner
    {
      stockNumber: "PP103-XL",
      description: "Pet-Sitioner X-Large Trough",
      price: "$614.00",
    },
    {
      stockNumber: "PP102-LG",
      description: "Pet-Sitioner Large Trough",
      price: "$547.00",
    },
    {
      stockNumber: "PP101-SM",
      description: "Pet-Sitioner Small Trough",
      price: "$415.00",
    },
    {
      stockNumber: "PP104-SET",
      description: "Pet-Sitioner Complete Set (SM/LG/XL)",
      price: "$915.00",
    },
  ],
  features: [
    "Radiolucent foam and fabrics",
    "Stealth-Cote medical-grade coating",
    "Artifact-free imaging",
    "Multiple sizes for all animals",
  ],
  category: "accessories",
  subcategory: "patient-care",
};
