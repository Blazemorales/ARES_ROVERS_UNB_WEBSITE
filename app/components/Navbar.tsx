"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logoImg from "@/public/Logo_dourada_roxa_dark.png";

const navLinks = [
  { href: "#hero", label: "Início" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#projetos", label: "Projetos" },
  { href: "#equipe", label: "Equipe" },
  { href: "#patrocinadores", label: "Patrocinadores" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "bg-black/85 backdrop-blur-md"
          : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <nav className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 lg:px-10">
        <Link
          href="#hero"
          className="flex items-center gap-2 justify-self-start"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src={logoImg}
            alt="Ares Rovers"
            width={40}
            height={40}
            preload
            className="h-9 w-9"
          />
        </Link>

        <ul className="hidden items-center gap-7 justify-self-center md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-sm font-medium tracking-wide transition-colors ${
                    isActive
                      ? "text-[#D4A017]"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px w-full origin-left bg-[#D4A017] transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 justify-self-end md:flex">
          <Link
            href="#contato"
            className="rounded-full border border-[#D4A017]/60 bg-[#D4A017]/10 px-5 py-2 text-sm font-semibold text-[#D4A017] transition-colors hover:bg-[#D4A017] hover:text-black"
          >
            Apoie-nos
          </Link>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="col-start-3 flex h-10 w-10 items-center justify-center justify-self-end text-white md:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-6 bg-white transition-transform duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 bg-white transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 block h-0.5 w-6 bg-white transition-transform duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          menuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-8 pt-2">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block border-b border-white/10 py-4 text-base ${
                    isActive ? "text-[#D4A017]" : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="pt-6">
            <Link
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="block rounded-full border border-[#D4A017]/60 bg-[#D4A017]/10 px-5 py-3 text-center text-sm font-semibold text-[#D4A017] hover:bg-[#D4A017] hover:text-black"
            >
              Apoie-nos
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
