import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ProductGrid from "@/components/product/ProductGrid";
import ContactStrip from "@/components/ui/ContactStrip";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { mriCategory } from "@/data/mri";

export const metadata: Metadata = {
  title: "MRI Safe Products",
  description:
    "MRI-compatible products rated safe up to 3-Tesla including chairs, stretchers, IV poles, positioning sponges, wheelchairs, phantoms, safety carpets, metal detectors, and oxygen systems.",
};

export default function MriPage() {
  const breadcrumbs = [{ label: "MRI", href: "/mri" }];

  const items = (mriCategory.subcategories ?? []).map((sub) => ({
    name: sub.name,
    description: sub.description,
    href: `/mri/${sub.slug}`,
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
            MRI Safe Products
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-gray-500">
            Comprehensive selection of MRI-compatible products rated safe for use
            up to 3-Tesla magnetic field environments — furniture, positioning
            aids, phantoms, safety equipment, and patient transport.
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
