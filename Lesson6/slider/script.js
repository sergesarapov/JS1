"use strict";
let slider = document.querySelector(".slider");
let imageBox = slider.querySelectorAll(".img-box");
let leftArrow = slider.querySelector(".fa-chevron-left");
let rightArrow = slider.querySelector(".fa-chevron-right");
let slideCounter = 0;

// Функция, отвечает за прокрутку вправо, добавляет текущему эл-ту класс с отрицательным margin
// Также сделана проверка на последний элемент, после которого слайдер возвращает 1-ую картинку.
// Эффект прокрутки усилен за счет transition в css
function slideRight() {
  if (slideCounter >= imageBox.length - 1) {
    slideCounter = 0;
    for (const img of imageBox) {
      img.classList.remove("slider-moved");
    }
  } else {
    imageBox[slideCounter].classList.add("slider-moved");
    slideCounter++;
    console.log(slideCounter);
  }
}
// Функция, аналогичная предыдущей, но удаляет класс с margin
// Проверка на последний эл-т слева, в данном случае визуально ничего не производит.
function slideLeft() {
  if (slideCounter == 0) {
    slideCounter = 0;
    for (const img of imageBox) {
      img.classList.remove("slider-moved");
    }
  } else {
    slideCounter--;
    imageBox[slideCounter].classList.remove("slider-moved");
    console.log(slideCounter);
  }
}
// Назначение функций на стрелки по клику
rightArrow.addEventListener("click", slideRight);
leftArrow.addEventListener("click", slideLeft);
