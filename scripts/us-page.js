document.addEventListener('DOMContentLoaded', function() {
    // Read More/Less toggle for individual reviews
    document.querySelectorAll('.read-more-btn').forEach(button => {
      button.addEventListener('click', () => {
        const reviewText = button.previousElementSibling;
  
        if (reviewText.classList.contains('expanded')) {
          reviewText.classList.remove('expanded');
          button.textContent = 'Read More';
        } else {
          reviewText.classList.add('expanded');
          button.textContent = 'Read Less';
        }
      });
    });
  
    // Toggle reviews section
    const toggleReviewsBtn = document.getElementById('toggle-reviews-btn');
    const reviewBoxes = document.querySelectorAll('.review-box');
  
    toggleReviewsBtn.addEventListener('click', () => {
      const isExpanded = toggleReviewsBtn.textContent.includes('Less');
  
      if (isExpanded) {
        // Show only the first 3 reviews
        reviewBoxes.forEach((box, index) => {
          if (index >= 3) {
            box.style.display = 'none';
          }
        });
        toggleReviewsBtn.textContent = 'Show More Reviews';
      } else {
        // Show all reviews
        reviewBoxes.forEach(box => {
          box.style.display = 'flex';
        });
        toggleReviewsBtn.textContent = 'Show Less Reviews';
      }
    });
  });
  