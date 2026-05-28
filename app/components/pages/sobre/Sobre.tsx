import Image from "next/image";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt
        className="text-3xl text-[#4c1d95] sm:text-4xl"
        style={{ fontFamily: "var(--font-russo-one)" }}
      >
        {value}
      </dt>
      <dd className="mt-1 text-xs uppercase tracking-wider text-black/60">
        {label}
      </dd>
    </div>
  );
}

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="relative h-screen w-full overflow-hidden bg-white text-black"
    >
      <div className="absolute inset-y-0 left-0 w-full md:w-1/2 lg:w-3/5">
        <Image
          src="/equipe.jpg"
          alt="Equipe Ares Rovers reunida na UnB"
          fill
          className="object-cover object-[center_70%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/30 md:from-transparent md:to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_85%,rgba(76,29,149,0.25),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_5%_10%,rgba(212,160,23,0.18),transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-end px-6 lg:px-10">
        <div className="max-w-xl">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4A017]">
            Sobre nós
          </span>
          <h2
            className="mt-4 text-4xl uppercase leading-tight text-black sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-russo-one)" }}
          >
            Engenharia que <span className="text-[#4c1d95]">conquista</span>{" "}
            outros mundos
          </h2>
          <p className="mt-6 text-base leading-relaxed text-black/75 sm:text-lg">
            A ARES (Aeroespace Rover Exploration System) é a equipe oficial de
            Rovers da Universidade de Brasília, vinculada à Engenharia
            Aeroespacial da UnB. Nosso objetivo é desenvolver tecnologias
            voltadas à exploração planetária por meio da elaboração de veículos
            robóticos capazes de operar em terrenos análogos a superfícies
            extraterrestres.
          </p>
          <p className="mt-4 text-base leading-relaxed text-black/75 sm:text-lg">
            Atuamos de forma multidisciplinar nas áreas de estruturas,
            dinâmica, eletrônica, telecomunicações e sistemas embarcados,
            integrando ensino, pesquisa e inovação aplicada.
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-black/10 pt-6">
            <Stat value="5+" label="Subsistemas" />
            <Stat value="30+" label="Membros" />
            <Stat value="∞" label="Ambições" />
          </dl>
        </div>
      </div>
    </section>
  );
}
