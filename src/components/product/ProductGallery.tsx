"use client";

import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
  alt: string;
}

export default function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [selected, setSelected] = useState(0);

  if (images.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="relative aspect-square max-w-md bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm">
        <img
          src={images[selected]}
          alt={alt}
          className="w-full h-full object-contain p-4"
        />
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setSelected(i)}
              className={`shrink-0 w-16 h-16 rounded-lg border-2 overflow-hidden transition-all ${
                i === selected
                  ? "border-accent-500 shadow-md"
                  : "border-stone-200 hover:border-stone-300 opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={src}
                alt={`${alt} view ${i + 1}`}
                className="w-full h-full object-contain p-1"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
