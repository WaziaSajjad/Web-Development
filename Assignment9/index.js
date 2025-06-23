// Q1: Custom power function
function power(a, b) {
    return Math.pow(a, b);
}

// Q2: Leap year check
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Q3: Triangle area calculation using Heron's formula
function calculateS(a, b, c) {
    return (a + b + c) / 2;
}

function calculateArea(a, b, c) {
    const s = calculateS(a, b, c);
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

// Q4: Marks calculation
function calculateAverage(sub1, sub2, sub3) {
    return (sub1 + sub2 + sub3) / 3;
}

function calculatePercentage(sub1, sub2, sub3) {
    return ((sub1 + sub2 + sub3) / 300) * 100;
}

function mainFunction(sub1, sub2, sub3) {
    const avg = calculateAverage(sub1, sub2, sub3);
    const perc = calculatePercentage(sub1, sub2, sub3);
    return `Average: ${avg.toFixed(2)}, Percentage: ${perc.toFixed(2)}%`;
}

// Q5: Custom indexOf implementation
function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) return i;
    }
    return -1;
}

// Q6: Delete vowels from sentence (max 25 chars)
function removeVowels(sentence) {
    if (sentence.length > 25) return "Sentence too long!";
    return sentence.replace(/[aeiouAEIOU]/g, '');
}

// Q7: Count successive vowels using switch
function countSuccessiveVowels(text) {
    let count = 0;
    for (let i = 0; i < text.length - 1; i++) {
        let isFirstVowel = false;
        let isSecondVowel = false;
        
        switch(text[i].toLowerCase()) {
            case 'a': case 'e': case 'i': case 'o': case 'u':
                isFirstVowel = true;
        }
        
        switch(text[i+1].toLowerCase()) {
            case 'a': case 'e': case 'i': case 'o': case 'u':
                isSecondVowel = true;
        }
        
        if (isFirstVowel && isSecondVowel) count++;
    }
    return count;
}

// Q8: Distance conversion
function convertToMeters(km) {
    return km * 1000;
}

function convertToFeet(km) {
    return km * 3280.84;
}

function convertToInches(km) {
    return km * 39370.1;
}

function convertToCentimeters(km) {
    return km * 100000;
}

function printDistanceConversions(km) {
    console.log(`Meters: ${convertToMeters(km)}`);
    console.log(`Feet: ${convertToFeet(km).toFixed(2)}`);
    console.log(`Inches: ${convertToInches(km).toFixed(2)}`);
    console.log(`Centimeters: ${convertToCentimeters(km)}`);
}

// Q9: Overtime pay calculation
function calculateOvertimePay(hours) {
    const normalHours = 40;
    const overtimeRate = 12;
    return hours > normalHours ? 
        (hours - normalHours) * overtimeRate : 0;
}

// Q10: Currency note counter
function withdrawAmount(amount) {
    amount *= 100; 
    
    const hundreds = Math.floor(amount / 100);
    amount %= 100;
    
    const fifties = Math.floor(amount / 50);
    amount %= 50;
    
    const tens = Math.floor(amount / 10);
    
    return `You will have ${hundreds} hundred notes, ${fifties} fifty notes, ${tens} ten notes.`;
}


document.writeln("Q2:", isLeapYear(2024)+"<br>"); // true
document.writeln("Q1:", power(2, 3)+"<br>");  // 8
document.writeln("Q3:", calculateArea(5, 5, 6).toFixed(2)+"<br>"); // 12.00
document.writeln("Q4:", mainFunction(80, 90, 100)+"<br>");
document.writeln("Q5:", customIndexOf("hello", "e")+"<br>"); // 1
document.writeln("Q6:", removeVowels("JavaScript")+"<br>"); // JvScrpt
document.writeln("Q7:", countSuccessiveVowels("Pleases read this application and give me gratuity")+"<br>"); // 3
printDistanceConversions(10); // Test conversions
document.writeln("Q9:", calculateOvertimePay(45)+"<br>"); // 60
document.writeln("Q10:", withdrawAmount(4.7)+"<br>"); // 4 hundreds, 1 fifty, 2 tens
