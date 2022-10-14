//Функция рандомного целого числа из диапозона
const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    return NaN;
  }
  if (max < min) {
    const temp = max;
    max = min;
    min = temp;
    return Math.floor(Math.random() * (max - min) + min);
  }
  else {
    return Math.floor(Math.random() * (max - min) + min);
  }
};
getRandomNumber();

//Функция для проверки максимальной длины строки
// const maxStringLength = (string, maxLength) => string.length < maxLength;
// maxStringLength();


const ELEMENTS_COUNTS = 25;

// const ID_COUNTS = {
//   min: 1,
//   max: 25
// }

const URL_ADDRESS = {
  min: 1,
  max: 25
};

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
// eslint-disable-next-line semi
}

const COMMENTS_COUNT = {
  min: 0,
  max: 200
};

const getRandomElement = (elements) => (elements[getRandomNumber(0, elements.length - 1 )]);

const createElement = (index) => ({
  id: index,
  url: `photos/${getRandomNumber(URL_ADDRESS.min, URL_ADDRESS.max)}.jpg`,
  description: getRandomElement(DESCRIPTION_FOR_PHOTO),
  likes: getRandomNumber(LIKES_COUNT.min, LIKES_COUNT.max),
  comments: getRandomNumber(COMMENTS_COUNT.min, COMMENTS_COUNT.max)
});

// eslint-disable-next-line no-shadow
const similarElements = (index) => [...Array(index)].map((_item, index) => createElement(index + 1));
// eslint-disable-next-line no-console
console.log(similarElements(ELEMENTS_COUNTS));
