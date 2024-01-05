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
        showScore(score-value);
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
        question: "Who is considered the father of Computer Science?",
        options: ["Yoshua Bengio", "Geoffrey Hinton", "Allan Turing", "Elon Musk"],
        correctAnswer: "Allan Turing"
    },
    {
        question: "Who is the first Computer Programmer?",
        options: ["Ada Lovelace", "Gottfried Leibniz", "Elon Musk", "Bill Gates"],
        correctAnswer: "Ada Lovelace"
    },
    {
        question: "Who is considered the MOther of the Internet?",
        options: ["Anita Borg", "Grace Hopper", "Ada Lovelace", "Radia Perlman"],
        correctAnswer: "Radia Perlman"
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
    {
        question: "What does HTML stand for?",
        options: ["Hyper Trainer Marking Language", "Hyper Text Marketing Language", "Hyper Text Markup Language", "Hyper Text Markup Leveler"],
        correctAnswer: "Hyper Text Markup Language"
    },
    // Add more questions here...
];
function checkAnswer(event) {
    const selectedAnswer = event.target.textContent;
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
        score+=15;
        console.log("this is my score", score);
        currentscore.textContent= score;
    } else {
        timeRemaining -= 10; // Subtract 10 seconds for incorrect answers
    }

    currentQuestionIndex++;

    // Check if all questions have been answered
    if (currentQuestionIndex === questions.length) {
        // Quiz is finished, show the final score
        currentscore.textContent= score;
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



