"use client";

import { useEffect, useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const testimonials = [
  {
    quote:
      "Obra limpa e rápida — entregaram dentro do que prometeram. A estrutura em steel frame foi decisiva para não travarmos no cronograma.",
    name: "Marina Duarte",
    role: "Florianópolis · residencial",
  },
  {
    quote:
      "Eu tinha medo do custo. Na planilha completa, steel frame virou a opção mais previsível: menos retrabalho e obra mais curta.",
    name: "Rafael K.",
    role: "Joinville · casa de campo",
  },
  {
    quote:
      "Transparência técnica impecável. Acompanhamento BIM + montagem industrializada fez diferença na qualidade final.",
    name: "Costa Engenharia",
    role: "Parceiro · projetos comerciais",
  },
  {
    quote:
      "Queríamos linguagem contemporânea com vãos amplos. Steel frame entregou liberdade arquitetônica sem pesar na fundação.",
    name: "Patrícia & Bruno",
    role: "Curitiba · alto padrão",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-brand-orange" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7l3-7z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, []);

  const t = testimonials[index];

  return (
    <section className="bg-brand-graphite py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>Depoimentos</SectionLabel>
        <h2 className="font-heading max-w-2xl text-3xl font-black tracking-tight text-brand-white md:text-4xl">
          Clientes que construíram{" "}
          <span className="text-brand-orange">com método.</span>
        </h2>

        <div className="relative mt-14 overflow-hidden rounded-3xl border border-brand-lead bg-brand-black/40 p-8 md:p-12 lg:p-16">
          <span
            className="pointer-events-none absolute left-6 top-6 font-heading text-8xl font-black leading-none text-brand-orange/15 md:left-10 md:top-10 md:text-9xl"
            aria-hidden
          >
            “
          </span>
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <Stars />
            <blockquote className="mt-8 font-heading text-xl font-semibold leading-relaxed text-brand-white md:text-2xl">
              {t.quote}
            </blockquote>
            <figcaption className="mt-8">
              <p className="font-heading text-lg font-bold text-brand-orange">
                {t.name}
              </p>
              <p className="mt-1 text-sm text-brand-gray-concrete">{t.role}</p>
            </figcaption>
          </div>

          <div className="relative z-10 mt-10 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index
                    ? "w-10 bg-brand-orange"
                    : "w-2 bg-brand-gray-concrete hover:bg-brand-orange/60"
                }`}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
