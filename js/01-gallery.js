import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");

const img = galleryItems
  .map(function (img) {
    const { description: alt, original: modalImg, preview: galleryImg } = img;
    // console.log(alt);
    return `<div class="gallery__item">
  <a class="gallery__link" href="${modalImg}">
    <img
      class="gallery__image"
      src="${galleryImg}"
      data-source="${modalImg}"
      alt="${alt}"
    />
 </a>
</div>`;
  })
  .join("");

gallery.insertAdjacentHTML("afterbegin", img);

gallery.addEventListener("click", clickImg);

function clickImg(e) {
    e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
    console.log(e.target.dataset.source);
    const src = e.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${src}" width="800" height="600">
`);

  instance.show();
  gallery.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
      gallery.removeEventListener("keyup", e);
    }
  });
}




// console.dir(imgClass.target);
