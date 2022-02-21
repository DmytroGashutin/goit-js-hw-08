// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";



console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const imageMarkup = createImagesMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imageMarkup);


console.log(createImagesMarkup(galleryItems));

function createImagesMarkup(items) {
  
    return items.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__item" href="${original}">
                <img 
                class="gallery__image"
                src="${preview}" 
                alt="${description}" />
            </a>
        </div>
        `;
    }).join('');

}




let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});