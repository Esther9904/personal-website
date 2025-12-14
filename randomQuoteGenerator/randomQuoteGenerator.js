const randomQuotesGeneratorElement = document.getElementById('random-quote-generator')
const colors = [
  ["#d742f5","#3b323d"],
  ["#184d27","#19184d"],
  ["#f2059f", "#f28005"],
  ["#171716","#24474f"],
  ["#4f2428","#d6d62d"],
  ["#d65d2d","#991f85"],
  ["#80f205","#53594d"],
  ["#579984","#180330"],
  ["#8f2481","#815c00"],
  ["#a39674","#74a380"],
  ["#c5c1f5","#f5c1f0"],
  ["#98c48b","#fcfcfc"],
  ["#ab7d65","#8cf5ad"],
]
function getRandomColorCombo () {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex]

}
  

function getNewRandomQuote () {
	fetch("https://quoteslate.vercel.app/api/quotes/random")
  .then(res => res.json())
  .then(data => {
    const colorCombo = getRandomColorCombo()
    randomQuotesGeneratorElement.style.background = 'linear-gradient(45deg, ' + colorCombo[0] + ', ' + colorCombo[1]+ ')'
    const quoteText = data.quote
    const quoteAuthor = data.author
    document.getElementById('random-quote-text').innerHTML = quoteText
    document.getElementById('random-quote-author').innerHTML = quoteAuthor
  })


}