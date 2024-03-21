// Initialize Swiper
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 3, // Number of slides per view
  spaceBetween: 30, // Space between slides
  loop: true, // Enable loop mode
  pagination: {
    el: ".swiper-pagination", // Pagination container
    clickable: true, // Enable pagination clickabl
  },
});

// Add click event listener to hamburger icon
var navMenu = document.querySelector(".nav-list");
var hamburger = document.querySelector(
  ".nav-hamburger"
);
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
