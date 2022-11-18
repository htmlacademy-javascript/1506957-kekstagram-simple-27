import { isEscapeKey } from './util.js';
import { resetScale } from './scale-slider.js';
import { resetEffects } from './effects.js';

const form = document.querySelector('.img-upload__form');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadControlCloseButton = uploadOverlay.querySelector('#upload-cancel');
const uploadControlOpenButton = document.querySelector('#upload-file');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
}
);

const toOpenControl = () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onControlEscKeydown);
};

const toCloseControl = () => {
  form.reset();
  resetScale();
  resetEffects();
  pristine.reset();
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onControlEscKeydown);
};

function onControlEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    toCloseControl();
  }
}

const onCloseButtonClick = () => {
  toCloseControl();
};

const onUploadButtonChange = () => {
  toOpenControl();
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

uploadControlOpenButton.addEventListener('change', onUploadButtonChange);
uploadControlCloseButton.addEventListener('click', onCloseButtonClick);
form.addEventListener('submit', onFormSubmit);
