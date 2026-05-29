"use client";

import { useEffect } from "react";

// Site de página única: não há rotas como /sobre, /projetos, etc.
// O GitHub Pages serve este 404.html para qualquer caminho desconhecido,
// então redirecionamos para a home, mapeando o caminho para a seção (#) certa.
const BASE = "/ARES_ROVERS_UNB_WEBSITE";

const sections = [
  "hero",
  "sobre",
  "projetos",
  "equipe",
  "patrocinadores",
  "contato",
];

const aliases: Record<string, string> = {
  inicio: "hero",
  "sobre-nos": "sobre",
  sobrenos: "sobre",
  projeto: "projetos",
  patrocinios: "patrocinadores",
  patrocinadore: "patrocinadores",
  contatos: "contato",
};

export default function NotFound() {
  useEffect(() => {
    const base = window.location.pathname.startsWith(BASE) ? BASE : "";

    let path = window.location.pathname;
    if (path.startsWith(base)) path = path.slice(base.length);
    const firstSeg = path.replace(/^\/+|\/+$/g, "").split("/")[0].toLowerCase();
    const mapped = aliases[firstSeg] ?? firstSeg;

    // Também aceita uma âncora válida vinda da URL (ex.: /qualquer#contato)
    const hashSeg = window.location.hash.replace(/^#/, "").split("#")[0].toLowerCase();

    let target = base + "/";
    if (sections.includes(mapped)) target += "#" + mapped;
    else if (sections.includes(hashSeg)) target += "#" + hashSeg;

    window.location.replace(target);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-center text-white">
      <p className="text-sm text-white/70">Redirecionando…</p>
    </main>
  );
}
