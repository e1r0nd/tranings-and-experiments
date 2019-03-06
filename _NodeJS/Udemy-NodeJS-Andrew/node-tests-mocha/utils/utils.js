module.exports.add = (a, b) => {
  return a + b;
};
module.exports.asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
};

module.exports.square = (x) => x * x;
module.exports.asynSquare = (x, callback) => {
  setTimeout(() => {
    callback(x * x);
  }, 1000);
};

module.exports.setName = (user, fullName) => {
  const names = fullName.split(' ');
  [user.firstName, user.lastName] = names;
  return user;
};
