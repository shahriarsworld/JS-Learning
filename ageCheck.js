let age = prompt("Please enter your age:");

age = Number(age);

// Check if the input is a valid number
if (isNaN(age)) {
  console.log("Please enter a valid number for age.");
} else {
  // Check if the person is eligible to vote
  if (age >= 18) {
    console.log("You are eligible to vote.");
  } else {
    console.log("You are not eligible to vote.");
  }
}
