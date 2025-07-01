document.addEventListener("DOMContentLoaded", function () {
  // --- INICIALIZAÇÃO DE BIBLIOTECAS E VARIÁVEIS ---

  let typed = null; // Declaramos a variável aqui para que ela seja acessível em outras partes do script

  // 1. Typed.js para o efeito de digitação no header
  const typedElement = document.getElementById("typed-text");
  if (typedElement) {
    const options = {
      strings: [
        "Desenvolvedor Web",
        "UI | UX",
        "Especialista em Landing Pages",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    };
    typed = new Typed("#typed-text", options);
  }

  // --- FUNCIONALIDADE DE PAUSA INTELIGENTE DA ANIMAÇÃO ---
  const heroHeader = document.querySelector(".hero-header");

  if (typed && heroHeader) {
    const observerOptions = {
      root: null, // Observa em relação à viewport do navegador
      rootMargin: "0px",
      threshold: 0.05, // Ativa quando pelo menos 5% do elemento está visível
    };

    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          typed.start(); // Inicia a animação se estiver visível
        } else {
          typed.stop(); // Pausa a animação se não estiver visível
        }
      });
    }, observerOptions);

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
    const modalTitle = document.getElementById("modalProjectTitle");
    const modalDesc = document.getElementById("modalProjectDesc");
    const modalTech = document.getElementById("modalProjectTech");
    const modalLiveLink = document.getElementById("modalProjectLiveLink");
    const modalRepoLink = document.getElementById("modalProjectRepoLink");
    const modalImage = document.getElementById("modalProjectImage");
    const modalVideo = document.getElementById("modalProjectVideo");

    projectModalEl.addEventListener("show.bs.modal", function (event) {
      const button = event.relatedTarget;
      if (!button) return;

      modalTitle.textContent = "";
      modalDesc.textContent = "";
      modalTech.innerHTML = "";
      modalImage.src = "";
      modalVideo.querySelector("source").src = "";
      modalImage.style.display = "none";
      modalVideo.style.display = "none";

      const title = button.getAttribute("data-project-title");
      const desc = button.getAttribute("data-project-desc");
      const techList = button.getAttribute("data-project-tech");
      const liveUrl = button.getAttribute("data-project-live-url");
      const repoUrl = button.getAttribute("data-project-repo-url");
      const videoUrl = button.getAttribute("data-project-video-url");
      const imageUrl = button.getAttribute("data-project-image-url");

      modalTitle.textContent = title;
      modalDesc.textContent = desc;

      if (videoUrl) {
        modalVideo.style.display = "block";
        modalVideo.querySelector("source").src = videoUrl;
        modalVideo.load();
        modalVideo
          .play()
          .catch((e) => console.log("Autoplay do modal bloqueado:", e));
      } else if (imageUrl) {
        modalImage.style.display = "block";
        modalImage.src = imageUrl;
      }

      if (techList) {
        techList.split(",").forEach((tech) => {
          const techTag = document.createElement("span");
          techTag.className = "badge";
          techTag.textContent = tech.trim();
          modalTech.appendChild(techTag);
        });
      }

      updateLinkButton(modalLiveLink, liveUrl);
      updateLinkButton(modalRepoLink, repoUrl);
    });

    projectModalEl.addEventListener("hidden.bs.modal", function () {
      if (modalVideo && typeof modalVideo.pause === "function") {
        modalVideo.pause();
        modalVideo.querySelector("source").src = "";
      }
    });

    function updateLinkButton(element, url) {
      if (element) {
        if (url && url !== "#") {
          element.href = url;
          element.style.display = "inline-block";
        } else {
          element.style.display = "none";
        }
      }
    }
  }

  // Lógica do Filtro de Projetos
  const filterContainer = document.querySelector("#portfolio-filters");
  if (filterContainer) {
    const projectCards = document.querySelectorAll(".project-card-wrapper");
    filterContainer.addEventListener("click", (e) => {
      const targetButton = e.target.closest("button");
      if (!targetButton) return;

      filterContainer.querySelector(".active").classList.remove("active");
      targetButton.classList.add("active");

      const filter = targetButton.getAttribute("data-filter");

      projectCards.forEach((card) => {
        card.style.transition = "opacity 0.4s ease, transform 0.4s ease";

        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "block";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 10);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.95)";
          setTimeout(() => {
            card.style.display = "none";
          }, 400);
        }
      });
    });
  }

  // Lógica para Preview de Vídeo no Hover do Card
  const videoCards = document.querySelectorAll(".project-card.video-card");
  videoCards.forEach((card) => {
    const previewVideo = card.querySelector(".preview-video");
    if (previewVideo) {
      card.addEventListener("mouseenter", () => {
        previewVideo
          .play()
          .catch((e) => console.log("Preview autoplay bloqueado:", e));
      });
      card.addEventListener("mouseleave", () => {
        previewVideo.pause();
        previewVideo.currentTime = 0;
      });
    }
  });

  // Lógica para Navegação Suave e Link Ativo
  document
    .querySelectorAll('a[href^="#"]:not([href="#"])')
    .forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (this.hasAttribute("data-bs-toggle")) return;

        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          const navbarHeight =
            document.querySelector(".navbar.fixed-top")?.offsetHeight || 0;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - navbarHeight - 20;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      });
    });

  const navLinks = document.querySelectorAll(
    '.navbar-nav .nav-link[href^="#"]'
  );
  const sections = Array.from(navLinks)
    .map((link) => {
      const selector = link.getAttribute("href");
      return selector && selector.length > 1
        ? document.querySelector(selector)
        : null;
    })
    .filter(Boolean);
  function throttle(func, limit) {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  window.addEventListener(
    "scroll",
    throttle(() => {
      let currentSectionId = "";
      const navbarHeight =
        document.querySelector(".navbar.fixed-top")?.offsetHeight || 0;
      const scrollPosition = window.pageYOffset + navbarHeight + 50;

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          currentSectionId = "#" + section.id;
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === currentSectionId) {
          link.classList.add("active");
        }
      });
    }, 150)
  );

  // Lógica para o botão "Voltar ao Topo"
  const backToTopButton = document.getElementById("back-to-top");
  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add("active");
      } else {
        backToTopButton.classList.remove("active");
      }
    });

    backToTopButton.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});
