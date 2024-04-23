// ==== DATA ====
let input;
let computerScore = 0;
let playerScore = 0;

// ==== DOM ELEMENTS  ====

const inputEl = document.getElementById("playerChoice");
const buttonEl = document.getElementById("shoot");
const resetButtonEl = document.getElementById("reset");
const scoreEl = document.getElementById("scores");


// ==== EVENT LISTENER ====


buttonEl.addEventListener("click", () => {
    input = inputEl.value.toLowerCase();
    if(input!== "rock" && input !== "paper" && input !== "scissors"){
        return alert("Please write rock, paper or scissors!");
    }

    gameLogic(input, computerTurn());
    scoreEl.innerText = `Player ${playerScore} - Computer ${computerScore}`;
});
resetButtonEl.addEventListener("click", () => {
    computerScore = 0;
    playerScore = 0;
    alert("Scores are reset - You loser...");
    scoreEl.innerText = `Player ${playerScore} - Computer ${computerScore}`;
});

// ==== FUNCTION ====
function computerTurn(){
    const choices = ["rock", "paper", "scissors"];
    const number = (Math.floor(Math.random()*3));
    alert(`Computer has chosen: ${choices[number].toUpperCase()}!`);
    return choices[number];
}

function gameLogic(player, computer){

    if(player === "rock" && computer === "paper" || 
    player === "paper" && computer === "scissors" ||
    player === "scissors" && computer === "rock"){
        computerScore ++;
        alert(`Computer wins!!! Computer ${computerScore} - Player ${playerScore}`);
    } else if(player === "rock" && computer === "scissors" ||
    player === "paper" && computer === "rock" ||
    player === "scissors" && computer === "paper"){
        playerScore++;
        alert(`Player wins!!! Player ${playerScore} - Computer ${computerScore}`);
    } else{
        alert(`It is a draw!!! Player ${playerScore} - Computer ${computerScore}`);
    }

}