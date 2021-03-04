'use strict';

var secondi = document.getElementById('secondi');
var timerSec = 30;

document.body.addEventListener('keypress', (event) => {
    switch(event.key) {
        case '+':
            timerSec += 10;            
            if (!timer) { // timer è indefinito o nullo
                startTimer();
            }
            break;
        case '-':
            timerSec -= 5;
            break;
        default:
            console.warn(event.key);
    }
});

var timer;
function startTimer() {
    secondi.style.color = '';
    timer = setInterval(() => {
        secondi.innerHTML = timerSec; // aggiorniamo il DOM
        if (timerSec > 0) {
            timerSec--;
        } else {
            secondi.style.color = 'red';
            clearInterval(timer);
            timer = undefined;
        }
    }, 1000);  // every 1 sec
}