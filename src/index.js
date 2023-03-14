function displayTemperature(response) {
  console.log(response.data.temperature.current);
  console.log(response.data);
}
function displayHumidity(response) {
  console.log(response.data.temperature.humidity);
}
function displayWind(response) {
  console.log(response.data.wind.speed);
}
function displayPressure(response) {
  console.log(response.data.temperature.pressure);
}
function displayCondition(response) {
  console.log(response.data.condition.description);
}
let apiKey = "tf432db404oa6c294f5f02645370860b";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Rome&key=tf432db404oa6c294f5f02645370860b&units=metric";
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
axios.get(apiUrl).then(displayHumidity);
axios.get(apiUrl).then(displayWind);
axios.get(apiUrl).then(displayCondition);
axios.get(apiUrl).then(displayPressure);
