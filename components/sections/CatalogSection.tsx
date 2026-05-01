import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { catalogCategories } from "@/lib/catalog";

function ChevronArrow() {
  return (
    <span
      aria-hidden
      className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-orange transition group-hover:gap-3"
    >
      Explorar
      <span className="inline-block">&rarr;</span>
    </span>
  );
}

export function CatalogSection() {
  return (
    <section id="catalogo" className="scroll-mt-24 bg-brand-graphite py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>Catálogo por segmento</SectionLabel>

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-black tracking-tight text-brand-white md:text-4xl lg:text-5xl">
              Encontre a{" "}
              <span className="text-brand-orange">linha certa para o projeto.</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg text-brand-gray-light">
              Navegue por categorias pensadas junto ao mercado residencial,
              corporativo, lazer e AGRO — imagens placeholder por enquanto.
            </p>
          </div>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {catalogCategories.map((category) => {
            const href = `/catalogo#${category.slug}`;
            const isAgro = category.slug === "agro";

            return (
              <li key={category.slug} className={isAgro ? "relative" : undefined}>
                {isAgro ? (
                  <span className="absolute right-5 top-5 z-20 rounded-full bg-emerald-600 px-4 py-1.5 font-heading text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
                    AGRO em destaque
                  </span>
                ) : null}
                <Link
                  href={href}
                  className={`group relative block overflow-hidden rounded-2xl border border-brand-lead bg-brand-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange ${isAgro ? "border-emerald-700/70 ring-1 ring-emerald-600/35" : ""}`}
                  aria-labelledby={`catalog-card-${category.slug}`}
                >
                  <article className="relative aspect-[4/5] md:aspect-[3/4]">
                    <Image
                      src={category.coverImage}
                      alt={`Imagem ilustrativa — ${category.label}`}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/25 to-transparent opacity-95 transition group-hover:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                      <p
                        id={`catalog-card-${category.slug}`}
                        className="font-heading text-xl font-black text-brand-white md:text-2xl"
                      >
                        {category.label}
                      </p>
                      <p className="mt-2 max-w-sm text-sm leading-relaxed text-brand-gray-light md:text-base">
                        {category.description}
                      </p>
                      <ChevronArrow />
                    </div>
                  </article>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-14 flex justify-center">
          <Button href="/catalogo" variant="primary">
            Ver catálogo completo
          </Button>
        </div>
      </div>
    </section>
  );
}
