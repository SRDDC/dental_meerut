document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const appointmentForms = document.querySelectorAll('.appointment-form, .contact-form');
  appointmentForms.forEach((form) => {
    const alertBox = form.querySelector('.alert');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (alertBox) {
        alertBox.textContent = 'Thank you! Your request has been received. We will call you shortly.';
      }
      form.reset();
    });
  });
});
