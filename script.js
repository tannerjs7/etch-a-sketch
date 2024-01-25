const container = document.querySelector('#container');

for (let i = 0; i < 16; i++) {
  console.log(i)
  let row = document.createElement('div');
  row.className = row;
  container.appendChild(row);
  let square = document.createElement('div');
  square.className = 'square';
  for (let j = 0; j < 16; j++) {
    row.appendChild(square.cloneNode());
  }
}