const yargs = require('yargs');
const request = require('request');
const geocode = require('./geocode/geocode');

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

console.log(argv);

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.error(errorMessage);
  } else {
    console.log(JSON.stringify(results, undefined, 2));
  }
});

request(
  {
    url: `https://api.darksky.net/forecast/11b5b63950e1aa4c305515c0efb1533a/37.8267,-122.4233`,
    json: true,
  },
  (error, response, body) => {
    if (!error && response.statusCode === 200) {
      console.log(body.currently.temperature);
    } else if (error || !(body.currently && body.currently.temperature)) {
      console.log('Unable to connect to the server.');
    } else if (response.statusCode === 400 || response.statusCode === 404) {
      console.log('Unable to fetch a forecast.');
    } else {
      console.log('Something went wrong:');
      console.log(error, response, body);
    }
  },
);
