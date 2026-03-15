"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { mainNavigation } from "@/data/categories";
import { COMPANY } from "@/lib/constants";
import MobileNav from "./MobileNav";
import MegaMenu from "./MegaMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="bg-navy-900 text-white text-sm border-l-4 border-accent-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10">
          <div className="flex items-center gap-4">
            <a href={`tel:${COMPANY.tollFree}`} className="hover:text-accent-300 transition-colors">
              <span className="hidden sm:inline">Toll-Free: </span>{COMPANY.tollFree}
            </a>
            <span className="hidden md:inline text-navy-400">|</span>
            <a href={`tel:${COMPANY.phone}`} className="hidden md:inline hover:text-accent-300 transition-colors">
              {COMPANY.phone}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href={`mailto:${COMPANY.email}`} className="hover:text-accent-300 transition-colors">
              {COMPANY.email}
            </a>
            <span className="hidden sm:inline text-navy-400">|</span>
            <span className="hidden sm:inline text-navy-300">{COMPANY.hours}</span>
          </div>
        </div>
      </div>

      <header
        className={`sticky z-50 transition-all duration-300 ${
          scrolled
            ? "top-4 mx-4 sm:mx-6 lg:mx-8 bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 rounded-2xl"
            : "top-0 bg-white shadow-sm"
        }`}
      >
        <nav className={`mx-auto max-w-7xl ${scrolled ? "px-4 sm:px-6" : "px-4 sm:px-6 lg:px-8"}`}>
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-jakarta)] text-xl font-extrabold tracking-tight text-navy-900">
                  PNWX<span className="text-accent-500">.</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gray-500 leading-none">
                  Pacific NW X-Ray
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {mainNavigation.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      activeMenu === item.label
                        ? "text-medical-600 bg-medical-50"
                        : "text-gray-700 hover:text-medical-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && activeMenu === item.label && (
                    <MegaMenu items={item.children} />
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/order"
                className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-accent-500 rounded-lg hover:bg-accent-600 transition-colors shadow-sm"
              >
                Contact Sales
              </Link>
              <button
                type="button"
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
