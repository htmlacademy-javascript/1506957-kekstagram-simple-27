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

const isEscapeKey = (evt) => evt.key === 'Escape';

const SET_TIMEOUT_TIME_FOR_ALERT = 5000;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'black';
  alertContainer.style.opacity = '0.5';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, SET_TIMEOUT_TIME_FOR_ALERT);
};

export {getRandomNumber, isEscapeKey, showAlert};
