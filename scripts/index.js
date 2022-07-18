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
}