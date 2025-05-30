import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = new SimpleLightbox('.gallery a');

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

export function createGallery(images) {
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <li class="gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" />
        </a>
        <div class="info">
          <p>Likes <span>${likes}</span></p>
          <p>Views <span>${views}</span></p>
          <p>Comments <span>${comments}</span></p>
          <p>Downloads <span>${downloads}</span></p>
        </div>
      </li>
    `
    )
    .join('');
  
    gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
}



export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}
