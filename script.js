const rps = ['rock', 'paper', 'scissors'];

// Returns a random integer between 0 and max (excluded)
let getRandomInt = (max) => Math.floor(Math.random() * max);
let getComputerChoice = () => rps[getRandomInt(rps.length)];

function getHumanChoice() {
    let choice = prompt("What are you playing?");

    choice = choice.toLowerCase();

    if( rps.includes(choice) )
        return choice;

    console.log("Invalide choice, have at it again!");
        
    // Try again    
    return getHumanChoice();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    switch( humanChoice ) {
        case 'rock':
            if( computerChoice === 'paper' ) {
                console.log("You lose! Paper beats Rock!");
                computerScore++;
            } else if( computerChoice === 'scissors' ) {
                console.log("You win! Rock beats Scissors!");
                humanScore++;
            } else
                console.log("Tie, you read my mind.");

            break;
        case 'paper':
            if( computerChoice === 'scissors' ) {
                console.log("You lose! Scissors beats paper!");
                computerScore++;
            } else if( computerChoice === 'rock' ) {
                console.log("You win! Paper beats Rock!");
                humanScore++;
            } else
                console.log("Tie, you read my mind.");

            break;

        case 'scissors':
            if( computerChoice === 'rock' ) {
                console.log("You lose! Rock beats Scissors!");
                computerScore++;
            } else if( computerChoice === 'paper' ) {
                console.log("You win! Scissors beats Paper!");
                humanScore++;
            } else
                console.log("Tie, you read my mind.");
            
            break;
    }
}

function playGame(rounds = 5) {
    for( let i = 1; i <= 5; i++ ) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log(`After ${rounds} intense round${rounds == 1 ? '' : 's'}, the winner is....`);

    if( humanScore === computerScore )
        console.log(`None, nobody, nessuno... that was a close one!`);
    else
        console.log(`${humanScore > computerScore ? 'The humanoid' : 'Electron-powered giga chad'} with a score of ${humanScore > computerScore ? humanScore : computerScore} against ${humanScore > computerScore ? computerScore : humanScore}`);
}

playGame();