function makeBurger() {
  console.log("Cooking the burger...");
  console.log("Burger is ready!");
}

console.log("Ordering a burger...");
makeBurger();
console.log("Enjoy your meal!");


function fetchUserData(callback) {
  console.log("Fetching user data...");

  setTimeout(() => {
    console.log("User data received!");
    callback();
  }, 2000);
}

fetchUserData(() => {
  console.log("Displaying user profile...");
});
