const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const weatherError = document.querySelector('.weather-error');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');

async function getWeather() {
    let error =  city.value || '';
    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=$en&appid=c5d262c6cf11150287b62da4b1818e48&units=metric`;

    try { 
        const res = await fetch(url);
        const data = await res.json();

        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${data.main.temp.toFixed(0)}°C`;        
        weatherDescription.textContent = data.weather[0].description;
        wind.textContent = `Wind speed: ${Math.floor(data.wind.speed)} м/с`;
        humidity.textContent = `Humidity: ${Math.floor(data.main.humidity)}%`;
        weatherError.classList.add('hide');

        weatherDescription.classList.remove('hide');
        temperature.classList.remove('hide');
        wind.classList.remove('hide');
        humidity.classList.remove('hide');
        weatherIcon.classList.remove('hide');
    }
    catch {
        weatherError.classList.remove('hide');
        weatherError.textContent = 'Enter your city';

        weatherDescription.classList.add('hide');
        temperature.classList.add('hide');
        wind.classList.add('hide');
        humidity.classList.add('hide');
        weatherIcon.classList.add('hide');

        if (error === '') {weatherError.textContent = 'Enter your city'}
        else {weatherError.textContent = 'Incorrect name'};
    }

    
}

function setCity(event) {
    if (event.code === 'Enter') {
        getWeather();
        city.blur();
    }
}

function setLocalStorage() {
    localStorage.setItem("city", city.value);
}

function getLocalStorage() {
    let nameFromLS = localStorage.getItem("city");

    if (nameFromLS !== null) {
        city.value = nameFromLS;
    }
    getWeather()
}

window.addEventListener('beforeunload', setLocalStorage) ;
window.addEventListener('load', getLocalStorage);

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);



