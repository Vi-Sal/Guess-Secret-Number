'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number'
console.log(document.querySelector('.message').textContent);


document.querySelector('.guess').value = 45;
console.log(document.querySelector('.guess').value);
*/
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1); 
function disMessage(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {
        // -IMPORTANT
        // document.querySelector('.message').textContent = '⚠️ No Number';
        disMessage('⚠️ No Number');
    }
    // When player win the game
    else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;

        // -IMPORTANT
        // document.querySelector('.message').textContent = '🎉 Correct Number! ';
        disMessage('🎉 Correct Number! ');
        highScore < score ? highScore = score : highScore = highScore;

        document.querySelector('.highscore').textContent = highScore;
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('body').style.backgroundColor = '#60b347';
    }  
    // When guess the wrong number
    else {  
        score--;
        if (score > 0) {
            document.querySelector('.score').textContent = score;

            // if (guess > secretNumber) {
            //     document.querySelector('.message').textContent =
            //     'Too high! 😒';
            // } else {
            //     document.querySelector('.message').textContent =
            //     'Too low! 😒';
            // }

            // -GOOD Refactoring code from above 
            document.querySelector('.message').textContent =
                guess > secretNumber ? 'Too high! 😒' : 'Too low! 😒';
        }
        else {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = 'Game over! 😏';
        }
    }
}); 

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    score = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';

    // document.querySelector('.message').textContent = 'Start Guessing...! 🎉';
    
    // -IMPORTANT Refactoring duplicate code from above
    disMessage('Start Guessing...! 🎉');
    document.querySelector('.score').textContent = score;  
});

