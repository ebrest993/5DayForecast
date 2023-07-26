let cityName = document.querySelector('#userInput');
let theButton = document.querySelector(".btn");
let rightNow = document.querySelector(".right-now");
let weatherCon = document.querySelector(".weather")
let feelsLike = document.querySelector(".feels-like");
let highTemp = document.querySelector(".high");
let lowTemp = document.querySelector(".low");


console.log();

theButton.addEventListener('click', GO);

function GO (event) {
const locationRequest = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityName.value + '&limit=1&appid=4d8f86000d241e776281dc749be197b9';
  fetch(locationRequest)
    .then(function(response) {
      return response.json();
    })
    .then(function (newResponse) {
      const latitude = newResponse[0].lat;
      const longitude = newResponse[0].lon;
      const urlRequest = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=4d8f86000d241e776281dc749be197b9&units=imperial';
      console.log(latitude)
      console.log(longitude)
      fetch(urlRequest)
        .then(function(response) {
          return response.json()
        })
        .then(function (secRes) {
          console.log(secRes)
          for (i=0; i<=4; i++) {
            // for (j=0; j < mainTemp.length; j++) {
              rightNow.textContent = secRes.list[i].main.temp
              weatherCon.textContent = secRes.list[i].weather[0].description
              feelsLike.textContent = ("Feels like: " + secRes.list[i].main.feels_like)
              lowTemp.textContent = ('Low: ' + secRes.list[i].main.temp_min)
              highTemp.textContent = ('High: ' + secRes.list[i].main.temp_max)


            // }
          }
    })
  })
    event.preventDefault();
};