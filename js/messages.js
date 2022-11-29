import { isEscapeKey } from './util.js';
import { onControlEscKeydown } from './form.js';

const body = document.querySelector('body');

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const successMessageElement = successMessageTemplate.cloneNode(true);
const successButton = successMessageElement.querySelector('.success__button');

const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const errorMessageElement = errorMessageTemplate.cloneNode(true);
const errorButton = errorMessageElement.querySelector('.error__button');

const onSuccessModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessMessageModal();
  }
};
const onSuccessBackgroundClick = (evt) => {
  if (!evt.target.classList.contains('success__inner')) {
    closeSuccessMessageModal();
  }
};

const onErrorModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrorMessageModal();
  }
};
const onErrorBackgroundClick = (evt) => {
  if (!evt.target.classList.contains('error__inner')) {
    closeErrorMessageModal();
  }
};

function closeSuccessMessageModal () {
  document.removeEventListener('keydown', onSuccessModalEscKeydown);
  document.removeEventListener('click', onSuccessBackgroundClick);
  successMessageElement.remove();
}
const showSuccessMessage = () => {
  body.append(successMessageElement);
  document.addEventListener('keydown', onSuccessModalEscKeydown);
  document.addEventListener('click', onSuccessBackgroundClick);
  successButton.addEventListener('click', closeSuccessMessageModal);
};

function closeErrorMessageModal() {
  document.removeEventListener('keydown', onErrorModalEscKeydown);
  document.removeEventListener('click', onErrorBackgroundClick);
  document.addEventListener('keydown', onControlEscKeydown);
  errorMessageElement.remove();
}
const showErrorMessage = () => {
  body.append(errorMessageElement);
  document.addEventListener('keydown', onErrorModalEscKeydown);
  document.addEventListener('click', onErrorBackgroundClick);
  errorButton.addEventListener('click', closeErrorMessageModal);
  document.removeEventListener('keydown', onControlEscKeydown);
};

export { showErrorMessage, showSuccessMessage };
