import { SectionLabel } from "@/components/ui/SectionLabel";

const rows = [
  {
    label: "Prazo de obra",
    steel: "Até 52% mais rápido em projetos compatíveis",
    conventional: "Cronograma mais longo e sensível ao clima",
  },
  {
    label: "Desperdício",
    steel: "Fabricação enxuta — desperdício típico muito baixo",
    conventional: "Até ~30% de perdas são comuns na alvenaria",
  },
  {
    label: "Peso estrutural",
    steel: "Mais leve — fundações e bases frequentemente menores",
    conventional: "Maior carga permanente na estrutura",
  },
  {
    label: "Sustentabilidade",
    steel: "Aço reciclável em ciclo fechado",
    conventional: "Maior volume de entulho e retrabalho",
  },
  {
    label: "Qualidade",
    steel: "Controle de fábrica + montagem padronizada",
    conventional: "Variação forte conforme equipe e clima",
  },
];

export function BenefitsSection() {
  return (
    <section
      id="vantagens"
      className="scroll-mt-24 bg-brand-black py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>Vantagens</SectionLabel>
        <h2 className="font-heading max-w-3xl text-3xl font-black tracking-tight text-brand-white md:text-4xl lg:text-5xl">
          Steel Frame{" "}
          <span className="text-brand-orange">versus</span> o convencional
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-brand-gray-light">
          Não é modismo — é engenharia aplicada. Comparativo direto para quem
          precisa de previsibilidade de prazo, custo e resultado.
        </p>

        <div className="mt-14 overflow-hidden rounded-2xl border border-brand-lead">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-brand-graphite px-6 py-5 md:px-8">
              <p className="font-heading text-xs font-black uppercase tracking-[0.2em] text-brand-orange">
                Steel Frame
              </p>
              <p className="mt-1 text-sm text-brand-gray-light">
                Industrializado · Previsível · Escalável
              </p>
            </div>
            <div className="border-t border-brand-lead bg-brand-lead/40 px-6 py-5 md:border-t-0 md:border-l md:px-8">
              <p className="font-heading text-xs font-black uppercase tracking-[0.2em] text-brand-gray-concrete">
                Convencional
              </p>
              <p className="mt-1 text-sm text-brand-gray-concrete">
                Alvenaria estrutural · Maior variabilidade no canteiro
              </p>
            </div>
          </div>

          <div className="divide-y divide-brand-lead">
            {rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 md:grid-cols-2"
              >
                <div className="bg-brand-black px-6 py-6 md:px-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gray-concrete">
                    {row.label}
                  </p>
                  <p className="mt-2 font-medium text-brand-white">
                    {row.steel}
                  </p>
                </div>
                <div className="border-t border-brand-lead bg-brand-black/60 px-6 py-6 md:border-t-0 md:border-l md:px-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gray-concrete md:hidden">
                    {row.label}
                  </p>
                  <p className="mt-2 text-brand-gray-concrete">
                    {row.conventional}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
