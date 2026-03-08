document.addEventListener('DOMContentLoaded', () => {
  const clinicName = 'Shree Rishabh Dev Dental Care And Implant Centre';
  const oldClinicName = 'Jain Dental Clinic';
  const clinicTagline = '|IMPLANTS| ALIGNERS| BRACES| ROOT CANAL TREATMENT | CROWNS';
  const whatsappNumber = '919759555205';
  const clinicEmail = 'info@srddc.com';
  const serviceCategories = [
    {
      title: 'General Dentistry',
      href: 'general-dentistry.html',
      subcategories: [
        { title: 'Dental Cleaning', href: 'service-detail.html?service=dental-cleaning' },
        { title: 'Tooth Colored Fillings', href: 'service-detail.html?service=tooth-colored-fillings' },
        { title: 'Emergency Dentistry', href: 'service-detail.html?service=emergency-dentistry' }
      ]
    },
    {
      title: 'Restorative Dentistry',
      href: 'restorative-dentistry.html',
      subcategories: [
        { title: 'Full Mouth Reconstruction', href: 'service-detail.html?service=full-mouth-reconstruction' },
        { title: 'Dental Crowns', href: 'service-detail.html?service=dental-crowns' },
        { title: 'Dental Bridges', href: 'service-detail.html?service=dental-bridges' }
      ]
    },
    {
      title: 'Cosmetic Dentistry',
      href: 'cosmetic-dentistry.html',
      subcategories: [
        { title: 'Smile Makeover', href: 'service-detail.html?service=smile-makeover' },
        { title: 'Bleaching', href: 'service-detail.html?service=bleaching' },
        { title: 'Teeth Whitening', href: 'service-detail.html?service=teeth-whitening' },
        { title: 'Veneers', href: 'service-detail.html?service=veneers' },
        { title: 'Dental Bonding', href: 'service-detail.html?service=dental-bonding' }
      ]
    },
    {
      title: 'Prosthodontics',
      href: 'prosthodontics.html',
      subcategories: [
        { title: 'Crowns', href: 'service-detail.html?service=crowns' },
        { title: 'Bridge', href: 'service-detail.html?service=bridge' },
        { title: 'Dentures', href: 'service-detail.html?service=dentures' }
      ]
    },
    {
      title: 'Orthodontics',
      href: 'orthodontics.html',
      subcategories: [
        { title: 'Braces', href: 'service-detail.html?service=braces' },
        { title: 'Invisalign', href: 'service-detail.html?service=invisalign' }
      ]
    },
    {
      title: 'Periodontics',
      href: 'periodontics.html',
      subcategories: [
        { title: 'Dental Implants', href: 'service-detail.html?service=dental-implants' },
        { title: 'Scaling', href: 'service-detail.html?service=scaling' },
        { title: 'Soft Tissue Grafting', href: 'service-detail.html?service=soft-tissue-grafting' },
        { title: 'Bone Grafting', href: 'service-detail.html?service=bone-grafting' }
      ]
    },
    {
      title: 'Endodontics',
      href: 'endodontics.html',
      subcategories: [
        { title: 'Root Canals', href: 'service-detail.html?service=root-canals' },
        { title: 'Dental Implants', href: 'service-detail.html?service=dental-implants' }
      ]
    },
    {
      title: 'Oral Surgery',
      href: 'oral-surgery.html',
      subcategories: [
        { title: 'Tooth Extraction', href: 'service-detail.html?service=tooth-extraction' },
        { title: 'Wisdom Tooth Extraction', href: 'service-detail.html?service=wisdom-tooth-extraction' },
        { title: 'Oral and Maxillofacial Surgery', href: 'service-detail.html?service=oral-maxillofacial-surgery' },
        { title: 'TMJ', href: 'service-detail.html?service=tmj' }
      ]
    }
  ];

  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (menuBtn && navLinks) {
    menuBtn.innerHTML = '<span aria-hidden="true">☰</span><span class="menu-label">Menu</span>';
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

  document.querySelectorAll('.logo-wrap span').forEach((element) => {
    element.textContent = clinicTagline;
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

  const navbar = document.querySelector('.navbar');
  let appointmentModal = null;

  const closeAppointmentModal = () => {
    if (!appointmentModal) {
      return;
    }
    appointmentModal.classList.remove('open');
    appointmentModal.setAttribute('aria-hidden', 'true');
  };

  const openAppointmentModal = () => {
    if (!appointmentModal) {
      return;
    }
    appointmentModal.classList.add('open');
    appointmentModal.setAttribute('aria-hidden', 'false');
    const firstInput = appointmentModal.querySelector('input, select');
    if (firstInput) {
      firstInput.focus();
    }
  };

  const ensureAppointmentModal = () => {
    if (appointmentModal) {
      return;
    }

    const modalWrapper = document.createElement('div');
    modalWrapper.className = 'appointment-modal';
    modalWrapper.id = 'appointment-modal';
    modalWrapper.setAttribute('aria-hidden', 'true');

    modalWrapper.innerHTML = `
      <div class="appointment-modal-dialog" role="dialog" aria-modal="true" aria-label="Book Appointment Form">
        <button type="button" class="appointment-modal-close" aria-label="Close appointment form">×</button>
        <h2>Book Appointment</h2>
        <form class="appointment-modal-form appointment-form">
          <input type="text" name="name" placeholder="Name" required />
          <input type="tel" name="phone" placeholder="Phone / WhatsApp" required />
          <input type="date" name="date" required />
          <select name="service" required>
            <option value="">Choose Service</option>
            <option>General Dentistry</option>
            <option>Cosmetic Dentistry</option>
            <option>Dental Implants</option>
            <option>Root Canal</option>
          </select>
          <button class="btn-primary" type="submit">Send Request</button>
          <div class="alert" aria-live="polite"></div>
        </form>
      </div>
    `;

    document.body.appendChild(modalWrapper);
    appointmentModal = modalWrapper;

    const closeBtn = appointmentModal.querySelector('.appointment-modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeAppointmentModal);
    }

    appointmentModal.addEventListener('click', (event) => {
      if (event.target === appointmentModal) {
        closeAppointmentModal();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && appointmentModal.classList.contains('open')) {
        closeAppointmentModal();
      }
    });
  };

  if (navbar && !document.querySelector('.appointment-toggle-btn')) {
    ensureAppointmentModal();

    const appointmentToggleBtn = document.createElement('button');
    appointmentToggleBtn.type = 'button';
    appointmentToggleBtn.className = 'btn-primary appointment-toggle-btn';
    appointmentToggleBtn.textContent = 'Book Appointment';
    appointmentToggleBtn.setAttribute('aria-expanded', 'false');
    appointmentToggleBtn.setAttribute('aria-controls', 'appointment-modal');

    appointmentToggleBtn.addEventListener('click', () => {
      openAppointmentModal();
      appointmentToggleBtn.setAttribute('aria-expanded', 'true');
    });

    navbar.appendChild(appointmentToggleBtn);
  }

  const servicesNavDropdowns = document.querySelectorAll('.dropdown');
  servicesNavDropdowns.forEach((dropdown) => {
    const serviceLink = dropdown.querySelector(':scope > a[href="services.html"]');
    const dropdownMenu = dropdown.querySelector(':scope > .dropdown-menu');

    if (!serviceLink || !dropdownMenu) {
      return;
    }

    dropdownMenu.innerHTML = serviceCategories
      .map((category) => {
        const subcategoryMarkup = category.subcategories
          .map((subcategory) => `<li><a href="${subcategory.href}">${subcategory.title}</a></li>`)
          .join('');

        return `
          <li class="has-submenu">
            <div class="submenu-row">
              <a class="category-link" href="${category.href}">${category.title}</a>
              <button class="submenu-toggle" type="button" aria-expanded="false" aria-label="Toggle ${category.title} subcategories">▾</button>
            </div>
            <ul class="nested-dropdown">
              ${subcategoryMarkup}
            </ul>
          </li>
        `;
      })
      .join('');

    serviceLink.addEventListener('click', (event) => {
      event.preventDefault();
      const isOpen = dropdown.classList.toggle('open');

      servicesNavDropdowns.forEach((item) => {
        if (item !== dropdown) {
          item.classList.remove('open');
        }
      });

      serviceLink.setAttribute('aria-expanded', String(isOpen));
    });

    dropdownMenu.querySelectorAll('.submenu-toggle').forEach((submenuToggle) => {
      submenuToggle.addEventListener('click', (event) => {
        event.preventDefault();
        const currentItem = submenuToggle.closest('.has-submenu');
        if (!currentItem) {
          return;
        }

        const isOpen = currentItem.classList.toggle('open');
        submenuToggle.setAttribute('aria-expanded', String(isOpen));

        dropdownMenu.querySelectorAll('.has-submenu').forEach((item) => {
          if (item !== currentItem) {
            item.classList.remove('open');
            const button = item.querySelector('.submenu-toggle');
            if (button) {
              button.setAttribute('aria-expanded', 'false');
            }
          }
        });
      });
    });
  });

  document.addEventListener('click', (event) => {
    servicesNavDropdowns.forEach((dropdown) => {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('open');
      }
    });
  });

  const serviceCategoryButtons = document.querySelectorAll('.service-category-btn');
  const subcategoryGroups = document.querySelectorAll('.subcategory-group');
  if (serviceCategoryButtons.length && subcategoryGroups.length) {
    serviceCategoryButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const selectedCategory = button.dataset.category;

        serviceCategoryButtons.forEach((item) => {
          item.classList.toggle('active', item === button);
        });

        subcategoryGroups.forEach((group) => {
          group.classList.toggle('hidden', group.dataset.category !== selectedCategory);
        });
      });
    });
  }

  const glowCircles = document.querySelectorAll('.glow-circle');
  glowCircles.forEach((circle) => {
    circle.addEventListener('click', () => {
      glowCircles.forEach((item) => item.classList.remove('active'));
      circle.classList.add('active');
    });
  });

  const appointmentForms = document.querySelectorAll('.appointment-form, .contact-form');
  appointmentForms.forEach((form) => {
    const alertBox = form.querySelector('.alert');
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const fields = [];
      form.querySelectorAll('input, select, textarea').forEach((input) => {
        const value = (input.value || '').trim();
        if (!value) {
          return;
        }
        const label = input.name || input.placeholder || 'Field';
        fields.push(`${label}: ${value}`);
      });

      const formType = form.classList.contains('appointment-form') ? 'Appointment Request' : 'Contact Request';
      const messageText = [`${formType} - ${clinicName}`, ...fields].join('\n');
      const encodedMessage = encodeURIComponent(messageText);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      const emailSubject = encodeURIComponent(`${formType} - ${clinicName}`);
      const emailUrl = `mailto:${clinicEmail}?subject=${emailSubject}&body=${encodedMessage}`;

      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setTimeout(() => {
        window.location.href = emailUrl;
      }, 250);

      if (alertBox) {
        alertBox.textContent = 'Opening WhatsApp and email draft with your details. Please tap Send in both to complete submission.';
      }
      form.reset();

      if (form.classList.contains('appointment-modal-form')) {
        setTimeout(() => {
          closeAppointmentModal();
        }, 500);
      }
    });
  });
});
