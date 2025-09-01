// main.js

// ------------------------------
// HEADER & HAMBURGER MENU
// ------------------------------
function initHeader() {
  const header = document.getElementById('main-header');
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const navMenu = document.getElementById('nav-menu');

  // Add / remove 'scrolled' class when scrolling
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Toggle hamburger menu and navigation
  hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
}

// ------------------------------
// SMOOTH SCROLL TO SECTIONS
// ------------------------------
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetID = this.getAttribute('href');
      const targetSection = document.querySelector(targetID);

      if (targetSection) {
        let headerOffset = (targetID === '#home') ? 0 : 80; // no offset for HOME

        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Close nav menu on link click (for mobile)
        const navMenu = document.getElementById('nav-menu');
        const hamburgerMenu = document.getElementById('hamburgerMenu');
        navMenu.classList.remove('active');
        hamburgerMenu.classList.remove('active');
      }
    });
  });
}

// ------------------------------
// FLIP CARDS FUNCTIONALITY
// ------------------------------
function initFlipCards() {
  // Currently purely CSS-based
}

// ------------------------------
// SCROLL SPY FOR NAV LINKS
// ------------------------------
function initScrollSpy() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('#nav-menu ul li a');

  window.addEventListener('scroll', () => {
    let currentSection = 'home'; // HOME active by default

    // Skip HOME when checking other sections
    sections.forEach(section => {
      if (section.id === 'home') return;

      const sectionTop = section.offsetTop - 100; // offset for header
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    // Update nav links
    navLinks.forEach(link => {
      link.classList.remove('active-section');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active-section');
      }
    });
  });
}

// ------------------------------
// INITIALIZE ALL FUNCTIONS
// ------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initSmoothScroll();
  initFlipCards();
  initScrollSpy();
});


// ===========================
// Auto-close hamburger after clicking a link
// ===========================
document.querySelectorAll('#nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});