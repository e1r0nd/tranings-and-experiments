const calc = require("./calc");
const numbersToAdd = [3, 4, 10, 2];

const result = calc.sum(numbersToAdd);
console.log(`The result is: ${result}`);

const _ = require("lodash");
_.assign({ a: 1 }, { b: 2 }, { c: 3 });

const file = require("./fileread");
