var input = document.getElementById('input')

function Display(y){
    input.value += y;
}

function ClearAll(){
    input.value = "";
}

function Calculate() {
    let expression = input.value;

    try {
        // Replace scientific keywords with Math equivalents
        expression = expression
            .replace(/sin\(/g, 'Math.sin(')
            .replace(/cos\(/g, 'Math.cos(')
            .replace(/tan\(/g, 'Math.tan(')
            .replace(/log\(/g, 'Math.log10(')     // base-10 log
            .replace(/ln\(/g, 'Math.log(')        // natural log
            .replace(/sqrt\(/g, 'Math.sqrt(')
            .replace(/pi/g, 'Math.PI')
            .replace(/e/g, 'Math.E');

        // Convert degrees to radians for trig functions
        expression = expression.replace(/Math\.(sin|cos|tan)\(([^)]+)\)/g, function (match, fn, val) {
            return `Math.${fn}(${val} * Math.PI / 180)`;
        });

        const result = eval(expression);
        input.value = result;
    } catch (error) {
        input.value = "Error";
        console.error("Calculation error:", error);
    }
}


function Clear(){
    input.value = input.value.slice(0, -1);
}
