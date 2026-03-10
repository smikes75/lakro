import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Rekonstrukce",
  description:
    "Stavební rekonstrukce a přestavby. Zlepšení kvality bydlení a pohodlí.",
};

export default function Rekonstrukce() {
  return (
    <ServiceDetail
      heroImage="/images/header_realizace_staveb.jpg"
      heroTitle="Rekonstrukce"
      heading="REKONSTRUKCE"
      text="Každá budova má s ohledem na svou funkci a použité materiály omezenou životnost. I přes maximální péči, stavební materiály stárnou a po určité době nemovitost vyžaduje opravu. Stavební rekonstrukce a přestavby zlepší nejen kvalitu bydlení, ale také pohodlí uživatelům bytových jednotek."
      image="/images/services/realizace_staveb_rekonstrukce.jpg"
    />
  );
}
