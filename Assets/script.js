const beginButton = document.getElementById("Begin")
const nextButton = document.getElementById("next")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-choices")
const optionsElement = document.getElementById("options")
const currentscore = document.getElementById("score-value")
let timer;
let timeEl = document.querySelector(".timer-text")
let timeRemaining;
let score=0;


function startQuiz() {
    timeRemaining = 60;
    let quizEl = document.querySelector(".quiz")
    quizEl.classList.remove("hide")
    startTime();
    renderQuestion();
    if (timeRemaining <= 0) {
        clearInterval(timer);
        showScore();
    }
}

function startTime() {
    timer = setInterval(function() {
        timeRemaining--;
        timeEl.textContent = timeRemaining
        if(timeRemaining === 0){
            clearInterval(timer)
            window.alert("Game Over!")
            // want to call the a function to activate when the game is over
            // functionName()
        }
    }, 1000)
}

const questions = [
    {
        question: "What is the capital of Texas?",
        options: ["Dallas", "Houston", "El Paso", "Austin"],
        correctAnswer: "Austin"
    },
    {
        question: "What is Americas biggest state?",
        options: ["Florida", "Alaska", "Texas", "California"],
        correctAnswer: "Alaska"
    },
    {
        question: "What is the largest animal in the world?",
        options: ["Blue Whale", "Giraffe", "Shark", "Bear"],
        correctAnswer: "Blue Whale"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Who was our first president?",
        options: ["George Jefferson", "George Washington", "Abraham Lincoln", "Barack Obama"],
        correctAnswer: "George Washington"
    },
    // Add more questions here...
];
function checkAnswer(event) {
    const selectedAnswer = event.target.textContent;
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
        score+=10;
        console.log("this is my score", score);
        currentscore.textContent= score;
    } else {
        timeRemaining -= 10; // Subtract 10 seconds for incorrect answers
    }

    currentQuestionIndex++;

    // Check if all questions have been answered
    if (currentQuestionIndex === questions.length) {
        // Quiz is finished, show the final score
        showScore();
    } else {
        // Render the next question
        renderQuestion();
    }
}

function renderQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    // Update the question text
    // const questionElement = document.getElementById("question");
    questionElement.textContent = currentQuestion.question;

    // Update the answer options
    // optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option) => {
        const optionElement = document.createElement("button");
        optionElement.textContent = option;
        optionElement.addEventListener("click", checkAnswer);
        optionsElement.appendChild(optionElement);
    });
}

let currentQuestionIndex = 0;
let beginButtonEl = document.querySelector("#start-quiz")
beginButtonEl.addEventListener("click", startQuiz)



