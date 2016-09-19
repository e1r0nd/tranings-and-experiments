var user_import = require ('./user');

var petya = new user_import.user_export('Петя');
var vasya = new user_import.user_export('Вася');

petya.hello(vasya);
