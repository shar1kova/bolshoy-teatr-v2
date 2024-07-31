import mobileNav from "./modules/mobile-nav.js";
mobileNav();

new Swiper(".production-slider", {
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  autoHeight: true,
  slidesPerView: 1.1,

  breakpoints: {
    // when window width is >= 320px
    992: {
      slidesPerView: 4,
    },

    576: {
      slidesPerView: 1.5,
    },
  },
});

new Swiper(".header-slider", {
  navigation: {
    nextEl: ".header-slider__next",
    prevEl: ".header-slider__prev",
  },
});
