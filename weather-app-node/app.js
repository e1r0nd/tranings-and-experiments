const request = require('request');

request(
  {
    url:
      'http://maps.googleapis.com/maps/api/geocode/json?address=Krucza%2073%20Wroclaw',
    json: true,
  },
  (error, response, body) => {
    console.log(body);
  },
);
