import { accessoriesCategories } from "@/data/accessories";
import { equipmentCategories } from "@/data/equipment";
import { partsCategories } from "@/data/parts";
import { mriCategory } from "@/data/mri";
import { veterinaryCategory } from "@/data/veterinary";
import { ultrasoundCategory } from "@/data/ultrasound";
import { suppliesCategory } from "@/data/supplies";
import { pedigoCategory } from "@/data/pedigo";
import type { Category, SubCategory } from "@/data/types";

export type SectionKey =
  | "accessories"
  | "equipment"
  | "parts"
  | "mri"
  | "veterinary"
  | "ultrasound"
  | "supplies"
  | "pedigo";

const sectionMap: Record<SectionKey, Category[]> = {
  accessories: accessoriesCategories,
  equipment: equipmentCategories,
  parts: partsCategories,
  mri: mriCategory.subcategories?.map((s) => ({ ...s, seoTitle: s.seoTitle, seoDescription: s.seoDescription })) as Category[] ?? [],
  veterinary: veterinaryCategory.subcategories?.map((s) => ({ ...s, seoTitle: s.seoTitle, seoDescription: s.seoDescription })) as Category[] ?? [],
  ultrasound: ultrasoundCategory.subcategories?.map((s) => ({ ...s, seoTitle: s.seoTitle, seoDescription: s.seoDescription })) as Category[] ?? [],
  supplies: suppliesCategory.subcategories?.map((s) => ({ ...s, seoTitle: s.seoTitle, seoDescription: s.seoDescription })) as Category[] ?? [],
  pedigo: pedigoCategory.subcategories?.map((s) => ({ ...s, seoTitle: s.seoTitle, seoDescription: s.seoDescription })) as Category[] ?? [],
};

export function getSectionCategories(section: SectionKey): Category[] {
  return sectionMap[section] ?? [];
}

export function getCategoryBySlug(section: SectionKey, slug: string): Category | undefined {
  return sectionMap[section]?.find((c) => c.slug === slug);
}

export function getSubcategoryBySlug(
  category: Category,
  slug: string
): SubCategory | undefined {
  return category.subcategories?.find((s) => s.slug === slug);
}

export function getAllSectionSlugs(): { section: SectionKey; slugs: string[] }[] {
  return Object.entries(sectionMap).map(([section, categories]) => ({
    section: section as SectionKey,
    slugs: categories.map((c) => c.slug),
  }));
}

export function getSectionMeta(section: SectionKey): { name: string; description: string } {
  const meta: Record<SectionKey, { name: string; description: string }> = {
    accessories: {
      name: "X-Ray Accessories",
      description: "X-Ray and radiology accessories for every department — darkroom, exam room, patient care, radiation protection, phantoms, and more.",
    },
    equipment: {
      name: "X-Ray Equipment",
      description: "X-Ray, radiology, and medical equipment including portable systems, film processors, viewboxes, and test equipment.",
    },
    parts: {
      name: "X-Ray Parts",
      description: "X-Ray parts and components including grids, collimators, projection lamps, and high voltage cables.",
    },
    mri: {
      name: "MRI Safe Products",
      description: "MRI-compatible products rated safe for use in magnetic field environments up to 3-Tesla.",
    },
    veterinary: {
      name: "Veterinary Radiology Products",
      description: "Radiology products tailored for veterinary practices — portable generators, positioning devices, viewboxes, and protective equipment.",
    },
    ultrasound: {
      name: "Ultrasound Products",
      description: "Ultrasound supplies and equipment including gels, warmers, phantoms, imaging tables, and maintenance products.",
    },
    supplies: {
      name: "Radiology Supplies",
      description: "Consumable supplies for radiology departments — sanitizers, cleaners, covers, gels, labels, and protective products.",
    },
    pedigo: {
      name: "Pedigo Medical Products",
      description: "Complete line of Pedigo medical products — stretchers, cabinets, carts, stools, tables, and patient care equipment.",
    },
  };
  return meta[section];
}
