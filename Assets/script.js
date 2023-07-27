let cardArea = document.querySelector(".weather-display");
let searchBtn = document.querySelector("#submit-btn");
let userInput = document.querySelector("#userInput");
let theButton = document.querySelector(".btn");
let test = document.querySelector(".test");

let currentCard = '';

//calls the history function to display the past searches
historyButtons(userInput);

//starts the process
searchBtn.addEventListener('click', GO);

//if/else statement to either refresh the page and start over or carry on with the process
function GO (event) {
    event.preventDefault();
    if (!userInput.value) {
        window.location.reload();
    } else if (userInput.value) {
        console.log(userInput.value);
        buttonHandler ();
        userInput.value = null;
    } ;
}

//calls the functions that display the recent history and begin the fetches
//also deactivates search input, and makes the search button a reset button
function buttonHandler (event) {
    const locationRequest = 'http://api.openweathermap.org/geo/1.0/direct?q=' + userInput.value + '&limit=1&appid=4d8f86000d241e776281dc749be197b9';
    userInput.disabled = true;
    searchBtn.textContent = "RESET";
    console.log();
    fetchInfo(locationRequest);
}

//first fetch obtains data about the city
function fetchInfo(locationRequest) {
    fetch(locationRequest)
        .then(function (response) {
            return response.json();
        })

        //promise pulls the latitude, longitude, and city name out of the data
        .then(function (newResponse) {
            const latitude = newResponse[0].lat;
            const longitude = newResponse[0].lon;
            const newCity = newResponse[0].name;
            const urlRequest = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=4d8f86000d241e776281dc749be197b9&units=imperial';

            //fetch pulls the response and passes it along as a string
            fetch(urlRequest)
                .then(function (response) {
                    console.log();
                    return response.json()
                })
                .then(function (secRequ) {
                    console.log()
                    sharedData (secRequ, newCity);
                }) 
        }
    )
};

//passes along our string of city data as a .list and a .city.name to truncate our typing down the line
function sharedData(secRequ, newCity) {
    currentWeather(secRequ.list, secRequ.city.name);
}

//displays past buttons to be reused
function historyButtons(city) {
}

//creates dynamic elements
function currentWeather(data, city) {
    for (let i = 0; i < data.length; i = i + 8) {
        currentCard = document.createElement("div");
        let currentTitle = document.createElement("h5")
        let currentTemp = document.createElement("div")
        let currentDescr= document.createElement("div")
        let currentFeels = document.createElement("div")
        let tempLow = document.createElement("div");
        let tempHigh = document.createElement("div");

        //implements for loop to find the relevant data 
        currentCard.setAttribute("class", "cards")
        currentTemp.textContent = "Temp: " + data[i].main.temp
        currentDescr.textContent = " Description: " + data[i].weather[0].description
        currentFeels.textContent = "Feels like: " + data[i].main.feels_like
        tempLow.textContent = 'Low: ' + data[i].main.temp_min
        tempHigh.textContent = 'High: ' + data[i].main.temp_max

        //collects the weekday data
        let weekDay = dayjs(data[i].dt_txt).format("ddd");
        currentTitle.textContent = weekDay;
        console.log(weekDay);

        //adds bootstrap classes to cards
        cardArea.classList.add("card-group");
        currentCard.classList.add("card", "card-body");
        currentTitle.classList.add("card-title");
        currentTemp.classList.add("card-text");
        currentDescr.classList.add("card-text");
        currentFeels.classList.add("card-text");
        tempLow.classList.add("card-text");        
        tempHigh.classList.add("card-text");

        //appends the weather info to each individual card
        currentCard.append(currentTitle, currentTemp, currentDescr, tempHigh, tempLow);
        cardArea.append(currentCard)
    }
    searchBtn.addEventListener('click', GO);
}