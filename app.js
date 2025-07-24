// Portfolio Website JavaScript - Eshaan Vasanthakumar

// Utility functions
function $(selector, parent = document) {
    return parent.querySelector(selector);
}

function $$(selector, parent = document) {
    return Array.from(parent.querySelectorAll(selector));
}

document.addEventListener('DOMContentLoaded', () => {
    /* ----------------------------- Navigation ----------------------------- */
    const navToggle = $('.nav-toggle');
    const navMenu = $('.nav-menu');
    const navLinks = $$('.nav-link');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                const offset = targetEl.offsetTop - 70; // compensate for fixed navbar
                window.scrollTo({ top: offset, behavior: 'smooth' });
            }
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    function highlightNav() {
        const sections = $$('section');
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 100;
            const height = section.offsetHeight;
            if (scrollY >= top && scrollY < top + height) {
                current = section.id;
            }
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href').slice(1) === current);
        });
    }

    /* --------------------------- Scroll Animations -------------------------- */
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    $$('.experience-card, .project-card, .skill-category').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    /* ------------------------------ Charts --------------------------------- */
    const chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C'];

    // RetroLens Cost Comparison Chart
    const retrolensCostCtx = $('#retrolensCostChart');
    if (retrolensCostCtx) {
        new Chart(retrolensCostCtx, {
            type: 'bar',
            data: {
                labels: ['RetroLens Pro', 'GIZMON Wtulens', 'KEKS LENS'],
                datasets: [{
                    label: 'Cost ($)',
                    data: [15, 129, 89], // Using average for RetroLens
                    backgroundColor: [chartColors[0], chartColors[1], chartColors[2]],
                    borderColor: [chartColors[0], chartColors[1], chartColors[2]],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Cost Comparison: Competitive Analysis'
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Cost (USD)'
                        }
                    }
                }
            }
        });
    }

    // RetroLens Assembly Efficiency Chart
    const retrolensEfficiencyCtx = $('#retrolensEfficiencyChart');
    if (retrolensEfficiencyCtx) {
        new Chart(retrolensEfficiencyCtx, {
            type: 'bar',
            data: {
                labels: ['Original Design', 'Improved Design'],
                datasets: [{
                    label: 'Assembly Efficiency (%)',
                    data: [34.5, 82.2],
                    backgroundColor: [chartColors[2], chartColors[0]],
                    borderColor: [chartColors[2], chartColors[0]],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Assembly Efficiency Improvement'
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        title: {
                            display: true,
                            text: 'Efficiency (%)'
                        }
                    }
                }
            }
        });
    }

    // Fusion Desk Cost Breakdown Chart
    const fusionDeskCostCtx = $('#fusionDeskCostChart');
    if (fusionDeskCostCtx) {
        new Chart(fusionDeskCostCtx, {
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
                    backgroundColor: chartColors,
                    borderColor: '#fff',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Fusion Desk Cost Breakdown ($859.07 Total)'
                    },
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed;
                                const percentage = ((value / 859.07) * 100).toFixed(1);
                                return `${label}: $${value} (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }

    /* ------------------------------ Notification --------------------------- */
    function notify(message, type = 'info') {
        const existing = $('.notification');
        if (existing) existing.remove();
        const div = document.createElement('div');
        div.className = `notification status status--${type}`;
        div.textContent = message;
        Object.assign(div.style, {
            position: 'fixed',
            top: '90px',
            right: '20px',
            zIndex: 2000,
            maxWidth: '400px',
            padding: '16px 20px',
            borderRadius: '8px',
            fontWeight: '500',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease-out'
        });
        document.body.appendChild(div);
        setTimeout(() => { div.style.transform = 'translateX(0)'; }, 50);
        setTimeout(() => {
            div.style.transform = 'translateX(100%)';
            setTimeout(() => div.remove(), 300);
        }, 5000);
    }

    /* ----------------------------- On Scroll ------------------------------- */
    function onScroll() {
        highlightNav();
        const navbar = $('.navbar');
        if (scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255,255,255,0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.backgroundColor = 'var(--color-surface)';
            navbar.style.backdropFilter = 'none';
        }
    }

    /* ---------------------------- Email Actions ---------------------------- */
    const emailLinks = $$('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Allow default email behavior to proceed
            notify('Opening email client...', 'info');
        });
    });

    /* -------------------------- LinkedIn Actions --------------------------- */
    const linkedinLinks = $$('a[href*="linkedin.com"]');
    linkedinLinks.forEach(link => {
        link.addEventListener('click', () => {
            notify('Opening LinkedIn profile in new tab...', 'info');
        });
    });

    /* ------------------------- Smooth Scrolling ---------------------------- */
    // Enhanced smooth scrolling for all internal links
    $$('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                const offset = targetEl.offsetTop - 70;
                window.scrollTo({ top: offset, behavior: 'smooth' });
            }
        });
    });

    /* -------------------------- Accessibility ---------------------------- */
    // Add keyboard navigation support
    navLinks.forEach(link => {
        link.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                link.click();
            }
        });
    });

    // Focus management for mobile menu
    navToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            navToggle.click();
        }
    });

    /* -------------------------- Performance ---------------------------- */
    // Debounce scroll events for better performance
    let scrollTimeout;
    function debouncedScroll() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(onScroll, 10);
    }

    window.addEventListener('scroll', debouncedScroll);
    onScroll(); // Initial call
    document.body.classList.add('loaded');

    /* -------------------------- Project Cards ---------------------------- */
    // Add interaction feedback for project cards
    $$('.project-card, .experience-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-2px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    /* -------------------------- Skills Animation -------------------------- */
    // Add staggered animation for skills
    const skillCategories = $$('.skill-category');
    skillCategories.forEach((category, index) => {
        category.style.animationDelay = `${index * 0.1}s`;
    });

    /* -------------------------- Chart Loading ---------------------------- */
    // Add loading states for charts
    const chartContainers = $$('.chart-container');
    chartContainers.forEach(container => {
        const canvas = container.querySelector('canvas');
        if (canvas) {
            canvas.style.opacity = '0';
            canvas.style.transition = 'opacity 0.5s ease-in';
            
            // Show chart after a brief delay to allow Chart.js to render
            setTimeout(() => {
                canvas.style.opacity = '1';
            }, 500);
        }
    });

    /* ------------------------ Project Card Interactions ------------------- */
    // Enhanced project card interactions
    $$('.project-card').forEach(card => {
        const header = card.querySelector('.project-header');
        const content = card.querySelector('.project-content');
        
        if (header && content) {
            header.addEventListener('click', () => {
                // Add subtle visual feedback on header click
                header.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    header.style.transform = 'scale(1)';
                }, 150);
            });
        }
    });

    console.log('Portfolio website loaded successfully with interactive charts!');
});