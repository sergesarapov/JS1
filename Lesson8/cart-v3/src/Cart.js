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
