"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  BarChart3, 
  Tag, 
  Globe, 
  Activity, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Infinity as InfinityIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionBadge } from "@/components/ui/section-badge";

const integrations = [
  {
    id: "meta-pixel",
    title: "Meta Pixel & API de Conversões",
    subtitle: "Facebook & Instagram Ads",
    icon: InfinityIcon,
    gradient: "from-blue-600 to-indigo-600 dark:from-blue-400/20 dark:to-indigo-400/5",
    features: [
      "Instalação do Pixel e verificação de Domínio no Gerenciador de Negócios.",
      "Configuração da API de Conversões (CAPI) via servidor para máxima precisão.",
      "Mapeamento de eventos padrão (PageView, Lead, Purchase, InitiateCheckout).",
      "Rastreamento avançado contornando bloqueadores de anúncios e iOS 14+."
    ]
  },
  {
    id: "google-analytics",
    title: "Google Analytics 4 (GA4)",
    subtitle: "Monitoramento Avançado de Tráfego",
    icon: BarChart3,
    gradient: "from-orange-600 to-amber-600 dark:from-orange-400/20 dark:to-amber-400/5",
    features: [
      "Instalação do fluxo de dados da tag do GA4.",
      "Configuração de funis de conversão personalizados para vendas ou contatos.",
      "Mensuração otimizada (rolagem, cliques de saída, pesquisas no site).",
      "Definição de campanhas personalizadas via UTM para tráfego pago."
    ]
  },
  {
    id: "tag-manager",
    title: "Google Tag Manager (GTM)",
    subtitle: "Centralização de Tags de Rastreamento",
    icon: Tag,
    gradient: "from-teal-600 to-emerald-600 dark:from-teal-400/20 dark:to-emerald-400/5",
    features: [
      "Estruturação de contêiner para centralizar todos os pixels.",
      "Instalação rápida de novas tags (Hotjar, Google Ads, Meta) sem novos deploys.",
      "Configuração de gatilhos complexos (cliques em botões, envio de formulários).",
      "Redução no tempo de carregamento do site organizando scripts assíncronos."
    ]
  },
  {
    id: "meta-tags",
    title: "Meta Tags & Validação de Domínio",
    subtitle: "Indexação, Anúncios & Verificações",
    icon: Globe,
    gradient: "from-purple-600 to-rose-600 dark:from-purple-400/20 dark:to-rose-400/5",
    features: [
      "Tags OpenGraph e Twitter Cards para previews perfeitos no WhatsApp/Social.",
      "Conexão e verificação de propriedade no Google Search Console.",
      "Instalação de meta tags de autenticação do Meta Ads e Pinterest Ads.",
      "Schema.org estruturado em JSON-LD para indexação de rich snippets."
    ]
  }
];

export function MarketingIntegrations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });



  // Parallax offsets for background grid
  const yBg = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  
  // Connect lines animations: control the stroke offset on scroll
  const strokeDashoffset = useTransform(scrollYProgress, [0.1, 0.8], [600, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative py-24 bg-background overflow-hidden border-t border-primary/5" 
      id="analytics"
    >
      {/* Background Parallax Grid lines */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(33,128,141,0.03),transparent_60%)] pointer-events-none"
      />

      <div className="max-w-[1920px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="mb-4">
              <SectionBadge 
                icon={<Activity className="w-4 h-4 text-primary" />}
                text="Marketing & Rastreamento"
              />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Integrações <span className="text-primary">Analytics & Pixel</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-4 font-light leading-relaxed">
              Estruturação técnica voltada para gestores de tráfego e marcas digitais. Garanta a correta 
              atribuição das suas campanhas pagas com ferramentas configuradas profissionalmente.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-4 rounded-2xl bg-primary/5 border border-primary/20 backdrop-blur-sm flex items-center gap-3 self-start lg:self-auto"
          >
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-xs font-mono text-foreground font-semibold">Pronto para Meta Ads & Google Ads</span>
          </motion.div>
        </div>

        {/* Live Interactive Connecting Flowchart */}
        <div className="hidden lg:block w-full max-w-4xl mx-auto mb-16 relative">
          <svg viewBox="0 0 800 350" className="w-full h-auto drop-shadow-2xl">
            {/* Connecting Paths */}
            <motion.path 
              d="M 400 175 L 270 80" 
              stroke="var(--color-primary)" 
              strokeWidth="2" 
              strokeDasharray="6,6"
              style={{ strokeDashoffset }}
              fill="none" 
              className="opacity-40"
            />
            <motion.path 
              d="M 400 175 L 270 270" 
              stroke="var(--color-primary)" 
              strokeWidth="2" 
              strokeDasharray="6,6"
              style={{ strokeDashoffset }}
              fill="none" 
              className="opacity-40"
            />
            <motion.path 
              d="M 400 175 L 530 80" 
              stroke="var(--color-primary)" 
              strokeWidth="2" 
              strokeDasharray="6,6"
              style={{ strokeDashoffset }}
              fill="none" 
              className="opacity-40"
            />
            <motion.path 
              d="M 400 175 L 530 270" 
              stroke="var(--color-primary)" 
              strokeWidth="2" 
              strokeDasharray="6,6"
              style={{ strokeDashoffset }}
              fill="none" 
              className="opacity-40"
            />

            {/* Central Node: Your Website */}
            <g transform="translate(340, 140)">
              <rect width="120" height="70" rx="20" fill="var(--color-primary)" className="opacity-10 pointer-events-none" />
              <rect width="120" height="70" rx="20" fill="var(--color-background)" stroke="var(--color-primary)" strokeWidth="3" className="filter drop-shadow-[0_0_8px_rgba(33,128,141,0.4)]" />
              <text x="60" y="41" textAnchor="middle" fill="var(--color-foreground)" className="font-sans font-black text-sm uppercase tracking-wider">SEU SITE</text>
            </g>

            {/* Left Top: Meta Pixel */}
            <g transform="translate(80, 50)">
              <rect width="190" height="60" rx="15" fill="var(--color-secondary)" stroke="var(--color-border)" strokeWidth="1" className="opacity-85" />
              <circle cx="28" cy="30" r="14" fill="rgba(99,102,241,0.15)" />
              <text x="28" y="34" textAnchor="middle" fill="#6366f1" className="font-sans font-bold text-xs">∞</text>
              <text x="55" y="28" textAnchor="start" fill="var(--color-foreground)" className="font-sans font-bold text-[11px]">Meta Pixel & CAPI</text>
              <text x="55" y="42" textAnchor="start" fill="var(--color-muted-foreground)" className="font-sans text-[7.5px] uppercase tracking-wider font-semibold">Eventos de Conversão</text>
            </g>

            {/* Left Bottom: Google Analytics */}
            <g transform="translate(80, 240)">
              <rect width="190" height="60" rx="15" fill="var(--color-secondary)" stroke="var(--color-border)" strokeWidth="1" className="opacity-85" />
              <circle cx="28" cy="30" r="14" fill="rgba(245,158,11,0.15)" />
              <path d="M 24 36 L 24 28 M 28 36 L 28 24 M 32 36 L 32 32" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
              <text x="55" y="28" textAnchor="start" fill="var(--color-foreground)" className="font-sans font-bold text-[11px]">Google Analytics 4</text>
              <text x="55" y="42" textAnchor="start" fill="var(--color-muted-foreground)" className="font-sans text-[7.5px] uppercase tracking-wider font-semibold">Monitoramento de Tráfego</text>
            </g>

            {/* Right Top: Tag Manager */}
            <g transform="translate(530, 50)">
              <rect width="190" height="60" rx="15" fill="var(--color-secondary)" stroke="var(--color-border)" strokeWidth="1" className="opacity-85" />
              <circle cx="28" cy="30" r="14" fill="rgba(6,182,212,0.15)" />
              <path d="M 23 30 L 33 30 M 28 25 L 28 35" stroke="#06b6d4" strokeWidth="2" />
              <text x="55" y="28" textAnchor="start" fill="var(--color-foreground)" className="font-sans font-bold text-[11px]">Tag Manager (GTM)</text>
              <text x="55" y="42" textAnchor="start" fill="var(--color-muted-foreground)" className="font-sans text-[7.5px] uppercase tracking-wider font-semibold">Tags Centralizadas</text>
            </g>

            {/* Right Bottom: Search Console */}
            <g transform="translate(530, 240)">
              <rect width="190" height="60" rx="15" fill="var(--color-secondary)" stroke="var(--color-border)" strokeWidth="1" className="opacity-85" />
              <circle cx="28" cy="30" r="14" fill="rgba(139,92,246,0.15)" />
              <circle cx="28" cy="30" r="6" stroke="#8b5cf6" strokeWidth="2" fill="none" />
              <text x="55" y="28" textAnchor="start" fill="var(--color-foreground)" className="font-sans font-bold text-[11px]">Meta Tags & Domínio</text>
              <text x="55" y="42" textAnchor="start" fill="var(--color-muted-foreground)" className="font-sans text-[7.5px] uppercase tracking-wider font-semibold">Verificações de DNS</text>
            </g>
          </svg>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {integrations.map((item, idx) => {
            const Icon = item.icon;
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.015, transition: { duration: 0.2 } }}
                className="group relative rounded-[2.5rem] bg-secondary/20 border border-primary/10 dark:border-white/5 p-6 sm:p-8 backdrop-blur-sm hover:border-primary/30 transition-all flex flex-col justify-between hover:shadow-xl hover:shadow-primary/5 cursor-pointer"
              >
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br shadow-inner",
                      item.gradient
                    )}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold tracking-wider text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full uppercase">
                      Configuração
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-1 leading-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground tracking-wide font-medium mb-6">
                    {item.subtitle}
                  </p>

                  <ul className="space-y-3.5 mb-6">
                    {item.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground font-light leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center gap-2 text-sm font-bold text-primary border-t border-primary/5 pt-4 mt-auto group/btn">
                  <span>Quero essa integração no meu site!</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
