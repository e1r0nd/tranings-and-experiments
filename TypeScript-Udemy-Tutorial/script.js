"use strict";
console.log('It works!');
var str = 'str';
// str = 28; <- cannot be Number
var hasBool = false;
// hasBool = 1; <- has to be Boolean
var myAge;
myAge = 42;
// myAge = '42'; <- cannot be reassigned
// array
var hobbies = ['Ski', 'Dance', 'Fly'];
hobbies.push('Swimming');
// hobbies.push(42); <- cannot push Number
var anything = ['Ski'];
anything.push('Swimming');
anything.push(42); // no error is here
// tuples
var address = ['Abc str.', 42];
// address = [32, 42]; <- not valid
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor); // -> 100
// functions
function returnMyAge() {
    return myAge;
}
console.log(returnMyAge());
function hello() {
    console.log('Hello!');
}
function multiplier(a, b) {
    return a * b;
}
console.log(multiplier(2, 3));
// function types
var myMultiplier;
// myMultiplier = hello; <- not valid
myMultiplier = multiplier;
console.log(myMultiplier(3, 4));
function neverReturns() {
    throw new Error('oops');
}
// Objects
var userData = {
    name: 'Some',
    age: 42,
};
// userData = { <- cannot reassign properties ot thier types
//   a: 1,
//   b: 2,
// };
// complex object
var complex = {
    data: [3, 2, 1],
    output: function (all) {
        console.log('all:', all);
        return this.data;
    },
};
var complex1 = {
    data: [3, 2, 1],
    output: function (all) {
        console.log('all:', all);
        return this.data;
    },
};
// union types
var yourNumber = 42;
yourNumber = '42';
// yourNumber = true; // <- not valid
if (typeof yourNumber == 'string') {
    console.log(yourNumber);
}
// Nullable Types
var canBeNull = 12;
canBeNull = null;
var isUndefined;
isUndefined = null; // <- can be null
isUndefined = 42; // because it's defined as 'any'
var countdown = function (start, end) {
    if (start === void 0) { start = 10; }
    if (end === void 0) { end = start - 1; }
    if (start > 0) {
        start -= 1;
    }
    else {
        console.log('Done!');
    }
    console.log('end:', end);
};
countdown(0);
console.log('Count this:');
countdown();
//# sourceMappingURL=script.js.map