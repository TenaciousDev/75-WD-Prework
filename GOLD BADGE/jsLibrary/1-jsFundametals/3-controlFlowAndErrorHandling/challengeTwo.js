/*
CHALLENGE
************
    Use this string: let name = 'zAchARy';
    Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string without the first letter, and change them to lowercase
    Gold:
    If the first letter of a string is uppercase, console.log that first letter of the string, plus the rest of the string to lowercase
    If the first letter is not uppercase, console.log the first letter of the string to uppercase, plus the rest of the string to lowercase
*/

let str = 'zAchARy';

//* BRONZE
if (str.charAt(0) === (str.charAt(0).toUpperCase())) {
    console.log(str);
} else {
    console.log("Hey, this isn't written correctly");
}

//* SILVER

if (str.charAt(0) === (str.charAt(0).toUpperCase())) {
    console.log(str.charAt(0));
} else {
    console.log(str.substr(str.length - (str.length - 1)).toLowerCase());
}

//* GOLD

if (str.charAt(0) === (str.charAt(0).toUpperCase())) {
    console.log(str.charAt(0).toUpperCase() + str.substr(str.length - (str.length - 1)).toLowerCase());
} else {
    console.log(str.charAt(0).toUpperCase() + str.substr(str.length - (str.length - 1)).toLowerCase());
}
