// Q1
let stdNames = [];
//Q2
let stdNames2 = new Array();
//Q3
let names = ["Wazia", "Sajjad", "Saba"];
//Q4
let age = [20, 50, 40];
//q5
let flags = [true, false, true, false];
//Q6
let mixed = ["Ali", 25, true, null];
//Q7
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.getElementById("heading1").textContent = "Qualifications";
document.getElementById("li1").textContent = qualifications[0];
document.getElementById("li2").textContent = qualifications[1];
document.getElementById("li3").textContent = qualifications[2];
document.getElementById("li4").textContent = qualifications[3];
document.getElementById("li5").textContent = qualifications[4];
document.getElementById("li6").textContent = qualifications[5];
document.getElementById("li7").textContent = qualifications[6];
document.getElementById("li8").textContent = qualifications[7];

//Q8
let name8 = ["Ali", "Bilal", "Charlie"];
let marks = [380, 440, 490];
let totalMarks = 500;

console.log("The marks of " + name8[0] + " is " + marks[0]);
document.getElementById("item1").textContent = "Score of " + name8[0] + " is " + marks[0] + ". Percentage: " + (marks[0]/totalMarks*100) + "%";
document.getElementById("item2").textContent = "Score of " + name8[1] + " is " + marks[1] + ". Percentage: " + (marks[1]/totalMarks*100) + "%";
document.getElementById("item3").textContent = "Score of " + name8[2] + " is " + marks[2] + ". Percentage: " + (marks[2]/totalMarks*100) + "%";

//Q9
let colors = ["Blue", "Red", "Yellow"];

document.getElementById("color1").textContent = colors[0];
document.getElementById("color2").textContent = colors[1];
document.getElementById("color3").textContent = colors[2];

// let input = prompt("What color do you waant to be at first?");
// colors[0] = input; 
let colorAtBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorAtBeginning);
output.innerHTML += "<h3>After adding to beginning:</h3>" + colors.join(", ") + "<br><br>";

let colorAtEnd = prompt("Enter a color to add to the end:");
colors.push(colorAtEnd);
output.innerHTML += "<h3>After adding to beginning:</h3>" + colors.join(", ") + "<br><br>";

colors.unshift("Orange", "Pink");
output.innerHTML += "<h3>After adding two more colors to beginning:</h3>" + colors.join(", ") + "<br><br>";

colors.shift();
output.innerHTML += "<h3>After deleting first color:</h3>" + colors.join(", ") + "<br><br>";

colors.pop();
output.innerHTML += "<h3>After deleting last color:</h3>" + colors.join(", ") + "<br><br>";

let addIndex = +prompt("At which index do you want to add a color?");
let addColor = prompt("Enter the color name to add:");
colors.splice(addIndex, 0, addColor);
output.innerHTML += `<h3>After adding '${addColor}' at index ${addIndex}:</h3>` + colors.join(", ") + "<br><br>";

let delIndex = +prompt("At which index do you want to delete color(s)?");
let delCount = +prompt("How many colors do you want to delete?");
colors.splice(delIndex, delCount);
output.innerHTML += `<h3>After deleting ${delCount} color(s) from index ${delIndex}:</h3>` + colors.join(", ") + "<br><br>";

//Q10
let scores = [78, 95, 67, 88, 56, 90, 72];
let output2 = document.getElementById("output2");

output2.innerHTML += "<h3>Original Scores:</h3>" + scores.join(", ") + "<br><br>";
scores.sort(function(a, b) {
  return a - b;
});
output2.innerHTML += "<h3>Sorted Scores (Ascending):</h3>" + scores.join(", ");


//Q11
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
let selectedCities = cities.slice(1, 4);
let output3 = document.getElementById("output3");
output3.innerHTML = "<h3>All Cities:</h3>" + cities.join(", ") + "<br><br>";
output3.innerHTML += "<h3>Selected Cities:</h3>" + selectedCities.join(", ");

//Q12
var arr = ["This ", " is ", " my ", " cat"];
var result = arr.join("");
document.getElementById("output3").textContent = arr.join("");

//Q13
let students = [];

students.push("Alice");
students.push("Bob");
students.push("Charlie");

let output4 = document.getElementById("output");
output4.innerHTML = "<h3>Enqueued Students:</h3>" + students.join(", ") + "<br><br>";
output.innerHTML += "<h3>Dequeued Students (FIFO):</h3>";
let removed1 = students.shift();
output4.innerHTML += removed1 + "<br>";
let removed2 = students.shift();
output4.innerHTML += removed2 + "<br>";
let removed3 = students.shift();
output4.innerHTML += removed3 + "<br>";

//Q14
let devices = [];

devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");

let output5 = document.getElementById("output5");

output5.innerHTML = "<h3>Devices Added:</h3>" + devices.join(", ") + "<br><br>";
output5.innerHTML += "<h3>Access in LIFO order:</h3>";
let last1 = devices.pop();
output5.innerHTML += last1 + "<br>";
let last2 = devices.pop();
output5.innerHTML += last2 + "<br>";
let last3 = devices.pop();
output5.innerHTML += last3 + "<br>";
let last4 = devices.pop();
output5.innerHTML += last4 + "<br>";

//Q15
let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write('<select>');
document.write('<option value="apple">' + manufacturers[0] + '</option>');
document.write('<option value="samsung">' + manufacturers[1] + '</option>');
document.write('<option value="motorola">' + manufacturers[2] + '</option>');
document.write('<option value="nokia">' + manufacturers[3] + '</option>');
document.write('<option value="sony">' + manufacturers[4] + '</option>');
document.write('<option value="haier">' + manufacturers[5] + '</option>');
document.write('</select>');
