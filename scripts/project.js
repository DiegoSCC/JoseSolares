const termsCheckbox = document.getElementById('terms');
const infoBox = document.getElementById('labelBox');

termsCheckbox.addEventListener('mouseover', () => {
    infoBox.style.display = 'block';
});

termsCheckbox.addEventListener('mouseleave', () => {
    infoBox.style.display = 'none';
});