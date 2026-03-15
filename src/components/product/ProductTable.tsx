import type { ProductVariant } from "@/data/types";
import PriceDisplay from "./PriceDisplay";

interface ProductTableProps {
  variants: ProductVariant[];
  title?: string;
}

export default function ProductTable({ variants, title }: ProductTableProps) {
  if (variants.length === 0) return null;

  const allSpecs = new Set<string>();
  variants.forEach((v) => {
    if (v.specs) Object.keys(v.specs).forEach((k) => allSpecs.add(k));
  });
  const specKeys = Array.from(allSpecs);

  return (
    <div>
      {title && (
        <h3 className="text-xl font-bold text-slate-900 mb-4 font-[family-name:var(--font-jakarta)]">{title}</h3>
      )}
      <div className="rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="sticky top-0 z-10 bg-slate-50/90 backdrop-blur-md border-b border-slate-200/80">
              <tr>
                <th className="py-4 px-4 font-semibold text-slate-700 whitespace-nowrap">
                  Stock #
                </th>
                {variants.some((v) => v.description) && (
                  <th className="py-4 px-4 font-semibold text-slate-700">
                    Description
                  </th>
                )}
                {specKeys.map((key) => (
                  <th
                    key={key}
                    className="py-4 px-4 font-semibold text-slate-700 capitalize whitespace-nowrap"
                  >
                    {key}
                  </th>
                ))}
                <th className="text-right py-4 px-4 font-semibold text-slate-700 whitespace-nowrap">
                  Price
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {variants.map((variant, i) => (
                <tr
                  key={variant.stockNumber + i}
                  className="group even:bg-slate-50/50 hover:bg-medical-50/50 transition-colors duration-200"
                >
                  <td className="py-3 px-4 font-[family-name:var(--font-jetbrains)] text-xs font-medium text-slate-700 group-hover:text-medical-700 transition-colors">
                    {variant.stockNumber}
                  </td>
                  {variants.some((v) => v.description) && (
                    <td className="py-3 px-4 text-slate-600 leading-relaxed">
                      {variant.description || "—"}
                    </td>
                  )}
                  {specKeys.map((key) => (
                    <td key={key} className="py-3 px-4 text-slate-600">
                      {variant.specs?.[key] || "—"}
                    </td>
                  ))}
                  <td className="py-3 px-4 text-right">
                    <div className="inline-block bg-slate-50 group-hover:bg-white px-3 py-1 rounded-lg border border-slate-100 group-hover:border-medical-100 transition-colors">
                      <PriceDisplay price={variant.price} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
