
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

const operator = prompt("Enter the operation (+, -, *, /, %):");

var result; 

if (operator === "+") {
    result = num1 + num2;
    console.log(`Addition: ${num1} + ${num2} = ${result}`);
} else if (operator === "-") {
    result = num1 - num2;
    console.log(`Subtraction: ${num1} - ${num2} = ${result}`);
} else if (operator === "*") {
    result = num1 * num2;
    console.log(`Multiplication: ${num1} * ${num2} = ${result}`);
} else if (operator === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
        console.log(`Division: ${num1} / ${num2} = ${result}`);
    } else {
        console.log("Error: Division by zero is not allowed.");
    }
} else if (operator === "%") {
    if (num2 !== 0) {
        result = num1 % num2;
        console.log(`Modulus: ${num1} % ${num2} = ${result}`);
    } else {
        console.log("Error: Modulus by zero is not allowed.");
    }
} else {
    console.log("Invalid operator. Please use +, -, *, /, or %.");
}
