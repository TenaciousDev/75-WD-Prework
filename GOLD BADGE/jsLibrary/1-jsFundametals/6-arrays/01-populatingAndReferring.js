/*
    - an array is a container that holds a list of items
        - the items an array holds do not all have to be the same data type
    - denoted by []
*/
let list = ['orange', 'banana', true, 5];
console.log(list[1]);
/*
    - when we reference an array, we can append square brackets onto the end of the referenced array, and supply those square brackets with the index number we want to pull out
        - this is known as square bracket notation
*/
let students = ['Adam', 'Alec', 'Breyanna', 'Connor', ['Derek', 'Elijah', 'Garrett'], true];
// console.log(students[4]);
/*
CHALLENGE
************
    - dive into the nested array and pull the value 'Derek'
    - print out "Hello Derek!"
*/
let derek = students[4][0]; // derek
console.log(`Hello ${derek}`);
console.log('Hello' + ' ' + students[4][0]);