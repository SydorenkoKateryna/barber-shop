const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelectorAll('.slider-container');
const lines = document.querySelectorAll('.line');
const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');

let index = 0;

const activeSlide = n => {
  for (slide of slides) {
    slide.classList.remove('active');
  }
  slides[n].classList.add('active');
};

const activeLine = n => {
  for (line of lines) {
    line.classList.remove('active');
  }
  lines[n].classList.add('active');
};

const prepareCurrentSlide = index => {
  activeSlide(index);
  activeLine(index);
};

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index += 1;
    prepareCurrentSlide(index);
  }
};

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
  } else {
    index -= 1;
    prepareCurrentSlide(index);
  }
};

lines.forEach((item, indexLine) => {
  item.addEventListener('click', () => {
    index = indexLine;
    prepareCurrentSlide(index);
    clearInterval(interval);
  });
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

const interval = setInterval(nextSlide, 2500);