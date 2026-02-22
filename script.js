document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const successMessage = document.getElementById('successMessage');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function clearErrors() {
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    successMessage.hidden = true;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    let valid = true;
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name) {
      nameError.textContent = 'Please enter your name.';
      valid = false;
    }

    if (!email) {
      emailError.textContent = 'Please enter your email.';
      valid = false;
    } else if (!validateEmail(email)) {
      emailError.textContent = 'Please enter a valid email address.';
      valid = false;
    }

    if (!message) {
      messageError.textContent = 'Please enter a message.';
      valid = false;
    } else if (message.length < 10) {
      messageError.textContent = 'Message should be at least 10 characters.';
      valid = false;
    }

    if (!valid) {
      return;
    }

    // Success (no real sending in this demo)
    successMessage.hidden = false;
    form.reset();
  });
});
