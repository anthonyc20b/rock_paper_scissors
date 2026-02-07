// let randomNumber = prompt("Enter test number:"); - Used to manually test number ranges when 
// included with commenting out the below random number logic generator.
 
let randomNumber = Math.floor(Math.random()* 100);
console.log(randomNumber);

function getComputerChoice() {
    if (randomNumber <= 33) {
        console.log("Rock");
    } else if (randomNumber >= 34 && randomNumber <= 66) {
        console.log("Paper");
    } else if (randomNumber >= 67 && randomNumber <= 99) {
        console.log("Scissors");
    } else {
        console.log("That is not a valid number!");
    }
}

getComputerChoice()