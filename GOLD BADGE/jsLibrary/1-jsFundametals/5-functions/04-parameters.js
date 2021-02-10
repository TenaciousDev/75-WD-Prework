function adam(ticket) {
  console.log(`I exchanged my ticket for a ${ticket}`);
}

adam('rhinoceros');

let resource = "|============|"

function machine(ironRod) {
  console.log(ironRod);
}

machine(resource);

/*
* CHALLENGE
************
    - Write a function that takes two parameters:
        - one parameter is for a first name,
        - the other parameter is for a last name;
        - have them come together in a variable inside the function.
        - console.log 'Hello, my name is <your name>'
        - call (or invoke) your function
*/

function challengeOne(first, last) {
  let full = first + " " + last;
  console.log(`Hello, my name is ${full}`);
}

let myFirstName = 'Adam';
let myLastName = 'Metcalf';

challengeOne(myFirstName,myLastName);