'use strict';

//Initiate necessary variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highest = 0;

//Display message function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Function for button CLICK
const func1 = function () {
  if (score > 0) {
    const guess = Number(document.querySelector('.guess').value);
    //Usually when we take an input, it is a string
    //When the number is inappropriate
    if (guess <= 0) {
      displayMessage('Enter a number that is greater than 0');
    } else if (guess === secretNumber) {
      displayMessage('You fucking got it!!!');
      //Set the background color
      document.querySelector('body').style.backgroundColor = '#44ff4e';
      //Set the h1
      document.querySelector('h1').textContent = 'YOU GOT IT!';
      //Set the h1 font size
      document.querySelector('h1').style.fontSize = '6rem';
      // Disable the button
      document.querySelector('.check').disabled = true;
      document.querySelector('.guess').disabled = true;

      //Check if it is highest
      if (score > highest) {
        highest = score;
        document.querySelector('.highscore').textContent = highest;
      }
      //Wrong number
    } else if (guess !== secretNumber) {
      score = score - 1;
      document.querySelector('.score').textContent = score;
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
    }
    //When it is game over
  } else {
    //Set h1
    document.querySelector('h1').textContent = 'GAME OVER!!';
    //Set messsage
    displayMessage('Try again!!');
    //Set backgound color
    document.querySelector('body').style.backgroundColor = '#ee4f6f';
    //Set h1 font size
    document.querySelector('h1').style.fontSize = '6rem';
    // Disable the button
    document.querySelector('.check').disabled = true;
    document.querySelector('.guess').disabled = true;
  }
};

//Set a listner to button CLICK
document.querySelector('.check').addEventListener('click', func1);

//Function for the button AGAIN
const func2 = function () {
  //Get a new secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.number').textContent = secretNumber;
  //Reset the score
  score = 20;
  document.querySelector('.score').textContent = score;
  //Reset the message
  displayMessage('Start guessing again!');
  //Reset the background color
  document.querySelector('body').style.backgroundColor = '#c5c3c3';
  //Reset the h1
  document.querySelector('h1').textContent = 'Guess My Number!';
  //Reset the h1 font size
  document.querySelector('h1').style.fontSize = '4rem';
  //Reset the guess
  document.querySelector('.guess').value = '';
  //Enable the buttons
  document.querySelector('.check').disabled = false;
  document.querySelector('.guess').disabled = false;
};

//Set a listner to button AGAIN
document.querySelector('.again').addEventListener('click', func2);
