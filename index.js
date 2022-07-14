
/* Default grid */
let container = document.querySelector('.boxContainer')
let gridController = document.querySelector('#gridSize')
gridController.addEventListener('input', createGrid)

createGrid(4)
const eraseBar = document.querySelector('.resetlabel')
eraseBar.addEventListener('click', eraseColor)

/* Function to create box and put it in grid */
function createGrid(gridNum) {
    removeGrid()
    gridNum = gridController.value;
    for (let i = 0; i < gridNum * gridNum; i++) {
        const boxes = document.createElement('div')
        container.appendChild(boxes)
        boxes.classList.add('boxes')
        container.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;
    }
    colorGrid()
}

/* Select the box grid and add a click event to change color */
/* When mouse is clicked && moving, color the box */
let mouseDown = 0;
document.body.onmousedown = () => mouseDown = 1;
document.body.onmouseup = () => mouseDown = 0;

function colorGrid() {
    const boxes = document.querySelectorAll('.boxes')
    for (let box of boxes) {
        box.addEventListener('mouseover', () => {
            if (mouseDown) {
                box.classList.add('colored')
            }
        })
        box.addEventListener('click', () => box.classList.add('colored'))
    }
}

let rainbowBtn = document.querySelector('.rainbow')
rainbowBtn.addEventListener('input', colorRainbow)
function colorRainbow() {
    const boxes = document.querySelectorAll('.boxes')
    const rainbowColor = makeRandomColor()
    for (let box of boxes) {
        box.addEventListener('mouseover', () => {
            if (mouseDown) {
                box.style.backgroundColor = rainbowColor
            }
        })
        box.addEventListener('click', () => box.style.backgroundColor = rainbowColor)
    }
}

function makeRandomColor() {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r},${g},${b})`
}

let darkModeBtn = document.querySelector('.dark')

/* Function for erasing the whole canvas */
function eraseColor() {
    boxes = document.querySelectorAll('.boxes')
    boxes.forEach(boxes => boxes.classList.remove('colored'));
}

/* Remove current grid */
function removeGrid() {
    let boxes = container.querySelectorAll('div')
    boxes.forEach(boxes => boxes.remove());
}
/* 14th July _  
Rainbow color each cell
R
Glow-in-dark function
Clean up repeating queryselector*/


