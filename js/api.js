import { SERVER_URL_POST, SERVER_URL_GET, showAlert} from './util.js';

const getData = (onSuccess) => {
  fetch(SERVER_URL_GET)
    .then((response) => response.json())
    .then((photo) => onSuccess(photo))
    .catch(() => showAlert(
      'Ошибка запроса с сервера. Попробуйте обновить страницу'
    ));
};

const sendData = (onSuccess, onFail, body) => {
  fetch(SERVER_URL_POST,
    {
      method: 'POST',
      body,
    }
  ).then ((response) => {
    if (response.ok) {
      onSuccess();
    }
    else {
      onFail('Не удалось отправить форму! Попробуйте ещё раз');
    }})
    .catch (() => {
      onFail('Не удалось отправить форму! Попробуйте ещё раз');
    });
};

export { getData, sendData };
