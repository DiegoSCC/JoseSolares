document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        const toggle = item.querySelector('.faq-toggle');
        
        // Check if the answer is currently expanded
        if (answer.style.maxHeight) {
            // Collapse the answer
            answer.style.maxHeight = null;
        } else {
            // Expand the answer to its full height
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }

        // Change the toggle symbol
        toggle.textContent = toggle.textContent === '+' ? '−' : '+';
    });
});



