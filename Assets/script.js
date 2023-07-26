let cityName = document.querySelector('#userInput');
let theButton = document.querySelector(".btn");
let rightNow = document.querySelector(".right-now");
let weatherCond = document.querySelector(".weather")
let feelsLike = document.querySelector(".feels-like");
let highTemp = document.querySelector(".high");
let lowTemp = document.querySelector(".low");
let cards = document.querySelectorAll(".card");
let test = document.querySelector(".test");


console.log();

theButton.addEventListener('click', GO);

function GO(event) {
    const locationRequest = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityName.value + '&limit=1&appid=4d8f86000d241e776281dc749be197b9';
    historyButtons(cityName);
    console.log();
    fetchInfo(locationRequest);
    event.preventDefault();
}

function fetchInfo(locationRequest) {
    fetch(locationRequest)
        .then(function (response) {
            return response.json();
        })
        .then(function (newResponse) {
            const latitude = newResponse[0].lat;
            const longitude = newResponse[0].lon;
            const newCity = newResponse[0].name;
            const urlRequest = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=4d8f86000d241e776281dc749be197b9&units=imperial';
            fetch(urlRequest)
                .then(function (response) {
                    return response.json()
                })
                .then(function (secRequ) {
                    console.log()
                    sharedData (secRequ, newCity);
                })
        })
};

function sharedData(secRequ, newCity) {
    console.log(secRequ)
    
    currentWeather(secRequ.list, secRequ.city.name);

    console.log();
}

function historyButtons(city) {
    console.log(city);
}

function currentWeather(data,city) {
    for (let i = 0; i < data.length; i = i + 8) {
        let currentCard = document.createElement("div");
        let currentTitle = document.createElement("h5")
        let currentTemp = document.createElement("div")
        let currentDescr= document.createElement("div")
        let currentFeels = document.createElement("div")
        let tempLow = document.createElement("div");
        let tempHigh = document.createElement("div");
        console.log();

        currentCard.setAttribute("class", "cards")
        currentTemp.textContent = "Temp: " + data[i].main.temp
        currentDescr.textContent = " Description: " + data[i].weather[0].description
        currentFeels.textContent = "Feels like: " + data[i].main.feels_like
        tempLow.textContent = 'Low: ' + data[i].main.temp_min
        tempHigh.textContent = 'High: ' + data[i].main.temp_max

        let weekDay = dayjs(data[i].dt_txt).format("ddd");
        currentTitle.textContent = weekDay;
        console.log(weekDay);

        test.classList.add("card-group");
        currentCard.classList.add("card", "card-body");
        currentTitle.classList.add("card-title");
        currentTemp.classList.add("card-text");
        currentDescr.classList.add("card-text");
        currentFeels.classList.add("card-text");
        tempLow.classList.add("card-text");        
        tempHigh.classList.add("card-text");

        currentCard.appendChild(currentTitle);
        currentCard.appendChild(currentTemp);
        currentCard.appendChild(currentDescr);
        currentCard.appendChild(tempHigh);
        currentCard.appendChild(tempLow);
        document.querySelector(".test").append(currentCard)
        console.log()
    }
}

function createCard(currentCard, weatherData) {
    for (i = 0; i < weatherData.length; i++) {
        weatherData = document.createElement("li");
    }
    console.log(weatherData);
}