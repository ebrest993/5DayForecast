let latitude = '';
let longitude = '';
let cityName = '';
let stateCode = '';
let countryCode = '';
let limit = '';

let testButton = document.querySelector(".button")
let urlRequest = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=4d8f86000d241e776281dc749be197b9`;


console.log();


// testButton.addEventListener('click', GO);

GO();

function GO (cityName, stateCode, countryCode, limit) {
let locationRequest = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&limit=${limit}&appid=4d8f86000d241e776281dc749be197b9`;
fetch(locationRequest)
  .then (function (response) {
  if (!response.ok) {
    console.log(response.statusText);
  } else {
    response.json()
  .then (function(data) {
    console.log(data.items, cityName, stateCode, countryCode, limit);
})}})}


