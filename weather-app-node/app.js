const request = require('request');
const yargs = require('yargs');
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

const address = encodeURIComponent(argv.a) || 'Krucza%2073%20Wroclaw';
request(
  {
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
    json: true,
  },
  (error, response, body) => {
    if (error) {
      console.error(error.message);
      return;
    } else if (body.status === 'ZERO_RESULTS') {
      console.log('Unable to find that address.');
      return;
    }

    const results = body.results[0];
    console.log(`Address: ${results.formatted_address}`);
    console.log(`Latitude: ${results.geometry.location.lat}`);
    console.log(`Longitude: ${results.geometry.location.lng}`);
  },
);
