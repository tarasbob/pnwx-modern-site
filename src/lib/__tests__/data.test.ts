import { describe, it, expect } from "vitest";
import {
  getSectionCategories,
  getCategoryBySlug,
  getSectionMeta,
  getAllSectionSlugs,
} from "../data";

describe("Data utilities", () => {
  describe("getSectionCategories", () => {
    it("returns accessories categories", () => {
      const cats = getSectionCategories("accessories");
      expect(cats.length).toBeGreaterThan(0);
      expect(cats[0]).toHaveProperty("slug");
      expect(cats[0]).toHaveProperty("name");
    });

    it("returns equipment categories", () => {
      const cats = getSectionCategories("equipment");
      expect(cats.length).toBeGreaterThan(0);
    });

    it("returns parts categories", () => {
      const cats = getSectionCategories("parts");
      expect(cats.length).toBe(4);
    });
  });

  describe("getCategoryBySlug", () => {
    it("finds accessories darkroom by slug", () => {
      const cat = getCategoryBySlug("accessories", "darkroom");
      expect(cat).toBeDefined();
      expect(cat?.name).toBe("Darkroom Products");
    });

    it("returns undefined for non-existent slug", () => {
      const cat = getCategoryBySlug("accessories", "nonexistent");
      expect(cat).toBeUndefined();
    });
  });

  describe("getSectionMeta", () => {
    it("returns correct meta for each section", () => {
      const sections = [
        "accessories",
        "equipment",
        "parts",
        "mri",
        "veterinary",
        "ultrasound",
        "supplies",
        "pedigo",
      ] as const;
      for (const section of sections) {
        const meta = getSectionMeta(section);
        expect(meta.name).toBeTruthy();
        expect(meta.description).toBeTruthy();
      }
    });
  });

  describe("getAllSectionSlugs", () => {
    it("returns slugs for all sections", () => {
      const all = getAllSectionSlugs();
      expect(all.length).toBeGreaterThan(0);
      const accessoriesEntry = all.find((e) => e.section === "accessories");
      expect(accessoriesEntry?.slugs).toContain("darkroom");
    });
  });
});
