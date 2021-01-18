function hello() {
  console.log("Hello world!");
}

hello();

function pacersWon(){
  console.log("Pacers won!");
}

pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();

function addAnyTwoNumbers(x, y){
  console.log(x + y);
}

addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(6, 11);
addAnyTwoNumbers(7, 8);

function fullName(firstName, lastName){
  return firstName + " " + lastName;
}
console.log(fullName("Adam","Metcalf"));

function getTotalPrice(quantity, price){
  let totalPrice = 1.07 * quantity * price;
  return totalPrice;
}
console.log(getTotalPrice(17,5));

//The 'return' statement tells the function 'okay, this is the end, give me what you've got'.  It returns (as in 'presents to the user') the result of all functions run thus far, and no further.  Although we haven't covered the JavaScript for it yet, I'm guessing JS also has Async versions such as 'await', which is like return but for asynchronous operations.