import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ProductGrid from "@/components/product/ProductGrid";
import ContactStrip from "@/components/ui/ContactStrip";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { partsCategories } from "@/data/parts";

export const metadata: Metadata = {
  title: "X-Ray Parts",
  description:
    "X-ray replacement parts including grids in standard and ultra-high line densities, manual collimators, collimator projection lamps, and high voltage cables for X-ray systems.",
};

export default function PartsPage() {
  const breadcrumbs = [{ label: "Parts", href: "/parts" }];

  const items = partsCategories.map((cat) => ({
    name: cat.name,
    description: cat.description,
    href: `/parts/${cat.slug}`,
    itemCount: cat.itemCount,
    image: cat.image,
  }));

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <div className="pb-16">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            X-Ray Parts
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-gray-500">
            Replacement parts for X-ray systems — grids, collimators, projection
            lamps, and high voltage cables to keep your equipment running at peak
            performance.
          </p>
          <div className="mt-10">
            <ProductGrid items={items} />
          </div>
        </div>
      </div>
      <ContactStrip />
    </>
  );
}
