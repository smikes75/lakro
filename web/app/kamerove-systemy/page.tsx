import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Divize elektro - Kamerové systémy",
  description:
    "Kamerové systémy (CCTV). Návrh, dodávka a montáž kamerových systémů.",
};

export default function KameroveSystemy() {
  return (
    <ServiceDetail
      heroImage="/images/header_slaboproude_systemy.jpg"
      heroTitle="Kamerové systémy"
      heading="KAMEROVÉ SYSTÉMY"
      text="Z hlediska zajištění bezpečnosti je kamerový systém (CCTV), který navíc obsahuje nahrávací zařízení s pamětí, velmi moderní a praktický. Rychlé vyhledávání v archivních záznamech je pohodlné a jednoduché, monitory s vysokou zobrazovací schopností ve spojení s kvalitními kamerami, zajistí nepřehlédnutí podstatných detailů. Navrhneme a dodáme špičkové vybavení pracoviště pro dohled a zpracování obrazu. Kromě tradičních analogových řešení jsou dnes velmi žádané IP kamerové systémy a v případě potřeby navrhneme i bezdrátový přenos signálu. Dodáváme systémy firem Hikvision, Dahua, AXIS, Intelex, Panasonic, Dallmaier, Milestone, Ateas, Samsung a dalších."
      image="/images/services/divize_elektro_kamerove_systemy.jpg"
    />
  );
}
