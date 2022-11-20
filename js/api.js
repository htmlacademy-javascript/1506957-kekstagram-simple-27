import {serverUrlGet} from './data.js';
import { serverUrlPost } from './data.js';
import {showAlert} from './util.js';

const getData = (onSuccess) => {
  fetch(serverUrlGet)
    .then((response) => response.json())
    .then((photo) => onSuccess(photo)) //304 error ???
    .catch(() => showAlert(
      'Ошибка запроса с сервера. Попробуйте обновить страницу'
    ));
};

const sendData = (onSuccess, onFail, body) => {
  fetch(serverUrlPost,
    {
      method: 'POST',
      body,
      // headers: {
      // 'Content-Type': 'multipart/form-data',             ???????????????
      // }
    }
  ).then ((response) => {
    if (response.ok) {
      onSuccess();
    }
    else {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    }})
    .catch (() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {getData, sendData};
