const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));

const quotes = require('random-movie-quotes')

app.get('/quote', async (req, res, next) => {
  try {
    const quote = await quotes.getQuote()
    res.json(quote);
  } catch (err) {
    console.error(err)
  }

});


app.get('/quote', (req, res) => {
  res.json({
    quote: quotes.getQuote()
  });
});

app.get('/random', function(request, response) {
  let randomQuote = data[random(0, data.length - 1)]
  if (randomQuote) response.json(randomQuote)
})



app.listen(port, () => console.log(`Awesome app listening on port ${port}!`));
