$(".filter-trigger").on("click", function () {
  $(".filters-wrapper").addClass("filters-wrapper-open");
  $("body").addClass("filter-is-open");
});

// Close filters when js-filter-close button is clicked
$(".js-filter-close").on("click", function () {
  $(".filters-wrapper").removeClass("filters-wrapper-open");
  $("body").removeClass("filter-is-open");
});

$(document).on("mouseleave", ".select2-results__option", function () {
  // Remove the highlighted class when the mouse leaves the list item
  $(this).removeClass("select2-results__option--highlighted");
});

// Close filters when clicking outside the filters-wrapper
// Function to handle the filter close logic
function handleClickOutsideFilters() {
  $(document).on("click", function (event) {
    if (!$(event.target).closest(".filters-wrapper, .filter-trigger").length) {
      $(".filters-wrapper").removeClass("filters-wrapper-open");
      $("body").removeClass("filter-is-open");
    }
  });
}

// Function to remove the click event listener
function removeClickOutsideFilters() {
  $(document).off("click");
}

// Check if the window width is between 768px and 1280px
const mediaQuery = window.matchMedia(
  "(min-width: 768px) and (max-width: 1280px)"
);

// Function to apply or remove the event listener based on screen size
function checkScreenWidth(e) {
  if (e.matches) {
    // Attach event listener for clicks outside the filters-wrapper
    handleClickOutsideFilters();
  } else {
    // Remove the event listener if it's outside the desired width range
    removeClickOutsideFilters();
  }
}

// Initial check on page load
checkScreenWidth(mediaQuery);

// Listen for changes in screen size
mediaQuery.addEventListener("change", checkScreenWidth);
