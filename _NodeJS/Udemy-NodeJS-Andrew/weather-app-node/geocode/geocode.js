const request = require('request');
const mapAPI = require('../key').mapAPI; // Google Map API Key

const geocodeAddress = function(address, callback) {
  const encodedAddress = encodeURIComponent(address) || 'Krucza%2073%20Wroclaw';

  request(
    {
      url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedAddress}.json?access_token=${mapAPI}&limit=1`,
      json: true,
    },
    (error, response) => {
      if (error) {
        callback('Unable to find that address.');
        return;
      } else if (response.body.features.length === 0) {
        callback('Unable to find location.');
        return;
      } else if (response.body.status === 'REQUEST_DENIED') {
        callback(undefined, {
          address: 'Default address: Harvester, IA 50234, USA',
          latitude: 41.8962067,
          longtitude: -93.1578875,
        });
      } else if (response.body.features.length) {
        callback(undefined, {
          address: response.body.features[0].place_name,
          latitude: response.body.features[0].center[1],
          longtitude: response.body.features[0].center[0],
        });
      } else {
        callback(`Result: Unknown error!`);
      }
    },
  );
};

module.exports.geocodeAddress = geocodeAddress;
