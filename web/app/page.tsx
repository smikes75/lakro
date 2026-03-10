import HeroSlider from "@/components/HeroSlider";
import Link from "next/link";

const divisions = [
  {
    title: "Slaboproudé systémy",
    desc: "EPS, EZS, EKV, ERO, kamerové systémy, domácí telefony",
    href: "/slaboproude-systemy",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Realizace staveb",
    desc: "Výstavba, rekonstrukce, zateplení budov",
    href: "/realizace-staveb",
    icon: "M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z",
  },
  {
    title: "Hausbóty",
    desc: "Realizace hausbótů a plovoucích mol",
    href: "/hausboty",
    icon: "M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42a1 1 0 00-.66 1.28L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z",
  },
];

export default function Home() {
  return (
    <>
      <HeroSlider />

      <section className="max-w-[1170px] mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-4">
            LAKRO, s.r.o.
          </h2>
          <p className="text-text-light max-w-2xl mx-auto">
            Naše rodinná firma byla založena v roce 1995. Postupně jsme vybudovali
            tři hlavní divize — slaboproudé systémy, realizace staveb a výstavba
            hausbótů.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {divisions.map((div) => (
            <Link
              key={div.href}
              href={div.href}
              className="group bg-gray-light rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={div.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-bold uppercase mb-2 text-text group-hover:text-brand-red transition-colors">
                {div.title}
              </h3>
              <p className="text-sm text-text-light">{div.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
