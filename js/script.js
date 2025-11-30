// js/script.js (Versão Refatorada - Etapa 2)

/**
 * Classe principal que gerencia toda a interatividade do portfólio.
 * Ela encapsula estado e métodos, evitando poluição do escopo global.
 */
class ModernPortfolio {
  /**
   * Construtor da classe. Define o estado inicial e
   * chama o método de inicialização principal.
   */
  constructor() {
    this.isLoaded = false;
    this.isMenuOpen = false;
    this.isMobile = window.innerWidth < 768;
    this.isTouch = "ontouchstart" in window;
    this.lastScrollY = 0;
    this.ticking = false; // Flag para otimização do scroll (requestAnimationFrame)

    this.init();
  }

  /**
   * Método de inicialização.
   * Espera o DOM estar pronto para começar a configurar os componentes.
   */
  init() {
    // Garante que o DOM esteja pronto antes de executar
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.onDOMReady());
    } else {
      this.onDOMReady();
    }
  }

  /**
   * Chamado quando o DOM está totalmente carregado.
   * É o ponto de entrada principal para configurar a página.
   */
  onDOMReady() {
    this.setupEventListeners();
    this.setupNavigation();
    this.setupThemeToggle();
    this.setupScrollEffects();
    this.setupPwaTabs(); // <--- Lógica das abas PWA
    this.setupProjectFilters();
    this.setupProjectModal();
    this.setupCustomCursor(); // Mantido (embora desabilitado no seu CSS)
    this.setupIntersectionObserver();
    this.initializeAOS();

    this.isLoaded = true;
    console.log("🚀 Tostes - Portfólio carregado e pronto!");
  }

  /**
   * Configura os ouvintes de eventos globais (scroll, resize).
   * Usa otimizações como requestAnimationFrame e debounce.
   */
  setupEventListeners() {
    // Otimização de Scroll com Request Animation Frame (RAF)
    window.addEventListener(
      "scroll",
      () => {
        this.lastScrollY = window.pageYOffset;
        if (!this.ticking) {
          requestAnimationFrame(() => {
            this.handleScroll();
            this.ticking = false;
          });
          this.ticking = true;
        }
      },
      { passive: true } // Melhora a performance de scroll
    );

    // Otimização de Resize com Debounce
    window.addEventListener(
      "resize",
      this.debounce(() => {
        this.handleResize();
      }, 200) // 200ms de espera
    );
  }

  /**
   * Configura a lógica do menu de navegação (mobile e desktop).
   */
  setupNavigation() {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav__link");

    // Abrir/Fechar menu com o botão hamburger
    navToggle?.addEventListener("click", () => {
      this.toggleMenu();
    });

    // Fechar menu ao clicar em um link (navegação)
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (this.isMenuOpen) {
          this.closeMenu();
        }
        // Atualiza o link ativo imediatamente
        navLinks.forEach((el) => el.classList.remove("active-link"));
        link.classList.add("active-link");
      });
    });

    // Fechar menu ao pressionar a tecla "Escape"
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isMenuOpen) {
        this.closeMenu();
      }
    });

    // Move o botão de tema para dentro do menu em dispositivos móveis
    if (this.isMobile) {
      const themeToggle = document.querySelector("#theme-toggle");
      if (navMenu && themeToggle) {
        navMenu.appendChild(themeToggle);
      }
    }
  }

  /**
   * Controla a abertura e fechamento do menu mobile.
   */
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");

    navToggle?.classList.toggle("active", this.isMenuOpen);
    navMenu?.classList.toggle("show-menu", this.isMenuOpen);

    // Trava o scroll do body quando o menu está aberto
    document.body.style.overflow = this.isMenuOpen ? "hidden" : "";

    // Atualiza ARIA para acessibilidade
    navToggle?.setAttribute("aria-expanded", this.isMenuOpen);
    navMenu?.setAttribute("aria-hidden", !this.isMenuOpen);

    // Atualiza o 'aria-label' do botão
    const label = this.isMenuOpen
      ? "Fechar menu de navegação"
      : "Abrir menu de navegação";
    navToggle?.setAttribute("aria-label", label);
  }

  /**
   * Força o fechamento do menu mobile.
   */
  closeMenu() {
    if (!this.isMenuOpen) return;
    this.isMenuOpen = false;

    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");

    navToggle?.classList.remove("active");
    navMenu?.classList.remove("show-menu");
    document.body.style.overflow = "";

    // Atualiza ARIA para acessibilidade
    navToggle?.setAttribute("aria-expanded", "false");
    navMenu?.setAttribute("aria-hidden", "true");
    navToggle?.setAttribute("aria-label", "Abrir menu de navegação");
  }

  /**
   * Configura o botão de alternância de tema (light/dark).
   */
  setupThemeToggle() {
    const themeToggle = document.getElementById("theme-toggle");
    if (!themeToggle) return;

    // Detecta o tema salvo ou a preferência do sistema
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

    this.setTheme(initialTheme); // Aplica o tema inicial

    // Ouve o clique no botão
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      this.setTheme(newTheme);
      localStorage.setItem("theme", newTheme); // Salva a preferência
    });

    // Ouve mudanças na preferência do sistema (se o usuário não tiver salvo)
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        if (!localStorage.getItem("theme")) {
          this.setTheme(e.matches ? "dark" : "light");
        }
      });
  }

  /**
   * Aplica o tema (atributo 'data-theme') ao <html> e atualiza a meta tag.
   * @param {string} theme - O tema a ser aplicado ('light' ou 'dark').
   */
  setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);

    // Atualiza a 'theme-color' para a barra do navegador (mobile)
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      const newColor = theme === "dark" ? "#0f172a" : "#21808d"; // Cor primária light
      metaThemeColor.setAttribute("content", newColor);
    }

    // Atualiza o 'aria-label' do botão para acessibilidade
    const themeToggle = document.getElementById("theme-toggle");
    const label = `Alternar para tema ${theme === "dark" ? "claro" : "escuro"}`;
    themeToggle?.setAttribute("aria-label", label);
  }

  /**
   * Configura efeitos visuais ativados pela rolagem.
   */
  setupScrollEffects() {
    const scrollToTop = document.getElementById("scrollToTop");

    if (scrollToTop) {
      scrollToTop.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }
    this.handleScroll(); // Chamada inicial para definir o estado correto
  }

  /**
   * Função otimizada chamada via RAF para lidar com eventos de scroll.
   */
  handleScroll() {
    const header = document.getElementById("header");
    const scrollToTop = document.getElementById("scrollToTop");
    const navProgress = document.getElementById("navProgress");
    const scrollY = this.lastScrollY;

    // Header com sombra
    header?.classList.toggle("scrolled", scrollY > 50);

    // Botão "Voltar ao Topo"
    scrollToTop?.classList.toggle("visible", scrollY > 300);

    // Barra de progresso da navegação
    if (navProgress) {
      const winHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollY / winHeight) * 100;
      navProgress.style.width = `${Math.min(scrolled, 100)}%`;
    }
    this.updateActiveNavOnScroll();
  }

  /**
   * Atualiza qual link de navegação está ativo com base na posição do scroll.
   */
  updateActiveNavOnScroll() {
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll('.nav__link[href^="#"]');

    let currentSectionId = "";
    const headerHeight = document.getElementById("header")?.offsetHeight || 64;
    const offset = headerHeight + 50; // 50px de margem

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - offset;
      const sectionHeight = section.offsetHeight;
      if (
        this.lastScrollY >= sectionTop &&
        this.lastScrollY < sectionTop + sectionHeight
      ) {
        currentSectionId = section.getAttribute("id");
      }
    });

    // Fallback para 'home' se estiver no topo
    if (this.lastScrollY < 300) {
      currentSectionId = "home";
    }

    // Atualiza a classe 'active-link'
    navLinks.forEach((link) => {
      // Remove o '#' do href para comparar com o ID
      const isActive =
        link.getAttribute("href").substring(1) === currentSectionId;
      link.classList.toggle("active-link", isActive);
    });
  }

  /**
   * Lida com o redimensionamento da janela.
   */
  handleResize() {
    const wasMobile = this.isMobile;
    this.isMobile = window.innerWidth < 768;

    // Se o usuário redimensionar de mobile para desktop com o menu aberto, feche-o.
    if (wasMobile && !this.isMobile && this.isMenuOpen) {
      this.closeMenu();
    }

    // Move o botão de tema de volta para o header se mudar para desktop
    if (wasMobile && !this.isMobile) {
      const themeToggle = document.querySelector("#theme-toggle");
      const navActions = document.querySelector(".nav__actions");
      if (themeToggle && navActions) {
        navActions.prepend(themeToggle);
      }
    }
    // Move o botão de tema para o menu se mudar para mobile
    if (!wasMobile && this.isMobile) {
      const themeToggle = document.querySelector("#theme-toggle");
      const navMenu = document.querySelector("#nav-menu");
      if (themeToggle && navMenu) {
        navMenu.appendChild(themeToggle);
      }
    }

    // Atualiza a biblioteca de animação AOS
    if (typeof AOS !== "undefined") {
      AOS.refresh();
    }
    this.updateCursorVisibility();
  }

  /**
   * Configura o cursor customizado (se ativado).
   */
  setupCustomCursor() {
    const cursor = document.getElementById("cursor");
    // O seu CSS está com 'display: none'. Se quiser usar, remova essa regra no CSS.
    if (cursor) {
      // cursor.style.display = "block"; // Descomente para ativar
    }

    // Lógica para esconder o cursor em telas touch (já feito no seu CSS, mas é bom garantir)
    this.updateCursorVisibility();
  }

  /**
   * Atualiza a visibilidade do cursor (esconde em touch).
   */
  updateCursorVisibility() {
    const cursor = document.getElementById("cursor");
    if (cursor) {
      // O seu CSS já faz isso com @media (hover: none),
      // mas esta é uma garantia extra.
      cursor.style.display = this.isTouch ? "none" : "none"; // 'none' para manter desativado
    }
  }

  /**
   * Configura o Intersection Observer para animar elementos quando entram na tela.
   */
  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1, // 10% do item visível
      rootMargin: "0px 0px -50px 0px", // Começa 50px antes de entrar na base
    };

    // Este observador é usado para 'data-aos', que é controlado pela biblioteca AOS.
    // Vamos mantê-lo simples, pois AOS cuida de si mesmo.
    // Se tivéssemos animações customizadas, as colocaríamos aqui.
  }

  /**
   * Configura a lógica de filtros dos projetos.
   */
  setupProjectFilters() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    if (!filterButtons.length || !projectCards.length) return;

    filterButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const currentButton = e.currentTarget;
        const filter = currentButton.dataset.filter;

        // Atualiza o botão ativo
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        currentButton.classList.add("active");

        // Filtra os cards
        this.filterProjects(projectCards, filter);
      });
    });
  }

  /**
   * Aplica a lógica de filtro aos cards de projeto.
   * @param {NodeList} cards - A lista de elementos de card.
   * @param {string} filter - O filtro a ser aplicado ('all', 'webapp', 'website').
   */
  filterProjects(cards, filter) {
    cards.forEach((card) => {
      const category = card.dataset.category;
      const shouldShow = filter === "all" || category === filter;

      // Animação de fade-out e fade-in
      if (shouldShow) {
        card.style.display = "block";
        setTimeout(() => {
          // Permite que o 'display' seja aplicado antes da animação
          card.style.opacity = "1";
          card.style.transform = "scale(1)";
        }, 10);
      } else {
        card.style.opacity = "0";
        card.style.transform = "scale(0.95)";
        setTimeout(() => {
          card.style.display = "none";
        }, 300); // Deve bater com a transição do CSS
      }
    });
  }

  /**
   * Configura a abertura e fechamento do modal de projetos.
   */
  setupProjectModal() {
    const modal = document.getElementById("projectModal");
    const modalCloseBtn = document.getElementById("modalCloseBtn");
    const modalTriggers = document.querySelectorAll(".project-modal-trigger");

    if (!modal) return;

    modalTriggers.forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        this.openProjectModal(trigger.dataset);
      });
    });

    modalCloseBtn?.addEventListener("click", () => {
      this.closeProjectModal();
    });

    // Fechar ao clicar fora (no overlay)
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        this.closeProjectModal();
      }
    });

    // Fechar com a tecla 'Escape' (já configurado em setupNavigation,
    // mas vamos adicionar um específico para o modal)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("visible")) {
        this.closeProjectModal();
      }
    });
  }

  /**
   * Abre o modal e preenche com os dados do projeto.
   * @param {DOMStringMap} data - O `dataset` do botão que acionou o modal.
   */
  openProjectModal(data) {
    const modal = document.getElementById("projectModal");
    if (!modal) return;

    // Busca os elementos do modal
    const modalTitle = document.getElementById("modalProjectTitle");
    const modalImage = document.getElementById("modalProjectImage");
    const modalVideo = document.getElementById("modalProjectVideo");
    const modalDesc = document.getElementById("modalProjectDesc");
    const modalTech = document.getElementById("modalProjectTech");
    const modalLiveLink = document.getElementById("modalProjectLiveLink");
    const modalRepoLink = document.getElementById("modalProjectRepoLink");

    // Extrai dados do dataset
    const {
      projectTitle,
      projectImageUrl,
      projectVideoUrl,
      projectDesc,
      projectTech,
      projectLiveUrl,
      projectRepoUrl,
    } = data;

    // Preenche os dados
    if (modalTitle) modalTitle.textContent = projectTitle;
    if (modalDesc) modalDesc.textContent = projectDesc;

    // Lógica de Mídia (Vídeo ou Imagem)
    if (projectVideoUrl && modalVideo) {
      modalVideo.src = projectVideoUrl;
      modalVideo.style.display = "block";
      modalVideo.play(); // Inicia o vídeo
      modalImage.style.display = "none";
    } else if (projectImageUrl && modalImage) {
      modalImage.src = projectImageUrl;
      modalImage.style.display = "block";
      modalVideo.style.display = "none";
    }

    // Preenche as Tech Tags
    if (modalTech && projectTech) {
      modalTech.innerHTML = ""; // Limpa tags antigas
      projectTech.split(",").forEach((techItem) => {
        const tag = document.createElement("span");
        tag.className = "tech-tag";
        tag.textContent = techItem.trim();
        modalTech.appendChild(tag);
      });
    }

    // Configura os links (e esconde se não existirem)
    const configureLink = (linkElement, url) => {
      if (linkElement) {
        if (url && url !== "#") {
          linkElement.href = url;
          linkElement.style.display = "inline-flex";
        } else {
          linkElement.style.display = "none";
        }
      }
    };

    configureLink(modalLiveLink, projectLiveUrl);
    configureLink(modalRepoLink, projectRepoUrl);

    // Exibe o modal
    modal.classList.add("visible");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // Trava o scroll do body

    // Foco no botão de fechar para acessibilidade
    modalCloseBtn?.focus();
  }

  /**
   * Fecha o modal do projeto.
   */
  closeProjectModal() {
    const modal = document.getElementById("projectModal");
    const modalVideo = document.getElementById("modalProjectVideo");
    if (!modal) return;

    modal.classList.remove("visible");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = ""; // Libera o scroll

    // Para o vídeo para não continuar tocando em segundo plano
    if (modalVideo) {
      modalVideo.pause();
      modalVideo.src = ""; // Limpa o src
    }
  }

  /**
   * Configura as abas (tabs) da seção PWA Showcase.
   */
  setupPwaTabs() {
    const tabButtons = document.querySelectorAll(".pwa-showcase__tab-btn");
    const slides = document.querySelectorAll(".pwa-slide");

    if (!tabButtons.length || !slides.length) {
      console.warn("Elementos do PWA Showcase não encontrados.");
      return;
    }

    tabButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const currentButton = e.currentTarget;
        const targetId = currentButton.dataset.target;
        const targetSlide = document.getElementById(targetId);

        if (targetSlide) {
          // 1. Atualiza o botão ativo
          tabButtons.forEach((btn) => btn.classList.remove("active"));
          currentButton.classList.add("active");

          // 2. Pausa todos os vídeos e esconde os slides
          slides.forEach((slide) => {
            slide.classList.remove("active");
            const video = slide.querySelector("video");
            if (video) video.pause(); // Pausa o vídeo que estava ativo
          });

          // 3. Mostra o slide alvo
          targetSlide.classList.add("active");

          /**
           * ETAPA 2 - REATORAÇÃO:
           * Como discutido anteriormente, removemos o 'play()' e 'currentTime = 0'.
           * Agora, o usuário tem controle total sobre o vídeo.
           * O clique na aba apenas MOSTRA o vídeo correspondente.
           */

          // const targetVideo = targetSlide.querySelector("video");
          // if (targetVideo) {
          //   targetVideo.currentTime = 0; // REMOVIDO
          //   targetVideo.play(); // REMOVIDO
          // }
        }
      });
    });
  }

  /**
   * Inicializa a biblioteca AOS (Animate On Scroll).
   */
  initializeAOS() {
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: this.isMobile ? 600 : 800, // Animação mais rápida no mobile
        delay: 50, // Delay padrão
        once: true, // Animação acontece apenas uma vez
        offset: 120, // Distância para disparar a animação
        easing: "ease-out-cubic",
      });
    }
  }

  /**
   * Função utilitária de Debounce.
   * Evita que uma função seja chamada múltiplas vezes em um curto período.
   * @param {Function} func - A função a ser executada.
   * @param {number} wait - O tempo de espera em milissegundos.
   */
  debounce(func, wait) {
    let timeout;
    return function (...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }
}

/**
 * Ponto de entrada:
 * Cria uma nova instância da classe ModernPortfolio quando o script é carregado.
 * A própria classe vai esperar pelo DOM estar pronto ('DOMContentLoaded').
 */
new ModernPortfolio();
