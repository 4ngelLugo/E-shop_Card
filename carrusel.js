const img = document.querySelectorAll("#img");
const bubbles = document.querySelectorAll(".bubble");
const scrollRight = document.querySelector(".scrollR");
const scrollLeft = document.querySelector(".scrollL");
var imagen = 0;

function carrusel() {
  for (i = 0; i < 4; i++) {
    if (i != imagen) {
      img[i].hidden = true;
      bubbles[i].classList.remove("active");
    } else {
      img[i].hidden = false;
      bubbles[i].classList.add("active");
    }
  };
}
carrusel();

scrollLeft.addEventListener("click", () => {
  if (imagen > 0) {
    imagen--;
    carrusel();
  }
});

scrollRight.addEventListener("click", () => {
  if (imagen < 3) {
    imagen++;
    carrusel();
  }
});