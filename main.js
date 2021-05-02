const api = {
    key: "452d4aed3cc11738b27db350eb31bf57",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt){
    if(evt.keyCode == 13) {
        getResults(searchbox.value);
    }
}

function getResults(query) {
    fetch(`${api.baseurl}weather?q=${query}&appid=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResult);
}

function search() {
    let search = document.querySelector('.search-box').value;
    getResults(search);
}

function displayResult(weather) {
    console.log(weather);
    let city = document.querySelector('.city');
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;
    let now = new Date();
    let date = document.querySelector('.date');
    date.innerHTML = dateBuilder(now);
    let temp = document.querySelector('.temp');
    temp.innerHTML = `${Math.round(weather.main.temp - 231)}<span>°F</span>`;
    let weat = document.querySelector('.weather');
    weat.innerHTML = `${weather.weather[0].main}`;
    let hilow = document.querySelector('.hi-low');
    hilow.innerHTML = `${Math.round(weather.main.temp_min - 231)}°F / ${Math.round(weather.main.temp_max - 231)}°F`;
}

    function dateBuilder(d) {
        let days = ["Sunday", "Monday", "Tuesday", "Wedsnesday", "Thursday", "Friday", "Saturday"];
        let day = days[d.getDay()];
        let date = d.getDate();
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return `${day}, ${date}, ${month}, ${year}`;
    }

    function boom() {
        alert('I am just an experienced web developer who looks for a new opportunity in tech.. So please give me a chance and hire me.');
    }