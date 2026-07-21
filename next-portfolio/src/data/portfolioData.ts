export interface Project {
  id: string;
  title: string;
  category: 'saas' | 'landing' | 'pwa' | 'institucional';
  categoryLabel: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
  isFeatured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  techs: string[];
}

export interface Service {
  id: string;
  iconName: 'Layers' | 'Rocket' | 'Smartphone' | 'Cpu';
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  benefits: string[];
  deliverables: string[];
  gradient: string;
}

export const PERSONAL_INFO = {
  name: "Alessandro Tostes",
  role: "Desenvolvedor Web Full-Stack",
  subtitle: "Sistemas Web SaaS, Landing Pages de Alta Conversão, PWA & IA",
  location: "Ribeirão Preto - SP",
  status: "Disponível para Projetos",
  bio: "Desenvolvedor especializado em transformar ideias complexas em produtos digitais rápidos, elegantes e lucrativos. Foco em arquitetura limpa, alta velocidade e rastreamento avançado (GTM & Meta Pixel).",
  whatsapp: "https://wa.me/5516997643604?text=Ol%C3%A1%20Alessandro,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20um%20or%C3%A7amento!",
  whatsappNumber: "+55 (16) 99764-3604",
  email: "alessandrotostesarruda@gmail.com",
  github: "https://github.com/alessandrotostes",
  linkedin: "https://www.linkedin.com/in/alessandro-tostes-940972242/",
  website: "https://www.tostesdev.com",
};

export const SERVICES: Service[] = [
  {
    id: "saas",
    iconName: "Layers",
    badge: "Escala & Produto",
    title: "Web Apps SaaS, SPAs & CRMs",
    subtitle: "Sistemas completos para rentabilizar seu negócio digital",
    description: "Desenvolvimento de plataformas web robustas com autenticação segura, gateways de pagamento (Mercado Pago, Stripe), dashboards em tempo real e segregação de permissões de usuário (RBAC).",
    benefits: [
      "Arquitetura escalável pronta para milhares de usuários simultâneos",
      "Segurança de dados e conformidade com LGPD",
      "Painéis gerenciais inteligentes com gráficos e relatórios exportáveis"
    ],
    deliverables: ["Node.js & NestJS", "PostgreSQL & Supabase", "AWS & Google Cloud (GCP)", "Firebase & Gateways"],
    gradient: "from-sky-500 to-indigo-600"
  },
  {
    id: "landing",
    iconName: "Rocket",
    badge: "Conversão Imediata",
    title: "Landing Pages Premium",
    subtitle: "Design visual impactante com velocidade imbatível",
    description: "Páginas estratégicas desenhadas sob medida para transformar visitantes em clientes compradores. Layout Mobile-First extremamente fluido com pontuação máxima no Google Lighthouse.",
    benefits: [
      "Taxa de conversão elevada com copy e chamadas de ação direcionadas",
      "Carregamento ultra-rápido (Core Web Vitals zerados em latência)",
      "SEO Avançado com marcação de dados Schema.org para topo do Google"
    ],
    deliverables: ["Design Exclusivo", "SEO Técnico Avançado", "Micro-animações Leves", "Integração Analytics & Pixel"],
    gradient: "from-emerald-400 to-teal-600"
  },
  {
    id: "pwa",
    iconName: "Smartphone",
    badge: "Experiência Mobile",
    title: "Soluções PWA (Progressive Web Apps)",
    subtitle: "Seu aplicativo direto no celular do cliente sem intermediários",
    description: "Entregue a experiência de um aplicativo nativo diretamente através do navegador móvel (iOS e Android), economizando tempo e evitando as taxas e restrições das lojas de aplicativos.",
    benefits: [
      "Instalação instantânea com ícone na tela inicial sem ocupar espaço extra",
      "Navegação fluida sem barras do navegador e suporte a modo offline",
      "Notificações Push para reengajar clientes com promoções e avisos"
    ],
    deliverables: ["PWA Manifest", "Service Workers Otimizados", "Offline Caching", "Atalho Tela Inicial"],
    gradient: "from-violet-500 to-purple-600"
  },
  {
    id: "ia",
    iconName: "Cpu",
    badge: "Automação & Futuro",
    title: "Engenharia de IA & Código Assistido",
    subtitle: "Acelere processos e integre Inteligência Artificial",
    description: "Criação de soluções inteligentes integradas a LLMs (OpenAI, Gemini, Claude), automação de rotinas operacionais e aplicação de engenharia de contexto para produtos digitais.",
    benefits: [
      "Redução drástica de tempo em tarefas manuais e repetitivas",
      "Atendimento inteligente e assistentes virtuais de alta precisão",
      "Integração contínua de IA em pipelines corporativos"
    ],
    deliverables: ["Engenharia de Prompt & Contexto", "Integração LLMs/APIs", "Agentes & Workflows n8n", "Assistentes Virtuais"],
    gradient: "from-cyan-400 to-blue-600"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "an-agendamentos",
    title: "A&N Agendamentos",
    category: "saas",
    categoryLabel: "SaaS Multi-tenant & PWA",
    description: "Ecossistema completo de agendamentos e gestão comercial conectando clientes, estabelecimentos e profissionais.",
    fullDescription: "Desenvolvido do zero para ser uma solução leve e completa para salões, barbearias e clínicas. Possui 3 visões segregadas via RBAC: Painel do Cliente (para reserva em segundos), Painel do Estabelecimento (gestão financeira e de equipe) e Painel do Profissional (agenda individual). Suporta PWA e cobranças via Mercado Pago.",
    image: "/img/gestaowebapp.webp",
    tags: ["Next.js", "Firebase", "Node.js", "PWA", "Mercado Pago"],
    features: [
      "Três níveis de acesso segregados por função (RBAC)",
      "Checkout integrado com pagamentos via PIX e cartão",
      "Suporte PWA completo para instalação nativa no celular",
      "Notificações de confirmação e dashboards em tempo real"
    ],
    demoUrl: "https://anagendamentos.com.br",
    isFeatured: true
  },
  {
    id: "erp-petroleo",
    title: "ERP Indústria Petrolífera",
    category: "saas",
    categoryLabel: "Web App Corporativo",
    description: "Sistema de gestão industrial para controle de produção, manutenção e inventário com dados em tempo real.",
    fullDescription: "Desenvolvido para gerenciar a operação complexa do setor de óleo e gás. Oferece visualização clara do inventário de tanques, agendas de manutenção preventiva e relatórios estatísticos com gráficos interativos.",
    image: "/img/petroleowebapp.webp",
    tags: ["React", "Firebase Functions", "Node.js", "Recharts", "PapaParse"],
    features: [
      "Módulos de Produção, Manutenção e Inventário",
      "Gráficos estatísticos interativos em tempo real",
      "Importação e exportação de planilhas pesadas em segundos",
      "Alertas automatizados de estoque crítico"
    ],
    isFeatured: true
  },
  {
    id: "controle-financeiro",
    title: "Controle Financeiro Pessoal",
    category: "pwa",
    categoryLabel: "Web App / PWA",
    description: "Plataforma para gestão financeira diária, controle de despesas e metas de economia com gráficos interativos.",
    fullDescription: "Aplicação PWA responsiva projetada para acompanhamento financeiro instantâneo. Conta com categorização inteligente de gastos, suporte a metas mensais e dados criptografados por usuário.",
    image: "/img/gestaomensal.webp",
    tags: ["React", "Firebase Auth", "Firestore", "Chart.js", "PWA"],
    features: [
      "Autenticação individual segura",
      "Gráficos de pizza e barras para evolução mensal",
      "Definição e progresso de metas de economia",
      "Interface limpa e rápida otimizada para mobile"
    ],
    githubUrl: "https://github.com/alessandrotostes/controle-de-gastos",
    isFeatured: true
  },
  {
    id: "gestao-consultas",
    title: "Gestão de Consultas & Aulas",
    category: "saas",
    categoryLabel: "Web App Full-Stack",
    description: "Sistema para profissionais autônomos gerenciarem agendas, pacientes/alunos e finanças de forma unificada.",
    fullDescription: "Solução desenhada para psicólogos, personal trainers e consultores. Oferece controle de prontuários/fichas, confirmação de presença e acompanhamento de receita mensal.",
    image: "/img/gestaowebapp.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Radix UI"],
    features: [
      "Banco de dados relacional seguro com Supabase (RLS)",
      "Agenda dinâmica com suporte a remarcação rápida",
      "Controle financeiro de recebimentos pendentes"
    ],
    githubUrl: "https://github.com/alessandrotostes",
    isFeatured: false
  },
  {
    id: "site-psicanalista",
    title: "Website Psicanalista Tauana Pavanelli",
    category: "landing",
    categoryLabel: "Website Institucional",
    description: "Presença online humanizada desenvolvida para transmitir acolhimento, serenidade e agendamento simples.",
    fullDescription: "Website focado na experiência do paciente, com paleta de cores terapêutica, tipografia de alta legibilidade e botão de contato direto via WhatsApp.",
    image: "/img/sitepsicanalista.webp",
    tags: ["HTML5", "CSS3", "JavaScript", "SEO Técnico", "WhatsApp API"],
    features: [
      "Carregamento em menos de 1 segundo",
      "Integrado com WhatsApp para agendamento direto",
      "Otimização completa para buscadores (SEO)"
    ],
    demoUrl: "https://tauanapavanelli.com/",
    isFeatured: false
  },
  {
    id: "cervejaria-fratelli",
    title: "Cervejaria Fratelli",
    category: "institucional",
    categoryLabel: "Website Institucional",
    description: "Website moderno e artesanal para a cervejaria referência em Vitória-ES com catálogo interativo.",
    fullDescription: "Projeto que une a essência artesanal da cervejaria com tecnologia web moderna. Oferece catálogo interativo de rótulos, história da marca e direcionamento para pedidos.",
    image: "/img/sitecervejariafratelli.webp",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    features: [
      "Design temático artesanal refinado",
      "Apresentação interativa dos rótulos de cerveja",
      "Layout 100% responsivo para mobile e desktop"
    ],
    demoUrl: "https://alessandrotostes.github.io/cervejaria_fratelli/",
    isFeatured: false
  },
  {
    id: "nova-solucoes",
    title: "Nova Soluções ACM",
    category: "landing",
    categoryLabel: "Landing Page Corporativa",
    description: "Landing page institucional para empresa de engenharia de fachadas e revestimentos em alumínio.",
    fullDescription: "Página criada para destacar a imponência dos projetos em ACM, apresentando galeria de obras executadas, depoimentos de clientes e formulário direto de orçamento.",
    image: "/img/sitenovasolucoes.webp",
    tags: ["React", "Tailwind CSS", "SEO", "Mobile First"],
    features: [
      "Galeria de projetos de alta resolução",
      "Formulário rápido de cotação",
      "Alta taxa de conversão para vendas B2B"
    ],
    isFeatured: false
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "GCB Investimentos",
    role: "Full Stack Developer",
    period: "2025 - Atual",
    description: "Desenvolvimento e evolução de sistemas financeiros de alta disponibilidade e microserviços.",
    achievements: [
      "Arquitetura de microsserviços com NestJS, Prisma e PostgreSQL",
      "Deploy e monitoramento de serviços em AWS (Amplify, ECS, S3, EventBridge)",
      "Criação de interfaces reativas em React e Vite para investidores"
    ],
    techs: ["React", "Vite", "PostgreSQL", "NestJS", "Prisma", "AWS S3/ECS", "EventBridge"]
  },
  {
    company: "A&N Agendamentos",
    role: "Founder & Full Stack Lead",
    period: "2025 - Atual",
    description: "Liderança técnica e desenvolvimento 100% autônomo do produto SaaS multi-tenant.",
    achievements: [
      "Modelagem de dados NoSQL e regras avançadas de segurança RBAC no Firebase",
      "Integração de pagamentos com webhook automatizado do Mercado Pago",
      "Implementação da camada PWA aumentando a retenção móvel dos usuários"
    ],
    techs: ["Next.js/React", "Node.js", "Firebase Auth/Firestore", "GCP", "Mercado Pago API"]
  },
  {
    company: "ERP Petróleo & Gás",
    role: "Lead Developer",
    period: "2024",
    description: "Concepção e construção de dashboard industrial para controle operacional corporativo.",
    achievements: [
      "Processamento otimizado de relatórios em tempo real com PapaParse e Recharts",
      "Automação de rotinas com Cron Jobs em Firebase Functions",
      "Redução de 40% no tempo de emissão de relatórios de inventário"
    ],
    techs: ["React", "Firebase Functions", "Node.js", "Cron Jobs", "Recharts"]
  },
  {
    company: "Consultor Front-End & Otimização",
    role: "Autônomo / Freelancer",
    period: "2023 - Atual",
    description: "Consultoria em modernização de código, performance de sites e SEO técnico.",
    achievements: [
      "Instalação e mensuração com Google Tag Manager, GA4, Meta Pixel e tracking de conversão",
      "Implementação de metadados ricos (Schema.org) para destaque nos buscadores",
      "Otimização de Core Web Vitals zerando travamentos e atrasos visuais"
    ],
    techs: ["Performance Web", "SEO Técnico", "GTM & Meta Pixel", "Core Web Vitals", "CSS3 / Tailwind"]
  }
];

export const TECH_ARSENAL = {
  frontend: ["React 19", "Vite", "Next.js", "TypeScript 5", "HTML5/CSS3", "Tailwind CSS", "Lucide Icons", "TanStack Query", "Redux Toolkit"],
  backend: ["Node.js", "NestJS", "PostgreSQL", "Google Cloud (GCP)", "AWS (S3/ECS/Amplify)", "Firebase", "Supabase", "Prisma ORM", "Redis"],
  quality: ["Jest", "Vitest", "Playwright", "Docker", "GitHub Actions", "ESLint", "GTM / Meta Pixel / GA4"],
  architecture: ["Clean Architecture", "SOLID", "Princípios DRY & KISS", "Design Patterns (GoF)", "RBAC", "OAuth 2.0 / JWT", "Zod", "Webhooks", "Microservices"],
  ai: ["Claude Code", "AGY CLI", "Context Engineering", "Antigravity", "Gemini API", "Prompt Engineering", "RAG"]
};

export const PWA_VIDEOS = [
  {
    id: "cliente",
    title: "Visão do Cliente",
    subtitle: "Agendamento rápido e prático",
    description: "O cliente navega pelos serviços, escolhe o profissional, seleciona o horário disponível e conclui o agendamento em poucos toques.",
    video: "/video/cliente.mp4"
  },
  {
    id: "estabelecimento",
    title: "Gestão do Estabelecimento",
    subtitle: "Controle total do seu negócio",
    description: "Painel para donos de estabelecimentos gerenciarem comissão de equipe, histórico financeiro, bloqueio de horários e relatórios.",
    video: "/video/estabelecimento.mp4"
  },
  {
    id: "profissional",
    title: "Painel do Profissional",
    subtitle: "Agenda individual e atendimento",
    description: "Interface dedicada ao prestador de serviços para acompanhar atendimentos do dia, status de pagamento e próximos clientes.",
    video: "/video/profissional.mp4"
  }
];
