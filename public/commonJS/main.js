const { hideLoader, presetAirQuality, showError } = require("./dom");

const api = `https://api.openaq.org/v1/measurements`;
const params = `
        country=PL
        parameter=pm25
        order_by[]=date.local&order_by[]=value
        sort[]=asc&sort[]=desc
    `
  .split("\n")
  .map(s => s.trim())
  .filter(Boolean)
  .join("&");

const url = `${api}?${params}`;

fetch(url)
  .then(r => r.json())
  .then(handleResponse)
  .catch(showError);

function handleResponse({ results: [head] }) {
  if (head) {
    hideLoader();
    presetAirQuality(head);
  } else {
    showError();
  }
}
