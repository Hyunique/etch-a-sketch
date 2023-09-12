const canvas = document.querySelector(".canvas");
const toolBtnsContainer = document.querySelector(".tool-btns");
const clearBtn = document.querySelector(".clear-btn");
const gridController = document.querySelector("#gridSize");
const toolBtns = document.querySelectorAll(".tool-btn");
let mouseDown = 0;
let colorState = "black";

document.body.onmousedown = () => (mouseDown = 1);
document.body.onmouseup = () => (mouseDown = 0);
createGrid();
/* Default grid */
gridController.addEventListener("input", createGrid);

toolBtnsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("tool-btn")) {
    toolBtns.forEach((btn) => btn.classList.remove("clicked"));
    e.target.classList.toggle("clicked");
    setColorState(e);

    if (e.target.value === "erase") {
      canvas.style.cursor = "url('./img/eraser-icon.png'),auto";
    } else {
      canvas.style.cursor = "url('./img/pencil-icon.png'),auto";
    }
  }
});
clearBtn.addEventListener("mousedown", () => {
  clearBtn.classList.add("clicked");
});
clearBtn.addEventListener("mouseup", () => {
  clearBtn.classList.remove("clicked");
  clearCanvas();
  // pencilBtn.classList.remove("not-clicked");
});

/* Function to create box and display it in grid */
function createGrid(gridNum) {
  removeGrid();
  gridNum = gridController.value;
  for (let i = 0; i < gridNum * gridNum; i++) {
    const cell = document.createElement("div");
    canvas.appendChild(cell);
    cell.classList.add("cell");
    canvas.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;
  }
  paintCell(colorState);
}
/* Reset(remove) current grid size */
function removeGrid() {
  cells = document.querySelectorAll(".cell");
  for (let cell of cells) {
    cell.remove();
  }
}
/* Clear all colors on canvas */
function clearCanvas() {
  cells = document.querySelectorAll(".cell");
  for (let cell of cells) {
    cell.style.backgroundColor = "";
  }
}
function setColorState(e) {
  colorState = e.target.value;
  return colorState;
}
function getColorState(e) {
  if (e.target.classList.contains("cell")) {
    switch (colorState) {
      case "rainbow":
        e.target.style.backgroundColor = makeRandomColor();
        break;
      case "erase":
        e.target.style.backgroundColor = "white";
        break;

      case "black":
      default:
        e.target.style.backgroundColor = "black";
        break;
    }
  }
}
function paintCell(color) {
  canvas.addEventListener("click", (e) => {
    // For each click
    getColorState(e);
  });
  canvas.addEventListener("mouseover", (e) => {
    // For click and drag
    if (mouseDown) {
      getColorState(e);
    }
  });
}

function makeRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}

// Author modal toggle
const authorBtn = document.querySelector(".author-btn");
const authorModal = document.querySelector(".modal");
authorBtn.addEventListener("click", () => {
  authorBtn.classList.toggle("clicked");
  if (authorBtn.classList.contains("clicked")) {
    authorModal.style.display = "flex";
  } else {
    authorModal.style.display = "none";
  }
});

// Display real time
function startTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  m = checkTime(m);
  document.querySelector(".time").innerHTML = h + ":" + m;
  let t = setTimeout(startTime, 1000);
}
function checkTime(i) {
  // add zero in front of numbers < 10
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// Minimize-Maximize function
const minBtn = document.querySelector(".min-btn");
const programBtn = document.querySelector(".program-btn");
const app = document.querySelector(".app");
minBtn.addEventListener("click", minWindow);
programBtn.addEventListener("click", () => {
  if (programBtn.classList.contains("not-clicked")) {
    maxWindow();
  } else if (programBtn.classList.contains("clicked")) {
    minWindow();
  }
});
function minWindow() {
  app.style.display = "none";
  programBtn.classList.toggle("clicked");
  programBtn.classList.toggle("not-clicked");
  programBtn.style.backgroundColor = "var(--color-shade)";
}
function maxWindow() {
  app.style.display = "block";
  programBtn.classList.toggle("not-clicked");
  programBtn.classList.toggle("clicked");
  programBtn.style.backgroundColor = "var(--color-system-bg)";
}
/* TODO

 */
