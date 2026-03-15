import Link from "next/link";
import type { NavItem } from "@/data/types";

interface MegaMenuProps {
  items: NavItem[];
}

export default function MegaMenu({ items }: MegaMenuProps) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50">
      <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-200/60 p-5 min-w-[280px] max-w-[340px] before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-white/40 before:to-transparent before:pointer-events-none">
        <div className="relative space-y-1 z-10">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-medical-600 hover:bg-medical-50/80 rounded-xl transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
