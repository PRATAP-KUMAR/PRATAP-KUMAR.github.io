import content from './project-data.js';
import jobTags from './job-tags.js';
import techTags from './tech-tags.js';

const projects = document.createElement('div');
projects.className = 'grid container';

const Article = (project) => {
    const article = document.createElement('article');
    article.className = 'card';

    const div1 = document.createElement('div');
    div1.className = 'div1';


    // project name

    const h2 = document.createElement('h2');
    h2.innerText = project.name;
    div1.append(h2);

    // project job details

    div1.append(jobTags(project.jobDetails));

    // project content

    const paragrah = document.createElement('p');
    paragrah.className = 'paragraph';
    paragrah.innerText = project.content;
    div1.append(paragrah);

    // project tags

    div1.append(techTags(project.technologies));

    const seeProjectButton = document.createElement('button');
    seeProjectButton.className = 'see-project-button';
    seeProjectButton.innerText = 'See Project';
    seeProjectButton.addEventListener('click', ()=> {
    })
    div1.append(seeProjectButton);


    // project Image

    // div2

    const div2 = document.createElement('div');
    div2.className = 'div2';

    const img = document.createElement('img');
    img.setAttribute('src', project.featuredImage);
    div2.appendChild(img);

    //

    if (project.id % 2 == 0) {
        article.append(div1);
        article.append(div2);
    } else {
        article.append(div2);
        article.append(div1);
    }

    return article;
}

content.forEach((project) => {
    projects.appendChild(Article(project));
})

const workSection = document.body.querySelector('#work');
workSection.appendChild(projects);

// popup window work starts from here

const seeProjects = qsa('.see-project-button');

for (let i = 0, len = seeProjects.length; i < len; i += 1) {
	seeProjects[i].addEventListener('click', () => {
		openModal(content[i]);
	});
};

const openModal = (project) => {
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