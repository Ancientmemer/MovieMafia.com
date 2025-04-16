const slider = document.getElementById("slider");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

let scrollPosition = 0;
const scrollAmount = slider.clientWidth;

rightArrow.addEventListener("click", () => {
  scrollPosition += scrollAmount;
  if (scrollPosition >= slider.scrollWidth) scrollPosition = 0;
  slider.scrollTo({ left: scrollPosition, behavior: "smooth" });
});

leftArrow.addEventListener("click", () => {
  scrollPosition -= scrollAmount;
  if (scrollPosition < 0) scrollPosition = slider.scrollWidth - scrollAmount;
  slider.scrollTo({ left: scrollPosition, behavior: "smooth" });
});

// Autoplay every 3s
setInterval(() => {
  scrollPosition += scrollAmount;
  if (scrollPosition >= slider.scrollWidth) scrollPosition = 0;
  slider.scrollTo({ left: scrollPosition, behavior: "smooth" });
}, 3000);
