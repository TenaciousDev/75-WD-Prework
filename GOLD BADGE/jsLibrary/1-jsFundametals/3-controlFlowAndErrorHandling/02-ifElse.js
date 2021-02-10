// let weather = 75;

// if (weather < 70) {
//   console.log('wear a jacket!');
// } else {
//   console.log('no jacket necessary');
// }

/*
CHALLENGE
************
    Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
    Silver:
    If It is your name, console log 'Hello, my name is <name>'
    Gold:
    If it is not your name, console log 'Hello, is your name <name> ?'
*/


const myName = 'Adam'; // My name (for comparison)
let userInput = 'Adam' // simulate a user entering their name

//* BRONZE

if (userInput.toLowerCase == myName.toLowerCase) {  // evaluates true (see variables above)
  console.log(myName);
} else {
  console.log('Hello, what is your name?') // false
}
//* SILVER

if (userInput.toLowerCase == myName.toLowerCase) {  // evaluates true (see variables above)
  console.log(`Hello, my name is ${myName}`);
}

userInput = 'Frodo Baggins'; // assign new value to userInput

//* GOLD
if (userInput.toLowerCase != myName.toLowerCase) {  // evaluates true (see variables above)
  console.log(`Hello, is your name ${myName}?`);
} else {
  console.log(`Hello, my name is ${myName}`); // false
}