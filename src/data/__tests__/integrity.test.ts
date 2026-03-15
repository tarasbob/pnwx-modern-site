import { describe, it, expect } from "vitest";
import { accessoriesCategories } from "../accessories";
import { equipmentCategories } from "../equipment";
import { partsCategories } from "../parts";
import { mriCategory } from "../mri";
import { veterinaryCategory } from "../veterinary";
import { ultrasoundCategory } from "../ultrasound";
import { suppliesCategory } from "../supplies";
import { pedigoCategory } from "../pedigo";
import { gridsProduct } from "../parts/grids";
import { collimatorsProduct } from "../parts/collimators";
import { lampsProduct } from "../parts/lamps";
import { cablesProduct } from "../parts/cables";
import { policies } from "../policies";

describe("Data integrity - Accessories", () => {
  it("has 9 top-level accessory categories", () => {
    expect(accessoriesCategories.length).toBe(9);
  });

  it("all categories have required SEO fields", () => {
    for (const cat of accessoriesCategories) {
      expect(cat.slug).toBeTruthy();
      expect(cat.name).toBeTruthy();
      expect(cat.description.length).toBeGreaterThan(20);
      expect(cat.seoTitle).toBeTruthy();
      expect(cat.seoDescription).toBeTruthy();
    }
  });

  it("lead-products category has 12 subcategories", () => {
    const lead = accessoriesCategories.find((c) => c.slug === "lead-products");
    expect(lead?.subcategories?.length).toBe(12);
  });

  it("phantoms category has subcategories", () => {
    const phantoms = accessoriesCategories.find((c) => c.slug === "phantoms");
    expect(phantoms?.subcategories?.length).toBeGreaterThan(5);
  });
});

describe("Data integrity - Equipment", () => {
  it("has 7 equipment categories", () => {
    expect(equipmentCategories.length).toBe(7);
  });

  it("portable-xray has 5 brand subcategories", () => {
    const portable = equipmentCategories.find((c) => c.slug === "portable-xray");
    expect(portable?.subcategories?.length).toBe(5);
  });
});

describe("Data integrity - Parts", () => {
  it("has 4 parts categories", () => {
    expect(partsCategories.length).toBe(4);
  });

  it("grids product has many variants", () => {
    expect(gridsProduct.variants!.length).toBeGreaterThan(30);
  });

  it("collimators product has a price", () => {
    expect(collimatorsProduct.variants![0].price).toBe("$2,300.00");
  });

  it("lamps product has 3 variants", () => {
    expect(lampsProduct.variants!.length).toBe(3);
  });

  it("cables product has stock number", () => {
    expect(cablesProduct.variants![0].stockNumber).toBe("J995-65");
  });
});

describe("Data integrity - Section categories", () => {
  it("MRI has 15 subcategories", () => {
    expect(mriCategory.subcategories?.length).toBe(15);
  });

  it("Veterinary has 7 subcategories", () => {
    expect(veterinaryCategory.subcategories?.length).toBe(7);
  });

  it("Ultrasound has 5 subcategories", () => {
    expect(ultrasoundCategory.subcategories?.length).toBe(5);
  });

  it("Supplies has 14 subcategories", () => {
    expect(suppliesCategory.subcategories?.length).toBe(14);
  });

  it("Pedigo has 9 subcategories", () => {
    expect(pedigoCategory.subcategories?.length).toBe(9);
  });
});

describe("Data integrity - Policies", () => {
  it("has 4 order methods", () => {
    expect(policies.orderMethods.length).toBe(4);
  });

  it("has 5 payment methods", () => {
    expect(policies.paymentMethods.length).toBe(5);
  });

  it("has non-empty policy strings", () => {
    expect(policies.warranties.length).toBeGreaterThan(50);
    expect(policies.cancellations.length).toBeGreaterThan(50);
    expect(policies.refusal.length).toBeGreaterThan(50);
    expect(policies.delivery.length).toBeGreaterThan(50);
  });
});

describe("Data integrity - Slug uniqueness", () => {
  it("accessory category slugs are unique", () => {
    const slugs = accessoriesCategories.map((c) => c.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("equipment category slugs are unique", () => {
    const slugs = equipmentCategories.map((c) => c.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("parts category slugs are unique", () => {
    const slugs = partsCategories.map((c) => c.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
