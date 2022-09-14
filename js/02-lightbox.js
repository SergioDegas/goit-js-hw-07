import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector(".gallery");

const img = galleryItems
  .map(function (img) {
    const { description: alt, original: modalImg, preview: galleryImg } = img;
    // console.log(alt);
    return `<li class="gallery__item">
  <a class="gallery__link" href="${modalImg}">
    <img
      class="gallery__image"
      src="${galleryImg}"
      data-source="${modalImg}"
      alt="${alt}"
    />
 </a>
</li>`;;
  })
  .join("");


gallery.insertAdjacentHTML("afterbegin", img);
console.log(gallery);


let galleryLightbox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});