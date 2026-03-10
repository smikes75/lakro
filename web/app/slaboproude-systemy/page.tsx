import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FlipCard from "@/components/FlipCard";

export const metadata: Metadata = {
  title: "Slaboproudé systémy",
  description:
    "EPS, EZS, EKV, ERO, kamerové systémy a domácí telefony. Projekce, dodávka a montáž slaboproudých systémů.",
};

const services = [
  {
    title: "EPS",
    description:
      "Elektronická požární signalizace (EPS) je vyhrazené požárně bezpečnostní zařízení, které pomocí hlásičů zajišťuje včasnou detekci požáru v objektu. Systém umožňuje automatické ovládání požárních klapek, dveří a dalších zařízení.",
    image: "/images/services/divize_elektro_eps.jpg",
    href: "/divize-elektro-eps",
  },
  {
    title: "EZS",
    description:
      "Elektronický zabezpečovací systém (EZS) je systém, který detekuje narušení střeženého objektu nežádoucí osobou a signalizuje poplachový stav. Zajišťuje ochranu majetku a osob.",
    image: "/images/services/divize_elektro_ezs.jpg",
    href: "/divize-elektro-ezs",
  },
  {
    title: "EKV",
    description:
      "Elektronická kontrola vstupu (EKV) je systém, který slouží ke kontrole a regulaci vstupů osob do objektu. Umožňuje definovat přístupová práva a zaznamenávat pohyb osob.",
    image: "/images/services/divize_elektro_ekv.jpg",
    href: "/divize-elektro-ekv",
  },
  {
    title: "ERO",
    description:
      "Ozvučovací systémy (ERO) jsou systémy veřejného ozvučení používané k oslovení co nejširšího okruhu osob. Slouží pro evakuační rozhlasy a běžné ozvučení objektů.",
    image: "/images/services/divize_elektro_ero.jpg",
    href: "/divize-elektro-ero",
  },
  {
    title: "Kamerové systémy",
    description:
      "Z hlediska zajištění bezpečnosti je kamerový systém (CCTV), který navíc obsahuje nahrávací zařízení, jedním z nejúčinnějších prostředků pro ochranu majetku a osob.",
    image: "/images/services/divize_elektro_kamerove_systemy.jpg",
    href: "/kamerove-systemy",
  },
  {
    title: "Domácí telefony",
    description:
      "Domácí telefony a videotelefony jsou nedílnou součástí moderních bytových domů. Umožňují komunikaci s návštěvníky a bezpečné ovládání vstupních dveří.",
    image: "/images/services/divize_elektro_domaci_telefony.jpg",
    href: "/domaci-telefony",
  },
];

export default function SlaboproudeSystemy() {
  return (
    <>
      <PageHero
        image="/images/header_slaboproude_systemy.jpg"
        title="Slaboproudé systémy"
      />

      <section className="max-w-[1170px] mx-auto px-4 py-16">
        <p className="text-text-light text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          Zajišťujeme kompletní projekci, dodávku a montáž slaboproudých systémů.
          Naše služby zahrnují následující oblasti:
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
