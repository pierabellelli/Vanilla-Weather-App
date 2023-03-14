function displayCity(response) {
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  console.log(response.data.city);
}

function displayTemperature(response) {
  console.log(response.data.temperature.current);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
}
function displayHumidity(response) {
  console.log(response.data.temperature.humidity);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;
}
function displayWind(response) {
  console.log(response.data.wind.speed);
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
}
function displayPressure(response) {
  console.log(response.data.temperature.pressure);
  let pressureElement = document.querySelector("#pressure");
  pressureElement.innerHTML = response.data.temperature.pressure;
}
function displayCondition(response) {
  console.log(response.data.condition.description);
  let conditionElement = document.querySelector("#condition");
  conditionElement.innerHTML = response.data.condition.description;
}
let apiKey = "tf432db404oa6c294f5f02645370860b";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Rome&key=tf432db404oa6c294f5f02645370860b&units=metric";
console.log(apiUrl);
axios.get(apiUrl).then(displayCity);
axios.get(apiUrl).then(displayTemperature);
axios.get(apiUrl).then(displayHumidity);
axios.get(apiUrl).then(displayWind);
axios.get(apiUrl).then(displayCondition);
axios.get(apiUrl).then(displayPressure);
