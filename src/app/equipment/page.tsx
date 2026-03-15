import type { Metadata } from "next";
import EquipmentContent from "./EquipmentContent";

export const metadata: Metadata = {
  title: "X-Ray & Radiology Equipment",
  description:
    "Browse our comprehensive selection of X-Ray and radiology equipment including darkroom equipment, portable X-Ray systems, exam room equipment, test equipment, and more.",
  keywords: [
    "X-Ray equipment",
    "portable X-Ray",
    "darkroom equipment",
    "exam room equipment",
    "radiology equipment",
    "medical imaging equipment",
  ],
  openGraph: {
    title: "X-Ray & Radiology Equipment | Pacific Northwest X-Ray Inc.",
    description:
      "Complete range of X-Ray and radiology equipment from trusted manufacturers.",
  },
};

export default function EquipmentPage() {
  return <EquipmentContent />;
}
