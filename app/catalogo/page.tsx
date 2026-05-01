import type { Metadata } from "next";
import Link from "next/link";

import { CatalogProjectMasonry } from "@/components/catalog/CatalogProjectMasonry";
import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";
import { catalogCategories } from "@/lib/catalog";
import { getWhatsAppLink, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Catálogo por segmento",
  description:
    "Explore projetos Algayer por categoria: casas populares, alto padrão, corporativo, lazer e AGRO.",
  keywords: [...siteConfig.keywords, "catálogo", "steelframe agro"],
  alternates: {
    canonical: "/catalogo",
  },
  openGraph: {
    title: `Catálogo por segmento | ${siteConfig.name}`,
    description:
      "Residencial, corporativo, lazer e linha AGRO — imagens de referência enquanto o portfólio é atualizado.",
    url: `${siteConfig.siteUrl}/catalogo`,
  },
};

export default function CatalogoPage() {
  const wa = getWhatsAppLink();

  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1 bg-brand-black pt-28 pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <SectionLabel>Catálogo</SectionLabel>
            <h1 className="font-heading text-4xl font-black tracking-tight text-brand-white md:text-5xl">
              Projeto sob medida por{" "}
              <span className="text-brand-orange">segmento.</span>
            </h1>
            <p className="mt-5 text-lg text-brand-gray-light">
              Selecione a linha e veja referências organizadas por categoria. As
              imagens são placeholder — troque quando tiver fotos reais das obras.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/#catalogo" variant="ghost">
                Voltar à landing
              </Button>
              <Button href={wa} variant="primary" target="_blank" rel="noopener noreferrer">
                Falar com consultor
              </Button>
            </div>
          </div>
        </div>

        <div className="sticky top-19 z-30 mt-14 border-y border-brand-lead bg-brand-black/92 py-4 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-6">
            {catalogCategories.map((c) => {
              const pillBase =
                "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange";
              const isAgro = c.slug === "agro";
              const pillCls = isAgro
                ? `${pillBase} border-emerald-600/70 text-emerald-100 hover:border-emerald-400 hover:text-white`
                : `${pillBase} border-brand-lead bg-brand-graphite text-brand-gray-light hover:border-brand-orange hover:text-brand-orange`;

              return (
                <Link key={c.slug} href={`#${c.slug}`} className={pillCls}>
                  {c.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-20 flex w-full max-w-6xl flex-col gap-24 px-6">
          {catalogCategories.map((category) => {
            const isAgro = category.slug === "agro";

            return (
              <section
                key={category.slug}
                id={category.slug}
                className={`scroll-mt-44 ${isAgro ? "scroll-mt-48" : ""}`}
              >
                <header className="flex flex-wrap items-start justify-between gap-6 border-b border-brand-lead pb-8">
                  <div>
                    <span
                      className={`font-heading text-[10px] font-black uppercase tracking-[0.35em] ${
                        isAgro ? "text-emerald-400" : "text-brand-orange"
                      }`}
                    >
                      Segmento
                    </span>
                    <h2 className="font-heading mt-3 text-3xl font-black text-brand-white md:text-4xl">
                      {category.label}
                    </h2>
                    <p className="mt-3 max-w-2xl text-brand-gray-light">
                      {category.description}
                    </p>
                  </div>
                </header>
                <CatalogProjectMasonry projects={category.projects} />
              </section>
            );
          })}
        </div>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
