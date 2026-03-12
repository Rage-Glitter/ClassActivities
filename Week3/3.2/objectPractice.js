const person = {
  name: "Alex",
  age: 28,

  hobbies: ["reading", "gaming", "hiking"],

  favoriteFoods: ["pizza", "tacos", "sushi"],

  address: {
    city: "Denver",
    state: "Colorado"
  }
};
console.log(person.name);
console.log(person.age);

console.log(person.address.city);
console.log(person.favoriteFoods[1]);
console.log(`My name is ${person.name} and I live in ${person.address.city}.`);


