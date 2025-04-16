const track = document.getElementById("sliderTrack");
const container = document.getElementById("sliderContainer");
const dotsContainer = document.getElementById("paginationDots");
const cards = track.children;
let position = 0;
const cardWidth = 220;
const totalCards = cards.length;

// Clone first few cards to create the loop effect
for (let i = 0; i < 2; i++) {
  const clone = cards[i].cloneNode(true);
  track.appendChild(clone);
}

let currentIndex = 0;

// Create pagination dots
for (let i = 0; i < totalCards; i++) {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => {
    scrollToCard(i);
  });
  dotsContainer.appendChild(dot);
}
updateDots();

function scrollSlider(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalCards - 1;
    position = currentIndex * cardWidth;
    track.style.transition = "none";
    track.style.transform = `translateX(-${position}px)`;
    setTimeout(() => {
      track.style.transition = "transform 0.5s ease-in-out";
      scrollSlider(1);
    }, 20);
    return;
  }

  if (currentIndex >= totalCards) {
    currentIndex = 0;
    position = (totalCards) * cardWidth;
    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(-${position}px)`;
    setTimeout(() => {
      track.style.transition = "none";
      track.style.transform = `translateX(0px)`;
    }, 500);
    updateDots();
    return;
  }

  position = currentIndex * cardWidth;
  track.style.transition = "transform 0.5s ease-in-out";
  track.style.transform = `translateX(-${position}px)`;
  updateDots();
}

function scrollToCard(index) {
  currentIndex = index;
  scrollSlider(0);
}

function updateDots() {
  [...dotsContainer.children].forEach(dot => dot.classList.remove("active"));
  if (dotsContainer.children[currentIndex]) {
    dotsContainer.children[currentIndex].classList.add("active");
  }
}

// Auto-slide loop
let autoSlide = setInterval(() => scrollSlider(1), 4000);

// Pause on hover
track.addEventListener("mouseenter", () => clearInterval(autoSlide));
track.addEventListener("mouseleave", () => {
  autoSlide = setInterval(() => scrollSlider(1), 4000);
});

// Swipe Support
let startX = 0;
track.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});
track.addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) scrollSlider(1);
  else if (endX - startX > 50) scrollSlider(-1);
});
