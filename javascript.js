/* First we must get the computers choice. We have the formula determine a random number, then each possibility has a 
assigned number range. When the if/else statement runs it picks a number, finds which range is true, then assigns
that outcome string into the variable computerChoice, then displaying that to the user and saving it for later.
And of course finally displaying the computer choice to the user. */

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // Used to get a random number between 1 and 102, extra 2 is added for an equal 33 number chances for each outcome
    let randomNumber = Math.floor((Math.random()* 100)+ 2);
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
/* Now we need to get input from the human, right now the program is built off of case sensitivity, something that would 
need to be factored in later but could be done by changing whatever the result loggeed to humanChoice is by converting to
lower case. This now gets the answer from the prompt, stores it for later in humanChoice, and displays the choice to the user
*/

function getRoundChoice (){
    // let getRoundChoice = prompt("How many rounds would you like to play?"); Feature removed temporarily to set at just 5 rounds flat.
    let getRoundChoice = 5;
    let roundChoice = parseInt(getRoundChoice);
    // console.log("The human would like to play: ", roundChoice, " rounds!");
    return roundChoice;
}

let roundsPlayed = 0;
const roundChoice = getRoundChoice();

const scoreDisplay = document.querySelector("#score");
const computerChoiceDisplay = document.querySelector("#computer");
const humanChoiceDisplay = document.querySelector("#human");
const winnerDisplay = document.querySelector("#winner");
const roundDisplay = document.querySelector("#round");

const humanChoiceButtons = document.querySelectorAll(".btn-human");
    for (let button of humanChoiceButtons) {
    button.addEventListener("click", () => {
    
    const humanChoice = button.textContent;
    console.log("The human selected: ", humanChoice)

    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    scoreDisplay.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
    computerChoiceDisplay.textContent = "Computer choice: " + computerChoice;
    humanChoiceDisplay.textContent = "Select your choice: " + humanChoice;
    roundDisplay.textContent = "Current Round: " + (roundsPlayed + 1);

    roundsPlayed++;

    if (roundsPlayed === roundChoice) {
        console.log("Game over!");

    function gameWinner(){
        if (humanScore > computerScore) {
            winnerDisplay.textContent = "The winner is: You!";
        } else if (computerScore > humanScore) {
            winnerDisplay.textContent = "The winner is: Computer!";
        } else if (humanScore === computerScore){
            winnerDisplay.textContent = "The winner is: A tie!";
        }
            }
    gameWinner();

    humanChoiceButtons.forEach(button => {
        button.disabled = true;
    });
            }

        });}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();
// playRound(humanSelection, computerSelection);

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

/* Play game houses all of the logic. It takes the stored return values of computerChoice and humanChoice in as parameters and
compares them through each of the possible odds of rock, paper scissors. Then displaying the outcome via a string in the console
and incrementing either the human or computer score.
*/
// function playGame() {}

/*This is used to actually call the result. We are calling on the function result of getHumanChoice and getComputerChoice
here so that we can then call on playround to give us the round of each game. */

/* This for loop is used to allow us to have multiple rounds. Right now limited to 5 rounds, the round starts at 0
is then checked at what number round we are currently at, and incremented after each round. Repeating the playGame function
that is being called and outputting in the console what the current standings are. 
*/

/* Finally this function of course decides who the game winner is. By taking the humanScore and computerScore
variables and comparing them to each other to decide if the user wins or loses and outputs to the console the message. 
Finally at the end calling to run the gameWinner function.
*/