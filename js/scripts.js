var $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

var $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

var createElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.setAttribute('class', className);

  if (text) {
    element.textContent = text;
  }

  return element;
};


var elBtn = $_('.js-btn');
var elQuoteText = $_('.quote-text');
var elAuthor = $_('.author');


var quotes = [
  {
    author: `Albert Einstein`,
    text: `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`
  },
  {
    author: `Mahatma Gandhi`,
    text: `Be the change that you wish to see in the world.`
  },
  {
    author: `Alisher Navoi`,
    text: `Salve, I have not found, pages of books, flipping through The body plagued me in the blood - not birds ofprey if a pack? Flames of love my heart burned, and bitter in the desert Didn't find no healing I sheet.`
  },
  {
    author: `Nelson Mandela`,
    text: `The greatest glory in living lies not in never falling, but in rising every time we fall.`
  },
  {
    author: `Steve Jobs`,
    text: `Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.`
  },
  {
    author: `James Cameron`,
    text: `If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.`
  }
]


function getRandomNumber() {
  return Math.floor(Math.random() * quotes.length);
}


function generateQuote() {
  var randomNumber = getRandomNumber();
  for(var i = 0; i < quotes.length; i++) {
    elQuoteText.textContent = quotes[randomNumber].text;
    elAuthor.textContent = quotes[randomNumber].author;
  }
}


elBtn.addEventListener('click', generateQuote);