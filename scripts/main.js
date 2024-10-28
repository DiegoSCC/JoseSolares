

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

// Use an environment variable for the backend URL, or fallback to a default for local testing
const API_URL = BACKEND_URL || 'http://localhost:3000';


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
              project: "PROJECT PLANNER",
              info: "INFORMATION",
              heroTitle: "Let every sunbeam work for you",
              heroSubtitle: "Save. Smart.",
              ctaButton: "START NOW",
              whySaveTitle: "Why Save with Solar Panels?",
              savingsProtection: "Protect Against Increases",
              energySavings: "Energy Savings",
              energyResilience: "Energy Resilience",
              savingsText: "Generating your own electricity also reduces your dependence on utility companies and their fluctuating rates. This gives you more control over your energy expenses and safeguards you against future price hikes.",
              energyText: "Solar panels allow you to generate your own electricity, dramatically reducing energy bills and providing substantial savings over time. By utilizing solar energy, you gain financial benefits while supporting a cleaner environment.",
              resilienceText: "By choosing solar panels, you not only reduce your energy costs but also decrease your carbon footprint, leading to long-term savings. This dual benefit supports both your wallet and the planet, promoting a cleaner, more sustainable future.",
              aboutTitle: "WHO WE ARE",
              aboutDescription: "Our mission is to provide exceptional service in solar energy solutions, reflecting our commitment to quality and innovation. We focus on understanding the individual needs of each client to provide efficient and sustainable solar solutions.",
              aboutButton: "LEARN MORE",
              whyUsTitle: "WHY SHOULD YOU CHOOSE US?",
              trustBuilding: "Building Trust, Delivering Results",
              experienceDescription: "With years of experience, our team offers solar solutions tailored to your needs. We provide high-quality products with advanced technology, promoting a sustainable future and a service based on integrity and transparency.",
              helpingFamilies: "Helping around <br> +170 families each year",
              experienceYears: "We have over 15 years <br> of experience in the solar industry",
              installedMegawatts: "Installed +1 Megawatt <br> in solar energy",
              projectTitle: "DESIGN YOUR PROJECT",
              projectIntro: "Fill out a brief form so we can better understand your energy needs and goals. Our experts will analyze your responses and send you a personalized proposal, maximizing the benefits of your solar energy system. Start today and receive a free analysis!",
              projectButton: "DESIGN HERE",
              phraseText : 'Our business is not just about selling solar; its about helping our customers make the perfect <span class="inline-title">decision</span>',
              clientTitle: "What our clients say about us",
              review1: "“Jose Castro was the best to answer all questions a prevented me from someone trying to scam me into leasing not buying my solar. We need more honest persons like him! Thanks for all you’re help very much appreciated!”",
              review2: "“Would like to recognize Jose who saved me from signing onto another solar company he is prompt thorough and followed through every step of the way!! Great customer service and trustworthy i not only give him a great review but an 100% he gave me comfort to ask 101 questions…. his business is awesome.” ",
              review3: "“José Castro is my representative, I am very happy with his performance, great service always there and prompt to answer all my questions to my satisfaction. my Solar experience was easy and quick I will surely recommend him to all my friends and family. Great job! @Jose thank you for all your help and support.”",
              promoTitle: "Don't buy panels withour reading our book first!",
              promoSubtitle: "Educational book on solar panels",
              promoText: "Loading your information, we'll send you our book for free.",
              contactTitle: "CONTACT US",
              contactBanner: "For inquiries or meetings, contact us at:",
              contactButton: "SEND",
              footerTitle: "We convert sunlight into efficient and cost-<br>effective energy for your home.",
              footerContact: "Contact us",
              footerLinks: "Go to:",
              footerItem1: "About Us",
              footerItem2: "Information",
              footerItem3: "Home",
              footerItem4: "FAQs",
              footerItem5: "Educational content",
              footerItem6: "Project Planner",
              copyrightText: "2024 | JoseSolares | All rights reserved",
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
              whyUsTitle: "¿POR QUÉ NOSOTROS?",
              trustBuilding: "Construyendo confianza, entregando resultados",
              experienceDescription: "Con años de experiencia, nuestro equipo ofrece soluciones solares adaptadas a tus necesidades. Proporcionamos productos de alta calidad con tecnología avanzada, promoviendo un futuro sostenible y un servicio basado en integridad y transparencia.",
              helpingFamilies: "Ayudamos alrededor de <br> +170 familias cada año",
              experienceYears: "Tenemos más de 15 años <br> de experiencia en la industria solar",
              installedMegawatts: "Instalamos +1 Megawatt <br> en energía solar",
              projectTitle: "DISEÑA TU PROPIO PROYECTO",
              projectIntro: "Rellena un breve formulario para que podamos conocer mejor tus necesidades y objetivos energéticos. Nuestros expertos analizarán tus respuestas y te enviarán una propuesta personalizada, maximizando los beneficios de tu sistema de energía solar desde el principio.",
              projectButton: "DISEÑA AQUI",
              phraseText: 'Nuestro negocio no es vender paneles solares, sino ayudar a nuestro cliente a tomar la decisión <span class="inline-title">perfecta.</span>',
              clientTitle: "NUESTROS CLIENTES",
              review1: "“José Castro fue el mejor en responder todas mis preguntas y evitó que alguien intentara estafarme para que alquilara y no comprara mi sistema solar. Necesitamos más personas honestas como él. ¡Gracias por toda su ayuda, la aprecio mucho!",
              review2: "Me gustaría reconocer a José, quien me salvó de contratar a otra empresa de energía solar. Es rápido y eficiente, me acompaño en cada paso del proceso. Excelente servicio al cliente y confiable. No solo le doy una excelente reseña, sino que también le doy un 199 %. Me dio la tranquilidad de poder hacerle 101 preguntas... su negocio es increíble. ",
              review3: "José Castro es mi representante, estoy muy contento con su desempeño, gran servicio, siempre presente y rápido para responder todas mis preguntas a mi entera satisfacción. Mi experiencia con Solar fue fácil y rápida, seguramente lo recomendaré a todos mis amigos y familiares. ¡Buen trabajo! @Jose gracias por toda tu ayuda y apoyo.",
              promoTitle: "Tenes dudas? Lee nuestro libro!",
              promoSubtitle: "Libro educativo sobre paneles solares",
              promoText: "Cargando tus datos te enviamos nuestro libro gratis sin costo.",
              contactTitle: "Contactanos",
              contactBanner: "Para consultas o reuniones escribinos al:",
              contactButton: "ENVIAR",
              footerTitle: "Convertimos tu valor en energía eficiente<br> y rentable para tu hogar.",
              footerContact: "Contactanos:",
              footerLinks: "Acceso",
              footerItem1: "Nosotros",
              footerItem2: "Información",
              footerItem3: "Inicio",
              footerItem4: "Preguntas Frecuentes",
              footerItem5: "Contenido Educativo",
              footerItem6: "Crea tu proyecto",
              
              copyrightText: "2024 | JoseSolares | Todos los derechos reservados"
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
