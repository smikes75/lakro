import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageGallery from "@/components/ImageGallery";

export const metadata: Metadata = {
  title: "Výstavba hausbótů",
  description:
    "Realizace hausbótů a plovoucích mol. Návrh, stavební dokumentace, realizace a doprava na místo.",
};

const galleryImages = Array.from({ length: 10 }, (_, i) => ({
  src: `/images/hausboty/vystavba_hausbotu_${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `Hausbót - realizace ${i + 1}`,
}));

export default function Hausboty() {
  return (
    <>
      <PageHero image="/images/header_hausboty.jpg" title="Hausbóty" />

      <section className="max-w-[1170px] mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-xl md:text-2xl font-bold uppercase text-text mb-6">
              Realizace hausbótů a plovoucích mol
            </h2>
            <p className="text-text-light leading-relaxed mb-4 text-justify">
              Hausbót, houseboat nebo snad hausboot? Všechna tato označení jsou
              správná a znamenají jedno – plovoucí dům. Tato pro nás ne zcela
              obvyklá forma bydlení se na mnoha místech světa stala velmi
              oblíbenou.
            </p>
            <p className="text-text-light leading-relaxed mb-4 text-justify">
              Pokud se Vám líbí bydlení na vodě stejně jako nám, rádi Vám
              pomůžeme Váš sen realizovat. Zpracujeme Vám návrh hausbótu,
              zajistíme stavební dokumentaci pro úřady, zrealizujeme stavbu a
              dopravíme hausbót na místo určení.
            </p>
            <p className="text-text-light leading-relaxed text-justify">
              Tento typ domu je možné vystavět i na pozemku. Výsledkem je moderní
              rodinný domek s příjemným designem a skvělými tepelně-izolačními a
              protipožárními vlastnostmi, které zajišťují moderní sendvičové
              panely.
            </p>
          </div>

          <div>
            <ImageGallery images={galleryImages} autoplaySpeed={7000} />
          </div>
        </div>
      </section>
    </>
  );
}
