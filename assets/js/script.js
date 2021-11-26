const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
