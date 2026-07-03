gsap.registerPlugin(ScrollTrigger);

// Header background on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

// Reveal on scroll
document.querySelectorAll('[data-reveal]').forEach((el) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  });
});

// Animated stat counters
document.querySelectorAll('[data-count]').forEach((el) => {
  const target = parseInt(el.getAttribute('data-count'), 10);
  ScrollTrigger.create({
    trigger: el,
    start: 'top 90%',
    once: true,
    onEnter: () => {
      gsap.to(el, {
        innerText: target,
        duration: 1.4,
        ease: 'power1.out',
        snap: { innerText: 1 }
      });
    }
  });
});

// Hero entrance on load
gsap.to('.hero [data-reveal]', {
  opacity: 1,
  y: 0,
  duration: 1,
  stagger: 0.12,
  ease: 'power3.out',
  delay: 0.2
});

// Mobile menu toggle
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const navOverlay = document.getElementById('navOverlay');

function closeMenu() {
  nav.classList.remove('open');
  burger.classList.remove('open');
  navOverlay.classList.remove('open');
}

if (burger) {
  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    burger.classList.toggle('open', isOpen);
    navOverlay.classList.toggle('open', isOpen);
  });
  navOverlay.addEventListener('click', closeMenu);
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

// Back to top button
const totop = document.getElementById('totop');
window.addEventListener('scroll', () => {
  totop.classList.toggle('visible', window.scrollY > 600);
});
totop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
