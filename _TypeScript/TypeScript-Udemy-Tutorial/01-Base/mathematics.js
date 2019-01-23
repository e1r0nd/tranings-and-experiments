"use strict";
var Mathematics;
(function (Mathematics) {
    var PI = 3.14; // is private
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    Mathematics.calculateCircumference = calculateCircumference;
    function calculateRectangle(width, length) {
        return width * length;
    }
    Mathematics.calculateRectangle = calculateRectangle;
})(Mathematics || (Mathematics = {}));
console.log('--- Namespaces ---');
console.log(Mathematics.calculateRectangle(10, 20));
//# sourceMappingURL=mathematics.js.map