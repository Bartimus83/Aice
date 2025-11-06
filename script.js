// Animation au chargement du logo
window.addEventListener('load', () => {
  const logo = document.querySelector('.logo-central');
  logo.classList.add('animate');
});

// NAVBAR INTELLIGENTE (disparaît en descendant, réapparaît en remontant)
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll && currentScroll > 100) {
    // Scroll vers le bas → cacher
    navbar.style.top = "-80px";
  } else {
    // Scroll vers le haut → afficher
    navbar.style.top = "0";
  }
  lastScroll = currentScroll;
});
