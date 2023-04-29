const container = document.querySelector('.container');
const head = document.querySelector('head');
const body = document.querySelector('body');
const header = document.querySelector('header');
//

const style = document.createElement('style');
const containerOne = document.createElement('div');
const selectorDiv = document.createElement('div');
const reset = document.createElement('button');
const clear = document.createElement('button');
const heading = document.createElement('p');


const resetFunc = ()=>{
    let grid = document.querySelectorAll('.grid-items');
    for(let elem of grid){
        elem.classList.remove('grey-color');
    }
};

let gridSize = 100;

selectorDiv.setAttribute('class', 'selector-div');
containerOne.setAttribute('class', 'container__one');
//
reset.textContent = "Reset";
reset.classList.add('button', 'reset');
//
clear.classList.add('button', 'btn__clear');
clear.textContent = "Clear";
//
heading.textContent = "Controls";
heading.setAttribute('class', 'controls');

style.textContent = `
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    
    header, footer{
        background-color:lightgrey;
        height: 10vh;
    }
    header{
       text-align:center;
       font-size: 5em
    }
    .controls{
        font-size: 2rem;
        position: absolute;
        top: 0;
    }
    .button{
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

    .selector-div{
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
container.appendChild(containerOne);
container.insertBefore(selectorDiv, containerOne);
header.textContent = "Etch-A-Sketch";
head.appendChild(style);

for (let i = 1; i <= gridSize*gridSize; ++i) {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'grid-items');
    containerOne.appendChild(newDiv);
}

container.addEventListener('mouseover', e =>{
    if(e.target.classList.contains('grid-items')){
        e.target.classList.add('grey-color');
    }
})

selectorDiv.appendChild(heading);
selectorDiv.appendChild(clear);
selectorDiv.appendChild(reset);

//
const btnReset = document.querySelector('.reset');
btnReset.addEventListener('click', e => {
    resetFunc();
})



const btnClear = document.querySelector('.clear');
btnClear.addEventListener('click', e=>{
    
})