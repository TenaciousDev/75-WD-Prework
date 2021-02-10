/*
    - scope is how a computer keeps track of all variables/functions in a program
        - global scopes: available throughout the entirety of the application
        - local scope: only available within the scope they were created in - so not available globally
*/
let x = 12;
function scope() {
    // what is inside of the curly braces (body of function) is a local scope
    let x = 33;
    console.log(x);
}
scope();
console.log(x);
//
// we can access a globally scoped variale within a local scope
let y = 12;
function scopeTwo() {
    y = 33;
    console.log(y);
}
scopeTwo();
console.log(y);
// we cannot access a locally scoped variable in the global scope of our document
function scopeThree() {
    let z = 4;
    console.log(z);
}
scopeThree();
console.log(z);
/*
    const - const variables are variables that cannot be re-initialized, their values are constant
    - var and let seem to operate the same and share a lot of the same functionalities (they both allow us to declare and initialize variables), but they also have qualities that make them behave different from one another
        - var: the var keyword is scoped to the nearest function block
        - let: the let keyword is scoped to the nearest enclosing block
*/
// var
var x = 12;
function varTest() {
    var x = 33;
    if (true) {
        var x = 45;
        console.log(x); // x variable that's locally scoped to the if
    }
    console.log(x); // x variable thats locally to the function
}
varTest();
console.log(x); // x variable thats scoped globally
// let 
let y = 12;
function letTest() {
    var y = 33;
    if (true) {
        let y = 45; 
        console.log(y);
    }
    console.log(y);
}
letTest();
console.log(y);