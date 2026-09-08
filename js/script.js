'use strict';

const header = document.querySelector('#header');
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#nav');
let lastScrollPosition = window.scrollY;
const scrollDirectionThreshold = 6;

const setHeaderState = () => {
  const currentScrollPosition = window.scrollY;
  const isAtTop = currentScrollPosition <= 24;
  const scrollDifference = currentScrollPosition - lastScrollPosition;

  header.classList.toggle('is-scrolled', !isAtTop);

  if (isAtTop || nav.classList.contains('is-open')) {
    header.classList.remove('is-hidden');
  } else if (scrollDifference > scrollDirectionThreshold) {
    header.classList.add('is-hidden');
  } else if (scrollDifference < -scrollDirectionThreshold) {
    header.classList.remove('is-hidden');
  }

  if (Math.abs(scrollDifference) > scrollDirectionThreshold || isAtTop) {
    lastScrollPosition = Math.max(currentScrollPosition, 0);
  }
};
setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  menuButton.querySelector('img').src = isOpen ? 'assets/icons/x.svg' : 'assets/icons/menu-2.svg';
  document.body.classList.toggle('menu-open', isOpen);
});

nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  document.body.classList.remove('menu-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menu');
  menuButton.querySelector('img').src = 'assets/icons/menu-2.svg';
}));

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('is-open')) menuButton.click();
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px' });

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

// Fallback de segurança: nenhum conteúdo permanece oculto caso o navegador
// atrase ou não dispare o Intersection Observer após uma navegação por âncora.
window.setTimeout(() => {
  document.querySelectorAll('.reveal:not(.is-visible)').forEach(element => {
    element.classList.add('is-visible');
    observer.unobserve(element);
  });
}, 1200);
