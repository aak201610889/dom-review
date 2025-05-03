
let btn=document.querySelector('.new-qoute')
let quote=document.querySelector('.quote')
let person=document.querySelector('.person')
const quotes = [
  {
    quote: "The best way to find yourself is to lose yourself in the service of others.",
    person: "Mahatma Gandhi"
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    person: "Albert Einstein"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    person: "Winston Churchill"
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    person: "John Lennon"
  },
  {
    quote: "The only limit to our realization of tomorrow is our doubts of today.",
    person: "Franklin D. Roosevelt"
  },
  {
    quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    person: "Ralph Waldo Emerson"
  },
  {
    quote: "Believe you can and you're halfway there.",
    person: "Theodore Roosevelt"
  }
];


btn.addEventListener('click',()=>{
  console.log('fffffffffffffff')
  let random=Math.floor(Math.random()*quotes.length)

  quote.innerText=quotes[random].quote
  person.innerText=quotes[random].person
})