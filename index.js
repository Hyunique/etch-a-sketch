
let container = document.querySelector('.boxContainer')

/* Create 16*16 grid and add it in container div*/
for (let i = 0; i < 256; i++) {
    const boxes = document.createElement('div')
    container.appendChild(boxes)
    boxes.classList.add('boxes')
}

/* Select the grid and add an click event to change color */
const boxes = document.querySelectorAll('.boxes')
for (let box of boxes) {
    box.addEventListener('click', function () {
        box.style.backgroundColor = 'black'
    })
}
