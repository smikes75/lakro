"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

interface ImageGalleryProps {
  images: { src: string; alt: string }[];
  autoplaySpeed?: number;
}

export default function ImageGallery({
  images,
  autoplaySpeed = 7000,
}: ImageGalleryProps) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (lightbox !== null) return;
    const timer = setInterval(next, autoplaySpeed);
    return () => clearInterval(timer);
  }, [next, autoplaySpeed, lightbox]);

  return (
    <>
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded bg-gray-100">
        {images.map((img, i) => (
          <div
            key={img.src}
            className={`absolute inset-0 transition-opacity duration-700 cursor-pointer ${
              i === current ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setLightbox(current)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}

        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center z-10"
          aria-label="Previous"
        >
          &#8249;
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center z-10"
          aria-label="Next"
        >
          &#8250;
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === current ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 z-10"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            &times;
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-10"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(
                (lightbox - 1 + images.length) % images.length
              );
            }}
            aria-label="Previous"
          >
            &#8249;
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-10"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % images.length);
            }}
            aria-label="Next"
          >
            &#8250;
          </button>
          <div
            className="relative w-full max-w-4xl aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
