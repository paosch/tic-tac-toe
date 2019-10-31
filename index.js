let character = 'O';
let charactersArray = [
  [undefined, undefined, undefined],
  [undefined, undefined, undefined],
  [undefined, undefined, undefined]
];
let gameOver = false;

function assignCharacter(e) {
  if (e.target.innerText || gameOver) return;
  const gridPosition = e.target.getAttribute('data-grid-position').split('-');
  const [rowIndex, cellIndex] = gridPosition;
  charactersArray[rowIndex][cellIndex] = character;
  e.target.innerText = character;
  character = character === 'X' ? 'O' : 'X';
  const announceWinner = function() {
    if (checkHorizontal('X') || checkVertical('X') || checkDiagonal('X')) {
      return 'X';
    }
    if (checkHorizontal('O') || checkVertical('O') || checkDiagonal('O')) {
      return 'O';
    }
    return null;
  };

  let winner = announceWinner();
  if (winner) {
    gameOver = true;
    const para = document.querySelector('.winner');
    para.innerText = `"${winner}" has won the game`;
  }
}

function checkHorizontal(char) {
  return charactersArray[0].every(item => item === char) ||
    charactersArray[1].every(item => item === char) ||
    charactersArray[2].every(item => item === char);
}

function checkVertical(char) {
  const vertical0 = [charactersArray[0][0], charactersArray[1][0], charactersArray[2][0]];
  const vertical1 = [charactersArray[0][1], charactersArray[1][1], charactersArray[2][1]];
  const vertical2 = [charactersArray[0][2], charactersArray[1][2], charactersArray[2][2]];

  return vertical0.every(item => item === char) ||
    vertical1.every(item => item === char) ||
    vertical2.every(item => item === char);
}

function checkDiagonal(char) {
  const diagonal0 = [charactersArray[0][0], charactersArray[1][1], charactersArray[2][2]];
  const diagonal1 = [charactersArray[0][2], charactersArray[1][1], charactersArray[2][0]];

  return diagonal0.every(item => item === char) ||
    diagonal1.every(item => item === char);
}

const squares = document.querySelectorAll('.square');
squares.forEach(square => {
  square.addEventListener('click', assignCharacter);
});

const resetButton = document.querySelector('.reset-button');
resetButton.addEventListener('click', reset);

function reset() {
  charactersArray = [[...Array(3)], [...Array(3)], [...Array(3)]];
  character = 'O';
  gameOver = false;
  document.querySelector('.winner').innerHTML = '';
  document.querySelectorAll('.square').forEach(square => {
    square.innerText = '';
  });
}
