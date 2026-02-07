console.log("Hello World!");

let randomNumber = Math.floor(Math.random()* 100);
console.log(randomNumber);

function getComputerChoice() {
    if (randomNumber <= 33) {
        console.log("Rock");
    }
}

getComputerChoice()