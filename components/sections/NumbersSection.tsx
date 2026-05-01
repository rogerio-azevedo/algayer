const stats = [
  { value: "13.000 m²", caption: "estruturas entregues e em execução" },
  { value: "+100", caption: "projetos acompanhados com método Algayer" },
  { value: "52%", caption: "menos tempo vs. cronogramas convencionais típicos" },
  { value: "99%", caption: "índice de satisfação declarado pelos clientes" },
];

export function NumbersSection() {
  return (
    <section className="bg-brand-orange py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-heading text-center text-xs font-black uppercase tracking-[0.3em] text-brand-black/70">
          Resultados que contam
        </p>
        <h2 className="font-heading mx-auto mt-4 max-w-3xl text-center text-3xl font-black text-brand-black md:text-4xl">
          Engenharia séria. Obra acelerada. Marca forte.
        </h2>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.value}
              className="rounded-2xl border border-brand-black/10 bg-brand-black/5 px-6 py-8 text-center backdrop-blur-sm"
            >
              <p className="font-heading text-4xl font-black tracking-tight text-brand-black md:text-5xl">
                {s.value}
              </p>
              <p className="mt-3 text-sm font-medium leading-snug text-brand-black/80">
                {s.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
