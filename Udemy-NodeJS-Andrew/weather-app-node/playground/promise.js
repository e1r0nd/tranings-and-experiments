const asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('not numbers');
      }
    }, 1500);
  });
};

const somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Hey, it works');
    reject('Oops...');
  }, 2500);
});

somePromise.then(
  (message) => {
    console.log('Success:', message);
  },
  (message) => {
    console.log('Error:', message);
  },
);

asyncAdd(2, 2)
  .then((result) => {
    console.log('2 + 2 =', result);
    return asyncAdd(result, 2);
  })
  .then((res) => {
    console.log('4 + 2 =', res);
    return asyncAdd(res, 'a');
  })
  .catch((message) => {
    console.log('Error: ', message);
  });
