// script.js

// Obsługa menu mobilnego
const burgerMenu = document.getElementById('burgerMenu');
const navMenu = document.getElementById('navMenu');

burgerMenu.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    this.classList.toggle('active');
});

// Automatyczne zamykanie menu po kliknięciu w link
document.querySelectorAll('#navMenu a').forEach(menuItem => {
    menuItem.addEventListener('click', () => {
        navMenu.classList.remove('active');
        burgerMenu.classList.remove('active');
    });
});

// Obsługa przycisku "Powrót na górę"
const backButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backButton.classList.add('visible');
    } else {
        backButton.classList.remove('visible');
    }
});

// Płynne przewijanie do sekcji
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Zamknij menu jeśli jest otwarte
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            burgerMenu.classList.remove('active');
        }
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Obsługa przycisku "Powrót na górę"
backButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Walidacja formularza
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    const email = document.getElementById('email').value;
    if (!email.includes('@') || !email.includes('.')) {
        e.preventDefault();
        alert('Proszę podać poprawny adres email');
        document.getElementById('email').focus();
    }
});

// Pokaz slajdów w sekcji hero
const heroImage = document.getElementById('heroImage');
const dogImageUrls = [
  'images/slider/1.jpg',
  'images/slider/2.jpg',
  'images/slider/3.jpg',
  'images/slider/4.jpg',
  'images/slider/5.jpg'
];

let currentImageIndex = 0;

function changeHeroImage() {
  currentImageIndex = (currentImageIndex + 1) % dogImageUrls.length;
  heroImage.src = dogImageUrls[currentImageIndex];
  
  // Dodaj efekt fade
  heroImage.style.opacity = 0;
  setTimeout(() => {
    heroImage.style.opacity = 1;
  }, 300);
}

// Zmieniaj zdjęcie co 5 sekund
setInterval(changeHeroImage, 5000);

// Inicjalizacja - pierwsza zmiana zdjęcia po załadowaniu strony
window.addEventListener('DOMContentLoaded', () => {
  changeHeroImage();
});