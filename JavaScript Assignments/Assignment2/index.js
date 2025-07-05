// ----------------------------------------- Chapter 9-11 -----------------------------------------------

// Q1
// var city = prompt("Enter your city name:");

// if (city.toLowerCase() === "karachi") {
//   alert("Welcome to city of lights");
// }

// // Q2
// var gender = prompt("Enter your gender (male/female):");

// if (gender.toLowerCase() === "male") {
//   alert("Good Morning Sir.");
// } else if (gender.toLowerCase() === "female") {
//   alert("Good Morning Ma’am.");
// } else {
//   alert("Good Morning!");
// }


// // Q3
// var signalColor = prompt("Enter the color of the traffic signal:").toLowerCase();

// if (signalColor === "red") {
//   alert("Must Stop");
// } else if (signalColor === "yellow") {
//   alert("Ready to move");
// } else if (signalColor === "green") {
//   alert("Move now");
// } else {
//   alert("Invalid color entered");
// }


// // Q4
// var fuel = +prompt("Enter remaining fuel in your car (in litres):");

// if (fuel < 0.25) {
//   alert("Please refill the fuel in your car");
// }

// // Q5
// // a
// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }

// // b
// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }

// // c
// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// }

// // d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }

// // e
// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }

// // f
// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }

// // Q6
// var totalMarks = +prompt("Enter total marks:");
// var subject1 = +prompt("Enter marks obtained in Subject 1:");
// var subject2 = +prompt("Enter marks obtained in Subject 2:");
// var subject3 = +prompt("Enter marks obtained in Subject 3:");

// var obtainedMarks = subject1 + subject2 + subject3;
// var percentage = (obtainedMarks / totalMarks) * 100;

// document.writeln("<h3>Marks Sheet</h3>");
// document.writeln("Total Marks: " + totalMarks + "<br>");
// document.writeln("Marks Obtained: " + obtainedMarks + "<br>");
// document.writeln("Percentage: " + percentage.toFixed(2) + "%<br>");

// if (percentage > 80) {
//   document.writeln("Grade: A+<br>Remarks: Excellent");
// } else if (percentage >= 70) {
//   document.writeln("Grade: A<br>Remarks: Good");
// } else if (percentage >= 60) {
//   document.writeln("Grade: B<br>Remarks: Need to Improve");
// } else {
//   document.writeln("Grade: Fail<br>Remarks: Sorry");
// }

// // Q7
// var secretNumber = 7; 
// var guess = +prompt("Guess the secret number (1 to 10):");

// if (guess === secretNumber) {
//   alert("Bingo! Correct answer");
// } else if (guess + 1 === secretNumber || guess - 1 === secretNumber) {
//   alert("Close enough to the correct answer");
// } else {
//   alert("Try again!");
// }

// // Q8
// var number = +prompt("Enter a number:");

// if (number % 3 === 0) {
//   alert("The number is divisible by 3.");
// } else {
//   alert("The number is not divisible by 3.");
// }

// // Q9
// var number = +prompt("Enter a number:");

// if (number % 2 === 0) {
//   alert("The number is even.");
// } else {
//   alert("The number is odd.");
// }

// Q10
var temperature = +prompt("Enter the temperature:");

if (temperature > 40) {
  alert("It is too hot outside.");
} else if (temperature > 30) {
  alert("The Weather today is Normal.");
} else if (temperature > 20) {
  alert("Today’s Weather is cool.");
} else if (temperature > 10) {
  alert("OMG! Today’s weather is so Cool.");
} else {
  alert("It's very cold today!");
}

// Q11
var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");
var operation = prompt("Enter operation (+, -, *, /, %):");

var result;

if (operation === "+") {
  result = num1 + num2;
  alert("Result: " + result);
} else if (operation === "-") {
  result = num1 - num2;
  alert("Result: " + result);
} else if (operation === "*") {
  result = num1 * num2;
  alert("Result: " + result);
} else if (operation === "/") {
  result = num1 / num2;
  alert("Result: " + result);
} else if (operation === "%") {
  result = num1 % num2;
  alert("Result: " + result);
} else {
  alert("Invalid operation");
}

// ----------------------------------------- Chapter 12-23 -----------------------------------------------

// Q1
var input = prompt("Enter a single character:");

var charCode = input.charCodeAt(0);

if (charCode >= 48 && charCode <= 57) {
  alert("You entered a number.");
} else if (charCode >= 65 && charCode <= 90) {
  alert("You entered an uppercase letter.");
} else if (charCode >= 97 && charCode <= 122) {
  alert("You entered a lowercase letter.");
} else {
  alert("You entered a special character or symbol.");
}

// Q2
var num1 = +prompt("Enter the first integer:");
var num2 = +prompt("Enter the second integer:");

if (num1 > num2) {
  alert("The larger number is: " + num1);
} else if (num2 > num1) {
  alert("The larger number is: " + num2);
} else {
  alert("Both numbers are equal.");
}

// Q3
var number = +prompt("Enter a number:");

if (number > 0) {
  alert("The number is positive.");
} else if (number < 0) {
  alert("The number is negative.");
} else {
  alert("The number is zero.");
}

// Q4
var char = prompt("Enter a single character:").toLowerCase();

if (char.length === 1 && (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")) {
  alert(true);
} else {
  alert(false);
}

// Q5
var correctPassword = "abc123";
var userPassword = prompt("Enter your password:");

if (!userPassword) {
  alert("Please enter your password");
} else if (userPassword === correctPassword) {
  alert("Correct! The password you entered matches the original password");
} else {
  alert("Incorrect password");
}

// Q6
var greeting;
var hour = 13;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

alert(greeting);

// Q7
var time = +prompt("Enter time in 24-hour format (e.g. 1900 for 7 PM):");

if (time >= 0 && time < 1200) {
  alert("Good Morning!");
} else if (time >= 1200 && time < 1700) {
  alert("Good Afternoon!");
} else if (time >= 1700 && time < 2100) {
  alert("Good Evening!");
} else if (time >= 2100 && time <= 2359) {
  alert("Good Night!");
} else {
  alert("Invalid time entered.");
}
