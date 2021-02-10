// let student = {
//   name: 'Peter',
//   awesome: true,
//   degree: 'javascript',
//   week: 1
// }

// for (let item in student) {
//   console.log(item);
//   console.log(student[item]);
// }

// let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

// console.log(catArray[0]);
// return;
// for (let cat in catArray) {
//   console.log(catArray[cat])
// }

/*
* CHALLENGE
************
    - write a for in loop that capitalizes the first letter of a name, and lowercases the rest of the name
*/

let str = 'cleopatra';

for (let c in str) {
  let r = str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase();
  console.log(r);
  break;
}