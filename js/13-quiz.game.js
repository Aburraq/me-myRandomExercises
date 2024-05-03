// === DATA ===
let questionsAndAnswers  = [
    {
        question: "What is the boiling point of water in Fahrenheit?",
        choices: ["212°F", "100°F", "176°F", "32°F"],
        answer: "212°F"
    },
    {
        question: "In which year did the American Civil War end?",
        choices: ["1863", "1865", "1870", "1859"],
        answer: "1865"
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        choices: ["Marie Curie", "Rosalind Franklin", "Dorothy Hodgkin", "Florence Nightingale"],
        answer: "Marie Curie"
    },
    {
        question: "What is the largest organ in the human body?",
        choices: ["Liver", "Heart", "Skin", "Brain"],
        answer: "Skin"
    },
    {
        question: "Who is known as the father of modern physics?",
        choices: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Max Planck"],
        answer: "Albert Einstein"
    },
    {
        question: "Which country is the largest by land area?",
        choices: ["Russia", "China", "United States", "Canada"],
        answer: "Russia"
    },
    {
        question: "What is the chemical symbol for gold?",
        choices: ["Go", "Au", "Gl", "Ag"],
        answer: "Au"
    },
    {
        question: "What is the speed of light in a vacuum?",
        choices: ["299,792,458 meters per second", "300,000,000 meters per second", "280,000,000 meters per second", "200,000,000 meters per second"],
        answer: "299,792,458 meters per second"
    },
    {
        question: "Who developed the theory of relativity?",
        choices: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
        answer: "Albert Einstein"
    },
    {
        question: "What is the rarest blood type among humans?",
        choices: ["A", "B", "AB", "O"],
        answer: "AB"
    }
];


let score = 0;
let questionNumber = 0;


// === DOM ===
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const scoreEl = document.getElementById("score");
const buttonEl = document.querySelector("button");


// === EVENT LISTENER ===
buttonEl.addEventListener("click", () => {
    populateQuestion();
    buttonEl.style.display="none";
});
choicesEl.addEventListener("click", async(e) => {
    

    if(e.target.innerText == questionsAndAnswers[questionNumber].answer){
         e.target.classList.add("right-answer");
        score++;
        questionNumber++;
        
        setTimeout(() => {
            choicesEl.innerHTML = "";
            populateQuestion();

        }, 900); 


    } else if(!e.target.innerText.match(questionsAndAnswers[questionNumber].answer)){
        e.target.classList.add("wrong-answer");
        score--;
    }

    const listElements = document.getElementsByTagName("li");
    scoreEl.innerText = score;
}); 


// === FUNCTIONS ===
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function populateQuestion(){

    if (questionNumber >= questionsAndAnswers.length) {
        buttonEl.style.display="block";
        buttonEl.innerText = "Cheers!";
        buttonEl.addEventListener("click", () =>{confetti()});
        questionEl.classList.add("text-center");
        return questionEl.innerText = "You have completed the Quizzle!";            
    }

    const currentQuestion = questionsAndAnswers[questionNumber];
    let choices = shuffleArray(currentQuestion.choices);
    questionEl.innerText = questionsAndAnswers[questionNumber].question;
    
    questionEl.textContent = currentQuestion.question;
    choicesEl.innerHTML = "";
    choices.forEach(choice => {
        let li = document.createElement("li");
        li.textContent = choice;
        choicesEl.appendChild(li);
    });
    
}

// === Manipulating the Data ===
questionsAndAnswers = shuffleArray(questionsAndAnswers);
