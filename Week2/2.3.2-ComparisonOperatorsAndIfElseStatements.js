let age = 17;

// Write an If Else statement

// if age is greater than or equal to 25,
// console.log "Renting a car is more affordable."
// if age is less than 25
// console.log "Renting a car is very expensive."

if (age >= 25) {
  console.log("Renting a car is more affordable");
} else {
  console.log("Renting a car is very expensive");
}
if (age <= 25) {
  console.log("You are too young to rent a car");
} else {
  console.log("You are old enough to rent a car");
}
// Chaining if statements: if - else if - ... - else

// if age is greater than or equal to 25,
// console.log "Renting a car is more affordable."
// if age is greater than or equal to 18
// console.log "Renting a car is very expensive."
// if age is less than 18
// console.log "You cannot legally rent a car."
if (age >= 25) {
  console.log("Renting a car is more affordable");
} else if (age >= 18) {
  console.log("Renting a car is very expensive.");
} else {
  console.log("You cannot legally cannot rent a car.");
}

let day = 2;
if (day === 1) {
  console.log("Today is Monday");
} else if (day === 2) {
  console.log("Today is Tuesday");
} else if (day === 3) {
  console.log("Today is Wednesday");
}

switch (day) {
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  default:
    console.log("Today is another day");
}
