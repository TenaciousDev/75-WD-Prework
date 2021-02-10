/*
  - object bracket notation [] can also be used to reference or pull values out of an object
    - when accessing keys in an object, you will use dot notation most of the time - but thre are some use cases as to why we would want/need to use object bracket notation instead

  - REMINDER: all keys in objects are strings
*/

let garden = {
  vegetable: 'zucchini',
  flower: 'sun flower',
  fruit: 'grape',
  water: true,
  sun: true,
  size: 10
}

// let test = Object.keys(garden);
// console.log(test);
// console.log(typeof test[0]);
// console.log(garden.vegetable); //standard dot notation

let zucchini = garden['vegetable'];
console.log(zucchini);

let baking = {};
baking['zucchini'] = 'better make some bread';
console.log(baking);

console.log(baking[garden['vegetable']]);

let testObj = {
  "Spaces here": true,
  noSpaces: true
}

console.log(testObj.noSpaces);
console.log(testObj["Spaces here"]);

