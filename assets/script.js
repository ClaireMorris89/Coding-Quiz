var timer = document.querySelector('#timer');
var startButton = document.querySelector('.start-btn');
var timeLeft=60;
var quizOver=false;
var highScoresDiv = document.querySelector('#highScores');
var highScoresLink = document.querySelector('a');
var quiz=document.querySelector('#quiz');
var questionOne = document.querySelector('#question1');
var questionTwo = document.querySelector('#question2');
var questionThree = document.querySelector('#question3');
var questionFour = document.querySelector('#question4');
var questionFive = document.querySelector('#question5');
var submitOne = document.querySelector('#submit-btn-1');
var submitTwo = document.querySelector('#submit-btn-2');
var submitThree = document.querySelector('#submit-btn-3');
var submitFour = document.querySelector('#submit-btn-4');
var submitFive = document.querySelector('#submit-btn-5');
var scoresDiv = document.querySelector('#scores');
var firstName = document.querySelector('#nameInput');
var highScoresBtn = document.querySelector('#high-scores-btn');
var timeInterval;
var score = 0;

// shows timer, running every second; once timer runs out, numbers disappear and quiz disappears 
function countdown(){
 timeInterval = setInterval (function () {
       if (timeLeft > 1) {
          timer.textContent = timeLeft + ' seconds left';
            timeLeft--;
      } else if (timeLeft === 1) {
            timer.textContent = timeLeft + ' second left';
          timeLeft--;
       } else if (timeLeft===0) {
            clearInterval(timeInterval);
            timer.textContent = 'time is up!';
            quiz.hidden=true;
        }

       }, 1000);
    };

// removes the hidden quiz div and displays question 1
function question1 (){
    quiz.removeAttribute('hidden');
    questionOne.removeAttribute('hidden');
};

//checks if the correct answer is checked in number 1; if not, deduct 5 seceonds.
// hide question one and show question 2
function question2(){
    if (document.getElementById('q1c').checked===false) {
        timeLeft-=5;
    };
    questionOne.hidden=true;
    questionTwo.removeAttribute('hidden');
};

//checks if the correct answer is checked in number 2; if not, deduct 5 seceonds.
// hide question two and show question 3
function question3(){
    if (document.getElementById('q2a').checked===false) {
        timeLeft-=5;
    };
    questionTwo.hidden=true;
    questionThree.removeAttribute('hidden');
};

//checks if the correct answer is checked in number 3; if not, deduct 5 seceonds.
// hide question 3 and show question 4
function question4(){
    if (document.getElementById('q3a').checked===false){
        timeLeft-=5;
    };
    questionThree.hidden=true;
    questionFour.removeAttribute('hidden');
};

//checks if the correct answer is checked in number 4; if not, deduct 5 seceonds.
// hide question 4 and show question 5
function question5(){
    if (document.getElementById('q4b').checked===false){
        timeLeft-=5;
    };
    questionFour.hidden=true;
    questionFive.removeAttribute('hidden');
    score=timeLeft;
};

//checks if the correct answer is checked in number 5; if not, deduct 5 seceonds.
// hide question 5
//clears timer
//hides quiz div
//shows input for entering name for high score
function quizEnd(){
    if (document.getElementById('q5d').checked===false){
        timeLeft-=5;
    };
    questionFive.hidden=true;
    quizOver=true;
    clearInterval(timeInterval);
     timer.textContent = 'time is up!';
    quiz.hidden=true;
    scoresDiv.removeAttribute('hidden');
    //localStorage.setItem('score', timeLeft);
};
//HELP HERE
//need to refresh when I press start or it resaves all old data 
//wont hover until i'm on the end of my quiz 

//saves each score as object w/ name and score=timeleft
//gets parsed array of high scores (or empty array) from local storage
//pushes each new score into the high score array
// stringify new array to save again in local storage
function saveName(event){
    event.preventDefault();
    var highScores = JSON.parse(localStorage.getItem('high-scores'))|| [];
    var newScore = {
        score: score,
        name: firstName.value,
    }
    highScores.push(newScore);
    localStorage.setItem('high-scores', JSON.stringify(highScores));
    listHighScores();
    return ;
}

//runs for loop to create li element and list each high score in the high scores local storage 
function listHighScores(){
    var highScores= JSON.parse(localStorage.getItem('high-scores'))|| [];
    for (i=0; i<highScores.length; i++){
        var li= document.createElement('li');
        li.innerHTML=highScores[i].name + ' = ' + highScores[i].score;
        highScoresDiv.appendChild(li);
        scoresDiv.hidden=true;
    };
};




//when "start button" is pressed, the countdown (timer) function as well as question 1 begins
function startQuiz(){
    countdown();
    question1();
    };


 // each event listener is connected to a submit button on a question and checks the input for the answer on the previous question
startButton.addEventListener('click', startQuiz);
submitOne.addEventListener('click', question2);
submitTwo.addEventListener('click', question3);
submitThree.addEventListener('click', question4);
submitFour.addEventListener('click', question5);
submitFive.addEventListener('click', quizEnd);
highScoresBtn.addEventListener('click', saveName);


