fetch("https://rickandmortyapi.com/api/character")
  .then(function (result) {
    return result.json();
  })
  .then(function (json) {
    displayResults(json);
  });

function displayResults(json) {
  let imgOne = json.results[0].image;
  let imgTwo = json.results[1].image;
  let rick = document.querySelector("#imageOne");
  let morty = document.querySelector("#imageTwo");

  rick.setAttribute("src", imgOne);
  morty.setAttribute("src", imgTwo);
}
