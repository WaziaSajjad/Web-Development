// ------------------------------------------- Chapter 1 -------------------------------------------

// Q1
// alert("Welcome to the webite where I practice my javascript")

// // Q2
// var password
// prompt("Enter a password(only numbers)")
// if (isNaN(password) || password === "") {
//     alert("Error! Please enter a valid password");
// } else {
//     alert("Password accepted!");  
// }

// // Q3
// alert("Welcome to JS Land...\n Happy Coding!")

// // Q4
// alert("Welcome to JS Land...\n")
// alert("Happy Coding!")

// Q5
// in console


// ------------------------------------------- Chapter 2 -------------------------------------------

// // Q1
// var username
// // Q2
// var myName = "Wazia Sajjad"
// // Q3
// var message = "Hello World"
// alert(message)
// // Q4
// var Givenname = "Wazia"
// var age = 20
// var skills = "Front end"
// alert(Givenname)
// alert(age)
// alert(skills)
// // Q5
// var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(pizza);
// // Q6
// var email = "waziasajjad.1@gmail.com"
// alert("My email address is " + email)
// // Q7
// var book = "A smarter way to learn JavaScript"
// alert("I am trying to learn from the Book " + book)
// // Q8
// document.writeln("Yes! I can write HTML content through JavaScript")
// // Q9
// var style = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬"
// alert(style)


// ------------------------------------------- Chapter 3 -------------------------------------------

// // Q1
// var age = 20
// alert("I'm "+ age + " years old")

// // Q2
// var count = localStorage.getItem("count");
// if (count === null) {
    //     count = 1;
// } else {
//     count = Number(count) + 1;
// }
// localStorage.setItem("count", count);
// alert("You have visited this site " + count + " times.");

// Q3
// var birthyear = 2005

// document.writeln("My birth year is " + birthyear + "<br>")
// document.writeln("Datatype of my declared variale is " + typeof birthyear)

// // Q4
// var visitorName = "Wazia Sajjad";
// var productTitle = "T-shirt(s)";
// var quantity = 5;
// document.writeln(visitorName + " ordered " + quantity + " " + productTitle + " on THIS Clothing store.");

// ------------------------------------------- Chapter 4 -------------------------------------------

// // Q1
// var length, width, height;
// // Q2
// // Legal
// var userName, $price, _count, age123, first_name;
// // var 123name;
// // var user-name;
// // var var;
// // var alert;   ---- will not through error but it is a bad practice
// // var first name;
// // Q3
// document.writeln("<h1>Rules for naming JS variables</h1>");
// document.writeln("Variable names can only contain <b>letters</b>, <b>numbers</b>, <b>underscores (_)</b> and <b>dollar signs ($)</b>. For example: <i>$my_1stVariable</i><br><br>");
// document.writeln("Variables must begin with a <b>letter</b>, <b>$</b> or <b>_</b>. For example: <i>$name</i>, <i>_name</i> or <i>name</i><br><br>");
// document.writeln("Variable names are case <b>sensitive</b><br><br>");
// document.writeln("Variable names should not be JS <b>keywords</b><br>");


// ------------------------------------------- Chapter 5 -------------------------------------------

// // Q1
// var num1 = +prompt("Enter first number:");
// var num2 = +prompt("Enter second number:");
// var sum = num1 + num2;
// document.writeln("The sum of " + num1 + " and " + num2 + " is " + sum);

// // Q2
// var subtract = num1 - num2;
// document.writeln("Subtraction of " + num1 + " and " + num2 + " is " + subtract + "<br>");

// var multiply = num1 * num2;
// document.writeln("Multiplication of " + num1 + " and " + num2 + " is " + multiply + "<br>");

// var divide = num1 / num2;
// document.writeln("Division of " + num1 + " by " + num2 + " is " + divide + "<br>");

// var modulus = num1 % num2;
// document.writeln("Modulus of " + num1 + " and " + num2 + " is " + modulus + "<br>");

// // Q3
// var number;
// document.writeln("Value after variable declaration is: " + number + "<br>");

// number = 5;
// document.writeln("Initial value: " + number + "<br>");

// number++;
// document.writeln("Value after increment is: " + number + "<br>");

// number += 7;
// document.writeln("Value after addition is: " + number + "<br>");

// number--;
// document.writeln("Value after decrement is: " + number + "<br>");

// var remainder = number % 3;
// document.writeln("The remainder is: " + remainder);

// // Q4
// var ticketPrice = 600;
// var totalCost = ticketPrice * 5;

// document.writeln("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR");

// // Q5
// var number = +prompt("Enter a number for multiplication table:");
// document.writeln("<h3>Multiplication Table of " + number + "</h3>");

// for (var i = 1; i <= 10; i++) {
//   document.writeln(number + " x " + i + " = " + (number * i) + "<br>");
// }

// // Q6
// var celsius = 30;
// var fahrenheit = (celsius * 9 / 5) + 32;
// document.write(celsius + "°C is " + fahrenheit + "°F<br>");

// var fahren = 86;
// var cels = (fahren - 32) * 5 / 9;
// document.write(fahren + "°F is " + cels + "°C");

// // Q7
// var priceItem1 = 650;
// var priceItem2 = 100;
// var quantityItem1 = 3;
// var quantityItem2 = 7;
// var shippingCharges = 100;

// var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

// document.writeln("<h2>Shopping Cart</h2>");
// document.writeln("Price of item 1 is " + priceItem1 + "<br>");
// document.writeln("Quantity of item 1 is " + quantityItem1 + "<br>");
// document.writeln("Price of item 2 is " + priceItem2 + "<br>");
// document.writeln("Quantity of item 2 is " + quantityItem2 + "<br>");
// document.writeln("Shipping Charges " + shippingCharges + "<br><br>");
// document.writeln("Total cost of your order is " + totalCost + " PKR");

// // Q8
// var totalMarks = 500;
// var marksObtained = 420;
// var percentage = (marksObtained / totalMarks) * 100;

// document.writeln("<h2>Marks Sheet</h2>");
// document.writeln("Total Marks: " + totalMarks + "<br>");
// document.writeln("Marks Obtained: " + marksObtained + "<br>");
// document.writeln("Percentage: " + percentage + "%");

// // Q9
// var totalPKR = (10 * 104.80) + (25 * 28);

// document.writeln("Total Currency in PKR: " + totalPKR);

// // Q10
// var result = ((5 + 5) * 10) / 2;

// document.writeln("The result is: " + result);

// // Q11
// var currentYear = 2025;
// var birthYear = 2005;
// var age1 = currentYear - birthYear;
// var age2 = age1 - 1;

// document.writeln("They are either " + age2 + " or " + age1 + " years old.");

// // Q12
// var radius = 10;
// var pi = 3.142;

// var circumference = 2 * pi * radius;
// var area = pi * radius * radius;

// document.writeln("Radius of the circle is: " + radius + "<br>");
// document.writeln("The circumference is: " + circumference + "<br>");
// document.writeln("The area is: " + area);


// // Q13
// var favoriteSnack = "Chocolate Chip Cookies";
// var currentAge = 20;
// var maxAge = 80;
// var amountPerDay = 3;

// var yearsRemaining = maxAge - currentAge;
// var totalNeeded = yearsRemaining * 365 * amountPerDay;

// document.writeln("You will need " + totalNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");



// // ------------------------------------------- Chapter 6-9 -------------------------------------------

// // Q1
// var number = 10;

// document.writeln("Result:<br>");
// document.writeln("The value of number is: " + number + "<br><br>");

// ++number;
// document.writeln("The value of ++number is: " + number + "<br>");
// document.writeln("Now the value of number is: " + number + "<br><br>");

// number++;
// document.writeln("The value of number++ is: " + (number - 1) + "<br>");
// document.writeln("Now the value of number is: " + number + "<br><br>");

// --number;
// document.writeln("The value of --number is: " + number + "<br>");
// document.writeln("Now the value of number is: " + number + "<br><br>");

// number--;
// document.writeln("The value of number-- is: " + (number + 1) + "<br>");
// document.writeln("Now the value of number is: " + number + "<br>");


// // Q2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.writeln(a)
// document.writeln(b)
// document.writeln(result)

// // Q3
// var userName = prompt("Enter your name:");
// alert("Hello, " + userName + "!");

// // Q4
// // Q5
// var number = +prompt("Enter a number for multiplication table:", 5);

// if (isNaN(number) || number === 0) {
//   number = 5;
// }

// document.writeln("<h3>Multiplication Table of " + number + "</h3>");

// for (var i = 1; i <= 10; i++) {
//   document.writeln(number + " x " + i + " = " + (number * i) + "<br>");
// }


// // Q6
// var subject1 = prompt("Enter name of first subject:");
// var subject2 = prompt("Enter name of second subject:");
// var subject3 = prompt("Enter name of third subject:");

// var totalMarks = 100;

// var obtained1 = +prompt("Enter obtained marks for " + subject1 + ":");
// var obtained2 = +prompt("Enter obtained marks for " + subject2 + ":");
// var obtained3 = +prompt("Enter obtained marks for " + subject3 + ":");

// var totalObtained = obtained1 + obtained2 + obtained3;
// var grandTotal = totalMarks * 3;

// var percentage1 = (obtained1 / totalMarks) * 100;
// var percentage2 = (obtained2 / totalMarks) * 100;
// var percentage3 = (obtained3 / totalMarks) * 100;
// var overallPercentage = (totalObtained / grandTotal) * 100;

// document.writeln("<h3>Marks Sheet</h3>");
// document.writeln("<table border='1' cellpadding='8'>");
// document.writeln("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
// document.writeln("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtained1 + "</td><td>" + percentage1.toFixed(2) + "%</td></tr>");
// document.writeln("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtained2 + "</td><td>" + percentage2.toFixed(2) + "%</td></tr>");
// document.writeln("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtained3 + "</td><td>" + percentage3.toFixed(2) + "%</td></tr>");
// document.writeln("<tr><th>Total</th><th>" + grandTotal + "</th><th>" + totalObtained + "</th><th>" + overallPercentage.toFixed(2) + "%</th></tr>");
// document.writeln("</table>");

// // Q7

