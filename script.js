// ============================================
// ALEXANDER JAKE DAVIES - SPEAKER WEBSITE JS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initSmoothScroll();
    initActiveNavLinks();
    initFadeInAnimation();
});

// ============================================
// MOBILE MENU FUNCTIONALITY
// ============================================

function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });
    }
}

// ============================================
// SMOOTH SCROLL FUNCTIONALITY
// ============================================

function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                
                const targetElement = document.querySelector(href);
                const offsetTop = targetElement.offsetTop - 60; // Account for sticky nav
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// ACTIVE NAV LINK HIGHLIGHTING
// ============================================

function initActiveNavLinks() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    function updateActiveLink() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Call on page load
}

// ============================================
// FADE IN ANIMATION ON SCROLL
// ============================================

function initFadeInAnimation() {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });
}

// ============================================
// FORM SUBMISSION HANDLING
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // The form will submit to Formspree
            // Uncomment below for custom handling if needed:
            /*
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            
            // Here you could add custom validation or handling
            console.log('Form submitted with data:', Object.fromEntries(formData));
            
            // Optionally show success message
            const successMsg = document.createElement('div');
            successMsg.className = 'success-message';
            successMsg.textContent = 'Thank you for your inquiry! We will be in touch within 48 hours.';
            this.parentElement.insertBefore(successMsg, this);
            
            // Reset form
            this.reset();
            */
        });
    }
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Scroll to top button (optional enhancement)
function createScrollToTopButton() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background-color: #1e3a5f;
        color: #d4af37;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 24px;
        cursor: pointer;
        display: none;
        z-index: 999;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    `;

    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll-to-top button
// Uncomment the line below to enable it
// createScrollToTopButton();

// ============================================
// ANALYTICS (Optional)
// ============================================

// Add your analytics code here if needed
// Example: Google Analytics, Mixpanel, etc.

console.log('Alexander Jake Davies - Speaker Website Loaded');
