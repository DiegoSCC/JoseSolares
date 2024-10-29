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


document.getElementById('projectForm').addEventListener('submit', submitForm);

async function submitForm(event) {
  event.preventDefault(); // Prevent default form submission

  const formData = {
    name: document.querySelector('input[name="name"]').value,
    surname: document.querySelector('input[name="surname"]').value,
    email: document.querySelector('input[name="email"]').value,
    phone: document.querySelector('input[name="tel"]').value,
    address: document.querySelector('input[name="address"]').value,
    city: document.querySelector('input[name="city"]').value,
    monthlyBill: document.querySelector('input[name="billAmmount"]').value,
    monthlyKwh: document.querySelector('input[name="kwA/m"]').value,
    terms: document.querySelector('#terms').checked // Get the checked status of the terms checkbox
  };

  try {
    const response = await fetch('https://backend.api.solarbyjose.com:3000/submit-form', {
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

// Reset form function
function resetForm() {
  document.getElementById('projectForm').reset();
}