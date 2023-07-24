let testButton = document.querySelector(".button")
let urlRequest = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=4d8f86000d241e776281dc749be197b9';

console.log();

GO();
//     console.log("booooo");
//     var URLpull = 'www.facebook.com';
//     fetch(URLpull) 
//         .then(function (response){
//             return response.json();
// }
// );}
function GO () {
fetch(urlRequest)
  .then(function (response) {
  return response.json() // this returns a promise
})
  .then (function(data) {
    console.log(data);
})}
//   .catch(ex => {
// console.error(ex);



// testButton.addEventListener('click', GO);