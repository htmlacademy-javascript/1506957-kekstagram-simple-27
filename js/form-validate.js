import {imgUploadForm} from './form.js';

const TITLE_WORDS_RANGE = {
  min: 20,
  max: 140
};

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  // errorTextClass: 'img-upload__text__error'
}
);

function validateComment (value) {
  return value.length >= TITLE_WORDS_RANGE.min && value.length <= TITLE_WORDS_RANGE.max;
}

pristine.addValidator(
  imgUploadForm.querySelector('#description'),
  validateComment,
  'От 20 до 140 символов'
);

const validateForm = () => {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
  });
};
export {validateForm};
