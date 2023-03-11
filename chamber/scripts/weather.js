const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.getElementById('weather-icon');
const currentWindspeed = document.getElementById("windspeed-value");
const weatherDesc = document.getElementById('weather-desc');
const windChill = document.getElementById("windchill-value");

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Orlando&units=imperial&appid=396424175617be0512047c238150dea2';

async function apiFetch() {
  try {
      const response = await fetch(url);
      if (response.ok) 
        {
          const data = await response.json();
          console.log(data);
          displayResults(data);
        } 
        else 
        {
          throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
  }
  
apiFetch();

function displayResults(weatherData) {
    const temp = parseFloat(weatherData.main.temp.toFixed(0));
    const windSpeed = parseFloat(weatherData.wind.speed.toFixed(0));
    const desc = weatherData.weather[0].description;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

    currentTemp.innerHTML = `<strong>${temp}</strong>`;
    currentWindspeed.innerHTML = `<strong>${windSpeed}</strong>`;
   
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherDesc.innerHTML = `${desc}`;

    if (temp <= 50 && windSpeed > 3) {
      const result = 35.74 + 0.6215 * temp - 35.75 * (windSpeed ** 0.16) + 0.4275 * temp * (windSpeed ** 0.16);
      windChill.innerHTML = result.toFixed(2) + "°F";
    } else {
      windChill.innerHTML = "N/A";
    } 
}
