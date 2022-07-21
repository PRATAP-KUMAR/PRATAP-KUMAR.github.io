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

const Tags = (tags) => {
    const element = document.createElement('ul');
    element.className = 'tags';

    tags.forEach((tagContent) => {
        const tag = document.createElement('li');
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

    const img = document.createElement('img');
    img.setAttribute('src', project.featuredImage);
    article.appendChild(img);

    const div = document.createElement('div');
    article.append(div);

    const h3 = document.createElement('h3');
    h3.innerText = project.name;
    div.append(h3);

    div.append(Tags(project.technologies));

    return article;
}

content.forEach((project) => {
    projects.appendChild(Article(project));
})

const workSection = document.body.querySelector('#work');
workSection.appendChild(projects);