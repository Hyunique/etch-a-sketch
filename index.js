const container = document.querySelector(".canvas");
const gridController = document.querySelector("#gridSize");
let mouseDown = 0;
document.body.onmousedown = () => (mouseDown = 1);
document.body.onmouseup = () => (mouseDown = 0);
/* Default grid */
gridController.addEventListener("input", createGrid);
createGrid(8);

const eraseBtn = document.querySelector(".erase-btn");
eraseBtn.addEventListener("click", eraseColor);

/* Function to create box and put it in grid */
function createGrid(gridNum) {
  removeGrid();
  gridNum = gridController.value;
  for (let i = 0; i < gridNum * gridNum; i++) {
    const cell = document.createElement("div");
    container.appendChild(cell);
    cell.classList.add("cell");
    container.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;
  }
  colorGrid();
}

/* Color background according to radio button value */
function colorGrid() {
  let cell = document.querySelectorAll(".cell");
  for (let c of cell) {
    c.addEventListener("mouseover", () => {
      if (mouseDown) {
        getColorMode();
        if (modeValue === "black") {
          c.style.backgroundColor = "black";
        } else if (modeValue === "rainbow") {
          c.style.backgroundColor = makeRandomColor();
        } else if (modeValue === "dark") {
          c.style.backgroundColor = "";
        }
      }
    });
    c.addEventListener("click", () => {
      getColorMode();
      if (modeValue === "black") {
        c.style.backgroundColor = "black";
      } else if (modeValue === "rainbow") {
        c.style.backgroundColor = makeRandomColor();
      } else if (modeValue === "dark") {
        c.style.backgroundColor = "";
      }
    });
  }
}

/* Get the value of radio button when checked */
function getColorMode() {
  let colorModes = document.querySelectorAll("#colorMode");
  for (i = 0; i < colorModes.length; i++) {
    if (colorModes[i].checked) {
      return (modeValue = colorModes[i].getAttribute("value"));
    }
  }
}

/* Generate random RGB for rainbow color mode */
function makeRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}

/* Function for erasing the whole canvas */
function eraseColor() {
  boxes = document.querySelectorAll(".boxes");
  for (let box of boxes) {
    box.style.backgroundColor = "";
  }
}

/* Reset(remove) current grid size */
function removeGrid() {
  let boxes = container.querySelectorAll("div");
  for (let box of boxes) {
    box.remove();
  }
}

/* 15th July _  color grid () is not working when new grid is made*/
