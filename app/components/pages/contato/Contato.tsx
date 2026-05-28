import Image from "next/image";
import Link from "next/link";

export default function Contato() {
  return (
    <section
      id="contato"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-black py-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(76,29,149,0.55),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.7)_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center lg:px-10">
        <Image
          src="/Logo_dourada_roxa_dark.png"
          alt="Logo Ares Rovers"
          width={120}
          height={120}
          className="mx-auto h-20 w-20 drop-shadow-[0_0_30px_rgba(212,160,23,0.5)]"
        />
        <h2
          className="mt-8 text-4xl uppercase leading-tight sm:text-5xl lg:text-6xl"
          style={{ fontFamily: "var(--font-russo-one)" }}
        >
          Pronto para{" "}
          <span className="bg-gradient-to-r from-[#D4A017] to-[#F5C842] bg-clip-text text-transparent">
            decolar
          </span>{" "}
          conosco?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base text-white/75 sm:text-lg">
          Entre em contato para parcerias, processos seletivos e oportunidades
          de colaboração com a equipe oficial de Rovers da UnB.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="mailto:ares.unb@gmail.com"
            className="rounded-full bg-[#D4A017] px-8 py-3 text-sm font-semibold text-black transition hover:bg-[#F5C842]"
          >
            Fale conosco
          </Link>
          <Link
            href="https://www.instagram.com/ares.unb/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/40 px-8 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            @ares.unb
          </Link>
        </div>

        <p className="mt-16 text-xs uppercase tracking-[0.3em] text-white/40">
          © {new Date().getFullYear()} Ares Rovers · Universidade de Brasília
        </p>
      </div>
    </section>
  );
}
