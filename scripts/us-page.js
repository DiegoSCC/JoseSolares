document.addEventListener('DOMContentLoaded', function() {
    // Read More/Less toggle for individual reviews
    document.querySelectorAll('.read-more-btn').forEach(button => {
      button.addEventListener('click', () => {
        const reviewText = button.previousElementSibling;
  
        if (reviewText.classList.contains('expanded')) {
          reviewText.classList.remove('expanded');
          button.textContent = 'Leer más';
        } else {
          reviewText.classList.add('expanded');
          button.textContent = 'Leer menos';
        }
      });
    });
  
    // Toggle reviews section
    const toggleReviewsBtn = document.getElementById('toggle-reviews-btn');
    const reviewBoxes = document.querySelectorAll('.review-box');
  
    toggleReviewsBtn.addEventListener('click', () => {
      const isExpanded = toggleReviewsBtn.textContent.includes('MENOS');
  
      if (isExpanded) {
        // Show only the first 3 reviews
        reviewBoxes.forEach((box, index) => {
          if (index >= 3) {
            box.style.display = 'none';
          }
        });
        toggleReviewsBtn.textContent = 'MÁS RESEÑAS';
      } else {
        // Show all reviews
        reviewBoxes.forEach(box => {
          box.style.display = 'flex';
        });
        toggleReviewsBtn.textContent = 'MENOS RESEÑAS';
      }
    });
  });
  