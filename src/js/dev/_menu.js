$(".hamburger").on("click", function () {
  $(".header").toggleClass("nav-open");
  $("body").toggleClass("nav-is-open");
});

// Sticky menu when scrolling
const mainHeader = $(".header");
const headerScrollThreshold = 0;
$(window).on("scroll", function () {
  const scroll = $(window).scrollTop();

  if (scroll >= headerScrollThreshold) {
    mainHeader.addClass("header-sticky");
    $("body").addClass("header-sticky-body");
  } else {
    mainHeader.removeClass("header-sticky");
    $("body").removeClass("header-sticky-body");
  }
});
