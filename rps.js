

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

    //making sure the player input is valid
    //** for some reason the code gets stuck here, check logic**/
    /*if (playerSelection !== 'rock' || playerSelection !== 'scissors' || playerSelection !== 'paper') {
        console.log('Please enter either a rock, scissors, or paper')
    }*/
    //in case of tie
    if (playerSelection === computerSelection) {
        console.log("It's a draw!");
    }
    //in case of winning
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    }
    //for losing
    else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'scissors' && computerSelection === 'rock') ||
        (playerSelection === 'paper' && computerSelection === 'scissors')) {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    }
    else {
        //making sure if the player input is valid
        console.log('Please enter either a rock, scissors, or paper');
    }
}

function game() {
    let i = 0;
    while (i < 5) {
        //variables for the rps (one user input and another computer generated)
        let playerSelection = prompt("Please enter rock, paper, or scissors to play."); //changing all to lower case so it's case insensitive;
        //calling the function to collect the value for the cpu generated value
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        i++;
    }
    //*****fix this part of the code so that it runs 5 times****
}