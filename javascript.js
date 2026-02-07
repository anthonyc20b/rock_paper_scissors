//let randomNumber = prompt("Enter test number:"); // - Used to manually test number ranges when 
// included with commenting out the below random number logic generator.

let randomNumber = Math.floor((Math.random()* 100)+ 2);
let humanScore = 0;
let computerScore = 0;
console.log(randomNumber);

function getComputerChoice() {
    let computerChoice = "";
    if (randomNumber <= 33) {
        computerChoice = "Rock";
    } else if (randomNumber >= 34 && randomNumber <= 67) {
        computerChoice = "Paper";
    } else if (randomNumber >= 68 && randomNumber <= 101) {
        computerChoice = "Scissors";
    } else {
        console.log("That is not a valid number!");
    }
    console.log (computerChoice);
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    console.log(humanChoice);
    return humanChoice;
}


function playRound (humanChoice, computerChoice){
    
}