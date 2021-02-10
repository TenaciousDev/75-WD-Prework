let food = ['Pecan Pie','Chicken','Quesadilla','Cheesecake','Filet Mignon'];

//regular for loop

// for(let i = 0; i < food.length; i++) {
//   console.log(food[i]);
// }

// foreach method

food.forEach(function(foodItem) {
  console.log(foodItem);
})

/*
CHALLENGE
************
    - (Go look at MDN docs if you need a reminder):
    - Create an array containing movies
    - Use the .forEach() method to list your movies
    - Add another movie at the end of the array
    - And replace one of your existing movies with another one
*/

let movies = ['The Departed','There Will Be Blood','The Usual Suspects','Willard','The Revenent'];


movies.push('The Longest Yard');
movies.splice(3,1,'Thelma & Louise');
movies.forEach(movie => console.log(movie));