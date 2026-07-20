import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { PWAShowcase } from "@/components/sections/PWAShowcase";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { Methodology } from "@/components/sections/Methodology";
import { AboutStrategies } from "@/components/sections/AboutStrategies";
import { GithubStats } from "@/components/sections/GithubStats";
import { MarketingIntegrations } from "@/components/sections/MarketingIntegrations";
import { ZoomParallax } from "@/components/ui/zoom-parallax";

const parallaxImages = [
  { src: "/img/petroleowebapp.webp", alt: "ERP Web App" },
  { src: "/img/gestaomensal.webp", alt: "Controle Financeiro" },
  { src: "/img/gestaowebapp.webp", alt: "Gestão de Consultas" },
  { src: "/img/sitepsicanalista.webp", alt: "Psicanalista" },
  { src: "/img/sitenovasolucoes.webp", alt: "Nova Soluções ACM" },
  { src: "/img/sitecervejariafratelli.webp", alt: "Cervejaria Fratelli" },
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <section id="home">
        <Hero />
      </section>

      {/* Zoom Parallax Experience Tunnel (Desktop Only) */}
      <section className="hidden md:block relative z-20 bg-background/40 backdrop-blur-sm border-t border-primary/5">
        <div className="text-center pt-24 pb-12 max-w-3xl mx-auto px-4">
          <span className="text-primary font-mono text-xs uppercase tracking-widest block mb-4">Portfólio Interativo</span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-foreground">
            Desvendando Soluções
          </h2>
          <p className="text-muted-foreground mt-4 font-light text-sm sm:text-base">
            Role a tela para mergulhar no portal de experiências e ver os projetos se expandirem em detalhes.
          </p>
        </div>
        <ZoomParallax images={parallaxImages} />
      </section>

      <Services />
      <PWAShowcase />
      <MarketingIntegrations />
      <ProjectShowcase />
      <Methodology />
      <AboutStrategies />
      <GithubStats />
    </main>
  );
}
