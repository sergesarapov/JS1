"use strict";
let products = document.querySelectorAll(".product");
products.forEach(function (product) {
  let button = product.querySelector(".product__button");
  let image = product.querySelector("img");
  let product__info = document.createElement("div");
  product__info.innerHTML = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo nisi consectetur veritatis cupiditate est.`;
  button.addEventListener("click", function () {
    if (button.innerHTML == "Подробнее") {
      image.style.display = "none";
      product.insertBefore(product__info, button);
      button.innerHTML = "Отмена";
    } else {
      image.style.display = "flex";
      product.removeChild(product__info);
      button.innerHTML = "Подробнее";
    }
  });
});
