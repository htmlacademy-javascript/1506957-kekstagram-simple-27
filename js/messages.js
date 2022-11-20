import {isEscapeKey} from './util.js';

const body = document.querySelector('body');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const successButtonClose = successMessageTemplate.querySelector('.success__button');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const errorButtonClose = errorMessageTemplate.querySelector('.error__button');

const onCloseButtonClick = () => closeMessage();
const onOverlayClick = () => closeMessage();
const onMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
  }
};

const showSuccessMessage = () => {
  const successMessageElement = successMessageTemplate.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onOverlayClick);
  successButtonClose.addEventListener('click', onCloseButtonClick);
  body.appendChild(successMessageElement);
};

const showErrorMessage = () => {
  const errorMessageElement = errorMessageTemplate.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onOverlayClick);
  errorButtonClose.addEventListener('click', onCloseButtonClick);
  body.appendChild(errorMessageElement);
};

function closeMessage () {
  const messageElement = document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  document.removeEventListener('keydown', onMessageEscKeydown);
  document.removeEventListener('click', onOverlayClick);
  errorButtonClose.removeEventListener('click', onCloseButtonClick); //???????????????????????
  successButtonClose.removeEventListener('click', onCloseButtonClick); //???????????????????????
}

export { showErrorMessage, showSuccessMessage};

