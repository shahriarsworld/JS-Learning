const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const coffeeMenu = ["espresso", "latte", "cappuccino"];
let score = 0;
const rounds = 3;

function playRound(round) {
  const correctCoffee = coffeeMenu[Math.floor(Math.random() * coffeeMenu.length)];

  rl.question(`Round ${round}: Guess the coffee type (espresso, latte, cappuccino): `, (answer) => {
    const guess = answer.toLowerCase();

    if (!coffeeMenu.includes(guess)) {
      console.log("Invalid coffee type. Try again.");
      playRound(round); // Retry the same round
      return;
    }

    if (guess === correctCoffee) {
      console.log("Correct!");
      score++;
    } else {
      console.log(`Wrong. The correct answer was ${correctCoffee}.`);
    }

    if (round < rounds) {
      playRound(round + 1);
    } else {
      console.log("Game over.");
      console.log(`Your score: ${score} out of ${rounds}`);
      rl.close();
    }
  });
}

console.log("Welcome to the Coffee Guessing Game!");
playRound(1);
