import { SectionLabel } from "@/components/ui/SectionLabel";

const faqs = [
  {
    q: "O que é Steel Frame?",
    a: "É um sistema construtivo em que a estrutura principal é em perfis metálicos leves industrializados (LSF/steel frame leve) ou estruturas mistas compatibilizadas, integradas a fechamentos e isolamentos. Diminui peso da obra, acelera montagem e melhora controle dimensional quando combinado a BIM.",
  },
  {
    q: "É mais caro que a construção convencional?",
    a: "O capex inicial pode parecer semelhante ou maior em alguns cenários, mas o pacote completo costuma compensar: prazo menor, menos retrabalho, fundações frequentemente mais econômicas e obra mais limpa. O melhor comparativo é o custo total e o custo de oportunidade do tempo.",
  },
  {
    q: "Quanto tempo leva uma obra?",
    a: "Depende do porte e dos acabamentos. Em projetos compatíveis, é comum reduzir drasticamente a fase estrutural e ganhar previsibilidade no cronograma — especialmente quando há industrialização e montagem experiente.",
  },
  {
    q: "É resistente e seguro?",
    a: "Sim, quando bem especificado por engenharia e executado conforme normas. O sistema permite alta resistência à tração/compressão, integração com compartimentação e proteções exigidas em projeto — igualmente importante ao método convencional.",
  },
  {
    q: "Vocês fazem projetos residenciais e comerciais?",
    a: "Sim. Atendemos desde casas de alto padrão até lojas, escritórios e galvanização industrial/comercial — sempre com compatibilização técnica e fornecedores auditados.",
  },
  {
    q: "Como solicitar um orçamento?",
    a: "Fale pelo WhatsApp ou envie o formulário ao lado com dados do projeto. Nossa equipe retorna com próximos passos e documentação necessária.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-24 bg-brand-black py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>FAQ</SectionLabel>
        <h2 className="font-heading max-w-2xl text-3xl font-black tracking-tight text-brand-white md:text-4xl">
          Dúvidas frequentes sobre{" "}
          <span className="text-brand-orange">Steel Frame</span>
        </h2>

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-brand-lead border-y border-brand-lead">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group py-2 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-heading text-lg font-bold text-brand-white marker:content-none">
                <span>{item.q}</span>
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-lead text-brand-orange transition group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="pb-6 text-sm leading-relaxed text-brand-gray-concrete">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
