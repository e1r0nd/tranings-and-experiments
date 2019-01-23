const yargs = require('yargs');
const axios = require('axios');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const mapAPI = require('./key').mapAPI; // Google Map API Key
const forecastAPI = require('./key').forecastAPI; // Forecast API Key

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true,
    },
  })
  .help()
  .alias('help', 'h').argv;

const encodedAddress =
  encodeURIComponent(argv.address) || 'Krucza%2073%20Wroclaw';
const geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?key=${mapAPI}&address=${encodedAddress}`;

// console.log(argv);

axios
  .get(geocodeURL)
  .then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
      throw new Error('Unable to find that address.');
    } else if (response.data.status === 'REQUEST_DENIED') {
      response.data.address = 'Default address: Harvester, IA 50234, USA';
      response.data.latitude = 41.8962067;
      response.data.longtitude = -93.1578875;
    }
    const lat = response.data.latitude;
    const lng = response.data.longtitude;
    const weatherURL = `https://api.darksky.net/forecast/${forecastAPI}/${lat},${lng}`;
    console.log(response.data);
    return axios.get(weatherURL);
  })
  .then((response) => {
    console.log(response);
    console.log(
      `It's ccurrently: ${response.data.currently.temperature}. Feels like ${
        response.data.currently.apparentTemperature
      }`,
    );
  })
  .catch((e) => {
    console.log(e);
  });
