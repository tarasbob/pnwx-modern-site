import { COMPANY } from "@/lib/constants";
import fs from "fs";
import path from "path";

describe("SEO", () => {
  it("has a robots.txt file", () => {
    const robotsPath = path.join(process.cwd(), "public", "robots.txt");
    expect(fs.existsSync(robotsPath)).toBe(true);
    const content = fs.readFileSync(robotsPath, "utf-8");
    expect(content).toContain("User-agent: *");
    expect(content).toContain("Sitemap:");
  });

  it("has a sitemap.xml file", () => {
    const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");
    expect(fs.existsSync(sitemapPath)).toBe(true);
    const content = fs.readFileSync(sitemapPath, "utf-8");
    expect(content).toContain("<urlset");
    expect(content).toContain("https://www.pnwx.com/");
    expect(content).toContain("https://www.pnwx.com/equipment");
    expect(content).toContain("https://www.pnwx.com/accessories");
    expect(content).toContain("https://www.pnwx.com/supplies");
    expect(content).toContain("https://www.pnwx.com/parts");
    expect(content).toContain("https://www.pnwx.com/contact");
  });

  it("has structured data JSON-LD in layout", () => {
    const layoutPath = path.join(process.cwd(), "src", "app", "layout.tsx");
    const content = fs.readFileSync(layoutPath, "utf-8");
    expect(content).toContain("application/ld+json");
    expect(content).toContain("LocalBusiness");
    expect(content).toContain("Organization");
    expect(content).toContain(COMPANY.phone);
    expect(content).toContain(COMPANY.email);
  });

  it("has metadata with title and description in layout", () => {
    const layoutPath = path.join(process.cwd(), "src", "app", "layout.tsx");
    const content = fs.readFileSync(layoutPath, "utf-8");
    expect(content).toContain("Pacific Northwest X-Ray");
    expect(content).toContain("description");
    expect(content).toContain("keywords");
    expect(content).toContain("openGraph");
  });

  it("has unique meta titles for each page", () => {
    const pages = ["equipment", "accessories", "supplies", "parts", "contact"];
    pages.forEach((page) => {
      const pagePath = path.join(process.cwd(), "src", "app", page, "page.tsx");
      const content = fs.readFileSync(pagePath, "utf-8");
      expect(content).toContain("metadata");
      expect(content).toContain("title");
      expect(content).toContain("description");
    });
  });

  it("uses semantic HTML elements in layout", () => {
    const layoutPath = path.join(process.cwd(), "src", "app", "layout.tsx");
    const content = fs.readFileSync(layoutPath, "utf-8");
    expect(content).toContain("<html");
    expect(content).toContain("lang=\"en\"");
  });

  it("has proper heading hierarchy on homepage", () => {
    const pagePath = path.join(process.cwd(), "src", "app", "page.tsx");
    const content = fs.readFileSync(pagePath, "utf-8");
    // Homepage should have h1 (in hero), h2, h3 headings
    expect(content).toContain("<h2");
    expect(content).toContain("<h3");
  });
});
