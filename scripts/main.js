import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

/* let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const dots = document.querySelectorAll('.dot');
const totalSlides = images.length;
let autoplayInterval = 6000; // 3 seconds

function showSlide(index) {
  images.forEach((img, i) => {
    img.classList.remove('active');
    if (i === index) {
      img.classList.add('active');
    }
  });
  dots.forEach((dot, i) => {
    dot.classList.remove('active');
    if (i === index) {
      dot.classList.add('active');
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

function goToSlide(index) {
  currentIndex = index;
  showSlide(currentIndex);
}

function startAutoplay() {
  setInterval(nextSlide, autoplayInterval);
}

// Initialize the first slide and start autoplay
showSlide(currentIndex);
/* startAutoplay(); */


const video = document.getElementById('video');

if (video) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
      }
    });
  });

  observer.observe(video);
} else {
  console.error("Video element not found");
}



const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-nav");

navToggle.addEventListener ( "click", () => {
 
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});