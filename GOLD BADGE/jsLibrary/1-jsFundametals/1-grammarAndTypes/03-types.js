/*
* Boolean
* Null
* Undefined
* Number
* String
* Object
* Array
*/

let example = 1050 + '100';
console.log(example);
console.log(typeof example);

let example = 1050 + 100;
console.log(example);
console.log(typeof example);


let sent = 'This sentence will be split into individual parts';

let arr = sent.split(' ');

console.log(arr);
console.log(arr.length);
// console.log(sent.split(' '));