var quotes = require('random-movie-quotes')


fetch('/quote')
  .then(r => r.json())
  .then(data => {
    document.getElementById('quote').innerText = data.quote;
  });

console.log(quotes.getQuote())
console.log(`${data.quote}`)



