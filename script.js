const qs = function (selector = '*', element = document) {
    return element.querySelector(selector);
}

const hamburger = qs('#hamburger');
const closeIcon = qs('#close-icon');
const container = qs('nav.nav ul');

const toggleBurger = function () {
    hamburger.classList.toggle('no-display');
    closeIcon.classList.toggle('no-display');
    container.classList.toggle('enlarge');
}

hamburger.addEventListener('click', function () {
    toggleBurger();
});

closeIcon.addEventListener('click', function () {
    toggleBurger();
});

container.addEventListener('click', function (e) {
    const { target } = e

    if (target.tagName.toLowerCase() !== 'a') return

    toggleBurger();
    qs(target.getAttribute('href')).scrollIntoView();
});

window.onresize = () => {
if (window.innerWidth >= 768 && container.classList.contains('enlarge')) {
toggleBurger();
}
