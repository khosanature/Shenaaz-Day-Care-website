
const header = document.getElementById('main-header');
const hamburger = document.getElementById('hamburgerMenu');
const navMenu = document.getElementById('nav-menu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});




hamburgerMenu.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});