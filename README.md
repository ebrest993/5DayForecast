## 5 DAY FORECAST APP ##

This application operates as follows:

First you'll see the search bar. Here you'll type your query and press "Search".

The query then fetches data from this weathermap API: 
'https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}'

From this API we extract the latitude and longitude and use them to fetch through this API:
'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}'

Using the information that follows, the prevalent weather information is displayed on a card-group component from the Bootstrap database. All cards are then shown alongside one another.



STILL TO DO:

Current weather conditions
Icon for weather condition
Save buttons to history 
Add screenshots to ReadMe.md
Add styling
