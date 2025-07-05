// Q1
var currentDate = new Date();
document.writeln(currentDate);

// Q2
var now = new Date();
var month = now.getMonth();

switch (month) {
  case 0:
    alert("Current month: January");
    break;
  case 1:
    alert("Current month: February");
    break;
  case 2:
    alert("Current month: March");
    break;
  case 3:
    alert("Current month: April");
    break;
  case 4:
    alert("Current month: May");
    break;
  case 5:
    alert("Current month: June");
    break;
  case 6:
    alert("Current month: July");
    break;
  case 7:
    alert("Current month: August");
    break;
  case 8:
    alert("Current month: September");
    break;
  case 9:
    alert("Current month: October");
    break;
  case 10:
    alert("Current month: November");
    break;
  case 11:
    alert("Current month: December");
    break;
  default:
    alert("Invalid month");
}

// Q3
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var today = new Date();
alert("Today is " + days[today.getDay()]);

// Q4
var today = new Date();
var day = today.getDay();
if (day === 0 || day === 6) {
  alert("It's Fun day");
}

// Q5
var date = new Date();
var dayOfMonth = date.getDate();
if (dayOfMonth < 16) {
  alert("First fifteen days of the month");
} else {
  alert("Last days of the month");
}

// Q6
var now = new Date();
var minutesSince1970 = now.getTime() / (1000 * 60);
alert("Minutes since midnight, Jan. 1, 1970: " + minutesSince1970);

// Q7
var time = new Date().getHours();
if (time < 12) {
  alert("It's AM");
} else {
  alert("It's PM");
}

// Q8
var laterDate = new Date("December 31, 2020");
document.writeln("Later date: " + laterDate);

// Q9
var ramadanDate = new Date("June 18, 2015");
var today = new Date();
var diff = today - ramadanDate;
var daysPassed = Math.floor(diff / (1000 * 60 * 60 * 24));
alert(daysPassed + " days have passed since 1st Ramadan, 2015");

// Q10
var referenceDate = new Date();
var beginning2015 = new Date("January 1, 2015");
var secondsElapsed = Math.floor((referenceDate - beginning2015) / 1000);
document.writeln("Seconds since beginning of 2015: " + secondsElapsed);

// Q11
var date = new Date();
document.writeln("Current date: " + date + "<br>");
date.setHours(date.getHours() + 1);
document.writeln("1 hour ahead: " + date);

// Q12
var date = new Date();
date.setFullYear(date.getFullYear() - 100);
alert("100 years back: " + date);

// Q13
var age = +prompt("Enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
document.writeln("Your birth year is " + birthYear);

// Q14
var customerName = "Ali";
var month = "July";
var units = 410;
var chargePerUnit = 16;
var latePaymentSurcharge = 350;
var netAmount = units * chargePerUnit;
var grossAmount = netAmount + latePaymentSurcharge;

document.writeln("<h2>K-Electric Bill</h2>");
document.writeln("Customer Name: " + customerName + "<br>");
document.writeln("Month: " + month + "<br>");
document.writeln("Number of units: " + units + "<br>");
document.writeln("Charges per unit: " + chargePerUnit + "<br>");
document.writeln("Net Amount Payable (within Due Date): " + netAmount.toFixed(2) + "<br>");
document.writeln("Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "<br>");
document.writeln("Gross Amount Payable (after Due Date): " + grossAmount.toFixed(2));
