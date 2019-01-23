const utils = require('./utils');
const assert = require('assert');

it('Should add two numbers', () => {
  const res = utils.add(3, 2);
  assert.equal(res, 5);
});
it('Should async add two numbers', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    assert.equal(sum, 7);
    done();
  });
});

it('Should square a number', () => {
  assert.equal(utils.square(2), 4);
});
it('Should async square a number', (done) => {
  utils.asynSquare(2, (res) => {
    assert.equal(res, 4);
    done();
  });
});
