const temp = parseFloat(document.getElementById("temp").innerHTML);
const windspeed = parseFloat(document.getElementById("windspeed").innerHTML);
const windchill = document.getElementById("windchill");

if (temp <= 50 && windspeed > 3) {
  const result = 35.74 + 0.6215 * temp- 35.75 *(windspeed ** 0.16) + 0.4275 * temp * (windspeed ** 0.16);
  windchill.innerHTML = result.toFixed(2) + "°F";
} else {
  windchill.innerHTML = "N/A";
}
