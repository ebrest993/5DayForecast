let cityName = document.querySelector('#userInput');
let theButton = document.querySelector(".btn");
let urlRequest = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=4d8f86000d241e776281dc749be197b9`;

console.log();

theButton.addEventListener('click', GO);

function GO (event) {
  let locationRequest = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityName.value + '&limit=1&appid=4d8f86000d241e776281dc749be197b9';
  fetch(locationRequest)
    .then(function(response) {
      response.json();
      console.log(response)
      // document.location.replace('./search-results.html')
    }
  );
  event.preventDefault()
};
    
    
    // if(response) {
//   alert("please enter a valid city name");
// } else {
  
  //     .then (function (response) {
  //     if (!response.ok) {
  //     console.log('for the love of god');
  //   } else {
  //     response.json()
  //       .then (function() {
  //         currentTarget.preventDefault()
  //         console.log();
  //     console.log("You are here?");
  //     document.location.replace("./index.html");
  //     });
  //   }
  // })
