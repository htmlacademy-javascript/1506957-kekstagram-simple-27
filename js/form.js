import { isEscapeKey } from './util.js';
import { resetScale } from './scale-slider.js';
import { resetEffects } from './effects.js';
import { sendData } from './api.js';
import { showErrorMessage, showSuccessMessage } from './messages.js';

const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const uploadControlOpenButton = document.querySelector('#upload-file');
const submitButton = document.querySelector('.img-upload__submit');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadControlCloseButton = uploadOverlay.querySelector('#upload-cancel');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
}
);

const openControl = () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onControlEscKeydown);
};

const closeControl = () => {
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
    closeControl();
  }
}

const onCloseButtonClick = () => {
  closeControl();
};

const onUploadButtonChange = () => {
  openControl();
};


const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Опубликовываю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};


uploadControlOpenButton.addEventListener('change', onUploadButtonChange);
uploadControlCloseButton.addEventListener('click', onCloseButtonClick);
const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData (
        () => onSuccess(unblockSubmitButton(), closeControl(), showSuccessMessage()),
        () => showErrorMessage(unblockSubmitButton(), showErrorMessage(), unblockSubmitButton()),
        new FormData(evt.target),
      );
    }});
};

export {setUserFormSubmit, closeControl, onControlEscKeydown};
