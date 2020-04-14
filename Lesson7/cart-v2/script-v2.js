"use strict";
let products = document.querySelectorAll(".product");
let basket = document.querySelector(".cart");
let itemsBox = basket.querySelector(".items-box");
let priceCount = document.querySelector(".price-count");
let buttons = document.querySelectorAll(".buy");
let purgeButton = basket.querySelector(".purge");

let pluses = [];
let minuses = [];

class CartItem {
  constructor(id, name, price) {
    this.id = +id;
    this.name = name;
    this.price = +price;
    this.quantity = 1;
  }
}

let cart = {
  amount: 0,
  cartItems: [],

  createNewItem(product) {
    let id = product.id;
    let name = product.querySelector("h3").innerHTML;
    let price = parseInt(product.querySelector(".price").innerHTML);
    cart.amount += price;
    let newItem = new CartItem(id, name, price);
    return newItem;
  },

  checkIfAdded(item) {
    for (let i = 0; i <= this.cartItems.length; i++) {
      if (this.cartItems[i] == undefined) {
        return false;
      }
      if (this.cartItems[i].id === item.id) {
        return true;
      }
    }
    return;
  },

  addQuantity(item) {
    this.cartItems.forEach((product) => {
      if (product.id == item.id) {
        product.quantity++;
      } else {
        return;
      }
    });
  },
  removeQuantity(item) {
    this.cartItems.forEach((product, index) => {
      if (product.id == item.id) {
        product.quantity--;
      } else {
        return;
      }
    });
  },

  addItem(newItem) {
    if (this.checkIfAdded(newItem)) {
      this.addQuantity(newItem);
    } else {
      this.cartItems.push(newItem);
    }
  },

  renderCart() {
    priceCount.innerHTML = this.amount;
    itemsBox.innerHTML = "";
    this.cartItems.forEach((item) => {
      let cartItemBox = document.createElement("div");
      cartItemBox.classList.add("cart-box");
      cartItemBox.innerHTML += `<div>${item.name} </div>`;
      cartItemBox.innerHTML += `<div class='cartitem-id'>Art. <span class = 'id'>${item.id}</span></div>`;
      cartItemBox.innerHTML += `<div>Цена ${item.price} руб.</div>`;
      cartItemBox.innerHTML += `<div>${item.quantity} шт.</div>`;
      cartItemBox.innerHTML += `<div class='pag'><div class='plus'>+</div><div class='minus'>-</div></div>`;
      itemsBox.insertAdjacentElement("afterbegin", cartItemBox);
    });
  },
};

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let basketItem = cart.createNewItem(button.parentNode);
    cart.addItem(basketItem);
    cart.renderCart();
    initPag(); //инициализирую кнопки товара
  });
});

purgeButton.addEventListener("click", function () {
  cart.cartItems = [];
  cart.amount = 0;
  priceCount.innerHTML = cart.amount;
  itemsBox.innerHTML = "";
});

function initPag() {
  //функция инициализирует кнопки + и -
  // и добавляет event listeners
  // с функциями добавления и убавления кол-ва товаров,
  // а также меняет общую сумму заказа
  pluses = document.querySelectorAll(".plus");
  minuses = document.querySelectorAll(".minus");
  pluses.forEach((plus) => {
    plus.addEventListener("click", function () {
      let singlePag = plus.parentNode;
      let currentId = +singlePag.parentNode.querySelector(".id").innerHTML;
      cart.cartItems.forEach((item) => {
        if (item.id == currentId) {
          item.quantity++;
          cart.amount += item.price;
          cart.renderCart();
          initPag();
        }
      });
    });
  });

  minuses.forEach((minus) => {
    minus.addEventListener("click", function () {
      let singlePag = minus.parentNode;
      let currentId = +singlePag.parentNode.querySelector(".id").innerHTML;
      cart.cartItems.forEach((item, index) => {
        if (item.id == currentId) {
          if (item.quantity == 1) {
            cart.cartItems.splice(index, 1);
          }
          item.quantity--;
          cart.amount -= item.price;
          cart.renderCart();
          initPag();
        }
      });
    });
  });
}
