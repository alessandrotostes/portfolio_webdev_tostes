export interface TranslationSchema {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  nav: {
    home: string;
    services: string;
    pwa: string;
    projects: string;
    experience: string;
    methodology: string;
    contact: string;
    ctaWhatsApp: string;
    ctaEmail: string;
  };
  hero: {
    status: string;
    location: string;
    headingPrefix: string;
    headingHighlight: string;
    headingSuffix: string;
    subheading: string;
    pills: string[];
    ctaPrimaryWhatsapp: string;
    ctaPrimaryEmail: string;
    ctaSecondaryProjects: string;
    badgeTitle: string;
    badgeRole: string;
    badgeTopCode: string;
    metricTrackingTitle: string;
    metricTrackingDesc: string;
    metricExpTitle: string;
    metricExpDesc: string;
    stackTitle: string;
    stackItems: string[];
  };
  services: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    benefitsLabel: string;
    cta: string;
    items: {
      saas: {
        badge: string;
        title: string;
        subtitle: string;
        description: string;
        benefits: string[];
        deliverables: string[];
      };
      landing: {
        badge: string;
        title: string;
        subtitle: string;
        description: string;
        benefits: string[];
        deliverables: string[];
      };
      pwa: {
        badge: string;
        title: string;
        subtitle: string;
        description: string;
        benefits: string[];
        deliverables: string[];
      };
      ia: {
        badge: string;
        title: string;
        subtitle: string;
        description: string;
        benefits: string[];
        deliverables: string[];
      };
    };
  };
  pwaShowcase: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    tabsHeader: string;
    tabsSubheader: string;
    playing: string;
    adv1Title: string;
    adv1Desc: string;
    adv2Title: string;
    adv2Desc: string;
    videos: {
      cliente: {
        title: string;
        subtitle: string;
        description: string;
      };
      estabelecimento: {
        title: string;
        subtitle: string;
        description: string;
      };
      profissional: {
        title: string;
        subtitle: string;
        description: string;
      };
    };
  };
  projects: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    featuredBadge: string;
    viewDetails: string;
    filters: {
      all: string;
      saas: string;
      landing: string;
      pwa: string;
      institucional: string;
    };
    modal: {
      about: string;
      features: string;
      techs: string;
      viewCode: string;
      demoUrl: string;
    };
    items: {
      anAgendamentos: {
        title: string;
        categoryLabel: string;
        description: string;
        fullDescription: string;
        features: string[];
      };
      erpPetroleo: {
        title: string;
        categoryLabel: string;
        description: string;
        fullDescription: string;
        features: string[];
      };
      controleFinanceiro: {
        title: string;
        categoryLabel: string;
        description: string;
        fullDescription: string;
        features: string[];
      };
      gestaoConsultas: {
        title: string;
        categoryLabel: string;
        description: string;
        fullDescription: string;
        features: string[];
      };
      sitePsicanalista: {
        title: string;
        categoryLabel: string;
        description: string;
        fullDescription: string;
        features: string[];
      };
      cervejariaFratelli: {
        title: string;
        categoryLabel: string;
        description: string;
        fullDescription: string;
        features: string[];
      };
      novaSolucoes: {
        title: string;
        categoryLabel: string;
        description: string;
        fullDescription: string;
        features: string[];
      };
    };
  };
  experience: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    deliveriesLabel: string;
    items: Array<{
      company: string;
      role: string;
      period: string;
      description: string;
      achievements: string[];
    }>;
  };
  techArsenal: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    categories: {
      frontend: string;
      backend: string;
      quality: string;
      architecture: string;
      ai: string;
    };
  };
  methodology: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    qualityGuarantee: string;
    pillars: Array<{
      title: string;
      badge: string;
      description: string;
    }>;
  };
  contact: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    whatsappTitle: string;
    whatsappAction: string;
    emailTitle: string;
    emailAction: string;
    locationText: string;
    socialHeading: string;
    socialSubheading: string;
    githubLabel: string;
    linkedinLabel: string;
  };
  footer: {
    rights: string;
    scrollTop: string;
  };
}

export const translations: Record<'pt' | 'en', TranslationSchema> = {
  pt: {
    meta: {
      title: "Alessandro Tostes | Desenvolvedor Web Full-Stack & Especialista em SaaS",
      description: "Desenvolvedor Web Full-Stack em Ribeirão Preto (SP). Soluções web de alta performance: Web Apps SaaS, Landing Pages de alta conversão, PWA e IA.",
      keywords: "Desenvolvedor Web Full-Stack, Web Apps SaaS, Landing Pages, PWA, Ribeirão Preto, React, Node.js, TypeScript, Next.js, Automação IA"
    },
    nav: {
      home: "Início",
      services: "Serviços",
      pwa: "PWA SaaS",
      projects: "Portfólio",
      experience: "Experiência",
      methodology: "Metodologia",
      contact: "Contato",
      ctaWhatsApp: "Falar no WhatsApp",
      ctaEmail: "Enviar E-mail"
    },
    hero: {
      status: "Disponível para Projetos",
      location: "Ribeirão Preto - SP",
      headingPrefix: "Transformo ideias complexas em ",
      headingHighlight: "Sistemas Web & SaaS",
      headingSuffix: " de alta performance.",
      subheading: "Desenvolvedor Web Full-Stack especialista em Web Apps SaaS, Landing Pages de alta conversão, soluções PWA nativas e inteligência artificial.",
      pills: [
        "Google Tag Manager & Meta Pixel",
        "Mobile-First & PWA",
        "Bancos de Dados SQL & NoSQL",
        "Engenharia de IA"
      ],
      ctaPrimaryWhatsapp: "Iniciar Projeto no WhatsApp",
      ctaPrimaryEmail: "Solicitar Orçamento por E-mail",
      ctaSecondaryProjects: "Ver Portfólio de Projetos",
      badgeTitle: "Alessandro Tostes",
      badgeRole: "Full Stack Developer",
      badgeTopCode: "TOP CODE",
      metricTrackingTitle: "GTM & Pixel",
      metricTrackingDesc: "Tracking & Analytics",
      metricExpTitle: "+2 Anos",
      metricExpDesc: "Dev Full-Stack",
      stackTitle: "Stack Principal & Ferramentas",
      stackItems: [
        "React 19",
        "Vite",
        "Next.js",
        "TypeScript",
        "Node.js",
        "SQL",
        "NoSQL",
        "PWA",
        "IA Integrada"
      ]
    },
    services: {
      badge: "Soluções Sob Medida",
      titlePrefix: "Serviços desenhados para ",
      titleHighlight: "gerar resultados reais",
      description: "Do planejamento de arquitetura até a entrega final com código limpo, suporte a PWA e velocidade máxima no celular.",
      benefitsLabel: "Principais Benefícios:",
      cta: "Solicitar Proposta para este Serviço",
      items: {
        saas: {
          badge: "Escala & Produto",
          title: "Web Apps SaaS, SPAs & CRMs",
          subtitle: "Sistemas completos para rentabilizar seu negócio digital",
          description: "Desenvolvimento de plataformas web robustas com autenticação segura, gateways de pagamento (Mercado Pago, Stripe), dashboards em tempo real, segregação de permissões (RBAC) e arquitetura de dados em SQL e NoSQL.",
          benefits: [
            "Arquitetura escalável pronta para milhares de usuários simultâneos",
            "Segurança de dados e conformidade com LGPD",
            "Painéis gerenciais inteligentes com gráficos e relatórios exportáveis"
          ],
          deliverables: ["Node.js & NestJS", "Bancos de Dados SQL", "Bancos de Dados NoSQL", "AWS & GCP / Gateways"]
        },
        landing: {
          badge: "Conversão Imediata",
          title: "Landing Pages Premium",
          subtitle: "Design visual impactante com velocidade imbatível",
          description: "Páginas estratégicas desenhadas sob medida para transformar visitantes em clientes compradores. Layout Mobile-First extremamente fluido com pontuação máxima no Google Lighthouse.",
          benefits: [
            "Taxa de conversão elevada com copy e chamadas de ação direcionadas",
            "Carregamento ultra-rápido (Core Web Vitals zerados em latência)",
            "SEO Avançado com marcação de dados Schema.org para topo do Google"
          ],
          deliverables: ["Design Exclusivo", "SEO Técnico Avançado", "Micro-animações Leves", "Integração Analytics & Pixel"]
        },
        pwa: {
          badge: "Experiência Mobile",
          title: "Soluções PWA (Progressive Web Apps)",
          subtitle: "Seu aplicativo direto no celular do cliente sem intermediários",
          description: "Entregue a experiência de um aplicativo nativo diretamente através do navegador móvel (iOS e Android), economizando tempo e evitando as taxas e restrições das lojas de aplicativos.",
          benefits: [
            "Instalação instantânea com ícone na tela inicial sem ocupar espaço extra",
            "Navegação fluida sem barras do navegador e suporte a modo offline",
            "Notificações Push para reengajar clientes com promoções e avisos"
          ],
          deliverables: ["PWA Manifest", "Service Workers Otimizados", "Offline Caching", "Atalho Tela Inicial"]
        },
        ia: {
          badge: "Automação & Futuro",
          title: "Engenharia de IA & Código Assistido",
          subtitle: "Acelere processos e integre Inteligência Artificial",
          description: "Criação de soluções inteligentes integradas a LLMs (OpenAI, Gemini, Claude), automação de rotinas operacionais e aplicação de engenharia de contexto para produtos digitais.",
          benefits: [
            "Redução drástica de tempo em tarefas manuais e repetitivas",
            "Atendimento inteligente e assistentes virtuais de alta precisão",
            "Integração contínua de IA em pipelines corporativos"
          ],
          deliverables: ["Engenharia de Prompt & Contexto", "Integração LLMs/APIs", "Agentes & Workflows n8n", "Assistentes Virtuais"]
        }
      }
    },
    pwaShowcase: {
      badge: "Produto SaaS PWA em Destaque",
      titlePrefix: "A&N Agendamentos ",
      titleHighlight: "(SaaS Multi-tenant)",
      description: "Uma plataforma de alta tecnologia PWA que elimina a necessidade de publicar em lojas de aplicativos, oferecendo instalação instantânea e navegação em tela cheia.",
      tabsHeader: "Explore as 3 visões do sistema:",
      tabsSubheader: "Alterne entre as abas abaixo para visualizar os vídeos de cada módulo em funcionamento real:",
      playing: "REPRODUZINDO",
      adv1Title: "Zero Comissões de Loja",
      adv1Desc: "Instalação direta via Safari ou Chrome sem depender de Apple Store ou Google Play.",
      adv2Title: "Velocidade Nativa",
      adv2Desc: "Carregamento instantâneo, atalho na tela inicial e resposta fluida em qualquer aparelho.",
      videos: {
        cliente: {
          title: "Visão do Cliente",
          subtitle: "Agendamento rápido e prático",
          description: "O cliente navega pelos serviços, escolhe o profissional, seleciona o horário disponível e conclui o agendamento em poucos toques."
        },
        estabelecimento: {
          title: "Gestão do Estabelecimento",
          subtitle: "Controle total do seu negócio",
          description: "Painel para donos de estabelecimentos gerenciarem comissão de equipe, histórico financeiro, bloqueio de horários e relatórios."
        },
        profissional: {
          title: "Painel do Profissional",
          subtitle: "Agenda individual e atendimento",
          description: "Interface dedicada ao prestador de serviços para acompanhar atendimentos do dia, status de pagamento e próximos clientes."
        }
      }
    },
    projects: {
      badge: "Portfólio Real",
      titlePrefix: "Projetos que ",
      titleHighlight: "geram impacto",
      description: "Navegue pelos sistemas desenvolvidos com foco em performance, experiência de usuário e alto retorno.",
      featuredBadge: "DESTAQUE",
      viewDetails: "Ver Detalhes",
      filters: {
        all: "Todos os Projetos",
        saas: "Web Apps & SaaS",
        landing: "Landing Pages",
        pwa: "Soluções PWA",
        institucional: "Institucional"
      },
      modal: {
        about: "Sobre o Projeto",
        features: "Recursos Destacados",
        techs: "Tecnologias Utilizadas",
        viewCode: "Ver Código",
        demoUrl: "Acessar Projeto Online"
      },
      items: {
        anAgendamentos: {
          title: "A&N Agendamentos",
          categoryLabel: "SaaS Multi-tenant & PWA",
          description: "Ecossistema completo de agendamentos e gestão comercial conectando clientes, estabelecimentos e profissionais.",
          fullDescription: "Desenvolvido do zero para ser uma solução leve e completa para salões, barbearias e clínicas. Possui 3 visões segregadas via RBAC: Painel do Cliente (para reserva em segundos), Painel do Estabelecimento (gestão financeira e de equipe) e Painel do Profissional (agenda individual). Suporta PWA e cobranças via gateway de pagamento do Mercado Pago.",
          features: [
            "Três níveis de acesso segregados por função (RBAC)",
            "Checkout integrado com pagamentos via PIX e cartão",
            "Suporte PWA completo para instalação nativa no celular",
            "Notificações de confirmação e dashboards em tempo real"
          ]
        },
        erpPetroleo: {
          title: "ERP Indústria Petrolífera",
          categoryLabel: "Web App Corporativo",
          description: "Sistema de gestão industrial para controle de produção, manutenção e inventário com dados em tempo real.",
          fullDescription: "Desenvolvido para gerenciar a operação complexa do setor de óleo e gás. Oferece visualização clara do inventário de tanques, agendas de manutenção preventiva e relatórios estatísticos com gráficos interativos.",
          features: [
            "Módulos de Produção, Manutenção e Inventário",
            "Gráficos estatísticos interativos em tempo real",
            "Importação e exportação de planilhas pesadas em segundos",
            "Alertas automatizados de estoque crítico"
          ]
        },
        controleFinanceiro: {
          title: "Controle Financeiro Pessoal",
          categoryLabel: "Web App / PWA",
          description: "Plataforma para gestão financeira diária, controle de despesas e metas de economia com gráficos interativos.",
          fullDescription: "Aplicação PWA responsiva projetada para acompanhamento financeiro instantâneo. Conta com categorização inteligente de gastos, suporte a metas mensais e dados criptografados por usuário.",
          features: [
            "Autenticação individual segura",
            "Gráficos de pizza e barras para evolução mensal",
            "Definição e progresso de metas de economia",
            "Interface limpa e rápida otimizada para mobile"
          ]
        },
        gestaoConsultas: {
          title: "Gestão de Consultas & Aulas",
          categoryLabel: "Web App Full-Stack",
          description: "Sistema para profissionais autônomos gerenciarem agendas, pacientes/alunos e finanças de forma unificada.",
          fullDescription: "Solução desenhada para psicólogos, personal trainers e consultores. Oferece controle de prontuários/fichas, confirmação de presença e acompanhamento de receita mensal.",
          features: [
            "Banco de dados SQL com regras avançadas de segurança (RLS)",
            "Agenda dinâmica com suporte a remarcação rápida",
            "Controle financeiro de recebimentos pendentes"
          ]
        },
        sitePsicanalista: {
          title: "Website Psicanalista Tauana Pavanelli",
          categoryLabel: "Website Institucional",
          description: "Presença online humanizada desenvolvida para transmitir acolhimento, serenidade e agendamento simples.",
          fullDescription: "Website focado na experiência do paciente, com paleta de cores terapêutica, tipografia de alta legibilidade e botão de contato direto via WhatsApp.",
          features: [
            "Carregamento ultra-rápido abaixo de 1 segundo",
            "Botão de agendamento direto para o WhatsApp sem atrito",
            "Otimização completa para motores de busca (SEO)"
          ]
        },
        cervejariaFratelli: {
          title: "Cervejaria Fratelli",
          categoryLabel: "Website Institucional",
          description: "Website moderno e artesanal para a cervejaria referência em Vitória-ES com catálogo interativo.",
          fullDescription: "Projeto que une a essência artesanal da cervejaria com tecnologia web moderna. Oferece catálogo interativo de rótulos, história da marca e direcionamento para pedidos.",
          features: [
            "Design temático artesanal refinado",
            "Apresentação interativa dos rótulos de cerveja",
            "Layout 100% responsivo para mobile e desktop"
          ]
        },
        novaSolucoes: {
          title: "Nova Soluções ACM",
          categoryLabel: "Landing Page Corporativa",
          description: "Landing page institucional para empresa de engenharia de fachadas e revestimentos em alumínio.",
          fullDescription: "Página criada para destacar a imponência dos projetos em ACM, apresentando galeria de obras executadas, depoimentos de clientes e formulário direto de orçamento.",
          features: [
            "Galeria de projetos de alta resolução",
            "Formulário rápido de cotação",
            "Alta taxa de conversão para vendas B2B"
          ]
        }
      }
    },
    experience: {
      badge: "Trajetória Profissional",
      titlePrefix: "Experiência & ",
      titleHighlight: "Resultados",
      description: "Conheça as empresas e produtos onde atuei liderando tecnologia e desenvolvendo software de ponta a ponta.",
      deliveriesLabel: "Principais Entregas:",
      items: [
        {
          company: "GCB Investimentos",
          role: "Engenheiro de Software & Front-End",
          period: "2026 - Atual",
          description: "Desenvolvimento e evolução de plataformas financeiras de alta disponibilidade e microsserviços.",
          achievements: [
            "Arquitetura de microsserviços com NestJS, Prisma e PostgreSQL",
            "Deploy e monitoramento de serviços na AWS (Amplify, ECS, S3, EventBridge)",
            "Criação de interfaces reativas em React e Vite para investidores"
          ]
        },
        {
          company: "A&N Agendamentos",
          role: "Founder & Full Stack Lead",
          period: "2025 - Atual",
          description: "Liderança técnica e desenvolvimento 100% autônomo do produto SaaS multi-tenant.",
          achievements: [
            "Modelagem e arquitetura de dados em SQL e NoSQL, com regras avançadas de segurança RBAC",
            "Integração de pagamentos com webhook automatizado do Mercado Pago",
            "Implementação da camada PWA aumentando a retenção móvel dos usuários"
          ]
        },
        {
          company: "ERP Petróleo & Gás",
          role: "Lead Developer",
          period: "2024",
          description: "Concepção e construção de dashboard industrial para controle operacional corporativo.",
          achievements: [
            "Processamento otimizado de relatórios em tempo real com PapaParse e Recharts",
            "Automação de rotinas com Cron Jobs e Cloud Functions",
            "Redução de 40% no tempo de emissão de relatórios de inventário"
          ]
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
          ]
        }
      ]
    },
    techArsenal: {
      badge: "Ecossistema Técnico",
      titlePrefix: "Arsenal ",
      titleHighlight: "Tecnológico",
      description: "Ferramentas e frameworks selecionados para máxima velocidade de desenvolvimento, escalabilidade e manutenibilidade.",
      categories: {
        frontend: "Front-End & UI",
        backend: "Back-End & Cloud",
        quality: "Qualidade & DevOps",
        architecture: "Arquitetura & Padrões",
        ai: "Engenharia de IA"
      }
    },
    methodology: {
      badge: "Padrões Técnicos Rígidos",
      titlePrefix: "Metodologia de ",
      titleHighlight: "Engenharia Web",
      description: "Não é só escrever código: é entregar um produto digital rápido, seguro e estrategicamente desenhado para conversão.",
      qualityGuarantee: "Garantia de Qualidade",
      pillars: [
        {
          title: "Tracking & Pixels",
          badge: "GTM & Meta Pixel",
          description: "Configuração completa de tags no Google Tag Manager, Meta Pixel (Facebook/Instagram), GA4 e rastreamento de eventos de conversão."
        },
        {
          title: "SEO Técnico & Dinâmico",
          badge: "Top Google",
          description: "Metadados ricos, estrutura semântica HTML5, sitemaps automatizados e marcação Schema.org para atrair tráfego orgânico qualificado."
        },
        {
          title: "Acessibilidade Universal",
          badge: "WCAG 2.1 AA",
          description: "Interface projetada para todos os públicos: navegação fluida por teclado, leitores de tela e alto contraste visual."
        },
        {
          title: "Foco em ROI & Valor",
          badge: "Retorno Real",
          description: "Software é investimento. Arquitetura limpa que não envelhece mal e experiência de usuário projetada para gerar receita."
        }
      ]
    },
    contact: {
      badge: "Vamos Construir Algo Incrível",
      titlePrefix: "Pronto para alavancar seu ",
      titleHighlight: "projeto digital?",
      description: "Estou disponível para novos projetos de Web Apps SaaS, Landing Pages de alta conversão ou consultoria em performance. Entre em contato direto pelo WhatsApp ou e-mail para um orçamento sem compromisso.",
      whatsappTitle: "Conversar no WhatsApp",
      whatsappAction: "Falar Agora",
      emailTitle: "Enviar E-mail",
      emailAction: "Enviar mensagem",
      locationText: "Ribeirão Preto - SP | Atendimento para todo o Brasil e exterior",
      socialHeading: "Canais & Redes Sociais",
      socialSubheading: "Acompanhe meus repositórios no GitHub ou conecte-se comigo no LinkedIn para parcerias.",
      githubLabel: "Perfil no GitHub",
      linkedinLabel: "Rede LinkedIn"
    },
    footer: {
      rights: "Todos os direitos reservados.",
      scrollTop: "Voltar ao Topo"
    }
  },
  en: {
    meta: {
      title: "Alessandro Tostes | Full-Stack Web Developer & SaaS Specialist",
      description: "Full-Stack Web Developer providing high-performance web solutions: SaaS Web Apps, High-converting Landing Pages, PWA, and AI Integration.",
      keywords: "Full-Stack Web Developer, SaaS Web Apps, Landing Pages, PWA, React, Node.js, TypeScript, Next.js, AI Automation"
    },
    nav: {
      home: "Home",
      services: "Services",
      pwa: "PWA SaaS",
      projects: "Portfolio",
      experience: "Experience",
      methodology: "Methodology",
      contact: "Contact",
      ctaWhatsApp: "Chat on WhatsApp",
      ctaEmail: "Send Email"
    },
    hero: {
      status: "Available for Projects",
      location: "Global Remote Service",
      headingPrefix: "I transform complex ideas into ",
      headingHighlight: "Web Systems & SaaS",
      headingSuffix: " of high performance.",
      subheading: "Full-Stack Web Developer specializing in SaaS Web Apps, high-converting Landing Pages, native PWA solutions, and Artificial Intelligence.",
      pills: [
        "Google Tag Manager & Meta Pixel",
        "Mobile-First & PWA",
        "SQL & NoSQL Databases",
        "AI Engineering"
      ],
      ctaPrimaryWhatsapp: "Start Project on WhatsApp",
      ctaPrimaryEmail: "Request Email Proposal",
      ctaSecondaryProjects: "View Portfolio Projects",
      badgeTitle: "Alessandro Tostes",
      badgeRole: "Full Stack Developer",
      badgeTopCode: "TOP CODE",
      metricTrackingTitle: "GTM & Pixel",
      metricTrackingDesc: "Tracking & Analytics",
      metricExpTitle: "+2 Years",
      metricExpDesc: "Full-Stack Dev",
      stackTitle: "Core Stack & Tools",
      stackItems: [
        "React 19",
        "Vite",
        "Next.js",
        "TypeScript",
        "Node.js",
        "SQL",
        "NoSQL",
        "PWA",
        "Integrated AI"
      ]
    },
    services: {
      badge: "Custom Solutions",
      titlePrefix: "Services engineered to ",
      titleHighlight: "deliver real impact",
      description: "From architecture planning to final deployment with clean code, PWA support, and ultra-fast mobile loading.",
      benefitsLabel: "Key Benefits:",
      cta: "Request Proposal for this Service",
      items: {
        saas: {
          badge: "Scale & Product",
          title: "Web Apps SaaS, SPAs & CRMs",
          subtitle: "Complete platforms to monetize your digital business",
          description: "Development of robust web platforms with secure authentication, payment gateways (Mercado Pago, Stripe), real-time dashboards, RBAC, and robust SQL & NoSQL data architecture.",
          benefits: [
            "Scalable architecture ready for thousands of concurrent users",
            "Data security and GDPR/LGPD compliance",
            "Intelligent management dashboards with charts and exportable reports"
          ],
          deliverables: ["Node.js & NestJS", "SQL Databases", "NoSQL Databases", "AWS & GCP / Gateways"]
        },
        landing: {
          badge: "Instant Conversion",
          title: "Premium Landing Pages",
          subtitle: "Impactful visual design with unmatched performance",
          description: "Strategic pages custom-designed to convert visitors into buying clients. Fluid Mobile-First layout with top Google Lighthouse scores.",
          benefits: [
            "High conversion rates with targeted copy and clear call-to-actions",
            "Ultra-fast loading (zero latency Core Web Vitals)",
            "Advanced SEO with Schema.org structured data to rank top on Google"
          ],
          deliverables: ["Exclusive Design", "Advanced Technical SEO", "Lightweight Micro-animations", "Analytics & Pixel Integration"]
        },
        pwa: {
          badge: "Mobile Experience",
          title: "PWA Solutions (Progressive Web Apps)",
          subtitle: "Your app directly on the client's phone without app stores",
          description: "Deliver a native app experience directly through mobile browsers (iOS & Android), saving time and bypassing store fees and restrictions.",
          benefits: [
            "Instant home-screen installation without extra storage footprint",
            "Browserless fluid navigation and offline mode support",
            "Push notifications to re-engage customers with news and offers"
          ],
          deliverables: ["PWA Manifest", "Optimized Service Workers", "Offline Caching", "Home Screen Shortcut"]
        },
        ia: {
          badge: "Automation & Future",
          title: "AI Engineering & Assistive Code",
          subtitle: "Accelerate workflows and integrate Artificial Intelligence",
          description: "Building intelligent solutions connected to LLMs (OpenAI, Gemini, Claude), operational routine automations, and prompt/context engineering for digital products.",
          benefits: [
            "Drastic reduction of time spent on repetitive manual tasks",
            "Smart customer service and high-precision virtual assistants",
            "Continuous AI integration into enterprise pipelines"
          ],
          deliverables: ["Prompt & Context Engineering", "LLMs/APIs Integration", "n8n Agents & Workflows", "Virtual Assistants"]
        }
      }
    },
    pwaShowcase: {
      badge: "Featured PWA SaaS Product",
      titlePrefix: "A&N Agendamentos ",
      titleHighlight: "(Multi-tenant SaaS)",
      description: "A high-tech PWA platform that eliminates the need for app store submissions, providing instant installation and immersive full-screen navigation.",
      tabsHeader: "Explore the 3 system views:",
      tabsSubheader: "Switch between the tabs below to watch live recordings of each module in action:",
      playing: "PLAYING",
      adv1Title: "Zero App Store Fees",
      adv1Desc: "Direct installation via Safari or Chrome without relying on Apple App Store or Google Play.",
      adv2Title: "Native Speed",
      adv2Desc: "Instant loading, home screen shortcut, and fluid response across any smartphone.",
      videos: {
        cliente: {
          title: "Client Experience",
          subtitle: "Fast and easy booking",
          description: "Clients browse services, pick a specialist, choose an available time slot, and finalize their appointment in a few taps."
        },
        estabelecimento: {
          title: "Business Management",
          subtitle: "Complete control of your enterprise",
          description: "Manager dashboard for business owners to handle staff commissions, financial history, schedule blocks, and revenue reports."
        },
        profissional: {
          title: "Specialist Dashboard",
          subtitle: "Personal schedule and service queue",
          description: "Dedicated interface for service providers to track daily appointments, payment statuses, and upcoming clients."
        }
      }
    },
    projects: {
      badge: "Real Portfolio",
      titlePrefix: "Projects that ",
      titleHighlight: "deliver real impact",
      description: "Explore web applications built with a focus on speed, high conversion, and exceptional user experience.",
      featuredBadge: "FEATURED",
      viewDetails: "View Details",
      filters: {
        all: "All Projects",
        saas: "Web Apps & SaaS",
        landing: "Landing Pages",
        pwa: "PWA Solutions",
        institucional: "Institutional"
      },
      modal: {
        about: "About the Project",
        features: "Featured Highlights",
        techs: "Technologies Used",
        viewCode: "View Code",
        demoUrl: "Access Project Live"
      },
      items: {
        anAgendamentos: {
          title: "A&N Agendamentos",
          categoryLabel: "Multi-tenant SaaS & PWA",
          description: "Complete scheduling and commercial management ecosystem connecting customers, establishments, and staff.",
          fullDescription: "Built from scratch as a lightweight, complete solution for salons, barbershops, and clinics. Features 3 RBAC-segregated views: Client Panel (instant bookings), Business Dashboard (financials & staff management), and Specialist Workspace (individual calendar). Full PWA and Mercado Pago payment gateway support.",
          features: [
            "Three role-segregated access levels (RBAC)",
            "Integrated checkout with instant PIX and credit card payments",
            "Complete PWA support for native-like phone installation",
            "Real-time confirmation alerts and analytical dashboards"
          ]
        },
        erpPetroleo: {
          title: "Oil Industry ERP",
          categoryLabel: "Corporate Web App",
          description: "Industrial management platform for production monitoring, maintenance logs, and inventory with real-time data.",
          fullDescription: "Engineered to streamline complex operations in the oil & gas sector. Offers real-time tank inventory tracking, preventive maintenance schedules, and interactive analytical reporting.",
          features: [
            "Production, Maintenance, and Inventory modules",
            "Interactive real-time statistical charts",
            "Instant heavy spreadsheet import and export",
            "Automated critical stock alerts"
          ]
        },
        controleFinanceiro: {
          title: "Personal Finance Tracker",
          categoryLabel: "Web App / PWA",
          description: "Daily personal finance platform with expense tracking, savings goals, and interactive charts.",
          fullDescription: "Responsive PWA designed for instant money management. Features smart expense categorization, monthly savings goal tracking, and user-encrypted data.",
          features: [
            "Secure individual user authentication",
            "Pie and bar charts for monthly expense breakdown",
            "Savings target definition and progress tracking",
            "Clean, fast interface optimized for mobile devices"
          ]
        },
        gestaoConsultas: {
          title: "Consultation & Class Manager",
          categoryLabel: "Full-Stack Web App",
          description: "Unified scheduling, patient/student records, and financial management for independent professionals.",
          fullDescription: "Tailored for psychologists, personal trainers, and consultants. Provides medical/session record management, attendance tracking, and monthly revenue monitoring.",
          features: [
            "Secure SQL database architecture with Row Level Security (RLS)",
            "Dynamic calendar with quick rescheduling capabilities",
            "Financial tracking for pending payments"
          ]
        },
        sitePsicanalista: {
          title: "Psychoanalyst Tauana Pavanelli Website",
          categoryLabel: "Institutional Website",
          description: "Humanized online presence built to convey tranquility, serenity, and seamless appointment booking.",
          fullDescription: "Website focused on patient experience, featuring a soothing color palette, high-legibility typography, and direct WhatsApp booking.",
          features: [
            "Sub-second page load times",
            "Direct WhatsApp integration for immediate consultation setup",
            "Full search engine optimization (SEO)"
          ]
        },
        cervejariaFratelli: {
          title: "Fratelli Brewery",
          categoryLabel: "Institutional Website",
          description: "Modern craft brewery website featuring an interactive product catalog and brand story.",
          fullDescription: "Project uniting craft beer identity with cutting-edge web performance. Offers interactive beer label showcases, brand heritage stories, and direct ordering links.",
          features: [
            "Refined craft-themed visual design",
            "Interactive showcase of beer labels and profiles",
            "100% responsive layout across mobile and desktop"
          ]
        },
        novaSolucoes: {
          title: "Nova Soluções ACM",
          categoryLabel: "Corporate Landing Page",
          description: "High-converting corporate landing page for facade engineering and aluminum cladding solutions.",
          fullDescription: "Designed to showcase large-scale architectural ACM cladding projects, featuring high-res project galleries, client testimonials, and quick quote forms.",
          features: [
            "High-resolution architectural project gallery",
            "Quick budget quote request form",
            "High conversion rate tailored for B2B sales"
          ]
        }
      }
    },
    experience: {
      badge: "Career Trajectory",
      titlePrefix: "Experience & ",
      titleHighlight: "Results",
      description: "Discover the companies and projects where I served as technical lead and Full-Stack developer.",
      deliveriesLabel: "Key Deliverables:",
      items: [
        {
          company: "GCB Investimentos",
          role: "Full Stack Developer",
          period: "2026 - Present",
          description: "Development and evolution of high-availability financial platforms and microservices.",
          achievements: [
            "Microservices architecture with NestJS, Prisma, and PostgreSQL",
            "Service deployment & monitoring on AWS (Amplify, ECS, S3, EventBridge)",
            "Building reactive investor web applications with React and Vite"
          ]
        },
        {
          company: "A&N Agendamentos",
          role: "Founder & Full Stack Lead",
          period: "2025 - Present",
          description: "Technical leadership and 100% autonomous development of a multi-tenant SaaS product.",
          achievements: [
            "SQL and NoSQL data modeling and architecture with advanced RBAC security rules",
            "Payment gateway integration with Mercado Pago automated webhooks",
            "Implementation of PWA layer boosting user mobile retention"
          ]
        },
        {
          company: "ERP Petróleo & Gás",
          role: "Lead Developer",
          period: "2024",
          description: "Architecting and building an industrial corporate dashboard for operational management.",
          achievements: [
            "Optimized real-time report processing with PapaParse and Recharts",
            "Routine automation using Cron Jobs and Cloud Functions",
            "40% reduction in inventory report generation time"
          ]
        },
        {
          company: "Front-End & Optimization Consultant",
          role: "Freelance Consultant",
          period: "2023 - Present",
          description: "Consulting on code modernization, web performance, and technical SEO.",
          achievements: [
            "Tracking setup with Google Tag Manager, GA4, Meta Pixel, and conversion events",
            "Rich metadata implementation (Schema.org) for top Google search visibility",
            "Core Web Vitals optimization eliminating visual lag and layout shifts"
          ]
        }
      ]
    },
    techArsenal: {
      badge: "Technical Ecosystem",
      titlePrefix: "Tech ",
      titleHighlight: "Arsenal",
      description: "Selected tools and frameworks for maximum development velocity, scalability, and maintainability.",
      categories: {
        frontend: "Front-End & UI",
        backend: "Back-End & Cloud",
        quality: "Quality & DevOps",
        architecture: "Architecture & Patterns",
        ai: "AI Engineering"
      }
    },
    methodology: {
      badge: "Strict Technical Standards",
      titlePrefix: "Web Engineering ",
      titleHighlight: "Methodology",
      description: "It's not just writing code: it's delivering a fast, secure digital product strategically engineered for conversion.",
      qualityGuarantee: "Quality Assurance",
      pillars: [
        {
          title: "Tracking & Pixels",
          badge: "GTM & Meta Pixel",
          description: "Complete tag setup in Google Tag Manager, Meta Pixel (Facebook/Instagram), GA4, and conversion event tracking."
        },
        {
          title: "Technical & Dynamic SEO",
          badge: "Top Google",
          description: "Rich metadata, HTML5 semantic structure, automated sitemaps, and Schema.org markup to drive qualified organic traffic."
        },
        {
          title: "Universal Accessibility",
          badge: "WCAG 2.1 AA",
          description: "Interface designed for everyone: fluid keyboard navigation, screen reader compatibility, and high visual contrast."
        },
        {
          title: "Focus on ROI & Value",
          badge: "Real Return",
          description: "Software is an investment. Clean architecture that doesn't age poorly and user experience engineered to generate revenue."
        }
      ]
    },
    contact: {
      badge: "Let's Build Something Incredible",
      titlePrefix: "Ready to elevate your ",
      titleHighlight: "digital project?",
      description: "I am available for new SaaS Web Apps, high-converting Landing Pages, or web performance consulting. Get in touch directly via email or WhatsApp for a free quote.",
      whatsappTitle: "Chat on WhatsApp",
      whatsappAction: "Chat Now",
      emailTitle: "Send Email",
      emailAction: "Send message",
      locationText: "Global Remote Service | Worldwide & Remote Client Support",
      socialHeading: "Channels & Social Media",
      socialSubheading: "Follow my GitHub repositories or connect with me on LinkedIn for partnerships.",
      githubLabel: "GitHub Profile",
      linkedinLabel: "LinkedIn Network"
    },
    footer: {
      rights: "All rights reserved.",
      scrollTop: "Back to Top"
    }
  }
};
