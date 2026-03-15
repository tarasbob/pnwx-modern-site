import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

// Mock framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      const { initial, animate, whileInView, viewport, transition, ...rest } = props;
      void initial; void animate; void whileInView; void viewport; void transition;
      return <div {...rest}>{children}</div>;
    },
    article: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      const { initial, animate, whileInView, viewport, transition, ...rest } = props;
      void initial; void animate; void whileInView; void viewport; void transition;
      return <article {...rest}>{children}</article>;
    },
    p: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      const { initial, animate, whileInView, viewport, transition, ...rest } = props;
      void initial; void animate; void whileInView; void viewport; void transition;
      return <p {...rest}>{children}</p>;
    },
    h1: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      const { initial, animate, whileInView, viewport, transition, ...rest } = props;
      void initial; void animate; void whileInView; void viewport; void transition;
      return <h1 {...rest}>{children}</h1>;
    },
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => children,
}));

describe("Homepage", () => {
  beforeEach(() => {
    render(<HomePage />);
  });

  it("renders the hero section with company tagline", () => {
    const matches = screen.getAllByText("Trusted Since 1997");
    expect(matches.length).toBeGreaterThanOrEqual(1);
  });

  it("renders the hero headline", () => {
    expect(screen.getByText(/Your Complete Source for/i)).toBeInTheDocument();
  });

  it("renders the search bar", () => {
    const searchInputs = screen.getAllByPlaceholderText(/search/i);
    expect(searchInputs.length).toBeGreaterThan(0);
  });

  it("renders featured products section", () => {
    expect(screen.getByText("Featured Equipment & Supplies")).toBeInTheDocument();
  });

  it("renders all 15 popular products", () => {
    expect(screen.getByText("Lightning Fast Lead Apparel")).toBeInTheDocument();
    expect(screen.getByText("Revolution Lead Aprons")).toBeInTheDocument();
    expect(screen.getByText("Surgical Radiation Reducing Gloves")).toBeInTheDocument();
    expect(screen.getByText("X-Ray Grids")).toBeInTheDocument();
    expect(screen.getByText("Silver Recovery Systems")).toBeInTheDocument();
    expect(screen.getByText("Lead Curtains")).toBeInTheDocument();
    expect(screen.getByText("Mobile Lead Barriers")).toBeInTheDocument();
    expect(screen.getByText("Lead Glass Windows")).toBeInTheDocument();
  });

  it("renders why choose us section", () => {
    expect(screen.getByText("Your Trusted Radiology Partner")).toBeInTheDocument();
    expect(screen.getByText("Comprehensive Catalog")).toBeInTheDocument();
    expect(screen.getByText("Expert Support")).toBeInTheDocument();
  });

  it("renders company overview section", () => {
    expect(screen.getByText("About Pacific Northwest X-Ray")).toBeInTheDocument();
  });

  it("renders contact CTA", () => {
    expect(screen.getByText("Ready to Order or Have Questions?")).toBeInTheDocument();
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
  });

  it("displays the company phone number", () => {
    expect(screen.getByText(/503-667-3000/)).toBeInTheDocument();
  });
});
