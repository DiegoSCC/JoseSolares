let currentIndex = 0;
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
startAutoplay();

AOS.init();


  // Select the video element
  const video = document.getElementById('video');

  // Set up the IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // If the video is in the viewport, play the video
        video.play();
      } else {
        // If the video is out of the viewport, pause the video
        video.pause();
      }
    });
  });

  // Observe the video element
  observer.observe(video);



const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-nav");

navToggle.addEventListener ( "click", () => {
 
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});