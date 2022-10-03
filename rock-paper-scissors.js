
// THIS IS THE ORIGINAL CODE USING CONSOLE INSTEAD OF A UI:

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// let playerScore = 0;
// let computerScore = 0;


// function game() {
//     for (let roundNum = 0; roundNum < 5; roundNum++) {
//         let results = playRound(prompt("rock, paper, or scissors?").toLowerCase(), getComputerChoice());
//         console.log(roundNum);
//         console.log(results); 
//         }
//     if (playerScore > computerScore) {
//         console.log("You win!");
//     } else if (playerScore < computerScore) {
//         console.log("You lose!");
//     } else {
//         console.log("It's a tie.");
//     }
// }
//     console.log(game());


// function playRound(playerSelection, computerSelection) {
//     let result;
//     if (playerSelection === computerSelection) {
//         result = "Tie"
//     } else if (playerSelection === "rock" && computerSelection === "paper") {
//         result = "You lose this round! paper beats rock."
//         computerScore += 1;
//     } else if (playerSelection === "rock" && computerSelection === "scissors") {
//         result = "You win this round! rock beats scissors."
//         playerScore += 1;
//     } else if (playerSelection === "paper" && computerSelection === "rock") {
//         result = "You win this round! paper beats rock."
//         playerScore += 1;
//     } else if (playerSelection === "paper" && computerSelection === "scissors") {
//         result = "You lose this round! scissors beats paper."
//         computerScore += 1;
//     } else if (playerSelection === "scissors" && computerSelection === "rock") {
//         result = "You lose this round! rock beats scissors."
//         computerScore += 1;
//     } else if (playerSelection === "scissors" && computerSelection === "paper") {
//         result = "You win this round! scissors beats paper."
//         playerScore += 1;
    
//     }

//     return "You:" + playerSelection + " NPC:" + computerSelection + "  " + result + " PS: " + playerScore + " CS: " + computerScore;
    

// }

// //console.log(playRound(prompt("rock, paper, or scissors?").toLowerCase(), computerSelection));



// function getComputerChoice() {
//     let randomChoice = Math.floor(Math.random()* 3) + 1;
//     if (randomChoice === 1) {
//         return "rock"
//     } else if (randomChoice === 2) {
//         return "paper"
//     }
//     else {
//         return "scissors"
//     }
// }








let playerSelection;
const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  
    button.addEventListener('click', () => {
    gameResult.textContent = "";
    function game() {
            for (let roundNum = 0; roundNum < 40; roundNum++) {
                let results = playRound(playerSelection = button.id, getComputerChoice());
                console.log(results);
                break;
                }
                if (playerScore === 5) {
                    const gameResult = document.querySelector('#gameResult');
                    gameResult.style.cssText = 'color: blue;';
                    gameResult.textContent = "YOU WON THE GAME!";
                    reset();    
                } else if (computerScore === 5) {
                    const gameResult = document.querySelector('#gameResult');
                    gameResult.style.cssText = 'color: blue;';
                    gameResult.textContent = "YOU LOST THE GAME!";
                    reset();
                }
        }
            game();

    function reset() {
        playerScore = 0;
        computerScore = 0;
        
        
    } 
         
    function playRound(playerSelection = button.id, computerSelection) {
        let result;
       
        if (playerSelection === computerSelection) {
            result = "Tie"
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            result = "You lose this round! paper beats rock."
            computerScore += 1;
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            result = "You win this round! rock beats scissors."
            playerScore += 1;
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            result = "You win this round! paper beats rock."
            playerScore += 1;
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            result = "You lose this round! scissors beats paper."
            computerScore += 1;
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            result = "You lose this round! rock beats scissors."
            computerScore += 1;
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            result = "You win this round! scissors beats paper."
            playerScore += 1;
        
        }
        const resultContainer = document.querySelector('#resultContainer');
        resultContainer.textContent = "|You: " + playerSelection + " NPC: " + computerSelection + "|" + "  " + result + " PS: " + playerScore + " CS: " + computerScore;;

        return "You: " + playerSelection + " NPC: " + computerSelection + "  " + result + " PS: " + playerScore + " CS: " + computerScore;
    }
    
    
    });
});


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


