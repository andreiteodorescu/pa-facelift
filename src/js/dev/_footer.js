const mediaQuery = window.matchMedia("(max-width: 767px)");

// Function to handle footer toggle
function handleFooterToggle(e) {
  if (e.matches) {
    console.log("Mobile view");
    // If the viewport is 767px or lower
    $(".js-footer-toggle").on("click", function () {
      $(this).next().slideToggle();
    });
  } else {
    $(".js-footer-toggle").off("click"); // Remove click event on smaller screens

    // Check the next element and remove inline 'display: none' if present
    $(".js-footer-toggle").each(function () {
      const $nextElement = $(this).next();
      if ($nextElement.css("display") === "none") {
        $nextElement.css("display", ""); // Remove the inline display style
      }
    });
  }
}

// Initial check
handleFooterToggle(mediaQuery);

// Listen for changes to the media query
mediaQuery.addEventListener("change", handleFooterToggle);
