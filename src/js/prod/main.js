"use strict";

var mediaQuery = window.matchMedia("(max-width: 767px)");

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
      var $nextElement = $(this).next();
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
"use strict";

var _this = void 0;
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var createObserver = function createObserver(threshold) {
  return new IntersectionObserver(function (entries) {
    var _iterator = _createForOfIteratorHelper(entries),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var entry = _step.value;
        var intersecting = entry.isIntersecting;
        if (intersecting) {
          entry.target.classList.add("in-view");
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }, {
    threshold: threshold
  });
};

// Default threshold
var threshold = 0.7;

// Function to handle screen size changes
var handleResize = function handleResize() {
  if (window.innerWidth < 1200) {
    threshold = 0.2; // Smaller threshold for small screens
  } else {
    threshold = 0.6; // Default threshold for larger screens
  }
  // Create a new observer with the updated threshold
  observer.disconnect(); // Disconnect the old observer
  observer = createObserver(threshold);

  // Reobserve all targets
  observerTargets.forEach(function (observerTarget) {
    observer.observe(observerTarget);
  });
};

// Debounce function to limit the rate of handleResize execution
var debounce = function debounce(func, wait) {
  var timeout;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      return func.apply(_this, args);
    }, wait);
  };
};

// Initial observer creation
var observer = createObserver(threshold);

// Select all elements to be observed
var observerTargets = document.querySelectorAll(".observe");
observerTargets.forEach(function (observerTarget) {
  observer.observe(observerTarget);
});

// Add debounced event listener for resize
window.addEventListener("resize", debounce(handleResize, 200));

// Initial call to set the correct threshold based on the current screen size
handleResize();
"use strict";

$(".hamburger").on("click", function () {
  $(".header").toggleClass("nav-open");
  $("body").toggleClass("nav-is-open");
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
"use strict";

function initSwiper(sliderClass, nextElClass, prevElClass) {
  new Swiper(sliderClass, {
    centerInsufficientSlides: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
        navigation: {
          nextEl: nextElClass,
          prevEl: prevElClass
        }
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 15,
        navigation: {
          nextEl: nextElClass,
          prevEl: prevElClass
        }
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
        navigation: {
          nextEl: nextElClass,
          prevEl: prevElClass
        }
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 15,
        navigation: {
          nextEl: nextElClass,
          prevEl: prevElClass
        }
      }
    }
  });
}

// Initialize sliders using the reusable function
initSwiper(".js-adds-slider-1", ".slider-1-next", ".slider-1-prev");
initSwiper(".js-adds-slider-2", ".slider-2-next", ".slider-2-prev");