var phrases = require('./ru');

function User(name) {
  this.name = name;
}

User.prototype.hello = function(who) {
  console.log(this.name + ': ' + phrases.Hello + ', ' + who.name);
};

exports.user_export = User;
