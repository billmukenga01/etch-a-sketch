
let gridSize = 100;

const style = document.createElement('style');
const container = document.querySelector('.container');
const containerOne = document.createElement('div');
const selectorDiv = document.createElement('div');
const reset = document.createElement('button');
const clear = document.createElement('button');
const btnGridSize = document.createElement('button');
const heading = document.createElement('p');
const header = document.querySelector('header');

container.appendChild(selectorDiv);
container.appendChild(containerOne);
document.head.appendChild(style);

selectorDiv.appendChild(heading);
selectorDiv.appendChild(btnGridSize);
selectorDiv.appendChild(clear);
selectorDiv.appendChild(reset);

selectorDiv.setAttribute('class', 'selector__div');
containerOne.setAttribute('class', 'container__one');
heading.setAttribute('class', 'controls');
reset.classList.add('btn', 'btn--reset');
clear.classList.add('btn', 'btn--clear');
btnGridSize.classList.add('btn', 'btn--grid-size');
reset.textContent = "Reset";
btnGridSize.textContent = "Grid Size";
clear.textContent = "Clear";
heading.textContent = "Controls";
header.textContent = "Etch-A-Sketch";


const body = document.querySelector('body');
const btnReset = document.querySelector('.btn--reset');
const btnClear = document.querySelector('.btn--clear');

const resetFunc = () => {
  let grid = document.querySelectorAll('.grid-items');
  for (let elem of grid) {
    elem.classList.remove('grey-color');
  }
};

const genGridSize = () => {
  const size = prompt("Enter grid size (between 1-100):");
  if (size && size >= 1 && size <= 100) {
    gridSize = size;
    containerOne.innerHTML = '';
    genGrid();
    addGreyClr();
  } else {
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
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    
    header, footer{
        height: 10vh;
    }
    header{
       text-align: center;
       font-size: 5em;
       background-color: lightgrey;
    }
    .controls{
        font-size: 2rem;
        position: absolute;
        top: 0;
    }
    .btn{
        width:7rem;
        height:3rem;
        font: "times-new-roman"

    }
    .container{
        display:flex;
        flex-wrap: wrap;
        gap: 2rem;
        height: 80vh;
        justify-content:center;
        align-content: center;
        
    }

    .clear{
        background-color:white;
    }
    
    .grey-color{
        background-color:grey;
    }

    .selector__div{
        display:flex;
        position: relative;
        flex-direction: column;
        align-items: center;
        justify-content:center;
        gap: 1rem;
        border-radius:5px;
        box-shadow:0 3px 10px rgb(211, 211, 211);
        width:200px;
        height:80%;
    }

    .container__one{
        display:grid; 
        border: 0.001rem solid lightgrey;
        height:80%; 
        width:700px; 
        box-shadow: 0 3px 10px rgb(211, 211, 211);
        grid-template-columns:repeat(${gridSize}, 1fr)
    }
`;
//


genGrid();
addGreyClr();

btnReset.addEventListener('click', ()=>{
    resetFunc();
    addGreyClr();
})

btnGridSize.addEventListener('click', ()=>{
    genGridSize();
})

btnClear.addEventListener('click', ()=>{
    removeGreyClr();
})





