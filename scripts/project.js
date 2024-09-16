const termsCheckbox = document.getElementById('terms');
const infoBox = document.getElementById('infoBox');

termsCheckbox.addEventListener('mouseover', () => {
    infoBox.style.display = 'block';
});

termsCheckbox.addEventListener('mouseout', () => {
    infoBox.style.display = 'none';
});