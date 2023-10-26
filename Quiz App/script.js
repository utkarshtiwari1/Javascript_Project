const Questions = [

    {
        question: "what is the full form of TCP?",
        answer: [
            {text: "Transmitter Connection Protocol", correct: false},
            {text: "Transmission Control Protocol", correct: true},
            {text: "Transducer control Protocol", correct: false},
            {text: "Transmitter convertor Protocol", correct: false},
            
        ]
    },
    {
        question: "which is the smallest country in the world?",
        answer: [
            {text: "Monacco", correct: false},
            {text: "Macau", correct: false},
            {text: "Australia", correct: false},
            {text: "vatican City", correct: true},
        ]
    },
    {
        question: "who wrote the novel pride and prejudice?",
        answer: [
            {text: "Jane Austen", correct: true},
            {text: "Charles Dickens", correct: false},
            {text: "Luna Arthur", correct: false},
            {text: "Christan Larry", correct: false},
        ]
    },
    {
        question: "who composed the national anthem of india?",
        answer: [
            {text: "Mahatma Gandhi", correct: false},
            {text: "Bankim Chandra Chatterjee", correct: false},
            {text: "Rabindranath Tagore", correct: true},
            {text: "Devendra Nath Tagore", correct: false},
        ]
    }
];


const questionsrc = document.getElementById("questions");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-button");

let curr_ques_idx = 0;
let score = 0;

function startQuiz() {
    curr_ques_idx = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let curr_ques = Questions[curr_ques_idx];
    let ques_No = curr_ques_idx + 1;
    questionsrc.innerHTML = ques_No + ". " + curr_ques.question;

    curr_ques.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAns);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAns(event) {
    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect){
        selectedButton.classList.add("correct");
        score++;
    }
    else{
        selectedButton.classList.add("incorrect")
    }

    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionsrc.innerHTML = `Your scored ${score} out of ${Questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block"
}

function handleNextButton() {
    curr_ques_idx++;
    if (curr_ques_idx < Questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (curr_ques_idx < Questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})


startQuiz();



