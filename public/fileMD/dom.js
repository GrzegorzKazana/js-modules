const aqValue = document.getElementById("aq-value");
const aqParam = document.getElementById("aq-param");
const aqCity = document.getElementById("aq-city");
const message = document.getElementById("message");

function hideLoader() {
  message.innerText = "";
}

function presetAirQuality(result) {
  aqValue.innerText = result.value;
  aqParam.innerText = result.parameter;
  aqCity.innerText = result.city;
}

function showError() {
  message.innerText = "An error occured 😞";
}
