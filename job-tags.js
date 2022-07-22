const jobTags = (tags) => {
  const element = document.createElement('ul');
  tags.forEach((tagContent) => {
    const tag = document.createElement('li');
    tag.textContent = tagContent;
    element.appendChild(tag);
  });

  return element;
};

export default jobTags;