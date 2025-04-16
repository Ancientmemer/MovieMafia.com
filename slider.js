const slider = document.getElementById('slider');
const leftBtn = document.querySelector('.arrow-left');
const rightBtn = document.querySelector('.arrow-right');
let scrollAmount = 0;

const scrollStep = 220; // adjust based on card size + margin

function scrollSlider(direction) {
  if (direction === 'right') {
    scrollAmount += scrollStep;
    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
      scrollAmount = 0; // loop to start
    }
  } else {
    scrollAmount -= scrollStep;
    if (scrollAmount < 0) {
      scrollAmount = slider.scrollWidth - slider.clientWidth;
    }
  }
  slider.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
}

rightBtn.addEventListener('click', () => scrollSlider('right'));
leftBtn.addEventListener('click', () => scrollSlider('left'));

// autoplay
setInterval(() => {
  scrollSlider('right');
}, 3000);
