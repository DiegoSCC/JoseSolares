

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

// Get modal element
const modal = document.getElementById('customModal');
const modalMessage = document.getElementById('modalMessage');
const closeBtn = document.querySelector('.close');

// Show modal function
function showModal(message) {
  modalMessage.textContent = message;
  modal.style.display = 'block';
}

// Close modal function
closeBtn.onclick = function() {
  modal.style.display = 'none';
};

// Close modal when clicking outside of it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// Reset form function
function resetForm() {
  document.getElementById('contactForm').reset();
}

// Function to handle form submission
async function submitForm(event) {
  event.preventDefault(); // Prevent default form submission

  const formData = {
    name: document.querySelector('input[name="name"]').value,
    email: document.querySelector('input[name="email"]').value,
    message: document.querySelector('textarea[name="message"]').value,
  };

  try {
    const response = await fetch('/submit-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      showModal('Email Sent');
      resetForm();
    } else {
      showModal('Failed to send email, try again');
    }
  } catch (error) {
    showModal('Error sending email');
    console.error('Error:', error);
  }
}

document.addEventListener('DOMContentLoaded', function () {
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
      const translations = {
          en: {
              home: "HOME",
              about: "ABOUT US",
              project: "YOUR PROJECT",
              info: "INFORMATION",
              heroTitle: "Make Every Ray Count",
              heroSubtitle: "Save Smartly",
              ctaButton: "START NOW",
              whySaveTitle: "Why Save with Solar Panels?",
              savingsProtection: "Protect Against Increases",
              energySavings: "Energy Savings",
              energyResilience: "Energy Resilience",
              aboutTitle: "WHO WE ARE",
              aboutDescription: "Our mission is to provide exceptional service in solar energy solutions, reflecting our commitment to quality and innovation. We focus on understanding the individual needs of each client to provide efficient and sustainable solar solutions.",
              aboutButton: "LEARN MORE",
              trustBuilding: "\"Building Trust, Delivering Results\"",
              experienceDescription: "With years of experience, our team offers solar solutions tailored to your needs. We provide high-quality products with advanced technology, promoting a sustainable future and a service based on integrity and transparency.",
              helpingFamilies: "Helping around <br> +170 families each year",
              experienceYears: "We have over 15 years <br> of experience in the solar industry",
              installedMegawatts: "Installed +1 Megawatt <br> in solar energy",
              footerText: "2024 | JoseSolares | All rights reserved"
          },
          es: {
              home: "INICIO",
              about: "NOSOTROS",
              project: "TU PROYECTO",
              info: "INFORMACIÓN",
              heroTitle: "Haz que cada rayo cuente",
              heroSubtitle: "Ahorra de manera inteligente",
              ctaButton: "COMIENZA YA",
              whySaveTitle: "¿Por qué ahorrar con paneles solares?",
              savingsProtection: "Protégete contra los incrementos",
              energySavings: "Ahorro de energía",
              energyResilience: "Resiliencia energética",
              aboutTitle: "QUIÉNES SOMOS",
              aboutDescription: "Nuestra misión es ofrecer un servicio excepcional en soluciones de energía solar, reflejando nuestro compromiso con la calidad y la innovación. Nos enfocamos en entender las necesidades individuales de cada cliente para proporcionar soluciones solares eficientes y sostenibles.",
              aboutButton: "CONOCE MÁS",
              trustBuilding: "\"Construyendo confianza, entregando resultados\"",
              experienceDescription: "Con años de experiencia, nuestro equipo ofrece soluciones solares adaptadas a tus necesidades. Proporcionamos productos de alta calidad con tecnología avanzada, promoviendo un futuro sostenible y un servicio basado en integridad y transparencia.",
              helpingFamilies: "Ayudamos alrededor de <br> +170 familias cada año",
              experienceYears: "Tenemos más de 15 años <br> de experiencia en la industria solar",
              installedMegawatts: "Instalamos +1 Megawatt <br> en energía solar",
              footerText: "2024 | JoseSolares | Todos los derechos reservados"
          }
      };

      // Update all translatable elements
      for (const key in translations[lang]) {
          const elements = document.querySelectorAll(`[data-translate="${key}"]`);
          elements.forEach(el => {
              el.innerHTML = translations[lang][key]; // Use innerHTML to preserve any HTML tags
          });
      }
  }
});
