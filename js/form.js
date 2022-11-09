import {isEscapeKey} from './util.js';

const imgUploadForm = document.querySelector('.img-upload__form');
const uploadControlOpenButton = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadControlCloseButton = uploadOverlay.querySelector('#upload-cancel');
const body = document.querySelector('body');

const onControlEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    toCloseControl();
  }};

function toOpenControl () {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onControlEscKeydown);
}

function toCloseControl () {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  imgUploadForm.reset();

  document.removeEventListener('keydown', onControlEscKeydown);
}

//Закинуть в функцию ?
uploadControlOpenButton.addEventListener('change', () => {
  toOpenControl();
});
uploadControlOpenButton.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    toOpenControl();
  }
});

uploadControlCloseButton.addEventListener('click', () => {
  toCloseControl();
});
uploadControlCloseButton.removeEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    toCloseControl();
  }
});

export {imgUploadForm};


// 8,24 слайд 2 и 8
