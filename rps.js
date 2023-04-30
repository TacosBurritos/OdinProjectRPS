//computer selection rng for rock, paper, and scissors
function getComputerChoice() {
    let rpsNumber = Math.floor(Math.random() * 3);
    if (rpsNumber === 0) {
        return 'rock';
    }
    else if (rpsNumber === 1) {
        return 'scissors';
    }
    else {
        return 'paper';
    }
}
//rules for single round of Rock paper scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a draw!");
    }
    //in case of winning
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) {
        playerScores++;
        pS.textContent = `Player Score: ${playerScores}`;
    }
    //for losing
    else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'scissors' && computerSelection === 'rock') ||
        (playerSelection === 'paper' && computerSelection === 'scissors')) {
        computerScores++;
        cS.textContent = `Player Score: ${computerScores}`;
    }
    else {
        //making sure if the player input is valid
        alert('Please choose either a rock, scissors, or paper');
    }
}
let playerScores = 0;
let computerScores = 0;
const pS = document.body.querySelector('.playerScore');
const cS = document.body.querySelector('.compScore');
const buttons = document.body.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.innerText.toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
    })
}
);