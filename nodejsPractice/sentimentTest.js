var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var result = sentiment.analyze('Cats are smart.');
console.dir(result); // Score: -Comparative: -0.666