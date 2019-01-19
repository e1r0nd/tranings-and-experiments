"use strict";
console.log('--- Generics ---');
// Simple Generic
function echo(data) {
    return data;
}
console.log(echo('Test String'));
console.log(echo(42));
// Better Generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho('test'));
//console.log(betterEcho<number>('42')); // <- doesn't work
// Built-in Generics
var results = [1, 2.3];
results.push(0);
// results.push('a'); // <- doen't work
// Arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(['apple', 'banana']);
// Generic Types
var echo2 = betterEcho;
console.log(echo2('Some thin G'));
// Generic Class
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multipyValue;
    };
    return SimpleMath;
}());
var multiply = new SimpleMath();
multiply.baseValue = '10';
multiply.multipyValue = 20;
console.log(multiply.calculate());
//# sourceMappingURL=app.js.map