import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("loads with correct title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Pacific Northwest X-Ray/);
  });

  test("displays hero section with CTA", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("section").first().getByText("Equipment & Supplies")).toBeVisible();
    await expect(page.getByRole("link", { name: "Browse Products" })).toBeVisible();
  });

  test("displays product catalog sections", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "Browse Our Product Catalog" })).toBeVisible();
  });

  test("displays popular products", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "Most Popular Products" })).toBeVisible();
  });
});

test.describe("Navigation", () => {
  test("accessories page loads with categories", async ({ page }) => {
    await page.goto("/accessories");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.locator("main h3").filter({ hasText: "Darkroom Products" })).toBeVisible();
  });

  test("equipment page loads with categories", async ({ page }) => {
    await page.goto("/equipment");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.locator("main h3").filter({ hasText: "Test Equipment" })).toBeVisible();
  });

  test("parts page loads with categories", async ({ page }) => {
    await page.goto("/parts");
    await expect(page.locator("main h3").filter({ hasText: "X-Ray Grids" })).toBeVisible();
    await expect(page.locator("main h3").filter({ hasText: "Collimators" })).toBeVisible();
  });

  test("MRI page loads with subcategories", async ({ page }) => {
    await page.goto("/mri");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.locator("main h3").filter({ hasText: "Wheelchairs" })).toBeVisible();
  });

  test("order page loads with policies", async ({ page }) => {
    await page.goto("/order");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
});

test.describe("Category drill-down", () => {
  test("accessories > darkroom shows subcategories", async ({ page }) => {
    await page.goto("/accessories/darkroom");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.locator("main h3").filter({ hasText: "Safelights" })).toBeVisible();
  });

  test("accessories > lead-products shows subcategories", async ({ page }) => {
    await page.goto("/accessories/lead-products");
    await expect(page.locator("main").getByText("Radiation Protective Aprons")).toBeVisible();
  });

  test("parts > grids shows product details", async ({ page }) => {
    await page.goto("/parts/grids");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.locator("table").getByText("11432")).toBeVisible();
  });

  test("parts > collimators shows product", async ({ page }) => {
    await page.goto("/parts/collimators");
    await expect(page.getByRole("heading", { name: "Ralco Manual Collimator" })).toBeVisible();
    await expect(page.getByText("$2,300.00")).toBeVisible();
  });
});

test.describe("SEO", () => {
  test("homepage has meta description", async ({ page }) => {
    await page.goto("/");
    const desc = page.locator('meta[name="description"]');
    await expect(desc).toHaveAttribute("content", /Pacific Northwest X-Ray/);
  });

  test("JSON-LD structured data exists on homepage", async ({ page }) => {
    await page.goto("/");
    const jsonLd = page.locator('script[type="application/ld+json"]');
    const count = await jsonLd.count();
    expect(count).toBeGreaterThan(0);
  });

  test("sitemap.xml is accessible", async ({ page }) => {
    const response = await page.goto("/sitemap.xml");
    expect(response?.status()).toBe(200);
  });

  test("robots.txt is accessible", async ({ page }) => {
    const response = await page.goto("/robots.txt");
    expect(response?.status()).toBe(200);
  });
});

test.describe("404 Page", () => {
  test("shows custom 404 for non-existent pages", async ({ page }) => {
    await page.goto("/this-does-not-exist");
    await expect(page.getByText("404")).toBeVisible();
  });
});
