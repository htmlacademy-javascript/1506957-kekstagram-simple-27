import {toRenderPhotoCard} from './render.js';
import {toCloseControl, setUserFormSubmit} from './form.js';
import { getData } from './api.js';
import './effects.js';
// import {serverUrlGet} from './data.js';
// import {showAlert} from './util.js';

getData((photo) => toRenderPhotoCard(photo)); //304 error ???

setUserFormSubmit(toCloseControl);
