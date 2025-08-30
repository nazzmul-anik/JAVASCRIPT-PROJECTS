const buttons = document.querySelectorAll('button');
const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const result = playRound(button.id, computerPlay());
        resultEl.innerText = result;
    });
});

function computerPlay() {
    const choice = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
}

function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        playerScoreEl.textContent = playerScore;
        return "You Win! " + userChoice.toUpperCase() + " beats " + computerChoice.toUpperCase();
    } else {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return "You Lose! " + computerChoice.toUpperCase() + " beats " + userChoice.toUpperCase();
    }
}