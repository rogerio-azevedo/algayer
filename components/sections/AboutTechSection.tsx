import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";

const pillars = [
  {
    title: "Industrializado",
    body: "Perfis e painéis fabricados em ambiente controlado, com tolerâncias milimétricas e encaixe preciso na obra.",
  },
  {
    title: "Preciso",
    body: "Menos retrabalho no canteiro: o modelo digital (BIM) conversa direto com a fabricação.",
  },
  {
    title: "Sustentável",
    body: "Aço reciclável, menos entulho e menor impacto no solo graças ao peso estrutural reduzido.",
  },
];

export function AboutTechSection() {
  return (
    <section
      id="tecnologia"
      className="scroll-mt-24 bg-brand-graphite py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <SectionLabel>A tecnologia</SectionLabel>
          <h2 className="font-heading text-3xl font-black tracking-tight text-brand-white md:text-4xl lg:text-5xl">
            A Ferrari da{" "}
            <span className="text-brand-orange">construção civil.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-brand-gray-light">
            Steel Frame (estrutura metálica leve industrializada) substitui boa
            parte da alvenaria estrutural por perfis de aço galvanizado,
            ligadores mecânicos e sistemas compatíveis de fechamento e isolamento.
            O resultado é obra mais limpa, rápida e mensurável — do projeto à
            entrega.
          </p>
          <p className="mt-4 font-medium text-brand-sand">
            Usado nos EUA e Europa há décadas. Chegou para ficar no Brasil.
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-1">
            {pillars.map((p) => (
              <li
                key={p.title}
                className="rounded-2xl border border-brand-lead bg-brand-black/40 p-5 transition hover:border-brand-orange/40"
              >
                <div className="flex gap-4">
                  <span
                    className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-orange text-brand-black"
                    aria-hidden
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 12h12M12 6v12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-brand-white">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-gray-concrete">
                      {p.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-brand-lead bg-brand-lead">
            <Image
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80"
              alt="Estrutura metálica em obra — referência visual"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={false}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 font-heading text-sm font-bold uppercase tracking-widest text-brand-orange">
              Estrutura · Precisão · Campo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
