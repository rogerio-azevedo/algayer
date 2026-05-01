import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

const projects = [
  {
    title: "Residência Horizonte",
    category: "Alto padrão · LSF",
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    tall: true,
  },
  {
    title: "Pavilhão Logístico Atlas",
    category: "Industrial · Steel Frame",
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    tall: false,
  },
  {
    title: "Loft Urbano 802",
    category: "Compacto · Modular",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    tall: false,
  },
  {
    title: "Casa Campo Serra",
    category: "Country · Sustentável",
    src: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&q=80",
    tall: true,
  },
  {
    title: "Escritório Hub Sul",
    category: "Comercial · Corporativo",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    tall: false,
  },
  {
    title: "Galpão Express Norte",
    category: "Fast-track · Coberturas amplas",
    src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80",
    tall: false,
  },
];

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="scroll-mt-24 bg-brand-black py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>Portfólio</SectionLabel>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-black tracking-tight text-brand-white md:text-4xl lg:text-5xl">
              Projetos que{" "}
              <span className="text-brand-orange">respiram precisão.</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg text-brand-gray-light">
              Imagens de referência — substitua pelas fotos reais das suas obras
              para máximo impacto no primeiro contato.
            </p>
          </div>
          <Button href="#contato" variant="ghost" className="shrink-0">
            Ver todos os projetos
          </Button>
        </div>

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className={`group relative mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-brand-lead bg-brand-lead ${
                p.tall ? "aspect-[3/4]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={p.src}
                alt={p.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-90 transition group-hover:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                  {p.category}
                </p>
                <h3 className="font-heading mt-2 text-xl font-bold text-brand-white">
                  {p.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
