import Image from "next/image";
import equipeImg from "@/public/equipe.jpg";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt
        className="text-3xl text-[#D4A017] sm:text-4xl"
        style={{ fontFamily: "var(--font-russo-one)" }}
      >
        {value}
      </dt>
      <dd className="mt-1 text-xs uppercase tracking-wider text-white/50">
        {label}
      </dd>
    </div>
  );
}

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="relative flex min-h-screen w-full items-center overflow-hidden text-white"
    >
      {/* Foto de fundo — limpa, sem gradiente */}
      <Image
        src={equipeImg}
        alt="Equipe Ares Rovers reunida na UnB"
        fill
        className="object-cover object-[center_70%]"
      />

      {/* Acento roxo sutil sobre a foto */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_85%,rgba(76,29,149,0.3),transparent_55%)]" />

      {/* Painel de texto:
          – mobile:   gradiente de cima (transparent) para baixo (black), ocupa tela toda
          – desktop:  gradiente da esquerda (transparent) para direita (black), ocupa metade direita */}
      <div
        className="
          absolute inset-x-0 bottom-0 flex flex-col justify-end px-6 pb-16 pt-32
          bg-[linear-gradient(to_top,rgba(0,0,0,0.97)_55%,rgba(0,0,0,0.6)_80%,transparent_100%)]
          md:inset-y-0 md:left-auto md:right-0 md:w-[52%] md:justify-center
          md:pb-0 md:pt-0 md:px-0
          md:bg-[linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.92)_28%,rgb(0,0,0)_55%)]
        "
      >
        <div className="md:px-14 lg:px-16">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4A017]">
            Sobre nós
          </span>
          <h2
            className="mt-4 text-4xl uppercase leading-tight sm:text-5xl lg:text-[3.25rem]"
            style={{ fontFamily: "var(--font-russo-one)" }}
          >
            Engenharia que{" "}
            <span className="text-[#4c1d95]">conquista</span> outros mundos
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
            A ARES (Aerospace Rover Exploration System) é a equipe oficial de
            Rovers da Universidade de Brasília, vinculada à Engenharia
            Aeroespacial da UnB. Nosso objetivo é desenvolver veículos
            robóticos capazes de operar em terrenos análogos a superfícies
            extraterrestres.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
            Atuamos de forma multidisciplinar nas áreas de estruturas,
            dinâmica, eletrônica, telecomunicações e sistemas embarcados,
            integrando ensino, pesquisa e inovação aplicada.
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-6 border-t border-white/15 pt-6">
            <Stat value="5+" label="Subsistemas" />
            <Stat value="30+" label="Membros" />
            <Stat value="∞" label="Ambições" />
          </dl>
        </div>
      </div>
    </section>
  );
}
