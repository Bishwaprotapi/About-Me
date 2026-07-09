(function () {
  'use strict';

  // ---- Typed text effect ----
  const titles = [
    'AI Engineer',
    'Machine Learning Engineer',
    'Software Developer',
    'Research Enthusiast',
    'Robotics Innovator'
  ];
  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typedEl = document.getElementById('typedText');
  const typeSpeed = 80;
  const deleteSpeed = 40;
  const pauseTime = 2000;

  function typeEffect() {
    if (!typedEl) return;

    const current = titles[titleIndex];

    if (isDeleting) {
      typedEl.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedEl.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === current.length) {
      delay = pauseTime;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      delay = 400;
    }

    setTimeout(typeEffect, delay);
  }

  typeEffect();

  // ---- Mobile navigation ----
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('open');
    });
  });

  // ---- Header scroll effect ----
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });

  // ---- Active nav link on scroll ----
  const sections = document.querySelectorAll('section[id]');

  function highlightNav() {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (!link) return;

      const top = section.offsetTop;
      const height = section.offsetHeight;

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', highlightNav);
  highlightNav();

  // ---- Scroll reveal animation ----
  const revealElements = document.querySelectorAll(
    '.info-card, .timeline-item, .edu-card, .skill-category, .project-card, .achievement-section, .pub-category, .contact-form, .contact-item'
  );

  revealElements.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach(el => observer.observe(el));

  // ---- Contact form ----
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    const mailtoLink = `mailto:baburay214@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    window.location.href = mailtoLink;
  });

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();
