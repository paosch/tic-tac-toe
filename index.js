let character = 'X';
const charactersArray = [
  [undefined, undefined, undefined],
  [undefined, undefined, undefined],
  [undefined, undefined, undefined]
];

function assignCharacter(e) {
  if (e.target.innerText) return;
  const gridPosition = e.target.getAttribute('data-grid-position').split('-');
  const [rowIndex, cellIndex] = gridPosition;
  charactersArray[rowIndex][cellIndex] = character;
  e.target.innerText = character;
  character = character === 'X' ? 'O' : 'X';
}

const squares = document.querySelectorAll('.square');
squares.forEach(square => {
  square.addEventListener('click', assignCharacter);
});
