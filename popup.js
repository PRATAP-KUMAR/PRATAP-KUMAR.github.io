// popup window work starts from here

import content from './project-data.js';
import jobTags from './job-tags.js';
import techTags from './tech-tags.js';
import qsa from './script.js';

const openModal = (project) => {
    const projects = document.createElement('div');
    projects.className = 'popup';
  
    const articlePopup = document.createElement('article');
    articlePopup.className = 'article';
  
    const divPopup = document.createElement('div');
    divPopup.className = 'popup-div';
    articlePopup.append(divPopup);
  
    const h2 = document.createElement('h2');
    h2.innerText = project.name;
    divPopup.append(h2);
  
    divPopup.append(jobTags(project.jobDetails));
  
    const img = document.createElement('img');
    img.className = 'image';
    img.setAttribute('src', project.featuredImage, 'Project');
    divPopup.appendChild(img);

    const divContainer = document.createElement('div')
    divContainer.className = 'red-blue-green';
    divPopup.appendChild(divContainer);

    const divContainer2 = document.createElement('div')
    divContainer2.className = 'red';
    divContainer.appendChild(divContainer2);
  
    const paragrah = document.createElement('p');
    paragrah.innerText = project.description;
    divContainer2.append(paragrah);

    const divContainer3 = document.createElement('div');
    divContainer3.className = 'blue-green';
    divContainer.appendChild(divContainer3);

    const divContainer4 = document.createElement('div')
    divContainer4.className = 'blue';
    divContainer3.append(divContainer4);

    divContainer4.appendChild(techTags(project.technologies));

    const divContainer5 = document.createElement('div')
    divContainer5.className = 'green';
    divContainer3.append(divContainer5);

    const buttonSeeLive = document.createElement('button');
    buttonSeeLive.className = 'button-popup';
    buttonSeeLive.innerHTML = 'See Live';
    divContainer5.append(buttonSeeLive)

    const buttonSeeSource = document.createElement('button');
    buttonSeeSource.className = 'button-popup';
    buttonSeeSource.innerHTML = 'See Source';
    divContainer5.append(buttonSeeSource)

    const buttonImages =document.createElement('div');
    buttonImages.className = 'twoButtons';

  //
    projects.appendChild(articlePopup);
    document.body.appendChild(projects);
  //
  
    const closebtn = document.createElement('a');
    closebtn.className = 'close-icon ';
  
    closebtn.innerText = 'X';
  
    projects.appendChild(closebtn);
  
    closebtn.addEventListener('click', () => {
      projects.remove();
    });
  };

  export default openModal;
