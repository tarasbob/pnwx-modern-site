import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ProductGrid from "../ProductGrid";

describe("ProductGrid", () => {
  it("renders all items as cards", () => {
    const items = [
      { name: "Darkroom", description: "Darkroom stuff", href: "/accessories/darkroom" },
      { name: "Exam Room", description: "Exam room items", href: "/accessories/exam-room" },
      { name: "Markers", description: "Film markers", href: "/accessories/markers" },
    ];
    render(<ProductGrid items={items} />);
    expect(screen.getByText("Darkroom")).toBeInTheDocument();
    expect(screen.getByText("Exam Room")).toBeInTheDocument();
    expect(screen.getByText("Markers")).toBeInTheDocument();
    expect(screen.getAllByRole("link")).toHaveLength(3);
  });

  it("renders empty grid for empty items", () => {
    const { container } = render(<ProductGrid items={[]} />);
    expect(container.querySelectorAll("a")).toHaveLength(0);
  });
});
