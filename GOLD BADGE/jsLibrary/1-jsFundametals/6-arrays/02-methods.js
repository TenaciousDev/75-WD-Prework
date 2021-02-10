let food = ['Pecan Pie','Chicken','Quesadilla','Cheesecake','Hotdog'];

// push method - add item(s) to end of array

food.push('Pizza');
console.log('push:',food);

// splice - remove, replace, or add new item(s) to the array

food.splice(4,1);
console.log('splice:',food);

food.splice(2,0,'Filet Mignon');
console.log(food);

// pop - remove the last item of an array

food.pop();
console.log('pop:',food);

// shift - remove the first item of an array

food.shift();
console.log('shift:',food);

// unshift - add item(s) to the beginning of array

food.unshift('Pecan Pie');
console.log('unshift:',food);