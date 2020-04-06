"use strict";
const cols = [8, 7, 6, 5, 4, 3, 2, 1];
const rows = ["a", "b", "c", "d", "e", "f", "g", "h"];
let board = document.querySelector(".board-container");

function drawBoard() {
  for (let i = 0; i < 4; i++) {
    for (let i = 0; i < 8; i++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      board.appendChild(cell);
      if (i % 2 !== 0) {
        cell.style = "background-color: brown;";
        cell.innerText = `${rows[i]}`;
      }
      cell.innerText = `${rows[i]}`;
    }
    for (let i = 0; i < 8; i++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      board.appendChild(cell);
      if (i % 2 === 0) {
        cell.style = "background-color: brown;";
        cell.innerText = `${rows[i]}`;
      }
      cell.innerText = `${rows[i]}`;
    }
  }
  let cells = board.querySelectorAll(".cell");
  let count = 0;
  let x = 0;
  function drawNumbers(n) {
    for (let i = n; i < n + 8; i++) {
      let cell = cells[i];
      cell.innerHTML += cols[count];
    }
    while (count < 7) {
      count++;
      x += 8;
      drawNumbers(x);
    }
  }
  drawNumbers(0);
}

let button = document.querySelector("button");
button.addEventListener("click", function () {
  drawBoard();
  button.style.display = "none";
});
