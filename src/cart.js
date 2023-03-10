let basket = JSON.parse(localStorage.getItem("data")) || [];
const sidebar = document.getElementById("sidebar");
const cart = document.getElementById("cart");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");
const btn = document.getElementById("btn");
const closeMenu = document.getElementById("closeBtn");
const cartItemsSum = document.getElementById("cart-items-sum");
const processAmount = document.getElementById("process-amount");
const shoppingCart = document.getElementById("shopping-cart");
const summaryCart = document.getElementById("summary-cart");
const subtotal = document.getElementById("subtotal");
const empty = document.getElementById("empty");
// =========add function ==========
const add = () => {
  document.body.classList.add("open");
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

closeBtn.addEventListener("click", closeBar);
overlay.addEventListener("click", closeBar);

closeMenu.addEventListener("click", menuClose);
overlay.addEventListener("click", menuClose);

let calculate = () => {
  let itemAmount = document.getElementById("itemAmount");
  let cartItems = document.getElementById("cart-items");
  let sum = basket.map((x) => x.item).reduce((a, b) => a + b, 0);
  if (cartItems) {
    cartItems.innerHTML = sum < 10 ? "0" + sum : sum;
  }
  itemAmount.innerHTML = sum < 10 ? "0" + sum : sum;
};
calculate();
let generateCartItem = () => {
  if (basket.length !== 0) {
    summaryCart.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = sofaData.find((y) => y.id === id) || [];
        let { name, price, img } = search;
        return `  
        <div class="cart-items">
        <img width="100" height="100" src=${img} alt="" />
        <div class="details">
          <h3 class="cart-tile">${name}</h3>
          <p>Item price $${price}</p>
          <div class="numbers">
            <h3>$ ${item * price}</h3>
            <div class="increase-decrease-button">
              <i onclick='decrement(${id})' class="fa-solid fa-minus"></i>
              <div id=${id} class="quantity">${
          item === undefined ? 0 : item
        }</div>
              <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
            </div>
            <i onclick="removeItem(${id})" class="fa-solid fa-trash-can"></i>
          </div>
        </div>
      </div>
        `;
      })
      .join("");
  } else {
    summaryCart.innerHTML = ``;
    empty.innerHTML = `<h2> cart is empty</h2>`;
  }
};
generateCartItem();
let generate = () => {
  if (basket.length !== 0) {
    shoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = sofaData.find((y) => y.id === id) || [];
        let { name, price, img } = search;
        return `  
          <div class="cart-items">
          <img width="100" height="100" src=${img} alt="" />
          <div class="details">
            <h3 class="cart-tile">${name}</h3>
            <p>Item price $${price}</p>
            <div class="numbers">
              <h3>$ ${item * price}</h3>
              <div class="increase-decrease-button">
                <i onclick='decrement(${id})' class="fa-solid fa-minus"></i>
                <div id=${id} class="quantity">${
          item === undefined ? 0 : item
        }</div>
                <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
              </div>
              <i onclick="removeItem(${id})" class="fa-solid fa-trash-can"></i>
            </div>
          </div>
        </div>
          `;
      })
      .join("");
  } else {
    shoppingCart.innerHTML = ``;
  }
};
generate();
let increment = (id) => {
  let selectItem = id;
  let search = basket.find((x) => x.id === selectItem.id);
  if (search === undefined) {
    basket.push({
      id: selectItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  update(selectItem.id);
  totalAmount();
  generateCartItem();
  localStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (id) => {
  let selectItem = id;
  let search = basket.find((x) => x.id === selectItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectItem.id);
  totalAmount();
  basket = basket.filter((x) => x.item !== 0);
  generateCartItem();
  localStorage.setItem("data", JSON.stringify(basket));
};
let update = (id) => {
  let search = basket.find((x) => x.id === id) || [];
  document.getElementById(id).innerHTML = search.item;
  calculate();
  totalAmount();
};
let totalAmount = () => {
  let amount = basket
    .map((x) => {
      let search = sofaData.find((a) => a.id === x.id) || [];
      // console.log(search);
      return x.item * search.price;
    })
    .reduce((a, b) => a + b, 0);

  subtotal.innerHTML = amount;
};

let removeItem = (id) => {
  let selectedItem = id;
  //   console.log(selectedItem.id);
  basket = basket.filter((x) => x.id !== selectedItem.id);
  generateCartItem();
  totalAmount();
  calculate();
  localStorage.setItem("data", JSON.stringify(basket));
};
totalAmount();

const division1 = document.getElementById("division1");
const district1 = document.getElementById("district1");
const upazila1 = document.getElementById("upazila1");
const union1 = document.getElementById("union1");
const union2 = document.getElementById("union");

division.forEach((district) => {
  division1.innerHTML += `<option id=${district.id} value=${district.name}>${district.name}</option>`;
});
// =====load district=====
division1.addEventListener("change", function (e) {
  const divisionId = this.options[this.selectedIndex].id;
  district1.innerHTML = `<option value="">-- Select District--</option>`;
  upazila1.innerHTML = `<option value="">-- Select Upazila--</option>`;
  union1.innerHTML = `<option value="">-- Select Union --</option>`;
  district
    .filter((subdistrict) => subdistrict.division_id === divisionId)
    .forEach((subdistrict) => {
      district1.innerHTML += `<option id=${subdistrict.id} value=${subdistrict.name}>${subdistrict.name}</option>`;
    });
});
// =====load upazila=====
district1.addEventListener("change", function (e) {
  const districtId = this.options[this.selectedIndex].id;

  upazila1.innerHTML = `<option value="">-- Select Upazila--</option>`;
  union1.innerHTML = `<option value="">-- Select Union --</option>`;
  upazila
    .filter((upazila) => upazila.district_id === districtId)
    .forEach((upazila) => {
      upazila1.innerHTML += `<option id=${upazila.id} value=${upazila.name}>${upazila.name}</option>`;
    });
});
// =====load union=====
upazila1.addEventListener("change", function (e) {
  const upazilaId = this.options[this.selectedIndex].id;
  union1.innerHTML = `<option value="">-- Select Union --</option>`;
  union
    .filter((union) => union.upazilla_id === upazilaId)
    .forEach((union) => {
      union1.innerHTML += `<option id=${union.id} value=${union.name}>${union.name}</option>`;
    });
});
let checkbox = document.getElementById("check");
checkbox.addEventListener("change", (e) => {
  if (e.target.checked) {
    union2.innerHTML = `<option id=${union1.id} value=${union1.value}>${union1.value}</option>`;
  } else {
    union2.innerHTML = `<option value="">-- Select Union --</option>`;
  }
});
