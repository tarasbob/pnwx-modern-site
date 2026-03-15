import type { Metadata } from "next";
import PartsContent from "./PartsContent";

export const metadata: Metadata = {
  title: "X-Ray Parts & Replacement Components",
  description:
    "Replacement parts for X-Ray equipment including grids, collimators, projection lamps, and high voltage cables.",
  keywords: [
    "X-Ray parts",
    "X-Ray grids",
    "collimators",
    "high voltage cables",
    "projection lamps",
    "X-Ray replacement parts",
  ],
  openGraph: {
    title: "X-Ray Parts & Replacement Components | Pacific Northwest X-Ray Inc.",
    description:
      "Genuine replacement parts for X-Ray equipment — grids, collimators, lamps, and cables.",
  },
};

export default function PartsPage() {
  return <PartsContent />;
}
