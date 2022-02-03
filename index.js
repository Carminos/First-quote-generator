const quotes = [
    {
      quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
      name: 'Nelson Mandela',
    },  
    {
      quote: 'The way to get started is to quit talking and begin doing.',
      name: 'Walt Disney',
    },
    {
      quote: 'Your time is limited, so do not waste it living someone elses life. Dont be trapped by dogma – which is living with the results of other peoples thinking.',
      name: 'Steve Jobs',
    },
    {
      quote: 'If you set your goals ridiculously high and it is a failure, you will fail above everyone elses success.', 
      name: 'James Cameron'
    }
];

const quoteBtn = document.querySelector("#quoteBtn");
const quoteTxt = document.querySelector("#quoteTxt");
const quoteAuthor = document.querySelector("#quoteAuthor");

quoteBtn.addEventListener("click", displayQuote);
function displayQuote() {
    let number = Math.floor(Math.random() * quotes.length);

    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}