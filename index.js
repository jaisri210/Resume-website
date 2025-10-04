// Select elements
const burger = document.getElementById("burgermenu");
const navMenu = document.querySelector(".firstnav ul");

// Toggle the menu on click
burger.addEventListener("click", () => {
  navMenu.style.display = "block";
});
