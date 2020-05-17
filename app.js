const endpoint= 'https://api.whatdoestrumpthink.com/api/v1/quotes/random'




const newQuoteButton = document.querySelector('.new-quote');
newQuoteButton.addEventListener('click', getQuote);
const quoteText = document.querySelector('.quote-text');
const tweetButton = document.querySelector('.tweet');

//display the code on the page
function displayQuote(quote) {
    quoteText.textContent = quote;
    
    tweetButton.setAttribute('href', `https://twitter.com/share?text=${quote}`);
  };


function getQuote(){
    //make a rqst to the API
    fetch(endpoint)
     //convert raw data into json file
    .then(function (response){
        return response.json();
    })
    //and then
    .then(function (data) {
        displayQuote(data.message);
    })
    //this is executed if any of above throw error
    .catch(function(){
        console.log("An error occurred");
    });
};


getQuote();
