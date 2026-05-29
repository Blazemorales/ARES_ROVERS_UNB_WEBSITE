import Link from "next/link";

const beneficios = [
  {
    icone: "🏆",
    titulo: "Visibilidade em competições",
    descricao:
      "Sua marca presente em competições nacionais e internacionais de rovers.",
  },
  {
    icone: "🎓",
    titulo: "Associação acadêmica",
    descricao:
      "Parceria com a Universidade de Brasília e engenharia aeroespacial.",
  },
  {
    icone: "🚀",
    titulo: "Impacto real",
    descricao:
      "Apoio direto ao desenvolvimento de tecnologia espacial brasileira.",
  },
];

export default function Patrocinadores() {
  return (
    <section
      id="patrocinadores"
      className="relative flex min-h-screen w-full items-center bg-white py-24 text-black"
    >
      <div className="mx-auto w-full max-w-7xl px-6 text-center lg:px-10">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4c1d95]">
          Patrocinadores
        </span>
        <h2
          className="mx-auto mt-4 max-w-3xl text-4xl uppercase leading-tight sm:text-5xl"
          style={{ fontFamily: "var(--font-russo-one)" }}
        >
          Quem nos ajuda a{" "}
          <span className="text-[#D4A017]">decolar</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-black/70 sm:text-lg">
          Apoiar a ARES é investir na nova geração de engenheiros aeroespaciais
          do Brasil — e marcar presença em competições nacionais e
          internacionais.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {beneficios.map((b) => (
            <div
              key={b.titulo}
              className="rounded-2xl border border-black/10 bg-black/[0.02] p-8 text-left"
            >
              <span className="text-3xl">{b.icone}</span>
              <h3 className="mt-4 text-base font-semibold text-black">
                {b.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-black/60">
                {b.descricao}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border-2 border-dashed border-[#4c1d95]/30 bg-[#4c1d95]/[0.03] p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4c1d95]">
            Seja o primeiro
          </p>
          <p className="mx-auto mt-3 max-w-md text-base text-black/60">
            Ainda não temos patrocinadores confirmados. Sua empresa pode ser a
            primeira a apoiar a ARES!
          </p>
          <Link
            href="#contato"
            className="mt-6 inline-block rounded-full bg-black px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#4c1d95]"
          >
            Quero patrocinar
          </Link>
        </div>
      </div>
    </section>
  );
}
