
for (let num = 10; num <= 50; num++) {
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`First prime number found: ${num}`);
    break;
  }
}
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}