import Link from "next/link";
import Image from "next/image";

const vendorLogos = [
  { src: "/images/VendorLogos/Infab_but.jpg", alt: "Infab" },
  { src: "/images/VendorLogos/wolf.gif", alt: "Wolf" },
  { src: "/images/VendorLogos/TALogo2012.png", alt: "Techno-Aide" },
  { src: "/images/VendorLogos/Source-Ray.gif", alt: "Source-Ray" },
  { src: "/images/VendorLogos/Pedigo.gif", alt: "Pedigo" },
  { src: "/images/VendorLogos/Pro-Project.jpg", alt: "Pro-Project" },
];

export default function Hero() {
  return (
    <section className="relative bg-navy-950 overflow-hidden flex flex-col items-center justify-center min-h-[85vh]">
      {/* Glowing abstract radial gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-medical-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-navy-400/20 rounded-full blur-[100px] pointer-events-none" />

      {/* High-tech mesh pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-28 lg:py-40 text-center flex flex-col items-center z-10">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 animate-fade-in-up">
          <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-accent-200 tracking-wide">
            Serving Radiology Professionals Since 1997
          </span>
        </div>

        <h1 className="font-[family-name:var(--font-jakarta)] text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          X-Ray &amp; Radiology
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-300 via-medical-200 to-medical-400 drop-shadow-sm">
            Equipment &amp; Supplies
          </span>
        </h1>

        <p className="mt-8 text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          Your trusted source for radiology equipment, accessories, parts, and
          supplies. From lead aprons and X-ray grids to portable X-ray systems
          and MRI-safe products — we have everything your imaging department
          needs.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-5 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <Link
            href="/accessories"
            className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-medical-600 to-medical-500 rounded-xl hover:from-medical-500 hover:to-medical-400 transition-all duration-300 shadow-[0_0_20px_rgba(14,116,144,0.3)] hover:shadow-[0_0_30px_rgba(14,116,144,0.5)] hover:-translate-y-0.5"
          >
            Browse Products
            <svg
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
          <Link
            href="/order"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            How to Order
          </Link>
        </div>

        <div className="mt-20 w-full animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-6">
            Trusted brands we carry
          </p>
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8">
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
              {vendorLogos.map((logo) => (
                <Image
                  key={logo.src}
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={40}
                  className="h-8 sm:h-10 w-auto opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
