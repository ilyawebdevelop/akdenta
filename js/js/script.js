// Burger
const btnMenu = document.querySelector('#toggle');
let btnMenuClose = document.querySelector('.btn-close');
const menu = document.querySelector('.header__nav');
const bodyEl = document.querySelector('body');

const menuLine1 = document.querySelector('.top-bun');
const menuLine2 = document.querySelector('.meat');
const menuLine3 = document.querySelector('.bottom-bun');

const toggleMenu = function () {
  menu.classList.toggle('open');
}
const toggleBurger = function () {
  btnMenu.classList.toggle('active');
}
const bodyOverflow = function () {
  bodyEl.classList.toggle('hidden');
}

const toggleMenuLine = function () {
  menuLine1.classList.toggle('active');
  menuLine2.classList.toggle('active');
  menuLine3.classList.toggle('active');
}

btnMenu?.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
  toggleBurger();
  bodyOverflow();
  toggleMenuLine();
});
btnMenuClose.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
  toggleBurger();
  bodyOverflow();
  toggleMenuLine();
});

// close menu in Landing page
$(document).on("click", ".header__nav-list li a", function (e) {
  $('.header__nav').removeClass('open');
  $('body').removeClass('hidden');
  // $('#nav-icon3').removeClass('open');
});

// Инициализация слайдера services-slider
const servicesSlider = document.querySelector('.services-slider');
var mySwiperServices = new Swiper(servicesSlider, {
  slidesPerView: 4,
  spaceBetween: 25,
  autoplay: {
    delay: 4000,
  },
  loop: true,
  speed: 600,
  allowTouchMove: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    576: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
  },
});

// Инициализация слайдера prices-slider
const pricesSlider = document.querySelector('.prices-slider');
var mySwiperPrices = new Swiper(pricesSlider, {
  slidesPerView: 2,
  spaceBetween: 25,
  autoplay: {
    delay: 4000,
  },
  loop: false,
  speed: 600,
  allowTouchMove: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
    },
  },
});

// Инициализация слайдера team-slider
const teamSlider = document.querySelector('.team-slider');
var mySwiperTeam = new Swiper(teamSlider, {
  slidesPerView: 2,
  spaceBetween: 25,
  speed: 600,
  allowTouchMove: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    992: {
      slidesPerView: 2,
    },
  },
});

// Инициализация слайдера reviews-slider
const reviewsSlider = document.querySelector('.reviews-slider');
var mySwiperReviews = new Swiper(reviewsSlider, {
  slidesPerView: 3,
  spaceBetween: 25,
  autoplay: {
    delay: 4000,
  },
  speed: 600,
  allowTouchMove: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: '.reviews-nav-wrapper .nav-arrow-right',
    prevEl: '.reviews-nav-wrapper .nav-arrow-left',
  },
});

// Инициализация слайдера gallery-slider
const gallerySlider = document.querySelector('.gallery-slider');
var mySwiperGallery = new Swiper(gallerySlider, {
  slidesPerView: 3,
  spaceBetween: 25,
  autoplay: {
    delay: 4000,
  },
  speed: 600,
  allowTouchMove: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

// Инициализация слайдера blogSlider
const blogSlider = document.querySelector('.blogSlider');
var mySwiperBlog = new Swiper(blogSlider, {
  slidesPerView: 3,
  spaceBetween: 25,
  autoplay: {
    delay: 4000,
  },
  speed: 600,
  allowTouchMove: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

