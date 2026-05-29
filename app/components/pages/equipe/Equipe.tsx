import Image from "next/image";
import Link from "next/link";
// TODO: trocar pelo arquivo IMG_2637.jpg (ainda não adicionado em public/).
// Placeholder temporário usando a foto da equipe.
import equipeCampoImg from "@/public/equipe.jpg";

export default function Equipe() {
  return (
    <section
      id="equipe"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#4c1d95] py-24 text-white"
    >
      <div className="absolute inset-y-0 right-0 w-full md:w-1/2 lg:w-3/5">
        <Image
          src={equipeCampoImg}
          alt="Equipe Ares em campo"
          fill
          className="object-cover object-[center_40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#4c1d95] via-[#4c1d95]/55 to-transparent md:via-[#4c1d95]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_85%,rgba(212,160,23,0.18),transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-xl">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4A017]">
            Equipe
          </span>
          <h2
            className="mt-4 text-4xl uppercase leading-tight sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-russo-one)" }}
          >
            A força por trás do <span className="text-[#D4A017]">Rover</span>
          </h2>
          <p className="mt-6 text-base text-white/85 sm:text-lg">
            Estudantes de diversas engenharias trabalhando em conjunto:
            mecânica, eletrônica, software, telecomunicações e gestão. Uma
            equipe que projeta, prototipa e voa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="https://www.instagram.com/ares.unb/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#D4A017] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#F5C842]"
            >
              Siga no Instagram
            </Link>
            <Link
              href="https://www.linkedin.com/company/aresunb/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
