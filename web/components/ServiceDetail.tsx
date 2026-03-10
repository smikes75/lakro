import Image from "next/image";
import PageHero from "./PageHero";

interface ServiceDetailProps {
  heroImage: string;
  heroTitle: string;
  heading: string;
  text: string;
  image: string;
}

export default function ServiceDetail({
  heroImage,
  heroTitle,
  heading,
  text,
  image,
}: ServiceDetailProps) {
  return (
    <>
      <PageHero image={heroImage} title={heroTitle} />

      <section className="max-w-[1170px] mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-xl md:text-2xl font-bold uppercase text-text mb-6">
              {heading}
            </h2>
            <p className="text-text-light leading-relaxed text-justify">
              {text}
            </p>
          </div>
          <div className="relative w-full aspect-[3/2] rounded overflow-hidden">
            <Image
              src={image}
              alt={heading}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
