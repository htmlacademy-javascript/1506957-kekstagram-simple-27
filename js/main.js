import { renderPhotoCard } from './render.js';
import { closeControl, setUserFormSubmit } from './form.js';
import { getData } from './api.js';

getData((photo) => renderPhotoCard(photo));

setUserFormSubmit(closeControl);
