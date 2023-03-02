const sidebar = document.getElementById("sidebar");
const cart = document.getElementById("cart");
const closeBtn = document.getElementById("close-btn");
const sideBox = document.getElementById("side-box");
const drawer = document.getElementById("drawer");

// add function
let openBar = function () {
  sidebar.style.right = "0px";
  sideBox.style.zIndex = "1";
  drawer.style.opacity = "1";
  drawer.style.zIndex = "15";
  document.body.classList = "open";
};
// remove function
let closeBar = function () {
  sidebar.style.right = "-500px";
  sideBox.style.zIndex = "20";
  drawer.style.opacity = "0";
  drawer.style.zIndex = "-1";
  document.body.classList.remove("open");
};
cart.addEventListener("click", openBar);
sideBox.addEventListener("click", openBar);
closeBtn.addEventListener("click", closeBar);
drawer.addEventListener("click", closeBar);
