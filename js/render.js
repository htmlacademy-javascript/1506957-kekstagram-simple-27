import { similarElements } from './data.js';

const similarListElement = document.querySelector('.pictures');
const similarElementTemplate = document.querySelector('#picture').content.querySelector('.picture');

const similarPhoto = similarElements;
const similarListFragment = document.createDocumentFragment();

similarPhoto.forEach(({url, likes, comments}) => {
  const photoElement = similarElementTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments;
  similarListFragment.append(photoElement);
});
similarListElement.append(similarListFragment);

изменения
