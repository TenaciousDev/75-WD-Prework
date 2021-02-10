/*
MORNING CHALLENGE
************
*    - declare a variable of FB that gets initialized with a number
*    - write a conditional that:
*        - prints out "Fizz" if the number is divisible by 3
*        - prints out "Buzz" if the number is divisible by 5
*        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
*/

let FB = 30;
let f = 'Fizz';
let b = 'Buzz';

(!(FB % 3)) && (!(FB % 5)) ?
  console.log(f,b)
  : !(FB % 5) ?
  console.log(b)
  : !(FB % 3) ?
  console.log(f)
  : console.log(FB);


//* 2nd Challenge
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let vowels = ['a','e','i','o','u'];

for (i = 0; i < alphabet.length; i++) {
  let n = alphabet[i];
  (!vowels.includes(n)) ? console.log(`${n}: this letter is a consonent.`)
  : (vowels.includes(n)) ? console.log(`${n}: this letter is a vowel.`)
  : console.log(n);
}