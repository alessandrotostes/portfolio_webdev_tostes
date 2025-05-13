// Script para modal de projeto com iframe e navegação suave
document.addEventListener("DOMContentLoaded", function () {
  const projectModalEl = document.getElementById("projectModal");
  const projectModalInstance = projectModalEl
    ? new bootstrap.Modal(projectModalEl)
    : null;
  const modalProjectTitle = document.getElementById("modalProjectTitle");
  const modalProjectDesc = document.getElementById("modalProjectDesc");
  const modalProjectTech = document.getElementById("modalProjectTech");
  const modalProjectLiveLink = document.getElementById("modalProjectLiveLink");
  const modalProjectRepoLink = document.getElementById("modalProjectRepoLink");
  const modalProjectIframe = document.getElementById("modalProjectIframe");
  const iframeOverlay = projectModalEl
    ? projectModalEl.querySelector(".iframe-overlay")
    : null;

  // --- Event Listener para MODAL DE PROJETO (clique no botão "Ver Detalhes") ---
  if (projectModalEl) {
    projectModalEl.addEventListener("show.bs.modal", function (event) {
      const button = event.relatedTarget; // Botão que acionou o modal
      if (!button) return;

      // Extrai informações dos atributos data-*
      const title = button.getAttribute("data-project-title");
      const desc = button.getAttribute("data-project-desc");
      const tech = button.getAttribute("data-project-tech");
      const liveUrl = button.getAttribute("data-project-live-url");
      const repoUrl = button.getAttribute("data-project-repo-url");

      // Atualiza o conteúdo do modal
      if (modalProjectTitle) modalProjectTitle.textContent = title;
      if (modalProjectDesc) modalProjectDesc.textContent = desc;
      if (modalProjectTech)
        modalProjectTech.textContent = tech
          ? tech
              .split(",")
              .map((t) => t.trim())
              .join(", ")
          : "N/A"; // Formata tecnologias

      // Atualiza links
      if (modalProjectLiveLink) {
        modalProjectLiveLink.href = liveUrl && liveUrl !== "#" ? liveUrl : "#";
        modalProjectLiveLink.style.display =
          liveUrl && liveUrl !== "#" ? "inline-block" : "none";
      }
      if (modalProjectRepoLink) {
        modalProjectRepoLink.href = repoUrl && repoUrl !== "#" ? repoUrl : "#";
        modalProjectRepoLink.style.display =
          repoUrl && repoUrl !== "#" ? "inline-block" : "none";
      }

      // Tenta carregar o iframe (mantendo a lógica de fallback)
      if (modalProjectIframe && liveUrl && liveUrl !== "#") {
        modalProjectIframe.src = "about:blank"; // Limpa antes de carregar
        iframeOverlay.style.display = "flex"; // Mostra overlay inicialmente
        modalProjectIframe.style.opacity = "0"; // Esconde iframe

        setTimeout(() => {
          modalProjectIframe.src = liveUrl;
        }, 100);

        let iframeLoaded = false;
        modalProjectIframe.onload = () => {
          iframeLoaded = true;
          try {
            const iframeDoc = modalProjectIframe.contentWindow.document;
            iframeOverlay.style.display = "none";
            modalProjectIframe.style.opacity = "1";
          } catch (e) {
            console.warn(
              "Iframe loading likely blocked by cross-origin policy for URL:",
              liveUrl
            );
            iframeOverlay.style.display = "flex";
            modalProjectIframe.style.opacity = "0";
          }
        };

        setTimeout(() => {
          if (!iframeLoaded) {
            console.warn(
              "Iframe onload event did not fire. Assuming blocked for URL:",
              liveUrl
            );
            iframeOverlay.style.display = "flex";
            modalProjectIframe.style.opacity = "0";
          }
        }, 3500); // Aumentado ligeiramente o timeout
      } else if (modalProjectIframe) {
        // Se não há URL válida, esconde o iframe e mostra overlay
        modalProjectIframe.src = "about:blank";
        iframeOverlay.style.display = "flex";
        modalProjectIframe.style.opacity = "0";
      }
    });

    // Limpa o iframe quando o modal é fechado
    projectModalEl.addEventListener("hidden.bs.modal", function () {
      if (modalProjectIframe) {
        modalProjectIframe.src = "about:blank";
      }
    });
  }

  // --- Lógica para NAVEGAÇÃO SUAVE --- (Scroll para secções)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#" || this.hasAttribute("data-bs-toggle")) {
        return;
      }
      const targetElement = document.querySelector(href);
      if (targetElement) {
        e.preventDefault();
        // Ajuste para compensar a altura da navbar fixa
        const navbarHeight =
          document.querySelector(".navbar.sticky-top")?.offsetHeight || 0;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight - 10; // 10px de margem extra

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Atualiza o link ativo na navbar (opcional)
        document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === href) {
            link.classList.add("active");
          }
        });
      }
    });
  });

  // Opcional: Atualizar link ativo ao rolar a página
  const navLinks = document.querySelectorAll(
    '.navbar-nav .nav-link[href^="#"]'
  );
  const sections = Array.from(navLinks)
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  window.addEventListener("scroll", () => {
    let currentSectionId = "";
    const scrollPosition = window.pageYOffset;
    const navbarHeight =
      document.querySelector(".navbar.sticky-top")?.offsetHeight || 0;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - navbarHeight - 50; // Ajuste o offset conforme necessário
      if (scrollPosition >= sectionTop) {
        currentSectionId = "#" + section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === currentSectionId) {
        link.classList.add("active");
      }
    });
    // Garante que o 'Sobre' fique ativo se estiver no topo
    if (currentSectionId === "" && scrollPosition < sections[0]?.offsetTop) {
      document
        .querySelector('.navbar-nav .nav-link[href="#sobre"]')
        ?.classList.add("active");
    }
  });
});
