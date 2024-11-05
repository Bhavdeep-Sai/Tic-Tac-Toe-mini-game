let presentPlayer = 'O';
const boxElement = document.querySelectorAll('.box');
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let xAttempts = [];
let oAttempts = [];
let click = 0;
let wonTheGame = 0;
const message = document.getElementById('message');
const gameResult = document.getElementById('result');
const restart = document.getElementById('button');

//Challenge :- Here you are expected to complete the handleClick function, which will place X and O alternatively on clicking the DIV
boxElement.forEach((box) => {
  box.onclick = handleClick;
});

function handleClick(e) {
  if (e.currentTarget && !e.currentTarget.innerHTML && !wonTheGame) {
    presentPlayer = presentPlayer === 'O' ? 'X' : 'O';
    e.currentTarget.innerHTML = `<p class="tic-tac ${
      presentPlayer === 'X' ? 'x' : 'o'
    }">${presentPlayer}</p>`;
    const index = parseInt(e.currentTarget.id) - 1;

    if (presentPlayer === 'X') {
      xAttempts.push(index);
      result(winningCombinations, xAttempts, 'X');
    } else {
      oAttempts.push(index);
      result(winningCombinations, oAttempts, 'O');
    }

    click++;

    if (click === 9 && !wonTheGame) {
      displayResult("It's a tie 🤝 ");
    }
  }
}
// Challenge 2: Result function
// Here you are expected to complete the result function that will give winning team based on the winning combinations
// should declare a tie when all boxes are filled with no winner
function result(winningCombinations, attempts, player) {
  for (let combination of winningCombinations) {
    if (combination.every((index) => attempts.includes(index))) {
      wonTheGame = 1;
      displayResult(`'${player}' Won the game!`);
      break;
    }
  }
}

function displayResult(result) {
  gameResult.style.visibility = 'visible';
  message.innerText = result;
}

// Iteration 4: Restart function
// Restarts the game when the user clicks on the button restart i.e. play again
restart.onclick = () => {
  // Reset game state
  presentPlayer = 'O';
  xAttempts = [];
  oAttempts = [];
  click = 0;
  wonTheGame = 0;
  message.innerText = '';
  gameResult.style.visibility = 'hidden';

  // Clear the board
  boxElement.forEach((box) => {
    box.innerHTML = '';
  });

  // Reload the page (optional)
  history.go(0);
};