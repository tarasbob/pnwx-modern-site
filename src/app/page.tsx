"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Headset,
  PackageCheck,
  ArrowRight,
  Phone,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import { POPULAR_PRODUCTS, COMPANY } from "@/lib/constants";

const WHY_US = [
  {
    icon: ShieldCheck,
    title: "Trusted Since 1997",
    description:
      "Nearly three decades of experience supplying X-Ray and radiology professionals with the equipment they need.",
  },
  {
    icon: PackageCheck,
    title: "Comprehensive Catalog",
    description:
      "Thousands of products across equipment, accessories, supplies, and parts — updated daily.",
  },
  {
    icon: Headset,
    title: "Expert Support",
    description:
      "Knowledgeable staff available Monday–Friday to help you find exactly what you need.",
  },
  {
    icon: Phone,
    title: "Easy Ordering",
    description:
      "Order by phone, fax, or email. We accept purchase orders, credit cards, and cash payments.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Popular Products"
            title="Featured Equipment & Supplies"
            description="Browse our most popular products trusted by radiology professionals across the country."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {POPULAR_PRODUCTS.map((product, i) => (
              <motion.article
                key={product.name}
                className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-teal/40 hover:shadow-lg hover:shadow-teal/5 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
              >
                <span className="inline-block text-xs font-medium text-teal bg-teal/10 px-2.5 py-0.5 rounded-full mb-3">
                  {product.category}
                </span>
                <h3 className="text-base font-semibold text-navy mb-2 group-hover:text-teal transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* About / Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Why Choose Us"
            title="Your Trusted Radiology Partner"
            description="Pacific Northwest X-Ray Inc. has been serving medical imaging professionals with quality equipment and expert service since 1997."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US.map((item, i) => (
              <motion.div
                key={item.title}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-teal" />
                </div>
                <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-6">
                About Pacific Northwest X-Ray
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Pacific Northwest X-Ray Inc. is a medical equipment supplier specializing in X-Ray
                and radiology equipment, supplies, parts and accessories. Operating from Gresham,
                Oregon, we serve customers throughout the United States with a comprehensive online
                catalog updated daily.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Purchase Orders are accepted upon approval of credit with a minimum $500 opening
                order for new charge accounts. All other orders (Cash, Credit Card, etc.) are
                subject only to a $30 product minimum order.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
                <span>
                  <strong className="text-navy">Phone:</strong> {COMPANY.phone}
                </span>
                <span>
                  <strong className="text-navy">Toll Free:</strong> {COMPANY.tollFree}
                </span>
                <span>
                  <strong className="text-navy">Email:</strong> {COMPANY.email}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Order or Have Questions?
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Our knowledgeable team is here to help you find the right equipment. Contact us today
              for pricing, availability, and expert guidance.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${COMPANY.tollFree}`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors border border-white/20"
              >
                <Phone className="w-4 h-4" />
                Call {COMPANY.tollFree}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
