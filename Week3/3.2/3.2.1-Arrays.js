// create an Array using an Array literal
const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn"];
const numbers = ["1", "2"]
// access the 1st item in the Array
console.log(planets[0]);
// access the last item in the Array
console.log(planets[4]);
// print the length of the Array
console.log(`The number of planets is ${planets.length}`);
// use the length property to access the last item in the Array
console.log(planets[planets.length - 1]);
// with for...of, loop over the Array, modify the value and add to a different Array
for (let planet of planets) {
  console.log(planet);
}
