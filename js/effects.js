import { EFFECTS } from './util.js';

const image = document.querySelector('.img-upload__preview img');
const form = document.querySelector('.img-upload__form');
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level__value');

const DEFAULT_EFFECT = EFFECTS[0];
let currentEffect = DEFAULT_EFFECT;

const isDefault = () => currentEffect === DEFAULT_EFFECT;

const updateSlider = () => {
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: currentEffect.min,
      max: currentEffect.max
    },
    start: currentEffect.max,
    step: currentEffect.step
  });
  if (isDefault()) {
    sliderElement.classList.add('hidden');
  }
};

const onFilterChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  currentEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  updateSlider();
};

const onSliderChange = () => {
  image.style.filter = 'none';
  image.className = '';
  effectLevel.value = '';
  if (isDefault()) {
    return;
  }
  const effectValue = sliderElement.noUiSlider.get();
  image.style.filter = `${currentEffect.style}(${effectValue}${currentEffect.unit})`;
  const nameOfEffectClass = `effects__preview--${currentEffect.name}`;
  image.classList.add(nameOfEffectClass);

  effectLevel.value = effectValue;
};

const resetEffects = () => {
  currentEffect = DEFAULT_EFFECT;
  updateSlider();
};

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower'
});
updateSlider();

form.addEventListener('change', onFilterChange);
sliderElement.noUiSlider.on('update', onSliderChange);

export { resetEffects };
