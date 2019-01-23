var log = require('logger')(module);
var db = require('db');
db.connect();

var User = require ('user');

function run() {
  var petya = new User('Петя');
  var vasya = new User('Вася');

  petya.hello(vasya);

  log(db.getPhrase('Run successful'));
}

if (module.parent) {
  exports.run = run;
} else {
  run();
}
