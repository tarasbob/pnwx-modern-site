"use client";

import SectionHeading from "@/components/SectionHeading";
import ProductCategoryCard from "@/components/ProductCategoryCard";
import { PARTS_CATEGORIES } from "@/lib/constants";

export default function PartsContent() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy to-navy-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-2">
            Product Catalog
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Parts
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Replacement parts and components for X-Ray systems, including grids, collimators,
            lamps, and high voltage cables.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Parts Categories"
            description="Quality replacement parts to keep your imaging equipment operating at peak performance."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PARTS_CATEGORIES.map((cat, i) => (
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
