import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";

// Mock framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      const { initial, animate, whileInView, viewport, transition, ...rest } = props;
      void initial; void animate; void whileInView; void viewport; void transition;
      return <div {...rest}>{children}</div>;
    },
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => children,
}));

describe("Navigation", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("renders the company name", () => {
    expect(screen.getByText("Pacific Northwest X-Ray")).toBeInTheDocument();
  });

  it("renders the toll free number", () => {
    expect(screen.getByText("800-827-9729")).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    const expectedLinks = ["Home", "Equipment", "Accessories", "Supplies", "Parts", "Contact"];
    expectedLinks.forEach((linkText) => {
      const links = screen.getAllByText(linkText);
      expect(links.length).toBeGreaterThanOrEqual(1);
    });
  });

  it("renders the Home link pointing to /", () => {
    const homeLinks = screen.getAllByText("Home");
    const homeLink = homeLinks.find(
      (el) => el.closest("a")?.getAttribute("href") === "/"
    );
    expect(homeLink).toBeTruthy();
  });

  it("renders the Equipment link pointing to /equipment", () => {
    const links = screen.getAllByText("Equipment");
    const link = links.find(
      (el) => el.closest("a")?.getAttribute("href") === "/equipment"
    );
    expect(link).toBeTruthy();
  });

  it("renders the Contact link pointing to /contact", () => {
    const links = screen.getAllByText("Contact");
    const link = links.find(
      (el) => el.closest("a")?.getAttribute("href") === "/contact"
    );
    expect(link).toBeTruthy();
  });

  it("renders the search input", () => {
    const searchInputs = screen.getAllByPlaceholderText("Search products...");
    expect(searchInputs.length).toBeGreaterThanOrEqual(1);
  });

  it("renders mobile menu button", () => {
    expect(screen.getByLabelText("Open menu")).toBeInTheDocument();
  });
});
