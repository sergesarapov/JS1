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

class Cart {
  constructor() {
    this.amount = 0;
    this.cartItems = [];
  }

  createNewItem(product) {
    let id = product.id;
    let name = product.querySelector("h3").innerHTML;
    let price = parseInt(product.querySelector(".price").innerHTML);
    this.amount += price;
    let newItem = new CartItem(id, name, price);
    return newItem;
  }

  checkIfAdded(item) {
    for (let i = 0; i <= this.cartItems.length; i++) {
      if (this.cartItems[i] == undefined) {
        return false;
      }
      if (this.cartItems[i].id === item.id) {
        return true;
      }
    }
  }

  addQuantity(item) {
    this.cartItems.forEach((product) => {
      if (product.id == item.id) {
        product.quantity++;
      } else {
        return;
      }
    });
  }

  addItem(newItem) {
    if (this.checkIfAdded(newItem)) {
      this.addQuantity(newItem);
    } else {
      this.cartItems.push(newItem);
    }
  }

  renderCart() {
    priceCount.innerHTML = this.amount;
    itemsBox.innerHTML = "";
    this.cartItems.forEach((item) => {
      let cartItemBox = document.createElement("div");
      cartItemBox.classList.add("cart-box");
      cartItemBox.innerHTML = `<div>${item.name} </div>
      <div class='cartitem-id'>Art. <span class = 'id'>${item.id}</span></div>
      <div>Цена ${item.price} руб.</div>
      <div>${item.quantity} шт.</div>
      <div class='pag'><div class='plus'>+</div><div class='minus'>-</div></div>`;
      itemsBox.insertAdjacentElement("afterbegin", cartItemBox);
    });
  }
}

class CartItem {
  constructor(id, name, price) {
    this.id = +id;
    this.name = name;
    this.price = +price;
    this.quantity = 1;
  }
}

// Инициализирую элементы
let basket = document.querySelector(".cart");
let itemsBox = basket.querySelector(".items-box");
let priceCount = document.querySelector(".price-count");

// создаю переменную с новым объектом корзины.
const newCart = new Cart();

//# sourceMappingURL=maps/script.js.map
