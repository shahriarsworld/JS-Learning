// Object Destructuring
const movie = { title: "Inception", year: 2010, director: "Christopher Nolan" };

const { title, year, director } = movie;

console.log(`${title} was released in ${year}, directed by ${director}.`);

// Array Destructuring
const genres = ["Action", "Sci-Fi", "Thriller"];

const [firstGenre, secondGenre] = genres;

console.log(`Popular genres: ${firstGenre}, ${secondGenre}.`);

// Function Parameter Destructuring
function printMovieDetails({ title, year }) {
    console.log(`${title} was released in ${year}.`);
}

printMovieDetails(movie);

// Default Values in Destructuring
const anotherMovie = { title: "The Prestige" };

const { title: movieTitle, year: releaseYear = "Unknown" } = anotherMovie;

console.log(`${movieTitle} was released in ${releaseYear}.`);

// Swapping Variables
let a = "Batman";
let b = "Superman";

[a, b] = [b, a];

console.log(`Now, a: ${a}, b: ${b}`);
