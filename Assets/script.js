let cityName = document.querySelector('#userInput');
let theButton = document.querySelector(".btn");
let rightNow = document.querySelector(".right-now");
let weatherCond = document.querySelector(".weather")
let feelsLike = document.querySelector(".feels-like");
let highTemp = document.querySelector(".high");
let lowTemp = document.querySelector(".low");
let cards = document.querySelectorAll(".card");
let icon = document.querySelector(".icon");

theButton.addEventListener('click', GO);

function GO (event) {
  const locationRequest = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityName.value + '&limit=1&appid=4d8f86000d241e776281dc749be197b9';
historyButtons (cityName);
console.log(cityName.value);
fetchInfo(locationRequest);
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
        .then(function (secRes) {
          console.log(secRes)
          sharedData (secRes, newCity);
          // for (i=0; i <= cards.length; i++) {
          //     icon.textContent = secRes.list[i].weather.icon
          //     rightNow.textContent = secRes.list[i].main.temp
          //     weatherCond.textContent = secRes.list[i].weather[0].description
          //     feelsLike.textContent = ("Feels like: " + secRes.list[i].main.feels_like)
          //     lowTemp.textContent = ('Low: ' + secRes.list[i].main.temp_min)
          //     highTemp.textContent = ('High: ' + secRes.list[i].main.temp_max)
          // }
    })
  })
    event.preventDefault();
};

function sharedData (secRes, newCity) {
  // currentWeather (newCity, secRes.list[0]);
  // forecastWeather (secRes.list);
  console.log(secRes, newCity);
}

function historyButtons(city) {
  console.log(city.value);
}