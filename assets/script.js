var timer = document.querySelector('#timer');
var startButton = document.querySelector('.start-btn');

var questionOne = document.querySelector('.question1');
var answerOneA = document.querySelector('#1op1');

// make questions/answers show up one at a time



startButton.addEventListener("click", function(){
    var timeLeft = 60;
    var timeInterval = setInterval (function (){
        if (timeLeft > 1) {
            timer.textContent = timeLeft + ' seconds left';
            timeLeft--;
        } else if (timeLeft === 1) {
            timer.textContent = timeLeft + ' second left';
            timeleft--;
        } else {
            timer.textContent = 'time is up';
            clearInterval(timeInterval);
        }

        }, 1000);
});