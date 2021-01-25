'use strict';

////////////////////////////////// GUESS MY NUMBER /////////////////////////////

////////// functions
function setSecretNumber(max) {
  return Math.trunc(Math.random() * max) + 1;
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function displayNumber(number) {
  document.querySelector('.number').textContent = number;
}

function setBackgroundColor(color) {
  document.querySelector('body').style.backgroundColor = color;
}

function setNumberWidth(width) {
  document.querySelector('.number').style.width = width;
}

function setScore(score) {
  document.querySelector('.score').textContent = score;
}

///////// variables
let secretNumber = setSecretNumber(20);

let score = 20;

let highscore = 0;

/////// handling events
/////// check input number
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('🚫 No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');

    displayNumber(secretNumber);

    setBackgroundColor('#60b347');

    setNumberWidth('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;

      setScore(score);
    } else {
      displayMessage('💥 You lost the game');

      setBackgroundColor('orange');

      setScore(0);
    }
  }
});

/////// repeat game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  secretNumber = setSecretNumber(20);

  setScore(score);

  displayNumber('?');

  displayMessage('Start guessing...');

  document.querySelector('.guess').value = '';

  setBackgroundColor('#222');

  setNumberWidth('15rem');
});
