const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = Array.from(document.querySelectorAll('.nav-link'));
const header = document.querySelector('.site-header');
const contactForm = document.querySelector('.contact-form');
const sections = Array.from(document.querySelectorAll('section'));

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    navToggle.classList.toggle('open');
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((item) => item.classList.toggle('active', item === link));
    if (mainNav && mainNav.classList.contains('open')) {
      mainNav.classList.remove('open');
    }
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
});

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const sectionEl = entry.target;

      if (entry.isIntersecting) {
        sectionEl.classList.add('visible');
      } else {
        sectionEl.classList.remove('visible');
      }
    });
  }, { threshold: 0.34, rootMargin: '-10% 0px -30% 0px' });

  sections.forEach((section) => sectionObserver.observe(section));
} else {
  sections.forEach((section) => section.classList.add('visible'));
}

if (contactForm) {
  contactForm.addEventListener('submit', () => {
    const button = contactForm.querySelector('button[type="submit"]');

    if (button) {
      const originalText = button.textContent;
      button.textContent = 'Sending...';
      button.disabled = true;

      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 1800);
    }
  });
}
