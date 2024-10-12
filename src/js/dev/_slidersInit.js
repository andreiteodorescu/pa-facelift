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

const thumbsBigSlider = document.querySelectorAll(".js-thumbs-big");
const thumbsSmallSlider = document.querySelectorAll(".js-thumbs-small");

for (let i = 0; i < thumbsBigSlider.length; i++) {
  thumbsBigSlider[i].classList.add("js-thumbs-big-" + i);
  thumbsSmallSlider[i].classList.add("js-thumbs-small-" + i);

  const hotelThumbs = new Swiper(".js-thumbs-small-" + i, {
    //direction: "vertical",
    spaceBetween: 5,
    slidesPerView: 4,
    freeMode: true,
    keyboard: {
      enabled: true,
    },
    watchSlidesProgress: true,
    breakpoints: {
      320: {
        direction: "horizontal",
      },
      600: {
        direction: "vertical",
      },
    },
  });

  const hotelThumbsBig = new Swiper(".js-thumbs-big-" + i, {
    spaceBetween: 10,
    keyboard: {
      enabled: true,
    },
    thumbs: {
      swiper: hotelThumbs,
    },
  });
}
