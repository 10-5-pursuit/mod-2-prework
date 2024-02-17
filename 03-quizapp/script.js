const questions = [
    {
      question: "How do you declare an empty array in JavaScript?",
      answers: [
        { text: "let myArray = [];", correct: true },
        { text: "let myArray = {};", correct: false },
        { text: "let myArray = new Array();", correct: false },
        { text: "let myArray = [ ];", correct: true },
      ]
    },
    {
      question: "How do you access the first element of an array?",
      answers: [
        { text: "let firstElement = myArray[1];", correct: false },
        { text: "let firstElement = myArray[0];", correct: true },
        { text: "let firstElement = myArray.first();", correct: false },
        { text: "let firstElement = myArray.firstElement();", correct: false },
      ]
    },
    {
      question: "How do you add an element to the end of an array?",
      answers: [
        { text: "myArray.push('newElement');", correct: true },
        { text: "myArray.unshift('newElement');", correct: false },
        { text: "myArray.append('newElement');", correct: false },
        { text: "myArray.add('newElement');", correct: false },
      ]
    },
    {
      question: "What method is used to remove the last element from an array?",
      answers: [
        { text: "myArray.pop();", correct: true },
        { text: "myArray.shift();", correct: false },
        { text: "myArray.removeLast();", correct: false },
        { text: "myArray.deleteLast();", correct: false },
      ]
    },
    {
      question: "What is the correct way to define an object in JavaScript?",
      answers: [
        { text: "let myObject = ();", correct: false },
        { text: "let myObject = {};", correct: true },
        { text: "let myObject = new Object();", correct: false },
        { text: "let myObject = {key: 'value'};", correct: true },
      ]
    },
    {
      question: "How do you access a property of an object?",
      answers: [
        { text: "myObject.property;", correct: true },
        { text: "myObject['property'];", correct: true },
        { text: "myObject.getProperty();", correct: false },
        { text: "myObject.accessProperty();", correct: false },
      ]
    },
    {
      question: "What is the difference between 'let', 'const', and 'var' in JavaScript?",
      answers: [
        { text: "'let' is block-scoped, 'const' is used for constants, 'var' is function-scoped.", correct: true },
        { text: "'let' is used for constants, 'const' is block-scoped, 'var' is function-scoped.", correct: false },
        { text: "'let' is function-scoped, 'const' is block-scoped, 'var' is used for constants.", correct: false },
        { text: "'let' is block-scoped, 'const' is function-scoped, 'var' is used for constants.", correct: false },
      ]
    },
    {
      question: "What does the 'forEach' method do in JavaScript?",
      answers: [
        { text: "Iterates over the elements of an array and executes a function for each element.", correct: true },
        { text: "Adds a new element to the end of an array.", correct: false },
        { text: "Removes the last element from an array.", correct: false },
        { text: "Finds the index of a specified element in an array.", correct: false },
      ]
    },
    {
      question: "How do you check if a variable is an array in JavaScript?",
      answers: [
        { text: "typeof myArray === 'array';", correct: false },
        { text: "Array.isArray(myArray);", correct: true },
        { text: "myArray instanceof Array;", correct: true },
        { text: "myArray.isArray();", correct: false },
      ]
    },
    {
      question: "What is the purpose of the 'map' method in JavaScript?",
      answers: [
        { text: "Creates a new array with the results of calling a provided function on every element in the array.", correct: true },
        { text: "Removes the last element from an array.", correct: false },
        { text: "Adds a new element to the end of an array.", correct: false },
        { text: "Finds the index of a specified element in an array.", correct: false },
      ]
    }
  ];
  

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();