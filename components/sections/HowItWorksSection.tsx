import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  {
    step: "01",
    title: "Consulta gratuita",
    body: "Entendemos seu programa, prazo e orçamento-alvo. Sem compromisso.",
  },
  {
    step: "02",
    title: "Projeto & BIM",
    body: "Modelagem integrada para compatibilizar arquitetura, estrutura e instalações.",
  },
  {
    step: "03",
    title: "Fabricação industrial",
    body: "Lista de corte, perfis e painéis produzidos sob controle dimensional.",
  },
  {
    step: "04",
    title: "Montagem na obra",
    body: "Logística enxuta, canteiro organizado e menos interferências climáticas.",
  },
  {
    step: "05",
    title: "Entrega assistida",
    body: "Acabamentos, testes e documentação para você ocupar com segurança.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-brand-graphite py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>Como funciona</SectionLabel>
        <h2 className="font-heading max-w-2xl text-3xl font-black tracking-tight text-brand-white md:text-4xl">
          Do primeiro contato à chave na mão —{" "}
          <span className="text-brand-orange">com método.</span>
        </h2>

        {/* Desktop horizontal */}
        <ol className="mt-16 hidden gap-4 lg:flex lg:items-stretch">
          {steps.map((s) => (
            <li
              key={s.step}
              className="relative flex flex-1 flex-col rounded-2xl border border-brand-lead bg-brand-black/30 p-6"
            >
              <span className="font-heading text-sm font-black text-brand-orange">
                {s.step}
              </span>
              <h3 className="font-heading mt-3 text-lg font-bold text-brand-white">
                {s.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-gray-concrete">
                {s.body}
              </p>
            </li>
          ))}
        </ol>

        {/* Mobile vertical */}
        <ol className="mt-12 flex flex-col gap-6 lg:hidden">
          {steps.map((s) => (
            <li key={s.step} className="relative flex gap-4">
              <div className="flex flex-col items-center">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-orange font-heading text-xs font-black text-brand-black">
                  {s.step}
                </span>
                <span className="mt-2 h-full w-px flex-1 bg-brand-lead" aria-hidden />
              </div>
              <div className="pb-8">
                <h3 className="font-heading text-lg font-bold text-brand-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray-concrete">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
