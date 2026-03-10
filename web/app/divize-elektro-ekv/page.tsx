import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Divize elektro - EKV",
  description:
    "Elektronická kontrola vstupu (EKV). Kontrola a regulace vstupů osob do objektu.",
};

export default function EKV() {
  return (
    <ServiceDetail
      heroImage="/images/header_slaboproude_systemy.jpg"
      heroTitle="EKV"
      heading="ELEKTRONICKÁ KONTROLA VSTUPU (EKV)"
      text="Elektronická kontrola vstupu (EKV) je systém, který slouží ke kontrole a regulaci vstupů osob do objektu nebo jeho části. Zabezpečte veškeré objekty elektronickou kontrolou vstupu, která je nezbytnou součástí všech běžných elektronických zabezpečovacích systémů. Systém představuje nejen řešení z hlediska řízení oprávněného vstupu osob, nebo vjezdu automobilů, ale systém lze také elegantně propojit na systém evidence docházky a mzdový systém s případným modulem stravování. Moderní kontaktní či bezkontaktní čtečky docházkových terminálů jsou dnes již běžným vybavením objektů."
      image="/images/services/divize_elektro_ekv.jpg"
    />
  );
}
