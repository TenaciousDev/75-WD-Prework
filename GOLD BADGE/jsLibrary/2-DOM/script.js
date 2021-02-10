//* 1. Test
let x = 10;
console.log(x);

//* 2. - getElementById()
//*   best practice to store elements we're grabbing from the HTML in a variable so we can reference them again later on if needed
let testParagraph = document.getElementById('testParagraph');
console.log(testParagraph);

testParagraph.style.color = 'blue';

//* 3. querySelectorAll() & innerText / innerHTML

console.log(document.querySelectorAll('p.sampleClass'));

document.querySelectorAll('p.sampleClass')[1].innerText = 'My text has changed';

let changeAll = document.querySelectorAll('p.sampleClass');

changeAll.forEach(pTag => {
  // console.log(pTag);
  // pTag.innerText = 'My text has changed using a forEach() method!';
  // pTag.textContent = 'My text has changed using a forEach() method!';
  pTag.innerHTML = '<i>My text has changed using a forEach() method!</i>';
});

/*
  * - innerText simply references or allows us to change the text of a specified element. Will return only visible text in a 'node'.
  * - textContent does the same thing that innerText does, but it will return the full text of a 'node'.
  * - innerHTML allows us to set text as well as HTML elements. The HTML elements will be nested inside of the current HTML element we're referencing.
*/

// 3.5 textContent vs innerText
console.log(document.getElementById('spanTest').innerText);
console.log(document.getElementById('spanTest').textContent);

// 4
//* addEventListener()

let button = document.getElementById('clickThisButton');
// console.log(button);
button.addEventListener('click',event => {
  // console.log(event.target);
  // event.target.style.backgroundColor = 'transparent';

  if (event.target.style.backgroundColor == 'orange') {
    event.target.style.backgroundColor = 'red';
  } else if (event.target.style.backgroundColor == 'red') {
    event.target.style.backgroundColor = 'cyan';
  } else {
    event.target.style.backgroundColor = 'orange';
  }
});


// 5. addEventListener() / getElementsByTagName()

let inputField = document.getElementById('nameInput');
// console.log(inputField);
inputField.addEventListener('keyup',event => {
  let evTarget = event.target;
  // console.log(event.target.value);

  let pTags = document.getElementsByTagName('p');
  // console.log(pTags);
  pTags[0].innerText = 'SOMETHING CHANGED.'

  if (evTarget.value == '') {
    pTags[1].innerText = 'NOTHING HAS BEEN TYPED';
  } else {
    pTags[1].innerText = `Everyone, say hello to ${evTarget.value}`;
  }
})

