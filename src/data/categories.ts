import type { NavItem } from "./types";

export const mainNavigation: NavItem[] = [
  {
    label: "Accessories",
    href: "/accessories",
    description: "X-Ray & radiology accessories for every department",
    children: [
      { label: "Darkroom Products", href: "/accessories/darkroom" },
      { label: "Exam Room Products", href: "/accessories/exam-room" },
      { label: "Film ID Markers", href: "/accessories/markers" },
      { label: "Cassettes & Storage", href: "/accessories/cassettes" },
      { label: "MRI Accessories", href: "/mri" },
      { label: "Patient Care & Positioning", href: "/accessories/patient-care" },
      { label: "Phantoms & Test Tools", href: "/accessories/phantoms" },
      { label: "Seating Products", href: "/accessories/seating" },
      { label: "Technologist Aids", href: "/accessories/tech-aides" },
      { label: "Radiation Protection (Lead)", href: "/accessories/lead-products" },
      { label: "Ultrasound Accessories", href: "/ultrasound" },
      { label: "Veterinary Products", href: "/veterinary" },
    ],
  },
  {
    label: "Equipment",
    href: "/equipment",
    description: "X-Ray systems, processors, viewboxes & more",
    children: [
      { label: "Darkroom Equipment", href: "/equipment/darkroom" },
      { label: "Digital Portable X-Ray", href: "/equipment/digital-portable" },
      { label: "Exam Room Equipment", href: "/equipment/exam-room" },
      { label: "Film Viewing Equipment", href: "/equipment/film-viewing" },
      { label: "Medical & Patient Care", href: "/equipment/medical" },
      { label: "Portable X-Ray Systems", href: "/equipment/portable-xray" },
      { label: "Test Equipment", href: "/equipment/test" },
    ],
  },
  {
    label: "Parts",
    href: "/parts",
    description: "X-Ray grids, collimators, cables & lamps",
    children: [
      { label: "X-Ray Grids", href: "/parts/grids" },
      { label: "Collimators", href: "/parts/collimators" },
      { label: "Collimator Lamps", href: "/parts/lamps" },
      { label: "High Voltage Cables", href: "/parts/cables" },
    ],
  },
  {
    label: "MRI",
    href: "/mri",
    description: "MRI-safe products rated up to 3-Tesla",
  },
  {
    label: "Veterinary",
    href: "/veterinary",
    description: "Radiology products for veterinary practices",
  },
  {
    label: "Ultrasound",
    href: "/ultrasound",
    description: "Ultrasound gel, warmers, phantoms & tables",
  },
  {
    label: "Supplies",
    href: "/supplies",
    description: "Consumable supplies for radiology departments",
  },
  {
    label: "How to Order",
    href: "/order",
    description: "Order methods, payment, policies & warranties",
  },
];

export const popularProducts = [
  {
    label: "Fastest Shipping Lead Apparel",
    href: "/accessories/lead-products/aprons",
    description: "Infab 24-hour ship lead-free protective aprons",
    image: "/images/Accessories/LeadProducts/Aprons/Infab/LightningFast/UFP_1.jpg",
  },
  {
    label: "Most Comfortable Aprons",
    href: "/accessories/lead-products/aprons",
    description: "Revolution series with KIARMOR core and Cool Wear lining",
    image: "/images/Accessories/LeadProducts/Aprons/Infab/Revolution/FullOverlapVestSkirt/703F-XS-RL_but.jpg",
  },
  {
    label: "Surgical Radiation Reducing Gloves",
    href: "/accessories/lead-products/gloves",
    description: "Proguard exam and surgical radiation-reducing gloves",
    image: "/images/Accessories/LeadProducts/Gloves/Proguard/RR1_1.jpg",
  },
  {
    label: "Line-Pair Resolution Test Phantoms",
    href: "/accessories/phantoms/test",
    description: "Pro-Project, Leeds and Ludlum line-pair test tools",
    image: "/images/Accessories/Phantoms/Test/LinePair/05-401_1.jpg",
  },
  {
    label: "Lead Glass Windows",
    href: "/accessories/lead-products/windows",
    description: "Leaded glass, frames and construction products",
    image: "/images/Accessories/LeadProducts/Windows/14307_1.jpg",
  },
  {
    label: "Mobile Lead Barriers",
    href: "/accessories/lead-products/mobile-barriers",
    description: "Infab mobile radiation barriers in multiple sizes",
    image: "/images/Accessories/LeadProducts/MobileBarriers/Infab/683460_1.jpg",
  },
  {
    label: "Resolution Test Tools / Phantoms",
    href: "/accessories/phantoms/test",
    description: "Fluoroscopic performance and resolution test phantoms",
    image: "/images/Accessories/Phantoms/Test/Fluoroscopy/07-647_1.jpg",
  },
  {
    label: "X-Ray Merchant Boards",
    href: "/accessories/patient-care/merchant-boards",
    description: "Solid oak merchant boards for knee views",
    image: "/images/Accessories/PatAsst/MerchantBoards/1104-C3a_1.jpg",
  },
  {
    label: "ACR Medium MRI Phantom",
    href: "/accessories/phantoms/mri",
    description: "ACR-accredited MRI performance phantom",
    image: "/images/Accessories/Phantoms/MRI/Pro-Project/ACR-Medium/09-301_1.jpg",
  },
  {
    label: "Small Animal Immobilizers",
    href: "/accessories/patient-care/pet-sitioner",
    description: "Veterinary positioning devices and immobilizers",
    image: "/images/Accessories/PosAides/Pet-Sitioner/PSL_1.jpg",
  },
  {
    label: "X-Ray Table Pads",
    href: "/accessories/patient-care/table-pads",
    description: "Radiolucent table pads in standard and premium options",
    image: "/images/Accessories/PatAsst/TablePads/X-Ray/PAD-51_1.jpg",
  },
  {
    label: "Silver Recovery Systems",
    href: "/equipment/darkroom/silver-recovery",
    description: "Rotex electrolytic and canister silver recovery",
    image: "/images/Equipment/DarkEquip/Rotex/05510707_but.jpg",
  },
  {
    label: "X-Ray Grids",
    href: "/parts/grids",
    description: "Standard and ultra-high line grids for CR and DR",
    image: "/images/Parts/Grids/11432_1.jpg",
  },
  {
    label: "System Test Phantoms",
    href: "/accessories/phantoms/test",
    description: "Accreditation, resolution, QA and alignment test tools",
    image: "/images/Accessories/Phantoms/Test/Fluoroscopy/02-220_1.jpg",
  },
];
