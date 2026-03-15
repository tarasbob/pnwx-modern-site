"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { mainNavigation } from "@/data/categories";
import { COMPANY } from "@/lib/constants";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <span className="text-lg font-bold text-navy-900">Menu</span>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="py-2">
          {mainNavigation.map((item) => (
            <div key={item.href}>
              <div className="flex items-center">
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex-1 px-6 py-3 text-sm font-medium text-gray-800 hover:text-medical-600 hover:bg-medical-50 transition-colors"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                    className="px-4 py-3 text-gray-400 hover:text-gray-600"
                    aria-label={`Expand ${item.label}`}
                  >
                    <svg
                      className={`w-4 h-4 transition-transform ${expanded === item.label ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                )}
              </div>
              {item.children && expanded === item.label && (
                <div className="bg-gray-50 py-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={onClose}
                      className="block px-10 py-2.5 text-sm text-gray-600 hover:text-medical-600 hover:bg-medical-50 transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 p-6 space-y-3">
          <a
            href={`tel:${COMPANY.tollFree}`}
            className="flex items-center gap-3 text-sm text-gray-600 hover:text-medical-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            Toll-Free: {COMPANY.tollFree}
          </a>
          <a
            href={`mailto:${COMPANY.email}`}
            className="flex items-center gap-3 text-sm text-gray-600 hover:text-medical-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            {COMPANY.email}
          </a>
          <Link
            href="/order"
            onClick={onClose}
            className="block w-full text-center px-4 py-3 text-sm font-semibold text-white bg-medical-500 rounded-lg hover:bg-medical-600 transition-colors"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  );
}
