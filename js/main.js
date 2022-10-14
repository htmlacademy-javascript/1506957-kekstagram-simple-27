//Функция рандомного целого числа из диапозона
const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    return NaN;
  }
  if (max < min) {
    const temp = max;
    max = min;
    min = temp;
  }
  return Math.floor(Math.random() * (max - min) + min);
};
getRandomNumber();

//Функция для проверки максимальной длины строки
//const maxStringLength = (string, maxLength) => string.length < maxLength;
//maxStringLength();

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
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomElement(DESCRIPTION_FOR_PHOTO),
  likes: getRandomNumber(LIKES_COUNT.min, LIKES_COUNT.max),
  comments: getRandomNumber(COMMENTS_COUNT.min, COMMENTS_COUNT.max)
});

const similarElements = (index) => [...Array(index)].map((_item, index) => createElement(index + 1));
const similarElementsArray = similarElements(ELEMENTS_COUNTS);
console.log(similarElementsArray);
