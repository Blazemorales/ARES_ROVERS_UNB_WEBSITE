const subsistemas = [
  {
    sigla: "STR",
    nome: "Estruturas",
    descricao:
      "Chassi e sistemas mecânicos projetados para terrenos irregulares análogos a superfícies planetárias.",
  },
  {
    sigla: "ELE",
    nome: "Eletrônica",
    descricao:
      "Circuitos embarcados, sensores e atuadores que controlam os sistemas do rover em tempo real.",
  },
  {
    sigla: "SW",
    nome: "Software",
    descricao:
      "Firmware, sistemas de controle autônomo e interface de operação remota.",
  },
  {
    sigla: "TEL",
    nome: "Telecomunicações",
    descricao:
      "Comunicação de dados entre rover e base, incluindo telemetria e controle.",
  },
  {
    sigla: "GES",
    nome: "Gestão",
    descricao:
      "Coordenação de equipe, parcerias, documentação e planejamento de competições.",
  },
];

export default function Projetos() {
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

        <article className="mt-14 group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition hover:border-[#D4A017]/60 hover:bg-white/[0.06]">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/70 to-transparent opacity-0 transition group-hover:opacity-100" />
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h3
              className="text-2xl uppercase text-white sm:text-3xl"
              style={{ fontFamily: "var(--font-russo-one)" }}
            >
              Nosso Primeiro Rover
            </h3>
            <span className="w-fit rounded-full border border-[#D4A017]/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A017]">
              Em desenvolvimento
            </span>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
            Estamos construindo nosso primeiro rover para competições nacionais
            e internacionais. Um veículo robótico capaz de operar em terrenos
            análogos a superfícies extraterrestres, integrando cinco subsistemas
            de engenharia.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {subsistemas.map((s) => (
              <div
                key={s.sigla}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-[#D4A017]">
                  {s.sigla}
                </span>
                <p className="mt-1 text-sm font-medium text-white">{s.nome}</p>
                <p className="mt-1 text-xs leading-relaxed text-white/50">
                  {s.descricao}
                </p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
