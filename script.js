document.addEventListener('DOMContentLoaded', () => {
  const clinicName = 'Shree Rishabh Dev Dental Care And Implant Centre';
  const oldClinicName = 'Jain Dental Clinic';

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

  if (document.title.includes(oldClinicName)) {
    document.title = document.title.replaceAll(oldClinicName, clinicName);
  }

  document.querySelectorAll('meta[content]').forEach((metaTag) => {
    const currentValue = metaTag.getAttribute('content') || '';
    if (currentValue.includes(oldClinicName)) {
      metaTag.setAttribute('content', currentValue.replaceAll(oldClinicName, clinicName));
    }
  });

  document.querySelectorAll('.logo-wrap strong').forEach((element) => {
    element.textContent = clinicName;
  });

  document.querySelectorAll('.logo-wrap img').forEach((image) => {
    image.alt = `${clinicName} Logo`;
  });

  const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (textWalker.nextNode()) {
    const node = textWalker.currentNode;
    if (node.nodeValue && node.nodeValue.includes(oldClinicName)) {
      node.nodeValue = node.nodeValue.replaceAll(oldClinicName, clinicName);
    }
  }

  const appointmentSection = document.querySelector('.top-appointment');
  const navbar = document.querySelector('.navbar');

  if (appointmentSection && navbar && !document.querySelector('.appointment-toggle-btn')) {
    appointmentSection.classList.remove('open');

    const appointmentToggleBtn = document.createElement('button');
    appointmentToggleBtn.type = 'button';
    appointmentToggleBtn.className = 'btn-primary appointment-toggle-btn';
    appointmentToggleBtn.textContent = 'Book Appointment';
    appointmentToggleBtn.setAttribute('aria-expanded', 'false');
    appointmentToggleBtn.setAttribute('aria-controls', 'appointment-panel');

    appointmentSection.id = 'appointment-panel';

    appointmentToggleBtn.addEventListener('click', () => {
      const isOpen = appointmentSection.classList.toggle('open');
      appointmentToggleBtn.textContent = isOpen ? 'Close Appointment Form' : 'Book Appointment';
      appointmentToggleBtn.setAttribute('aria-expanded', String(isOpen));
      if (isOpen) {
        appointmentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    navbar.appendChild(appointmentToggleBtn);
  }

  const servicesToggle = document.getElementById('servicesToggle');
  const servicesCategories = document.getElementById('servicesCategories');
  if (servicesToggle && servicesCategories) {
    servicesCategories.classList.add('hidden');

    servicesToggle.addEventListener('click', () => {
      const isHidden = servicesCategories.classList.toggle('hidden');
      servicesToggle.setAttribute('aria-expanded', String(!isHidden));
      servicesToggle.textContent = isHidden ? 'Show Service Categories' : 'Hide Service Categories';
    });

    document.querySelectorAll('.category-toggle').forEach((button) => {
      button.addEventListener('click', () => {
        const list = button.closest('.service-card')?.querySelector('.subcategory-list');
        if (!list) {
          return;
        }
        const isHidden = list.classList.toggle('hidden');
        button.setAttribute('aria-expanded', String(!isHidden));
      });
    });
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
