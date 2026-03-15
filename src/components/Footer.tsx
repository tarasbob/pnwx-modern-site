import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-teal rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">PNW</span>
              </div>
              <div>
                <p className="text-white font-bold leading-tight">Pacific Northwest X-Ray</p>
                <p className="text-teal text-xs">{COMPANY.tagline}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Your trusted source for X-Ray and radiology equipment, supplies, parts, and accessories. Serving customers throughout the United States.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-teal-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 text-teal shrink-0" />
                <div className="text-sm">
                  <p>
                    <a href={`tel:${COMPANY.phone}`} className="hover:text-teal-light transition-colors">
                      {COMPANY.phone}
                    </a>
                  </p>
                  <p>
                    Toll Free:{" "}
                    <a href={`tel:${COMPANY.tollFree}`} className="hover:text-teal-light transition-colors">
                      {COMPANY.tollFree} ({COMPANY.tollFreeFormatted})
                    </a>
                  </p>
                  <p>Fax: {COMPANY.fax}</p>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-sm hover:text-teal-light transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-teal shrink-0" />
                <span className="text-sm">{COMPANY.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-teal shrink-0" />
                <span className="text-sm">{COMPANY.hours}</span>
              </li>
            </ul>
          </div>

          {/* Additional info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Information
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
              <p>{COMPANY.note}</p>
              <p>{COMPANY.updatedDaily}</p>
              <p className="text-xs">
                Purchase orders accepted upon credit approval. $500 minimum opening order for new charge accounts. $30 product minimum for all other orders.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>{COMPANY.copyright}</p>
          <p>All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
