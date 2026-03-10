import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FlipCard from "@/components/FlipCard";

export const metadata: Metadata = {
  title: "Realizace staveb",
  description:
    "Výstavba bytových domů, občanských staveb, rodinných domů. Rekonstrukce a zateplení budov.",
};

const services = [
  {
    title: "Realizace staveb",
    description:
      "Zaměřujeme se na výstavbu bytových domů, občanských staveb a rodinných domů, což je obor, ve kterém má naše firma nejdelší tradici. Zajistíme kompletní realizaci od základů po kolaudaci.",
    image: "/images/services/realizace_staveb_realizace_staveb.jpg",
    href: "/realizace-staveb#stavby",
  },
  {
    title: "Rekonstrukce",
    description:
      "Každá budova má s ohledem na svou funkci a použité materiály omezenou životnost. I přes maximální péči, stavební materiály stárnou a je třeba je obnovovat. Zajistíme kompletní rekonstrukce objektů.",
    image: "/images/services/realizace_staveb_rekonstrukce.jpg",
    href: "/realizace-staveb#rekonstrukce",
  },
  {
    title: "Zateplení budov",
    description:
      "Zateplení budov je v současnosti velmi využívanou metodou revitalizace. Dříve byly budovány stavby s nedostatečnou izolací. Zateplením dosáhnete výrazných úspor na vytápění.",
    image: "/images/services/realizace_staveb_zatepleni.jpg",
    href: "/realizace-staveb#zatepleni",
  },
];

export default function RealizaceStaveb() {
  return (
    <>
      <PageHero
        image="/images/header_realizace_staveb.jpg"
        title="Realizace staveb"
      />

      <section className="max-w-[1170px] mx-auto px-4 py-16">
        <p className="text-text-light text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          Stavební divize je nejstarším oborem naší firmy. Zaměřujeme se na
          výstavbu, rekonstrukce a zateplení budov.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <FlipCard key={service.title} {...service} />
          ))}
        </div>
      </section>
    </>
  );
}
