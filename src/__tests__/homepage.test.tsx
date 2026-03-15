import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("Homepage", () => {
  beforeEach(() => {
    render(<HomePage />);
  });

  it("renders the hero tagline", () => {
    expect(
      screen.getByText("Serving Radiology Professionals Since 1997")
    ).toBeInTheDocument();
  });

  it("renders the hero headline", () => {
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent(/X-Ray/);
  });

  it("renders browse products CTA", () => {
    expect(screen.getByText("Browse Products")).toBeInTheDocument();
  });

  it("renders the product catalog section", () => {
    expect(
      screen.getByText("Browse Our Product Catalog")
    ).toBeInTheDocument();
  });

  it("renders popular products section", () => {
    expect(screen.getByText("Most Popular Products")).toBeInTheDocument();
  });

  it("renders popular product items", () => {
    expect(
      screen.getByText("Surgical Radiation Reducing Gloves")
    ).toBeInTheDocument();
    expect(screen.getByText("Lead Glass Windows")).toBeInTheDocument();
    expect(screen.getByText("Mobile Lead Barriers")).toBeInTheDocument();
  });

  it("renders the upgrade CTA section", () => {
    expect(screen.getByText(/Ready to upgrade your/)).toBeInTheDocument();
  });

  it("renders the contact strip", () => {
    expect(screen.getByText("Call Us")).toBeInTheDocument();
    expect(screen.getByText("Fax Your Order")).toBeInTheDocument();
  });

  it("displays the company phone number", () => {
    expect(screen.getByText(/503-667-3000/)).toBeInTheDocument();
  });
});
