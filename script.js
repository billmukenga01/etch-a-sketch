const container = document.querySelector('.container');
const head = document.querySelector('head');
const body = document.querySelector('body');
const style = document.createElement('style');
const containerOne = document.createElement('div');
const selectorDiv = document.createElement('div');
let gridSize = 40;

selectorDiv.setAttribute('class', 'selector-div');
containerOne.setAttribute('class', 'container__one')

style.textContent = `
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    
    body{
        display:flex;
        flex-direction: column;
    }
    
    header, footer{
        background-color:blue;
        height: 15vh;
        
    }
    header{
        margin-bottom: 1.5em
    }
    
    .container{
        display:flex;
        flex-wrap: wrap;
        gap: 2rem;
        height: 70vh;
        margin-bottom: 1.5em;
        justify-content:center;
        align-content: center;
    }
    .clear{
        background-color:white;
    }.grey-color{
        background-color:grey;
    }
    .selector-div{
        background-color:blue;
        width:200px;
        height:500px;
    }
    .container__one{
        display:grid; 
        border: 0.001rem solid lightgrey;
        height:500px; 
        width:500px; 
        grid-template-columns:repeat(${gridSize}, 1fr)
    }
`;
container.appendChild(containerOne);
container.insertBefore(selectorDiv, containerOne);
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