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



