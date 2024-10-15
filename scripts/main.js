

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

// Attach submit event listener to the form
document.getElementById('contactForm').addEventListener('submit', submitForm);