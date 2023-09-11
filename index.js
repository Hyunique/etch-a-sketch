const canvas = document.querySelector(".canvas");
const toolBtnsContainer = document.querySelector(".tool-btns");
const clearBtn = document.querySelector(".clear-btn");
const gridController = document.querySelector("#gridSize");
const toolBtns = document.querySelectorAll(".tool-btn");
let mouseDown = 0;
let colorState = "black";

document.body.onmousedown = () => (mouseDown = 1);
document.body.onmouseup = () => (mouseDown = 0);
/* Default grid */
gridController.addEventListener("input", createGrid);
createGrid(8);
toolBtnsContainer.addEventListener("click", (e) => {
  toolBtns.forEach((btn) => btn.classList.remove("clicked"));
  if (e.target.tagName === "BUTTON") {
    e.target.classList.toggle("clicked");
    setColorState(e);
  }
});
clearBtn.addEventListener("click", clearCellColor);

/* Function to create box and put it in grid */
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
function setColorState(e) {
  let colorMode = e.target.value;
  colorState = colorMode;
  return colorState;
}
function paintCell(color) {
  canvas.addEventListener("click", (e) => {
    //  let cellColor = e.target.style.backgroundColor
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
  });
  canvas.addEventListener("mouseover", (e) => {
    if (mouseDown) {
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
  });
}

// const colorMapping = {
//   rainbow: () => makeRandomColor(),
//   erase: () => "white",
//   black: () => "black",
// };

// function paintCell(colorState) {
//   function setColor(e) {
//     if (e.target.classList.contains("cell")) {
//       const colorFunction = colorMapping[colorState] || colorMapping.black;
//       e.target.style.backgroundColor = colorFunction();
//     }
//   }

//   canvas.addEventListener("click", setColor);
//   canvas.addEventListener("mouseover", (e) => {
//     if (mouseDown) {
//       setColor(e);
//     }
//   });
// }

function makeRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}

/* Function for erasing the whole canvas */
function clearCellColor() {
  cells = document.querySelectorAll(".cell");
  for (let cell of cells) {
    cell.style.backgroundColor = "";
  }
}

/* Reset(remove) current grid size */
function removeGrid() {
  cells = document.querySelectorAll(".cell");
  for (let cell of cells) {
    cell.remove();
  }
}

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

function startTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  m = checkTime(m);
  document.querySelector(".time").innerHTML = h + ":" + m;
}
function checkTime(i) {
  // add zero in front of numbers < 10
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
/* TODO
2. Author modal styling
3. App minimize function
 */
