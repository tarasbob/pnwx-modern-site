"use client";

import SectionHeading from "@/components/SectionHeading";
import ProductCategoryCard from "@/components/ProductCategoryCard";
import { SUPPLIES_CATEGORIES } from "@/lib/constants";

export default function SuppliesContent() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy to-navy-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-2">
            Product Catalog
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Supplies
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Day-to-day consumables and supplies for radiology departments, from sanitizers and gels
            to cleaning systems and storage media.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Supplies Categories"
            description="Consumables and disposables to keep your department running smoothly."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUPPLIES_CATEGORIES.map((cat, i) => (
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
