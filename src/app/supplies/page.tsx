import type { Metadata } from "next";
import SuppliesContent from "./SuppliesContent";

export const metadata: Metadata = {
  title: "Radiology & Medical Supplies",
  description:
    "Medical supplies for radiology departments including hand sanitizer, ultrasound gel, exam gowns, MRI earplugs, CR plate cleaners, and more.",
  keywords: [
    "medical supplies",
    "radiology supplies",
    "ultrasound gel",
    "exam gowns",
    "MRI earplugs",
    "hand sanitizer",
    "screen cleaners",
  ],
  openGraph: {
    title: "Radiology & Medical Supplies | Pacific Northwest X-Ray Inc.",
    description:
      "Essential medical and radiology supplies for daily clinical operations.",
  },
};

export default function SuppliesPage() {
  return <SuppliesContent />;
}
