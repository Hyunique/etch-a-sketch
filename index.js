
let container = document.querySelector('.boxContainer')
for (let i = 0; i < 256; i++) {
    const boxes = document.createElement('div')
    container.appendChild(boxes)
}
document.body.insertBefore(boxes, container)