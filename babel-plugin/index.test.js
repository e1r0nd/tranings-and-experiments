'use strict';
var transformFileSync = require('babel-core').transformFileSync;
var path = require('path');
var fs = require('fs');
var assert = require('assert');

var plugin = require('./dist/index').default;

var tests = [{ file: 'simple' }, { file: 'complex' }];
// var tests = [{ file: 'simple' }];
describe('transform code', function() {
  tests.forEach(function(test) {
    it(`Test: ${test.file}`, function(done) {
      var transform = transformFileSync(`test-cases/${test.file}.js`, {
        plugins: [[plugin, test.options]],
        babelrc: false, // Don't get babelrc from whole project
      }).code;
      var expected = fs
        .readFileSync(path.join(__dirname, `test-cases/${test.file}-result.js`))
        .toString();
      assert.equal(transform, expected);
      done();
    });
  });
});
