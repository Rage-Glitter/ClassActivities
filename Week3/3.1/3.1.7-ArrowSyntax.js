// refactor the functions below into arrow syntax
// function declaration
function myNumberFunction() {
  return ((2 ** 2 + 3) % 4) * 14;
}
// arrow syntax function
const myNumberFunctionConcise = () => ((2 ** 2 + 3) % 4) * 14; // these two functions now do the same thing
// arrow statement is implicitly returned, we do not have to write "return" for it to be returned.
const myNumberFunctionBlock = () => {
  return ((2 ** 2 + 3) % 4) * 14;
};
// function declaration
function greet(name) {
  return `Hello, ${name}`;
}
// arrow syntax
const greetConcise = name => "Hello, ${name}";

// function expression
const timeOfDayGreetConcise
const timeOfDayGreet = function(name, timeOfDay) {
};
// function declaration
return 'Hello, ${Name}, good ${time of day}';

// arrow syntax
function tripleAndHalf(num) {
  let triple = num * 3;
  return triple / 2;
}

//function declaration
function sumTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
}
8
