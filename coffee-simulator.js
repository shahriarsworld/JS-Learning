const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const menu = ["espresso", "latte", "black"];
const stock = {
  espresso: true,
  latte: false,
  black: true,
};

const orders = [
  { customer: "Customer 1", wants: "latte" },
  { customer: "Customer 2", wants: "black" },
  { customer: "Customer 3", wants: "espresso" },
];

let score = 0;

function serveCustomer(index) {
  if (index >= orders.length) {
    console.log("Shift over.");
    console.log("Satisfied customers:", score, "out of", orders.length);
    rl.close();
    return;
  }

  const order = orders[index];
  console.log(`${order.customer} wants a ${order.wants}.`);
  rl.question("Do you want to serve it? (yes/no): ", (answer) => {
    const response = answer.toLowerCase();

    if (response !== "yes" && response !== "no") {
      console.log("Please answer yes or no.");
      serveCustomer(index); // Retry this customer
      return;
    }

    if (response === "yes") {
      if (stock[order.wants]) {
        console.log("Order served successfully.");
        score++;
      } else {
        console.log("Item is out of stock. Customer disappointed.");
      }
    } else {
      console.log("You refused to serve. Customer disappointed.");
    }

    serveCustomer(index + 1);
  });
}

console.log("Welcome to the Coffee Shop Order Simulator.");
console.log("Today's menu:", menu.join(", "));
console.log("Let's serve some customers.\n");

serveCustomer(0);
