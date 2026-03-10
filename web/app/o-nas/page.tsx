import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "O nás",
  description:
    "Rodinná firma LAKRO založená v roce 1995. Slaboproudé systémy, realizace staveb, hausbóty.",
};

const values = [
  "Naší prioritou je maximální kvalita práce a osobní přístup k zákazníkům",
  "Disponujeme vlastním vybavením a technikou",
  "Pracujeme s kvalitními materiály a podle osvědčených technologií",
  "Při práci se řídíme platnými normami a předpisy",
  "Získáváme nové certifikáty a zkoušky. Za všechny bychom zmínili především certifikát OZO – Odborná způsobilost v požární ochraně",
];

export default function ONas() {
  return (
    <>
      <PageHero image="/images/o_nas.jpg" title="O nás" />

      <section className="max-w-[1170px] mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-text-light leading-relaxed mb-6">
              Naše rodinná firma byla založena v roce 1995. V prvních letech jsme
              se soustředili pouze na obor realizace staveb. S růstem rodiny,
              rostla i firma, a tak se postupně přidaly další dva obory –
              realizace slaboproudých systémů a také výstavba hausbótů.
            </p>

            <ul className="space-y-3">
              {values.map((value, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-brand-red flex-shrink-0" />
                  <span className="text-text-light text-sm leading-relaxed">
                    {value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Image
              src="/images/logo_osvedceni.png"
              alt="Certifikáty a osvědčení LAKRO"
              width={960}
              height={299}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
}
