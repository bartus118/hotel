const burgerMenu = document.getElementById('burgerMenu');
const navMenu = document.getElementById('navMenu');

burgerMenu.addEventListener('click', function() {
  navMenu.classList.toggle('active');
  this.classList.toggle('active');
});

document.querySelectorAll('#navMenu a').forEach(menuItem => {
  menuItem.addEventListener('click', () => {
    navMenu.classList.remove('active');
    burgerMenu.classList.remove('active');
  });
});

const backButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 300) {
    backButton.classList.add('visible');
  } else {
    backButton.classList.remove('visible');
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
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

backButton.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  const email = document.getElementById('email').value;
  if (!email.includes('@') || !email.includes('.')) {
    e.preventDefault();
    alert('Proszę podać poprawny adres email');
    document.getElementById('email').focus();
  }
});

const heroImage = document.getElementById('heroImage');
const dogImageUrls = [
  'images/Slider/1.jpg',
  'images/Slider/2.jpg',
  'images/Slider/3.jpg',
  'images/Slider/4.jpg',
  'images/Slider/5.jpg'
];

let currentImageIndex = 0;

function changeHeroImage() {
  currentImageIndex = (currentImageIndex + 1) % dogImageUrls.length;
  heroImage.src = dogImageUrls[currentImageIndex];
  heroImage.style.opacity = 0;
  setTimeout(() => {
    heroImage.style.opacity = 1;
  }, 300);
}

setInterval(changeHeroImage, 5000);

window.addEventListener('DOMContentLoaded', () => {
  changeHeroImage();
});