let cityName = document.querySelector('#userInput');
let theButton = document.querySelector(".btn");

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
      const urlRequest = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude.value + '&lon=' + longitude.value + '&appid=4d8f86000d241e776281dc749be197b9';
      console.log(latitude)
      console.log(longitude)
      fetch(urlRequest)
        .then(function(response) {
          return response.json()
          .then(function (newResponseAgain) {
            console.log(newResponseAgain)
    });
      })
      })
    event.preventDefault();
  };