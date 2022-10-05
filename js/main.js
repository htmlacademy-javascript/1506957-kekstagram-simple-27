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
