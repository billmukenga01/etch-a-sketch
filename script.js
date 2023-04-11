const container = document.querySelector('.container');
const body = document.querySelector('body');
let gridSize = 16;


body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
container.style.maxHeight = '320px';
container.style.maxWidth = '320px'

for (let i = 1; i <= gridSize*gridSize; ++i) {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'grid-items');
    newDiv.style.backgroundColor = 'blue';
    container.appendChild(newDiv);
}
  

container.style.display = 'grid';
container.style.gridTemplateRows = `repeat(${gridSize}, 20px)`;
container.style.gridTemplateColumns = `repeat(${gridSize}, 20px)`;

