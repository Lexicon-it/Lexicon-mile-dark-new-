// Modern AI Education Landing Page - Main JavaScript

// Mobile Menu Toggle
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      // Toggle menu visibility
      if (mobileMenu.style.maxHeight && mobileMenu.style.maxHeight !== '0px') {
        mobileMenu.style.maxHeight = '0px';
        hamburger.classList.remove('active');
      } else {
        mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
        hamburger.classList.add('active');
      }
    });

    // Close menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.style.maxHeight = '0px';
        hamburger.classList.remove('active');
      });
    });
  }
}

// Scroll Reveal Animation
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(reveal => {
    revealObserver.observe(reveal);
  });
}

// Animated Counter for Statistics
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        const target = parseInt(entry.target.getAttribute('data-counter'));
        animateCounter(entry.target, target);
        entry.target.classList.add('counted');
      }
    });
  }, {
    threshold: 0.5
  });

  counters.forEach(counter => {
    counterObserver.observe(counter);
  });
}

// Accordion Functionality
function initAccordions() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector('.accordion-icon');

      // Close other accordions
      accordionHeaders.forEach(otherHeader => {
        if (otherHeader !== header) {
          const otherContent = otherHeader.nextElementSibling;
          const otherIcon = otherHeader.querySelector('.accordion-icon');
          otherContent.classList.remove('active');
          if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        }
      });

      // Toggle current accordion
      content.classList.toggle('active');
      if (icon) {
        icon.style.transform = content.classList.contains('active')
          ? 'rotate(180deg)'
          : 'rotate(0deg)';
      }
    });
  });
}

// Form Validation
function initFormValidation() {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const inputs = form.querySelectorAll('input[required], textarea[required]');

      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('border-red-500');

          // Remove error class on input
          input.addEventListener('input', () => {
            input.classList.remove('border-red-500');
          }, { once: true });
        }
      });

      // Email validation
      const emailInputs = form.querySelectorAll('input[type="email"]');
      emailInputs.forEach(input => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (input.value && !emailRegex.test(input.value)) {
          isValid = false;
          input.classList.add('border-red-500');
        }
      });

      if (isValid) {
        // Show success message
        showNotification('Application submitted successfully! We will contact you soon.', 'success');
        form.reset();
      } else {
        showNotification('Please fill in all required fields correctly.', 'error');
      }
    });
  });
}

// Notification System
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `fixed top-4 right-4 px-6 py-4 rounded-lg shadow-lg z-50 animate-slide-down ${type === 'success' ? 'bg-emerald-600' :
      type === 'error' ? 'bg-red-600' :
        'bg-indigo-600'
    } text-white`;
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(-20px)';
    notification.style.transition = 'all 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// Active Navigation Highlight
function initActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('text-indigo-600', 'font-bold');
    }
  });
}

// Timeline Animation
function initTimeline() {
  const timelineItems = document.querySelectorAll('.timeline-item');

  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
      }
    });
  }, {
    threshold: 0.2
  });

  timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = `all 0.6s ease ${index * 0.1}s`;
    timelineObserver.observe(item);
  });
}

// Progress Bar Animation
function initProgressBars() {
  const progressBars = document.querySelectorAll('.progress-fill');

  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
        const width = entry.target.getAttribute('data-width');
        entry.target.style.width = width;
        entry.target.classList.add('animated');
      }
    });
  }, {
    threshold: 0.5
  });

  progressBars.forEach(bar => {
    bar.style.width = '0%';
    progressObserver.observe(bar);
  });
}

// Parallax Effect for Hero Sections
function initParallax() {
  const parallaxElements = document.querySelectorAll('.parallax');

  window.addEventListener('scroll', () => {
    parallaxElements.forEach(element => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.5;
      element.style.transform = `translateY(${rate}px)`;
    });
  });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initScrollReveal();
  initCounters();
  initAccordions();
  initFormValidation();
  initSmoothScroll();
  initActiveNav();
  initTimeline();
  initProgressBars();
  initParallax();

  // Add loaded class to body for CSS animations
  document.body.classList.add('loaded');
});

// Prevent FOUC (Flash of Unstyled Content)
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

