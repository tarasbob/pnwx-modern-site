import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CategoryCard from "../CategoryCard";

describe("CategoryCard", () => {
  it("renders name and description", () => {
    render(
      <CategoryCard
        name="Darkroom Products"
        description="Film processing and darkroom accessories"
        href="/accessories/darkroom"
      />
    );
    expect(screen.getByText("Darkroom Products")).toBeInTheDocument();
    expect(
      screen.getByText("Film processing and darkroom accessories")
    ).toBeInTheDocument();
  });

  it("renders as a link with the correct href", () => {
    render(
      <CategoryCard
        name="X-Ray Grids"
        description="Standard and digital grids"
        href="/parts/grids"
      />
    );
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/parts/grids");
  });

  it("shows item count when provided", () => {
    render(
      <CategoryCard
        name="Aprons"
        description="Lead aprons"
        href="/accessories/lead-products/aprons"
        itemCount={92}
      />
    );
    expect(screen.getByText("92")).toBeInTheDocument();
  });

  it("does not show item count when not provided", () => {
    render(
      <CategoryCard
        name="Cables"
        description="HV cables"
        href="/parts/cables"
      />
    );
    expect(screen.queryByText(/\(\d+\)/)).toBeNull();
  });
});
