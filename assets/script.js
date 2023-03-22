






























// var timer = document.querySelector('#timer');
// var startButton = document.querySelector('.start-btn');
// var questionSelector = 0;
// var timeLeft=50;
// var score = 0;

// //var buttonEl = document.getElementsByClassName('answer');
// // var answerA = document.getElementById("op1");
// // var answerB = document.getElementById("op2");
// // var answerC = document.getElementById("op3");
// // var answerD = document.getElementById("op4");

// //should be queryselectorAll but doesn't work with event listener
// //var answerButton=document.querySelector('.answer');
// // var answerButtons=document.querySelectorAll('.answer');

// var questions = [
//     {
//         question:"question 1",  
//         answer1:"answer a",
//         answer2:"answer b",
//         answer3:"answer c",
//         answer4:"answer d",
//         correct:"answer a",
//     },
//     {
//         question:"question 2",  
//         answer1:"answer a",
//         answer2:"answer b",
//         answer3:"answer c",
//         answer4:"answer d",
//         correct:"answer b",
//     },
//     {
//         question:"question 3",  
//         answer1:"answer a",
//         answer2:"answer b",
//         answer3:"answer c",
//         answer4:"answer d",
//         correct:"answer c",
//     },
//     {
//         question:"question 4",  
//         answer1:"answer a",
//         answer2:"answer b",
//         answer3:"answer c",
//         answer4:"answer d",
//         correct:"answer c",
//     },
//     {
//         question:"question 5",  
//         answer1:"answer a",
//         answer2:"answer b",
//         answer3:"answer c",
//         answer4:"answer d",
//         correct:"answer c",
//     },
// ];


// //how to make sure it runs next question/answer set? increment questionSelector?
// function questionsPopulator(){
//     document.getElementById('question').textContent=questions[0].question;
//     document.getElementById('op1').value=questions[0].answer1;
//     document.getElementById('op2').value=questions[0].answer2;
//     document.getElementById('op3').value=questions[0].answer3;
//     document.getElementById('op4').value=questions[0].answer4;
// };


// //get help on how to input info from selected button
// function evaluateAnswer(event){
//    var buttonEl = event.target;

//    if (buttonEl.value = questions.question[0].correct){
//     console.log('correct');
//    } else {
//     console.log('wrong');
//    }
   
    
// };

// // how to stop it when it runs out of questions to pull??

// function countdown(){
//     var timeInterval = setInterval (function (){
//         if (timeLeft > 1) {
//             timer.textContent = timeLeft + ' seconds left';
//             timeLeft--;
//         } else if (timeLeft === 1) {
//             timer.textContent = timeLeft + ' second left';
//             timeLeft--;
//         } else {
//             timer.textContent = 'time is up!';
//             clearInterval(timeInterval);
//         }

//         }, 1000);
//     };


//     function startQuiz(){
//         countdown();
//         questionsPopulator();
//         };


// startButton.addEventListener("click", startQuiz);

//adding eventlistener to each button???
/*document.querySelectorAll('.answer').forEach(answer =>
    answer.addEventListener('click', evaluateAnswer)
    );*/

 //doesn't work with queryselectorALl
//answerButtons.addEventListener("click", function (){  }); 

// answerA.addEventListener("click",evaluateAnswer);
// answerB.addEventListener("click",evaluateAnswer);
// answerC.addEventListener("click",evaluateAnswer);
// answerD.addEventListener("click",evaluateAnswer);

// buttonEl.addEventListener('click',evaluateAnswer);