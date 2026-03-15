"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface ProductCategoryCardProps {
  title: string;
  description: string;
  items?: readonly string[];
  index?: number;
}

export default function ProductCategoryCard({
  title,
  description,
  items,
  index = 0,
}: ProductCategoryCardProps) {
  return (
    <motion.article
      className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-teal/40 hover:shadow-lg hover:shadow-teal/5 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-navy group-hover:text-teal transition-colors">
          {title}
        </h3>
        <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-teal group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" />
      </div>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">{description}</p>
      {items && items.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {items.map((item) => (
            <span
              key={item}
              className="inline-block text-xs px-2.5 py-1 bg-gray-50 text-gray-600 rounded-md border border-gray-100"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </motion.article>
  );
}
