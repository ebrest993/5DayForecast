let testButton = document.querySelector(".button")
let urlRequest = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=4d8f86000d241e776281dc749be197b9`;


console.log();

// ,${stateCode},${countryCode}
// testButton.addEventListener('click', GO);

GO("tonganoxie");

function GO (cityName, stateCode, countryCode, limit) {
let locationRequest = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=4d8f86000d241e776281dc749be197b9`;
fetch(locationRequest)
  .then (function (response) {
  if (!response.ok) {
    console.log(response.statusText);
  } else {
    response.json()
  .then (function(data) {

    console.log(data);
})}})}


