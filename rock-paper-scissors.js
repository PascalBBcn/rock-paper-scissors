function playRound(playerSelection, computerSelection) {
    return playerSelection + computerSelection;
    
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
console.log(getComputerChoice());


