import Image from "next/image";

interface PageHeroProps {
  image: string;
  title: string;
}

export default function PageHero({ image, title }: PageHeroProps) {
  return (
    <div className="relative w-full h-[250px] md:h-[350px] lg:h-[450px] overflow-hidden">
      <Image src={image} alt={title} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4">
          {title}
        </h1>
      </div>
    </div>
  );
}
