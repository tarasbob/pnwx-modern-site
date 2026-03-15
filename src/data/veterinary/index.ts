import type { Category } from "../types";

export const veterinaryCategory: Category = {
  slug: "veterinary",
  name: "Veterinary Radiology Products",
  description:
    "Comprehensive veterinary radiology products including portable X-ray generators, dental film, equine cassette holders, lead aprons, positioning devices, signs, and viewboxes for small and large animal practices.",
  seoTitle: "Veterinary Radiology Products | X-Ray Equipment for Vets | Pacific Northwest X-Ray",
  seoDescription:
    "Veterinary radiology products: portable x-ray generators, dental film, equine cassette holders, lead aprons, positioning devices, and viewboxes for animal practices.",
  image: "/images/Veterinary/31200W_but.jpg",
  subcategories: [
    { slug: "portable-generators", name: "Portable X-Ray Generators", description: "X-ray units that plug into standard wall power for both field portable and in-clinic radiographic use from JPI, Soyee, and DIS Ultra Series.", seoTitle: "Veterinary Portable X-Ray Generators | PNWX", seoDescription: "Veterinary portable x-ray generators: JPI, Soyee, and Ultra Series for clinic and field use.", parentSlug: "veterinary", itemCount: 4 },
    { slug: "dental-film", name: "Dental Film", description: "PetDent dental film with wide latitude for excellent image detail and blue-based emulsion for greater clarity.", seoTitle: "Veterinary Dental Film | PNWX", seoDescription: "PetDent veterinary dental film with wide latitude and blue-based emulsion.", parentSlug: "veterinary" },
    { slug: "equine-holders", name: "Equine Cassette Holders", description: "Stands for safe positioning of cassettes and CR plates during equine radiographic examinations.", seoTitle: "Equine Cassette Holders | PNWX", seoDescription: "Equine cassette holders and CR plate stands for veterinary radiology.", parentSlug: "veterinary" },
    { slug: "lead-aprons", name: "Lead Aprons for Veterinary", description: "Over 92 models of radiation protective aprons in multiple styles and protection levels suitable for veterinary staff.", seoTitle: "Veterinary Lead Aprons | PNWX", seoDescription: "Radiation protective aprons for veterinary staff: 92+ models in multiple styles.", parentSlug: "veterinary", itemCount: 92 },
    { slug: "positioners", name: "Positioning Devices", description: "Specialized foam positioning devices and immobilizers for veterinary radiographic procedures.", seoTitle: "Veterinary Positioning Devices | PNWX", seoDescription: "Veterinary positioning foam and immobilizers for radiographic procedures.", parentSlug: "veterinary" },
    { slug: "signs", name: "Radiology Signs", description: "X-ray and radiology safety signs including veterinary-specific warning signage.", seoTitle: "Veterinary Radiology Signs | PNWX", seoDescription: "Radiology safety signs including veterinary-specific warning signs.", parentSlug: "veterinary" },
    { slug: "viewboxes", name: "Viewboxes", description: "Viewboxes popular with small and large animal radiology customers from Wolf, Maxant, and Techno-Aide.", seoTitle: "Veterinary Viewboxes | PNWX", seoDescription: "Veterinary viewboxes: Thrifty-Lume, Techline, Econobox, and standard illuminators.", parentSlug: "veterinary" },
  ],
};
