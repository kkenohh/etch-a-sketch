const body = document.querySelector('body');
let container = document.createElement('div');
container.classList.add('container');
let div;

for (let i = 0; i < 256; i++) {
    div = document.createElement('div');
    div.classList.add(`box-${i}`, 'box', 'size');
    container.appendChild(div);
}

body.appendChild(container);

let boxes = document.querySelectorAll('.box');

boxes.forEach( box => box.addEventListener('mouseover', addColor));

function addColor(e) {
    let capture = e.target.className.match(/box\-\d{1,}/);
    let box = document.querySelector('.' + capture);
    console.log(box);
    box.classList.add('hover-color');
}

const button = document.querySelector('button');
button.addEventListener('click', reset);

function reset(e) {
    let int = prompt('How many rows and columns?');
    while (int > 100) {
        int = prompt('Please enter a number between 1 and 100');
    }
    body.removeChild(container);
    container = document.createElement('div');
    container.classList.add('container');
    let size = (1 / int) * 100;
    for (let i = 0; i < int * int; i++) {
        div = document.createElement('div');
        div.classList.add(`box-${i}`, 'box');
        div.style.cssText = `width: ${size}%; height: ${size}%;`;
        container.appendChild(div);
    }
    body.appendChild(container);
    boxes = document.querySelectorAll('.box');
    boxes.forEach( box => box.addEventListener('mouseover', addColor));
}