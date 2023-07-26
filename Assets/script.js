let cityName = document.querySelector('#userInput');
let theButton = document.querySelector(".btn");
let rightNow = document.querySelector(".right-now");
let weatherCond = document.querySelector(".weather")
let feelsLike = document.querySelector(".feels-like");
let highTemp = document.querySelector(".high");
let lowTemp = document.querySelector(".low");
let cards = document.querySelectorAll(".card");
let test = document.querySelector(".test");

theButton.addEventListener('click', GO);

function GO (event) {
  const locationRequest = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityName.value + '&limit=1&appid=4d8f86000d241e776281dc749be197b9';
  historyButtons (cityName);
  console.log();
  fetchInfo(locationRequest);
  event.preventDefault();
}  
function fetchInfo(locationRequest){
  fetch(locationRequest)
    .then(function(response) {
      return response.json();
    })
    .then(function (newResponse) {
      const latitude = newResponse[0].lat;
      const longitude = newResponse[0].lon;
      const newCity = newResponse[0].name;
      const urlRequest = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=4d8f86000d241e776281dc749be197b9&units=imperial';
      console.log(latitude)
      console.log(longitude)
      fetch(urlRequest)
        .then(function(response) {
          return response.json()
        })
        .then(function (secRequ) {
          console.log(secRequ)
          sharedData (secRequ, newCity);
        })
      })
    };
    
    function sharedData (secRequ, newCity) {
      currentWeather (newCity, secRequ.list[0]);
      // forecastWeather (secRequ.list);
      console.log();
    }
    
    function historyButtons(city) {
      console.log(city);
    }
    
    function currentWeather (newCity, data) {
      let currentCard = document.createElement("p");
      // test.append(currentCard);
      let weatherData = currentCard.textContent =
      [data.main.temp,
      data.weather[0].description,
      ("Feels like: " + data.main.feels_like),
      ('Low: ' + data.main.temp_min),
      ('High: ' + data.main.temp_max)];      
      createCard (currentCard, weatherData);
      setAttrFunc(currentCard, weatherData);
}

function setAttrFunc (currentCard) {
  currentCard.setAttribute = ("class", "card");
  currentCard.setAttribute = ("class", "card-body");
  currentCard.setAttribute = ("class", "card-title");
  currentCard.setAttribute = ("class", "weather");
  currentCard.setAttribute = ("class", "feels-like");
}

function createCard (currentCard, weatherData) {
  for (i=0; i < weatherData.length; i++) {
  weatherData = document.createElement("li");
  }
  console.log(weatherData.length);
}