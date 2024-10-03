$(".hamburger").on("click", function () {
  $(".header").toggleClass("nav-open");
  $("body").toggleClass("nav-is-open");
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $(".navigation-background").addClass("nav-bg-out");
  } else {
    $(".navigation-background").removeClass("nav-bg-out");
  }
});
