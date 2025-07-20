// 1. Print numbers from 1 to 10 using a while loop
function printNumbers() {
  let i = 1;
  console.log("Numbers from 1 to 10:");
  while (i <= 10) {
    console.log(i);
    i++;
  }
}

// 2. Keep asking user for input until they enter 5
function askUntilFive() {
  let userInput;
  do {
    userInput = prompt("Enter number 5 to stop:");
  } while (parseInt(userInput) !== 5);

  console.log(" Correct input received: 5");
}

// 3. Calculate sum of first N natural numbers using for loop
function calculateSum(N) {
  let sum = 0;
  for (let j = 1; j <= N; j++) {
    sum += j;
  }
  console.log(`Sum of first ${N} natural numbers is: ${sum}`);
}

// 4. Print multiplication table (10x10)
function printMultiplicationTable() {
  console.log("10 x 10 Multiplication Table:");
  for (let row = 1; row <= 10; row++) {
    let line = "";
    for (let col = 1; col <= 10; col++) {
      line += (row * col).toString().padStart(4, ' ');
    }
    console.log(line);
  }
}

printNumbers();
calculateSum(10);
printMultiplicationTable();

