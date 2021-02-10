const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //declare variable BaseURL, assign value of API URL
const key = 'A8WiwzKYpVMzW9sGOEpq5Mkf4wIlDDU6'; //my API key
let url; // declare variably 'url'

//* SEARCH FORM
const searchTerm = document.querySelector('.search'); // declare variable searchTerm, 
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//* RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage)

//* RESULTS SECTION
const section = document.querySelector('section');

nav.style.display = 'none';
let pageNumber = 0;
console.log('PageNumber:', pageNumber);
let displayNav = false;

        //1                     //2   
searchForm.addEventListener('submit', fetchResults); 
nextBtn.addEventListener('click', nextPage); //3
previousBtn.addEventListener('click', previousPage); //3

function fetchResults(e) {
    e.preventDefault();
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;

    if(startDate.value !== '') {
      console.log(startDate.value);
      url += '&begin_date=' + startDate.value;
    };

    if(endDate.value !== '') {
      console.log(endDate.value);
      url += '&end_date=' + endDate.value;
    };

    fetch(url)
      .then(function(result){
        return result.json();
      }).then(function(json){
        displayResults(json);
      });
  }

  function displayResults(json) {
    while (section.firstChild) {
      section.removeChild(section.firstChild);
    }
    
    let articles = json.response.docs; //! initially threw console error if json.response === undefined, unsure why but no longer throws error

    if(pageNumber === 0) {
      previousBtn.style.display = 'none';
    } else {
      previousBtn.style.display = 'inherit';
    }

    if(articles.length >= 10) { //* instructions here (===) don't do what they say, so I fixed it
      nav.style.display = 'block';
      nextBtn.style.display = 'inherit';
    } else if((articles.length <= 10) && (pageNumber !== 0)) {
      nav.style.display = 'block';
      nextBtn.style.display = 'none';
    } else {
      nav.style.display = 'none';
    }

    if(articles.length === 0){
      console.log("No Results!");
    } else {
      //Display the data
      // for(i in articles) //* same as below (first we enumerate)
      for(let i = 0; i < articles.length; i++) {  //* same as above (first we enumerate)
        let article = document.createElement('article'); //1 after enumeration, we iterate
        let heading = document.createElement('h2'); //2 we are also iterating here
        let link = document.createElement('a');
        let img = document.createElement('img');
        let para = document.createElement('p');
        let clearfix = document.createElement('div');

        let current = articles[i];
        console.log("Current:", current);

        link.href = current.web_url;
        link.textContent = current.headline.main;
        link.target = '_blank';

        para.textContent = 'Keywords: ';

        for(let j = 0; j < current.keywords.length; j++) {
          let span = document.createElement('span');
          span.textContent += current.keywords[j].value + ' ';
          para.appendChild(span);
        }

        if(current.multimedia.length > 0) {
          img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
          img.alt = current.headline.main;
        }

        clearfix.setAttribute('class','clearfix');

        article.appendChild(heading);
        heading.appendChild(link);
        article.appendChild(img);
        article.appendChild(para);
        article.appendChild(clearfix);
        section.appendChild(article);
      }
    }
  };

function nextPage(e){
  pageNumber++;
  fetchResults(e);
  console.log("Page number:", pageNumber);
} //5

function previousPage(e){
  if(pageNumber > 0) {
    pageNumber--;
  } else {
    return;
  }
  fetchResults(e);
  console.log("Page number:", pageNumber);
}; //5