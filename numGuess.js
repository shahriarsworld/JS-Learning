const readline = require("readline");

// Create interface to read user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Generate a random number between 1 and 10
const targetNumber = Math.floor(Math.random() * 10) + 1;
let maxAttempts = 3;

// Function to ask for guess
function askGuess(attempt) {
  rl.question(`Attempt ${attempt}: Enter a number (1 to 10): `, (input) => {
    const guess = parseInt(input);

    // Input validation
    if (isNaN(guess) || guess < 1 || guess > 10) {
      console.log("Invalid input. Please enter a number between 1 and 10.");
      askGuess(attempt); // retry same attempt
      return;
    }

    // Game logic with if-else
    if (guess === targetNumber) {
      console.log("Correct! You guessed the number!");
      rl.close();
    } else if (guess < targetNumber) {
      console.log("📉 Too low!");
    } else {
      console.log("📈 Too high!");
    }

    // Next attempt or game over
    if (guess !== targetNumber) {
      if (attempt < maxAttempts) {
        askGuess(attempt + 1);
      } else {
        console.log(`Game Over! The number was ${targetNumber}.`);
        rl.close();
      }
    }
  });
}

// Start the game
console.log("🎮 Welcome to the Number Guessing Game!");
askGuess(1);
