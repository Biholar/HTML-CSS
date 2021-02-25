import galleryListItem from '../js/gallery-items.js';

const refs = {
  galleryContainer: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  lightboxOverlay: document.querySelector('.lightbox__overlay'),
  btnCLoseModal: document.querySelector('[data-action="close-lightbox"]'),
  imgModal: document.querySelector('.lightbox__image'),
};

const makeGalleryListMarkup = imageItem => {
  const { preview, description, url } = imageItem;

  return `
  <li class="gallery__item ">
  
  <a
    class="gallery__link"
    href="${url}"
  >
  
  <p class="desc_hide">
  ${description}
</p>


    <img
      class="gallery__image"
      src="${preview}"
      
    />
    
  </a>
</li> 
  `;
};

const galleryListMarkup = galleryListItem.map(makeGalleryListMarkup).join('');
refs.galleryContainer.innerHTML += galleryListMarkup;
