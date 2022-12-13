# weather-dashboard-06

This is a five day weather application for anyone who cares to view todays weather and the coming five days. The application utilizes the Open Weather Api to grab forcasts from any city in the world, all you have to do is input what city you would like to view and click search, then you will have a works week forcast along with todays weather.


## Acceptance Criteria 
```
GIVEN a weather dashboard with form inputs WHEN I search for a city THEN I am presented with current and future conditions for that city and that city is added to the search history WHEN I view current weather conditions for that city THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed WHEN I view future weather conditions for that city THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity WHEN I click on a city in the search history THEN I am again presented with current and future conditions for that city
```

## API Reference

```
{
  "lat": 39.31,
  "lon": -74.5,
  "timezone": "America/New_York",
  "timezone_offset": -18000,
  "current": {
    "dt": 1646318698,
    "sunrise": 1646306882,
    "sunset": 1646347929,
    "temp": 282.21,
    "feels_like": 278.41,
    "pressure": 1014,
    "humidity": 65,
    "dew_point": 275.99,
    "uvi": 2.55,
    "clouds": 40,
    "visibility": 10000,
    "wind_speed": 8.75,
    "wind_deg": 360,
    "wind_gust": 13.89,
    "weather": [
      {
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03d"
      }
    ]
  },

Returns all sorts of information on the forcast of the searched city.

```

## Demo

 https://devgomez1.github.io/weather-dashboard-06/


## 🔗 Links

 Github: https://github.com/devgomez1
