const container = document.querySelector('.container');
const head = document.querySelector('head');
const body = document.querySelector('body');
const style = document.createElement('style');
const selectorDiv = document.createElement('div');
let gridSize = 40;

selectorDiv.setAttribute('class', 'selector-div');

style.textContent = `
    body{
        display:flex;
        flex-direction: column;
        align-items: center;
    }
    .grid-items{
        border: 0.001rem solid grey;
    }
    .clear{
        background-color:white;
    }.grey-color{
        background-color:grey;
    }
    .selector-div{
        background-color:blue;
        margin-bottom: 2rem;
        width:50vw;
        height:20vh;
    }
    .container{
        display:grid; 
        border: 0.001rem solid lightgrey;
        height:50vh; 
        width:50vw; 
        grid-template-columns:repeat(${gridSize}, 1fr)
    }
`;
body.insertBefore(selectorDiv, container);
head.appendChild(style);

for (let i = 1; i <= gridSize*gridSize; ++i) {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'grid-items');
    container.appendChild(newDiv);
}

container.addEventListener('mouseover', e =>{
    if(e.target.classList.contains('grid-items')){
        e.target.classList.add('grey-color');
    }
})