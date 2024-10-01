"use strict";

// const hamburger = document.querySelector(".hamburger");
// const header = document.querySelector(".header");
// //const navLinks = document.querySelector(".nav-links-main");
// const links = document.querySelectorAll(".nav-links-main li");

// hamburger.addEventListener("click", () => {
//   //Animate Links
//   //navLinks.classList.toggle("open");
//   header.classList.toggle("open");
//   links.forEach((link) => {
//     link.classList.toggle("fade");
//   });

//   //Hamburger Animation
//   hamburger.classList.toggle("toggle");
// });

$(".hamburger").on("click", function () {
  $(".header").toggleClass("nav-open");
  console.log("clicked");
});