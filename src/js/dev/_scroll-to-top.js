$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $("#scrollToTopBtn").fadeIn();
  } else {
    $("#scrollToTopBtn").fadeOut();
  }
});

// Scroll to top when the button is clicked
$("#scrollToTopBtn").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "fast");
  return false;
});
