const addsSlider = new Swiper(".js-adds-slider", {
  centerInsufficientSlides: true,
  breakpoints: {
    320: {
      enabled: false,
    },
    1200: {
      enabled: true,
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1374: {
      enabled: true,
      slidesPerView: 4,
      spaceBetween: 15,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
  },
});
