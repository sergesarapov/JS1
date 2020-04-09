"use strict";
let products = document.querySelectorAll(".product");
let basket = document.querySelector(".cart");
let priceCount = document.querySelector(".price-count");

let amount = 0; //Счетчик суммы заказа
let cartItems = []; //массив для объектов товаров в корзине

class CartItem {
  constructor(id, name, price) {
    this.id = +id;
    this.name = name;
    this.price = +price;
  }
}
// Внутри цикла проходим по каждому продукту
//  и в случае нажатия на кнопку, прибавляем стоимость,
// создаем новый объект товара в корзине и записываем его в массив
// вызываем функцию отрисовки товара в корзине
products.forEach((product) => {
  let id = product.id;
  let name = product.querySelector("h3").innerHTML;
  let price = parseInt(product.querySelector(".price").innerHTML);
  let button = product.querySelector("button");
  button.addEventListener("click", function () {
    amount += price;
    let item = new CartItem(id, name, price);
    cartItems.push(item);
    displayCart(item);
  });
});
// Эта функция отрисовывает сумму заказа и товары в корзине
function displayCart(arg) {
  priceCount.innerHTML = amount;
  let cartItemBox = document.createElement("div");
  cartItemBox.classList.add("cart-box");
  cartItemBox.innerHTML += `<div>${arg.name} </div>`;
  cartItemBox.innerHTML += `<div>${arg.price} руб.</div>`;
  basket.appendChild(cartItemBox);
}
// Кнопка, которая очищает корзину,
//  массив объектов и общую стоимость
let purgeButton = basket.querySelector(".purge");
purgeButton.addEventListener("click", function () {
  cartItems = [];
  amount = 0;
  priceCount.innerHTML = amount;
  let newItem = basket.querySelectorAll(".cart-box");
  for (const item of newItem) {
    basket.removeChild(item);
  }
});
