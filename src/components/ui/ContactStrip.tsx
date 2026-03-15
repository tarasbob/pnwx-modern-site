import { COMPANY } from "@/lib/constants";

export default function ContactStrip() {
  return (
    <section className="relative bg-navy-950 text-white overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-medical-900/40 via-navy-900/40 to-accent-900/40" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 11px)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          <div className="pt-6 sm:pt-0">
            <a href={`mailto:${COMPANY.email}`} className="group inline-flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-accent-500/20 group-hover:shadow-[0_0_20px_rgba(217,119,6,0.3)] transition-all duration-300 border border-white/10 group-hover:border-accent-500/50 group-hover:-translate-y-1">
                <svg className="w-6 h-6 text-accent-400 group-hover:text-accent-300" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white tracking-wide">Email Sales</p>
                <p className="text-sm text-slate-400 mt-1 group-hover:text-slate-300 transition-colors">{COMPANY.email}</p>
              </div>
            </a>
          </div>
          <div className="pt-6 sm:pt-0">
            <a href={`tel:${COMPANY.phone}`} className="group inline-flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-medical-500/20 group-hover:shadow-[0_0_20px_rgba(14,116,144,0.3)] transition-all duration-300 border border-white/10 group-hover:border-medical-500/50 group-hover:-translate-y-1">
                <svg className="w-6 h-6 text-medical-400 group-hover:text-medical-300" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white tracking-wide">Call Us</p>
                <p className="text-sm text-slate-400 mt-1 group-hover:text-slate-300 transition-colors">{COMPANY.phone} &bull; Toll-Free: {COMPANY.tollFree}</p>
              </div>
            </a>
          </div>
          <div className="pt-6 sm:pt-0">
            <div className="group inline-flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
                <svg className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m0 0a48.103 48.103 0 0 1 10.5 0m-10.5 0V5.625a1.125 1.125 0 0 1 1.125-1.125h8.25a1.125 1.125 0 0 1 1.125 1.125v2.992" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white tracking-wide">Fax Your Order</p>
                <p className="text-sm text-slate-400 mt-1">24 Hours: {COMPANY.fax}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
