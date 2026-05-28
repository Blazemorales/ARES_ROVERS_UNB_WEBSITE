import Link from "next/link";

export default function Patrocinadores() {
  const slots = ["Sua marca", "Sua marca", "Sua marca", "Sua marca"];

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
          Quem nos ajuda a <span className="text-[#D4A017]">decolar</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-black/70 sm:text-lg">
          Apoiar a ARES é investir na nova geração de engenheiros aeroespaciais
          do Brasil — e marcar presença em competições nacionais e
          internacionais.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
          {slots.map((s, i) => (
            <div
              key={i}
              className="flex aspect-[3/2] items-center justify-center rounded-xl border border-black/10 bg-black/[0.02] text-sm font-medium uppercase tracking-[0.25em] text-black/40"
            >
              {s}
            </div>
          ))}
        </div>

        <Link
          href="#contato"
          className="mt-12 inline-block rounded-full bg-black px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#4c1d95]"
        >
          Seja um patrocinador
        </Link>
      </div>
    </section>
  );
}
