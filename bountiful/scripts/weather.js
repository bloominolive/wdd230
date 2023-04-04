const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.getElementById('weather-icon');
const currentHumidity = document.getElementById("humidity");
const weatherDesc = document.getElementById('weather-desc');
const threeDayForecast = document.getElementById("three-day-forecast");

const url = 'http://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&cnt=28&appid=396424175617be0512047c238150dea2';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(weatherData) {
  
  const temp = parseFloat(weatherData.list[0].main.temp.toFixed(0));
  const humidity = parseFloat(weatherData.list[0].main.humidity.toFixed(0));
  const desc = weatherData.list[0].weather[0].description;
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;


  currentTemp.innerHTML = `<strong>${temp}</strong>`;
  currentHumidity.innerHTML = `<strong>${humidity}%</strong>`;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  weatherDesc.innerHTML = `${desc}`;

  
  displayForecast(weatherData);
}

function displayForecast(forecastData) {
    const forecastContainer = document.getElementById('three-day-forecast');
    forecastContainer.innerHTML = '';
    const today = new Date((forecastData.list[0].dt + forecastData.city.timezone) * 1000);
    let dayToAdd = 1;
      for (let i = 1; i < forecastData.list.length; i++) {
        const forecast = forecastData.list[i];
        const date = new Date((forecast.dt + forecastData.city.timezone) * 1000);
        const newdate = new Date(today.getTime());
        newdate.setDate(newdate.getDate() + dayToAdd);
        if (date.getDay() == newdate.getDay() && forecast.dt_txt.includes('18:00:00'))
        {
          const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
          console.log(dayOfWeek);
          const temp = parseFloat(forecast.main.temp.toFixed(0));
          const iconSrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
      
          const forecastElement = document.createElement('div');
          forecastElement.classList.add('forecast-day');
      
          forecastElement.innerHTML = `
            <div class="forecast-header">${dayOfWeek}</div>
            <img class="forecast-icon" src="${iconSrc}" alt="${forecast.weather[0].description}">
            <div class="forecast-temp">${temp}°F</div>`;
      
          forecastContainer.appendChild(forecastElement);
          dayToAdd++;
        }
    }
  }
apiFetch();