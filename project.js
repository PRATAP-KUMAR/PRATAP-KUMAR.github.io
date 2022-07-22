import content from './project-data.js';
import jobTags from './job-tags.js';
import techTags from './tech-tags.js';
import openModal from './popup.js';

const projects = document.createElement('div');
projects.className = 'project-cards';

const Article = (project) => {
  const article = document.createElement('article');
  article.className = 'card';

  const cardContainer = document.createElement('div');
  cardContainer.className = 'card-container';

  const projectImage = document.createElement('img');
  projectImage.className = 'project-image';
  projectImage.setAttribute('src', project.featuredImage);
  cardContainer.append(projectImage);

  // project name

  const h2 = document.createElement('h2');
  h2.innerText = project.name;
  cardContainer.append(h2);

  // project job details

  cardContainer.append(jobTags(project.jobDetails));

  // project content

  const paragrah = document.createElement('p');
  paragrah.className = 'paragraph';
  paragrah.innerText = project.content;
  cardContainer.append(paragrah);

  // project tags

  cardContainer.append(techTags(project.technologies));

  // "See Project" Button

  const seeProjectButton = document.createElement('button');
  seeProjectButton.className = 'see-project-button';
  seeProjectButton.innerText = 'See Project';
  seeProjectButton.addEventListener('click', () => {
    openModal(project);
  });
  cardContainer.append(seeProjectButton);

  article.append(cardContainer);

  return article;
};

content.forEach((project) => {
  projects.appendChild(Article(project));
});

const workSection = document.body.querySelector('#portfolioMobile');
workSection.appendChild(projects);

//

const projectsDesktop = document.createElement('div');
projectsDesktop.className = 'project-cards-desktop';

const ArticleDesktop = (project) => {
  const article = document.createElement('article');
  article.className = 'card-desktop';

  const cardContainer = document.createElement('div');
  cardContainer.className = 'card-container-desktop';

  // project name

  const h2 = document.createElement('h2');
  h2.innerText = project.name;
  cardContainer.append(h2);

  // project job details

  cardContainer.append(jobTags(project.jobDetails));

  // project content

  const paragrah = document.createElement('p');
  paragrah.className = 'paragraph-desktop';
  paragrah.innerText = project.content;
  cardContainer.append(paragrah);

  // project tags
  cardContainer.append(techTags(project.technologies));

  // "See Project" Button

  const seeProjectButton = document.createElement('button');
  seeProjectButton.className = 'see-project-button';
  seeProjectButton.innerText = 'See Project';
  seeProjectButton.addEventListener('click', () => {
    openModal(project);
  });
  cardContainer.append(seeProjectButton);

  // project image
  // div

  const div2 = document.createElement('div');
  div2.className = 'div2';

  const projectImageDesktop = document.createElement('img');
  projectImageDesktop.setAttribute('src', project.featuredImage);
  div2.appendChild(projectImageDesktop);

  if (project.id % 2 === 0) {
    article.append(cardContainer);
    article.append(div2);
  } else {
    article.append(div2);
    article.append(cardContainer);
  }

  return article;
};

content.forEach((project) => {
  projectsDesktop.appendChild(ArticleDesktop(project));
});

const workSectionDesktop = document.body.querySelector('#portfolioDesktop');
workSectionDesktop.appendChild(projectsDesktop);

//
