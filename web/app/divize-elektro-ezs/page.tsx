import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Divize elektro - EZS",
  description:
    "Elektronický zabezpečovací systém (EZS). Detekce narušení střeženého objektu.",
};

export default function EZS() {
  return (
    <ServiceDetail
      heroImage="/images/header_slaboproude_systemy.jpg"
      heroTitle="EZS"
      heading="ELEKTRONICKÝ ZABEZPEČOVACÍ SYSTÉM (EZS)"
      text="Elektronický zabezpečovací systém (EZS) je systém, který detekuje narušení střeženého objektu/prostoru nežádoucí osobou. Zabezpečíme Vám, kanceláře, administrativní prostory, výrobní haly, speciální prostory se zvláštními bezpečnostními režimy (bankovní domy, nemocnice, logistická centra…) – vše velmi vkusně a s citem pro detail – bezpečnostní prvky nebudou působit rušivě v moderním interiéru, ani v památkově chráněném objektu. Dodáváme prvky a zařízení firem Jablotron, Paradox, Honeywell, DSC, Risco, Concept a dalších."
      image="/images/services/divize_elektro_ezs.jpg"
    />
  );
}
