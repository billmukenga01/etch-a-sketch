const container = document.querySelector('.container');
let gridSize = 16;

for(i=1; i<=gridSize; i++){
    const gridElement = document.createElement('div');
    gridElement.setAttribute('class', 'grid-element');
    container.appendChild(gridElement);
}
