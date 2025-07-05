var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");
var operator = prompt("Enter operation (+, -, *, /):");

switch (operator) {
    case '+':
        alert("Result: " + (num1 + num2));
        break;
    case '-':
        alert("Result: " + (num1 - num2));
        break;
    case '*':
        alert("Result: " + (num1 * num2));
        break;
    case '/':
        if (num2 !== 0) {
            alert("Result: " + (num1 / num2));
        } else {
            alert("Error: Cannot divide by zero.");
        }
        break;
    default:
        alert("Invalid operator entered.");
}



for (var i = 1; i <= 10; i++) {
    document.writeln(i + "<br>"); 
}

// While loop to print numbers from 1 to 10
var i = 1;

while (i <= 10) {
    document.writeln(i + "<br>"); 
    i++;
}
