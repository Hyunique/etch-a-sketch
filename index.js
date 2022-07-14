
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
function colorGrid() {
    const boxes = document.querySelectorAll('.boxes')
    let mouseDown = 0;
    document.body.onmousedown = () => mouseDown = 1;
    document.body.onmouseup = () => mouseDown = 0;

    for (let box of boxes) {
        box.addEventListener('mouseover', () => {
            if (mouseDown) {
                box.classList.add('colored')
            }
        })
    }
}


function eraseColor() {
    boxes = document.querySelectorAll('.boxes')
    for (let box of boxes) {
        box.classList.remove('colored')
    }

    // boxes.forEach(boxes => boxes.classList.remove('colored'));
}

function removeGrid() {
    let boxes = container.querySelectorAll('div')
    boxes.forEach(boxes => boxes.remove());
}
/* 14th July _  Erase bar!!! 
                Make color function to be able with individual click */


