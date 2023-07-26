### ASK BCS SOLVE ###

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
            console.log(latitude)
            console.log(longitude)
            fetch(urlRequest)
                .then(function (response) {
                    return response.json()
                })
                .then(function (secRequ) {
                    console.log(secRequ)
                    sharedData (secRequ, newCity);
                })
        })
};

function sharedData(secRequ, newCity) {
    console.log(secRequ, newCity)
    
    currentWeather(secRequ.list, secRequ.city.name);

    // forecastWeather (secRequ.list);
    console.log();
}

function historyButtons(city) {
    console.log(city);
}

function currentWeather(data,city) {
    for (let i = 0; i < data.length; i = i + 8) {
        let currentCard = document.createElement("div");
        let currentTitle = document.createElement("h6")
        let currentBody = document.createElement("div")
        // test.append(currentCard);
        currentTitle.textContent = city
        currentBody.textContent = "Temp :"+
            data[i].main.temp + "Descirption"+
            data[i].weather[0].description + 
            ("Feels like: " + data[i].main.feels_like)+
            ('Low: ' + data[i].main.temp_min)+
            ('High: ' + data[i].main.temp_max);

        currentCard.setAttribute = ("class", "card");
        currentBody.setAttribute = ("class", "card-body");
        currentTitle.setAttribute = ("class", "card-title");
        currentCard.setAttribute = ("class", "weather");
        currentCard.setAttribute = ("class", "feels-like");
        currentCard.appendChild(currentTitle)
        currentCard.appendChild(currentBody)
        document.querySelector(".test").append(currentCard)
        console.log(data[i])
    }
}

function createCard(currentCard, weatherData) {
    for (i = 0; i < weatherData.length; i++) {
        weatherData = document.createElement("li");
    }
    console.log(weatherData.length);
}













// Create unix timestamps for start and end of 5 day forecast
  var startDt = dayjs().add(1, 'day').startOf('day').unix();
  var endDt = dayjs().add(6, 'day').startOf('day').unix();
//rename dailyForecast to whatever you call your array in js:48
for (var i = 0; i < dailyForecast.length; i++) {

    // First filters through all of the data and returns only data that falls between one day after the current data and up to 5 days later.
    if (dailyForecast[i].dt >= startDt && dailyForecast[i].dt < endDt) {

      // Then filters through the data and returns only data captured at noon for each day.
      if (dailyForecast[i].dt_txt.slice(11, 13) == "12") {
        renderForecastCard(dailyForecast[i]);
      }
    }
  }


Path Forward


Pseudo code to Get Location Coordinates (Geo Call):

Function: getLocationCoordinates(city)
Input: city (string) - The name of the city for which you want to get the coordinates.
Output: Promise that resolves to an object containing latitude and longitude.

Step 1: Construct the API URL using the city parameter and your API key.
Step 2: Fetch data from the API using the constructed URL.
Step 3: Check if the response is successful (HTTP status code 200).
Step 4: Parse the response data to get the latitude and longitude from the API response.
Step 5: Return a Promise that resolves to an object containing latitude and longitude.
Step 6: Handle any errors that may occur during the API call or parsing process.
Explanation:
• The function takes the city as input, which is the name of the city for which you want to retrieve the location coordinates.
• It constructs the API URL by combining the city name and your API key, then makes a fetch call to the OpenWeatherMap API using this URL.
• After fetching the data, it checks if the response is successful (HTTP status code 200) to ensure the data is valid.
• Next, it parses the API response to extract the latitude and longitude information.
• The function returns a Promise that resolves to an object containing the extracted latitude and longitude.
• If any errors occur during the API call or parsing process, the function handles them appropriately, such as logging the error or returning a default value.



Pseudo code to Get 5-Day Forecast (5 Day Forecast Call):


Function: get5DayForecast(latitude, longitude)

Input: latitude (number) - The latitude of the location.
       longitude (number) - The longitude of the location.
Output: Promise that resolves to the 5-day forecast data.

Step 1: Construct the API URL using the latitude, longitude, and your API key.
Step 2: Fetch data from the API using the constructed URL.
Step 3: Check if the response is successful (HTTP status code 200).
Step 4: Parse the response data to extract the 5-day forecast information.
Step 5: Return a Promise that resolves to the 5-day forecast data.
Step 6: Handle any errors that may occur during the API call or parsing process.
Explanation:
• The function takes latitude and longitude as inputs, which are the coordinates of the location for which you want to retrieve the 5-day forecast.
• It constructs the API URL using the provided latitude, longitude, and your API key, then makes a fetch call to the OpenWeatherMap API using this URL.
• After fetching the data, it checks if the response is successful (HTTP status code 200) to ensure the data is valid.
• Next, it parses the API response to extract the 5-day forecast information.
• The function returns a Promise that resolves to the extracted 5-day forecast data.
• If any errors occur during the API call or parsing process, the function handles them appropriately, such as logging the error or returning a default value.
By creating these two functions, you can use them together to fetch location coordinates using the geo call and then use those coordinates to get the 5-day forecast data from the API. Remember to handle errors and provide appropriate error messages or fallback values to ensure a smooth user experience.










# 06 Server-Side APIs: Weather Dashboard

## Your Task

Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

Use the [5 Day Weather Forecast](https://openweathermap.org/forecast5) to retrieve weather data for cities. The base URL should look like the following: `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`. After registering for a new API key, you may need to wait up to 2 hours for that API key to activate.

**Hint**: Using the 5 Day Weather Forecast API, you'll notice that you will need to pass in coordinates instead of just a city name. Using the OpenWeatherMap APIs, how could we retrieve geographical coordinates given a city name?

You will use `localStorage` to store any persistent data. For more information on how to work with the OpenWeather API, refer to the [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![The weather app includes a search option, a list of cities, and a five-day forecast and current weather conditions for Atlanta.](./Assets/06-server-side-apis-homework-demo.png)

## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

    * Uses the OpenWeather API to retrieve weather data.

    * Uses `localStorage` to store persistent data.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository that contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the Challenge instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a readme describing the project.

- - -
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
