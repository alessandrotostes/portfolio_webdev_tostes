export interface ResumeData {
  experience: {
    company: string;
    role: string;
    period: string;
    description: string;
    techs: string[];
  }[];
  techArsenal: {
    frontend: string[];
    backend: string[];
    quality: string[];
    architecture: string[];
    ai: string[];
  };
}

export const RESUME_DATA: { pt: ResumeData; en: ResumeData } = {
  pt: {
    experience: [
      {
        company: "GCB Investimentos",
        role: "Full Stack Developer",
        period: "2024 - Atual",
        description: "Desenvolvimento e manutenção de sistemas Full Stack",
        techs: ["React", "Vite", "PostgreSQL", "EventBridge", "S3", "Amplify", "ECS", "NestJS", "Prisma"]
      },
      {
        company: "A&N Agendamentos",
        role: "Founder & Full Stack Lead",
        period: "2024 - Atual",
        description: "Projetei e desenvolvi 100% do SaaS multi-tenant utilizando Next.js + Firebase. Foco em dashboards e segregação de dados via RBAC avançado.",
        techs: ["Next.js", "Node.js", "Firebase Auth", "Firebase Functions", "GCP", "Mercado Pago"]
      },
      {
        company: "ERP Petróleo & Gás",
        role: "Lead Developer",
        period: "2024",
        description: "Sistema de gestão para indústria de petróleo. Módulos de Produção, Manutenção e Inventário com dashboards em tempo real.",
        techs: ["React", "Firebase Functions", "Node.js", "Cron Jobs", "Recharts", "PapaParse"]
      },
      {
        company: "Autônomo",
        role: "Consultor Front-End",
        period: "2019 - Atual",
        description: "Modernização de interfaces e otimização de performance. Resultados consistentes de Lighthouse / Core Web Vitals.",
        techs: ["Otimização", "Framer Motion", "SEO Técnico", "Schema.org", "Core Web Vitals"]
      }
    ],
    techArsenal: {
      frontend: ["React 18", "Next.js 16", "TypeScript 5", "Vite", "TanStack Query", "Redux Toolkit", "Server Actions", "RSC", "Tailwind v4", "Framer Motion", "HTML5", "CSS3", "JS", "Git", "GitHub", "GitLab", "Figma"],
      backend: ["Node.js", "NestJS", "Express", "Firebase", "Cloud Messaging", "Cloud Functions", "Edge Runtime", "PostgreSQL", "Supabase", "Redis", "AWS", "GCP"],
      quality: ["Jest", "Vitest", "Playwright", "GitHub Actions", "Docker", "Sentry", "ESLint", "Husky", "Commitlint"],
      architecture: ["Clean Arch", "SOLID", "RBAC", "OAuth 2.0", "JWT", "Zod", "Webhooks", "Microservices", "n8n", "WhatsApp API"],
      ai: ["Claude Code", "AGY CLI", "AI-Driven Dev", "IA Assistida", "Context Engineering", "GitHub Copilot", "Antigravity", "Gemini", "Prompt Engineering", "LLM Integration", "RAG"]
    }
  },
  en: {
    experience: [
      {
        company: "GCB Investimentos",
        role: "Full Stack Developer",
        period: "2024 - Present",
        description: "Full Stack systems development and maintenance.",
        techs: ["React", "Vite", "PostgreSQL", "EventBridge", "S3", "Amplify", "ECS", "NestJS", "Prisma"]
      },
      {
        company: "A&N Agendamentos",
        role: "Founder & Full Stack Lead",
        period: "2024 - Present",
        description: "Architected and developed a 100% multi-tenant SaaS using Next.js + Firebase. Focused on real-time dashboards and strict data segregation via advanced RBAC.",
        techs: ["Next.js", "Node.js", "Firebase Auth", "Firebase Functions", "GCP", "Mercado Pago"]
      },
      {
        company: "ERP Oil & Gas",
        role: "Lead Developer",
        period: "2024",
        description: "Comprehensive management system for the Oil & Gas industry. Modules for Production, Maintenance, and Inventory with real-time analytics.",
        techs: ["React", "Firebase Functions", "Node.js", "Cron Jobs", "Recharts", "PapaParse"]
      },
      {
        company: "Freelance",
        role: "Front-End Consultant",
        period: "2019 - Present",
        description: "Interface modernization and performance optimization expert. Delivering consistent top-tier Lighthouse / Core Web Vitals scores.",
        techs: ["Optimization", "Framer Motion", "Technical SEO", "Schema.org", "Core Web Vitals"]
      }
    ],
    techArsenal: {
      frontend: ["React 18", "Next.js 16", "TypeScript 5", "Vite", "TanStack Query", "Redux Toolkit", "Server Actions", "RSC", "Tailwind v4", "Framer Motion", "HTML5", "CSS3", "JS", "Git", "GitHub", "GitLab", "Figma"],
      backend: ["Node.js", "NestJS", "Express", "Firebase", "Cloud Messaging", "Cloud Functions", "Edge Runtime", "PostgreSQL", "Supabase", "Redis", "AWS", "GCP"],
      quality: ["Jest", "Vitest", "Playwright", "GitHub Actions", "Docker", "Sentry", "ESLint", "Husky", "Commitlint"],
      architecture: ["Clean Arch", "SOLID", "RBAC", "OAuth 2.0", "JWT", "Zod", "Webhooks", "Microservices", "n8n", "WhatsApp API"],
      ai: ["Claude Code", "AGY CLI", "AI-Driven Dev", "IA Assistida", "Context Engineering", "GitHub Copilot", "Antigravity", "Gemini", "Prompt Engineering", "LLM Integration", "RAG"]
    }
  }
};

// Backward compatibility for existing components
export const EXPERIENCE = RESUME_DATA.pt.experience;
export const TECH_ARSENAL = RESUME_DATA.pt.techArsenal;
