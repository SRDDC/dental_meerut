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
      // --- Review Slideshow Logic ---
      const reviewData = {
        implants: [
          { name: "Amit S.", rating: 5, text: "Got my dental implants done here. The process was smooth and painless. Highly recommended!", date: "Feb 2024" },
          { name: "Priya R.", rating: 5, text: "Excellent care and attention to detail. My implant feels just like a natural tooth.", date: "Jan 2024" },
          { name: "Rohit K.", rating: 5, text: "Professional team and modern technology. Very satisfied with my dental implant.", date: "Dec 2023" },
          { name: "Sunita M.", rating: 5, text: "Dr. Sachiin explained everything about the implant procedure. The results are fantastic!", date: "Nov 2023" },
          { name: "Vikas T.", rating: 5, text: "Best place for dental implants in Meerut. Thank you for restoring my smile!", date: "Oct 2023" }
        ],
        extraction: [
          { name: "Neha J.", rating: 5, text: "Tooth extraction was quick and almost painless. The staff is very caring.", date: "Feb 2024" },
          { name: "Sandeep P.", rating: 5, text: "I was nervous about my extraction, but the doctors made me feel comfortable.", date: "Jan 2024" },
          { name: "Ritu S.", rating: 5, text: "Very hygienic and professional. My extraction healed perfectly.", date: "Dec 2023" },
          { name: "Manoj D.", rating: 5, text: "Best dental clinic for extractions. Highly skilled team.", date: "Nov 2023" },
          { name: "Kavita L.", rating: 5, text: "Thank you for making my extraction experience stress-free!", date: "Oct 2023" }
        ],
        wisdom: [
          { name: "Deepak S.", rating: 5, text: "Wisdom tooth removal was done with utmost care. No swelling or pain after.", date: "Feb 2024" },
          { name: "Megha V.", rating: 5, text: "Doctors are very gentle and explained the procedure well.", date: "Jan 2024" },
          { name: "Rakesh B.", rating: 5, text: "Smooth experience for my wisdom tooth extraction. Clinic is very clean.", date: "Dec 2023" },
          { name: "Shalini G.", rating: 5, text: "Highly recommend for wisdom tooth issues. Excellent post-op care.", date: "Nov 2023" },
          { name: "Tarun K.", rating: 5, text: "No pain, no complications. Best dental team for wisdom teeth!", date: "Oct 2023" }
        ],
        smile: [
          { name: "Anjali S.", rating: 5, text: "Smile restoration changed my life. I feel so much more confident now!", date: "Feb 2024" },
          { name: "Rahul M.", rating: 5, text: "The doctors are artists! My smile looks natural and beautiful.", date: "Jan 2024" },
          { name: "Pooja T.", rating: 5, text: "Thank you for giving me my dream smile. The process was easy and comfortable.", date: "Dec 2023" },
          { name: "Saurabh N.", rating: 5, text: "Best clinic for smile makeovers. The results exceeded my expectations.", date: "Nov 2023" },
          { name: "Sneha R.", rating: 5, text: "Professional, friendly, and truly skilled at smile restoration!", date: "Oct 2023" }
        ]
      };

      let currentCategory = 'implants';
      let currentIndex = 0;

      function renderReviewCard(review) {
        return `
          <div class="review-card">
            <div class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
            <p class="review-text">${review.text}</p>
            <div class="review-meta">
              <span class="review-name">${review.name}</span>
              <span class="review-date">${review.date}</span>
            </div>
          </div>
        `;
      }

      function updateReviewSlideshow() {
        const wrapper = document.querySelector('.review-cards-wrapper');
        if (!wrapper) return;
        const reviews = reviewData[currentCategory];
        wrapper.innerHTML = renderReviewCard(reviews[currentIndex]);
      }

      // Navigation
      document.addEventListener('click', (e) => {
        if (e.target.classList.contains('review-prev')) {
          const reviews = reviewData[currentCategory];
          currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
          updateReviewSlideshow();
        } else if (e.target.classList.contains('review-next')) {
          const reviews = reviewData[currentCategory];
          currentIndex = (currentIndex + 1) % reviews.length;
          updateReviewSlideshow();
        } else if (e.target.classList.contains('review-category-btn')) {
          document.querySelectorAll('.review-category-btn').forEach(btn => btn.classList.remove('active'));
          e.target.classList.add('active');
          currentCategory = e.target.dataset.category;
          currentIndex = 0;
          updateReviewSlideshow();
        }
      });

      // Initial render
      updateReviewSlideshow();
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
