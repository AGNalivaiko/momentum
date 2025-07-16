//// TIme 

function clock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 10) hours = "0" + hours;
    else if (minutes < 10) minutes = "0" + minutes;
    else if (seconds < 10) seconds = "0" + seconds;

    document.querySelector(".time").innerHTML = hours + ":" + minutes + ":" + seconds;

    setTimeout(clock, 1000);
}

/// Data

function date() {
    const date = new Date();

    let daysOfWeek = [
        'Sunday ',
        'Monday',
        'Thuesday',
        'Wednesday', 
        'Thursday',
        'Friday',
        'Saturday',
    ];

    let month= [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    document.querySelector('.date').innerHTML =
    `${daysOfWeek[date.getDay()]}, ${month[date.getMonth()]} ${date.getDate()}`;
}

///// Quotes 

async function getQuotes() {
    let changeQuote =  document.querySelector('.change-quote');
    let textQuote = document.querySelector('.quote');
    let author = document.querySelector('.author');

    const quotes = "data.json";
    const res = await fetch(quotes);
    const data = await res.json();

    let randomNumber = Math.floor( Math.random() * data.length);

    textQuote.innerHTML = data[randomNumber].text;
    author.innerHTML = data[randomNumber].author;

    changeQuote.addEventListener('click', () => {
        randomNumber = Math.floor( Math.random() * data.length);
        textQuote.innerHTML =  data[randomNumber].text;
        author.innerHTML = data[randomNumber].author;
    });

}

function runFunctions() {
    clock();
    date();
    getQuotes();
}
runFunctions();













