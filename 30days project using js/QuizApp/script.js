const questions =[
    {
        questions: "which is the largest animal in the word?",
        answers: [
          {text: "shark", correct: false},
          {text: "elephant", correct: false},
          {text: "blue whale", correct: true},
          {text: "giraff", correct: false},
        ]
    },
    {
        questions: "which is the largest animal in the word?",
        answers: [
          {text: "shark", correct: false},
          {text: "elephant", correct: false},
          {text: "blue whale", correct: true},
          {text: "giraff", correct: false},
        ]
    },
    {
    
        questions: "which is the largest animal in the word?",
        answers: [
          {text: "shark", correct: false},
          {text: "elephant", correct: false},
          {text: "blue whale", correct: true},
          {text: "giraff", correct: false},
        ]
    },
    {
        questions: "which is the largest animal in the word?",
        answers: [
          {text: "shark", correct: false},
          {text: "elephant", correct: false},
          {text: "blue whale", correct: true},
          {text: "giraff", correct: false},
        ]
    },
    {
        questions: "which is the largest animal in the word?",
        answers: [
          {text: "shark", correct: false},
          {text: "elephant", correct: false},
          {text: "blue whale", correct: true},
          {text: "giraff", correct: false},
      ]
      },
    {
        questions: "which is the largest animal in the word?",
        answers: [
          {text: "shark", correct: false},
          {text: "elephant", correct: false},
          {text: "blue whale", correct: true},
          {text: "giraff", correct: false},
        ]
    },
    {
        questions: "which is the largest animal in the word?",
        answers: [
          {text: "shark", correct: false},
          {text: "elephant", correct: false},
          {text: "blue whale", correct: true},
          {text: "giraff", correct: false},
        ]
    },
    {
        questions: "which is the largest animal in the word?",
        answers: [
          {text: "shark", correct: false},
          {text: "elephant", correct: false},
          {text: "blue whale", correct: true},
          {text: "giraff", correct: false},
        ]
    },
    {
        questions: "which is the largest animal in the word?",
        answers: [
          {text: "shark", correct: false},
          {text: "elephant", correct: false},
          {text: "blue whale", correct: true},
          {text: "giraff", correct: false},
        ]
    },
    {
        questions: "which is the largest animal in the word?",
        answers: [
          {text: "shark", correct: false},
          {text: "elephant", correct: false},
          {text: "blue whale", correct: true},
          {text: "giraff", correct: false},
        ]
    }  
];
const questionElement =  document.getElementById("question");
const answeButton = document.getElementById("answer-butttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0 ;
let score = 0 ;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
     resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo =currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ',' + currentQuestion.questions;


    currentQuestion.answers.forEach(answer =>{
        const button =document.createElement("button");
        button.innerHTML = answe.text;
        button.classList.add("btn");
        answerButton.appendchild(button);
        if(answe.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
 function resetState(){
    nextButton.style.display ="none";
    while(answerButton.firstchild){
        answeButtons.removeChild(answerButtons.firstChild);

    }
 }
 function selectAnswer(e){
    const selectedbtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons,children),foreach(buttton =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.diasbled = true;
    });
    nextButton.style.display = "block";
 }
 function showScore(){
    resetState();
    questionElement.innerHTML= "you scored ${score} out of {questions.length}"
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block"
 }
 function handelNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length)
    {
       showQuestion();
    }else{
        showScore();
    }
 };



 nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handelNextButton();
    }else{
        startQuiz();
    }
 })
 startQuiz();