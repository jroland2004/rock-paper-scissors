let humanScore = 0;
let computerScore = 0;


function getHumanChoice() {
    let input = prompt("Enter Rock, Paper or Scissors and See if You Can Beat the Computer!");
    console.log(input);
}

console.log(getHumanChoice());

function getComputerChoice() {
   let result = Math.floor(Math.random() * 3);
    if (result === 0 ) {
        console.log('Rock');
    } else if (result === 1) {
        console.log('Paper');
    } else console.log('Scissors');
}

console.log(getComputerChoice());

function playRound(humanChoice, computerChoice) {

    const humanChoice = getHumanChoice();
    const computerChoice = getHumanChoice();

    if ()
    
}



