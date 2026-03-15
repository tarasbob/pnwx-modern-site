"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Printer } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { COMPANY } from "@/lib/constants";

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: "Phone",
    lines: [COMPANY.phone, `Toll Free: ${COMPANY.tollFree}`],
  },
  { icon: Printer, label: "Fax", lines: [COMPANY.fax] },
  { icon: Mail, label: "Email", lines: [COMPANY.email] },
  { icon: MapPin, label: "Address", lines: [`${COMPANY.address.street}, ${COMPANY.address.city}, ${COMPANY.address.state} ${COMPANY.address.zip}`] },
  { icon: Clock, label: "Business Hours", lines: [COMPANY.hours] },
];

export default function ContactContent() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy to-navy-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-2">
            Get In Touch
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Have questions about our products or need a quote? Our knowledgeable team is here to help.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h2>
              <ContactForm />
            </motion.div>

            {/* Contact info sidebar */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-navy mb-6">Contact Information</h2>
              <div className="space-y-6">
                {CONTACT_ITEMS.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">{item.label}</p>
                      {item.lines.map((line) => (
                        <p key={line} className="text-sm text-gray-600">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-8 rounded-xl overflow-hidden border border-gray-200">
                <div className="bg-gray-100 h-56 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500 font-medium">Gresham, Oregon</p>
                    <p className="text-xs text-gray-400">Map placeholder</p>
                  </div>
                </div>
              </div>

              {/* Order info */}
              <div className="mt-8 bg-navy/5 rounded-xl p-5">
                <h3 className="text-sm font-semibold text-navy mb-2">Order Information</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Purchase Orders accepted upon credit approval. Minimum $500 opening order for new
                  charge accounts. $30 product minimum for cash, credit card, and other orders.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
