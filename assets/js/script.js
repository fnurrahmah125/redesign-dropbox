// ------------ Landing Page ------------ //
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// ------------ Dashboard Page ------------ //

// middle column
const menuToggleDb = document.querySelector(".search-box div .menu-toggle");
const colLeft = document.querySelector(".col-left");
const background = document.querySelector(".bg-transparent");

menuToggleDb.addEventListener("click", function () {
  colLeft.style.transform = "translateX(0)";
  background.style.background = "rgba(0, 0, 0, 0.5)";
  background.style.zIndex = "1";
});

background.addEventListener("click", function () {
  colLeft.style.transform = "translateX(-100%)";
  background.style.background = "rgba(0, 0, 0, 0)";
  background.style.zIndex = "-1";
});

// mobile version
const addIcon = document.querySelector(".add-icon");
const background2 = document.querySelector(".bg-transparent-2");
const addContainer = document.querySelector(".add-container");

addIcon.addEventListener("click", function () {
  background2.style.background = "rgba(0, 0, 0, 0.5)";
  background2.style.zIndex = "1";

  addContainer.style.transform = "translateY(0)";
  addContainer.style.zIndex = "2";
});

background2.addEventListener("click", function () {
  background2.style.background = "rgba(0, 0, 0, 0)";
  background2.style.zIndex = "-1";

  addContainer.style.transform = "translateY(300%)";
  addContainer.style.zIndex = "-1";
});
