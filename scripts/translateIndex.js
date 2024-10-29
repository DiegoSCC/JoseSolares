document.addEventListener('DOMContentLoaded', function (){
    const languageSelector = document.querySelector('.language-selector');
    const dropdown = languageSelector.querySelector('.dropdown');
    const flagImage = languageSelector.querySelector('img'); // Select the small flag image
  
    // Set default language and flag
    const defaultLanguage = 'Español';
    const defaultFlagSrc = '/media/icons/spain-country-flag-icon.svg'; // Update this with the actual path to the Spanish flag
  
    // Check localStorage for saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage') || defaultLanguage;
    const savedFlagSrc = localStorage.getItem('preferredFlagSrc') || defaultFlagSrc;
  
    // Set the initial flag and dropdown selection
    flagImage.src = savedFlagSrc;
  
    // Update translations based on the saved language
    const langCode = savedLanguage.toLowerCase() === 'español' ? 'es' : 'en';
    updateTranslations(langCode);
  
    const dropdownItems = dropdown.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        if (item.querySelector('p').textContent === savedLanguage) {
            item.classList.add('selected'); // For visual feedback (optional)
        }
    });
  
    // Toggle dropdown visibility
    languageSelector.addEventListener('click', function (e) {
        e.stopPropagation();
        dropdown.classList.toggle('show');
    });
  
    // Handle language selection
    dropdown.addEventListener('click', function (e) {
        const selectedItem = e.target.closest('.dropdown-item');
        if (selectedItem) {
            const selectedLanguage = selectedItem.querySelector('p').textContent;
            const selectedFlagSrc = selectedItem.querySelector('img').src; // Get the flag image source
  
            // Change the small flag to the selected one
            flagImage.src = selectedFlagSrc;
  
            // Save the user's preference in localStorage
            localStorage.setItem('preferredLanguage', selectedLanguage);
            localStorage.setItem('preferredFlagSrc', selectedFlagSrc);
  
            // Update translations based on the selected language
            const langCode = selectedLanguage.toLowerCase() === 'español' ? 'es' : 'en';
            updateTranslations(langCode);
  
            // Close the dropdown
            dropdown.classList.remove('show');
        }
    });
  
    // Close dropdown when clicking outside
    document.addEventListener('click', function () {
        dropdown.classList.remove('show');
    });
  
      function updateTranslations(lang) {
          fetch('/translations.json')
              .then(response => response.json())
              .then(translations => {
                  // Check if language exists in JSON file
                  if (translations[lang]) {
                      // Update all translatable elements
                      for (const key in translations[lang]) {
                          const elements = document.querySelectorAll(`[data-translate="${key}"]`);
                          elements.forEach(el => {
                              el.innerHTML = translations[lang][key]; // Use innerHTML to preserve any HTML tags
                          });
                      }

                      const inputElements = document.querySelectorAll('textarea[data-translate]');
                      inputElements.forEach(input => {
                          const placeholderKey = input.getAttribute('data-translate'); // Get the key from data-translate
                          if (translations[lang][placeholderKey]) {
                              input.placeholder = translations[lang][placeholderKey]; // Update the placeholder
                          }
                      });
                      const textElements = document.querySelectorAll('input[data-translate]');
                      textElements.forEach(textarea => {
                          const placeholderKey = textarea.getAttribute('data-translate'); // Get the key from data-translate
                          if (translations[lang][placeholderKey]) {
                              textarea.placeholder = translations[lang][placeholderKey]; // Update the placeholder
                          }
                      });

                  } else {
                      console.error(`Language ${lang} not found in translations.`);
                  }
              })
              .catch(error => console.error('Error loading translations:', error));
        }
  });