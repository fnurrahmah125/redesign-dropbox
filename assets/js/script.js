// ------------ Menu Toggle ------------ //
const menuToggleDb = document.querySelector(".search-box  .menu-toggle");
const colLeft = document.querySelector(".col-left");
const bgLeft = document.querySelector(".bg-left");

menuToggleDb.addEventListener("click", function () {
  colLeft.classList.add("col-left-show");
  bgLeft.classList.add("bg-show");
});

bgLeft.addEventListener("click", function () {
  colLeft.classList.remove("col-left-show");
  bgLeft.classList.remove("bg-show");
});

// ------------ Add Button ------------ //
const addIcon = document.querySelector(".add-icon");
const bgDown = document.querySelector(".bg-down");
const addContainer = document.querySelector(".add-container");

addIcon.addEventListener("click", function () {
  bgDown.classList.add("bg-show");
  addContainer.classList.add("add-container-show");
});

bgDown.addEventListener("click", function () {
  bgDown.classList.remove("bg-show");
  addContainer.classList.remove("add-container-show");
});
