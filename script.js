'use strict';
let secretNumber;
let totalScore = 20;
let highScore = 0;
const numberDivObj = document.getElementsByClassName('number')[0];

function randomNumber() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
}
randomNumber();

function updateContent(className, message) {
  document.getElementsByClassName(className)[0].textContent = message;
}

function guessScore(guess) {
  console.log(secretNumber);
  if (totalScore > 1) {
    if (guess === secretNumber) {
      updateContent('message', 'Correct 🎉');
      updateContent('number', guess);
      document.body.style.backgroundColor = '#60b347';
      numberDivObj.style.width = '30rem';

      if (totalScore > highScore) {
        highScore = totalScore;
        updateContent('highscore', highScore);
      }
    } else {
      guess < secretNumber
        ? updateContent('message', 'Too Low!')
        : updateContent('message', 'Too High!');
      updateContent('score', --totalScore);
    }
  } else {
    updateContent('message', '😢 You lost the game!');
    updateContent('score', 0);
    document.body.style.backgroundColor = 'red';
  }
}

document
  .getElementsByClassName('check')[0]
  .addEventListener('click', function () {
    let inputOfGuess = document.getElementsByClassName('guess')[0].value;
    let guess = Number(inputOfGuess);
    if (inputOfGuess === '') {
      updateContent('message', 'No Number!');
    } else if (guess < 1 || guess > 20) {
      updateContent('message', 'Between 1 and 20');
    } else {
      guessScore(guess);
    }
  });
document
  .getElementsByClassName('again')[0]
  .addEventListener('click', function () {
    randomNumber();
    totalScore = 20;

    updateContent('message', 'Start guessing...');
    document.getElementsByClassName('guess')[0].value = '';
    updateContent('score', '20');

    updateContent('number', '?');
    numberDivObj.style.width = '15rem';
    document.body.style.backgroundColor = '#222';
  });
