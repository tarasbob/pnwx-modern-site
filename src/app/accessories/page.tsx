import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ProductGrid from "@/components/product/ProductGrid";
import ContactStrip from "@/components/ui/ContactStrip";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { accessoriesCategories } from "@/data/accessories";

export const metadata: Metadata = {
  title: "X-Ray Accessories",
  description:
    "Browse our complete line of X-ray and radiology accessories including darkroom products, exam room solutions, film markers, cassettes, patient positioning aids, phantoms, seating, technologist aids, and radiation protection products.",
};

export default function AccessoriesPage() {
  const breadcrumbs = [{ label: "Accessories", href: "/accessories" }];

  const items = accessoriesCategories.map((cat) => ({
    name: cat.name,
    description: cat.description,
    href: `/accessories/${cat.slug}`,
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
            X-Ray Accessories
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-gray-500">
            Browse our complete line of X-ray and radiology accessories for every
            department — from darkroom products and film markers to radiation
            protection, patient positioning, and test phantoms.
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
