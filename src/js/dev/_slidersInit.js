function initSwiper(sliderClass, nextElClass, prevElClass) {
  new Swiper(sliderClass, {
    centerInsufficientSlides: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
        navigation: {
          nextEl: nextElClass,
          prevEl: prevElClass,
        },
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 15,
        navigation: {
          nextEl: nextElClass,
          prevEl: prevElClass,
        },
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
        navigation: {
          nextEl: nextElClass,
          prevEl: prevElClass,
        },
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 15,
        navigation: {
          nextEl: nextElClass,
          prevEl: prevElClass,
        },
      },
    },
  });
}

// Initialize sliders using the reusable function
initSwiper(".js-adds-slider-1", ".slider-1-next", ".slider-1-prev");
initSwiper(".js-adds-slider-2", ".slider-2-next", ".slider-2-prev");
