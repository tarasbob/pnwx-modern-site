import { render, screen } from "@testing-library/react";
import Header from "@/components/layout/Header";

describe("Navigation", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("renders the company logo text", () => {
    expect(screen.getByText(/PNWX/)).toBeInTheDocument();
  });

  it("renders the toll free number", () => {
    expect(screen.getByText("800-827-9729")).toBeInTheDocument();
  });

  it("renders key navigation links", () => {
    const expectedLinks = ["Accessories", "Equipment", "Parts", "Supplies"];
    expectedLinks.forEach((linkText) => {
      const links = screen.getAllByText(linkText);
      expect(links.length).toBeGreaterThanOrEqual(1);
    });
  });

  it("renders the Accessories link pointing to /accessories", () => {
    const links = screen.getAllByText("Accessories");
    const link = links.find(
      (el) => el.closest("a")?.getAttribute("href") === "/accessories"
    );
    expect(link).toBeTruthy();
  });

  it("renders the Equipment link pointing to /equipment", () => {
    const links = screen.getAllByText("Equipment");
    const link = links.find(
      (el) => el.closest("a")?.getAttribute("href") === "/equipment"
    );
    expect(link).toBeTruthy();
  });

  it("renders the Contact Sales button", () => {
    expect(screen.getByText("Contact Sales")).toBeInTheDocument();
  });

  it("renders mobile menu button", () => {
    expect(screen.getByLabelText("Open menu")).toBeInTheDocument();
  });
});
