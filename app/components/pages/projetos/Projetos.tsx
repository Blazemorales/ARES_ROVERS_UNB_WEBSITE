export default function Projetos() {
  const projetos = [
    {
      titulo: "Nosso Primeiro Rover",
      descricao: "Em breve.",
    },
  ];

  return (
    <section
      id="projetos"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-black py-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(76,29,149,0.45),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(212,160,23,0.18),transparent_55%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4A017]">
          Projetos
        </span>
        <h2
          className="mt-4 max-w-3xl text-4xl uppercase leading-tight sm:text-5xl"
          style={{ fontFamily: "var(--font-russo-one)" }}
        >
          O que estamos <span className="text-[#D4A017]">construindo</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
          Cada projeto da ARES é um passo na direção de uma engenharia
          aeroespacial brasileira mais ousada, prática e colaborativa.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projetos.map((p) => (
            <article
              key={p.titulo}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition hover:border-[#D4A017]/60 hover:bg-white/[0.06]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/70 to-transparent opacity-0 transition group-hover:opacity-100" />
              <h3
                className="text-2xl uppercase text-white"
                style={{ fontFamily: "var(--font-russo-one)" }}
              >
                {p.titulo}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {p.descricao}
              </p>
              <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#D4A017]">
                Em desenvolvimento →
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
