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
//function after the reset button is pressed
function resetPressed(){
    const parent = document.body.querySelector('.parent');
    const resetButton = document.body.querySelector('.resetButton');
    computerScores = 0;
    playerScores = 0;
    parent.removeChild(resetButton);
    cS.textContent = "Computer Score";
    pS.textContent = "Player Score";
}
//function to call when the round is finished
function activateReset(){
    const parent = document.body.querySelector('.parent');
    let resetButton = document.createElement('button');
    resetButton.classList.add("resetButton");
    resetButton.textContent = 'Reset Button';
    const extraButton = document.body.querySelector('.resetButton');
    if(extraButton === null){
        parent.appendChild(resetButton);
    }
    resetButton.addEventListener('click', resetPressed);
}
//rules for single round of Rock paper scissors
function playRound(playerSelection, computerSelection) {
    if (playerScores < 5 && computerScores < 5) {
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
            cS.textContent = `Computer Score: ${computerScores}`;
        }
        else {
            //making sure if the player input is valid
            alert('Please choose either a rock, scissors, or paper');
        }
    }
    else {
        if (playerScores === 5) {
            pS.textContent = `Congratulations you won!`;
            cS.textContent = `Please hit the reset button in order to play again`;
        }
        else if (computerScores === 5) {
            pS.textContent = `Sorry, you lost the game.`;
            cS.textContent = `Please hit the reset button in order to play again`;
        }
        else {
            pS.textCotent = `Error?`
        }
        activateReset();
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

/*playerScores = 0;
    computerScores = 0;
    cS.textContent = `Computer Score: ${computerScores}`;
    pS.textContent = `Player Score: ${playerScores}`;*/