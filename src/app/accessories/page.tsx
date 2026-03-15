import type { Metadata } from "next";
import AccessoriesContent from "./AccessoriesContent";

export const metadata: Metadata = {
  title: "Radiology Accessories",
  description:
    "Browse our extensive collection of radiology accessories including radiation protection, MRI accessories, patient positioning, QC phantoms, and more.",
  keywords: [
    "radiology accessories",
    "lead aprons",
    "radiation protection",
    "MRI accessories",
    "patient positioning",
    "QC phantoms",
    "leaded eyewear",
    "thyroid collars",
  ],
  openGraph: {
    title: "Radiology Accessories | Pacific Northwest X-Ray Inc.",
    description:
      "Comprehensive range of radiology accessories for radiation protection, patient care, and quality control.",
  },
};

export default function AccessoriesPage() {
  return <AccessoriesContent />;
}
