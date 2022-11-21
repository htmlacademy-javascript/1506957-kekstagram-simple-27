import { isEscapeKey } from './util.js';

const body = document.querySelector('body');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const successButtonClose = successMessageTemplate.querySelector('.success__button');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const errorButtonClose = errorMessageTemplate.querySelector('.error__button');

const onMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
  }
};

const showSuccessMessage = () => {
  const successMessageElement = successMessageTemplate.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', closeMessage);
  successButtonClose.addEventListener('click', closeMessage);
  body.appendChild(successMessageElement);
};

const showErrorMessage = () => {
  const errorMessageElement = errorMessageTemplate.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', closeMessage);
  errorButtonClose.addEventListener('click', closeMessage);
  body.appendChild(errorMessageElement);
};

function closeMessage () {
  const messageElement = document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  document.removeEventListener('keydown', onMessageEscKeydown);
  document.removeEventListener('click', closeMessage);
  errorButtonClose.removeEventListener('click', closeMessage);
  successButtonClose.removeEventListener('click', closeMessage);
}

export { showErrorMessage, showSuccessMessage };

