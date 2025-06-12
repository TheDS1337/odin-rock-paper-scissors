const rps = ['rock', 'paper', 'scissors'];

// Returns a random integer between 0 and max (excluded)
let getRandomInt = (max) => Math.floor(Math.random() * max);
let getComputerChoice = () => rps[getRandomInt(rps.length)];

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function playRound(humanChoice, computerChoice)
{
    switch( humanChoice ) {
        case 'rock':
            if( computerChoice === 'paper' ) {
                results.textContent = "You lose! Paper beats Rock!";
                computerScore++;
            } else if( computerChoice === 'scissors' ) {
                results.textContent = "You win! Rock beats Scissors!";
                humanScore++;
            } else
                results.textContent = "Tie, you read my mind.";

            break;
        case 'paper':
            if( computerChoice === 'scissors' ) {
                results.textContent = "You lose! Scissors beats paper!";
                computerScore++;
            } else if( computerChoice === 'rock' ) {
                results.textContent = "You win! Paper beats Rock!";
                humanScore++;
            } else
                results.textContent = "Tie, you read my mind.";

            break;

        case 'scissors':
            if( computerChoice === 'rock' ) {
                results.textContent = "You lose! Rock beats Scissors!";
                computerScore++;
            } else if( computerChoice === 'paper' ) {
                results.textContent = "You win! Scissors beats Paper!";
                humanScore++;
            } else
                results.textContent = "Tie, you read my mind.";
            
            break;
    }

    roundsPlayed++;

    if( humanScore === 5 ) {
        results.textContent = `After ${roundsPlayed} intense rounds, the human bean wins ${humanScore} to ${computerScore}.`;

        // Reset score for the next game
        roundsPlayed = humanScore = computerScore = 0;
    } else if( computerScore === 5 ) {
        results.textContent = `After ${roundsPlayed} intense rounds, Elon wins ${computerScore} to ${humanScore}.`;
        roundsPlayed = humanScore = computerScore = 0;
    }
}

// Quering body here for event delegation purposes
//  I just don't want to create a listener for each button element.
const buttons = document.querySelector("body");

buttons.addEventListener("click", (event) => {
    playRound(event.target.id, getComputerChoice());
});

const results = document.querySelector("#results");