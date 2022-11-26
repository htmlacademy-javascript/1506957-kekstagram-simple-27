const similarListElement = document.querySelector('.pictures');
const similarElementTemplate = document.querySelector('#picture').content.querySelector('.picture');
const similarListFragment = document.createDocumentFragment();

const toRenderPhotoCard = (similarElements) => {
  similarElements.forEach(({url, likes, comments}) => {
    const photoElement = similarElementTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments;
    similarListFragment.append(photoElement);
  });
  similarListElement.append(similarListFragment);
  return similarListElement;
};

export {toRenderPhotoCard};
