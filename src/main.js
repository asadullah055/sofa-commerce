const sidebar = document.getElementById("sidebar");
const cart = document.getElementById("cart");
const closeBtn = document.getElementById("close-btn");
const sideBox = document.getElementById("side-box");
const overlay = document.getElementById("overlay");
const btn = document.getElementById("btn");
const closeMenu = document.getElementById("closeBtn");

// add function side bar
let openBar = function () {
  sidebar.style.right = "0px";
  document.body.classList = "open";
  overlay.classList.add("overlay");
};
// remove function side bar
let closeBar = function () {
  sidebar.style.right = "-600px";
  document.body.classList.remove("open");
  overlay.classList.remove("overlay");
};
cart.addEventListener("click", openBar);
if (sideBox) {
  sideBox.addEventListener("click", openBar);
}
closeBtn.addEventListener("click", closeBar);
overlay.addEventListener("click", closeBar);
// ==================
btn.addEventListener("click", function () {
  document.getElementById("main-menu").style.left = "0";
  document.body.classList = "open";
  overlay.classList.add("overlay");
});
closeMenu.addEventListener("click", function () {
  document.getElementById("main-menu").style.left = "-500px";
  document.body.classList.remove("open");
  overlay.classList.remove("overlay");
});
overlay.addEventListener("click", function () {
  document.getElementById("main-menu").style.left = "-500px";
  document.body.classList.remove("open");
  overlay.classList.remove("overlay");
});
