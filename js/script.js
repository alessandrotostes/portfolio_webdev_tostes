document.addEventListener("DOMContentLoaded", function () {
  // --- INICIALIZAÇÃO DE BIBLIOTECAS E VARIÁVEIS ---

  let typed = null; // Declaramos a variável aqui para que ela seja acessível em outras partes do script

  // 1. Typed.js para o efeito de digitação no header
  const typedElement = document.getElementById("typed-text");
  if (typedElement) {
    const options = {
      strings: [
        "Web Developer",
        "UI Developer",
        "Especialista em Landing Pages",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    };
    // Guardamos a instância na variável que declaramos antes
    typed = new Typed("#typed-text", options);
  }

  // --- NOVA FUNCIONALIDADE: PAUSA INTELIGENTE DA ANIMAÇÃO ---
  const heroHeader = document.querySelector(".hero-header");

  // Verifica se o typed foi inicializado e se o hero-header existe
  if (typed && heroHeader) {
    const observerOptions = {
      root: null, // Observa em relação à viewport do navegador
      rootMargin: "0px",
      threshold: 0.05, // Ativa quando pelo menos 10% do elemento está visível
    };

    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        // Se o elemento está visível na tela
        if (entry.isIntersecting) {
          typed.start(); // Inicia a animação
        } else {
          // Se o elemento NÃO está visível
          typed.stop(); // Pausa a animação
        }
      });
    }, observerOptions);

    // Inicia a observação do elemento hero-header
    observer.observe(heroHeader);
  }

  // Lógica do Alternador de Tema (Claro/Escuro)
  const themeToggler = document.getElementById("theme-toggler");
  const body = document.body;

  if (themeToggler) {
    const themeIcon = themeToggler.querySelector("i");
    const applyTheme = (theme) => {
      body.setAttribute("data-theme", theme);
      if (themeIcon) {
        themeIcon.className = theme === "light" ? "fas fa-moon" : "fas fa-sun";
      }
      localStorage.setItem("portfolio-theme", theme);
    };
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    applyTheme(savedTheme);
    themeToggler.addEventListener("click", () => {
      const currentTheme = body.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(newTheme);
    });
  }

  // Lógica do Modal de Projeto
  const projectModalEl = document.getElementById("projectModal");
  if (projectModalEl) {
  }

  // Lógica do Filtro de Projetos
  const filterContainer = document.querySelector("#portfolio-filters");
  if (filterContainer) {
  }

  // Lógica para Preview de Vídeo no Hover do Card
  const videoCards = document.querySelectorAll(".project-card.video-card");
  videoCards.forEach((card) => {});

  // Lógica para Navegação Suave e Link Ativo
  document
    .querySelectorAll('a[href^="#"]:not([href="#"])')
    .forEach((anchor) => {});

  // Lógica para o botão "Voltar ao Topo"
  const backToTopButton = document.getElementById("back-to-top");
  if (backToTopButton) {
  }
});
