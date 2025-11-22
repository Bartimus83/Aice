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
// POPUP MARKETING
window.addEventListener("load", () => {
    const popup = document.getElementById("popup-container");
    const closeBtn = document.getElementById("popup-close");
    const form = document.getElementById("popup-form");
    
    // Affichage 1,5s après le chargement
    setTimeout(() => {
        popup.classList.remove("popup-hidden");
    }, 1500);

    // Fermeture du pop-up
    closeBtn.addEventListener("click", () => {
        popup.classList.add("popup-hidden");
    });

    // Validation du formulaire
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("popup-email").value;

        alert("Merci ! Votre code promo de -10% vient d'être envoyé à : " + email);

        popup.classList.add("popup-hidden");

        // Ici tu pourrais connecter un système réel d’envoi d’email (Mailchimp, Brevo, Firebase…)
    });
});
