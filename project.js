const content = [
    {

        id: 1,
        name: 'Tonic',
        jobDetails: ['CANOPY', 'Back End Dev', '2015'],
        content: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea'",
        featuredImage: "./images/desktop-version/1.png",
        technologies: ['html', 'css', 'javaScript'],
        liveVersion: "url('https://pratap-kumar.github.io/')",
        source: "url('https://github.com/PRATAP-KUMAR')"
    },

    {
        id: 2,
        name: 'Multi-post Stories',
        jobDetails: ['Facebook', 'Full Stack Dev', '2015'],
        content: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea'",
        featuredImage: "./images/desktop-version/projects/2.png",
        technologies: ['html','Ruby on rails', 'css', 'javaScript'],
        liveVersion: "url('https://pratap-kumar.github.io/')",
        source: "url('https://github.com/PRATAP-KUMAR')"
    },

    {
        id: 3,
        name: 'Facebook 360',
        jobDetails: ['Facebook', 'Full Stack Dev', '2015'],
        content: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea'",
        featuredImage: "./images/desktop-version/projects/3.png",
        technologies: ['html','Ruby on rails', 'css', 'javaScript'],
        liveVersion: "url('https://pratap-kumar.github.io/')",
        source: "url('https://github.com/PRATAP-KUMAR')"
    },

    {
        id: 4,
        name: 'Uber Navigation',
        jobDetails: ['Facebook', 'Lead Developer', '2018'],
        content: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea'",
        featuredImage: "./images/desktop-version/projects/4.png",
        technologies: ['html','Ruby on rails', 'css', 'javaScript'],
        liveVersion: "url('https://pratap-kumar.github.io/')",
        source: "url('https://github.com/PRATAP-KUMAR')"
    }
]

const jobTags = (tags) => {
    const element = document.createElement('ul');
    tags.forEach((tagContent) => {
        const tag = document.createElement('li');
        tag.textContent = tagContent;
        element.appendChild(tag);
    });

    return element;
};

const techTags = (tags) => {
    const element = document.createElement('ul');
    tags.forEach((tagContent) => {
        const tag = document.createElement('li');
        tag.className = 'technologies';
        tag.textContent = tagContent;
        element.appendChild(tag);
    });

    return element;
};

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