// Animation du logo au chargement
window.addEventListener('load', () => {
  const logo = document.querySelector('.logo-central');
  logo.classList.add('animate');
});

// Navbar intelligente : disparaît quand on descend, revient quand on remonte
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll && currentScroll > 100) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "0";
  }
  lastScroll = currentScroll;
});
