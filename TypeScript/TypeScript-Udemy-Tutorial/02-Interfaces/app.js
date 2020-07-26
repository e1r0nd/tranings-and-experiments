"use strict";
console.log('--- Interfaces ---');
function greet(person) {
    console.log("Hello, " + person.name);
}
function changeName(person, newName) {
    person.name = newName;
}
var someone = {
    name: 'Max',
    age: 42,
};
greet(someone);
changeName(someone, 'Anna');
greet(someone);
greet({
    name: 'Sam',
    age: 42,
    type: 'user',
});
var namedPerson = {
    name: 'newPerson',
    age: -1,
    // hobbies: ['sports', 'spelling'], //<- an array is not described in the Interface
    hobby: 'sleeping',
};
var newPerson = {
    name: 'newPerson',
    sayHello: function (what) {
        console.log(name + " says " + what);
    },
};
newPerson.sayHello('=)');
var SuperUser = /** @class */ (function () {
    function SuperUser() {
        this.name = '';
        this.age = 0;
        this.uid = -1;
    }
    return SuperUser;
}());
var myUser = new SuperUser();
myUser.name = 'admin';
myUser.uid = 999;
console.log(myUser);
var accumulator = function (a, b) { return a + b; };
console.log("Sum of 2 and 3 = " + accumulator(2, 3));
var oldGranny = {
    name: 'Suzi',
    age: 90,
};
console.log(oldGranny);
//# sourceMappingURL=app.js.map