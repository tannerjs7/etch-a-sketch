const container = document.querySelector('#container');
const button = document.querySelector('#number');

button.addEventListener('click', function() {
  let input = prompt('Enter a number between 1 and 100');
  if (input == '' || isNaN(input)) alert('That is not a number');
  else if (input < 1 || input > 100) alert('That number is out of bounds');
  else {
    container.replaceChildren();
    createGrid(input);
  }
});

function createGrid(numberOfSquares) {
  for (let i = 0; i < numberOfSquares; i++) {
    let row = document.createElement('div');
    row.className = row;
    container.appendChild(row);
    let square = document.createElement('div');
    square.className = 'square';
    square.style.width = `${960 / numberOfSquares}px`;
    square.style.height = `${960 / numberOfSquares}px`;
    for (let j = 0; j < numberOfSquares; j++) {
      row.appendChild(square.cloneNode());
    }
  }
}

createGrid(16);