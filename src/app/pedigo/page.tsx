import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ProductGrid from "@/components/product/ProductGrid";
import ContactStrip from "@/components/ui/ContactStrip";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { pedigoCategory } from "@/data/pedigo";

export const metadata: Metadata = {
  title: "Pedigo Medical Products",
  description:
    "Complete line of Pedigo/Midmark medical products including bassinets, cabinets, carts, IV stands, linen hampers, Mayo stands, stretchers, stools, and utility tables for healthcare facilities.",
};

export default function PedigoPage() {
  const breadcrumbs = [{ label: "Pedigo", href: "/pedigo" }];

  const items = (pedigoCategory.subcategories ?? []).map((sub) => ({
    name: sub.name,
    description: sub.description,
    href: `/pedigo/${sub.slug}`,
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
            Pedigo Medical Products
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-gray-500">
            Complete line of Pedigo/Midmark medical products — bassinets,
            anesthesia and warming cabinets, case carts, IV stands, linen
            hampers, Mayo stands, stretchers, stools, and utility tables.
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
