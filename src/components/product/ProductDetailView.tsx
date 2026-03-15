import type { Product } from "@/data/types";
import ProductGallery from "./ProductGallery";
import ProductTable from "./ProductTable";
import { COMPANY } from "@/lib/constants";

interface ProductDetailViewProps {
  product: Product;
}

export default function ProductDetailView({ product }: ProductDetailViewProps) {
  return (
    <div className="space-y-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {product.images.length > 0 && (
          <div className="lg:w-96 shrink-0">
            <div className="bg-slate-100/50 rounded-3xl p-6 border border-slate-200/60 shadow-inner">
              <ProductGallery images={product.images} alt={product.name} />
            </div>
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className="text-lg text-slate-600 leading-relaxed">
            {product.description}
          </p>

          {product.longDescription && (
            <div className="mt-8 rounded-2xl border border-slate-200/60 bg-white p-8 shadow-sm">
              <p className="text-base leading-relaxed text-slate-600">
                {product.longDescription}
              </p>
            </div>
          )}
        </div>
      </div>

      {product.features && product.features.length > 0 && (
        <div>
          <h2 className="font-[family-name:var(--font-jakarta)] text-2xl font-bold text-slate-900 mb-6">
            Features &amp; Specifications
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {product.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-base text-slate-600 bg-white p-4 rounded-xl border border-slate-100 shadow-sm"
              >
                <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-medical-50 flex items-center justify-center text-medical-600">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <span className="leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {product.variants && product.variants.length > 0 && (
        <div>
          <h2 className="font-[family-name:var(--font-jakarta)] text-xl font-bold text-gray-900 mb-4">
            Products &amp; Pricing
          </h2>
          <ProductTable variants={product.variants} />
        </div>
      )}

      {product.notes && product.notes.length > 0 && (
        <div className="rounded-2xl border border-accent-200/60 bg-accent-50/50 p-6 shadow-sm">
          <h3 className="text-base font-semibold text-accent-900 flex items-center gap-2">
            <svg className="w-5 h-5 text-accent-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            Important Notes
          </h3>
          <ul className="mt-3 space-y-2">
            {product.notes.map((note) => (
              <li key={note} className="text-sm text-accent-800 flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-accent-400 shrink-0" />
                {note}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="rounded-2xl border border-slate-200/60 bg-white p-8 text-center shadow-sm bg-gradient-to-b from-white to-slate-50/50">
        <p className="text-slate-600 text-lg">
          Need help choosing the right product? Our specialists are ready to assist.
        </p>
        <p className="mt-4 text-2xl font-bold text-navy-900">
          {COMPANY.tollFree}
        </p>
        <p className="mt-2 text-base text-slate-500">
          or email{" "}
          <a
            href={`mailto:${COMPANY.email}`}
            className="text-medical-600 hover:text-medical-700 font-medium underline decoration-medical-600/30 hover:decoration-medical-600 transition-all"
          >
            {COMPANY.email}
          </a>
        </p>
      </div>
    </div>
  );
}
