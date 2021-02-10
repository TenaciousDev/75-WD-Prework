let starWarsPeopleList = document.querySelector('ul');

fetch('https://swapi.dev/api/people')
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    let people = json.results;

    for(p of people) {
      let listItem = document.createElement('li');
      listItem.innerHTML = '<span>' + p.name + '</span>';
      starWarsPeopleList.appendChild(listItem);
      let itemHeight = document.createElement('ul','li');
      itemHeight.innerHTML = '<span>' + p.height + '</span>';
      listItem.appendChild(itemHeight);
    }
  })