import Link from "next/link";

interface CategoryCardProps {
  name: string;
  description: string;
  href: string;
  itemCount?: number;
  image?: string;
  accentColor?: string;
}

export default function CategoryCard({
  name,
  description,
  href,
  itemCount,
  image,
  accentColor = "bg-medical-50 text-medical-600",
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-2xl border border-slate-200/60 p-6 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(14,116,144,0.1)] transition-all duration-300 overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <div className="relative flex items-start gap-4 z-10">
        {image ? (
          <div className="w-16 h-16 shrink-0 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/50">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
            />
          </div>
        ) : (
          <div className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center ${accentColor} bg-opacity-20`}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
            </svg>
          </div>
        )}
        <div className="flex-1 min-w-0 pt-1">
          <h3 className="text-base font-semibold text-slate-900 group-hover:text-medical-600 transition-colors">
            {name}
            {itemCount && (
              <span className="ml-2 text-xs font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                {itemCount}
              </span>
            )}
          </h3>
          <p className="mt-2 text-sm text-slate-500 line-clamp-2 leading-relaxed">{description}</p>
        </div>
        <div className="w-8 h-8 shrink-0 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-medical-50 group-hover:text-medical-600 text-slate-400 transition-all duration-300 mt-1">
          <svg
            className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
