import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { PWAShowcase } from "@/components/sections/PWAShowcase";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { Methodology } from "@/components/sections/Methodology";
import { AboutStrategies } from "@/components/sections/AboutStrategies";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <section id="home">
        <Hero />
      </section>
      <Services />
      <PWAShowcase />
      <ProjectShowcase />
      <Methodology />
      <AboutStrategies />
    </main>
  );
}
