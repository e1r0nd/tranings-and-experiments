const request = require('request');

request(
  {
    url:
      'http://maps.googleapis.com/maps/api/geocode/json?address=Krucza%2073%20Wroclaw',
    json: true,
  },
  (error, response, body) => {
    if (error) {
      console.error(error.message);
      return;
    }

    const results = body.results[0];
    console.log(`Address: ${results.formatted_address}`);
    console.log(`Latitude: ${results.geometry.location.lat}`);
    console.log(`Longitude: ${results.geometry.location.lng}`);
  },
);
