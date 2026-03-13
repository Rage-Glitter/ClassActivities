// myName = "chels";

// // Create a function called greet() that accept one parameter (name) when called prints "Hell, {name}"//

// function greet(name) {
//   console.log(`Hello, ${name}`);
// }

// greet(myName);

// function sum(x, y) {
//   console.log(x + y);
// }
// sum(2, 2);

// function shoes(shoe1, shoe2) {
//   console.log(`My favorite shoes are ${shoe1} and ${shoe2}.`);
// }

// shoes("nike", "reebok");
// shoes("addidas", "chacos");

// function divide(x, y) {
//   console.log(x / y);
// }
// divide(10, 2);

// function welcome(business, food) {
//   console.log(`Welcome to ${business}, our most popular food is ${food}.`);
// }
// welcome("Applebees", "steak");

// const numbers = [1, 2, 3, 4, 5];
// const toppings = ["cheese", "pepperoni", "sausage"];

// console.log(toppings[2]);
// console.log(`We have ${toppings.length} toppings`);

// for (let topping of toppings) {
//   console.log(topping);
// }

// let sum = 0;

// for (let number of numbers) {
//   sum += number;
// }
// console.log(sum);

// const movies = ["terminator", "titanic"];
// console.log(movies[0]);
// console.log(movies[1]);

// const toppings = ["pepperoni", "sausage", "hamburger"];
// console.log(toppings[0]);
// console.log(toppings[1]);

// for (let topping of toppings) {
//   console.log(topping);
// }

//

// function findSum(array) {
//   let sum = 0;

//   for (let number of array) {
//     sum += number;
//   }
//   console.log(sum);
// }

// findSum(numbers);

// const numbers2 = [5, 7, 15, 32, 55, 90, 101];
// findSum(numbers2);

// function addNumbers(...array) {
//   let sum = 0;

//   for (let number of array) {
//     sum += number;
//   }
//   console.log(sum);
// }

// addNumbers(1, 2, 3, 4, 5, 6);

// function printToppings(toppings) {
//   for (let topping of toppings) {
//     console.log(topping);
//   }
// }

// printToppings(toppings);
// printToppings(["pepperoni", "pineapple", "mushroom"]);

// function printToppings(toppings) {
//   let message = "Our pizza toppings are ";
//   for (let topping of toppings) {
//     message += topping;
//     message += ", ";
//   }
//   console.log(message);
// }

// printToppings(["pepperoni", "pineapple", "mushroom"]);

// const movies = ["Halloween", "Wednesday", "SAW"];
// function printMovies(movies) {
//   for (let movie of movies) {
//     console.log(movie);
// }
// }
// function print(movies) {
//   for (let movie of movies) {
//     console.log(movie)

//   }
// }
// print(movies)

// function printToppings(toppings) {}

// printToppings(["pepperoni", "pineapple", "mushroom"]);

// const pizza = {
//   name: "supreme",
//   cost: 5.99,
//   toppings: ["mushroom", "pepper", "sausage"]
// };

// console.log(pizza.name);
// console.log(pizza["const"]);
// console.log(pizza.toppings[1]);

// const movie = {
//   title: "no country for old men",
//   rating: "R",
//   releaseDate: "2007"
// };
// function movieInfo(movie) {
//   console.log(
//     `The movie ${movie.title} is rated ${movie.rating} and was released in ${movie.releaseDate}`
//   );
// }
// movieInfo(movie);

// const address = {
//   city: "Puxico",
//   state: "Missouri",
//   zipCode: "63960"
// };
// function printAddress(address) {
//   console.log(
//     `The city is ${address.city}, the state is ${address.state}, and the zipcode is ${address.zipCode}.`
//   );
// }
// printAddress(address);

// const favoriteThings = {
//   purse: "Coach",
//   flower: "sunflower",
//   book: "Think and Grow Rich"
// }
// function printFavorites(favorites){
//   console.log(`My favorite purse is ${"favorites.purse"}, my favorite flower is ${favorites.flower}, my favorite book is ${favorites.book}.`)

// }
// favorites= (favoriteThings)

function sum(x, y) {
  return x + y;
}
const result = sum(2, 2);
console.log(result);

function makePizza(name, cost, toppings) {
  const pizza = {
    name: name,
    cost: cost,
    toppings: toppings
  };
  return pizza;
}
console.log(makePizza("supreme", 5.99, ["sausage", "pepper", "onion"]));
