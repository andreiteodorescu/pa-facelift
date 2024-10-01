"use strict";

$(".hamburger").on("click", function () {
  $(".header").toggleClass("nav-open");
});
"use strict";

$(".search-console-bar-classic .search-console-bar-dropdown").last().addClass("search-console-bar-dropdown-last");
$(".js-search-shuffle").on("click", function () {
  var $searchConsoleWrapper = $(".search-console-wrapper");

  // Find the element that is currently hidden and the one that is currently visible
  var $currentlyHidden = $searchConsoleWrapper.find(".d-none");
  var $currentlyVisible = $currentlyHidden.siblings().not(".d-none");

  // Toggle the 'd-none' class
  $currentlyHidden.toggleClass("d-none");
  $currentlyVisible.toggleClass("d-none");

  // Remove 'search-bar-active' from any currently active element
  $searchConsoleWrapper.find(".search-bar-active").removeClass("search-bar-active");

  // Add 'search-bar-active' to the element that just became visible
  $currentlyHidden.removeClass("d-none").addClass("search-bar-active");
});