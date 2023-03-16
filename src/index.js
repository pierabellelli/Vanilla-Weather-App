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
  celsiusTemp = response.data.temperature.current;

  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  );
  iconElement.setAttribute("alt", response.data.condition.description);

  getForecast(responde.data.coordinates);
}

function search(city) {
  let apiKey = "tf432db404oa6c294f5f02645370860b";
  let place = document.querySelector("#city-input").value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${place}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
  axios.get(apiUrl).then(displayCity);
  axios.get(apiUrl).then(displayDate);
}

function displayForecast(response) {
  console.log(response.data);
  let forecastElement = document.querySelector("#forecast");

  let days = ["Thu", "Fri", "Sat", "Sun", "Mon"];

  let forecastHTML = `<div class="row">`;
  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `
      <div class="col-2">
        <div class="weather-forecast-date">${day}</div>
        <img
          src="http://openweathermap.org/img/wn/50d@2x.png"
          alt=""
          width="42"
        />
        <div class="weather-forecast-temperatures">
          <span class="weather-forecast-temperature-max"> 18° </span>
          <span class="weather-forecast-temperature-min"> 12° </span>
        </div>
      </div>
  `;
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
  console.log(forecastHTML);
  axios.get(apiUrl).then(displayForecast);
}

function getForecast(coordinates) {
  let apiKey = "tf432db404oa6c294f5f02645370860b";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${coordinates.latitude}&${coordinates.longitude}&key=${apiKey}&units=metric`;
  console.log(apiUrl);
}

function displayFahrenheitTemp(event) {
  event.preventDefault();
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let temperatureElement = document.querySelector("#temperature");
  let FahrenheitTemperature = (celsiusTemp * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(FahrenheitTemperature);
}

function displayCelsiusTemp(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.Round(celsiusTemp);
}
let celsiusTemp = null;

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemp);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemp);
