"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface FlipCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

export default function FlipCard({
  title,
  description,
  image,
  href,
}: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group perspective-[1000px] h-[320px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-600 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-gray-light rounded overflow-hidden">
          <div className="relative w-full h-48">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-bold text-text uppercase">{title}</h3>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-brand-red rounded p-6 flex flex-col items-center justify-center text-white text-center">
          <h3 className="text-lg font-bold uppercase mb-3">{title}</h3>
          <p className="text-sm leading-relaxed mb-4 line-clamp-5">
            {description}
          </p>
          <Link
            href={href}
            className="inline-block border border-white px-5 py-2 text-sm font-semibold hover:bg-white hover:text-brand-red transition-colors"
          >
            Zjistit více
          </Link>
        </div>
      </div>
    </div>
  );
}
