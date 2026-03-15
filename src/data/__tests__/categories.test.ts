import { describe, it, expect } from "vitest";
import { mainNavigation, popularProducts } from "../categories";

describe("Navigation data", () => {
  it("has main navigation items with required fields", () => {
    expect(mainNavigation.length).toBeGreaterThan(0);
    for (const item of mainNavigation) {
      expect(item.label).toBeTruthy();
      expect(item.href).toMatch(/^\//);
    }
  });

  it("includes all main sections in navigation", () => {
    const hrefs = mainNavigation.map((n) => n.href);
    expect(hrefs).toContain("/accessories");
    expect(hrefs).toContain("/equipment");
    expect(hrefs).toContain("/parts");
    expect(hrefs).toContain("/mri");
    expect(hrefs).toContain("/veterinary");
    expect(hrefs).toContain("/ultrasound");
    expect(hrefs).toContain("/supplies");
    expect(hrefs).toContain("/order");
  });

  it("accessories nav has children", () => {
    const accessories = mainNavigation.find((n) => n.href === "/accessories");
    expect(accessories?.children?.length).toBeGreaterThan(5);
  });
});

describe("Popular products", () => {
  it("has popular products with required fields", () => {
    expect(popularProducts.length).toBeGreaterThan(10);
    for (const p of popularProducts) {
      expect(p.label).toBeTruthy();
      expect(p.href).toMatch(/^\//);
      expect(p.description).toBeTruthy();
    }
  });
});
