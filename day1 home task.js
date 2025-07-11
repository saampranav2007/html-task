

var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));

if (isNaN(num1) || isNaN(num2)) {
  console.log("Invalid input. Please enter valid numbers.");
} else {

  const sum = num1 + num2;
  const difference = num1 - num2;
  const product = num1 * num2;

  let quotient;
  let remainder;

  if (num2 !== 0) {
    quotient = num1 / num2;
    remainder = num1 % num2;
  } else {
    quotient = "Error: Division by zero";
    remainder = "Error: Modulo by zero";
  }

  console.log("----- Calculator Results -----");
  console.log(`First Number      : ${num1}`);
  console.log(`Second Number     : ${num2}`);
  console.log(`Sum (+)           : ${sum}`);
  console.log(`Difference (-)    : ${difference}`);
  console.log(`Product (*)       : ${product}`);
  console.log(`Quotient (/)      : ${quotient}`);
  console.log(`Remainder (%)     : ${remainder}`);
  console.log("--------------------------------");
}
