const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

// console.log(argv);

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.error(errorMessage);
  } else {
    // console.log(JSON.stringify(results, undefined, 2));

    weather.getWeather(
      results.latitude,
      results.longtitude,
      (errorMessage, weatherResults) => {
        if (errorMessage) {
          console.log(errorMessage);
        } else {
          console.log(
            `The forecast for: ${results.address}\nIt's currently: ${
              weatherResults.temperature
            }°C. Feels like ${
              weatherResults.apparentTemperature
            }°C. There's a ${
              weatherResults.precipProbability
            }% chance of rain.\n${weatherResults.summary}`,
          );
        }
      },
    );
  }
});
