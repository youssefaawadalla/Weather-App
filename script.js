const apiKey = "d4145f2726bc70c834e05af780466cc0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  
  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
  else{
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"; 
  
    if(data.weather[0].main == "Clouds"){
      weatherIcon.src = "images/cloudy.png"
    }
    else if(data.weather[0].main == "Clear"){
      weatherIcon.src = "images/clear-sky.png"
    }
    else if(data.weather[0].main == "Rain"){
      weatherIcon.src = "images/raining.png"
    }
    else if(data.weather[0].main == "Drizzle"){
      weatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
      weatherIcon.src = "images/mist.png"
    }
    else if(data.weather[0].main == "Haze"){
      weatherIcon.src = "images/haze.png"
    }
    else if(data.weather[0].main == "Thunderstorm"){
      weatherIcon.src = "images/thunderstorm.png"
    }
    else if(data.weather[0].main == "Snow"){
      weatherIcon.src = "images/snow.png"
    }
    else if(data.weather[0].main == "Tornado"){
      weatherIcon.src = "images/tornado.png"
    }
    else if(data.weather[0].main == "Smoke"){
      weatherIcon.src = "images/smoke.png"
    }
    else if(data.weather[0].main == "Dust"){
      weatherIcon.src = "images/dust.png"
    }
    else if(data.weather[0].main == "Fog"){
      weatherIcon.src = "images/fog.png"
    }
    else if(data.weather[0].main == "Sand"){
      weatherIcon.src = "images/sandstorm.png"
    }
    else if(data.weather[0].main == "Ash"){
      weatherIcon.src = "images/ash.png"
    }
    else if(data.weather[0].main == "Squall"){
      weatherIcon.src = "images/squall.png"
    }
  
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }  
}

searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
})