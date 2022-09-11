// Burger menu
const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.body;

if (burger && menu) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
    body.classList.toggle('_lock');
  });
}

// Filter dropdown
const filter = document.querySelector('.filter');

if (filter) {
  const items = filter.querySelectorAll('.block-filter');

  items.forEach(item => {
    item.addEventListener('click', event => {
      item.querySelector('.block-filter__dropdown').classList.toggle('_active');
      item.querySelector('.block-filter__icon').classList.toggle('_active');

      if (event.target.classList.contains('block-filter__item'))
        item.querySelector('.block-filter__value').textContent =
          event.target.textContent;
    });
  });
}

// Popular slider
const popularSlider = new Swiper('.popular-slider', {
  slidesPerView: 1,
  spaceBetween: 20,

  navigation: {
    nextEl: '.popular-slider-next',
    prevEl: '.popular-slider-prev',
  },

  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.popular-slider',
  },

  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    660: {
      slidesPerView: 2,
    },
  },
});

// Reviews slider
const reviewsSlider = new Swiper('.slider-reviews', {
  slidesPerView: 1,
  spaceBetween: 20,
  autoHeight: true,

  navigation: {
    nextEl: '.slider-reviews-next',
    prevEl: '.slider-reviews-prev',
  },
});

// Gallery
const galleryItems = document.querySelectorAll('.gallery__item');

if (galleryItems.length > 0) {
  galleryItems.forEach(item => {
    new Swiper(item, {
      slidesPerView: 1,
      autoplay: {
        delay: 5000,
      },
      effect: 'fade',
    });
  });
}

// Revealing elements on scroll
const allRevealSections = document.querySelectorAll('.section-reveal');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section-hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allRevealSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section-hidden');
});
