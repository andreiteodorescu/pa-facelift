const createObserver = (threshold) => {
  return new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const intersecting = entry.isIntersecting;
        if (intersecting) {
          entry.target.classList.add("in-view");
        }
      }
    },
    { threshold: threshold }
  );
};

// Default threshold
let threshold = 0.7;

// Function to handle screen size changes
const handleResize = () => {
  if (window.innerWidth < 1200) {
    threshold = 0.2; // Smaller threshold for small screens
  } else {
    threshold = 0.6; // Default threshold for larger screens
  }
  // Create a new observer with the updated threshold
  observer.disconnect(); // Disconnect the old observer
  observer = createObserver(threshold);

  // Reobserve all targets
  observerTargets.forEach((observerTarget) => {
    observer.observe(observerTarget);
  });
};

// Debounce function to limit the rate of handleResize execution
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

// Initial observer creation
let observer = createObserver(threshold);

// Select all elements to be observed
const observerTargets = document.querySelectorAll(".observe");
observerTargets.forEach((observerTarget) => {
  observer.observe(observerTarget);
});

// Add debounced event listener for resize
window.addEventListener("resize", debounce(handleResize, 200));

// Initial call to set the correct threshold based on the current screen size
handleResize();
