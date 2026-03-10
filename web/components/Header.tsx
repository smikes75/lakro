"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Domů" },
  { href: "/o-nas", label: "O nás" },
  { href: "/slaboproude-systemy", label: "Slaboproudé systémy" },
  { href: "/realizace-staveb", label: "Realizace staveb" },
  { href: "/hausboty", label: "Hausbóty" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1170px] mx-auto px-4 flex items-center justify-between h-20">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="LAKRO, s.r.o."
            width={180}
            height={104}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
                pathname === item.href
                  ? "text-brand-red"
                  : "text-text hover:text-brand-red"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-white border-t">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-6 py-3 text-sm font-semibold uppercase tracking-wide border-b border-gray-100 ${
                pathname === item.href
                  ? "text-brand-red"
                  : "text-text hover:text-brand-red"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
