import { toRenderPhotoCard } from './render.js';
import { toCloseControl, setUserFormSubmit } from './form.js';
import { getData } from './api.js';

getData((photo) => toRenderPhotoCard(photo));

setUserFormSubmit(toCloseControl);
