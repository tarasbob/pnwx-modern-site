import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-200/60 bg-white">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-medical-500 via-navy-500 to-accent-500" />
      <div className="bg-slate-50 text-slate-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-20">
            <div>
              <h3 className="font-[family-name:var(--font-jakarta)] text-slate-900 text-2xl font-extrabold mb-5 tracking-tight">
                PNWX<span className="text-medical-600">.</span>
              </h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                Pacific Northwest X-Ray Inc. — your trusted source for X-ray and radiology
                equipment, supplies, parts, and accessories since {COMPANY.foundedYear}.
              </p>
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full text-xs font-medium text-slate-600 shadow-sm">
                <span className="w-2 h-2 bg-medical-500 rounded-full animate-pulse" />
                Serving since {COMPANY.foundedYear}
              </div>
            </div>

            <div>
              <h4 className="text-slate-900 text-sm font-bold uppercase tracking-wider mb-6">
                Products
              </h4>
              <ul className="space-y-3.5 text-sm">
                {[
                  { href: "/accessories", label: "Accessories" },
                  { href: "/equipment", label: "Equipment" },
                  { href: "/parts", label: "Parts" },
                  { href: "/mri", label: "MRI Safe Products" },
                  { href: "/veterinary", label: "Veterinary" },
                  { href: "/ultrasound", label: "Ultrasound" },
                  { href: "/supplies", label: "Supplies" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="group relative inline-flex text-slate-500 hover:text-medical-600 transition-colors">
                      {label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-medical-600 transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-slate-900 text-sm font-bold uppercase tracking-wider mb-6">
                Company
              </h4>
              <ul className="space-y-3.5 text-sm">
                <li>
                  <Link href="/order" className="group relative inline-flex text-slate-500 hover:text-medical-600 transition-colors">
                    How to Order
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-medical-600 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
                <li>
                  <Link href="/order#payment" className="group relative inline-flex text-slate-500 hover:text-medical-600 transition-colors">
                    Payment Methods
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-medical-600 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
                <li>
                  <Link href="/order#warranties" className="group relative inline-flex text-slate-500 hover:text-medical-600 transition-colors">
                    Warranties
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-medical-600 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
                <li>
                  <Link href="/order#returns" className="group relative inline-flex text-slate-500 hover:text-medical-600 transition-colors">
                    Returns & Cancellations
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-medical-600 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
                <li>
                  <Link href="/pedigo" className="group relative inline-flex text-slate-500 hover:text-medical-600 transition-colors">
                    Pedigo Products
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-medical-600 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-900 text-sm font-bold uppercase tracking-wider mb-6">
                Contact Us
              </h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href={`tel:${COMPANY.tollFree}`} className="inline-flex text-medical-600 font-semibold hover:text-medical-700 transition-colors text-base">
                    Toll-Free: {COMPANY.tollFree}
                  </a>
                </li>
                <li>
                  <a href={`tel:${COMPANY.phone}`} className="inline-flex text-slate-500 hover:text-medical-600 transition-colors">
                    Local: {COMPANY.phone}
                  </a>
                </li>
                <li>
                  <span className="text-slate-500">Fax: {COMPANY.fax}</span>
                </li>
                <li>
                  <a href={`mailto:${COMPANY.email}`} className="inline-flex text-slate-500 hover:text-medical-600 transition-colors underline decoration-slate-300 hover:decoration-medical-600">
                    {COMPANY.email}
                  </a>
                </li>
                <li className="pt-2 text-slate-500 leading-relaxed">
                  {COMPANY.address.street}<br />
                  {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}<br />
                  {COMPANY.address.country}
                </li>
                <li className="text-slate-500">
                  {COMPANY.hours}
                </li>
                <li className="pt-2">
                  <img src="/images/Cards.jpg" alt="Accepted payment methods" className="h-8 rounded shadow-sm border border-slate-200" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-t border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 font-medium">
            &copy;{COMPANY.foundedYear}&ndash;{currentYear} {COMPANY.name} &mdash; Sales &amp; Marketing Division &mdash; All Rights Reserved
          </p>
          <p className="text-xs text-slate-400 font-medium">
            This website is our catalog. No printed catalog is available.
          </p>
        </div>
      </div>
    </footer>
  );
}
