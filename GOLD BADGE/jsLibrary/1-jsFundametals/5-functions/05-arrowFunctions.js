

let hi = () => {
  console.log('hi');
}

hi();


//concise

let hiAgain = () => console.log('hi');
hi();

let character = x => console.log(`${x} is my favorite character!`);
character('Sailor Moon');

let characters = (x,y) => {
  console.log(`I like Parks and Rec. My favorite characters are ${x} and ${y}`);
}

characters('Leslie', 'Ron');