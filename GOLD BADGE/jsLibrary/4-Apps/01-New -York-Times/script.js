const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //* declare variable BaseURL, assign value of API URL
const key = '';  //* my API key
let url; //* declare variable 'url'
const searchTerm = document.querySelector('.search'); //* declare variable searchTerm, assign value of .search class (from CSS/HTML)
// console.log(searchTerm);
const startDate = document.querySelector('.start-date'); //* declare variable, associate with .start-date class
const endDate = document.querySelector('.end-date'); //* declare variable, associate with .end-date class
const searchForm = document.querySelector('form'); //* declare variable, associate with HTML 'form; element
const submitBtn = document.querySelector('.submit'); //* declare variable, associate with .submit class
const nextBtn = document.querySelector('.next'); //* declare variable, associate with .next class
const previousBtn = document.querySelector('.prev'); //* declare variable, associate with .prev class
const nav = document.querySelector('nav'); //* declare variable, associate with HTML 'nav' element
const section = document.querySelector('section'); //* declare variable, associate with HTML 'section' element
nav.style.display = 'none'; //* set HTML element 'nav' property of 'display' to value === 'none' (this hides it from view)
let pageNumber = 0;//* declare variable 'pageNumber', set initial value to 0
// console.log('PageNumber:', pageNumber);
searchForm.addEventListener('submit', fetchResults); //* adds event listener to HTML 'form' element, on event 'submit' this will call fetchResults function
nextBtn.addEventListener('click', nextPage); //* adds event listener to .next class (applied to a 'button' element in HTML doc), on event 'click' this will call nextPage function
previousBtn.addEventListener('click', previousPage); //* adds event listener to .prev class (applied to a 'button' element in HTML doc), on event 'click' this will call previousPage function
function fetchResults(e) { //* declares the fetchResults function with a parameter 'e', which is the event object
    console.log(e);         //* print parameter 'e' to the console
    e.preventDefault();     //* prevent the default behaviour of parameter 'e' (in our document, this prevents page refresh on form submission)
    url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`; //* assigns value (using API-defined syntax and passing in our own variables) to previously declared 'url' variable (see line 3)
    // console.log('URL:', url);
    if (startDate.value !== '') {   //* starts a conditional, condition is startDate.value must not be empty (must not be falsy)
        console.log(startDate.value)  //* print startDate.value to the console (the actual value of startDate, not the actual string 'startDate.value)
        url += '&begin_date=' + startDate.value; //* url = url + '&begin_date=' + startDate.value
        console.log('URL:', url);       //* print string 'URL: ' to console, followed by value of 'url' variable, which comes from previous definition + added value from line 27
    }                                             //! does *****.value !== '' evaluate only '', or any falsy value???
    if (endDate.value !== '') {       //* starts a conditional, condition is endDate.value must not be empty (falsy)
        console.log(endDate.value)    //* print endDate.value to the console
        url += '&end_date=' + endDate.value; //* url = url + '&end_date=' + endDate.value
        console.log('URL:', url);       //* print string 'URL: ' to console, followed by value of 'url' variable, which comes from previous definition + added value from line 32
    }
    fetch(url)                    //* begins a fetch (browser built-in function, ASYNC) with parameter 'url' being passed in
        .then(function (result) { //* once the fetch completes (the ASYNC promise returns either pending, fulfilled, or rejected), initiates a function for resolved promises
            console.log(result)   //* log the resulting 'url' to the console
            return result.json(); //* returns the resulting 'url' in the form of JSON data through .json() method
        })
        .then(function (json) { //* takes in JSON data in the form of 'json' parameter from previous .then block, initiates function with 'json' parameter
            console.log(json);  //* log the resulting JSON data to the console
            displayResults(json); //* calls the displayResults() function, passing in JSON data in the form of 'json' argument
        })
}
function displayResults(json) {   //* declares the displayResults() function, taking in a parameter 'json' (the way this is used in our doc, this parameter comes from the fetchResults() function)
    console.log('Display Results', json); //* prints string 'Display Results' to console, followed by object contained by 'json' parameter (JSON data)
    // console.log(json.response.docs);
    while (section.firstChild) {          //* begins a while loop, taking in section.firstChild as parameter AND evaluating for 'true'; section defined on line 13, firstChild is a property that associates the first child HTML element of this section element (accessed through dot notation)
        section.removeChild(section.firstChild);  //* removes the first child HTML element of section, if one exists
    }
    let articles = json.response.docs;      //* declares variable 'articles' and assigns value of json.response.docs. 'json' is the parameter we took in on line 45, which is JSON data from fetchResults(). .response is either browser built-in, JSON built-in, or an API property. .docs is an API property of the .response property
    console.log(articles);    //* print 'articles' data to console (from json.response.docs)
    if (articles.length === 0) {    //* begins a conditional, taking in articles.length (a count of objects in the array) and evaluating for strictly 0
        console.log('No results');  //* print 'No results' to console if line 53 evaluates true (there are no articles in the array)
    } else {                        //* extends the conditional with an 'else' case
        for (let i = 0; i < articles.length; i++) { //* begins a 'for' loop, initializing 'i = 0'; as long as 'i' is less than the number of articles in the array; increment 'i' upward by one during each iteration
            // console.log(i);
            let article = document.createElement('article');    //* declare variable 'article', sets value to create article HTML element
            let heading = document.createElement('h2');         //* declare variable 'heading', sets value to create h2 HTML element
            let link = document.createElement('a');             //* declare variable 'link', sets value to create anchor HTML element
            let img = document.createElement('img');            //* declare variable 'img', sets value to create img HTML element
            let para = document.createElement('p');             //* declare variable 'para', sets value to create p HTML element
            let clearfix = document.createElement('div');       //* declare variable 'clearfix', sets value to create div HTML element (we set class 'clearfix' later)
            let current = articles[i];                          //* declare variable 'current', sets value to index of article in array equal to value of 'i' during current iteration of 'for' loop
            console.log('Current:', current);     //* prints string 'Current:' to console, followed by JSON format of object 'article' as defined on line 64
            link.href = current.web_url;              //* sets property 'href' of variable 'link' to the web_url property of current 'article'
            link.textContent = current.headline.main; //* sets property 'textContent' of variable 'link' to the headline.main property of current 'article'
            para.textContent = 'Keywords: ';          //* sets property 'textContent' of variable 'para' to string 'Keywords: ', followed by:
            for (let j = 0; j < current.keywords.length; j++) {   //* begins 'for' loop, initializing 'j = 0'; as long as j is less than the number of keywords in the current 'article'; increment 'j' upward by one during each iteration
                let span = document.createElement('span');    //* declares variable 'span', sets value to create span HTML element
                span.textContent += current.keywords[j].value + ' ';  //* sets property 'textContent' of variable 'span' to append (as a string) the value of the current article's keyword value (assessed by the incrementation of 'j')
                para.appendChild(span);         //* adds HTML element 'span' (containing a string of keywords[j].value) to the para variable (defined as HTML 'p' element, line 62)
            }
            if (current.multimedia.length > 0) {            //* begins a conditional, taking in current.multimedia.length (the length of an array containing multimedia documents) and evaluating for a length of this array greater than 0
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;    //* if true, sets 'src' property of 'img' HTML element to a url that conforms to the API url standards through string concatenation
                img.alt = current.headline.main;      //* if true, sets the 'alt' property of 'img' HTML element (alt text should the image not display) equal to the current article's property 'headline.main'
            }
            clearfix.setAttribute('class', 'clearfix'); //* see line 63 --- here is where we set the newly created 'div' HTML element to have a class of 'clearfix', for appropriate stylings from our CSS doc
            heading.appendChild(link);    //* append (as a child element) the value of 'link' (HTML anchor) to the 'heading' element
            article.appendChild(heading); //* append (as a child element) the value of 'heading' element to the 'article' element
            article.appendChild(img);   //* append (as a child element) the value of 'img' (ostensibly an image file, but could be any multimedia contained within the multimedia array) to the 'article' element
            article.appendChild(para);    //* appends (as a child element) the value of 'para' element to the 'article' element
            article.appendChild(clearfix);  //* appends (as a child element) the value of 'clearfix' element to the 'article' element
            section.appendChild(article);   //* appends (as a child element) the value of the complete 'article' element to the 'section' element
        }                                   //! All of this appending done above is basically just creating a new search result that contains relevant data (text, images, and hyperlinks), and placing it in the search results section of the page. it is also ensuring the correct styling/spacing through the 'clearfix' div
    }
    if (articles.length === 10) {         //* begins a conditional, taking in the number of articles in the current array and evaluating for a strict value of 10
        nav.style.display = 'block';      //* if true (strict value of 10 articles in the array), display the 'nav' element as a block-level element
    } else {                              //* opens up an 'else' case
        nav.style.display = 'none';       //* do not display the 'nav' element if the conditional evaluates false (there are fewer or greater than 10 articles in the array)
    }
}
function nextPage(e) {                    //* begin a function 'nextPage', taking in parameter 'e'
    // console.log('Next button clicked');
    pageNumber++;                           //* increment value of 'pageNumber' variable upward by one
    fetchResults(e);                        //* call fetchResults function, passing in the 'e' paramter from within this function
    console.log('Page Number:', pageNumber);  //* print string 'Page Number:' to console, followed by value of 'pageNumber'
}                                           //! this function is referenced on line 18, it is called on 'click' of nextBtn
function previousPage(e) {                //* begin function 'previousPage', taking in parameter 'e'
    // console.log('Previous button clicked');
    if (pageNumber > 0) {                 //* begin conditional, evaluating for a pageNumber value of greater than 0 (you can't be on the first page for this to happen)
        pageNumber--;                     //* increment value of 'pageNumber' variable downward by one
    } else {                              //* opens up an 'else' case
        return;                           //* returns the result of conditional (in this case, this means the conditional ends without returning data)
    }
    fetchResults(e);                      //* calls fetchResults function, passing in the 'e' parameter from within this function
    console.log('Page:', pageNumber);     //* print string 'Page:' to console, followed by the value of 'pageNumber'
}                                         //! this function is referenced on line 19, it is called on 'click' of prevBtn
      //! Together, these last two functions provide navigational guidance to the user