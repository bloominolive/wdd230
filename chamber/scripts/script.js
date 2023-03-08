
const datefieldUK = document.getElementById("date");
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
dateStyle: "full"
}).format(now);
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

var date = new Date();
var year = date.getFullYear();
document.querySelector("#curYr").innerHTML = year;
let lastModified = new Date(document.lastModified);        
document.getElementById("docLastUpdated").innerHTML = lastModified


var today = new Date();
var dayOfWeek = today.getDay();

if (dayOfWeek == 1 || dayOfWeek == 2) {
  document.getElementById("meeting-banner").style.display = "block";
}



const currentDate = new Date();
const lastVisit = localStorage.getItem('lastVisit');
if (!lastVisit) {
  localStorage.setItem('lastVisit', currentDate.toString());
} else {
  const lastVisitDate = new Date(lastVisit);
  const timeDiff = currentDate.getTime() - lastVisitDate.getTime();
  const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
  document.getElementById("visits").innerHTML = `<em> ${daysDiff} </em>`;
  localStorage.setItem('lastVisit', currentDate.toString());
}

const images = document.querySelectorAll("[data-srcset]");

function preloadImage(image) {
    image.setAttribute("srcset", image.getAttribute("data-srcset"));
    image.onload = () => {
      image.removeAttribute("data-srcset");
    };
}

const imgOptions = {
    threshold : 1,
    rootMargin : "0px 0px 2px 0px"
};
  
if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, imgObserver) => {
        items.forEach(item => {
            if (item.isIntersecting) {
                preloadImage(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);
    images.forEach(image => {
        imgObserver.observe(image);
    });
}
else {
    images.forEach(image => {
        preloadImage(image);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    var hiddenField = document.getElementById("formDate");
    hiddenField.value = new Date().toISOString();
  });

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const currentWindspeed = document.getElementById("windspeed-value");
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Orlando&units=imperial&appid=396424175617be0512047c238150dea2';

async function apiFetch() {
  try {
      const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
           console.log(data); // this is for testing the call
          displayResults(data);
        } else {
          throw Error(await response.text());
         }
    } catch (error) {
        console.log(error);
      }
  }
  
apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    currentWindspeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}
const temp = parseFloat(document.getElementById("current-temp").innerHTML);


const windchill = document.getElementById("windchill");

if (temp <= 50 && windspeed > 3) {
  const result = 35.74 + 0.6215 * temp- 35.75 *(windspeed ** 0.16) + 0.4275 * temp * (windspeed ** 0.16);
  windchill.innerHTML = result.toFixed(2) + "°F";
} else {
  windchill.innerHTML = "N/A";
}

