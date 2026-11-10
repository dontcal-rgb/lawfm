const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.nav-links');

const justiceIcons = {
  scales: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v17M5 7h14M5 7l-3 6h6L5 7Zm14 0-3 6h6l-3-6ZM8 21h8M2 14c1.5 2 4.5 2 6 0m8 0c1.5 2 4.5 2 6 0"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3 20 6v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-3Z"/><path d="m9 12 2 2 4-4"/></svg>',
  landmark: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m3 9 9-6 9 6H3ZM5 10v8m5-8v8m4-8v8m5-8v8M3 21h18M2 18h20"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18m-11 0v2h4v-2"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.8 8.8c0 5.2-8.8 11-8.8 11s-8.8-5.8-8.8-11A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z"/><path d="M3.5 12h4l2-3 3.2 6 2.1-3h5.7"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M3 20v-1a6 6 0 0 1 12 0v1H3Zm13-9a3 3 0 1 0-1-5.8M18 14a5 5 0 0 1 3 4.6v1h-3"/></svg>',
  scroll: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a3 3 0 0 1-3-3V6a2 2 0 0 1 2-2h2Zm0 0v12a2 2 0 0 1-2 2m6-9h5m-5 4h5"/></svg>',
  message: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 9 9 0 0 1-4-.9L3 20l1.5-4A7.2 7.2 0 0 1 4 12a7.5 7.5 0 0 1 8-7.5 7.5 7.5 0 0 1 8 7Z"/><path d="M8 12h.01M12 12h.01M16 12h.01"/></svg>',
  compass: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18m-13 4h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 3a14 14 0 0 1-6-6l3-2-2-5Z"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></svg>',
  document: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 3h8l5 5v13H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M14 3v5h5m-10 5h6m-6 4h6"/></svg>'
};

window.JusticeIcons = justiceIcons;
document.querySelectorAll('[data-icon]').forEach(element => {
  const icon = justiceIcons[element.dataset.icon];
  if (icon) element.innerHTML = icon;
});

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    navigation.classList.toggle('open', open);
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    navigation.classList.remove('open');
  }));
}

const revealTargets = [...document.querySelectorAll('[data-reveal]')];
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('motion-ready');
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  revealTargets.forEach(target => revealObserver.observe(target));
  const revealInViewport = () => revealTargets.forEach(target => {
    const bounds = target.getBoundingClientRect();
    if (bounds.top >= window.innerHeight || bounds.bottom <= 0) return;
    target.classList.add('is-visible');
    revealObserver.unobserve(target);
  });
  window.addEventListener('scroll', revealInViewport, { passive: true });
  window.addEventListener('resize', revealInViewport);
  revealInViewport();
}

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async event => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const status = contactForm.querySelector('.form-message');
    submitButton.disabled = true;
    status.textContent = 'Sending your request...';
    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' }
      });
      if (!response.ok) throw new Error('Request failed');
      status.textContent = 'Thank you. Your message has been sent. Our team will be in touch.';
      contactForm.reset();
    } catch {
      status.textContent = 'We could not send your request. Please try again or call +1 (212) 555-0184.';
    } finally {
      submitButton.disabled = false;
    }
  });
}