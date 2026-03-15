import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ProductTable from "../ProductTable";

describe("ProductTable", () => {
  it("renders nothing for empty variants", () => {
    const { container } = render(<ProductTable variants={[]} />);
    expect(container.innerHTML).toBe("");
  });

  it("renders a table with stock numbers and prices", () => {
    render(
      <ProductTable
        variants={[
          { stockNumber: "R221", description: "Manual Collimator", price: "$2,300.00" },
          { stockNumber: "BLX", description: "50W Lamp", price: "$9.00" },
        ]}
      />
    );
    expect(screen.getByText("R221")).toBeInTheDocument();
    expect(screen.getByText("BLX")).toBeInTheDocument();
    expect(screen.getByText("$2,300.00")).toBeInTheDocument();
    expect(screen.getByText("$9.00")).toBeInTheDocument();
  });

  it("renders spec columns when variants have specs", () => {
    render(
      <ProductTable
        variants={[
          {
            stockNumber: "11432",
            specs: { size: '9"x11"', ratio: "8:1" },
            price: "$Call",
          },
        ]}
      />
    );
    expect(screen.getByText("size")).toBeInTheDocument();
    expect(screen.getByText("ratio")).toBeInTheDocument();
    expect(screen.getByText('9"x11"')).toBeInTheDocument();
    expect(screen.getByText("8:1")).toBeInTheDocument();
  });

  it("renders optional title", () => {
    render(
      <ProductTable
        title="Standard X-Ray Grids"
        variants={[{ stockNumber: "11432", price: "$Call" }]}
      />
    );
    expect(screen.getByText("Standard X-Ray Grids")).toBeInTheDocument();
  });
});
