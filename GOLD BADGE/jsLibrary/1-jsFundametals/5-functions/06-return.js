let resource = '|========|';

function machine(ironRod) {
  let screws;

  if(ironRod) {
    screws = '|--- |--- |--- |---';
  } else {
    console.log('not fed any resources');
  }

  return screws;
}

let powerOn = machine(resource);
console.log(powerOn);

//block body arrow function
let myName = (first, last) => {
  let full = `${first} ${last}`;

  return full;
}

powerOn = myName('Sean', 'Connery');
console.log(powerOn)

//concise body arrow function
let myName = (first, last) => `${first} ${last}`;
let powerOn = myName('Indiana', 'Jones');
console.log(powerOn);

/*
CHALLENGE
************
    Make a tip calculator using a function
    Have it RETURN the value
    Capture that returned value in a VARIABLE
    Print that variable
*/

function tipCalc(bill,percentage) {
  return bill*percentage/100;
}

let tip = tipCalc(200.00,20).toFixed(2);
console.log(tip);

let calculator = (bill,percentage) => bill*percentage/100;
let tipMore = tipCalc(200.00,30).toFixed(2);
console.log(tipMore);