// Q1: Display current date & time
function showDateTime() {
    const now = new Date();
    document.writeln("<h3>Q1: Current Date & Time</h3>");
    document.writeln("Current Date & Time: " + now + "<br><br>");
}
showDateTime();

// Q2: Greet user using full name
function greetUser() {
    const firstName = prompt("Enter your first name:");
    const lastName = prompt("Enter your last name:");
    const fullName = firstName + " " + lastName;
    document.writeln("<h3>Q2: Greeting User</h3>");
    document.writeln("User Input: " + firstName + " " + lastName + "<br>");
    document.writeln("Greeting: Hello, " + fullName + "!<br><br>");
}
greetUser();

// Q3: Add two numbers input by user
function addNumbers() {
    const num1 = +prompt("Enter first number:");
    const num2 = +prompt("Enter second number:");
    document.writeln("<h3>Q3: Add Two Numbers</h3>");
    document.writeln("User Inputs: " + num1 + " + " + num2 + "<br>");
    document.writeln("Sum: " + (num1 + num2) + "<br><br>");
}
addNumbers();

// Q4: Calculator
function calculator() {
    const num1 = +prompt("Enter first number:");
    const operator = prompt("Enter operator (+, -, *, /):");
    const num2 = +prompt("Enter second number:");
    
    let result;
    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        default: result = "Invalid operator"; break;
    }
    document.writeln("<h3>Q4: Calculator</h3>");
    document.writeln("User Inputs: " + num1 + " " + operator + " " + num2 + "<br>");
    document.writeln("Result: " + result + "<br><br>");
}
calculator();

// Q5: Square its argument
function square() {
    const num = +prompt("Enter a number to square:");
    document.writeln("<h3>Q5: Square</h3>");
    document.writeln("User Input: " + num + "<br>");
    document.writeln("Square: " + (num * num) + "<br><br>");
}
square();

// Q6: Compute factorial of a number
function factorial() {
    const n = +prompt("Enter a number for factorial:");
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    document.writeln("<h3>Q6: Factorial</h3>");
    document.writeln("User Input: " + n + "<br>");
    document.writeln("Factorial: " + result + "<br><br>");
}
factorial();

// Q7: Display counting in browser
function displayCounting() {
    const start = +prompt("Enter start number:");
    const end = +prompt("Enter end number:");
    document.writeln("<h3>Q7: Counting</h3>");
    document.writeln("User Input: Start = " + start + ", End = " + end + "<br>");
    for (let i = start; i <= end; i++) {
        document.writeln(i + " ");
    }
    document.writeln("<br><br>");
}
displayCounting();

// Q8: Hypotenuse using nested function
function calculateHypotenuse() {
    const base = +prompt("Enter base of triangle:");
    const perpendicular = +prompt("Enter perpendicular of triangle:");

    function calculateSquare(x) {
        return x * x;
    }

    const hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
    document.writeln("<h3>Q8: Hypotenuse Calculation</h3>");
    document.writeln("User Inputs: Base = " + base + ", Perpendicular = " + perpendicular + "<br>");
    document.writeln("Hypotenuse: " + hypotenuse + "<br><br>");
}
calculateHypotenuse();

// Q9: Area of rectangle
function areaRectangle() {
    const width = +prompt("Enter width:");
    const height = +prompt("Enter height:");
    const area = width * height;
    document.writeln("<h3>Q9: Area of Rectangle</h3>");
    document.writeln("User Inputs: Width = " + width + ", Height = " + height + "<br>");
    document.writeln("Area: " + area + "<br><br>");
}
areaRectangle();

// Q10: Check palindrome
function isPalindrome() {
    var str = prompt("Enter a word to check if it's a palindrome:");
    var lower_case = str.toLowerCase();
    var reverse = lower_case.split('').reverse().join('');
    
    console.log("Original: " + lower_case);
    console.log("Reversed: " + reverse);

    if (lower_case === reverse) {
        alert("Yes, '" + str + "' is a palindrome.");
        return true;
    } else {
        alert("No, '" + str + "' is not a palindrome.");
        return false;
    }
}

// Call the function
isPalindrome();


// Q11: Convert first letter of each word to uppercase
function titleCase() {
    const str = prompt("Enter a sentence:");
    const result = str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    document.writeln("<h3>Q11: Title Case</h3>");
    document.writeln("User Input: " + str + "<br>");
    document.writeln("Title Case: " + result + "<br><br>");
}
titleCase();

// Q12: Find longest word in a string
function findLongestWord() {
    const str = prompt("Enter a sentence:");
    const words = str.split(" ");
    let longest = "";
    for (let word of words) {
        if (word.length > longest.length) longest = word;
    }
    document.writeln("<h3>Q12: Longest Word</h3>");
    document.writeln("User Input: " + str + "<br>");
    document.writeln("Longest Word: " + longest + "<br><br>");
}
findLongestWord();

// Q13: Count occurrences of letter in string
function countLetterOccurrences() {
    const str = prompt("Enter a string:");
    const letter = prompt("Enter the letter to count:");
    let count = 0;
    for (let char of str) {
        if (char.toLowerCase() === letter.toLowerCase()) count++;
    }
    document.writeln("<h3>Q13: Letter Occurrence</h3>");
    document.writeln("User Input: String = '" + str + "', Letter = '" + letter + "'<br>");
    document.writeln("Occurrences of '" + letter + "': " + count + "<br><br>");
}
countLetterOccurrences();

// Q14: Geometrizer (Circle)
function calcCircumference() {
    const radius = +prompt("Enter radius:");
    const circumference = 2 * Math.PI * radius;
    document.writeln("<h3>Q14: Circumference of Circle</h3>");
    document.writeln("User Input: Radius = " + radius + "<br>");
    document.writeln("Circumference: " + circumference.toFixed(2) + "<br><br>");
}
function calcArea() {
    const radius = +prompt("Enter radius:");
    const area = Math.PI * radius * radius;
    document.writeln("<h3>Q14: Area of Circle</h3>");
    document.writeln("User Input: Radius = " + radius + "<br>");
    document.writeln("Area: " + area.toFixed(2) + "<br><br>");
}
calcCircumference();
calcArea();
