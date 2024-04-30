// === DOM ===
const buttonEl = document.getElementById("button");
const cityEl = document.getElementById("city");
const temperatureEl = document.getElementById("temperature");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const weatherIconEl = document.getElementById("weatherIcon");

// === EVENT LISTENER ===
buttonEl.addEventListener("click", () => {
  const inputEl = document.getElementById("input");
  const query = inputEl.value;

  // === API ===
  const key = "c2d9f4a45ead46348d6120432242904"; // Please use your own API KEY.
  const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${query}&aqi=no`;

  async function getWeather() {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    cityEl.innerText = data.location.name;
    temperatureEl.innerText = data.current.temp_c + "°C";
    humidityEl.innerText = data.current.humidity + "%";
    windEl.innerText = data.current.wind_kph + "km/h";

    const weather = data.current.condition.text;

    if(weather.includes("overcast") || weather.includes("cloudy") || weather.includes("Cloudy") || weather.includes("Overcast")){
        weatherIconEl.setAttribute("src", "./img/clouds.gif");
    } else if(weather.includes("rain") || weather.includes("Rain")|| weather.includes("drizzle") || weather.includes("Drizzle")){
        weatherIconEl.setAttribute("src", "./img/drizzle.gif");
    } else if(weather.includes("snow") || weather.includes("ice") || weather.includes("sleet") || weather.includes("Snow") || weather.includes("Ice") || weather.includes("Sleet") || weather.includes("Blizzard")){
        weatherIconEl.setAttribute("src", "./img/snowflake.gif");
    } else if(weather.includes("Mist") || weather.includes("fog") || weather.includes("Fog")){
        weatherIconEl.setAttribute("src", "./img/foggy.gif");
    }  else if(weather.includes("Thundery") ){
        weatherIconEl.setAttribute("src", "./img/thunder.gif");
    } else{
        weatherIconEl.src="./img/sun.gif";
    }
  }

  getWeather();

});
