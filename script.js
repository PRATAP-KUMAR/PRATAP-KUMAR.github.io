const qs = (selector = '*', element = document) => element.querySelector(selector);

const qsa = (selector = '*', element = document) => [...element.querySelectorAll(selector)];

const hamburger = qs('#hamburger');
const closeIcon = qs('#close-icon');
const container = qs('nav.nav ul');

const toggleBurger = () => {
  hamburger.classList.toggle('no-display');
  closeIcon.classList.toggle('no-display');
  container.classList.toggle('enlarge');
};

hamburger.addEventListener('click', () => {
  toggleBurger();
});

closeIcon.addEventListener('click', () => {
  toggleBurger();
});

container.addEventListener('click', (e) => {
  const { target } = e;

  if (target.tagName.toLowerCase() !== 'a') return;

  toggleBurger();
  qs(target.getAttribute('href')).scrollIntoView();
});

window.onresize = () => {
  if (window.innerWidth >= 768 && container.classList.contains('enlarge')) {
    toggleBurger();
  }
};

export default qsa;
