import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ProductGrid from "@/components/product/ProductGrid";
import ContactStrip from "@/components/ui/ContactStrip";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { ultrasoundCategory } from "@/data/ultrasound";

export const metadata: Metadata = {
  title: "Ultrasound Products",
  description:
    "Ultrasound products including gels, gel warmers, test and training phantoms, Biodex imaging tables, probe covers, and sanitizing wipes for ultrasound departments.",
};

export default function UltrasoundPage() {
  const breadcrumbs = [{ label: "Ultrasound", href: "/ultrasound" }];

  const items = (ultrasoundCategory.subcategories ?? []).map((sub) => ({
    name: sub.name,
    description: sub.description,
    href: `/ultrasound/${sub.slug}`,
    itemCount: sub.itemCount,
    image: sub.image,
  }));

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <div className="pb-16">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Ultrasound Products
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-gray-500">
            Complete ultrasound product line — gels, gel warmers, test and
            training phantoms, Biodex imaging tables, probe covers, and
            sanitizing wipes for every ultrasound department.
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
