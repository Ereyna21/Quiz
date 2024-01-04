const beginButton = document.getElementById("Begin")
const nextButton =  document.getElementById("next")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const anserButtonsElement = document.getElementById("answer-choices")

let timeEl = document.querySelector(".time")

function startQuiz(){
    let quizEl = document.querySelector(".quiz")
    quizEl.classList.remove("hide")
}

let beginButtonEl = document.querySelector("#start-quiz")
beginButtonEl.addEventListener("click", startQuiz)



