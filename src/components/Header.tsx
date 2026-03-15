"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Menu, X, Search } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Top bar */}
      <div className="bg-navy text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10">
          <span className="hidden sm:inline">{COMPANY.note}</span>
          <span className="sm:hidden text-xs">{COMPANY.tagline}</span>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY.tollFree}`}
              className="flex items-center gap-1.5 hover:text-teal-light transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Toll Free: </span>
              <span>{COMPANY.tollFree}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-navy rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg md:text-xl">PNW</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-navy font-bold text-lg leading-tight">
                Pacific Northwest X-Ray
              </p>
              <p className="text-gray-500 text-xs tracking-wide">
                {COMPANY.tagline}
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-navy hover:bg-gray-50 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Search + mobile toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 w-56 lg:w-64">
              <Search className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent text-sm text-gray-700 outline-none w-full placeholder:text-gray-400"
                aria-label="Search products"
              />
            </div>
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-navy transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden border-t border-gray-200 overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 py-3 space-y-1" aria-label="Mobile navigation">
          {/* Mobile search */}
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2.5 mb-2 md:hidden">
            <Search className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent text-sm text-gray-700 outline-none w-full placeholder:text-gray-400"
              aria-label="Search products"
            />
          </div>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-navy hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
