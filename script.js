const qs = function (selector = '*', element = document) {
	return element.querySelector(selector);
};

const qsa =  (selector = '*', element = document) => {
	return [...element.querySelectorAll(selector)]
}

const hamburger = qs('#hamburger');
const closeIcon = qs('#close-icon');
const container = qs('nav.nav ul');

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

//

const seeProjects = qsa('.see-project');

for (let i = 0, len = seeProjects.length; i < len; i += 1) {
	seeProjects[i].addEventListener('click', () => {
		openModal(content[i]);
	});
}

const openModal = function (project) {
	const projects = document.createElement('div');
	projects.className = 'popup';

	const article = document.createElement('article');
	article.className = 'article';

	const div = document.createElement('div');
	article.append(div);

	const h2 = document.createElement('h2');
	h2.innerText = project.name;
	div.append(h2);

	const elementJob = document.createElement('ul');
	elementJob.className = 'job-tags';

	let arrayJobDetails = project.jobDetails;
	arrayJobDetails.forEach((entry) => {
		const tag = document.createElement('li');
		tag.textContent = entry;
		elementJob.appendChild(tag);
	});
	div.append(elementJob);

	const img = document.createElement('img');
	img.className = 'image';
	img.setAttribute('src', project.featuredImage, 'Project 1');
	div.appendChild(img);

	const threeBox = document.createElement('div');
	threeBox.className = 'three-color-box';

	// 

	const leftBoxDiv = document.createElement('div');
	leftBoxDiv.className = 'left red';

	const paragrah = document.createElement('p');
	paragrah.className = 'paragraph';
	paragrah.innerText = project.description;
	leftBoxDiv.appendChild(paragrah);

	threeBox.appendChild(leftBoxDiv);

	// 

	const rightBoxTopDiv = document.createElement('div');
	rightBoxTopDiv.className = 'right green';

	const elementTags = document.createElement('ul');
	elementTags.className = 'tech-tags';

	let arrayTechs = project.technologies;

	arrayTechs.forEach((tagContent) => {
		const tag = document.createElement('li');
		tag.textContent = tagContent;
		elementTags.appendChild(tag);
	});
	rightBoxTopDiv.append(elementTags);

	threeBox.appendChild(rightBoxTopDiv);

	// 

	const seeLiveButton = document.createElement('button');
	seeLiveButton.className = 'see-live-button';
	seeLiveButton.innerText = 'See Live';
	rightBoxTopDiv.appendChild(seeLiveButton);

	const seeSourceButton = document.createElement('button');
	seeSourceButton.className = 'see-live-button';
	seeSourceButton.innerText = 'See Source';
	rightBoxTopDiv.appendChild(seeSourceButton);

	threeBox.appendChild(rightBoxTopDiv);

	// 

	article.appendChild(threeBox);

	projects.appendChild(article);
	document.body.appendChild(projects);

	const closebtn = document.createElement('a');
	closebtn.className = 'close';

	closebtn.innerText = 'X';

	projects.appendChild(closebtn);

	closebtn.addEventListener('click', () => {
		projects.remove();
	})
}

const content = [
	{
		id: 'project1',
		name: 'Tonic',
		jobDetails: ['CANOPY', 'Back End Dev', '2015'],
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea'",
		featuredImage: "images/desktop-version/1.png",
		technologies: ['html', 'css', 'javaScript', 'Ruby', 'Rails'],
		liveVersion: "url('https://pratap-kumar.github.io/')",
		source: "url('https://github.com/PRATAP-KUMAR')"
	},

	{
		id: 'project2',
		name: 'Multi-post Stories',
		jobDetails: ['Facebook', 'Full Stack Dev', '2015'],
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea'",
		featuredImage: "./images/desktop-version/projects/2.png",
		technologies: ['html', 'css', 'javaScript', 'Ruby', 'Rails'],
		liveVersion: "url('https://pratap-kumar.github.io/')",
		source: "url('https://github.com/PRATAP-KUMAR')"
	},

	{
		id: 'project3',
		name: 'Facebook 360',
		jobDetails: ['Facebook', 'Full Stack Dev', '2015'],
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea'",
		featuredImage: "./images/desktop-version/projects/3.png",
		technologies: ['html', 'css', 'javaScript', 'Ruby', 'Rails'],
		liveVersion: "url('https://pratap-kumar.github.io/')",
		source: "url('https://github.com/PRATAP-KUMAR')"
	},

	{
		id: 'project4',
		name: 'Uber Navigation',
		jobDetails: ['Facebook', 'Lead Developer', '2018'],
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea'",
		featuredImage: "./images/desktop-version/projects/3.png",
		technologies: ['html', 'css', 'javaScript', 'Ruby', 'Rails'],
		liveVersion: "url('https://pratap-kumar.github.io/')",
		source: "url('https://github.com/PRATAP-KUMAR')"
	}
]
