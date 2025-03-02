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
