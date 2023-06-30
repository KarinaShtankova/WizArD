// PANOLENS
const panoramaImage = new PANOLENS.ImagePanorama(
  "images/panorama/panorama-1.jpg"
);
const panoramaContainer = document.querySelector(".panorama-container");

const viewer = new PANOLENS.Viewer({
  container: panoramaContainer,
  autoRotate: true,
  autoRotateSpeed: 0.5,
});

viewer.add(panoramaImage);

// SIEMA

const slider = document.querySelector(".portfolio__list");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const mySiema = new Siema({
  selector: slider,
  duration: 250,
  easing: "ease-out",
  perPage: 4,
  loop: true,
});

function onNextClick() {
  mySiema.next();
}

function onPrevClick() {
  mySiema.prev();
}

next.addEventListener("click", onNextClick);
prev.addEventListener("click", onPrevClick);
