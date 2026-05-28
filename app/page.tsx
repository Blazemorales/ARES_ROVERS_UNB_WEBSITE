import Hero from "./components/pages/hero/Hero";
import Sobre from "./components/pages/sobre/Sobre";
import Projetos from "./components/pages/projetos/Projetos";
import Equipe from "./components/pages/equipe/Equipe";
import Patrocinadores from "./components/pages/patrocinadores/Patrocinadores";
import Contato from "./components/pages/contato/Contato";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Sobre />
      <Projetos />
      <Equipe />
      <Patrocinadores />
      <Contato />
    </main>
  );
}
