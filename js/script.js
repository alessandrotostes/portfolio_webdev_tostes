document.addEventListener("DOMContentLoaded", function () {
  // --- INICIALIZAÇÃO DE BIBLIOTECAS ---

  // 1. Typed.js para o efeito de digitação no header
  if (document.getElementById("typed-text")) {
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
    new Typed("#typed-text", options);
  }

  // --- FUNCIONALIDADES DO PORTFÓLIO ---

  // 2. Lógica do Alternador de Tema (Claro/Escuro)
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

  // 3. Lógica do Modal de Projeto
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

      // Limpa o conteúdo anterior
      modalTitle.textContent = "";
      modalDesc.textContent = "";
      modalTech.innerHTML = "";
      modalImage.src = "";
      modalVideo.querySelector("source").src = "";
      modalImage.style.display = "none";
      modalVideo.style.display = "none";

      // Extrai informações dos atributos data-*
      const title = button.getAttribute("data-project-title");
      const desc = button.getAttribute("data-project-desc");
      const techList = button.getAttribute("data-project-tech");
      const liveUrl = button.getAttribute("data-project-live-url");
      const repoUrl = button.getAttribute("data-project-repo-url");
      const videoUrl = button.getAttribute("data-project-video-url");
      const imageUrl = button.getAttribute("data-project-image-url");

      // Preenche o conteúdo do modal
      modalTitle.textContent = title;
      modalDesc.textContent = desc;

      // Decide se mostra imagem ou vídeo
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

      // Cria as 'tags' de tecnologia
      if (techList) {
        techList.split(",").forEach((tech) => {
          const techTag = document.createElement("span");
          techTag.className = "badge";
          techTag.textContent = tech.trim();
          modalTech.appendChild(techTag);
        });
      }

      // Atualiza e exibe/oculta os botões de link
      updateLinkButton(modalLiveLink, liveUrl);
      updateLinkButton(modalRepoLink, repoUrl);
    });

    // Pausa o vídeo quando o modal é fechado
    projectModalEl.addEventListener("hidden.bs.modal", function () {
      if (modalVideo && typeof modalVideo.pause === "function") {
        modalVideo.pause();
        modalVideo.querySelector("source").src = "";
      }
    });
  }

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

  // 4. Lógica do Filtro de Projetos
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

  // 5. Lógica para Preview de Vídeo no Hover do Card
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

  // --- NAVEGAÇÃO E SCROLL (CÓDIGO ORIGINAL) ---

  // 6. Lógica para Navegação Suave e Link Ativo
  // ***** ESTA É A LINHA CORRIGIDA *****
  document
    .querySelectorAll('a[href^="#"]:not([href="#"])')
    .forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        // A verificação abaixo se torna uma segurança extra, mas o erro principal é corrigido pelo seletor acima
        if (href === "#" || this.hasAttribute("data-bs-toggle")) return;

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
      // Adiciona uma verificação para garantir que o href não seja apenas "#"
      const selector = link.getAttribute("href");
      return selector && selector.length > 1
        ? document.querySelector(selector)
        : null;
    })
    .filter(Boolean);

  window.addEventListener("scroll", () => {
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
  });

  // 7. Lógica para o botão "Voltar ao Topo"
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
