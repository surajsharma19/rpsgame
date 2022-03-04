// function for return a random value which can be rock or paper or scissors
function computerPlay() {
    let choice = ['rock', 'paper', 'scissors']
    let random = choice[Math.floor(Math.random() * choice.length)]
    
    return random;
}

let playerScore = 1;
let computerScore = 1;

// function for playing a single round
function playRound(PlayerSelection, computerSelection) {
    if ( (PlayerSelection == 'rock' && computerSelection == 'scissors') || (PlayerSelection == 'scissors' && computerSelection === 'paper') || (PlayerSelection == 'paper' && computerSelection == 'rock') ) {
        return `you win! ${PlayerSelection} beats ${computerSelection} by ${playerScore++}`;
    }
    else if ( PlayerSelection == computerSelection) {
        return 'draw';
    }
    else {
        return `you lose! ${computerSelection} beats ${PlayerSelection} by ${computerScore++}`;
    }
}

function winner() {
    if (playerScore >= 3) {
        console.log(`player wins by ${playerScore}`);
    }
    else if(computerScore >= 3){
        console.log(`computer wins by ${computerScore}`);
    }
    else {
        console.log('draw');
    }
}


//function to play game 
function game() {
    const computerSelection = computerPlay();
    
    for (let i = 0; i < 5; i++) {
        const PlayerSelection = prompt('enter the input'.toLowerCase());

        console.log(playRound(PlayerSelection, computerSelection));
    }
    console.log(winner());
}




console.log(game());
