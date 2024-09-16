document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        const toggle = item.querySelector('.faq-toggle');

        // Toggle answer visibility
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

        // Change the toggle symbol
        toggle.textContent = toggle.textContent === '+' ? '−' : '+';
    });
});


document.querySelectorAll('.video-item').forEach(item => {
  item.addEventListener('click', () => {
      // For example, open a modal or play the video in a new window
      alert('Playing Video...');
  });
});

