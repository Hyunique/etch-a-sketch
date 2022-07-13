
/* Default grid */
let container = document.querySelector('.boxContainer')

let gridController = document.querySelector('#gridSize')
gridController.addEventListener('input', createGrid)

createGrid(4)

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

const eraseBar = document.querySelector('.resetlabel')
eraseBar.addEventListener('click', eraseColor)

function eraseColor() {
    let box = document.querySelectorAll('.boxes')
    box.classList.remove('colored')
}
function removeGrid() {
    let boxes = container.querySelectorAll('div')
    boxes.forEach(boxes => boxes.remove());
}
/* 14th July _
                Make color function to be able with individual click */





                // let grid4 = document.querySelector('.grid4')
// let grid8 = document.querySelector('.grid8')
// let grid16 = document.querySelector('.grid16')
// let gridArr = [grid4, grid8, grid16]

// for (let grid of gridArr) {
//     grid.addEventListener('click', removeGrid)
//     grid.addEventListener('click', createGrid)

// }


