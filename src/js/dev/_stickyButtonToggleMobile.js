// Check for screen resolution under 768px using matchMedia
const mediaQuery = window.matchMedia("(max-width: 767px)");

function handleScroll() {
  if (mediaQuery.matches) {
    // Get the threshold button element and its offset from the top
    const thresholdElement = $(".btn-sticky-mobile-threshold");
    const thresholdOffset = thresholdElement.offset().top + 50;

    // Get the scroll position
    const scrollPosition = $(window).scrollTop();

    // Check if the scroll position is past the threshold element
    if (scrollPosition >= thresholdOffset) {
      // Make the sticky mobile button visible
      $(".btn-sticky-mobile").removeClass("d-none");
    } else {
      // Hide the sticky mobile button
      $(".btn-sticky-mobile").addClass("d-none");
    }
  }
}

// Run the function initially and on scroll
$(window).on("scroll", handleScroll);

// Also check if the screen resolution changes (optional)
mediaQuery.addEventListener("change", handleScroll);
