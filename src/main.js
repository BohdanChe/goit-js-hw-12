import './css/styles.css';
import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const input = form.elements['search-text'];

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = input.value.trim();
  if (!query) {
    iziToast.warning({ message: 'Enter a search term!', position: 'topRight' });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);

    if (data.hits.length === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query.',
        position: 'topRight',
      });
    } else {
      createGallery(data.hits);
    }
  } catch (error) {
    iziToast.error({ message: 'Something went wrong!', position: 'topRight' });
  } finally {
    hideLoader();
    form.reset();

  }
});
