// Записываю кнопки в переменные
let buttons = document.querySelectorAll(".buy");
let purgeButton = document.querySelector(".purge");

let pluses = [];
let minuses = [];

// Кнопки "Купить"
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let basketItem = newCart.createNewItem(button.parentNode);
    newCart.addItem(basketItem);
    newCart.renderCart();
    initPag(); //инициализирую кнопки товара
  });
});

// Кнопка "Очистить"
purgeButton.addEventListener("click", function () {
  newCart.cartItems = [];
  newCart.amount = 0;
  priceCount.innerHTML = newCart.amount;
  itemsBox.innerHTML = "";
});

//функция инициализирует кнопки + и -
// и добавляет event listeners
// с функциями добавления и убавления кол-ва товаров,
// а также меняет общую сумму заказа
function initPag() {
  pluses = document.querySelectorAll(".plus");
  minuses = document.querySelectorAll(".minus");
  pluses.forEach((plus) => {
    plus.addEventListener("click", function () {
      let singlePag = plus.parentNode;
      let currentId = +singlePag.parentNode.querySelector(".id").innerHTML;
      newCart.cartItems.forEach((item) => {
        if (item.id == currentId) {
          item.quantity++;
          newCart.amount += item.price;
          newCart.renderCart();
          initPag();
        }
      });
    });
  });

  minuses.forEach((minus) => {
    minus.addEventListener("click", function () {
      let singlePag = minus.parentNode;
      let currentId = +singlePag.parentNode.querySelector(".id").innerHTML;
      newCart.cartItems.forEach((item, index) => {
        if (item.id == currentId) {
          if (item.quantity == 1) {
            newCart.cartItems.splice(index, 1);
          }
          item.quantity--;
          newCart.amount -= item.price;
          newCart.renderCart();
          initPag();
        }
      });
    });
  });
}
