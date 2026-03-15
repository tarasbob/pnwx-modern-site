interface PriceDisplayProps {
  price: string;
}

export default function PriceDisplay({ price }: PriceDisplayProps) {
  const isCallForPrice = price === "$Call" || price.toLowerCase().includes("call");

  if (isCallForPrice) {
    return (
      <span className="inline-flex items-center gap-1 bg-accent-100 text-accent-700 px-2.5 py-0.5 rounded-full text-xs font-semibold">
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
        Call
      </span>
    );
  }

  return <span className="font-semibold text-gray-900 font-[family-name:var(--font-jetbrains)]">{price}</span>;
}
