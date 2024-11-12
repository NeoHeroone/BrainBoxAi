setTimeout(function () {
  document.getElementById("splash").style.display = "none";
  document.getElementById("splash2").style.display = "block";
}, 2000);

setTimeout(function () {
  document.getElementById("splash2").style.display = "none";
  document.getElementById("splash3").style.display = "block";
}, 4000);

setTimeout(function () {
  document.getElementById("splash2").style.display = "none";
  document.getElementsByClassName("carousel_items").style.display = "block";
}, 6000);

const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
  updateDots(index);
}

function createDots() {
  slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
      currentSlide = i;
      showSlide(currentSlide);
    });
    dotsContainer.appendChild(dot);
  });
}

function updateDots(index) {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    dot.classList.remove("active");
    if (i === index) {
      dot.classList.add("active");
    }
  });
}

createDots();
showSlide(currentSlide);

//      
//   currentSlide = (currentSlide + 1) % slides.length;
//   showSlide(currentSlide);
// });

document.getElementById("next-btn").addEventListener("click", () => {
//   currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//   showSlide(currentSlide);
console.log("test");

});
