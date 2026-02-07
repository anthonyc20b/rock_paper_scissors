//let randomNumber = prompt("Enter test number:"); // - Used to manually test number ranges when 
// included with commenting out the below random number logic generator. - Remove at launch

let randomNumber = Math.floor((Math.random()* 100)+ 2);

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
    console.log ("The computer selected: ", computerChoice);
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    console.log("The human selected: ", humanChoice);
    return humanChoice;
}

function playGame() {

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice){
    if (humanChoice === "Rock" && computerChoice === "Paper"){
        console.log("You lose! Paper covers rock!");
        computerScore++;
    } else if (humanChoice === "Rock" && computerChoice === "Rock"){
        console.log("It's a tie!");
    } else if (humanChoice === "Rock" && computerChoice === "Scissors"){
        console.log("You win! Rock smashes scissors!");
        humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock"){
        console.log("You win! Paper covers rock!");
        humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Paper"){
        console.log("It's a tie!");
    } else if (humanChoice === "Paper" && computerChoice === "Scissors"){
        console.log("You lose! Scissors cuts paper!");
        computerScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Rock"){
        console.log("You lose! Rock smashes scissors!");
        computerScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper"){
        console.log("You win! Scissors cuts paper!");
        humanScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Scissors"){
        console.log("It's a tie!");
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
}

for (let roundNumber = 0; roundNumber < 5; roundNumber++){
    playGame();
}