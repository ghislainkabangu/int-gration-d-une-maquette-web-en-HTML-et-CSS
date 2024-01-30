/** @format */

let closeMenu = document.querySelector(".close_menu");
let openMenu = document.querySelector(".open_menu");
let navigation_mobile = document.querySelector(".navigation_mobile");

openMenu.addEventListener("click", () => {
  navigation_mobile.classList.add("navigation_mobile_effet_js");
});
closeMenu.addEventListener("click", () => {
  navigation_mobile.classList.remove("navigation_mobile_effet_js");
});
