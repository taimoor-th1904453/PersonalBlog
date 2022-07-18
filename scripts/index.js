import quotesRepo from '../repository/quotesoftheday.js'

document.addEventListener('DOMContentLoaded', start)

async function start() {
    let quotes = await quotesRepo.getQuotes();
    // console.log(quotes)
    await showQuotes(quotes)
    // console.log(quotes)
}

async function showQuotes(quotes){
    let randomNumber = Math.floor(Math.random() * 1644);
    document.querySelector("#quote").innerHTML = `${quotes[randomNumber].text}`

    let elem =  document.querySelector("#quote");
    let counter = 0;
    let DELAY = 10000;
    let old_timestamp = 0;

    function rotate_text(timestamp) {
        if (timestamp > old_timestamp + DELAY) {  // HAVE WE WAITED LONG ENOUGH?
            newQuote();                     // CHANGE VEGETABLE NAME.
            old_timestamp = timestamp;              // REMEMBER WHEN WE DID THAT.
        }
        requestAnimationFrame(rotate_text);       // RINSE AND REPEAT
    }
    rotate_text(0);
    function newQuote(){
        elem.innerHTML = quotes[counter++ % 8].text;
    }
}