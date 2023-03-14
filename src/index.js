function displayCity(response) {
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
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
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);

  let pressureElement = document.querySelector("#pressure");
  pressureElement.innerHTML = response.data.temperature.pressure;

  let conditionElement = document.querySelector("#condition");
  conditionElement.innerHTML = response.data.condition.description;
}
let apiKey = "tf432db404oa6c294f5f02645370860b";
let place = "London";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=London&key=tf432db404oa6c294f5f02645370860b&units=metric";
console.log(apiUrl);
axios.get(apiUrl).then(displayCity);
axios.get(apiUrl).then(displayDate);
axios.get(apiUrl).then(displayTemperature);
