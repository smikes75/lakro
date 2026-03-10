import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Divize elektro - Domácí telefony",
  description:
    "Domácí telefony, IP telefony a videotelefony od renomovaných výrobců.",
};

export default function DomaciTelefony() {
  return (
    <ServiceDetail
      heroImage="/images/header_slaboproude_systemy.jpg"
      heroTitle="Domácí telefony"
      heading="DOMÁCÍ TELEFONY"
      text="Nabízíme řešení domácích telefonů, IP telefonů a videotelefonů od renomovaných výrobců Hikvision, Dahua, Genway, Commax, Urmet, Fermax, Tesla a další."
      image="/images/services/divize_elektro_domaci_telefony.jpg"
    />
  );
}
