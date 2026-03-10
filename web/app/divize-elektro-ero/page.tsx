import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Divize elektro - ERO",
  description:
    "Ozvučovací systémy (ERO). Veřejné ozvučení a evakuační rozhlas.",
};

export default function ERO() {
  return (
    <ServiceDetail
      heroImage="/images/header_slaboproude_systemy.jpg"
      heroTitle="ERO"
      heading="OZVUČOVACÍ SYSTÉMY (ERO)"
      text="Ozvučovací systémy (ERO) jsou systémy veřejného ozvučení používané k oslovení co nejširšího okruhu lidí. Systémy veřejného ozvučení se používají všude tam, kde je snaha oslovit, informovat, upozornit a v prvé řadě hlášením pomoci návštěvníkům, cestujícím, pracovníkům, studentům a žákům atd. Setkáváme se s nimi ve školách, velkých obchodních centrech, na nádražích, letištích, v hotelech, ve veřejných a administrativních budovách, v průmyslových podnicích, v restauracích a na řadě dalších míst, neboť pole využití těchto systémů je velmi široké. Podstatné vlastnosti systémů veřejného ozvučení jsou: srozumitelnost hlášení, jeho dostatečná hlasitost; možnost připojení a spolupráce s ostatními bezpečnostními systémy; vysoká spolehlivost v dlouhodobém provozu; nezávislost na výpadku sítě; hudba na pozadí; rozdělení reproduktorů na skupiny (zóny) a tzv. nucený poslech. Důležitou vlastností u ozvučovacích systémů, které mají být použity jako evakuační rozhlas (ERO), je splnění normy pro nouzové zvukové systémy ČSN EN 60849."
      image="/images/services/divize_elektro_ero.jpg"
    />
  );
}
