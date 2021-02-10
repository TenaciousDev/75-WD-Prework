let favoriteMovie = {
  nameOfMovie: "Weekend at Da Vinci's",
  runTime: 157,
  genre: "RomZomCom",
  characters: [
    {
      name: "Leonardo",
      age: 569,
      items: [
        {
          item: "candlestick",
        },
        { item: "plasma cannon w/ SXR-3900 top-mounted optic" },
      ],
    },
    {
      name: "Hattie",
      age: 31,
      items: [
        {
          item: "vial of glowing chartreuse ointment",
        },
        {
          item: "Leonardo's drawing utensils",
        },
      ],
    },
  ],
};

console.log(`Now Showing: ${favoriteMovie.nameOfMovie}!`);
console.log(`Runtime: ${favoriteMovie.runTime} minutes.`);
console.log(
  `Starring: ${favoriteMovie.characters[0].name} & ${favoriteMovie.characters[1].name}!`
);
console.log(
  `In this film, ${favoriteMovie.characters[0].name} possesses the items: ${favoriteMovie.characters[0].items[0].item} & ${favoriteMovie.characters[0].items[1].item}; whereas ${favoriteMovie.characters[1].name} possesses: ${favoriteMovie.characters[1].items[0].item} & ${favoriteMovie.characters[1].items[1].item}!`
);
