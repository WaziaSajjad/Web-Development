//Q1
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "!");

//Q2
document.writeln("Q2" + "<br>");
var phone = prompt("Enter your favorite mobile phone model:");
document.writeln("My favorite phone is: " + phone + "<br>");
document.writeln("Length of string: " + phone.length + "<br>");

//Q3
document.writeln("Q3" + "<br>");
var country = "Pakistani";
document.writeln("String: " + country + "<br>");
document.writeln("Index of 'n': " + country.indexOf("n") + "<br>");

//Q4
document.writeln("Q4" + "<br>");
var greeting = "Hello World";
document.writeln("String: " + greeting + "<br>");
document.writeln("Last index of 'l': " + greeting.lastIndexOf("l") + "<br>");

//Q5
document.writeln("Q5" + "<br>");
var charAtExample = "Pakistani";
document.writeln("String: " + charAtExample + "<br>");
document.writeln("Character at index 3: " + charAtExample.charAt(3) + "<br>");

//Q6
document.writeln("Q6" + "<br>");
var first = prompt("Enter your first name:");
var last = prompt("Enter your last name:");
var full = first.concat(" ", last);
alert("Hello, " + full + "!");

//Q7
document.writeln("Q7" + "<br>");
var city = "Hyderabad";
var replacedCity = city.replace("Hyder", "Islam");
document.writeln("City: " + city + "<br>");
document.writeln("After replacement: " + replacedCity + "<br>");

//Q8
document.writeln("Q8" + "<br>");
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/, "&");
document.writeln("Original: " + message + "<br>");
document.writeln("Updated: " + newMessage + "<br>");

//Q9
document.writeln("Q9" + "<br>");
var str = "472";
var num = Number(str);
document.writeln("Value: " + str + "<br>Type: " + typeof str + "<br>");
document.writeln("Value: " + num + "<br>Type: " + typeof num + "<br>");

//Q10
document.writeln("Q10" + "<br>");
var userInput = prompt("Enter something:");
document.writeln("User input: " + userInput + "<br>");
document.writeln("Upper case: " + userInput.toUpperCase() + "<br>");

//Q11
document.writeln("Q11" + "<br>");
var input = prompt("Enter something:");
var words = input.toLowerCase().split(" ");
var titleCase = "";

for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    titleCase += capitalized + " ";
}

document.writeln("User input: " + input + "<br>");
document.writeln("Title case: " + titleCase.trim() + "<br>");

//Q12
document.writeln("Q12" + "<br>");
var num = 35.36;
var strNum = num.toString().replace(".", "");
document.writeln("Number: " + num + "<br>");
document.writeln("Result: " + strNum + "<br>");

//Q13
document.writeln("Q13" + "<br>");
var username = prompt("Enter username:");
var invalidChars = ['@', '.', ',', '!'];
var isValid = true;

for (var i = 0; i < username.length; i++) {
    if (invalidChars.includes(username[i])) {
        isValid = false;
        break;
    }
}
if (!isValid) {
    alert("Please enter a valid username without special characters [@ . , !]");
} else {
    alert("Username accepted.");
}

//Q14
document.writeln("Q14" + "<br>");
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to wazia's Bakery. What do you want to order? cake,apple, pie,cookie,chips,patties").toLowerCase();
var found = false;

for (var i = 0; i < A.length; i++) {
    if (A[i] === search) {
        found = true;
        break;
    }
}
if (found) {
    alert(search + " is available at index " + i + " in our bakery.");
} else {
    alert("We are sorry. " + search + " is not available in our bakery.");
}

//Q15
document.writeln("Q15" + "<br>");
var password = prompt("Enter your password:");
var hasLetter = /[a-zA-Z]/.test(password);
var hasNumber = /[0-9]/.test(password);
var startsWithLetter = /^[a-zA-Z]/.test(password);
var validLength = password.length >= 6;

if (!hasLetter || !hasNumber || !startsWithLetter || !validLength) {
    alert("Password must contain letters and numbers, must not start with a number, and be at least 6 characters long.");
} else {
    alert("Password is valid.");
}

//Q16
document.writeln("Q16" + "<br>");
var university = "University of Karachi";
var universityArray = university.split("");
for (var i = 0; i < universityArray.length; i++) {
    document.writeln(universityArray[i] + "<br>");
}

//Q17
document.writeln("Q17" + "<br>");
var userInput = prompt("Enter a string:");
var lastChar = userInput.charAt(userInput.length - 1);
document.writeln("User input: " + userInput + "<br>");
document.writeln("Last character: " + lastChar + "<br>");

//Q18
document.writeln("Q18" + "<br>");
var sentence = "The quick brown fox jumps over the lazy dog";
var words = sentence.toLowerCase().split(" ");
var count = 0;

for (var i = 0; i < words.length; i++) {
    if (words[i] === "the") {
        count++;
    }
}
document.writeln("Text: " + sentence + "<br>");
document.writeln("There are " + count + " occurrence(s) of word 'the'<br>");

