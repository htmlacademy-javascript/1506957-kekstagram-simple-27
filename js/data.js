import { getRandomNumber } from './util.js';

const ELEMENTS_COUNTS = 25;

const DESCRIPTION_FOR_PHOTO = [
  'Это я на берегу моря',
  'Мой кот Барсик, друг Кекса',
  'Мы с ребятами на шашлыках в парке',
  'Мариночка, с Днем Рождения!',
  'Чудесный закат...'
];

const LIKES_COUNT = {
  min: 15,
  max: 200
};

const COMMENTS_COUNT = {
  min: 0,
  max: 200
};

const getRandomElement = (elements) => (elements[getRandomNumber(0, elements.length - 1 )]);

const createElement = (index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: getRandomElement(DESCRIPTION_FOR_PHOTO),
  likes: getRandomNumber(LIKES_COUNT.min, LIKES_COUNT.max),
  comments: getRandomNumber(COMMENTS_COUNT.min, COMMENTS_COUNT.max)
});

// eslint-disable-next-line no-shadow
const similarElements = Array.from({length: ELEMENTS_COUNTS}, (_, index) => createElement(index));

export{similarElements};
