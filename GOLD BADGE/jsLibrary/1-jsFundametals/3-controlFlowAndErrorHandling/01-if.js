/*
* Conditionals
  - a falsy value is a value that is considered false when encountered in a boolean context
    - there are 6 falsy values in JavaScript
    1. false
    2. 0
    3. "", '', ``
    4. null
    5. undefined
    6. NaN (not a number)
*/

if (undefined) {
  console.log('will it run?'); //logs nothing
}

let isOn = true;

if (isOn) {
  console.log('the light is on!!');
}

isOn = false;

if (!isOn) {
  console.log('the light is off');
}

let weather = 65;

if (weather < 70 ) {
  console.log('wear a jacket, yo');
}