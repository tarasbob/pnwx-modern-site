import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ProductGrid from "@/components/product/ProductGrid";
import ContactStrip from "@/components/ui/ContactStrip";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { veterinaryCategory } from "@/data/veterinary";

export const metadata: Metadata = {
  title: "Veterinary Radiology Products",
  description:
    "Veterinary radiology products including portable X-ray generators, dental film, equine cassette holders, lead aprons, positioning devices, signs, and viewboxes for small and large animal practices.",
};

export default function VeterinaryPage() {
  const breadcrumbs = [{ label: "Veterinary", href: "/veterinary" }];

  const items = (veterinaryCategory.subcategories ?? []).map((sub) => ({
    name: sub.name,
    description: sub.description,
    href: `/veterinary/${sub.slug}`,
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
            Veterinary Radiology Products
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-gray-500">
            Radiology products for veterinary practices — portable X-ray
            generators, dental film, equine cassette holders, lead aprons,
            positioning devices, and viewboxes for small and large animal
            facilities.
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
