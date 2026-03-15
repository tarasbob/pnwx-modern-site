"use client";

import { Search, Shield, Truck, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-navy via-navy-light to-navy-dark overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="inline-block text-teal text-sm font-semibold tracking-wider uppercase mb-4 px-4 py-1.5 bg-teal/10 rounded-full">
              Trusted Since 1997
            </p>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Your Complete Source for{" "}
            <span className="text-teal">X-Ray &amp; Radiology</span>{" "}
            Equipment
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Equipment, accessories, supplies, and parts for medical, veterinary, and podiatric imaging — shipped from Gresham, Oregon to customers nationwide.
          </motion.p>

          {/* Search bar */}
          <motion.div
            className="max-w-xl mx-auto mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center bg-white rounded-xl shadow-2xl shadow-black/20 overflow-hidden">
              <Search className="w-5 h-5 text-gray-400 ml-5 shrink-0" />
              <input
                type="text"
                placeholder="Search equipment, supplies, parts..."
                className="flex-1 px-4 py-4 text-gray-700 outline-none text-base"
                aria-label="Search products"
              />
              <button className="bg-teal hover:bg-teal-dark text-white px-6 py-4 font-medium text-sm transition-colors shrink-0">
                Search
              </button>
            </div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center gap-2.5 text-gray-300">
              <Shield className="w-5 h-5 text-teal" />
              <span className="text-sm font-medium">Trusted Nationwide</span>
            </div>
            <div className="flex items-center gap-2.5 text-gray-300">
              <Truck className="w-5 h-5 text-teal" />
              <span className="text-sm font-medium">Fast Shipping</span>
            </div>
            <div className="flex items-center gap-2.5 text-gray-300">
              <Award className="w-5 h-5 text-teal" />
              <span className="text-sm font-medium">Quality Guaranteed</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
