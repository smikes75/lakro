import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Divize elektro - EPS",
  description:
    "Elektronická požární signalizace (EPS). Projekce, dodávka a montáž systémů EPS.",
};

export default function EPS() {
  return (
    <ServiceDetail
      heroImage="/images/header_slaboproude_systemy.jpg"
      heroTitle="EPS"
      heading="ELEKTRONICKÁ POŽÁRNÍ SIGNALIZACE (EPS)"
      text="Elektronická požární signalizace (EPS) je vyhrazené požárně bezpečnostní zařízení, které pomocí hlásičů zajišťuje včasnou signalizaci vznikajícího požáru a upozorňuje osoby v daném objektu na nebezpečí. Signály z hlásičů jsou přijímány ústřednou EPS. Elektrická požární signalizace je regulována přísnými normami EN54 a příslušnými českými normami, například ČSN 342710. Naši zkušení pracovníci mají kvalifikaci pro kompletní řešení požární bezpečnosti budov, včetně osvědčení OZO v požární ochraně. Dodáváme systémy firem ESSER, Tyco Fire, Schrack Seconet, Siemens, Lites, UTC Fire&Security, Bosch, Labor Strauss, Apollo, Detectomat a dalších."
      image="/images/services/divize_elektro_eps.jpg"
    />
  );
}
