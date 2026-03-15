import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Breadcrumbs from "../Breadcrumbs";

describe("Breadcrumbs", () => {
  it("renders Home link always", () => {
    render(<Breadcrumbs items={[]} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "/");
  });

  it("renders a single breadcrumb item as current (non-link)", () => {
    render(
      <Breadcrumbs items={[{ label: "Accessories", href: "/accessories" }]} />
    );
    expect(screen.getByText("Accessories")).toBeInTheDocument();
    expect(screen.getByText("Accessories").closest("a")).toBeNull();
  });

  it("renders intermediate items as links and last item as text", () => {
    render(
      <Breadcrumbs
        items={[
          { label: "Accessories", href: "/accessories" },
          { label: "Darkroom", href: "/accessories/darkroom" },
        ]}
      />
    );
    const accessoriesLink = screen.getByText("Accessories").closest("a");
    expect(accessoriesLink).toHaveAttribute("href", "/accessories");

    const darkroom = screen.getByText("Darkroom");
    expect(darkroom.closest("a")).toBeNull();
  });

  it("has the correct aria-label", () => {
    render(<Breadcrumbs items={[{ label: "Parts", href: "/parts" }]} />);
    expect(screen.getByLabelText("Breadcrumb")).toBeInTheDocument();
  });
});
