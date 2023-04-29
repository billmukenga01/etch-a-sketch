
let gridSize = 100;

const style = document.createElement('style');
const container = document.querySelector('.container');
const containerOne = document.createElement('div');
const selectorDiv = document.createElement('div');
const reset = document.createElement('button');
const clear = document.createElement('button');
const buttonGridSize = document.createElement('button');
const heading = document.createElement('p');
const header = document.querySelector('header');
const body = document.querySelector('body');

container.appendChild(selectorDiv);
container.appendChild(containerOne);
document.head.appendChild(style);

selectorDiv.appendChild(heading);
selectorDiv.appendChild(buttonGridSize);
selectorDiv.appendChild(clear);
selectorDiv.appendChild(reset);

selectorDiv.setAttribute('class', 'selector__div');
containerOne.setAttribute('class', 'container__one');
heading.setAttribute('class', 'controls');
reset.classList.add('btn', 'btn--reset');
clear.classList.add('btn', 'btn--clear');
buttonGridSize.classList.add('btn', 'btn--grid-size');
reset.textContent = "Reset";
buttonGridSize.textContent = "Grid Size";
clear.textContent = "Clear";
heading.textContent = "Controls";
header.textContent = "Etch-A-Sketch";


const btnReset = document.querySelector('.btn--reset');
const btnClear = document.querySelector('.btn--clear');
const btnGridSize = document.querySelector('.btn--grid-size');


const resetFunc = () => {
  let grid = document.querySelectorAll('.grid-items');
  for (let elem of grid) {
    elem.classList.remove('grey-color');
  }
};

const genGridSize = () => {
  if (gridSize && gridSize >= 1 && gridSize <= 100) {
        gridSize = prompt("Enter grid size (between 1-100):");
        containerOne.innerHTML = '';
        style.textContent = `
            .container__one{
                display:grid; 
                border: 0.001rem solid lightgrey;
                height:80%; 
                width:700px; 
                box-shadow: 0 3px 10px rgb(211, 211, 211);
                grid-template-columns:repeat(${gridSize}, 1fr);
            }
        `
        genGrid();
        addGreyClr();
    } 
  else {
        alert("Please enter a valid size between 1-100!");
  }
};

const genGrid = () => {
  for (let i = 1; i <= gridSize * gridSize; ++i) {
        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'grid-items');
        containerOne.appendChild(newDiv);
    }
};

const addGreyClr = ()=>{
    container.addEventListener('mouseover', e =>{
        if(e.target.classList.contains('grid-items')){
            e.target.classList.add('grey-color');
        }
    })
}

const removeGreyClr = ()=>{
    container.addEventListener('mouseover', e =>{
        if(e.target.classList.contains('grid-items')){
            e.target.classList.remove('grey-color');
        }
    })
}


style.textContent = `
    .container__one{
        display:grid; 
        border: 0.001rem solid lightgrey;
        height:80%; 
        width:700px; 
        box-shadow: 0 3px 10px rgb(211, 211, 211);
        grid-template-columns:repeat(${gridSize}, 1fr);
    }
`;
//


genGrid();
addGreyClr();

btnReset.addEventListener('click', ()=>{
    gridSize = 100;
    resetFunc();
    addGreyClr();
})

btnGridSize.addEventListener('click', ()=>{
    genGridSize();
})

btnClear.addEventListener('click', ()=>{
    removeGreyClr();
})





