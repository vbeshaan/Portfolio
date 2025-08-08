// MODERN PORTFOLIO JAVASCRIPT - ENHANCED VERSION
// Enhanced with ES6+, modern APIs, and advanced animations

class ModernPortfolio {
  constructor() {
    this.isInitialized = false;
    this.scrollPosition = 0;
    this.resizeObserver = null;
    this.intersectionObserver = null;
    this.smoothScroll = null;
    
    this.init();
  }

  async init() {
    try {
      await this.loadDependencies();
      this.setupEventListeners();
      this.initializeAnimations();
      this.setupSmoothScroll();
      this.initializeTheme();
      this.setupIntersectionObserver();
      this.setupMagneticElements();
      this.initializeCharts();
      
      this.isInitialized = true;
      console.log('Modern Portfolio initialized successfully');
    } catch (error) {
      console.error('Error initializing portfolio:', error);
    }
  }

  async loadDependencies() {
    // Load modern animation libraries
    if (typeof gsap === 'undefined') {
      await this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js');
      await this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js');
    }
    
    // Load smooth scroll library
    if (typeof Lenis === 'undefined') {
      await this.loadScript('https://cdn.jsdelivr.net/gh/studio-freight/lenis@1/dist/lenis.min.js');
    }
    
    // Load Chart.js if not already loaded
    if (typeof Chart === 'undefined') {
      await this.loadScript('https://cdn.jsdelivr.net/npm/chart.js');
    }
  }

  loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  setupEventListeners() {
    // Modern event listeners with passive option for performance
    window.addEventListener('scroll', this.handleScroll.bind(this), { passive: true });
    window.addEventListener('resize', this.debounce(this.handleResize.bind(this), 250));
    document.addEventListener('DOMContentLoaded', this.handleDOMContentLoaded.bind(this));
    
    // Navigation
    this.setupNavigation();
    
    // Keyboard navigation
    this.setupKeyboardNavigation();
    
    // Touch events for mobile
    this.setupTouchEvents();
  }

  setupNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', 
          navToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
        );
      });
    }
    
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement && this.smoothScroll) {
          this.smoothScroll.scrollTo(targetElement, {
            duration: 1000,
            easing: (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
          });
        }
        
        // Close mobile menu
        navMenu?.classList.remove('active');
        navToggle?.classList.remove('active');
      });
    });
  }

  setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      // ESC to close mobile menu
      if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const navToggle = document.querySelector('.nav-toggle');
        navMenu?.classList.remove('active');
        navToggle?.classList.remove('active');
      }
      
      // Tab navigation enhancement
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });
    
    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  }

  setupTouchEvents() {
    let startY = 0;
    
    document.addEventListener('touchstart', (e) => {
      startY = e.touches[0].clientY;
    }, { passive: true });
    
    document.addEventListener('touchmove', (e) => {
      const currentY = e.touches[0].clientY;
      const diff = startY - currentY;
      
      // Add pull-to-refresh or swipe gestures here
      if (diff > 50) {
        // Swipe up
        this.handleSwipeUp();
      } else if (diff < -50) {
        // Swipe down
        this.handleSwipeDown();
      }
    }, { passive: true });
  }

  initializeAnimations() {
    if (typeof gsap !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      // Hero animations
      this.animateHero();
      
      // Stagger animations for cards
      this.animateCards();
      
      // Skills animations
      this.animateSkills();
      
      // Parallax effects
      this.setupParallax();
      
      // Text reveal animations
      this.animateTextReveal();
    }
  }

  animateHero() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroActions = document.querySelector('.hero-actions');
    
    if (heroTitle && typeof gsap !== 'undefined') {
      gsap.timeline()
        .from(heroTitle, {
          duration: 1,
          y: 60,
          opacity: 0,
          ease: 'power3.out'
        })
        .from(heroSubtitle, {
          duration: 0.8,
          y: 40,
          opacity: 0,
          ease: 'power3.out'
        }, '-=0.5')
        .from(heroActions, {
          duration: 0.6,
          y: 30,
          opacity: 0,
          ease: 'power3.out'
        }, '-=0.3');
    }
  }

  animateCards() {
    const cards = document.querySelectorAll('.project-card, .experience-card');
    
    cards.forEach((card, index) => {
      if (typeof gsap !== 'undefined') {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          },
          duration: 0.8,
          y: 60,
          opacity: 0,
          scale: 0.95,
          ease: 'power3.out',
          delay: index * 0.1
        });
      }
    });
  }

  animateSkills() {
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillCategories.forEach((category, index) => {
      if (typeof gsap !== 'undefined') {
        gsap.from(category, {
          scrollTrigger: {
            trigger: category,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse'
          },
          duration: 0.6,
          y: 40,
          opacity: 0,
          rotateX: 15,
          ease: 'power2.out',
          delay: index * 0.15
        });
      }
    });
  }

  setupParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    parallaxElements.forEach(element => {
      const speed = parseFloat(element.dataset.parallax) || 0.5;
      
      if (typeof gsap !== 'undefined') {
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          },
          y: (i, el) => -1 * speed * ScrollTrigger.maxScroll(window),
          ease: 'none'
        });
      }
    });
  }

  animateTextReveal() {
    const textElements = document.querySelectorAll('[data-animate="text-reveal"]');
    
    textElements.forEach(element => {
      if (typeof gsap !== 'undefined') {
        const text = element.textContent;
        element.innerHTML = '';
        
        [...text].forEach(char => {
          const span = document.createElement('span');
          span.textContent = char === ' ' ? '\u00A0' : char;
          span.style.display = 'inline-block';
          element.appendChild(span);
        });
        
        gsap.from(element.children, {
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
          },
          duration: 0.05,
          opacity: 0,
          y: 20,
          stagger: 0.02,
          ease: 'power2.out'
        });
      }
    });
  }

  setupSmoothScroll() {
    if (typeof Lenis !== 'undefined') {
      this.smoothScroll = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });
      
      const raf = (time) => {
        this.smoothScroll.raf(time);
        requestAnimationFrame(raf);
      };
      
      requestAnimationFrame(raf);
      
      // Integrate with GSAP ScrollTrigger
      if (typeof ScrollTrigger !== 'undefined') {
        this.smoothScroll.on('scroll', ScrollTrigger.update);
      }
    }
  }

  initializeTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Initialize theme based on user preference or localStorage
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = prefersDark.matches ? 'dark' : 'light';
    const currentTheme = savedTheme || systemTheme;
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Theme toggle functionality
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        this.switchTheme(newTheme);
      });
    }
    
    // Listen for system theme changes
    prefersDark.addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        this.switchTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  switchTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Animate theme switch
    if (typeof gsap !== 'undefined') {
      gsap.to('body', {
        duration: 0.3,
        ease: 'power2.inOut',
        onComplete: () => {
          // Trigger any theme-specific animations
          this.triggerThemeChange(theme);
        }
      });
    }
  }

  triggerThemeChange(theme) {
    // Dispatch custom event for theme change
    window.dispatchEvent(new CustomEvent('themeChange', { detail: { theme } }));
  }

  setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '-10% 0px -10% 0px',
      threshold: [0, 0.1, 0.5, 1]
    };
    
    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Trigger specific animations based on data attributes
          const animationType = entry.target.dataset.animate;
          if (animationType) {
            this.triggerAnimation(entry.target, animationType);
          }
        }
      });
    }, options);
    
    // Observe elements with animation data attributes
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => {
      this.intersectionObserver.observe(el);
    });
  }

  triggerAnimation(element, type) {
    switch (type) {
      case 'counter':
        this.animateCounter(element);
        break;
      case 'progress':
        this.animateProgress(element);
        break;
      case 'typing':
        this.animateTyping(element);
        break;
    }
  }

  animateCounter(element) {
    const target = parseInt(element.dataset.target) || 0;
    const duration = parseInt(element.dataset.duration) || 2000;
    
    if (typeof gsap !== 'undefined') {
      gsap.to({ value: 0 }, {
        duration: duration / 1000,
        value: target,
        ease: 'power2.out',
        onUpdate: function() {
          element.textContent = Math.round(this.targets()[0].value);
        }
      });
    }
  }

  animateProgress(element) {
    const progress = parseInt(element.dataset.progress) || 0;
    const bar = element.querySelector('.progress-bar');
    
    if (bar && typeof gsap !== 'undefined') {
      gsap.to(bar, {
        duration: 1.5,
        width: `${progress}%`,
        ease: 'power2.out'
      });
    }
  }

  animateTyping(element) {
    const text = element.dataset.text || element.textContent;
    const speed = parseInt(element.dataset.speed) || 50;
    
    element.textContent = '';
    let i = 0;
    
    const typeWriter = () => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    };
    
    typeWriter();
  }

  setupMagneticElements() {
    const magneticElements = document.querySelectorAll('[data-magnetic]');
    
    magneticElements.forEach(element => {
      let hover = false;
      
      element.addEventListener('mouseenter', () => {
        hover = true;
        if (typeof gsap !== 'undefined') {
          gsap.to(element, {
            duration: 0.3,
            scale: 1.1,
            ease: 'power2.out'
          });
        }
      });
      
      element.addEventListener('mouseleave', () => {
        hover = false;
        if (typeof gsap !== 'undefined') {
          gsap.to(element, {
            duration: 0.3,
            scale: 1,
            x: 0,
            y: 0,
            ease: 'power2.out'
          });
        }
      });
      
      element.addEventListener('mousemove', (e) => {
        if (!hover) return;
        
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const strength = parseFloat(element.dataset.magnetic) || 0.3;
        
        if (typeof gsap !== 'undefined') {
          gsap.to(element, {
            duration: 0.3,
            x: x * strength,
            y: y * strength,
            ease: 'power2.out'
          });
        }
      });
    });
  }

  initializeCharts() {
    // Enhanced chart initialization with modern styling
    const chartColors = [
      'hsl(183, 65%, 45%)',
      'hsl(35, 60%, 50%)',
      'hsl(280, 70%, 60%)',
      'hsl(140, 60%, 50%)',
      'hsl(220, 65%, 55%)',
      'hsl(10, 70%, 60%)',
      'hsl(280, 60%, 70%)'
    ];
    
    // Cost comparison chart
    this.initializeCostChart(chartColors);
    
    // Efficiency chart
    this.initializeEfficiencyChart(chartColors);
    
    // Fusion desk chart
    this.initializeFusionChart(chartColors);
  }

  initializeCostChart(colors) {
    const ctx = document.getElementById('retrolensCostChart');
    if (ctx && typeof Chart !== 'undefined') {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['RetroLens Pro', 'GIZMON Wtulens', 'KEKS LENS'],
          datasets: [{
            label: 'Cost ($)',
            data: [15, 129, 89],
            backgroundColor: colors.slice(0, 3),
            borderColor: colors.slice(0, 3),
            borderWidth: 2,
            borderRadius: 8,
            borderSkipped: false,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Cost Comparison: Competitive Analysis',
              font: { size: 16, weight: 'bold' }
            },
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              titleColor: 'white',
              bodyColor: 'white',
              borderColor: colors[0],
              borderWidth: 1
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Cost (USD)',
                font: { weight: 'bold' }
              },
              grid: { color: 'rgba(255, 255, 255, 0.1)' }
            },
            x: {
              grid: { display: false }
            }
          },
          animation: {
            duration: 2000,
            easing: 'easeInOutQuart'
          }
        }
      });
    }
  }

  initializeEfficiencyChart(colors) {
    const ctx = document.getElementById('retrolensEfficiencyChart');
    if (ctx && typeof Chart !== 'undefined') {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Original Design', 'Improved Design'],
          datasets: [{
            label: 'Assembly Efficiency (%)',
            data: [34.5, 82.2],
            backgroundColor: [colors[3], colors[0]],
            borderColor: [colors[3], colors[0]],
            borderWidth: 2,
            borderRadius: 8,
            borderSkipped: false,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Assembly Efficiency Improvement',
              font: { size: 16, weight: 'bold' }
            },
            legend: { display: false }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              title: {
                display: true,
                text: 'Efficiency (%)',
                font: { weight: 'bold' }
              }
            }
          },
          animation: {
            duration: 2000,
            easing: 'easeInOutQuart'
          }
        }
      });
    }
  }

  initializeFusionChart(colors) {
    const ctx = document.getElementById('fusionDeskCostChart');
    if (ctx && typeof Chart !== 'undefined') {
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: [
            'Desktop (56.3%)',
            'Base/Structure (22.8%)',
            'Other Components (10.7%)',
            'Drawer System (4.3%)',
            'Lighting System (4.0%)',
            'Laptop Stand (1.5%)',
            'Hardware/Fasteners (0.6%)'
          ],
          datasets: [{
            data: [483.71, 195.48, 92.22, 36.61, 34.26, 12.46, 4.83],
            backgroundColor: colors,
            borderColor: '#fff',
            borderWidth: 3,
            hoverBorderWidth: 5
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Fusion Desk Cost Breakdown ($859.07 Total)',
              font: { size: 16, weight: 'bold' }
            },
            legend: {
              position: 'bottom',
              labels: {
                padding: 20,
                usePointStyle: true,
                font: { size: 12 }
              }
            }
          },
          animation: {
            animateRotate: true,
            animateScale: true,
            duration: 2000,
            easing: 'easeInOutQuart'
          }
        }
      });
    }
  }

  handleScroll() {
    this.scrollPosition = window.pageYOffset;
    
    // Update navigation appearance
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.classList.toggle('scrolled', this.scrollPosition > 50);
    }
    
    // Update active navigation item
    this.updateActiveNavItem();
  }

  updateActiveNavItem() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        currentSection = section.id;
      }
    });
    
    navLinks.forEach(link => {
      link.classList.toggle('active', 
        link.getAttribute('href') === `#${currentSection}`
      );
    });
  }

  handleResize() {
    // Update any size-dependent calculations
    if (this.smoothScroll) {
      this.smoothScroll.resize();
    }
    
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
    }
  }

  handleDOMContentLoaded() {
    // Final initialization after DOM is ready
    document.body.classList.add('loaded');
    
    // Preload critical images
    this.preloadCriticalImages();
    
    // Initialize service worker if available
    this.initializeServiceWorker();
  }

  preloadCriticalImages() {
    const criticalImages = document.querySelectorAll('[data-preload]');
    criticalImages.forEach(img => {
      if (img.dataset.src) {
        const imageLoader = new Image();
        imageLoader.onload = () => {
          img.src = img.dataset.src;
          img.classList.add('loaded');
        };
        imageLoader.src = img.dataset.src;
      }
    });
  }

  async initializeServiceWorker() {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker registered:', registration);
      } catch (error) {
        console.log('Service Worker registration failed:', error);
      }
    }
  }

  handleSwipeUp() {
    // Handle swipe up gesture
    console.log('Swipe up detected');
  }

  handleSwipeDown() {
    // Handle swipe down gesture
    console.log('Swipe down detected');
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

  destroy() {
    // Clean up event listeners and observers
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
    
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    
    if (this.smoothScroll) {
      this.smoothScroll.destroy();
    }
    
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  }
}

// Initialize the modern portfolio
const modernPortfolio = new ModernPortfolio();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ModernPortfolio;
}