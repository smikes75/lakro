import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Zateplení budov",
  description:
    "Zateplení budov. Energetické úspory, eliminace tepelných mostů.",
};

export default function ZatepleniBudov() {
  return (
    <ServiceDetail
      heroImage="/images/header_realizace_staveb.jpg"
      heroTitle="Zateplení budov"
      heading="ZATEPLENÍ BUDOV"
      text="Zateplení budov je v současnosti velmi využívanou metodou revitalizace. Dříve byly budovány stavby s nedostatečnou izolací. Díky zateplení budovy se uživatelům sníží během zimních měsíců finanční náklady za vytápění a v horkých letních měsících se teplo naopak nedostane do domu. Posunem rosného bodu od izolantu nemá zdivo tendenci promrzat. Zateplením se rovněž eliminují tepelné mosty ve stavební konstrukci. Zateplování domů tak přispívá k výrazným energetickým úsporám."
      image="/images/services/realizace_staveb_zatepleni.jpg"
    />
  );
}
