const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let index = 0;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");
  document.querySelector(".carousel-container").style.transform = `translateX(${-i * 100}%)`;
}

prev.addEventListener("click", () => {
  index = (index > 0) ? index - 1 : slides.length - 1;
  showSlide(index);
});

next.addEventListener("click", () => {
  index = (index < slides.length - 1) ? index + 1 : 0;
  showSlide(index);
});

setInterval(() => {
  index = (index < slides.length - 1) ? index + 1 : 0;
  showSlide(index);
}, 5000);
