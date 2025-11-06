// === Navbar Hide on Scroll ===
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    navbar.classList.remove('hidden');
    return;
  }
  if (currentScroll > lastScroll && !navbar.classList.contains('hidden')) {
    navbar.classList.add('hidden');
  } else if (currentScroll < lastScroll && navbar.classList.contains('hidden')) {
    navbar.classList.remove('hidden');
  }
  lastScroll = currentScroll;
});

// === Scroll Reveal ===
const reveals = document.querySelectorAll('.vision, .gammes, .innovation');
const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// === Smooth Scroll for Internal Links ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
