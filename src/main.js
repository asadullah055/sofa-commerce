const sidebar = document.getElementById("sidebar");
const cart = document.getElementById("cart");
const closeBtn = document.getElementById("close-btn");
const sideBox = document.getElementById("side-box");
const overlay = document.getElementById("overlay");
const btn = document.getElementById("btn");
const closeMenu = document.getElementById("closeBtn");
const shop = document.getElementById("products-wrapper");
// =========add function ==========
const add = () => {
  document.body.classList.add = "open";
  overlay.classList.add("overlay");
};
// =========close function ==========
const close = () => {
  document.body.classList.remove("open");
  overlay.classList.remove("overlay");
};
// =========open side bar function ==========
const openBar = () => {
  sidebar.style.right = "0px";
  add();
};

// =========close side bar function ==========
const closeBar = () => {
  sidebar.style.right = "-1300px";
  close();
};
// =========close menu function ==========
const menuClose = () => {
  document.getElementById("main-menu").style.left = "-500px";
  close();
};

// ===event Listener
btn.addEventListener("click", function () {
  document.getElementById("main-menu").style.left = "0";
  add();
});
cart.addEventListener("click", openBar);
if (sideBox) {
  sideBox.addEventListener("click", openBar);
}
closeBtn.addEventListener("click", closeBar);
overlay.addEventListener("click", closeBar);

closeMenu.addEventListener("click", menuClose);
overlay.addEventListener("click", menuClose);

let generateCart = () => {
  shop.innerHTML = sofaData
    .map((x) => {
      let { sku, name, price, img, id } = x;
      return `
    <div id='card-${sku}' class="card">
    <img height="200" class="card-img p-5" src=${img} alt="" />
    <div class="cart-body p-10">
      <p class="card-title p-5">${name}</p>
      <div class="d-flex card-price-button">
        <h3>$${price}</h3>
        <div class="bg-green increase-decrease-button">
          <i onclick='decrement()' class="fa-solid text-white fa-minus"></i>
          <div id=${sku} class="quantity text-white">01</div>
          <i onclick="increment(${sku})" class="fa-solid text-white fa-plus"></i>
        </div>
      </div>
    </div>
  </div>
    `;
    })
    .join("");
};
generateCart();

let increment = (sku) => {
  console.log(sku);
};
let decrement = (sku) => {
  console.log(sku);
};
