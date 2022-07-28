let maxNumber = parseInt(prompt("Enter your MaxNumber:"));
while (!maxNumber) {
    maxNumber = parseInt(prompt("Enter a valid number!!"));
}

const mysteryNum = Math.floor(Math.random() * maxNumber) + 1;
console.log(mysteryNum);

let guess = parseInt(prompt("Try to guess the mystery number!!!Enter a number:"));
let numberOfTry = 1;

while (parseInt(guess) !== mysteryNum) {
    if (guess === "q" || guess === "quit") break;
    numberOfTry++;
    if (guess > mysteryNum) {
        guess = (prompt("Too high!! try a lower number"));
    } else {
        guess = (prompt("Too low!! Try a higher Number"));
    }
}
if (guess === "q" || guess === "quit") {
    console.log("You quit! bye bye")
} else {
    console.log(`You got it . It took you ${numberOfTry} guesses`);
}