function getNewRandomQuote () {
	fetch("https://quoteslate.vercel.app/api/quotes/random")
  .then(res => res.json())
  .then(data => {
    const quoteText = data.quote
    const quoteAuthor = data.author
    document.getElementById('random-quote-text').innerHTML = quoteText
    document.getElementById('random-quote-author').innerHTML = quoteAuthor
  })


}