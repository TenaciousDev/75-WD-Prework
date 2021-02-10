//* 1. Write a for loop that counts from 0-10
//* 2. Declare a function named evenOrOdd that holds a single parameter named num
//* 3. Each time the for loop runs, it should invoke the functin of evenOrOdd, and pass in the number from the for loop as the argument
//* 4. Inside of the function body, write a conditional that checks if the number being passed to the function from the for loop is even or odd
//*     - if the number is even, console.log the number + 'the number is even'
//*     - if the number is odd, console.log the number + 'the number is odd'

//* 1
for (let i = 0; i <= 10; i++) {
  //* 3 & part of 4
  if (evenOrOdd(i)) {
    console.log(`${i}: the number is even`);
  } else {
    console.log(`${i}: the number is odd`);
  }
}

//* 2
function evenOrOdd(num) {
  //* first part of 4
  if (num % 2 == 0) return true;
  else return false;
}
