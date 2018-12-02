const request = require('request');
const mapAPI = require('./key').mapAPI;

const geocodeAddress = function(address, callback) {
  const encodedAddress = encodeURIComponent(address) || 'Krucza%2073%20Wroclaw';

  request(
    {
      url: `https://maps.googleapis.com/maps/api/geocode/json?key=${mapAPI}&address=${encodedAddress}`,
      json: true,
    },
    (error, response, body) => {
      if (error) {
        callback('Unable to find that address.');
        return;
      } else if (body.status === 'ZERO_RESULTS') {
        callback('Unable to find that address.');
        return;
      } else if (body.status === 'REQUEST_DENIED') {
        callback(undefined, {
          address: 'Default address: Harvester, IA 50234, USA',
          latitude: 41.8962067,
          longtitude: -93.1578875,
        });
      } else if (body.status === 'OK') {
        callback(undefined, {
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longtitude: body.results[0].geometry.location.lng,
        });
      } else {
        callback(`Result: ${body.status}`);
      }
    },
  );
};

module.exports.geocodeAddress = geocodeAddress;
