'use strict';
let score = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

// GENERATING RANDOM NUMBER TO BE COMPARED
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// FUNCTIONALITY OF CHECK BUTTON
document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // When there is no input
  // If no number is inputed, guess will be false. so 'not-guess'(!guess) will be true, therefore the condition will hold
  if (!guess) {
    displayMessage('No number ⛔');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number 🎉 ');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // scenario where the current highscore gets added to the previous score
    // highScore += score;
    // document.querySelector('.highscore').textContent = highScore;
    //
  } else if (guess !== secretNumber) {
    if (score > 1) {
      if (guess > secretNumber) {
        displayMessage('Too high!');
      } else {
        displayMessage('Too Low!');
      }
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game! 😟');
      document.querySelector('.score').textContent = 0;
    }
  }

  //  PREVIOUS CODE
  // When guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game! 😟';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game! 😟';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// FUNCTIONALITY OF AGAIN BUTTON
const again = document.querySelector('.again');
again.addEventListener('click', () => {
  displayMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  document.querySelector('.score').textContent = score;
  let guess = document.querySelector('.guess');
  guess.value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
