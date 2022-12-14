let comingDays = "";
let history =[];

function displaySearched(city) {

    var openWeatherApi = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=803edff7ea43ff42bf363994620dcd18&units=imperial`;
  
    fetch(openWeatherApi)
      .then(function (response) {
      return response.json();
      }) .then(function (data) {
       
        var currentWeather = 
        ` <div class="bg-dark"> 
            <h4>Current Weather In: ${city} ${moment.unix(data.list[0].dt).format("MM/DD/YY")}</h4>   
            <img class="center" src="https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png"></img>
            <h4 class="text-center">Temperature:${data.list[0].main.temp}</h4>
            <h4 class="text-center">Humidity:${data.list[0].main.humidity}</h4>
            <h4 class="text-center">Wind Speed:${data.list[0].wind.speed}</h4>
          </div>`;
                
        document.getElementById("currentDay").innerHTML = currentWeather;

        //current weather versus coming weather

        for (let i = 1; i <= 5; i++) {
          comingDays += 
        ` <div class="col-2 m-3" >
            ${moment.unix(data.list[i].dt).format("MM/DD/YY")}
            <img src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png"></img>
            <h4>Temperature:${data.list[i].main.temp}</h4>
            <h4>Humidity:${data.list[i].main.humidity}</h4>
            <h4>Wind Speed:${data.list[i].wind.speed}</h4>
          </div>`;
            document.getElementById("otherDays").innerHTML = comingDays;
        }
      }
    )
  }

function citySearch() {
  var searchedCity=document.getElementById("Input").value;
  displaySearched(searchedCity);
}

function searchHistory() {
  var inputval = document.getElementById("Input").value;
  history.push(inputval);
  console.log(history);
  document.getElementById("searchHistory").innerHTML = "City of  " + history;
}

  
  document.getElementById("searching").addEventListener("click", citySearch);
  document.getElementById("searching").addEventListener("click", searchHistory);