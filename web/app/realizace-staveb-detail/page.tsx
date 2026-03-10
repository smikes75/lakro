import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Realizace staveb",
  description:
    "Kompletní realizace staveb. Výstavba bytových domů, občanských staveb a rodinných domů.",
};

export default function RealizaceStavebDetail() {
  return (
    <ServiceDetail
      heroImage="/images/header_realizace_staveb.jpg"
      heroTitle="Realizace staveb"
      heading="KOMPLETNÍ REALIZACE STAVEB"
      text="Zaměřujeme se na výstavbu bytových domů, občanských staveb a rodinných domů, což je obor, ve kterém má naše společnost mnohaleté zkušenosti. Výstavbu provádíme &bdquo;na klíč&ldquo; nebo dle individuálních požadavků a přání investorů. Nabízíme vše od monolitických základních desek až po izolace staveb a montáž výplní otvorů."
      image="/images/services/realizace_staveb_realizace_staveb.jpg"
    />
  );
}
