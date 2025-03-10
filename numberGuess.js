

// Generate a random number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

let guess = prompt("Guess a number between 1 and 10:");

// Convert input to a number
guess = Number(guess);

// Check if the guess is correct
if (isNaN(guess)) {
  console.log("Please enter a valid number!");
} else if (guess === secretNumber) {
  console.log("Congrats! You guessed the correct number.");
} else {
  console.log(`Wrong guess! The correct number was ${secretNumber}.`);
}
