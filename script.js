const rps = ['rock', 'paper', 'scissors'];

// Returns a random integer between 0 and max (excluded)
let getRandomInt = max => Math.floor(Math.random() * max);

function getComputerChoice() {
    return rps[getRandomInt(rps.length)];
}

function getHumanChoice() {
    let choice = prompt("What are you playing?");

    if( rps.includes(choice) )
        return choice;

    console.log("Invalide choice, have at it again!");
        
    // Try again    
    return getHumanChoice();
}

console.log(getHumanChoice());