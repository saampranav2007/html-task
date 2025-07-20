// Function to return the day name based on a number input (0–6)
function printDayName(day) {
  switch (day) {
    case 0:
      return "Day 0: Sunday";
    case 1:
      return "Day 1: Monday";
    case 2:
      return "Day 2: Tuesday";
    case 3:
      return "Day 3: Wednesday";
    case 4:
      return "Day 4: Thursday";
    case 5:
      return "Day 5: Friday";
    case 6:
      return "Day 6: Saturday";
    default:
      return `Day ${day}: Invalid day number! Please enter a value between 0 and 6.`;
  }
}

// Function to get input from user and print the day
function handlePrintDay() {
  const input = prompt("Enter a number between 0 and 6:");
  const dayNumber = parseInt(input, 10);

  if (isNaN(dayNumber)) {
    console.log("Invalid input: Please enter a number.");
    return;
  }

  const result = printDayName(dayNumber);
  console.log(result);
}

// Run the function
handlePrintDay();
