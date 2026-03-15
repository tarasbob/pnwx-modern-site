import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PriceDisplay from "../PriceDisplay";

describe("PriceDisplay", () => {
  it('renders "Call" for $Call prices', () => {
    render(<PriceDisplay price="$Call" />);
    expect(screen.getByText("Call")).toBeInTheDocument();
  });

  it('renders "Call" for case-insensitive call prices', () => {
    render(<PriceDisplay price="call for price" />);
    expect(screen.getByText("Call")).toBeInTheDocument();
  });

  it("renders actual dollar prices as-is", () => {
    render(<PriceDisplay price="$595.00" />);
    expect(screen.getByText("$595.00")).toBeInTheDocument();
  });

  it("renders numeric prices with styling", () => {
    render(<PriceDisplay price="$2,300.00" />);
    const el = screen.getByText("$2,300.00");
    expect(el).toBeInTheDocument();
    expect(el).toHaveClass("font-semibold");
  });
});
