const request = require('request');
const forecastAPI = require('../key').forecastAPI; // Forecast API Key

const getWeather = (lat, lng, callback) => {
  request(
    {
      url: `https://api.darksky.net/forecast/${forecastAPI}/${lat},${lng}`,
      json: true,
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature,
        });
      } else if (error || !(body.currently && body.currently.temperature)) {
        callback('Unable to connect to the server.');
      } else if (response.statusCode === 400 || response.statusCode === 404) {
        callback('Unable to fetch a forecast.');
      } else {
        console.log('Something went wrong:');
        callback(error, response, body);
      }
    },
  );
};

module.exports.getWeather = getWeather;
