'use strict';

//////////// DOM selectors //////////////
const button = document.querySelector('.check');
const msg = document.querySelector('.message');
const input = document.querySelector('.guess');
const score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');
const body = document.querySelector('body');
const againButton = document.querySelector('.again');
const numberHidden = document.querySelector('.number');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let highScore = 0;

const x = function () {
    const guess = Number(input.value);
    console.log(guess, typeof guess);

    if (!guess) {
        msg.textContent = 'No number!';
    } else if (guess === secretNumber) {
        msg.textContent = 'Correct !!!';
        numberHidden.textContent = secretNumber;
        highscore.textContent = score.textContent;
        body.style.backgroundColor = '#60b347'
        numberHidden.style.width = '30rem';
        if (score.textContent > highScore) {
            highScore = score.textContent;
            highscore.textContent = highScore;
        }
    } else if (guess < secretNumber) {
        if (score.textContent > 1) {
            msg.textContent = 'Too low';
            score.textContent--;
        } else {
            score.textContent = 0;
            msg.textContent = 'Game Over.'
            body.style.backgroundColor = '#FF0000';
        }
    } else if (guess > secretNumber) {
        if (score.textContent > 1) {
            msg.textContent = 'Too high';
            score.textContent--;
        } else {
            score.textContent = 0;
            msg.textContent = 'Game Over.';
            body.style.backgroundColor = '#FF0000';
        }
    }
};

const y = function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);
    score.textContent = '20';
    msg.textContent = 'Start guessing...';
    body.style.backgroundColor = '#222';
    numberHidden.textContent = '?';
    numberHidden.style.width = '15rem';
    input.value = '';
}

button.addEventListener('click', x);
againButton.addEventListener('click', y);

