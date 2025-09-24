// js/script.js
class ModernPortfolio {
  constructor() {
    this.isLoaded = false;
    this.currentSection = "home";
    this.isMenuOpen = false;
    this.isMobile = window.innerWidth < 768;
    this.isTouch = "ontouchstart" in window;
    this.scrollProgress = 0;
    this.lastScrollY = 0;
    this.ticking = false;

    // Performance monitoring
    this.performanceMetrics = {
      loadTime: 0,
      renderTime: 0,
      interactionTime: 0,
    };

    this.init();
  }

  // Initialize
  init() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.onDOMReady());
    } else {
      this.onDOMReady();
    }
  }

  // DOM Ready
  onDOMReady() {
    const startTime = performance.now();

    this.setupEventListeners();
    this.setupNavigation();
    this.setupMobileMenuActions();
    this.setupThemeToggle();
    this.setupScrollEffects();
    this.setupTypedText();
    this.setupCounters();
    this.setupProjectFilters();
    this.setupProjectModal();
    this.setupCustomCursor();
    this.setupTouchGestures();
    this.setupIntersectionObserver();
    this.setupPerformanceMonitoring();
    this.hideLoadingScreen();
    this.initializeAOS();

    this.performanceMetrics.loadTime = performance.now() - startTime;
    this.isLoaded = true;

    console.log(
      `🚀 Tostes - Portfolio carregado em ${this.performanceMetrics.loadTime.toFixed(
        2
      )}ms`
    );
  }

  // Event Listeners
  setupEventListeners() {
    // Scroll events with RAF optimization
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
      { passive: true }
    );

    // Resize events with debounce
    window.addEventListener(
      "resize",
      this.debounce(() => {
        this.handleResize();
      }, 250)
    );

    // Keyboard navigation
    document.addEventListener("keydown", this.handleKeyboard.bind(this));

    // Visibility change for performance
    document.addEventListener(
      "visibilitychange",
      this.handleVisibilityChange.bind(this)
    );

    // Page unload for cleanup
    window.addEventListener("beforeunload", this.cleanup.bind(this));

    // Listener de Clique Unificado (controla menu, tema e navegação)
    document.addEventListener("click", (e) => {
      const navLink = e.target.closest('a[href^="#"]');
      const themeToggle = e.target.closest("#theme-toggle");
      const navToggle = e.target.closest("#nav-toggle");

      // 1. Lógica para abrir/fechar o menu
      if (navToggle) {
        e.preventDefault();
        this.toggleMenu();
        return;
      }

      // 2. Lógica do botão de tema
      if (themeToggle) {
        e.preventDefault();
        const currentTheme =
          document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";

        this.setTheme(newTheme);
        localStorage.setItem("theme", newTheme);

        // Feedback visual
        themeToggle.style.transform = "rotate(360deg) scale(1.1)";
        setTimeout(() => {
          themeToggle.style.transform = "";
        }, 300);

        if (this.isTouch && "vibrate" in navigator) {
          navigator.vibrate(50);
        }
        return;
      }

      // 3. Lógica de navegação suave (rolagem)
      if (navLink) {
        e.preventDefault();
        const targetId = navLink.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          this.smoothScrollTo(targetElement);
          this.updateActiveNavLink(navLink);
          this.updateActiveIndicator(); // <-- ESTA É A LINHA QUE FALTAVA
        }
        return;
      }
    });
  }
  setupMobileMenuActions() {
    if (this.isMobile) {
      const navMenu = document.querySelector(".nav__menu");
      const themeToggle = document.querySelector("#theme-toggle");

      if (navMenu && themeToggle) {
        // Move o botão de tema para dentro do menu
        navMenu.appendChild(themeToggle);
      }
    }
  }
  // Navigation Setup
  setupNavigation() {
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav__link");

    // Fecha o menu quando um dos links de navegação é clicado
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        this.closeMenu();
      });
    });

    // Fecha o menu ao clicar fora dele (útil se você voltar para um menu não-tela cheia)
    document.addEventListener("click", (e) => {
      const navToggle = document.getElementById("nav-toggle");
      if (
        this.isMenuOpen &&
        !navToggle?.contains(e.target) &&
        !navMenu?.contains(e.target)
      ) {
        this.closeMenu();
      }
    });

    // Fecha o menu ao pressionar a tecla "Escape"
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isMenuOpen) {
        this.closeMenu();
      }
    });
  }

  toggleMenu() {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");

    this.isMenuOpen = !this.isMenuOpen;

    navMenu?.classList.toggle("show-menu");
    navToggle?.classList.toggle("active");

    // Prevent body scroll when menu is open
    document.body.style.overflow = this.isMenuOpen ? "hidden" : "";

    // Update ARIA attributes for accessibility
    navToggle?.setAttribute("aria-expanded", this.isMenuOpen.toString());
    navMenu?.setAttribute("aria-hidden", (!this.isMenuOpen).toString());

    // Add haptic feedback on mobile
    if (this.isTouch && "vibrate" in navigator) {
      navigator.vibrate(50);
    }
  }

  closeMenu() {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");

    this.isMenuOpen = false;
    navMenu?.classList.remove("show-menu");
    navToggle?.classList.remove("active");
    document.body.style.overflow = "";

    navToggle?.setAttribute("aria-expanded", "false");
    navMenu?.setAttribute("aria-hidden", "true");
  }

  // Handle navigation clicks
  handleNavClick(event) {
    // 1. Procura pelo link <a> mais próximo que foi clicado,
    //    MAS SÓ SE o `href` dele começar com "#"
    const link = event.target.closest('a[href^="#"]');

    // 2. Se o clique não foi em um link de navegação interna,
    //    a função para aqui e não faz nada.
    if (!link) return;

    // 3. Se foi em um link interno, ele previne o salto padrão
    //    para executar a rolagem suave.
    event.preventDefault();

    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      this.smoothScrollTo(targetElement);
      this.updateActiveNavLink(link);

      // Add haptic feedback
      if (this.isTouch && "vibrate" in navigator) {
        navigator.vibrate(30);
      }
    }
  }
  // Smooth scroll with easing
  smoothScrollTo(targetElement) {
    const headerHeight = document.querySelector(".header")?.offsetHeight || 64;
    const targetPosition =
      targetElement.getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight;

    // Use native smooth scroll with fallback
    if ("scrollBehavior" in document.documentElement.style) {
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    } else {
      // Fallback smooth scroll animation
      this.animateScrollTo(targetPosition);
    }
  }

  // Fallback smooth scroll animation
  animateScrollTo(targetPosition) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800;
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);

      // Easing function (ease-out-cubic)
      const easeOutCubic = 1 - Math.pow(1 - percentage, 3);

      window.scrollTo(0, startPosition + distance * easeOutCubic);

      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  // Update active navigation link
  updateActiveNavLink(activeLink) {
    const navLinks = document.querySelectorAll(".nav__link");
    navLinks.forEach((link) => link.classList.remove("active-link"));
    activeLink.classList.add("active-link");

    const href = activeLink.getAttribute("href");
    this.currentSection = href.substring(1);
  }

  // Theme Toggle with system preference detection
  setupThemeToggle() {
    const themeToggle = document.getElementById("theme-toggle");
    if (!themeToggle) return;

    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

    this.setTheme(initialTheme);

    // Listen for system theme changes
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        if (!localStorage.getItem("theme")) {
          this.setTheme(e.matches ? "dark" : "light");
        }
      });
  }

  setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);

    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        "content",
        theme === "dark" ? "#0f172a" : "#ffffff"
      );
    }
  }

  // Scroll Effects with performance optimization
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

    this.handleScroll(); // Initial call
  }

  // Handle scroll events
  handleScroll() {
    const header = document.getElementById("header");
    const scrollToTop = document.getElementById("scrollToTop");
    const navProgress = document.getElementById("navProgress");
    const scrollY = this.lastScrollY;

    // Header background on scroll
    if (header) {
      header.classList.toggle("scrolled", scrollY > 50);
    }

    // Show/hide scroll to top button
    if (scrollToTop) {
      scrollToTop.classList.toggle("visible", scrollY > 300);
    }

    // Update navigation progress bar
    if (navProgress) {
      const winHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollY / winHeight) * 100;
      navProgress.style.width = `${Math.min(scrolled, 100)}%`;
      this.scrollProgress = scrolled;
    }

    // Update active navigation based on scroll position
    this.updateActiveNavOnScroll();

    // Parallax effects
    this.updateParallaxEffects(scrollY);
  }

  // Update active nav based on scroll position
  updateActiveNavOnScroll() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll('.nav__link[href^="#"]');

    let currentSectionId = "";

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;

      if (sectionTop <= 150 && sectionTop + sectionHeight > 150) {
        currentSectionId = section.getAttribute("id");
      }
    });

    // Update nav links
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      const isActive = href === `#${currentSectionId}`;
      link.classList.toggle("active-link", isActive);
    });

    this.currentSection = currentSectionId || "home";
  }

  // Advanced parallax effects
  updateParallaxEffects(scrollY) {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    const heroHeight = hero.offsetHeight;
    const scrollPercent = scrollY / heroHeight;

    if (scrollPercent <= 1) {
      // Floating cards parallax
      const floatingCards = document.querySelectorAll(".floating-card");
      floatingCards.forEach((card, index) => {
        const speed = 0.3 + index * 0.1;
        const yPos = scrollY * speed;
        card.style.transform = `translateY(${yPos}px)`;
      });

      // Background gradients parallax
      const bgGradients = document.querySelectorAll(".bg-gradient");
      bgGradients.forEach((gradient, index) => {
        const speed = 0.2 + index * 0.05;
        const yPos = scrollY * speed;
        gradient.style.transform = `translateY(${yPos}px)`;
      });

      // Hero image parallax
      const heroImage = document.querySelector(".hero__image");
      if (heroImage) {
        const imageSpeed = 0.5;
      }
    }
  }

  // Handle resize events
  handleResize() {
    const wasMobile = this.isMobile;
    this.isMobile = window.innerWidth < 768;

    // Close mobile menu if switching to desktop
    if (wasMobile && !this.isMobile && this.isMenuOpen) {
      this.closeMenu();
    }

    // Update AOS if available
    if (typeof AOS !== "undefined") {
      AOS.refresh();
    }

    // Reset counters for re-animation

    // Update custom cursor visibility
    this.updateCursorVisibility();
  }

  // Custom Cursor (Removido a pedido do usuário)
  setupCustomCursor() {
    const cursor = document.getElementById("cursor");
    if (cursor) {
      cursor.style.display = "none";
    }
  }

  updateCursorVisibility() {
    const cursor = document.getElementById("cursor");
    if (cursor) {
      cursor.style.display = "none";
    }
  }

  // Touch Gestures
  setupTouchGestures() {
    if (!this.isTouch) return;

    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;

    document.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        touchStartTime = Date.now();
      },
      { passive: true }
    );

    document.addEventListener(
      "touchend",
      (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const touchEndTime = Date.now();

        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        const deltaTime = touchEndTime - touchStartTime;

        // Swipe detection
        if (
          Math.abs(deltaX) > Math.abs(deltaY) &&
          Math.abs(deltaX) > 50 &&
          deltaTime < 300
        ) {
          if (deltaX > 0 && !this.isMenuOpen && touchStartX < 50) {
            // Swipe right from left edge - open menu
            this.toggleMenu();
          } else if (deltaX < 0 && this.isMenuOpen) {
            // Swipe left - close menu
            this.closeMenu();
          }
        }

        // Double tap to scroll to top
        if (Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10 && deltaTime < 300) {
          if (this.lastTapTime && touchStartTime - this.lastTapTime < 300) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            if ("vibrate" in navigator) {
              navigator.vibrate(100);
            }
          }
          this.lastTapTime = touchStartTime;
        }
      },
      { passive: true }
    );
  }

  // Intersection Observer for animations
  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");

          // Trigger counter animation
          if (entry.target.hasAttribute("data-count")) {
            this.animateCounter(entry.target);
          }

          if (
            entry.target.classList.contains("typed-container") &&
            this.typedInstance
          ) {
            this.typedInstance.start();
          }
        } else {
          // QUANDO O ELEMENTO NÃO ESTÁ VISÍVEL
          if (
            entry.target.classList.contains("typed-container") &&
            this.typedInstance
          ) {
            this.typedInstance.stop();
          }
        }
      });
    }, observerOptions);

    // Observe elements
    const observeElements = document.querySelectorAll(
      "[data-aos], [data-count], .project-card, .tech-tag, .typed-container"
    );
    observeElements.forEach((el) => {
      this.intersectionObserver.observe(el);
    });
  }

  // Typed Text Effect
  setupTypedText() {
    const typedElement = document.getElementById("typed-text");
    if (!typedElement || typeof Typed === "undefined") return;

    const options = {
      strings: [
        "Soluções digitais inovadoras",
        "Aplicações web modernas",
        "Sistemas de gestão",
        "Experiências memoráveis",
        "Melhoria contínua",
        "Resultados excepcionais",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      startDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      smartBackspace: true,
      fadeOut: true,
      fadeOutClass: "typed-fade-out",
      fadeOutDelay: 500,
    };

    this.typedInstance = new Typed(typedElement, options);
  }

  // Counter Animation with Intersection Observer
  setupCounters() {
    // Counters are now handled by intersection observer
    this.countersAnimated = new Set();
  }

  // Animate counter with advanced easing
  // animateCounter(element) {
  //   if (this.countersAnimated.has(element)) return;

  //   const target = parseInt(element.dataset.count);
  //   const duration = 2000;
  //   const start = 0;
  //   let startTime = null;

  //   this.countersAnimated.add(element);

  //   const animate = (timestamp) => {
  //     if (!startTime) startTime = timestamp;
  //     const progress = timestamp - startTime;
  //     const percentage = Math.min(progress / duration, 1);

  //     // Advanced easing function (ease-out-expo)
  //     const easeOutExpo =
  //       percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
  //     const current = Math.floor(start + (target - start) * easeOutExpo);

  //     element.textContent = current.toLocaleString();

  //     if (percentage < 1) {
  //       requestAnimationFrame(animate);
  //     } else {
  //       element.textContent = target.toLocaleString();

  //       // Add celebration effect
  //       element.style.transform = "scale(1.1)";
  //       element.style.color = "var(--color-primary)";
  //       setTimeout(() => {
  //         element.style.transform = "";
  //         element.style.color = "";
  //       }, 300);
  //     }
  //   };

  //   requestAnimationFrame(animate);
  // }

  // // Reset counters
  // resetCounters() {
  //   this.countersAnimated.clear();
  //   const counters = document.querySelectorAll("[data-count]");
  //   counters.forEach((counter) => {
  //     counter.textContent = "0";
  //   });
  // }

  // Project Filters with advanced animations
  setupProjectFilters() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        // Update active filter
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        // Filter projects with staggered animation
        this.filterProjects(projectCards, filter);

        // Haptic feedback
        if (this.isTouch && "vibrate" in navigator) {
          navigator.vibrate(30);
        }
      });
    });
  }

  // Advanced project filtering with staggered animations
  filterProjects(cards, filter) {
    const timeline = [];

    cards.forEach((card, index) => {
      const category = card.dataset.category;
      const shouldShow = filter === "all" || category === filter;

      timeline.push({
        card,
        shouldShow,
        delay: index * 100,
      });
    });

    // Animate out first
    timeline.forEach(({ card, shouldShow, delay }) => {
      if (!shouldShow) {
        setTimeout(() => {
          card.style.opacity = "0";
          card.style.transform = "translateY(-20px) scale(0.9)";

          setTimeout(() => {
            card.style.display = "none";
          }, 300);
        }, delay * 0.5);
      }
    });

    // Then animate in
    setTimeout(() => {
      timeline.forEach(({ card, shouldShow, delay }) => {
        if (shouldShow) {
          setTimeout(() => {
            card.style.display = "block";
            card.style.opacity = "0";
            card.style.transform = "translateY(20px) scale(0.9)";

            requestAnimationFrame(() => {
              card.style.opacity = "1";
              card.style.transform = "translateY(0) scale(1)";
            });
          }, delay);
        }
      });
    }, 400);
  }

  // Project Modal
  setupProjectModal() {
    const modal = document.getElementById("projectModal");
    const modalCloseBtn = document.getElementById("modalCloseBtn");
    const modalTriggers = document.querySelectorAll(".project-modal-trigger");

    if (!modal) return;

    // Modal triggers
    modalTriggers.forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        this.openProjectModal(trigger);
      });
    });

    // Close modal
    modalCloseBtn?.addEventListener("click", () => {
      this.closeProjectModal();
    });

    // Close on overlay click
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        this.closeProjectModal();
      }
    });

    // Close on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("visible")) {
        this.closeProjectModal();
      }
    });
  }

  openProjectModal(trigger) {
    const modal = document.getElementById("projectModal");
    const modalTitle = document.getElementById("modalProjectTitle");
    const modalImage = document.getElementById("modalProjectImage");
    const modalVideo = document.getElementById("modalProjectVideo");
    const modalDesc = document.getElementById("modalProjectDesc");
    const modalTech = document.getElementById("modalProjectTech");
    const modalLiveLink = document.getElementById("modalProjectLiveLink");
    const modalRepoLink = document.getElementById("modalProjectRepoLink");

    // Get data from trigger
    const title = trigger.dataset.projectTitle;
    const imageUrl = trigger.dataset.projectImageUrl;
    const videoUrl = trigger.dataset.projectVideoUrl;
    const desc = trigger.dataset.projectDesc;
    const tech = trigger.dataset.projectTech;
    const liveUrl = trigger.dataset.projectLiveUrl;
    const repoUrl = trigger.dataset.projectRepoUrl;

    // Populate modal
    if (modalTitle) modalTitle.textContent = title;
    if (modalDesc) modalDesc.textContent = desc;

    // Handle media
    if (videoUrl && modalVideo) {
      modalVideo.src = videoUrl;
      modalVideo.style.display = "block";
      modalImage.style.display = "none";
    } else if (imageUrl && modalImage) {
      modalImage.src = imageUrl;
      modalImage.style.display = "block";
      modalVideo.style.display = "none";
    }

    // Handle tech tags
    if (modalTech && tech) {
      modalTech.innerHTML = "";
      tech.split(",").forEach((techItem) => {
        const tag = document.createElement("span");
        tag.className = "tech-tag";
        tag.textContent = techItem.trim();
        modalTech.appendChild(tag);
      });
    }

    // Handle links
    if (modalLiveLink && liveUrl) {
      modalLiveLink.href = liveUrl;
      modalLiveLink.style.display = liveUrl === "#" ? "none" : "inline-flex";
    }

    if (modalRepoLink && repoUrl) {
      modalRepoLink.href = repoUrl;
      modalRepoLink.style.display = repoUrl === "#" ? "none" : "inline-flex";
    }

    // Show modal
    modal.classList.add("visible");
    document.body.style.overflow = "hidden";

    // Focus management for accessibility
    modalCloseBtn?.focus();
  }

  closeProjectModal() {
    const modal = document.getElementById("projectModal");
    const modalVideo = document.getElementById("modalProjectVideo");

    modal.classList.remove("visible");
    document.body.style.overflow = "";

    // Pause video if playing
    if (modalVideo) {
      modalVideo.pause();
    }
  }

  // Performance Monitoring
  setupPerformanceMonitoring() {
    if (!("performance" in window)) return;

    // Monitor Core Web Vitals
    if ("PerformanceObserver" in window) {
      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log(`📊 LCP: ${entry.startTime.toFixed(2)}ms`);
        });
      });

      try {
        lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });
      } catch (e) {
        console.warn("LCP observer not supported");
      }

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fid = entry.processingStart - entry.startTime;
          console.log(`⚡ FID: ${fid.toFixed(2)}ms`);
        });
      });

      try {
        fidObserver.observe({ entryTypes: ["first-input"] });
      } catch (e) {
        console.warn("FID observer not supported");
      }

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        if (clsValue > 0) {
          console.log(`📏 CLS: ${clsValue.toFixed(4)}`);
        }
      });

      try {
        clsObserver.observe({ entryTypes: ["layout-shift"] });
      } catch (e) {
        console.warn("CLS observer not supported");
      }
    }

    // Memory usage monitoring
    if ("memory" in performance) {
      setInterval(() => {
        const memoryInfo = performance.memory;
        const usedMB = (memoryInfo.usedJSHeapSize / 1048576).toFixed(2);
        const totalMB = (memoryInfo.totalJSHeapSize / 1048576).toFixed(2);

        if (usedMB > 50) {
          // Alert if using more than 50MB
          console.warn(`🧠 High memory usage: ${usedMB}MB / ${totalMB}MB`);
        }
      }, 30000); // Check every 30 seconds
    }
  }

  // Handle visibility change for performance
  handleVisibilityChange() {
    if (document.hidden) {
      // Page is hidden - pause animations
      this.pauseAnimations();
    } else {
      // Page is visible - resume animations
      this.resumeAnimations();
    }
  }

  pauseAnimations() {
    // Pause typed.js if active
    if (this.typedInstance) {
      this.typedInstance.stop();
    }

    // Pause CSS animations
    document.body.style.animationPlayState = "paused";
  }

  resumeAnimations() {
    // Resume typed.js if active
    if (this.typedInstance) {
      this.typedInstance.start();
    }

    // Resume CSS animations
    document.body.style.animationPlayState = "running";
  }

  // Keyboard navigation
  handleKeyboard(event) {
    // Navigation with arrow keys (Alt + Arrow)
    if (event.altKey) {
      switch (event.key) {
        case "ArrowUp":
          event.preventDefault();
          this.navigateToSection("prev");
          break;
        case "ArrowDown":
          event.preventDefault();
          this.navigateToSection("next");
          break;
      }
    }

    // Quick navigation with number keys
    if (event.ctrlKey || event.metaKey) {
      const sectionMap = {
        1: "home",
        2: "projects",
        3: "about",
        4: "contact",
      };

      if (sectionMap[event.key]) {
        event.preventDefault();
        const targetSection = document.getElementById(sectionMap[event.key]);
        if (targetSection) {
          this.smoothScrollTo(targetSection);
        }
      }
    }

    // Enter key for custom buttons
    if (event.key === "Enter" && event.target.matches('[role="button"]')) {
      event.target.click();
    }
  }

  // Navigate to prev/next section
  navigateToSection(direction) {
    const sections = ["home", "projects", "about", "contact"];
    const currentIndex = sections.indexOf(this.currentSection);

    let nextIndex;
    if (direction === "next") {
      nextIndex = (currentIndex + 1) % sections.length;
    } else {
      nextIndex = (currentIndex - 1 + sections.length) % sections.length;
    }

    const targetSection = document.getElementById(sections[nextIndex]);
    if (targetSection) {
      this.smoothScrollTo(targetSection);
    }
  }

  // Hide loading screen with advanced animation
  hideLoadingScreen() {
    const loadingScreen = document.getElementById("loadingScreen");
    if (!loadingScreen) return;

    // Add delay to show loading animation
    setTimeout(() => {
      loadingScreen.classList.add("hidden");

      // Remove from DOM after transition
      setTimeout(() => {
        if (loadingScreen.parentNode) {
          loadingScreen.parentNode.removeChild(loadingScreen);
        }
      }, 500);
    }, 1500);
  }

  // Initialize AOS with mobile optimizations
  initializeAOS() {
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: this.isMobile ? 600 : 1000,
        delay: this.isMobile ? 50 : 100,
        once: true,
        offset: this.isMobile ? 50 : 120,
        easing: "ease-out-cubic",
        disable: function () {
          return window.innerWidth < 576; // Disable on very small screens
        },
      });

      // Refresh AOS on orientation change
      window.addEventListener("orientationchange", () => {
        setTimeout(() => {
          AOS.refresh();
        }, 500);
      });
    }
  }

  // Utility functions
  throttle(func, limit) {
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

  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Public methods
  refreshAOS() {
    if (typeof AOS !== "undefined") {
      AOS.refresh();
    }
  }

  getCurrentSection() {
    return this.currentSection;
  }

  getPerformanceMetrics() {
    return this.performanceMetrics;
  }

  // Cleanup method
  cleanup() {
    // Remove event listeners
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }

    // Destroy typed.js instance
    if (this.typedInstance) {
      this.typedInstance.destroy();
    }

    // Reset body styles
    document.body.style.overflow = "";
    document.body.style.animationPlayState = "";

    console.log("🔄 Modern Portfolio cleaned up");
  }

  // Destroy method for complete cleanup
  destroy() {
    this.cleanup();

    // Clear any remaining timeouts/intervals
    if (this.loadingTimeout) {
      clearTimeout(this.loadingTimeout);
    }

    // Remove all custom event listeners
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
    document.removeEventListener("click", this.handleNavClick);
    document.removeEventListener("keydown", this.handleKeyboard);
    document.removeEventListener(
      "visibilitychange",
      this.handleVisibilityChange
    );

    console.log("🗑️ Modern Portfolio completely destroyed");
  }
}

// Enhanced Project Showcase with mobile optimizations
class EnhancedProjectShowcase {
  constructor() {
    this.currentProject = 0;
    this.projects = [];
    this.isTouch = "ontouchstart" in window;
    this.init();
  }

  init() {
    this.setupProjectCards();
    this.setupKeyboardNavigation();
    this.setupTouchNavigation();
    this.preloadProjectImages();
    this.setupProjectPreview();
    this.setupFeaturedVideo();
  }

  setupFeaturedVideo() {
    const video = document.getElementById("featuredVideo");
    const playBtn = document.getElementById("featuredPlayBtn");
    const playIcon = playBtn?.querySelector("i");

    if (!video || !playBtn || !playIcon) return;

    // Initial state
    video.pause();
    playIcon.className = "fas fa-play";

    playBtn.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        playIcon.className = "fas fa-pause";
      } else {
        video.pause();
        playIcon.className = "fas fa-play";
      }
    });

    video.addEventListener("play", () => {
      playIcon.className = "fas fa-pause";
    });

    video.addEventListener("pause", () => {
      playIcon.className = "fas fa-play";
    });

    video.addEventListener("ended", () => {
      playIcon.className = "fas fa-play";
      video.currentTime = 0; // Reset video to start
    });
  }

  setupProjectCards() {
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card, index) => {
      // Enhanced click/touch handling
      card.addEventListener("click", (e) => {
        if (
          !e.target.closest(".project-btn") &&
          !e.target.closest(".project-modal-trigger")
        ) {
          this.showProjectPreview(card, index);
        }
      });

      // Keyboard support
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute(
        "aria-label",
        `Ver detalhes do projeto ${
          card.querySelector(".project-title")?.textContent
        }`
      );

      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.showProjectPreview(card, index);
        }
      });

      // Enhanced hover effects for non-touch devices
      if (!this.isTouch) {
        card.addEventListener("mouseenter", () => {
          this.previewProject(card);
        });

        card.addEventListener("mouseleave", () => {
          this.resetProjectPreview(card);
        });
      }
    });
  }

  setupKeyboardNavigation() {
    document.addEventListener("keydown", (e) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case "ArrowLeft":
            e.preventDefault();
            this.navigateProjects("prev");
            break;
          case "ArrowRight":
            e.preventDefault();
            this.navigateProjects("next");
            break;
        }
      }
    });
  }

  setupTouchNavigation() {
    if (!this.isTouch) return;

    const projectsGrid = document.querySelector(".projects__grid");
    if (!projectsGrid) return;

    let startX = 0;
    let startY = 0;

    projectsGrid.addEventListener(
      "touchstart",
      (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      },
      { passive: true }
    );

    projectsGrid.addEventListener(
      "touchend",
      (e) => {
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;

        const deltaX = endX - startX;
        const deltaY = endY - startY;

        // Horizontal swipe detection
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
          if (deltaX > 0) {
            this.navigateProjects("prev");
          } else {
            this.navigateProjects("next");
          }
        }
      },
      { passive: true }
    );
  }

  preloadProjectImages() {
    const projectImages = document.querySelectorAll(
      ".project-card img[data-src]"
    );

    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.classList.remove("lazy");
              imageObserver.unobserve(img);
            }
          });
        },
        {
          rootMargin: "50px",
        }
      );

      projectImages.forEach((img) => {
        imageObserver.observe(img);
      });
    }
  }

  setupProjectPreview() {
    // Add loading states for project images
    const projectImages = document.querySelectorAll(".project-card img");

    projectImages.forEach((img) => {
      img.addEventListener("load", () => {
        img.classList.add("loaded");
      });

      img.addEventListener("error", () => {
        img.classList.add("error");
        // Add fallback image or placeholder
      });
    });
  }

  showProjectPreview(card, index) {
    const projectInfo = this.extractProjectInfo(card);
    this.displayProjectModal(projectInfo);
    this.currentProject = index;

    // Add analytics tracking
    this.trackProjectView(projectInfo.title);
  }

  extractProjectInfo(card) {
    const title = card.querySelector(".project-title")?.textContent || "";
    const description =
      card.querySelector(".project-description")?.textContent || "";
    const tech = Array.from(card.querySelectorAll(".tech-tag")).map(
      (tag) => tag.textContent
    );
    const image = card.querySelector("img")?.src || "";

    return { title, description, tech, image };
  }

  displayProjectModal(projectInfo) {
    // Enhanced modal display with animations
    console.log("🚀 Exibindo projeto:", projectInfo.title);

    // Add haptic feedback on mobile
    if (this.isTouch && "vibrate" in navigator) {
      navigator.vibrate(50);
    }
  }

  previewProject(card) {
    // Enhanced preview with 3D effects
    card.style.transform = "translateY(-8px) rotateX(5deg)";
    card.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";

    const overlay = card.querySelector(".project-overlay");
    if (overlay) {
      overlay.style.opacity = "1";
      overlay.style.visibility = "visible";
    }
  }

  resetProjectPreview(card) {
    card.style.transform = "";
    card.style.boxShadow = "";

    const overlay = card.querySelector(".project-overlay");
    if (overlay) {
      overlay.style.opacity = "";
      overlay.style.visibility = "";
    }
  }

  navigateProjects(direction) {
    const visibleProjects = document.querySelectorAll(
      '.project-card:not([style*="display: none"])'
    );
    if (visibleProjects.length === 0) return;

    let newIndex;
    if (direction === "next") {
      newIndex = (this.currentProject + 1) % visibleProjects.length;
    } else {
      newIndex =
        (this.currentProject - 1 + visibleProjects.length) %
        visibleProjects.length;
    }

    const targetProject = visibleProjects[newIndex];
    targetProject.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    // Add focus for accessibility
    targetProject.focus();

    this.currentProject = newIndex;

    // Add haptic feedback
    if (this.isTouch && "vibrate" in navigator) {
      navigator.vibrate(30);
    }
  }

  trackProjectView(projectTitle) {
    // Analytics tracking
    if (typeof gtag !== "undefined") {
      gtag("event", "project_view", {
        project_name: projectTitle,
        event_category: "engagement",
      });
    }
  }
}

// Service Worker Registration for PWA features
class PWAManager {
  constructor() {
    this.init();
  }

  init() {
    if ("serviceWorker" in navigator) {
      this.registerServiceWorker();
    }

    this.setupInstallPrompt();
    this.setupOfflineDetection();
  }

  async registerServiceWorker() {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js");
      console.log("✅ Service Worker registrado:", registration);
    } catch (error) {
      console.log("❌ Falha ao registrar Service Worker:", error);
    }
  }

  setupInstallPrompt() {
    let deferredPrompt;

    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredPrompt = e;

      // Show install button or banner
      this.showInstallPrompt(deferredPrompt);
    });

    window.addEventListener("appinstalled", () => {
      console.log("📱 PWA instalado");
      deferredPrompt = null;
    });
  }

  showInstallPrompt(deferredPrompt) {
    // Create install prompt UI
    const installBanner = document.createElement("div");
    installBanner.className = "install-banner";
    installBanner.innerHTML = `
      <div class="install-content">
        <span>Instalar aplicativo para uma experiência melhor</span>
        <button class="install-btn">Instalar</button>
        <button class="install-close">×</button>
      </div>
    `;

    document.body.appendChild(installBanner);

    // Handle install button click
    installBanner
      .querySelector(".install-btn")
      .addEventListener("click", async () => {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`👤 Usuário ${outcome} a instalação`);
        installBanner.remove();
      });

    // Handle close button
    installBanner
      .querySelector(".install-close")
      .addEventListener("click", () => {
        installBanner.remove();
      });
  }

  setupOfflineDetection() {
    window.addEventListener("online", () => {
      this.showConnectionStatus("online");
    });

    window.addEventListener("offline", () => {
      this.showConnectionStatus("offline");
    });
  }

  showConnectionStatus(status) {
    const statusBanner = document.createElement("div");
    statusBanner.className = `connection-status ${status}`;
    statusBanner.textContent =
      status === "online"
        ? "✅ Conexão restaurada"
        : "⚠️ Sem conexão com a internet";

    document.body.appendChild(statusBanner);

    setTimeout(() => {
      statusBanner.remove();
    }, 3000);
  }
}

// Initialize everything when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // Initialize main portfolio
  window.modernPortfolio = new ModernPortfolio();

  // Initialize enhanced project showcase
  window.projectShowcase = new EnhancedProjectShowcase();

  // Initialize PWA features
  window.pwaManager = new PWAManager();

  console.log("🎉 Todos os sistemas inicializados com sucesso!");
});

// Global error handling
window.addEventListener("error", (e) => {
  console.error("❌ Erro global capturado:", e.error);

  // Send error to analytics if available
  if (typeof gtag !== "undefined") {
    gtag("event", "exception", {
      description: e.error.toString(),
      fatal: false,
    });
  }
});

// Unhandled promise rejection handling
window.addEventListener("unhandledrejection", (e) => {
  console.error("❌ Promise rejeitada:", e.reason);
  e.preventDefault();
});

// Export for external access
window.ModernPortfolio = ModernPortfolio;
window.EnhancedProjectShowcase = EnhancedProjectShowcase;
window.PWAManager = PWAManager;
