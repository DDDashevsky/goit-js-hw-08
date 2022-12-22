// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const container = document.querySelector('.gallery');
const galleryMarkup = createGallery();
container.insertAdjacentHTML('beforeend', galleryMarkup);

function createGallery() {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
   <a class="gallery__link" href="${original}">
     <img
     class="gallery__image"
     src="${preview}"
     alt="${description}"
     />
     </a>
     `;
    })
    .join('');
}

// container.addEventListener('click', openImage);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  animationSpeed: 150,
});

gallery.on('show.simplelightbox', function () {
  evt.preventDefault();
  console.log(evt);
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  evt.target.open;
});
