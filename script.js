document.addEventListener('DOMContentLoaded', () => {
    // Doctor card glow effect on click/focus
    document.querySelectorAll('.doctor-glow').forEach(card => {
      card.addEventListener('click', function() {
        document.querySelectorAll('.doctor-glow').forEach(c => c.classList.remove('glow'));
        this.classList.add('glow');
      });
      card.addEventListener('focus', function() {
        document.querySelectorAll('.doctor-glow').forEach(c => c.classList.remove('glow'));
        this.classList.add('glow');
      });
      card.addEventListener('blur', function() {
        this.classList.remove('glow');
      });
    });

    // Glow circle click effect
    document.querySelectorAll('.glow-circle').forEach(circle => {
      circle.addEventListener('click', function() {
        document.querySelectorAll('.glow-circle').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
      });
    });
  const clinicName = 'Shree Rishabh Dev Dental Care And Implant Centre';
  const oldClinicName = 'Jain Dental Clinic';
  const clinicTagline = '|IMPLANTS| ALIGNERS| BRACES| ROOT CANAL TREATMENT | CROWNS';
  const contactNumber = '919536579683';
  const whatsappNumber = contactNumber;
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
      const isMobileMenu = window.matchMedia('(max-width: 760px)').matches;

      if (!isMobileMenu) {
        return;
      }

      if (!dropdown.classList.contains('open')) {
        event.preventDefault();

        servicesNavDropdowns.forEach((item) => {
          if (item !== dropdown) {
            item.classList.remove('open');
          }
        });

        dropdown.classList.add('open');
        serviceLink.setAttribute('aria-expanded', 'true');
      }
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

  const reviewSlider = document.querySelector('.review-slider');
  const reviewSlides = document.querySelector('.review-slides');
  const reviewItems = document.querySelectorAll('.review-slide');
  if (reviewSlider && reviewSlides && reviewItems.length > 1) {
    let currentReview = 0;
    let reviewInterval = null;

    const updateReviewPosition = () => {
      reviewSlides.style.transform = `translateX(-${currentReview * 100}%)`;
    };

    const moveReview = () => {
      currentReview = (currentReview + 1) % reviewItems.length;
      updateReviewPosition();
    };

    reviewInterval = setInterval(moveReview, 4200);

    reviewSlider.addEventListener('mouseenter', () => {
      clearInterval(reviewInterval);
    });

    reviewSlider.addEventListener('mouseleave', () => {
      reviewInterval = setInterval(moveReview, 4200);
    });
  }

  const setupFaqAccordion = () => {
    const faqSections = document.querySelectorAll('.faq-section');
    if (!faqSections.length) {
      return;
    }

    faqSections.forEach((section) => {
      const faqCards = section.querySelectorAll('.cards-grid .card');
      faqCards.forEach((card, index) => {
        const questionHeading = card.querySelector('h3');
        const answerParagraph = card.querySelector('p');
        if (!questionHeading || !answerParagraph || card.dataset.faqPrepared === 'true') {
          return;
        }

        const questionText = questionHeading.textContent.trim();
        const answerText = answerParagraph.textContent.trim();
        const faqId = `faq-answer-${index + 1}`;

        card.classList.add('faq-toggle-card');
        card.innerHTML = `
          <button type="button" class="faq-question" aria-expanded="false" aria-controls="${faqId}">${questionText}</button>
          <p id="${faqId}" class="faq-answer">${answerText}</p>
        `;

        const questionBtn = card.querySelector('.faq-question');
        questionBtn.addEventListener('click', () => {
          const isOpen = card.classList.toggle('open');
          questionBtn.setAttribute('aria-expanded', String(isOpen));
        });

        card.dataset.faqPrepared = 'true';
      });
    });
  };

  const setupAboutAccordion = () => {
    const aboutCards = document.querySelectorAll('.grid-2 .card');
    aboutCards.forEach((card, index) => {
      const heading = card.querySelector('h3');
      const content = card.querySelector('p');
      if (!heading || !content || card.dataset.aboutPrepared === 'true') {
        return;
      }

      const titleText = heading.textContent.trim();
      if (titleText !== 'Our Vision' && titleText !== 'Our Promise') {
        return;
      }

      const bodyText = content.textContent.trim();
      const panelId = `about-panel-${index + 1}`;

      card.classList.add('about-toggle-card');
      card.innerHTML = `
        <button type="button" class="about-toggle-btn" aria-expanded="false" aria-controls="${panelId}">${titleText}</button>
        <p id="${panelId}" class="about-toggle-content">${bodyText}</p>
      `;

      const toggleBtn = card.querySelector('.about-toggle-btn');
      toggleBtn.addEventListener('click', () => {
        const isOpen = card.classList.toggle('open');
        toggleBtn.setAttribute('aria-expanded', String(isOpen));
      });

      card.dataset.aboutPrepared = 'true';
    });
  };

  const ensureFloatingActions = () => {
    if (document.querySelector('.floating-actions')) {
      return;
    }

    const actionsWrap = document.createElement('div');
    actionsWrap.className = 'floating-actions';

    actionsWrap.innerHTML = `
      <a class="floating-action-btn whatsapp" href="https://wa.me/${whatsappNumber}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M16.04 3C8.86 3 3.03 8.73 3.03 15.79c0 2.48.72 4.78 1.97 6.73L3 29l6.67-1.95a13.11 13.11 0 0 0 6.37 1.63h.01c7.18 0 13.01-5.73 13.01-12.79C29.06 8.73 23.23 3 16.04 3Zm0 23.57h-.01a10.87 10.87 0 0 1-5.54-1.5l-.4-.24-3.96 1.16 1.22-3.84-.26-.39a10.6 10.6 0 0 1-1.68-5.67c0-5.86 4.84-10.63 10.78-10.63 5.94 0 10.78 4.77 10.78 10.63 0 5.86-4.84 10.63-10.78 10.63Zm5.92-7.89c-.32-.16-1.89-.93-2.19-1.03-.29-.11-.5-.16-.72.16-.21.31-.82 1.03-1 1.24-.18.21-.36.24-.68.08-.32-.16-1.34-.49-2.55-1.56-.94-.83-1.58-1.86-1.76-2.17-.18-.31-.02-.48.14-.64.15-.15.32-.39.47-.58.16-.19.21-.31.32-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.68-.98-2.31-.26-.6-.53-.52-.72-.53h-.61c-.21 0-.55.08-.84.39-.29.31-1.11 1.08-1.11 2.64 0 1.55 1.13 3.05 1.29 3.26.16.21 2.22 3.5 5.39 4.91.75.33 1.34.53 1.8.68.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.16-1.52.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z"/></svg>
      </a>
      <a class="floating-action-btn call" href="tel:+${contactNumber}" aria-label="Call clinic">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z"/></svg>
      </a>
    `;

    document.body.appendChild(actionsWrap);
  };

  setupFaqAccordion();
  setupAboutAccordion();
  ensureFloatingActions();

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
