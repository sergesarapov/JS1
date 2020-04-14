"use strict";
const cols = [8, 7, 6, 5, 4, 3, 2, 1];
const rows = ["a", "b", "c", "d", "e", "f", "g", "h"];
const blackFigures = [
  {
    place: ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
    image: `<i class="fas fa-chess-pawn"></i>`,
  },
  {
    place: ["a8", "h8"],
    image: `<i class="fas fa-chess-rook"></i>`,
  },
  {
    place: ["b8", "g8"],
    image: `<i class="fas fa-chess-knight"></i>`,
  },
  {
    place: ["c8", "f8"],
    image: `<i class="fas fa-chess-bishop"></i>`,
  },
  {
    place: ["e8"],
    image: `<i class="fas fa-chess-king"></i>`,
  },
  {
    place: ["d8"],
    image: `<i class="fas fa-chess-queen"></i>`,
  },
];

const whiteFigures = [
  {
    place: ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
    image: `<i class="fas fa-chess-pawn"></i>`,
  },
  {
    place: ["a1", "h1"],
    image: `<i class="fas fa-chess-rook"></i>`,
  },
  {
    place: ["b1", "g1"],
    image: `<i class="fas fa-chess-knight"></i>`,
  },
  {
    place: ["c1", "f1"],
    image: `<i class="fas fa-chess-bishop"></i>`,
  },
  {
    place: ["e1"],
    image: `<i class="fas fa-chess-king"></i>`,
  },
  {
    place: ["d1"],
    image: `<i class="fas fa-chess-queen"></i>`,
  },
];

let board = document.querySelector(".board-container");

let cells = [];

let lineCount = 0;
let cellsCount = 0;

function drawBoard() {
  for (let i = 0; i < 4; i++) {
    drawFirstLine();
    drawSecondLine();
  }
  drawNumbers(0);
  drawFigures(cells);
}
// Функция рисует нечетную линию клеток
function drawFirstLine() {
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
}
// Функция рисует четную линию клеток
function drawSecondLine() {
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
// Функция добавляет номера клеток
function drawNumbers(n) {
  cells = board.querySelectorAll(".cell");
  for (let i = n; i < n + 8; i++) {
    let cell = cells[i];
    cell.innerHTML += cols[lineCount];
  }
  while (lineCount < 7) {
    lineCount++;
    cellsCount += 8;
    drawNumbers(cellsCount);
  }
  return cells;
}
// Функция расставляет фигуры
function drawFigures(cells) {
  cells.forEach((cell) => {
    whiteFigures.forEach((figure) => {
      if (figure.place.includes(cell.innerText)) {
        cell.innerHTML = figure.image;
        cell.classList.add("coloring");
      }
    });
    blackFigures.forEach((figure) => {
      if (figure.place.includes(cell.innerText)) {
        cell.innerHTML = figure.image;
      }
    });
  });
}

let button = document.querySelector("button");
button.addEventListener("click", function () {
  drawBoard();
  button.style.display = "none";
});
