import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ProductGrid from "@/components/product/ProductGrid";
import ContactStrip from "@/components/ui/ContactStrip";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { suppliesCategory } from "@/data/supplies";

export const metadata: Metadata = {
  title: "Radiology Supplies",
  description:
    "Consumable radiology supplies including sanitizers, CT gantry covers, CR plate cleaners, CD/DVD media, exam gowns, labels, envelopes, MRI supplies, decontamination products, and ultrasound gel.",
};

export default function SuppliesPage() {
  const breadcrumbs = [{ label: "Supplies", href: "/supplies" }];

  const items = (suppliesCategory.subcategories ?? []).map((sub) => ({
    name: sub.name,
    description: sub.description,
    href: `/supplies/${sub.slug}`,
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
            Radiology Supplies
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-gray-500">
            Consumable supplies for radiology departments — sanitizers, CT gantry
            covers, CR plate cleaners, exam gowns, labels, MRI supplies,
            decontamination products, and ultrasound accessories.
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
