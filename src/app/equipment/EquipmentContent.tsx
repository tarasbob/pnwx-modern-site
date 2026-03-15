"use client";

import SectionHeading from "@/components/SectionHeading";
import ProductCategoryCard from "@/components/ProductCategoryCard";
import { EQUIPMENT_CATEGORIES } from "@/lib/constants";

export default function EquipmentContent() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-br from-navy to-navy-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-2">
            Product Catalog
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Equipment
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            From portable X-Ray systems to complete darkroom setups — browse our full range of
            radiology equipment from leading manufacturers.
          </p>
        </div>
      </section>

      {/* Categories grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Equipment Categories"
            description="Select a category to explore our equipment offerings."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EQUIPMENT_CATEGORIES.map((cat, i) => (
              <ProductCategoryCard
                key={cat.title}
                title={cat.title}
                description={cat.description}
                items={cat.items}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
