/*
    CHALLENGE #1
        - Write a function that holds two parameters - one for firstName, and one for lastName. The function should print the full name to the console. Invoke the function, and pass in two arguments. 
*/

function logName(firstName, lastName) {
  let fullName = `${firstName} ${lastName}`;
  console.log(fullName);
}

let f = 'John';
let l = 'Doe';
logName(f,l);

/*
    - CHALLENGE #2
        - Write a program that prints all numbers from 0-100
            - for multiples of 6, instead of the number, print 'Fizz'
            - for multiples of 8, instead of the number, print 'Buzz'
            - for multiples of 6 AND 8, instead of the number, print 'Fizz Buzz'
*/



/*
    - CHALLENGE #3
        - Write a function called findPerimeter() that accepts 2 parameters called: length, width.
            - The function should return an interpolated string of 'True: the perimeter is ___' if the perimeter is over 20
            - the function should return an interpolated string of 'False: the perimeter is ___' if the perimeter is under 20
            HINT: P = x + x + y + y
                  P = 2x + 2y
                  P = 2(x + y)
*/
/*
    - CHALLENGE #4
        - Create an object literal called library.
            - the library object will contain 3 properties: name, address, sections
                - name and address will both hold values that are strings. You can fabricate the information.
                - sections will be an object that will store a property called collections, which is an array of more objects. You should include at least 2 objects inside the collections array.
                    - the objects stored in the collections array will hold properties of classification, count, and aisle. 
                        - both the classification and aisle properties should hold strings as values, and count should hold a value that is a number.
*/