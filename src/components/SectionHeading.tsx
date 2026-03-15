"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      {label && (
        <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-2">{label}</p>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-4">{title}</h2>
      {description && (
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">{description}</p>
      )}
    </motion.div>
  );
}
