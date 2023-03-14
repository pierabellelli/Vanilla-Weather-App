function displayCity(response) {
  console.log(response.data);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  console.log(response.data.city);
}
function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  return `${day}, ${hours}:${minutes}`;
}
function displayDate(response) {
  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(response.data.time * 1000);
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
axios.get(apiUrl).then(displayDate);
axios.get(apiUrl).then(displayTemperature);
axios.get(apiUrl).then(displayHumidity);
axios.get(apiUrl).then(displayWind);
axios.get(apiUrl).then(displayCondition);
axios.get(apiUrl).then(displayPressure);
