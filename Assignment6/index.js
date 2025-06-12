// Q1 - Positive Integer Analysis
let num1 = +prompt("Q1: Enter a positive integer:");
document.writeln(`<h3>Q1 - Positive Integer</h3>`);
document.writeln(`<p>Number: ${num1}</p>`);
document.writeln(`<p>Round off: ${Math.round(num1)}</p>`);
document.writeln(`<p>Floor: ${Math.floor(num1)}</p>`);
document.writeln(`<p>Ceil: ${Math.ceil(num1)}</p>`);

// Q2 - Negative Floating Point Analysis
let num2 = +prompt("Q2: Enter a negative floating point number:");
document.writeln(`<h3>Q2 - Negative Floating Point</h3>`);
document.writeln(`<p>Number: ${num2}</p>`);
document.writeln(`<p>Round off: ${Math.round(num2)}</p>`);
document.writeln(`<p>Floor: ${Math.floor(num2)}</p>`);
document.writeln(`<p>Ceil: ${Math.ceil(num2)}</p>`);

// Q3 - Absolute Value
let num3 = +prompt("Q3: Enter any number to find its absolute value:");
document.writeln(`<h3>Q3 - Absolute Value</h3>`);
document.writeln(`<p>Absolute value of ${num3} is ${Math.abs(num3)}</p>`);

// Q4 - Dice Simulation
let dice = Math.floor(Math.random() * 6) + 1;
document.writeln(`<h3>Q4 - Dice Simulation</h3>`);
document.writeln(`<p>Dice value: ${dice}</p>`);

// Q5 - Coin Toss
let coin = Math.random() < 0.5 ? "Heads" : "Tails";
document.writeln(`<h3>Q5 - Coin Toss</h3>`);
document.writeln(`<p>Coin toss result: ${coin}</p>`);

// Q6 - Random Number Between 1 and 100
let randomNum = Math.floor(Math.random() * 100) + 1;
document.writeln(`<h3>Q6 - Random Number</h3>`);
document.writeln(`<p>Random number (1-100): ${randomNum}</p>`);

// Q7 - Parse Weight Input
let weightInput = prompt("Q7: Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");
let weight = parseFloat(weightInput);
document.writeln(`<h3>Q7 - Weight Input</h3>`);
document.writeln(`<p>Your weight is: ${weight} kilograms</p>`);

// Q8 - Secret Number Guessing Game
let secret = Math.floor(Math.random() * 10) + 1;
let guess = +prompt("Q8: Guess the secret number (1 to 10):");
document.writeln(`<h3>Q8 - Secret Number Game</h3>`);
if (guess === secret) {
  document.writeln(`<p>Congratulations! You guessed it right.</p>`);
} else {
  document.writeln(`<p>Sorry! The correct number was ${secret}.</p>`);
}
