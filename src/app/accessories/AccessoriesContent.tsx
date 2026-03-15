"use client";

import SectionHeading from "@/components/SectionHeading";
import ProductCategoryCard from "@/components/ProductCategoryCard";
import { ACCESSORIES_CATEGORIES } from "@/lib/constants";

export default function AccessoriesContent() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy to-navy-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-2">
            Product Catalog
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Accessories
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Radiation protection, patient positioning, MRI accessories, QC test phantoms, and
            everything else your radiology department needs.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Accessories Categories"
            description="Explore our 12 accessory categories covering every aspect of radiology practice."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACCESSORIES_CATEGORIES.map((cat, i) => (
              <ProductCategoryCard
                key={cat.title}
                title={cat.title}
                description={cat.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
