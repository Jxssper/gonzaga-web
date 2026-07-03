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
if (burger) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}
