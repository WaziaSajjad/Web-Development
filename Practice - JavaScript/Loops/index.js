//Q1
let multiArray = [[], [], []];
//Q2
let matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];
//Q3
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//Q4
let number = +prompt("Enter a number to show its multiplication table:");
let length = +prompt("Enter length of multiplication table:");
for (let i = 1; i <= length; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}
//Q5
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
//Q6
// a. Counting
console.log("Counting:");
for (let i = 1; i <= 15; i++) {
  console.log(i);
}

// b. Reverse counting
console.log("Reverse Counting:");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// c. Even
console.log("Even:");
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

// d. Odd
console.log("Odd:");
for (let i = 1; i <= 19; i += 2) {
  console.log(i);
}

// e. Series
console.log("Series:");
for (let i = 2; i <= 20; i += 2) {
  console.log(i + "k");
}
//Q7
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Welcome to Wazia's Bakery. What do you want to order?").toLowerCase();

if (A.includes(userInput)) {
  alert(`${userInput} is available at index ${A.indexOf(userInput)} in our bakery.`);
} else {
  alert(`We are sorry. ${userInput} is not available in our bakery.`);
}
//Q8
let B = [24, 53, 78, 91, 12];
let largest = B[0];

for (let i = 1; i < B.length; i++) {
  if (B[i] > largest) {
    largest = B[i];
  }
}
console.log("The largest number is " + largest);
//Q9
let C = [24, 53, 78, 91, 12];
let smallest = C[0];

for (let i = 1; i < C.length; i++) {
  if (C[i] < smallest) {
    smallest = C[i];
  }
}
console.log("The smallest number is " + smallest);
//Q10
for (let i = 5; i <= 100; i += 5) {
  console.log(i);
}
