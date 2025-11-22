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
// SECTION PROMO -10%
const promoForm = document.getElementById("promo-form");

if (promoForm) {
    promoForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("promo-email").value;
        const success = document.getElementById("promo-success");

        success.textContent = "Merci ! Votre code promo -10% vient d’être envoyé à : " + email;

        // Tu pourras ajouter ici un vrai envoi via Mailchimp / Brevo / Formspree.
    });
}
