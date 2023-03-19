var timer = document.querySelector('#timer');
var startButton = document.querySelector('.start-btn');
var questionSelector = 0;
var answerButton=document.querySelector('.answer');
var timeLeft=10;

var questions = [
    {
        question:"question 1",  
        answer1:"answer a",
        answer2:"answer b",
        answer3:"answer c",
        answer4:"answer d",
        correct:"answer a",
    },
    {
        question:"question 2",  
        answer1:"answer a",
        answer2:"answer b",
        answer3:"answer c",
        answer4:"answer d",
        correct:"answer a",
    },
    {
        question:"question 3",  
        answer1:"answer a",
        answer2:"answer b",
        answer3:"answer c",
        answer4:"answer d",
        correct:"answer a",
    },
];

//how to make sure it runs next question/answer set? increment questionSelector?
function questionsPopulator(){
    document.getElementById('question').textContent=questions[questionSelector].question;
    document.getElementById('op1').textContent=questions[questionSelector].answer1;
    document.getElementById('op2').textContent=questions[questionSelector].answer2;
    document.getElementById('op3').textContent=questions[questionSelector].answer3;
    document.getElementById('op4').textContent=questions[questionSelector].answer4;
};


//get help on how to input info from selected button
function evaluateAnswer() {
    if (answerButton.disabled === questions.correct){
    questionSelector++; //(increment questionSelector to run next question)
    questionsPopulator();
}  else {
    timeLeft--; //subtract time for being wrong(how to subtract 3 seconds??)
    questionSelector++;//(increment questionSelector to run next question)
    questionsPopulator();
}
};


function countdown(){
    var timeInterval = setInterval (function (){
        if (timeLeft > 1) {
            timer.textContent = timeLeft + ' seconds left';
            timeLeft--;
        } else if (timeLeft === 1) {
            timer.textContent = timeLeft + ' second left';
            timeLeft--;
        } else {
            timer.textContent = 'time is up!';
            clearInterval(timeInterval);
        }

        }, 1000);
    };

    console.log(questions);

    function startQuiz(){
        countdown();
        questionsPopulator();
    }

startButton.addEventListener("click", startQuiz);
answerButton.addEventListener("click",evaluateAnswer);
