const qs = function (selector = '*', element = document) {
  return element.querySelector(selector);
};

const qsa = function (selector='*', element = document) {
	return [...element.querySelectorAll(selector)]
}

const hamburger = qs('#hamburger');
const closeIcon = qs('#close-icon');
const container = qs('nav.nav ul');
const seeProjects = qsa('.see-project');

for (let i=0, len=seeProjects.length; i<len; i += 1) {
	seeProjects[i].addEventListener('click', ()=> {
		qs("#popup").classList.add("popup");
	})
}

const toggleBurger = function toggleBurger() {
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

const projects = [
	{
	id: project1,
	name: 'Tonic',
	description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
	featuredImage: "url('images/project1')",
	technologies: ['html', 'css', 'javaScript'],
	liveVersion: url("https://pratap-kumar.github.io/"),
	source: url("https://github.com/PRATAP-KUMAR")
	},
	
	{
	id: project2,
	name: 'Multi-Post Stories',
	description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
	featuredImage: url("images/project1"),
	technologies: ['html', 'css', 'javaScript'],
	liveVersion: url("https://pratap-kumar.github.io/"),
	source: url("https://github.com/PRATAP-KUMAR")
	},
	
	{
	id: project3,
	name: 'Facebook 360',
	description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
	featuredImage: url("images/project1"),
	technologies: ['html', 'css', 'javaScript'],
	liveVersion: url("https://pratap-kumar.github.io/"),
	source: url("https://github.com/PRATAP-KUMAR")
	},
	
	{
	id: project4,
	name: 'Uber Navigation',
	description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
	featuredImage: url("images/project1"),
	technologies: ['html', 'css', 'javaScript'],
	liveVersion: url("https://pratap-kumar.github.io/"),
	source: url("https://github.com/PRATAP-KUMAR")
	}
]
	
	
	
	
