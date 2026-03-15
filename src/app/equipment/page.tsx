import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ProductGrid from "@/components/product/ProductGrid";
import ContactStrip from "@/components/ui/ContactStrip";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { equipmentCategories } from "@/data/equipment";

export const metadata: Metadata = {
  title: "X-Ray Equipment",
  description:
    "Shop X-ray equipment including darkroom processors, digital portable systems, exam room equipment, film viewing illuminators, medical patient care devices, portable X-ray generators, and radiation test instruments.",
};

export default function EquipmentPage() {
  const breadcrumbs = [{ label: "Equipment", href: "/equipment" }];

  const items = equipmentCategories.map((cat) => ({
    name: cat.name,
    description: cat.description,
    href: `/equipment/${cat.slug}`,
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
            X-Ray Equipment
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-gray-500">
            X-ray systems, film processors, viewboxes, portable generators,
            digital imaging packages, and radiation test instruments for medical,
            veterinary, and industrial applications.
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
