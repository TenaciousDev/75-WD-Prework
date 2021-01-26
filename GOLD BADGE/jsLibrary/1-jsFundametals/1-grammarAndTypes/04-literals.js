//* Literals are exactly what they sound like. If the value is assigned by instantiation, it's a literal.

let sammich = {
  a: 'ham',
  b: 'grilled cheese',
  c: 'cuban',
  d: 'dagwood'
}

let soup = {
  a: 'chicken noodle',
  b: 'tomato',
  c: 'beef & barley'
}

let foods = [sammich, soup];

console.log(foods[0].c); //* logs 'cuban'
console.log(foods[1].a); //* logs 'chicken noodle'