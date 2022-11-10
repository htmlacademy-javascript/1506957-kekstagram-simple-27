import {imgUploadForm} from './form.js';

const TITLE_WORDS_RANGE = {
  min: 20,
  max: 140
};

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
}
);

function validateComment (value) {
  return value.length >= TITLE_WORDS_RANGE.min && value.length <= TITLE_WORDS_RANGE.max;
}

pristine.addValidator(
  imgUploadForm.querySelector('#description'),
  validateComment,
  `От ${TITLE_WORDS_RANGE.min} до ${TITLE_WORDS_RANGE.max} символов`
);

const validateForm = () => {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
  });
};
export {validateForm};
