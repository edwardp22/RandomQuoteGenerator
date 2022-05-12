"use strict";

// variable storing the current quote displayed, this is used to avoid repeating the same quote
let currentQuote;

// list of quotes
const quotes = [
  {
    quote: "Be yourself and people will like you.",
    source: "Jeff Kinney",
    year: 2011,
  },
  {
    quote:
      "The moment you doubt whether you can fly, you cease forever to be able to do it.",
    source: "J.M.Barrie",
    citation: "Peter Pan",
  },
  {
    quote: "Time you enjoy wasting is not wasted time.",
    source: "Marthe Troly-Curtin",
    year: 2004,
  },
  {
    quote: "The worst enemy to creativity is self-doubt.",
    source: "Sylvia Plath",
    citation: "The Unabridged Journals of Sylvia Plath",
  },
  {
    quote:
      "Hoping for the best, prepared for the worst, and unsurprised by anything in between.",
    source: "Maya Angelou",
    year: 2003,
  },
  {
    quote:
      "We all require devotion to something more than ourselves for our lives to be endurable.",
    source: "Atul Gawande",
    citation: "Being Mortal",
  },
  {
    quote:
      "There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.",
    source: "Sarah Dessen",
    year: 2000,
  },
  {
    quote: "Even the darkest night will end and the sun will rise.",
    source: "Victor Hugo",
    citation: "Les Misérables",
  },
  {
    quote: "You are your best thing.",
    source: "Toni Morrison",
    year: 1980,
  },
  {
    quote: "I am not afraid of storms, for I am learning how to sail my ship.",
    source: "Louisa May Alcott",
    citation: "Little Women",
  },
];

/**
 * returns a different random quote from quotes array
 * @returns object
 */
function getRandomQuote() {
  let newQuote;

  // looping until a different quote is generated
  do {
    newQuote = Math.floor(Math.random() * quotes.length);
  } while (newQuote === currentQuote);

  currentQuote = newQuote;

  return quotes[currentQuote];
}

/**
 * assign inner HTML with quote information to container
 */
function printQuote() {
  // getting a new random quote
  const randomQuote = getRandomQuote();
  // destructuring quote for easier use in code
  const { quote, source, citation, year } = randomQuote;
  // concatenating HTML to display
  let ptoHTML1 = `
    <p class='quote'>${quote}</p>
    <p class='source'>
        ${source}
  `;

  if (citation) {
    ptoHTML1 += `
        <span class='citation'>${citation}</span>
    `;
  }

  if (year) {
    ptoHTML1 += `
        <span class='year'>${year}</span>
    `;
  }

  ptoHTML1 += "</p>";

  document.getElementById("quote-box").innerHTML = ptoHTML1;
}

// attach an event listener to load-quote to print a new quote
document.getElementById("load-quote").addEventListener("click", printQuote);
