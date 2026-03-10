import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "LAKRO, s.r.o. - Trojická 437/20, Praha 2, 128 00. Telefon: +420 739 592 960.",
};

const contactInfo = [
  { label: "Adresa", value: "Trojická 437/20\nPraha 2\n128 00" },
  {
    label: "Telefon",
    value: "+420 739 592 960",
    href: "tel:+420739592960",
  },
  {
    label: "E-mail",
    value: "info@lakro.eu",
    href: "mailto:info@lakro.eu",
  },
];

const businessInfo = [
  { label: "IČO", value: "62915266" },
  { label: "DIČ", value: "CZ62915266" },
  { label: "Bankovní spojení", value: "19-1444260297/0100" },
  { label: "Datová schránka", value: "d4ahmza" },
];

export default function Kontakt() {
  return (
    <section className="max-w-[1170px] mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-text mb-12 text-center">
        Kontakt
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-bold text-text mb-6 uppercase">
            LAKRO, s.r.o.
          </h2>

          <div className="space-y-4 mb-8">
            {contactInfo.map((item) => (
              <div key={item.label}>
                <span className="text-sm font-semibold text-text uppercase">
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    className="block text-text-light hover:text-brand-red transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-text-light whitespace-pre-line">
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="border-t pt-6 space-y-2">
            {businessInfo.map((item) => (
              <div key={item.label} className="flex gap-2">
                <span className="text-sm font-semibold text-text">
                  {item.label}:
                </span>
                <span className="text-sm text-text-light">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.5!2d14.416337!3d50.070347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b948f3e4b4b4b%3A0x0!2sTrojick%C3%A1%20437%2F20%2C%20128%2000%20Praha%202!5e0!3m2!1scs!2scz!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded"
            title="Mapa - LAKRO, s.r.o."
          />
        </div>
      </div>
    </section>
  );
}
