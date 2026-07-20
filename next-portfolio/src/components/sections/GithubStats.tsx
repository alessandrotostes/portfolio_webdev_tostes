"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Github, 
  MapPin, 
  Terminal, 
  Sparkles, 
  Loader2,
  Calendar,
  ExternalLink
} from "lucide-react";
import Link from "next/link";
import { SectionBadge } from "@/components/ui/section-badge";

interface GithubProfile {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  location: string;
  html_url: string;
}

export function GithubStats() {
  const [profile, setProfile] = useState<GithubProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax shifts for background decor
  const ySnippet1 = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const ySnippet2 = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const opacitySnippet = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    async function fetchGithubData() {
      try {
        setLoading(true);
        // Fetch profile
        const profileRes = await fetch("https://api.github.com/users/alessandrotostes");
        if (!profileRes.ok) throw new Error("Failed to fetch profile");
        const profileData = await profileRes.json();

        setProfile(profileData);
      } catch (err) {
        console.error("Error fetching GitHub data:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchGithubData();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative py-24 bg-background overflow-hidden border-t border-primary/5" 
      id="github"
    >
      {/* Scroll-Parallax Background Code Snippets */}
      <motion.div 
        style={{ y: ySnippet1, opacity: opacitySnippet }} 
        className="absolute top-[20%] left-[-2%] md:left-[5%] text-[10px] sm:text-xs font-mono text-primary/10 select-none pointer-events-none hidden sm:block whitespace-pre-wrap max-w-xs"
      >
        {`const developer = {
  name: "Alessandro Tostes",
  role: "Full Stack Engineer",
  heatmap: "Active Contributions",
  analytics: "Google & Meta Pixel Ready"
};`}
      </motion.div>

      <motion.div 
        style={{ y: ySnippet2, opacity: opacitySnippet }} 
        className="absolute bottom-[20%] right-[-2%] md:right-[5%] text-[10px] sm:text-xs font-mono text-rose-500/10 select-none pointer-events-none hidden sm:block whitespace-pre-wrap max-w-xs"
      >
        {`// Tracking Integrations
const pixel = new MetaPixel("PIXEL_ID");
pixel.track("PageView");
pixel.track("Conversion");`}
      </motion.div>

      <div className="max-w-[1920px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="mb-4">
            <SectionBadge 
              icon={<Github className="w-4 h-4 text-primary" />}
              text="Open Source Activity"
            />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/80">
              Atividade no{" "}
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-primary to-rose-400">
              GitHub
            </span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Integração em tempo real que reflete minha consistência e ritmo de codificação direto na nuvem.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
            <p className="text-muted-foreground text-sm font-mono animate-pulse">
              Consultando api.github.com...
            </p>
          </div>
        )}

        {/* Error State */}
        {!loading && (error || !profile) && (
          <div className="max-w-4xl mx-auto p-8 rounded-3xl border border-rose-500/20 bg-rose-500/5 text-center backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-2 text-rose-500">Erro ao carregar perfil do GitHub</h3>
            <p className="text-muted-foreground mb-6">
              Não conseguimos nos conectar à API do GitHub no momento. Você pode conferir minhas contribuições diretamente no meu perfil.
            </p>
            <Link 
              href="https://github.com/alessandrotostes" 
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all"
            >
              Acessar GitHub <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* Loaded Content */}
        {!loading && profile && (
          <div className="flex flex-col gap-8 max-w-5xl mx-auto">
            
            {/* Bento Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              
              {/* Profile Card */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="md:col-span-2 rounded-[2.5rem] bg-secondary/30 border border-primary/10 dark:border-white/5 p-6 sm:p-8 backdrop-blur-sm flex flex-col justify-center relative overflow-hidden group hover:border-primary/20 transition-all"
              >
                <div className="absolute top-0 right-0 -m-8 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all" />
                
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center relative z-10">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-primary/20 dark:border-white/10 shadow-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={profile.avatar_url} 
                      alt={profile.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                      {profile.name || profile.login}
                      <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                    </h3>
                    <p className="text-sm font-mono text-primary font-medium">@{profile.login}</p>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed font-light">
                      {profile.bio || "Desenvolvedor Full Stack & AI Engineer. Construindo o futuro da web."}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Terminal Status Card */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="rounded-[2.5rem] bg-secondary/30 border border-primary/10 dark:border-white/5 p-6 sm:p-8 backdrop-blur-sm flex flex-col justify-between relative overflow-hidden group hover:border-primary/20 transition-all"
              >
                <div className="absolute top-0 right-0 -m-8 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl group-hover:bg-rose-500/10 transition-all" />
                
                <div className="flex flex-col gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Status do Terminal</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">
                    Ativo codando diariamente. Comprometido com entrega contínua, automações e códigos limpos.
                  </p>
                </div>

                <div className="flex flex-col gap-3 mt-4 border-t border-primary/10 dark:border-white/5 pt-4 relative z-10">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground font-mono">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{profile.location || "Ribeirão Preto, SP"}</span>
                  </div>
                  <Link 
                    href={profile.html_url} 
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm text-primary font-bold hover:underline"
                  >
                    Bora dar uma espiada no meu GitHub <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* GitHub Contributions Heatmap */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-[2.5rem] bg-secondary/20 border border-primary/10 dark:border-white/5 p-6 sm:p-8 backdrop-blur-sm flex flex-col gap-6 relative overflow-hidden group hover:border-primary/20 transition-all"
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Mapa de Calor (Contribuições)</h3>
              </div>
              
              {/* Responsive chart container */}
              <div className="w-full overflow-x-auto no-scrollbar py-2 border border-primary/5 rounded-2xl bg-black/10 dark:bg-black/20 p-4">
                <div className="min-w-[700px] flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="https://ghchart.rshah.org/6366f1/alessandrotostes" 
                    alt="Alessandro Tostes GitHub Contributions" 
                    className="w-full max-w-4xl h-auto select-none pointer-events-none filter dark:brightness-110"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
                <span>Rhythm of code: de segunda a domingo.</span>
                <span className="flex items-center gap-1">
                  Cor temática personalizada: <span className="w-3 h-3 rounded-full bg-primary inline-block" /> #6366f1
                </span>
              </div>
            </motion.div>

          </div>
        )}

      </div>
    </section>
  );
}
