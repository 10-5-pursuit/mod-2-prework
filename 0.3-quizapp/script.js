const questions = [
    {
        question: "Which is larget animal in the world?", 
        answers: [ 
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "In what country did the first Starbucks open outside of North America", 
        answers: [ 
            {text: "Peru", correct: false},
            {text: "UK", correct: false},
            {text: "Japan", correct: true},
            {text: "Rusia", correct: false},
        ]
    },
    {
        question: "In a website browser address bar, what does “www” stand for? ", 
        answers: [ 
            {text: "We Work Webs", correct: false},
            {text: "Wide Web Works", correct: false},
            {text: "Wide Wide Web", correct: false},
            {text: "World Wide Web", correct: true},
        ]
    },
    {
        question: "Who was the first televised President? ", 
        answers: [ 
            {text: "Franklin D. Roosevelt", correct: true},
            {text: "Harry S. Truman", correct: false},
            {text: "John F Kennedy", correct: false},
            {text: "Herbert Hoover", correct: false},
        ]
    },
];

const questionElement = document.getElementById('question');
const anwersButtons = document.getElementById('anwers-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex =0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question

    currentQuestion.answers.forEach(anws =>{
        const button = document.createElement('button');
        button.innerHTML = anws.text;
        button.classList.add('btn');
        anwersButtons.appendChild(button);
        if(anws.correct){
            button.dataset.correct = anws.correct;
        }
        button.addEventListener('click',selectAnswer);
    })
}
function resetState(){
    nextButton.style.display = 'none';
    while(anwersButtons.firstChild){
        anwersButtons.removeChild(anwersButtons.firstChild)
    }
}
function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === 'true'
    if(isCorrect){
        selectBtn.classList.add('correct');
        score++;
    }else{
        selectBtn.classList.add('incorrect');
    }
    Array.from(anwersButtons.children).forEach(button=>{
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;    
    });
    nextButton.style.display = 'block';
}
function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'block';
}

nextButton.addEventListener('click', ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton(); 
    }else{
        startQuiz();
    }
})
startQuiz();

