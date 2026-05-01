import { Button } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/lib/site";

function StructuralBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <svg
        className="absolute -right-24 top-1/4 h-[140%] w-[80%] max-w-none opacity-40 md:right-0 md:w-[55%]"
        viewBox="0 0 600 800"
        fill="none"
      >
        <path
          d="M40 720 L40 120 L480 40 L560 680 Z"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-brand-lead"
          style={{
            animation: "pulse-line 5s ease-in-out infinite",
          }}
        />
        <path
          d="M120 760 L140 200 L520 140 L500 720 Z"
          stroke="currentColor"
          strokeWidth="1"
          className="text-brand-orange"
          style={{
            animation: "float-slow 12s ease-in-out infinite",
          }}
        />
        <line
          x1="80"
          y1="400"
          x2="540"
          y2="360"
          stroke="currentColor"
          strokeWidth="1"
          className="text-brand-gray-concrete"
          opacity={0.5}
        />
        <line
          x1="100"
          y1="480"
          x2="520"
          y2="440"
          stroke="currentColor"
          strokeWidth="1"
          className="text-brand-orange"
          opacity={0.35}
        />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black" />
    </div>
  );
}

export function HeroSection() {
  const wa = getWhatsAppLink();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-brand-black pt-28 pb-16 md:pt-32"
    >
      <StructuralBackdrop />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <p className="font-heading text-xs font-bold uppercase tracking-[0.28em] text-brand-orange md:text-sm">
          Steel Frame · Industrializado · Brasil
        </p>

        <h1 className="font-heading mt-6 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-brand-white sm:text-5xl md:text-6xl lg:text-7xl">
          Construção inteligente.
          <span className="block text-brand-orange">No dobro da velocidade.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-brand-gray-light md:text-xl">
          Steel Frame é a tecnologia que o mundo usa para erguer estruturas mais
          leves, seguras e previsíveis. Menos improviso no canteiro. Mais
          resultado para o seu investimento.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button href={wa} variant="primary" target="_blank" rel="noopener noreferrer">
            Quero um orçamento →
          </Button>
          <Button href="#portfolio" variant="ghost">
            Ver projetos
          </Button>
        </div>

        <div className="mt-16 flex flex-wrap gap-8 border-t border-brand-lead pt-8 text-sm text-brand-gray-concrete">
          <div>
            <p className="font-heading text-2xl font-black text-brand-white">
              −52%
            </p>
            <p className="mt-1 max-w-[12rem]">
              prazo médio vs. método convencional em projetos compatíveis
            </p>
          </div>
          <div>
            <p className="font-heading text-2xl font-black text-brand-white">
              {"<"}2%
            </p>
            <p className="mt-1 max-w-[12rem]">
              desperdício em fabricação controlada vs. até 30% na alvenaria
            </p>
          </div>
          <div>
            <p className="font-heading text-2xl font-black text-brand-white">
              100%
            </p>
            <p className="mt-1 max-w-[12rem]">
              aço reciclável ao fim da vida útil da estrutura
            </p>
          </div>
        </div>
      </div>

      <a
        href="#tecnologia"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium uppercase tracking-widest text-brand-gray-concrete hover:text-brand-orange"
        style={{ animation: "scroll-hint 2s ease-in-out infinite" }}
      >
        <span>Role</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  );
}
