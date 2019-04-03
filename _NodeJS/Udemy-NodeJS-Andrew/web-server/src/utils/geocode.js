const request = require('request');
const mapAPI = require('../key').mapAPI; // Google Map API Key

const geocodeAddress = function(address, callback) {
  const encodedAddress = encodeURIComponent(address) || 'Krucza%2073%20Wroclaw';

  request(
    {
      url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedAddress}.json?access_token=${mapAPI}&limit=1`,
      json: true,
    },
    (error, /* response: */ { body }) => {
      if (error) {
        callback('Unable to find that address.');
        return;
      } else if (body.features.length === 0) {
        callback('Unable to find location.');
        return;
      } else if (body.status === 'REQUEST_DENIED') {
        callback(undefined, {
          address: 'Default address: Harvester, IA 50234, USA',
          latitude: 41.8962067,
          longtitude: -93.1578875,
        });
      } else if (body.features.length) {
        const { place_name, center } = body.features[0];
        callback(undefined, {
          address: place_name,
          latitude: center[1],
          longtitude: center[0],
        });
      } else {
        callback(`Result: Unknown error!`);
      }
    },
  );
};

module.exports.geocodeAddress = geocodeAddress;
