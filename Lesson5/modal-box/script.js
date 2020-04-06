"use strict";
window.onload = setTimeout(modalBox, 500);

let modal = document.querySelector(".modal-container");
let cross = document.querySelector(".cross");
let box = document.querySelector(".box");

function modalBox() {
  box.classList.add("magictime", "puffIn");
  modal.style.display = "flex";
  cross.addEventListener("click", function () {
    box.classList.remove("puffIn");
    box.classList.add("magictime", "vanishOut");
    setTimeout(function () {
      modal.style.display = "none";
    }, 500);
  });
}
