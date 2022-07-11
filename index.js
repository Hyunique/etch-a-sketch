
let container = document.querySelector('.boxContainer')
const box = document.querySelector('.boxes')
let mouseDown = 0;
document.body.onmousedown = () => mouseDown = 1;
document.body.onmouseup = () => mouseDown = 0;

/* Create 16*16 grid and add it in container div*/
for (let i = 0; i < 256; i++) {
    const boxes = document.createElement('div')
    container.appendChild(boxes)
    boxes.classList.add('boxes')
}

/* Select the grid and add an click event to change color */
const boxes = document.querySelectorAll('.boxes')
for (let box of boxes) {
    box.addEventListener('mouseover', () => {
        if (mouseDown) { box.style.backgroundColor = 'rgb(38, 38, 38)' }
    })
}

