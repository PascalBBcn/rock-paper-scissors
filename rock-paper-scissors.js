function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection === computerSelection) {
        result = "Tie"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        result = "You lose! paper beats rock."
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        result = "You win! rock beats scissors."
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result = "You win! paper beats rock."
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "You lose! scissors beats paper."
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "You lose! rock beats scissors."
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = "You win! scissors beats paper."
    }

    return "You:" + playerSelection + " NPC:" + computerSelection + "  " + result;

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(prompt("rock, paper, or scissors?"), computerSelection));



function getComputerChoice() {
    let randomChoice = Math.floor(Math.random()* 3) + 1;
    if (randomChoice === 1) {
        return "rock"
    } else if (randomChoice === 2) {
        return "paper"
    }
    else {
        return "scissors"
    }
}



