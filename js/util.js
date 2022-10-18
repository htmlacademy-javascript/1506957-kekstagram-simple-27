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

export {getRandomNumber};
