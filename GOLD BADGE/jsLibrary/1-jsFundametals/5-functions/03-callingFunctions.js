function hello() {
  console.log('hey there');
}

/*
CHALLENGE
************
*   - Create a function that, when invoked, lists out the numbers 1-10
*/

function counter() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// counter();

/*
CHALLENGE
************
    - Given the array, create a function that lists out the values individually.
*/
let arr = ['This', 'is', 'really', 'cool'];

function list() {
  for (let i in arr) {
    console.log(arr[i])
  }
}

function print() {
  for (let i of arr) {
    console.log(i);
  }
}

print();