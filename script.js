const burgerMenu = document.getElementById('burgerMenu');
const navMenu = document.getElementById('navMenu');
const backButton = document.querySelector('.back-to-top');
const heroImage = document.getElementById('heroImage');
const dogImageUrls = [
  'images/Slider/1.jpg',
  'images/Slider/2.jpg',
  'images/Slider/3.jpg',
  'images/Slider/4.jpg',
  'images/Slider/5.jpg'
];

let currentImageIndex = 0;

// --- Burger menu toggle
burgerMenu.addEventListener('click', function () {
  navMenu.classList.toggle('active');
  this.classList.toggle('active');
});

// --- Zamknięcie menu po kliknięciu w link
document.querySelectorAll('#navMenu a').forEach(menuItem => {
  menuItem.addEventListener('click', () => {
    navMenu.classList.remove('active');
    burgerMenu.classList.remove('active');
  });
});

// --- Back to top button
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 300) {
    backButton.classList.add('visible');
  } else {
    backButton.classList.remove('visible');
  }
});

// --- Smooth scroll do sekcji
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    if (navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      burgerMenu.classList.remove('active');
    }
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// --- Przycisk powrotu do góry
backButton.addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// --- Walidacja emaila w formularzu kontaktowym
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
  const email = document.getElementById('email').value;
  if (!email.includes('@') || !email.includes('.')) {
    e.preventDefault();
    alert('Proszę podać poprawny adres email');
    document.getElementById('email').focus();
  }
});

// --- Slider hero z fade
function changeHeroImage() {
  heroImage.style.opacity = 0;
  setTimeout(() => {
    currentImageIndex = (currentImageIndex + 1) % dogImageUrls.length;
    heroImage.src = dogImageUrls[currentImageIndex];
    heroImage.style.opacity = 1;
  }, 300);
}

window.addEventListener('DOMContentLoaded', () => {
  heroImage.src = dogImageUrls[currentImageIndex];
  setInterval(changeHeroImage, 5000);
});

// --- Tekst w burger menu tylko na górze strony
function checkScroll() {
  if (window.scrollY === 0) {
    burgerMenu.classList.add('burger-visible-text');
  } else {
    burgerMenu.classList.remove('burger-visible-text');
  }
}

window.addEventListener('load', checkScroll);
window.addEventListener('scroll', checkScroll);